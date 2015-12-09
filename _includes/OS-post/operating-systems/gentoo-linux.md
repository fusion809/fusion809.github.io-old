## Gentoo Linux
{% include OS-post/os-shot.html image="Gentoo-Linux-12.0.jpg" float="none" description="Gentoo Linux 12.0, taken from Wikimedia Commons" width="1150px" %}

### Background
{% include OS-post/os.md os="Gentoo Linux" dw="gentoo" d="https://www.gentoo.org/downloads/" bugs="https://bugs.gentoo.org/" irc="https://www.gentoo.org/get-involved/irc-channels/all-channels.html" ml="https://www.gentoo.org/get-involved/mailing-lists/all-lists.html" wiki="https://wiki.gentoo.org/wiki/Main_Page" wp="Gentoo Linux" docs="https://wiki.gentoo.org/wiki/Main_Page" url="https://www.gentoo.org/" %} is an independent Linux distribution that was originally known as **Enoch Linux** and founded in 1999 by a Canadian-born American computer programmer and software engineer named [Daniel Robbins](https://en.wikipedia.org/wiki/Daniel_Robbins_(computer_programmer)). As far as Linux distributions go, it is, in my limited experience, the most difficult-to-use and to setup Linux distribution around. This is because its package management system, **Portage**, while incredibly powerful is also slow, difficult-to-learn and difficult-to-use.

Unlike most package managers Portage installs software primarily (although binary installs are also possible) from source code using instructions found in specialized Bash scripts known as **ebuilds**. Installing software from source code optimizes the control users have over their system, as it means that features they want they can enable in a package when they configure its source code, while features they do not want they can also disable at the configure stage. Unfortunately, however, compiling software from source code also means that software installation takes longer than it would if one were installing from a binary package instead. Gentoo Linux's name refers to the gentoo penguins, a species of penguin renowned for their speed. See by compiling its software from source code it was hoped that this would optimize the software's performance once installed.

The non-profit foundation that supports the development of Gentoo Linux, the Gentoo Foundation, was founded in 1999 by Robbins. The first stable release of Gentoo Linux was made in 2002. Daniel Robbins later left the project in 2004 to create a new Linux distribution called Funtoo Linux (which is derived from Gentoo) which it is my understanding one must pay for, in order to use it. In its early days Gentoo was actually one of the most popular Linux distributions around, at least according to *DistroWatch*, but with time its popularity fell (presently it is ranked 41st according to *DistroWatch*, for popularity) as fewer and fewer people had the skill, inclination and the time to build their system from the ground up with Portage. In fact, I do not even have the skill to install Gentoo manually, instead I took the easy way out and used [Packer](https://github.com/d11wtq/gentoo-packer) to build a virtual machine with it installed. Even with the assistance of Packer I am struggling to use Gentoo Linux because of Portage-related difficulties (see the package management section for details).

The power and versatility of Portage is best illustrated by the mere fact that Gentoo is second only to Debian in the number of architecture types it has been ported to. Portage has even been ported to non-Linux &#42;nix operating systems, including:
* The &#42;BSDs including FreeBSD, NetBSD and OpenBSD.
* Darwin
* GNU (with the Herd kernel)
* OS X

I think of Gentoo Linux as essentially a more complex, customizable and portable version of Arch Linux. See like Arch, a fresh installation has nothing but the command-line and some basic packages to it and anything more than this must be built from the ground-up by the user. Arch Linux's package manager, pacman, uses binary packages and does not give one a choice of which features of the package is built and which are not, while Gentoo's Portage, gives one all the choice of which features of the package will be built.

### Package Management
As previously mentioned Portage ([`emerge`](/man/emerge.1.html) from the command-line) is the package manager of Gentoo Linux although several derivatives of Gentoo Linux also use Portage. Portage is written in Python and Bash script &mdash; according to [GitHub](https://github.com/gentoo/portage) these languages make up 93.6% and 6.4% of Portage's source code, respectively, as of {{ page.date | date: "%d %B %Y" }}.

Portage was inspired by the BSD ports system, the most significant differences are that Portage automates installation for one (unlike the ports system where you need to cd to the port directory and run {% include coders.html line1="make install" %}) and also includes several advanced features including fake installs, safe unmerging, system profiles, virtual packages, dependency-resolution, config file management, *etc.* Another key difference from BSD ports is that Portage uses a type of specialized Bash script known as an ebuild to tell Portage how to build a program. ebuild writing I must say, is much more complicated than writing a PKGBUILD. This is because ebuilds include several special functions that are only used by Portage, which while they can make things simpler for those that know what they are doing, they can be difficult to learn and intimidating to see, for newcomers. PKGBUILDs, however, are usually more simple than ebuilds as they have fewer special functions.

ebuilds for Portage are stored in the **Portage Tree** and other **Gentoo Portage overlays** (GPOs). The Portage Tree contains the best-tested and most scrutinously-analysed ebuilds, while the GPOs contain user-written ebuilds that may, or may not, be safe to use as they have not been as rigorously tested. The Portage Tree presently contains over 18,750 distinct ebuilds and the GPOs contains approximately 25,450 distinct ebuilds, not including the different versions of the same package. The Gentoo Foundation has created its own tool for maintaining GPOs that is called **Layman** ([`layman`](/man/layman.8.html) from the command-line). This tool has a list of GPOs maintained by the Gentoo Foundation (the Layman remote list), that a new overlay can be added to by requesting its addition at the Gentoo bugzilla. Some (but not all) GPOs are in the Layman remote list and hence can be added using {% include coders.html line1="layman -a &lt;OVERLAY&gt;" %} where `<OVERLAY>` is the overlay's name as it appears in the Layman remote list. For example, to add my GPO, [`sabayon-tools`](https://github.com/fusion809/sabayon-tools), one would run {% include coders.html line1="layman -a sabayon-tools" %}.

Here are some example Bash scripts to simplify using Layman and Portage:

```bash
##############################################
              # cd functions #
##############################################
# cd to keywords directory
function cdk {
  mkdir /etc/portage/package.keywords
  cd /etc/portage/package.keywords
}

# cd to mask directory
function cdm {
  mkdir /etc/portage/package.mask
  cd /etc/portage/package.mask
}

# cd to use flag directory
function cdu {
  mkdir /etc/portage/package.use
  cd /etc/portage/package.use
}

##############################################
              # emerge functions #
##############################################
# Install a package, but ask first
function ema {
  sudo emerge -av $@
}

# Install a package and build binary
function emb {
  sudo emerge -avb $@
}

alias bpkg=emb

# Build a binary (.tbz2) package to /usr/portage/packages/$CAT ($CAT is the package's category),
# but do not install it
function emB {
  sudo emerge -avB $@
}
alias bpkgo=emB

# Test for dependencies
function emdt {
  sudo emerge -deptest $@
}

# Install from list.txt
function eml {
  sudo emerge -av $(cat "$1".txt)
}

# Install package dependencies only and ask before doing so. e.g., emo enlightenment
# would install all of enlightenment's dependencies.
function emo {
  sudo emerge -aov $@ && spm
}

# Pretend to install a package
function emp {
  sudo emerge -pv $@
}

# rev-dep
function emrv {
  sudo revdep-rebuild
}

# Unmerge a package, does not the dependency tree
function emrm {
  sudo emerge -C $@ && spm
}

alias emc=emrm

# Sync Portage Tree and all Layman overlays.
function ems {
  sudo emerge --sync --quiet && sudo layman -Sq
}

alias sync=ems

# Updates all packages in Portage
function emup {
  sudo emerge -uDU --with-bdeps=y @world
}

##############################################
                  # Other #
##############################################
# Search categories
function cats {
  sudo eix -C -c "$@"
}

alias eixcc=cats
alias eicc=cats

##############################################
           # edit config files #
##############################################
# nano keywords
function nkey {
  sudo nano /etc/portage/package.keywords/gentoo.keywords
}

# nano mask
function nmask {
  sudo nano /etc/portage/package.mask/gentoo.mask
}

# nano USE flags
function nuse {
  sudo nano /etc/portage/package.use/gentoo.use
}

# Track the download progress of packages being installed with Portage
function tailf {
  tail -f /var/log/emerge-fetch.log
}
```

Running the `emup` function is what gives the issues I previously mentioned in this post. See often when I run this command I get error messages regarding package conflicts that would occur if an upgrade is performed and what is worse is that this happens on every Gentoo and Sabayon (a Gentoo derivative that is covered later in this post) installation I have ever run this command on. I sort of know how to resolve this problem (a trial and error game with masking packages, changing USE flags and keywords, *etc.*) but since the number of package conflicts this message mentions is often so much that it cannot even fit the list in the limited memory of my terminal emulator, it would probably take me weeks to make the adjustments needed, so quite often I just give up.

{% include OS-post/specs.md arch="i486, i586, i686, x86_64, alpha, arm, hppa, mips, powerpc, ppc64, sparc64." origin="U.S.A." date="1999 (Gentoo Foundation, year of founding) or 2002 (year Gentoo 1.0 was first released). Depending on how you define it." shell="Bash." ui="Command-line." im="From live media or from stage tarballs." type="Linux." pm="Portage" rm="Rolling." tm="Advanced users, that have a lot of time on their hands and patience, and want to build their system from the ground-up." %}

{% include OS-post/os-min.md cpu="i486" ram="256 MB" HDD="2.75 GB (including swap)" ims="~200 MB" %}

{% include OS-post/gentoo-ratings.md %}
