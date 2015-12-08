## Fedora
{% include OS-post/os-shot.html image="Fedora-23-GNOME.png" width="1150px" float="none" description="Fedora 23 with its default GNOME 3.18 desktop" %}

### Background
{% include OS-post/os.html ask="https://ask.fedoraproject.org/" bugs="https://bugzilla.redhat.com/" wiki="https://fedoraproject.org/wiki/Fedora_Project_Wiki" ml="https://fedoraproject.org/wiki/Communicating_and_getting_help#Mailing_Lists" irc="https://fedoraproject.org/wiki/Communicating_and_getting_help#IRC_for_interactive_community_support" forum="http://fedoraforum.org/" wp="Fedora (operating system)" os="Fedora" docs="https://docs.fedoraproject.org/en-US/index.html" dw="fedora" d="https://torrent.fedoraproject.org/" url="http://getfedora.org/" %}, previously known as **Fedora Core** is a Linux distribution that was first founded in 2003 as a free continuation of the proprietary Red Hat Linux (RHL) distribution. It is developed by the Fedora Project, which is funded by Red Hat. Fedora, like its parent, uses RPM packages and originally used yum as its default package manager, until the release of Fedora 22 (F22) in May 2015 when it was replaced with a libsolv-based rewrite of it called [**DNF**](http://dnf.baseurl.org/). Its chief distinguishing characteristic, in my books, is that despite the fact it follows a fixed (or standard) release model, with new releases every 6-12 months, its system and desktop software is nearly always the latest stable versions available. For example, Fedora 23 (F23) ships with the 4.2 release of the Linux kernel and the 3.18 release of the GNOME desktop. Most Linux distributions that follow a fixed release model use the long-term stable (LTS) releases of the Linux kernel and other system software, for example, openSUSE 42.1 (released within a week of Fedora 23) shipped with the 4.1 kernel, because it is the latest LTS kernel available. Fedora is also the Linux distribution that is used by Linus Torvalds &mdash; the original developer of the Linux kernel.

I personally find it a distribution that is somewhere between Ubuntu and Arch Linux, in terms of difficulty of use, with respect to most things anyway. See like Ubuntu and unlike Arch Linux it has several different editions with a preinstalled desktop environment and additional out-of-the-box support. It also has an official graphical package management system (**PackageKit**) and a command-line package management system (DNF), which contributes to it being more user-friendly than Arch Linux, but what makes it more difficult than Ubuntu, in my opinion, is that its documentation is less comprehensive, its Wiki is more outdated and lastly support via official channels (like its AskBot website, Ask Fedora) is usually less in quality and swiftness of responses than Ubuntu. Generally speaking I find installing software that is not in the official repositories (e.g., later versions of SageMath) or that require configuration after they are installed with a package manager (e.g., MediaWiki) is more difficult on Fedora than on either Arch Linux or Ubuntu.

Fedora also has a developmental release called Fedora Rawhide that can be called a bleeding-edge rolling release edition, but I would not as a bleeding-edge rolling release model means to me, at least, that while the system may be using the latest software it only uses the latest **stable releases** of its software (or at least its system software) and not the latest **developmental releases** of its software. Rawhide uses the latest **developmental releases** of its system software (including its kernel) and because of this bugs that prevent users from booting a Rawhide installation are not uncommon.

It is presently ranked 5th for popularity according to the *DistroWatch* website.

### Installer
Fedora uses the [**Anaconda**](https://fedoraproject.org/wiki/Anaconda) installer, which has been ported to a few other Linux distributions as well, including [Sabayon Linux](#sabayon-linux). According to its [GitHub repository](https://github.com/rhinstaller/anaconda) it is 87.8% written in Python, 7.9% written in C and 4% written in Bash script.

### Package Management
As previously mentioned later releases of Fedora use DNF (from the command-line [`dnf`](/man/dnf.8.html)) as their default command-line package manager, with PackageKit being an officially-supported graphical front-end for DNF. DNF is essentially the same as yum (including the fact that it is mostly written in Python), except with faster dependency-resolution thanks to that fact it uses ZYpp's libsolv library for this. Its syntax is virtually identical to that of yum, below are some examples.

```bash
# Install software without asking first and then clean repos and caches
function sdyi {
  sudo dnf install -y $@ && sudo dnf clean all
}

# Remove software without asking first
function sdyr {
  sudo dnf remove -y $@
}

# Update all of one's software, without asking for confirmation
function update {
  sudo dnf update -y
}

# Install target's dependencies only, without asking first.
function sdyb {
  sudo dnf builddep -y $@
}
```

{% include OS-post/specs.html base="Red Hat Linux" arch="armhfp, i686, x86_64. Several more were supported in F17 and F18." shell="Bash." type="Linux." PMS="DNF, PackageKit." ui="Cinnamon, GNOME, KDE, LXDE, MATE, Xfce, <i>etc</i>." IM="Live CD, DVD or USB." date="2003." country="U.S.A." rm="Fixed, approximately once 6-12 months." tm="Individuals that do not require commercial support and favour the latest system software over stability. They should preferably also have at least a few months' worth of experience with other Linux distributions, such as Ubuntu." %}

{% include OS-post/os-min.html cpu=">1 GHz i686." ims="676 MB." ram="1,024 MB." hdd="10 GB." %}

{% include OS-post/os-ratings.html bf="7-8." cmb="~5." doc="6-7. Its documentation, including the Wiki, are adequate for most actions one may wish to do on Fedora, although the Wiki is quite often out of date and does not dive into more advanced or specialized topics." sup="? Never had to use their support forums or IRC channels. I have used their AskBot website and found it less helpful than what Ask Ubuntu is for Ubuntu questions, but usually (~70% of the time) a reasonable answer is obtained within a day." pm="7. Not a big fan of DNF myself. I will admit it does seem marginally better than yum." sru="6." sb="7-8. Fairly stable, but it does use the latest kernels and DNF has occasionally given me grief that appears to be bugs." mewi="6. Once I installed it on a removable drive and used it from there for a few weeks." oa="8. Fairly up-to-date software, but less intuitive than Ubuntu and poorer support." %}
