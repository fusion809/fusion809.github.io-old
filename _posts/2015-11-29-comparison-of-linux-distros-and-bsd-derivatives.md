---
layout: post
title:  "A Comparison of Linux distributions and BSD derivatives"
date:   2015-11-29 +1000
categories: bsd, linux, comparisons
redirect_from:
  - /2015/11/10/comparison-of-linux-distros/
---
{% include draft.html %}

{% include image.html url="/images/VirtualBox-5.0.10-screenshot.png" width = "1200px" float="none" description="Oracle VM VirtualBox 5.0.10" %}

As is mentioned in the [About Me](/about-me/) section of this website, I have tried quite a few Linux distributions using **Oracle VM VirtualBox**. Some I have only spent less than an hour using, but those I have spent over an hour with and feel fairly confident in my ability to review, include:

1. [antiX](#antiX)
2. [Arch Linux](https://www.archlinux.org/)
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
  * A list of specifications, including OS type, its parent, its package management system, default user interface and architecture support.

* H2 heading: Ratings
  * Where I give approximate numerical ratings for the quality of the various features and characteristics of the OS.

#antiX
{% include image.html url="/images/antiX-15.png" width = "500px" description="antiX 15 running in VirtualBox" %}
## Background
{% include distros.html distro="antiX" url="http://antix.mepis.org/index.php?title=Main_Page" forum="http://antix.freeforums.org/" dw="antix" wp="antiX" %} is a lightweight Linux distribution based on Debian's 'Testing' branch for 32-bit (i486 or better) and 64-bit systems. It is essentially designed to be a lightweight distribution as it uses the IceWM window manager as its default user interface. I have found it fairly user-friendly with a graphical installer and a fresh install takes up less than 3 GB hard disk drive (HDD) space. A fresh install can also work with as little as 128 MB RAM, although a minimum of 256 MB is recommended. Compared to more popular Linux distributions such as its parent Debian, its own documentation is fairly minimal, although as it is a Debian derivative the documentation of Debian should suffice in most cases. Since it is built on the testing branch of Debian its system software is usually bleeding edge, in terms of how up-to-date it is.

##Specifications
{% include specs.html arch="x86 (i486 or better), x86_64" shell="Bash" type="Linux" PMS="APT, dpkg" ui="IceWM" IM="Booting from live medium and then using the Debian-Installer" foundation="It was founded in 2010 in Greece" %}

### Minimum requirements
* CPU: i486.
* HDD: <3 GB.
* RAM: 128 MB.

{% include clear.html %}

#Arch Linux
