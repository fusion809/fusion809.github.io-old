---
layout: post
title:  "A Comparison of Free Operating Systems"
date:   2015-12-02 +1000
categories: bsd, linux, comparisons
redirect_from:
  - /2015/11/10/comparison-of-linux-distros/
  - /2015/11/29/comparison-of-linux-distros-and-bsd-derivatives/
  - /2015/11/30/comparison-of-free-operating-systems/
  - /comparison-of-free-operating-systems/
---
{% include draft.html %}

{% include image.html url="/images/Oracle-VM-VirtualBox-5.0.10-29-11-2015.png" width = "1150px" float="none" description="Oracle VM VirtualBox 5.0.10" %}

As is mentioned in the [About Me](/about-me/) section of this website, I have tried quite a few Linux distributions using **Oracle VM VirtualBox**. Some I have only spent less than an hour using, but those I have spent over an hour with and feel fairly confident in my ability to review, include:

{% include oslist.html %}
<!--
4. [Debian](http://debian.org/)
5. [Fedora](https://getfedora.org/)
6. [Gentoo Linux](https://www.gentoo.org/)
7. [Linux Mint](http://linuxmint.com/)
8. [Mageia](http://www.mageia.org/en/)
9. [Manjaro Linux](https://manjaro.github.io)
10. [openSUSE](https://www.opensuse.org/)
11. [PC-BSD](http://www.pcbsd.org/)
12. [PCLinuxOS](http://www.pclinuxos.com/)
13. [Sabayon Linux](http://www.sabayon.org/)
14. [Ubuntu](http://www.ubuntu.com/)
-->
{% include toc.html %}

## Glossary
* <b>&#42;nix</b>
  * Unix/Unix-like operating system.
* <b>BE</b>
  * <b>B</b>leeding <b>e</b>dge: means has the very latest software.
* <b>BSD</b>
  * <b>B</b>erkeley <b>S</b>oftware <b>D</b>istribution.
* <b>BSDs</b>
  * <b>B</b>erkeley <b>S</b>oftware <b>D</b>istribution derivative<b>s</b>.
* <b>CLI</b>
  * <b>C</b>ommand-<b>l</b>ine <b>i</b>nterface. Also known as terminal, a way of interacting with one's OS by issuing a series of textual commands.
* <b>CLIs</b>
  * <b>C</b>ommand-<b>l</b>ine <b>i</b>nterface<b>s</b>.
* <b>FOSS</b>
  * <b>F</b>ree and <b>o</b>pen-<b>s</b>ource <b>s</b>oftware.
* <b>GUI</b>
  * <b>G</b>raphical <b>u</b>ser <b>i</b>nterface.
* <b>GUIs</b>
  * <b>G</b>raphical <b>u</b>ser <b>i</b>nterface<b>s</b>.
* <b>LD</b>
  * <b>L</b>inux <b>d</b>istribution.
* <b>LDs</b>
  * <b>L</b>inux <b>d</b>istribution<b>s</b>.
* <b>OS</b>
  * <b>O</b>perating <b>s</b>ystem.
* <b>OSs</b>
  * <b>O</b>perating <b>s</b>ystem<b>s</b>.
* <b>PMS</b>
  * <b>P</b>ackage <b>m</b>agement <b>s</b>ystem.
* <b>PMSs</b>
  * <b>P</b>ackage <b>m</b>agement <b>s</b>ystem<b>s</b>.
* <b>RRM</b>
  * <b>R</b>olling <b>r</b>elease <b>m</b>odel. A type of operating system development model in which the system is continually developing, this is as opposed to standard release models (SRMs) which uses distinct OS versions that must be reinstalled over the previous version.
* <b>VM</b>
  * <b>V</b>irtual <b>m</b>achine. Host operating systems run within virtualization software such as VirtualBox.
* <b>VMs</b>
  * <b>V</b>irtual <b>m</b>achine<b>s</b>.

## Review Format
Each OS review will have the format:
* **OS Name**
  * &lt;Screenshot of the OS running&gt;


  * **Background**
     * Background information on the OS, such as its history, an overview of its features that distinguish it from other operating systems and how user-friendly it is.


  * **Package Management**
    * Not all OSs will have this section, but if they do, here I will discuss the OS's default PMSs and their features. Including some basic usage of the PMSs.


  * **Specifications**
     * A list of specifications, including OS type, its parent, its package management system (PMS), default user interface and architecture support.
     * **Minimum Requirements**
         * Minimum required <abbr title="Central Processing Unit">CPU</abbr>, <abbr title="Hard Disk Drive">HDD</abbr>, <abbr title="Installation Medium Size">IMS</abbr> and <abbr title="Random Access Memory">RAM</abbr>.


  * **Ratings**
     * Where I give approximate numerical ratings (from 1-10. 1 being terrible/non-existent and 10 being perfect) for the quality of the various features and characteristics of the OS.
     * I do provide a numerical rating for system resource usage, but I cannot use `ps_mem` to assess this accurately and consistently across systems, as my VirtualBox VMs for the various OSs reviewed here, have widely different programs running on them, hence it is an unfair comparison.
     * I also provide a numerical rating from 1-10 for the extent of my experience with the system (MEWI), 1 in this context indicates <1 hour, 2 for ~1-2 hours and 3 for 2-3 hours, 4 for 3-6 hours, ..., 10 for >100 hours.
     * Additionally I provide an overall satisfaction score for the system, from 1 to 10.

## antiX
{% include image.html url="/images/antiX-15.png" width = "768px" float="none" description="antiX 15 running in VirtualBox, with its default desktop" %}

### Background
{% include os.html os="antiX" d="http://antix.mepis.org/index.php?title=Main_Page#Downloads" url="http://antix.mepis.org/index.php?title=Main_Page" forum="http://antix.freeforums.org/" dw="antix" wp="antiX" %} is a lightweight Linux distribution based on Debian's 'Testing' branch for 32-bit (i486 or better) and 64-bit systems. It is essentially designed to be a lightweight distribution as it uses the IceWM window manager as its default user interface. I have found it fairly user-friendly with a graphical installer and a fresh install takes up less than 3 GB hard disk drive (HDD) space. A fresh install can also work with as little as 128 MB RAM, although a minimum of 256 MB is recommended. Compared to more popular Linux distributions such as its parent Debian, its own documentation is fairly minimal, although as it is a Debian derivative the documentation of Debian should suffice in most cases. Since it is built on the testing branch of Debian its system software is usually bleeding edge, in terms of how up-to-date it is.

{% include specs.html arch="x86 (i486 or better), x86_64." shell="Bash." type="Linux." PMS="APT." ui="IceWM." IM="Booting from live medium and then using the Debian-Installer." date="2010." country="Greece." rm="Rolling." tm="Old computers and users that like to have the latest software." %}

{% include os-min.html cpu="i486." ims="222 MB." ram="128 MB. &geq;256 MB preferable." hdd="~2.5 GB." %}

{% include os-ratings.html BF="8. Fairly beginner-friendly." CMB="8. A core-libre version is available, which contains the bare minimum software, on it you can build your own custom system." doc="2. Very little original documentation exists for antiX." sup="? I've never had to use their support." pm="7. Uses tools it borrows from Debian, which in my opinion are not very impressive." oa="8. It is OK, but I always feel it is like using a treehouse for your office &mdash; it is too minimalistic for it to be appropriate. Although, if I had the time and inclination to install all the software I wanted, I could make it more to my liking." sru="9. Fairly lightweight, by default." sb="7-8. I have never had any stability issues with it myself, probably because I have not used it enough to, but it is based on the testing branch of Debian, hence it is inevitable that it will be more buggy than Debian (Stable)."  mewi="2." %}

## Arch Linux
{% include image.html image="Arch-Linux-DDE-menu.png" width="1000px" float="none" description="Arch Linux running the Deepin Desktop Environment" %}

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
{% include image.html image="CentOS-7.png" width="1000px" float="none" description="CentOS 7 running GNOME 3" %}

### Background
{% include os.html bugs="https://bugs.centos.org/my_view_page.php" d="https://www.centos.org/download/" dw="centos" os="CentOS" forum="https://www.centos.org/forums/" wiki="https://wiki.centos.org/" ml="https://wiki.centos.org/GettingHelp/ListInfo" docs="https://www.centos.org/docs/" irc="https://wiki.centos.org/irc" wp="CentOS" gr="centos" %}, which is an acronym for <b>C</b>ommunity <b>E</b>nterprise <b>O</b>perating <b>S</b>ystem, is a Linux distribution that is based on Fedora and Red Hat Enterprise Linux (RHEL), that unlike Fedora, values stability over bleeding-edge software. It is essentially a free equivalent to RHEL, as it is designed for individuals or organizations that do not require commercial support (that is, paid support, the type of support that comes with RHEL), but still require the system stability of an enterprise-class operating system. Its stability comes from the fact it uses older, but more thoroughly-tested versions of the software found on Fedora. For example, its current (as of {{ page.date | date: "%d %B %y" }}) 7.1-1503 release uses GNOME 3.8 and the 3.10 version of the Linux kernel, both are from roughly two years ago.

I, with my love of using the latest software, have not really taken a liking for CentOS. Rather, if I ever have to use a Linux distribution derived from Red Hat, I usually use the latest release of Fedora (currently Fedora 23). Unlike Fedora, CentOS is also more restricted in its architecture support as of the latest 7.1-1503 release, see Fedora can run on 32-bit and 64-bit machines, while CentOS 7.1-1503 can only run on 64-bit machines.

### Package Management
CentOS uses the **Yellowdog Updater, Modified** (**Yum**) package manager that was once used by Fedora. Yum's (or [`yum`](/man/yum.8.html) from the command-line) development has since been discontinued, in favour of its successor Dandified Yum (**DNF**), which resolves package dependencies faster and more efficiently than Yum does, by using ZYpp's libsolv library, hence it is likely that in the future CentOS will start using DNF as well. Yum is widely considered one of the least efficient widely-used Linux package managers presently available and the cause is likely the fact that unlike APT or ZYpp it is written in Python. Python has its advantages and disadvantages as a language for a PMS to be written in and its slow speed is one such disadvantage. Yum and DNF have essentially the same syntax, below is an example `~/.bashrc` for CentOS that shows some of its basic syntax.

```bash
# This should update yum's repositories and perform any required package upgrades
# without asking for confirmation
function update {
  sudo yum update -y
}

# Install the dependencies for a package with Yum without asking for confirmation
function ybd {
  sudo yum-builddep -y $@
}

# Install a package with Yum, without asking for confirmation, from official repositories
function yin {
  sudo yum install -y $@
}

# Install a local (that is, present on one's local system and does not have to be downloaded
# from Yum's repositories) package with Yum, without asking for confirmation.
function ylin {
  sudo yum localinstall -y $@
}

# Remove a package with Yum, without asking for confirmation
function yrm {
  sudo yum remove -y $@
}
```

{% include specs.html arch="x86_64." shell="Bash." type="Linux." PMS="yum" ui="GNOME, KDE." IM="From live media." date="2004." country="U.S.A." rm="Fixed." tm="Individuals and organizations that place great importance on system stability, yet either cannot afford or do not want paid support from Red Hat." %}

{% include os-min.html cpu="x86_64." ims="360 MB." ram="1,024 MB." hdd="10 GB. 20 GB recommended." %}

{% include os-ratings.html bf="8." cmb="5." doc=">6. Has reasonable documentation, that I have little experience with, hence why I am giving it such a broad rating." sup="? Never had to use their support forums or IRC channels." pm="6. Yum is definitely not my favourite PMS." sru="<5. Default DEs, GNOME and KDE, are fairly heavy on SRU." sb=">9. Very stable, never had stability issues with it myself." mewi="3-4. Some experience, not an awful lot though." oa="7. As previously mentioned I dislike outdated software in an OS." %}

## Debian
{% include galleria.html image1="Debian-8.2-KDE-appmenu.png" width1="1366px" description1="Debian 8.2 running KDE Plasma 4" image2="Debian-8.2-TDE-appmenu.png" width2="1000px" description2="Debian 8.2 running the Trinity Desktop Environment (TDE)" %}
<br/>
### Background
{% include os.html bugs="https://www.debian.org/Bugs/" wiki="https://wiki.debian.org/" ml="https://www.debian.org/MailingLists/" irc="https://wiki.debian.org/IRC" forum="http://forums.debian.net/" wp="Debian" os="Debian" docs="https://www.debian.org/doc/" dw="debian" d="https://www.debian.org/distrib/" gr="Debian" %} was one of the first Linux distributions to be founded and was founded back in 1993, by a then [Purdue University](https://en.wikipedia.org/wiki/Purdue_University) student, named [Ian Murdock](https://en.wikipedia.org/wiki/Ian_Murdock). He named it Debian as a portmanteau of his first name and the first name of his then girlfriend, Debra Lynn. Since 1993 Debian has become one of the most popular Linux distributions, in fact, since 2002 every year Debian has appeared within the top 10 list for popularity in terms of page hit rankings, according to DistroWatch. It has also been ported to the greatest number of different processor architecture types of any Linux distribution. Over 1,000 volunteer Debian developers exist worldwide, making the Debian Project, the FOSS project behind Debian, one of the largest worldwide.

### Package Management
Debian uses the [**Advanced Packaging Tool**](https://en.wikipedia.org/wiki/Advanced_Packaging_Tool) (**APT**) and [**dpkg**](https://en.wikipedia.org/wiki/dpkg) ([`dpkg`](/man/dpkg.1.html) from the command-line) for package management, by default. Although aptitude and synaptic are popular alternatives to APT that are generally considered more user-friendly, I personally prefer to just use APT and dpkg. Debian's repositories currently contain approximately 50,000 binary packages &mdash; amongst the most of any Linux distribution. There are four main repository branches of Debian, including (in order of increasing levels of stability) experimental, unstable (or sid), testing and stable. New software starts off in experimental and then makes its way (over the course of a few years) to stable.

These different repositories cannot be used safely, simultaneously, on the same Debian installation, I know this well as I have tried to do this before (namely mix unstable and stable branches) and I ended up breaking my system. Despite this some unofficial APT repositories can be used along with one of the official Debian repositories relatively safely. This too, I know from experience as I often add the [Trinity Desktop Environment](https://wiki.trinitydesktop.org/DebianInstall) (TDE) repositories to my Debian VMs.

APT is a command-line front-end for dpkg. dpkg is what does the actual software installation, while APT manages repositories and software dependencies. APT is written in C++, while dpkg is written in C, C++ and Perl. APT by default installs software from binary packages found in the repositories specified in the text file `/etc/apt/sources.list`, although it can be used to install software from source code too. From the command-line APT is called by a variety of slightly different commands, including [`add-apt-repository`](/man/add-apt-repository.1.html), [`apt-cache`](/man/apt-cache.8.html), [`apt-config`](/man/apt-config.8.html) and [`apt-get`](/man/apt-get.8.html).

APT is fairly unique amongst the major Linux package managers in that it can work with Debian and RPM packages, although when it works with RPM packages it is usually referred to as **APT-RPM**.

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
# Upgrade installed software
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
{% include image.html image="Fedora-23-GNOME.png" width="1000px" float="none" description="Fedora 23 with its default GNOME 3.18 desktop" %}

### Background
{% include os.html ask="https://ask.fedoraproject.org/" bugs="https://bugzilla.redhat.com/" wiki="https://fedoraproject.org/wiki/Fedora_Project_Wiki" ml="https://fedoraproject.org/wiki/Communicating_and_getting_help#Mailing_Lists" irc="https://fedoraproject.org/wiki/Communicating_and_getting_help#IRC_for_interactive_community_support" forum="http://fedoraforum.org/" wp="Fedora (operating system)" os="Fedora" docs="https://docs.fedoraproject.org/en-US/index.html" dw="fedora" d="https://getfedora.org/" url="http://getfedora.org/" %}

## Footnotes
[^1]: Source: [Arch Linux - Packages Search](https://www.archlinux.org/packages/)
[^2]: Source: [AUR (en) - Packages](https://aur.archlinux.org/packages)
[^3]: Source: [Index of /releases](https://download.enlightenment.org/releases/)
