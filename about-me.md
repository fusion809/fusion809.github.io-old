---
layout:    page
title:     About Me
date:      2015-11-18 +1000
permalink: /about-me/
---
{% include image.html image="operating-systems/Ubuntu_12.04.png" description="Desktop of Ubuntu 12.04, with its default wallpaper" id="1" width = "1034px" float="none" %}

My journey through the world of Linux began in mid 2012, when I first tried [Ubuntu](http://www.ubuntu.com) 12.04 as a dual-boot with Windows 7 on my Dell laptop. At first, I must admit I was not impressed, as it was like I had landed on an alien planet, as I had never had any need to use a terminal emulator (or command-prompt as it is called under Microsoft Windows) before. Fortunately, I persevered (although, I did return to Windows on-and-off) and after a while I became almost addicted to Linux. A couple of years later I decided to delete the Windows 7 partition on my Dell laptop and make the laptop 100% pure Linux. Since then, I have never regretted making the transition to Linux. Although, I eventually outgrew Ubuntu as it was essentially preschool with so much hand-holding that I was left out of many of the important decisions about my own system.

When I outgrew Ubuntu in mid 2015, I started to search for a new free operating systems to call "home", using [Oracle VM VirtualBox](https://www.virtualbox.org/) I tried a variety of operating systems, including:
* [antiX 15](http://antix.mepis.org/index.php?title=Main_Page)
* [Arch Linux](https://www.archlinux.org/)
* [Bodhi Linux 3.10](http://www.bodhilinux.com/)
* [CentOS 7](https://www.centos.org/)
* [Chapeau 22.1](http://chapeaulinux.org/)
* [Chromixium 1.5](http://chromixium.org/)
* [Debian 8.0-8.2](https://www.debian.org/)
* [deepin 2014.3](http://www.deepin.org/?lang=en)
* [elementary OS 0.3](https://elementary.io/)
* [Fedora 22/23](https://getfedora.org/)
* [FreeBSD 10.2](https://www.freebsd.org/)
* [Gentoo Linux](https://www.gentoo.org/)
* [GhostBSD 10.1](http://ghostbsd.org/)
* [Kali Linux 2](https://www.kali.org/)
* [Korora 21/22](https://kororaproject.org/)
* [Linux Mint 17.2](http://linuxmint.com/)
* [Mageia 5](http://www.mageia.org/en/)
* [Manjaro Linux](https://manjaro.github.io/)
* [OpenMandriva 2014.2](https://www.openmandriva.org/en)
* [openSUSE 13.2/42.1](https://www.opensuse.org/)
* [PC-BSD 10.1/10.2](http://www.pcbsd.org/)
* [PCLinuxOS 2014.12](http://www.pclinuxos.com/)
* [Sabayon Linux](https://www.sabayon.org/)
* [Solus OS 1.0-RC1](https://solus-project.com/)
* [Vector Linux 7.1](http://vectorlinux.com/)
* [Zorin OS 7](http://zorinos.com/)

of these operating systems my favourite were, in order:
1. **Sabayon Linux**, which is distribution I am currently using to write this blog post. It is a Gentoo derivative that has a beginner-friendly binary package manager, Entropy, alongside the complicated yet powerful package manager (oriented towards experienced Linux users) of Gentoo, Portage. Its software is usually fairly up-to-date (e.g., its website claims that its software is "bleeding-edge"), although sometimes you will see a lag, sometimes due to upstream issues (see most packages in its repositories come from the Portage Tree of Gentoo. e.g., GNOME 3.18 was released 23 September 2015, yet it was not until 15 November 2015 that the GNOME Shell 3.18 was finally added to the Portage Tree) and sometimes because only two people directly maintain the Entropy Store and as there are over 13,100 software packages in the Entropy Store it is sometimes impossible for them, from a practical standpoint, to keep all of them up-to-date.
2. **Arch Linux**/**Manjaro Linux**. Manjaro Linux is a beginner-friendly derivative of Arch Linux, a Linux distribution based on the "Keep It Simple, Stupid" (KISS) principle, that is geared towards more experienced Linux users. The way it interprets the KISS principle, is that a fresh Arch install should be the barebones and that automation (e.g., there is no automated installer for Arch, by default) should be kept to a minimum. For this reason, Arch Linux was previously out of my reach, until I found some scripts for automating its installation process. Unfortunately, installing Arch on my removable drive did not go well, so I have opted to use Manjaro Linux in its place on this drive. Manjaro Linux uses its own repositories, which are updated approximately once a week, this is apparently to ensure the system's stability.
3. **openSUSE**. openSUSE uses RPM packages like Fedora, but unlike Fedora its system software and desktop environments are usually nowhere near as bleeding edge. This is likely because openSUSE is designed to be compatible with both servers and desktops/laptops, with the former usually valuing stability over being up-to-date, while Fedora is mostly geared towards desktops/laptops. I tend to find that installing programs on openSUSE is similar to installing them on Fedora, in terms of difficulty. Its chief advantage over Fedora is that it has a Tumbleweed edition that is essentially like a simpler (less compiling software not in the repositories from source code) version of Arch Linux. It also is less likely to experience system-breaking bugs than Arch Linux, like kernel bugs that prevent users from booting.
4. **Fedora**. Fedora is interesting to me, in that installing software packages in its software repositories is usually at least as easy as it is on Ubuntu, but installing software manually from source code or setting up web applications (e.g., MediaWiki or WordPress) tends to be substantially more difficult than on other user-friendly distributions. It is also interesting to me in that its system software and desktop environment-related software is usually the most up-to-date of any distribution following a fixed-release cycle, yet the rest of its software tends to be at least two releases behind the latest available release, in my experience, anyway.
5. **Debian**. Debian is the parent of Ubuntu, that is, Ubuntu was originally based on Debian. The major difference between the two is their target audience: Debian is more geared towards intermediate-experienced Linux users, while Ubuntu is geared towards newcomers to Linux. Debian has five official repositories, each with varying levels of package stability. Most users, especially those using Debian on a server, will be using the stable repository which is the third-most up-to-date repository (with testing and unstable being more up-to-date but also more unstable).
