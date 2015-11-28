---
layout: post
title:  "A Comparison of Free Operating Systems"
date:   2015-11-30 +1000
categories: bsd, linux, comparisons
redirect_from:
  - /2015/11/10/comparison-of-linux-distros/
  - /2015/11/29/comparison-of-linux-distros-and-bsd-derivatives/
---
{% include draft.html %}

{% include image.html url="/images/VirtualBox-5.0.10-screenshot.png" width = "1000px" float="none" description="Oracle VM VirtualBox 5.0.10" %}

As is mentioned in the [About Me](/about-me/) section of this website, I have tried quite a few Linux distributions using **Oracle VM VirtualBox**. Some I have only spent less than an hour using, but those I have spent over an hour with and feel fairly confident in my ability to review, include:

{% include distrolist.html %}
3. [CentOS](https://www.centos.org/)
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

{% include toc.html %}


# Review Format
Each operating system (OS) review will have the format:
* H1 heading, with the OS's name.
  * Screenshot of the OS running.


* H2 heading: Background.
  * Background information on the OS, such as its history, an overview of its features that distinguish it from other operating systems and how user-friendly it is.


* H2 heading: Specifications.
  * A list of specifications, including OS type, its parent, its package management system (PMS), default user interface and architecture support.


* H2 heading: Ratings
  * Where I give approximate numerical ratings (from 1-10. 1 being terrible/non-existent and 10 being perfect) for the quality of the various features and characteristics of the OS.
  * I also provide a numerical rating from 1-10 for the extent of my experience with the system (MEWI), 1 in this context indicates <1 hour, 2 for ~1-2 hours and 3 for 2-3 hours, 4 for 3-6 hours, ..., 10 for >100 hours.
  * Additionally I provide an overall satisfaction score for the system, from 1 to 10.

# antiX
{% include image.html url="/images/antiX-15.png" width = "768px" float="none" description="antiX 15 running in VirtualBox, with its default desktop" %}

## Background
{% include distros.html distro="antiX" d="http://antix.mepis.org/index.php?title=Main_Page#Downloads" url="http://antix.mepis.org/index.php?title=Main_Page" forum="http://antix.freeforums.org/" dw="antix" wp="antiX" %} is a lightweight Linux distribution based on Debian's 'Testing' branch for 32-bit (i486 or better) and 64-bit systems. It is essentially designed to be a lightweight distribution as it uses the IceWM window manager as its default user interface. I have found it fairly user-friendly with a graphical installer and a fresh install takes up less than 3 GB hard disk drive (HDD) space. A fresh install can also work with as little as 128 MB RAM, although a minimum of 256 MB is recommended. Compared to more popular Linux distributions such as its parent Debian, its own documentation is fairly minimal, although as it is a Debian derivative the documentation of Debian should suffice in most cases. Since it is built on the testing branch of Debian its system software is usually bleeding edge, in terms of how up-to-date it is.

{% include specs.html arch="x86 (i486 or better), x86_64." shell="Bash." type="Linux." PMS="APT and dpkg." ui="IceWM." IM="Booting from live medium and then using the Debian-Installer." date="2010." country="Greece." rm="Rolling." tm="Old computers and users that like to have the latest software." %}

{% include distro-min.html cpu="i486." ims="222 MB." ram="128 MB. &geq;256 MB preferable." hdd="~2.5 GB." %}

{% include distro-ratings.html BF="8. Fairly beginner-friendly." CMB="8. A core-libre version is available, which contains the bare minimum software, on it you can build your own custom system." doc="2. Very little original documentation exists for antiX." sup="? I've never had to use their support." pm="7. Uses tools it borrows from Debian, which in my opinion are not very impressive." oa="8. It is OK, but I always feel it is like using a treehouse for your office &mdash; it is too minimalistic for it to be appropriate. Although, if I had the time and inclination to install all the software I wanted, I could make it more to my liking." sru="9. Fairly lightweight, by default." sb="7-8. I have never had any stability issues with it myself, probably because I have not used it enough to, but it is based on the testing branch of Debian, hence it is inevitable that it will be more buggy than Debian (Stable)."  mewi="2." %}

# Arch Linux
{% include image.html image="Arch-Linux-DDE-menu.png" width="1000px" float="none" description="Arch Linux running the Deepin Desktop Environment" %}

## Background
{% include distros.html distro="Arch Linux" dw="arch" wp="Arch Linux" url="https://www.archlinux.org/" wiki="https://wiki.archlinux.org/" forum="https://bbs.archlinux.org/" %} is an independent Linux distribution that was first founded in 2002 and has since become one of the most popular Linux distributions that is geared towards experienced users. It aims to adhere to the "Keep It Simple, Stupid" principle. Its take on this principle is that no automation should be done and that a fresh install of Arch should have as little software on it as possible. The purpose of this minimalism is that it gives the user as much control over their system as possible. Arch uses its own package management system too, pacman.

pacman is a PMS written in C that installs software from binary packages with the file extension `.pkg.tar.xz`. These binary packages are stored in the pacman repositories, which contain over 18,000 packages as of November 2015. One can search the official repositories [here](https://packages.archlinux.org/). The [`pacman`](https://www.archlinux.org/packages/core/x86_64/pacman/) package provides a number of different commands (which are all contained in the `/usr/bin` directory and a complete list of the files included by the pacman package may be found [here](https://www.archlinux.org/packages/core/x86_64/pacman/files/)) that can be executed from the command-line, including, but not limited to: `makepkg`, `pacman` and `pactree`. `makepkg` is used to build pacman binary packages (in `.pkg.tar.xz`) from instructions contained in a specialized type of Bash script called a PKGBUILD. On top of pacman, for package management Arch Linux also has yaourt which is a wrapper for pacman that can compile and install software from source code by following instructions contained in specialized Bash scripts called PKGBUILDs that are hosted by the [Arch User Repository](https://aur.archlinux.org/) (AUR).
