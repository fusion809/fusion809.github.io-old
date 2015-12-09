## Sabayon Linux
{% include OS-post/os-shot.html image="Sabayon-Linux-GNOME-3.png" description="Sabayon Linux with the GNOME 3 desktop." width="1150px" float="none" %}

### Background
{% include OS-post/os.md os="Sabayon Linux" url="http://www.sabayon.org/" docs="https://wiki.sabayon.org/index.php?title=En:Main_Page" forum="https://forum.sabayon.org/" ircs="sabayon" ml="https://lists.sabayon.org/mailman/listinfo" bugs="https://bugs.sabayon.org/" wiki="https://wiki.sabayon.org/index.php?title=En:Main_Page" gr="Sabayon" dw="sabayon" %} is an Italian Linux distribution that is based on Gentoo and is designed to be more beginner-friendly and out-of-the-box than its parent distribution. It features its own binary package manager called [**Entropy**](https://wiki.sabayon.org/index.php?title=En:Entropy) ([`equo`](/man/equo.1.html) from the command-line and its Rigo graphical front-end), although it also has the Portage package manager of Gentoo available for use by more advanced users. Additionally it uses Calamares as its graphical installer (although up until September 2015 it used the Anaconda installer of Fedora instead), as opposed to Gentoo which must be manually installed by the user, following steps outlined at the Gentoo Wiki.

It was first founded in 2005 by Fabio Erculiani, an Italian software engineer and it is now maintained by a team of less than 20 developers (this number is based on the number of people in the {% include irc.html channel="sabayon-dev" %} IRC channel, if anyone is wanting to know my sources) whom mostly (if not all of them) reside in continental Europe, including Erculiani. Despite this fact the official language for the main forums (although localized versions exist for a variety of different languages), along with its IRC channels, bugzilla and press releases is English. Now what Erculiani predominantly does for Sabayon, from what I can tell (as after all I am not a Sabayon developer so I do not know what happens behind the scenes), is he develops official kernel images for Sabayon and he works on the Entropy package manager which both have ebuilds in the [`sabayon-distro`](https://github.com/Sabayon/sabayon-distro) Portage overlay. Two additional people work on maintaining the Entropy repositories, although until recently a bot was being used to do much of this maintenance and a total of eight people have write access to Sabayon's GitHub repositories (which includes Erculiani and one of the two Entropy repository maintainers, Joost Ruis).

Currently it is ranked 32nd for popularity according to the *DistroWatch* website, although it is worthwhile noting that between 2007 and 2010 it managed to appear in the top 10 list of *DistroWatch* in terms of its popularity. I personally think it deserves much more popularity than it presently has, because it is like the lovechild of Ubuntu and Gentoo Linux, with Ubuntu's beginner-friendliness and Gentoo Linux's customizability, rolling release model and power. I suspect the reason why its popularity on the *DistroWatch* website dropped is because its popularity was highest during the early days of its binary package manager, Entropy (which had its first stable release in 2012[^5] and first unstable release in 2007[^6]), when most users would have to rely significantly on Portage for package management, hence deterring users from using Sabayon in a similar manner to how Portage turned users off Gentoo a few years previously.

It currently only supports 64-bit processors, although ARM support (for Raspberry Pi computers) is planned to become available in the near future and 32-bit (x86) processors were supported until 2014.[^7]

### Package Management
As previously mentioned Sabayon uses both Entropy and Portage package managers, with Entropy being the only one that is officially supported by the Sabayon community. In other words, from what I can tell, if you use Portage you are on your own as far as the Sabayon community is concerned. There are over 13,100 distinct (not including different package versions) binary packages in the Entropy repositories.

Entropy uses `.tbz2` binary packages compiled using Portage (and converted from Portage to Entropy packages using the command {% include coders.html line1="equo pkg inflate &lt;PACKAGE&gt;" %}) and like Portage it is written in Python and Bash script. The ebuilds used to generate these binary packages are found in the Portage Tree as well as the [`sabayon`](https://github.com/Sabayon/for-gentoo) and `sabayon-distro` repositories maintained by the Sabayon development team. The `sabayon` overlay contains miscellaneous ebuilds that are potentially as useful to Gentoo users as they are for Sabayon users (in other words they are not specific to Sabayon), while `sabayon-distro` contains ebuilds for system software components (e.g., the kernel and the Entropy package manager) that are specific to Sabayon.

Here are some example shell scripts for automating some common actions with `equo`:
```bash
# Test for missing dependencies and then install them
function seqd {
	sudo equo deptest
}

alias deptest=seqd

# Test for missing dependencies, quiet the output
function seqdq {
	sudo equo deptest -q
}

alias deptestq=seqdq

# Install a package with Entropy, ask first.
function seqi {
	sudo equo i -av $@
}

alias install=seqi
alias ins=seqi

# Reinstall dependencies of package along with the package itself and all deep
# dependencies
function seqid {
	sudo equo i -av --deep --empty $@
}

alias ined=seqid

# Perform a libtest (looking for missing libraries) with Entropy.
function seql {
	sudo equo libtest -q
}

alias libtest=seql
alias lt=seql

# Quiet libtest
function seqlq {
	sudo equo libtest -q
}

alias libtestq=seqlq
alias ltq=seqlq

# Mask a package
function seqm {
	sudo equo mask $@
}

alias mask=seqm

# Install package dependencies (and only the dependencies) with Entropy
function seqo {
	sudo equo i -aov $@
}

alias build-dep=seqo
alias builddep=seqo
alias bdep=seqo

# Inflate Portage binary into SPM binary.
function seqpi {
	pushd /usr/portage/packages/$1
	sudo equo pkg inflate $2
	popd
}

alias smart=seqpi
alias seqp=seqpi

# Remove a package with Entropy and all packages that depend on said package
# Ask first. It is advisable to ask first, because sometimes this can remove
# packages you want.
function seqr {
	sudo equo rm -av $@
}

alias remove=seqr
alias rem=seqr

# Perform standard bug fixes with Entropy, checking for missing libraries and dependencies.
function seqt {
	spm && sudo equo libtest && sudo equo deptest
}

# Update all packages installed with Entropy and make Entropy acknowledge emerged packages
function sequ {
	spm && sudo equo update && sudo equo upgrade --purge && sudo equo cleanup
}

alias update=sequ
alias upgrade=sequ

# Make Entropy acknowledge the existance of emerged (installed with Portage) packages
function spm {
	sudo equo rescue spmsync
}

alias spmsync=spm
alias seqrs=spm
alias seqs=spm

# List packages available in the three main Entropy Repositories
# Note this requires these repos to be enabled on your system

# sabayonlinux.org repo
function sabo {
	sudo equo query list available --quiet sabayonlinux.org | sort | uniq | wc -l
}

# sabayon-limbo repo
function sabl {
	sudo equo query list available --quiet sabayon-limbo | sort | uniq | wc -l
}

# sabayon-weekly repo
function sabw {
	sudo equo query list available --quiet sabayon-weekly | sort | uniq | wc -l
}
```

{% include OS-post/specs.md arch="x86_64." origin="Italy." date="2005." shell="Bash." ui="None (SpinBase/Server edition), Fluxbox (Minimal edition), GNOME, KDE, MATE and Xfce." base="Gentoo Linux." im="Graphical from live media. A tarball for chroots is also available." type="Linux." pm="Entropy and Portage." rm="Rolling." tm="Linux newcomers, experienced users that are too lazy to compile all their software using Gentoo, etc." %}

{% include OS-post/os-min.md cpu="x86_64." ram="512 MB. 1024 MB preferable." hdd="20 GB minimum, 30 GB preferable." ims="569 MB (SpinBase edition), 588 MB (tarball), 934 MB (Server edition)." %}

{% include OS-post/os-ratings.md bf="8-9." cmb="8." doc="5. Some original documentation exists, but it is not top-notch at the moment." sup="6. I have used their forums several times and I must say it is not top-notch, in terms of response times and response quality. Plus the mere fact there is no official support for Portage means for Portage-related queries you must resort to asking on the Gentoo forums or Gentoo IRC channel. Both of which are geared for more experienced users than that required to use Sabayon Linux." pm="&geq;8. The combination of Entropy and Portage package managers makes it one of my favourite distros for package management." sru="8. Fairly fast and lower on requirements, except for its processor and HDD requirements." sb="8. Fairly stable, I have noticed some bugs but only after I installed it on my hard drive." mewi="9. I have installed it on my hard drive." oa="9. I love it, it is my favourite distribution at the moment." %}
