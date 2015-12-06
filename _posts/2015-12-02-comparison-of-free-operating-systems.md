---
layout: post
title:  "A Comparison of Free Operating Systems"
date:   2015-12-10 +1000
categories: bsd, linux, comparisons
redirect_from:
  - /2015/11/10/comparison-of-linux-distros/
  - /2015/11/29/comparison-of-linux-distros-and-bsd-derivatives/
  - /2015/11/30/comparison-of-free-operating-systems/
  - /2015/12/02/comparison-of-free-operating-systems/
  - /comparison-of-free-operating-systems/
---
{% include draft.html %}

{% include os-shot.html image="Oracle-VM-VirtualBox-5.0.10-29-11-2015.png" width = "1150px" float="none" description="Oracle VM VirtualBox 5.0.10" %}

As is mentioned in the [About Me](/about-me/) section of this website, I have tried quite a few Linux distributions using **Oracle VM VirtualBox**. Some I have only spent less than an hour using, but those I have spent over an hour with and feel fairly confident in my ability to review, include:

{% include oslist.html %}

<!--
10. [openSUSE](https://www.opensuse.org/)
11. [PC-BSD](http://www.pcbsd.org/)
12. [PCLinuxOS](http://www.pclinuxos.com/)
13. [Sabayon Linux](http://www.sabayon.org/)
14. [Ubuntu](http://www.ubuntu.com/)
-->
{% include toc.html %}

{% include glossary.html %}

{% include review-format.html %}

## antiX
{% include os-shot.html image="antiX-15.png" width = "768px" float="none" description="antiX 15 running in VirtualBox, with its default desktop" %}

### Background
{% include os.html os="antiX" d="http://antix.mepis.org/index.php?title=Main_Page#Downloads" url="http://antix.mepis.org/index.php?title=Main_Page" forum="http://antix.freeforums.org/" dw="antix" wp="antiX" %} is a lightweight Linux distribution based on Debian's 'Testing' branch for 32-bit (i486 or better) and 64-bit systems. It is essentially designed to be a lightweight distribution as it uses the IceWM window manager as its default user interface. I have found it fairly user-friendly with a graphical installer and a fresh install takes up less than 3 GB hard disk drive (HDD) space. A fresh install can also work with as little as 128 MB RAM, although a minimum of 256 MB is recommended. Compared to more popular Linux distributions such as its parent Debian, its own documentation is fairly minimal, although as it is a Debian derivative the documentation of Debian should suffice in most cases. Since it is built on the testing branch of Debian its system software is usually bleeding edge, in terms of how up-to-date it is.

{% include specs.html arch="x86 (i486 or better), x86_64." shell="Bash." type="Linux." PMS="APT." ui="IceWM." IM="Booting from live medium and then using the Debian-Installer." date="2010." country="Greece." rm="Rolling." tm="Old computers and users that like to have the latest software." base="Debian (Unstable)" %}

{% include os-min.html cpu="i486." ims="222 MB." ram="128 MB. &geq;256 MB preferable." hdd="~2.5 GB." %}

{% include os-ratings.html BF="8. Fairly beginner-friendly." CMB="8. A core-libre version is available, which contains the bare minimum software, on it you can build your own custom system." doc="2. Very little original documentation exists for antiX." sup="? I've never had to use their support." pm="7. Uses tools it borrows from Debian, which in my opinion are not very impressive." oa="8. It is OK, but I always feel it is like using a treehouse for your office &mdash; it is too minimalistic for it to be appropriate. Although, if I had the time and inclination to install all the software I wanted, I could make it more to my liking." sru="9. Fairly lightweight, by default." sb="7-8. I have never had any stability issues with it myself, probably because I have not used it enough to, but it is based on the testing branch of Debian, hence it is inevitable that it will be more buggy than Debian (Stable)."  mewi="2." %}

## Arch Linux
{% include os-shot.html image="Arch-Linux-DDE-menu.png" width="1000px" float="none" description="Arch Linux running the Deepin Desktop Environment" %}

### Background
{% include os.html os="Arch Linux" d="https://www.archlinux.org/download/" dw="arch" wp="Arch Linux" url="https://www.archlinux.org/" wiki="https://wiki.archlinux.org/" forum="https://bbs.archlinux.org/" bugs="https://bugs.archlinux.org/" gr="archlinux" irc="https://wiki.archlinux.org/index.php/IRC_channel" ml="https://lists.archlinux.org//listinfo" %} is an independent Linux distribution that was first founded in 2002 and has since become one of the most popular Linux distributions that is geared towards experienced users. It aims to adhere to the "Keep It Simple, Stupid" principle. Its take on this principle is that no automation should be done and that a fresh install of Arch should have as little software on it as possible. The purpose of this minimalism is that it gives the user as much control over their system as possible. Arch uses its own package management system too, pacman.

The manual installation process can be a newbie-killer (mostly in the sense that it is tedious and the [guide](https://wiki.archlinux.org/index.php/Beginners%27_guide) for it is not really written for Linux newcomers), although with installation scripts this can be bypassed. As I have never used Arch Linux on my PC, except through Oracle VM VirtualBox, I always use [Packer](https://github.com/fusion809/arch-builder) to automate the installation process. Once installed, intermediate-experienced Linux users that are comfortable with the command-line should feel at home, although novice Linux users that are much more comfortable with GUIs than with CLIs will probably struggle at this stage too. I personally find software installation on Arch Linux easier than it is on Debian and Fedora, because of its package managers, pacman and Yaourt.

### Package Management
**pacman** is a PMS written in C that installs software from binary packages with the file extension `.pkg.tar.xz`. These binary packages are stored in the pacman repositories, which contain over 13,600 packages as of {{ page.date | date: "%d %B %y" }}.[^1] One can search the official repositories [here](https://www.archlinux.org/packages/). The [`pacman`](/man/pacman.8.html) package provides a number of different commands (which are all contained in the `/usr/bin` directory and a complete list of the files included by the pacman package on 64-bit systems may be found [here](https://www.archlinux.org/packages/core/x86_64/pacman/files/)) that can be executed from the command-line, including, but not limited to: [`makepkg`](/man/makepkg.8.html) and [`pactree`](/man/pactree.8.html). `makepkg` is used to build pacman binary packages (in `.pkg.tar.xz`) from instructions contained in a specialized type of Bash script called a [PKGBUILD](https://www.archlinux.org/pacman/PKGBUILD.5.html). PKGBUILDs usually describe to `makepkg` how to build binary packages from source code, which is, of course, a tedious and error-prone process.

Arch Linux also has its own online repository of PKGBUILDs, that is called the [**Arch User Repository**](https://aur.archlinux.org/) (**AUR**). The AUR actually contains more PKGBUILDs than there are binary packages in pacman's official repositories &mdash; as of {{ page.date | date: "%d %B %y" }} it contains over 29,990 PKGBUILDs. If one wants to install software from the PKGBUILDS contained in the AUR one has two choices: either do so manually, using `git` (as the AUR uses git as its version control system), `makepkg` (to compile the package using PKGBUILD instructions) and `pacman` (to install the package build with makepkg) command-line tools or use a wrapper for pacman that is called [Yaourt](https://wiki.archlinux.org/index.php/Yaourt) ([`yaourt`](https://archlinux.fr/man/yaourt.8.html) from the command-line).

Yaourt is French for yogurt and is so named as it is an acronym for <b>Y</b>et <b>A</b>n<b>o</b>ther <b>U</b>ser <b>R</b>epository <b>T</b>ool. Yaourt has the same syntax as pacman, but unlike pacman which when asked to install a program will only search for the program in the Arch binary package repositories, Yaourt will look at both Arch's binary package repositories and the AUR.

I would personally rate pacman and Yaourt as two of my favourite package managers, because of how simple, fast, yet flexible they are. Most package managers will install software from either binary packages or from source code, unlike Yaourt which can install from both. pacman and Yaourt are also fairly fast compared to equivalent package managers operating on other systems. For example, Yaourt will most of the time take less time to install a software package than Portage will take to install the same package. I suspect the reason behind this is that Portage is written in Python and Bash script, while pacman is written in C and Yaourt, being a wrapper for pacman, is written in C and Bash script. pacman is actually widely considered the fastest Linux package manager available.

Arch Linux also follows a bleeding-edge rolling release model (BE-RRM), which means that users almost always have the latest software and never need to perform a standard system upgrade. Although it is worthwhile noting that not all software on Arch is bleeding-edge, some can be a few releases behind. For example, as of {{ page.date | date: "%d %B %y" }} [e_dbus 1.7.9](https://www.archlinux.org/packages/extra/x86_64/e_dbus/) is still in their official pacman repositories, even though version 1.7.10 was released on 6 January 2014.[^3]

pacman and Yaourt both have very unusual syntax, see most command-line BSD/Linux package managers use the `install` option to install software, `remove` to remove software, `update` to update software repositories and `upgrade` to updated all installed software. pacman instead uses `-S`, `-R`, `-Sy` and `-Syu` options, respectively. Further details of its syntax can be found [here](https://wiki.archlinux.org/index.php/Pacman_Rosetta).

Here is an example `~/.bashrc` file one can use on Arch VMs.
```bash
# A less powerful replacement for Yaourt, I use when Yaourt is somehow inappropriate
function aurin {
  for i in "$@"
  do
    git clone https://aur.archlinux.org/$i.git
    pushd $i
    makepkg -s
    paclin $i
    popd
    rm -rf $i
  done
}

# `paclin` installs software with pacman from a local package.
function paclin {
  sudo pacman -U $@*.pkg.tar.xz
}

# `pacin` installs software with pacman, without asking for confirmation
# to get this command to ask for confirmation first remove the --noconfirm
# option
function pacin {
  sudo pacman -S $@ --noconfirm
}

# `pacrm` removes software with pacman, without asking for confirmation
# -Rsc option is used to get pacman to remove reverse dependencies of the target
# package, as needed. If you use the -R option instead quite often this command
# will fail due to reverse dependencies that would be broken if the target package
# is removed
function pacrm {
  sudo pacman -Rsc $@ --noconfirm
}

# `pacup` updates software installed with pacman (not Yaourt-installed software)
# without asking for confirmation
function pacup {
  sudo pacman -Syu --noconfirm
}

# `update` updates all software, including that originally installed with Yaourt
# without asking for confirmation
function update {
  yaourt -Syua --noconfirm
}

alias yaup=update

# `yain` installs software using Yaourt, without asking for confirmation
function yain {
  yaourt -S $@ --noconfirm
}

# `yalin` installs a local software package using Yaourt, without asking for
# confirmation
function yalin {
  yaourt -U $@ --noconfirm
}

# `yarm` removes software using Yaourt
function yarm {
  yaourt -Rsc $@ --noconfirm
}
```

{% include specs.html arch="arm, i686, x86_64." shell="Bash." type="Linux." PMS="pacman" ui="Command-line." IM="Manual from the command-line or via unofficial shell script installers" date="2002." country="Canada." rm="Rolling." tm="Experienced users, especially those that value the latest software over system stability." %}

{% include os-min.html cpu="i686." ims="659 MB." ram="256 MB." hdd="<800 MB." %}

{% include os-ratings.html bf="4." cmb=">8." doc="8. Has some of the best documentation out there." sup="? Never really had to use their support forums and channels, except once when I was trying to install it manually on a VM. When I did then, there were plenty of responses to the forum post I wrote, but the general consensus of opinion was that I should not be using the system until I was a more competent Linux user." pm=">8." sru=">8." sb="7. I have found Arch disturbingly easy to inadvertently break and make unusable, but most of the time it is stable enough to use." mewi=">5. I have a decent amount of experience with this system and its more newbie-friendly derivative, Manjaro Linux." oa="8." %}

## CentOS
{% include os-shot.html image="CentOS-7.png" width="1000px" float="none" description="CentOS 7 running GNOME 3" %}

### Background
{% include os.html bugs="https://bugs.centos.org/my_view_page.php" d="https://www.centos.org/download/" dw="centos" os="CentOS" forum="https://www.centos.org/forums/" wiki="https://wiki.centos.org/" ml="https://wiki.centos.org/GettingHelp/ListInfo" docs="https://www.centos.org/docs/" irc="https://wiki.centos.org/irc" wp="CentOS" gr="centos" %}, which is an acronym for <b>C</b>ommunity <b>E</b>nterprise <b>O</b>perating <b>S</b>ystem, is a Linux distribution that is based on Fedora and Red Hat Enterprise Linux (RHEL), that unlike Fedora, values stability over bleeding-edge software. It is essentially a free equivalent to RHEL, as it is designed for individuals or organizations that do not require commercial support (that is, paid support, the type of support that comes with RHEL), but still require the system stability of an enterprise-class operating system. Its stability comes from the fact it uses older, but more thoroughly-tested versions of the software found on Fedora. For example, its current (as of {{ page.date | date: "%d %B %y" }}) 7.1-1503 release uses GNOME 3.8 and the 3.10 version of the Linux kernel, both are from roughly two years ago.

I, with my love of using the latest software, have not really taken a liking for CentOS. Rather, if I ever have to use a Linux distribution derived from Red Hat, I usually use the latest release of Fedora (currently Fedora 23). Unlike Fedora, CentOS is also more restricted in its architecture support as of the latest 7.1-1503 release, see Fedora can run on 32-bit and 64-bit machines, while CentOS 7.1-1503 can only run on 64-bit machines.

### Package Management
CentOS uses the **Yellowdog Updater, Modified** (**yum**) package manager that was once used by Fedora. yum's (or [`yum`](/man/yum.8.html) from the command-line) development has since been discontinued, in favour of its successor Dandified yum (**DNF**), which resolves package dependencies faster and more efficiently than yum does, by using ZYpp's libsolv library, hence it is likely that in the future CentOS will start using DNF as well. yum is widely considered one of the least efficient widely-used Linux package managers presently available and the cause is likely the fact that unlike APT or ZYpp it is written in Python. Python has its advantages and disadvantages as a language for a PMS to be written in and its slow speed is one such disadvantage. yum and DNF have essentially the same syntax, below is an example `~/.bashrc` for CentOS that shows some of its basic syntax.

```bash
# This should update yum's repositories and perform any required package upgrades
# without asking for confirmation
function update {
  sudo yum update -y
}

# Install the dependencies for a package with yum without asking for confirmation
function ybd {
  sudo yum-builddep -y $@
}

# Install a package with yum, without asking for confirmation, from official repositories
function yin {
  sudo yum install -y $@
}

# Install a local (that is, present on one's local system and does not have to be downloaded
# from yum's repositories) package with yum, without asking for confirmation.
function ylin {
  sudo yum localinstall -y $@
}

# Remove a package with yum, without asking for confirmation
function yrm {
  sudo yum remove -y $@
}
```

{% include specs.html arch="x86_64." shell="Bash." type="Linux." PMS="yum" ui="GNOME, KDE." IM="From live media." date="2004." country="U.S.A." rm="Fixed." tm="Individuals and organizations that place great importance on system stability, yet either cannot afford or do not want paid support from Red Hat." base="Fedora, RHEL." %}

{% include os-min.html cpu="x86_64." ims="360 MB." ram="1,024 MB." hdd="10 GB. 20 GB recommended." %}

{% include os-ratings.html bf="8." cmb="5." doc=">6. Has reasonable documentation, that I have little experience with, hence why I am giving it such a broad rating." sup="? Never had to use their support forums or IRC channels." pm="6. yum is definitely not my favourite PMS." sru="<5. Default DEs, GNOME and KDE, are fairly heavy on SRU." sb=">9. Very stable, never had stability issues with it myself." mewi="3-4. Some experience, not an awful lot though." oa="7. As previously mentioned I dislike outdated software in an OS." %}

## Debian
{% include galleria.html image1="Debian-8.2-KDE-appmenu.png" width1="1366px" description1="Debian 8.2 running KDE Plasma 4" image2="Debian-8.2-TDE-appmenu.png" width2="1000px" description2="Debian 8.2 running the Trinity Desktop Environment (TDE)" %}
<br/>
### Background
{% include os.html bugs="https://www.debian.org/Bugs/" wiki="https://wiki.debian.org/" ml="https://www.debian.org/MailingLists/" irc="https://wiki.debian.org/IRC" forum="http://forums.debian.net/" wp="Debian" os="Debian" docs="https://www.debian.org/doc/" dw="debian" d="https://www.debian.org/distrib/" gr="Debian" %} was one of the first Linux distributions to be founded and was founded back in 1993, by a then [Purdue University](https://en.wikipedia.org/wiki/Purdue_University) student, named [Ian Murdock](https://en.wikipedia.org/wiki/Ian_Murdock). He named it Debian as a portmanteau of his first name and the first name of his then girlfriend, Debra Lynn. Since 1993 Debian has become one of the most popular Linux distributions, in fact, since 2002 every year Debian has appeared within the top 10 list for popularity in terms of page hit rankings, according to DistroWatch. It has also been ported to the greatest number of different processor architecture types of any Linux distribution. Over 1,000 volunteer Debian developers exist worldwide, making the Debian Project, the FOSS project behind Debian, one of the largest worldwide.

### Package Management
Debian uses the [**Advanced Packaging Tool**](https://en.wikipedia.org/wiki/Advanced_Packaging_Tool) (**APT**, [`apt`](/man/apt.8.html) from the command-line) and [**dpkg**](https://en.wikipedia.org/wiki/dpkg) ([`dpkg`](/man/dpkg.1.html) from the command-line) for package management, by default. Although aptitude and synaptic are popular alternatives to APT that are generally considered more user-friendly, I personally prefer to just use APT and dpkg. Debian's repositories currently contain approximately 50,000 binary packages &mdash; amongst the most of any Linux distribution. There are four main repository branches of Debian, including (in order of increasing levels of stability) experimental, unstable (or sid), testing and stable. New software starts off in experimental and then makes its way (over the course of a few years) to stable.

These different repositories cannot be used safely, simultaneously, on the same Debian installation, I know this well as I have tried to do this before (namely mix unstable and stable branches) and I ended up breaking my system. Despite this some unofficial APT repositories can be used along with one of the official Debian repositories relatively safely. This too, I know from experience as I often add the [Trinity Desktop Environment](https://wiki.trinitydesktop.org/DebianInstall) (TDE) repositories to my Debian VMs.

APT is a command-line front-end for dpkg. dpkg is what does the actual software installation, while APT manages repositories and software dependencies. APT is written in [C++](https://en.wikipedia.org/wiki/C++) and [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) script, while dpkg is written in [C](https://en.wikipedia.org/wiki/C_(programming_language)), C++ and [Perl](https://en.wikipedia.org/wiki/Perl_(programming_language)). APT by default installs software from binary packages found in the repositories specified in the text file `/etc/apt/sources.list`, although it can be used to install software from source code too. From the command-line APT is called by a variety of slightly different commands, including [`add-apt-repository`](/man/add-apt-repository.1.html), [`apt-cache`](/man/apt-cache.8.html), [`apt-config`](/man/apt-config.8.html) and [`apt-get`](/man/apt-get.8.html).

APT is fairly unique amongst the major Linux package managers in that it can work with Debian and RPM packages, although when it works with RPM packages it is usually referred to as **[APT-RPM](https://en.wikipedia.org/wiki/APT-RPM)**.

Something that is worthwhile noting is that like many other popular Linux distributions (including CentOS, Fedora, openSUSE and Ubuntu) it splits many of its programs up into several different packages. For example, components of Lua (the programming language) 5.2 can be found in the following packages:
```bash
lua5.2
lua5.2-doc
liblua5.2-0
liblua5.2-0-dbg
liblua5.2-dev
```
this feature can be a blessing and a curse, depending on what you do with your Debian system. I personally do a lot of software compiling on my Debian VMs and having to remember to install all of a program's components individually can be a real nuisance at times.

```bash
# Upgrade installed software. Then remove any software that is no longer needed and clean the
# APT cache.
function update {
  sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get autoremove -y && sudo apt-get autoclean
}

# Search for software
function sacs {
  sudo apt-cache search $@
}

# Show package details
function sacsp {
  sudo apt-cache showpkg $@
}

# Install software dependencies only
function sagdb {
  sudo apt-get build-dep -y $@
}

# Install software
function sagi {
  sudo apt-get install -y $@
}

alias install=sagi

# Install local software package(s)
function sagli {
  sudo dpkg -i $@
}

# Remove software
function sagr {
  sudo apt-get remove -y $@
}

# Build Debian package from Debian sources, which are specified in
# /etc/apt/sources.list. The package will NOT be installed, however.  
function sagsb {
  sudo apt-get source -b $@
}
```

{% include specs.html arch="arm64, armel, armhf, i386, mips, mipsel, powerpc, ppc64el, s390x, x86_64." shell="Bash." type="Linux." PMS="APT." ui="Cinnamon, GNOME, KDE, LXDE, MATE, Xfce, <i>etc</i>." IM="Live CD, DVD or USB." date="2004." country="U.S.A." rm="Fixed, approximately once every 1-3 years." tm="Individuals/organizations with a reasonable skill set, that do not require commercial support, but greatly favour system stability over how up-to-date software." %}

{% include os-min.html cpu="i386." ims="<280 MB." ram="128 MB. >512 MB recommended." hdd="2 GB. 10 GB with a desktop environment." %}

{% include os-ratings.html bf="7-8." cmb="5." doc=">7. Has pretty good documentation, but I have fairly little experience with said documentation." sup="? Never had to use their support forums or IRC channels." pm="7. Not a big fan of APT myself." sru="7. Lighter than CentOS, but not as minimalistic as Arch" sb=">9. Very stable, never had stability issues with it myself." mewi="4. Some experience, not an awful lot though." oa="7. As previously mentioned I dislike outdated software in an OS." %}

## Fedora
{% include os-shot.html image="Fedora-23-GNOME.png" width="1000px" float="none" description="Fedora 23 with its default GNOME 3.18 desktop" %}

### Background
{% include os.html ask="https://ask.fedoraproject.org/" bugs="https://bugzilla.redhat.com/" wiki="https://fedoraproject.org/wiki/Fedora_Project_Wiki" ml="https://fedoraproject.org/wiki/Communicating_and_getting_help#Mailing_Lists" irc="https://fedoraproject.org/wiki/Communicating_and_getting_help#IRC_for_interactive_community_support" forum="http://fedoraforum.org/" wp="Fedora (operating system)" os="Fedora" docs="https://docs.fedoraproject.org/en-US/index.html" dw="fedora" d="https://torrent.fedoraproject.org/" url="http://getfedora.org/" %}, previously known as **Fedora Core** is a Linux distribution that was first founded in 2003 as a free continuation of the proprietary Red Hat Linux (RHL) distribution. It is developed by the Fedora Project, which is funded by Red Hat. Fedora, like its parent, uses RPM packages and originally used yum as its default package manager, until the release of Fedora 22 (F22) in May 2015 when it was replaced with a libsolv-based rewrite of it called [**DNF**](http://dnf.baseurl.org/). Its chief distinguishing characteristic, in my books, is that despite the fact it follows a fixed (or standard) release model, with new releases every 6-12 months, its system and desktop software is nearly always the latest stable versions available. For example, Fedora 23 (F23) ships with the 4.2 release of the Linux kernel and the 3.18 release of the GNOME desktop. Most Linux distributions that follow a fixed release model use the long-term stable (LTS) releases of the Linux kernel and other system software, for example, openSUSE 42.1 (released within a week of Fedora 23) shipped with the 4.1 kernel, because it is the latest LTS kernel available. Fedora is also the Linux distribution that is used by Linus Torvalds &mdash; the original developer of the Linux kernel.

I personally find it a distribution that is somewhere between Ubuntu and Arch Linux, in terms of difficulty of use, with respect to most things anyway. See like Ubuntu and unlike Arch Linux it has several different editions with a preinstalled desktop environment and additional out-of-the-box support. It also has an official graphical package management system (**PackageKit**) and a command-line package management system (DNF), which contributes to it being more user-friendly than Arch Linux, but what makes it more difficult than Ubuntu, in my opinion, is that its documentation is less comprehensive, its Wiki is more outdated and lastly support via official channels (like its AskBot website, Ask Fedora) is usually less in quality and swiftness of responses than Ubuntu. Generally speaking I find installing software that is not in the official repositories (e.g., later versions of SageMath) or that require configuration after they are installed with a package manager (e.g., MediaWiki) is more difficult on Fedora than on either Arch Linux or Ubuntu.

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

{% include specs.html base="Red Hat Linux" arch="armhfp, i686, x86_64. Several more were supported in F17 and F18." shell="Bash." type="Linux." PMS="DNF, PackageKit." ui="Cinnamon, GNOME, KDE, LXDE, MATE, Xfce, <i>etc</i>." IM="Live CD, DVD or USB." date="2003." country="U.S.A." rm="Fixed, approximately once 6-12 months." tm="Individuals that do not require commercial support and favour the latest system software over stability. They should preferably also have at least a few months' worth of experience with other Linux distributions, such as Ubuntu." %}

{% include os-min.html cpu=">1 GHz i686." ims="676 MB." ram="1,024 MB." hdd="10 GB." %}

{% include os-ratings.html bf="7-8." cmb="~5." doc="6-7. Its documentation, including the Wiki, are adequate for most actions one may wish to do on Fedora, although the Wiki is quite often out of date and does not dive into more advanced or specialized topics." sup="? Never had to use their support forums or IRC channels. I have used their AskBot website and found it less helpful than what Ask Ubuntu is for Ubuntu questions, but usually (~70% of the time) a reasonable answer is obtained within a day." pm="7. Not a big fan of DNF myself. I will admit it does seem marginally better than yum." sru="6." sb="7-8. Fairly stable, but it does use the latest kernels and DNF has occasionally given me grief that appears to be bugs." mewi="6. Once I installed it on a removable drive and used it from there for a few weeks." oa="8. Fairly up-to-date software, but less intuitive than Ubuntu and poorer support." %}

## Gentoo Linux
{% include os-shot.html image="Gentoo-Linux-12.0.jpg" float="none" description="Gentoo Linux 12.0, taken from Wikimedia Commons" width="1000px" %}

### Background
{% include os.html os="Gentoo Linux" dw="gentoo" d="https://www.gentoo.org/downloads/" bugs="https://bugs.gentoo.org/" irc="https://www.gentoo.org/get-involved/irc-channels/all-channels.html" ml="https://www.gentoo.org/get-involved/mailing-lists/all-lists.html" wiki="https://wiki.gentoo.org/wiki/Main_Page" wp="Gentoo Linux" docs="https://wiki.gentoo.org/wiki/Main_Page" url="https://www.gentoo.org/" %} is an independent Linux distribution that was originally known as **Enoch Linux** and founded in 2002 by a Canadian-born American computer programmer and software engineer named [Daniel Robbins](https://en.wikipedia.org/wiki/Daniel_Robbins_(computer_programmer)). As far as Linux distributions go, it is, in my limited experience, the most difficult-to-use and to setup Linux distribution around. This is because its package management system, **Portage**, while incredibly powerful is also slow, difficult-to-learn and difficult-to-use. See unlike most package managers Portage installs software primarily (although binary installs are also possible) from source code using instructions found in specialized Bash scripts known as **ebuilds**. Installing software from source code optimizes the control users have over their system, as it means that features they want they can enable in a package when they configure its source code, while features they do not want they can also disable at the configure stage. Unfortunately, however, compiling software from source code also means that software installation takes longer than it would if one were installing from a binary package instead.

Gentoo Linux's name refers to the gentoo penguins, a species of penguin renowned for their speed. See by compiling its software from source code it was hoped that this would optimize the software's performance once installed.

Daniel Robbins later left the project in 2004 to create a new Linux distribution called Funtoo Linux (which is derived from Gentoo) which it is my understanding one must pay for, in order to use it. In its early days Gentoo was actually one of the most popular Linux distributions around, at least according to DistroWatch, but with time its popularity fell as fewer and fewer people had the skill, inclination and the time to build their system from the ground up with Portage. In fact, I do not even have the skill to install Gentoo manually, instead I took the easy way out and used [Packer](https://github.com/d11wtq/gentoo-packer) to build a virtual machine with it installed. Even with the assistance of Packer I am struggling to use Gentoo Linux because of Portage-related difficulties (see the package management section for details).

The power and versatility of Portage is best illustrated by the mere fact that Gentoo is second only to Debian in the number of architecture types it has been ported to. Portage has even been ported to non-Linux &#42;nix operating systems, including:
* The &#42;BSDs including FreeBSD, NetBSD and OpenBSD.
* Darwin
* GNU (with the Herd kernel)
* OS X

I think of Gentoo Linux as essentially a more complex, customizable and portable version of Arch Linux. See like Arch, a fresh installation has nothing but the command-line and some basic packages to it and anything more than this must be built from the ground-up by the user. Arch Linux's package manager, pacman, uses binary packages and does not give one a choice of which features of the package is built and which are not, while Gentoo's Portage, gives one all the choice of which features of the package will be built.

### Package Management
As previously mentioned Portage ([`emerge`](/man/emerge.1.html) from the command-line) is the package manager of Gentoo Linux although several derivatives of Gentoo Linux also use Portage. Portage is written in Python and Bash script &mdash; according to [GitHub](https://github.com/gentoo/portage) these languages make up 93.6% and 6.4% of Portage's source code, respectively, as of 4 December 2015. Portage was inspired by the BSD ports system, the most significant differences are that Portage automates installation for one (unlike the ports system where you need to cd to the port directory and run `make`) and also includes several advanced features including fake installs, safe unmerging, system profiles, virtual packages, dependency-resolution, config file management, *etc.* Another key difference from BSD ports is that Portage uses a type of specialized Bash script known as an ebuild to tell Portage how to build a program. ebuild writing I must say, is much more complicated than writing a PKGBUILD. This is because ebuilds include several special functions that are only used by Portage, which while they can make things simpler for those that know what they are doing, they can be difficult to learn and intimidating to see, for newcomers. PKGBUILDs, however, are usually more simple than ebuilds as they have fewer special functions.

Here are some example Bash scripts to simplify using Portage:

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

{% include specs.html arch="i486, i586, i686, x86_64, alpha, arm, hppa, mips, powerpc, ppc64, sparc64." origin="U.S.A." date="2002" shell="Bash" ui="Command-line." im="From live media or from stage tarballs." type="Linux." pm="Portage" rm="Rolling." tm="Advanced users, that have a lot of time on their hands and patience, and want to build their system from the ground-up." %}

{% include os-min.html cpu="i486" ram="256 MB" HDD="2.75 GB (including swap)" ims="~200 MB" %}

{% include gentoo-ratings.html %}

## Linux Mint
{% include os-shot.html image="Linux-Mint-17.3.png" width="1000px" description="Linux Mint 17.3 with the default Cinnamon desktop" float="none" %}

### Background
{% include os.html os="Linux Mint" url="http://linuxmint.com" forum="http://linuxmint.com/forum/" docs="http://community.linuxmint.com/" bugs="https://bugs.launchpad.net/linuxmint" gr="linuxmint" dw="mint" d="http://www.linuxmint.com/download.php" irc="http://community.linuxmint.com/tutorial/view/12" ml="http://forums.linuxmint.com/viewtopic.php?f=152&t=73603" %} is an Irish Linux distribution based on Ubuntu's LTS releases. What distinguishes it from the Ubuntu LTS releases it is built on is that it has browser plugins, media codecs, support for DVD playback and other pre-installed packages that are designed to make it more out-of-the-box. Linux Mint also has its own customized desktop built from GNOME 3 called [Cinnamon](http://cinnamon.linuxmint.com/) (which has been ported to most major Linux distributions) and its own graphical package installer, MintInstall. As it is built on Ubuntu's LTS releases it is also compatible with Ubuntu's software repositories and can use them without a problem, usually, at least. Unfortunately LTS releases of Ubuntu usually ship with fairly old desktop/system software.

### Package Management
MintInstall is essentially a Linux Mint equivalent to the Ubuntu Software Center as just like the software centre it is a graphical front-end for APT. I personally have fairly limited experience with it, so it may have a few features that the software centre lacks that I am unaware of.

{% include specs.html arch="i386, x86_64." origin="Ireland." date="2006." shell="Bash." ui="Cinnamon, KDE, MATE and Xfce." im="Live media." type="Linux." pm="APT." rm="Fixed." base="Ubuntu (LTS)." tm="Newcomers to Linux." %}

{% include os-min.html cpu="i386." ram="512 MB. 1024 MB recommended." HDD="5 GB. 20 GB recommended." ims="1.4 GB." %}

{% include os-ratings.html bf="9." cmb="<6." doc="4. Fairly minimal documentation of its own, although the more complete Ubuntu documentation should be applicable to it too." sup="? Never had to use their forums." pm="7." sru="4." sb="&geq;7. Never experienced any bugs myself, but I know from experience on other platforms that Cinnamon can be buggy."  mewi="&leq;4." oa="7-8." %}

## Mageia
{% include os-shot.html image="Mageia-5-KDE4.png" float="none" description="Mageia 5 with its default KDE Plasma 4 desktop." width="1000px" %}

### Background
{% include os.html os="Mageia" url="http://www.mageia.org/en/" forum="https://forums.mageia.org/en/" irc="irc://irc.freenode.net/#mageia" d="http://www.mageia.org/en/downloads/" ml="https://wiki.mageia.org/en/Mailing_lists" dw="mageia" docs="http://www.mageia.org/en/doc/" wiki="http://wiki.mageia.org/" bugs="https://bugs.mageia.org/" wp="Mageia" %} is a French Linux distribution that was originally forked from the proprietary Mandriva Linux distribution by several former employees of Mandriva S.A. Mageia 1, the first release of Mageia, was released in 2011. Mageia follows a fixed release model and uses older and more stable versions of almost (if not all) all of its software, including its kernel (currently the latest LTS release 4.1.13, although a week or so ago it was still using 3.18) and desktop environments (GNOME 3.14 and KDE Plasma 4.14 are currently used). Like its parent its package management system is [urpmi](https://en.wikipedia.org/wiki/urpmi), which uses RPM packages. The word &ldquo;mageia&rdquo; is Latin for &ldquo;magic&rdquo;.

### Package Management System
As previously mentioned Mageia uses the command-line urpmi ([`urpmi`](/man/urpmi.8.html) from the command-line) package manager, which installs software using RPM binary packages and the RPM package manager. urpmi is written in Perl. The command for uninstalling software ([`urpme`](/man/urpme.8.html)), querying installed software and software repositories ([`urpmq`](/man/urpmq.8.html)). Mageia also uses Mandriva's graphical front-end for urpmi, rpmdrake. Below is a Bash script showing some useful commands involving urpmi. My experience with Mageia is just barely at the point where I am comfortable reviewing it, so I cannot really add much beyond this about it. I have noticed, however, that Mageia is one Linux distribution wherein I have had great difficulty installing the [Atom](https://atom.io) text editor (which is the text editor I am using to write the post). I have managed to by using the official [RPM binary package](https://atom.io/download/rpm) provided by the Atom development team, by running `sudo urpmi https://atom-installer.github.com/v1.2.4/atom.x86_64.rpm?s=1448042930`, although I did have to uninstall the `apmd` package first due to a file conflict (as both packages provide a `/usr/bin/apm` file).

```bash
# Update all installed software
function update {
	sudo urpmi.update -a && sudo urpmi --auto-select
}

# Remove program arguments provided to it
function urm {
  sudo urpme $@
}

# Install program arguments provided to it. URLs (to RPM packages) can also be given to it
function uin {
  sudo urpmi $@
}
```

{% include specs.html arch="i586, x86_64." origin="France." date="2011" shell="Bash." ui="GNOME, KDE" im="Graphical, using live media." type="Linux." pm="urpmi." rm="Fixed." base="Mandriva Linux." tm="Users that favour stability over having the latest software." %}

{% include os-min.html cpu="i586." ram="512 MB, 2048 MB preferred." hdd="5 GB minimum, 20 GB preferred." ims="39 MB (NET), 3.6 GB (DVD)." %}

{% include os-ratings.html bf="8." cmb="<6." doc="5? Documentation seems to be in its infancy." sup="? Never had to use their forums." pm="8." sru="4." sb="&geq;7. Never experienced any bugs myself." mewi="&leq;4." oa="7." %}

## Manjaro Linux
{% include os-shot.html image="Manjaro-Linux-01.png" float="none" description="Manjaro Linux Xfce edition." width="1000px" %}

### Background
{% include os.html os="Manjaro Linux" url="https://manjaro.github.io" wp="Manjaro Linux" wiki="https://wiki.manjaro.org/index.php?title=Main_Page" forum="https://forum.manjaro.org/" ml="https://lists.manjaro.org/mailman/listinfo" irc="irc://irc.freenode.net/#manjaro" dw="manjaro" gr="manjaro" docs="https://wiki.manjaro.org/index.php?title=Main_Page" d="http://manjaro.github.io/download/" %} is a European beginner-friendly Arch Linux-derived Linux distribution that features a graphical installer (called [Calamares](https://calamares.io)), automatic hardware detection (using the [Manjaro Hardware Detection](https://wiki.manjaro.org/index.php?title=Manjaro_Hardware_Detection) tool) and several official and unofficial (or community) editions that differ only in their preinstalled desktop environment. Such official editions include KDE, NET and Xfce editions. Currently Manjaro is still in beta testing, without any official releases being made yet. I have noticed more bugs in than there are in Arch Linux, for example, I have found it impossible to run the [Deepin Desktop Environment](https://github.com/fasheng/arch-deepin/issues/92) on Manjaro, although running it on Arch Linux goes without a hitch.

Like its parent it uses pacman and Yaourt for command-line package management, although graphical front-ends also come preinstalled, including [Octopi](https://octopiproject.wordpress.com/).

{% include specs.html arch="i686, x86_64." origin="Austria, France, Germany." date="2013." ui="KDE, Xfce." im="Graphical, using live media." type="Linux." pm="pacman, Yaourt." rm="Rolling." base="Arch Linux." tm="Users that prefer to have the latest software but also prefer a graphical installation process." %}

{% include os-min.html cpu="i686 @ 1 GHz." ram="1024 MB." hdd="30 GB." ims="529.5 MB (i686, NET edition)." %}

{% include os-ratings.html bf="8-9." cmb="7. Not as customizable as its parent, but still some customizability exists." doc="5-7. Its Wiki is still in its infancy, although most information at the ArchWiki should also be applicable to Manjaro." sup="5. I have used their forums a few times and I must say it is not definitely not the best. For one, if you include a hyperlink in your new thread you will have to a wait a few days, at least, before it receives moderator approval and hence becomes viewable to potential answerers to your question(s)." pm=">8." sru="7. I find it fairly fast and lightweight, considering the fact it uses a graphical user interface, by default." sb="6." mewi="7. I have installed it on a removable hard drive before and used it for a while, so I have a reasonable level of experience with it." oa="8. Manjaro is one of my favourite OSs, but it is still in beta testing, so bugs are frequent." %}

## openSUSE
{% include os-shot.html image="openSUSE-42.1-desktop-screenshot-appmenu.png" float="none" description="Screenshot of openSUSE 42.1 with its default wallpaper." width="1000px" %}

### Background
{% include os.html os="openSUSE" url="https://www.opensuse.org/" d="https://software.opensuse.org/" dw="opensuse" wp="openSUSE" wiki="https://en.opensuse.org/Main_Page" forum="https://forums.opensuse.org/forum.php" ml="https://en.opensuse.org/openSUSE:Mailing_lists" irc="https://en.opensuse.org/openSUSE:IRC_list" docs="http://doc.opensuse.org/" gr="openSUSE" %}

## Footnotes
[^1]: Source: [Arch Linux - Packages Search](https://www.archlinux.org/packages/)
[^2]: Source: [AUR (en) - Packages](https://aur.archlinux.org/packages)
[^3]: Source: [Index of /releases](https://download.enlightenment.org/releases/)
