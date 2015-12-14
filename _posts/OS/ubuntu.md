## Ubuntu
{% include OS-post/os-shot.html image="Ubuntu-15.10.png" description="Ubuntu 15.10, the latest release of Ubuntu at the time of this post, showing the Unity user interface." width="1150px" float="none" %}

### Background
{% include OS-post/os.md os="Ubuntu" url="http://www.ubuntu.com/" wiki="https://wiki.ubuntu.com/" docs="https://help.ubuntu.com/stable/ubuntu-help/index.html" forum="http://ubuntuforums.org/" ask="http://askubuntu.com" bugs="https://launchpad.net/ubuntu/+bugs" dw="ubuntu" d="http://www.ubuntu.com/download/desktop" gr="Ubuntu" wp="Ubuntu_(operating_system)" ml="https://lists.ubuntu.com/" ircs="ubuntu-desktop" %} is a Debian-based Linux distribution developed by both [Canonical Ltd.](https://en.wikipedia.org/wiki/Canonical_(company)) (a UK-based company owned by South African entrepreneur, Mark Shuttleworth) and its own FOSS community. Most of its development occurs at [launchpad.net](https://en.wikipedia.org/wiki/Launchpad_(website)), a website owned and founded by Canonical. The word &ldquo;[Ubuntu](https://en.wikipedia.org/wiki/Ubuntu_(philosophy))&rdquo; is Zulu for &ldquo;humanity to others&rdquo;.

It shares many features in common with its parent distribution, including its focus on stability over bleeding-edge software, its fixed release model, its package management systems and the fact it is free for end-users. What distinguishes it from Debian are the odd program designed specifically for Ubuntu (e.g., the [Ubuntu Software Center](https://en.wikipedia.org/wiki/Ubuntu_Software_Center) and the [Unity](https://en.wikipedia.org/wiki/Unity_(user_interface)) user interface) and its greater focus on beginner-friendliness than on customizability. It is also unique in the Linux community in that it has both Long-Term Support (LTS) releases (which are officially supported for 5 years after they are initially released) and non-LTS releases (supported only for nine months). It was also the first Linux distribution, that I am aware of, to use dated release versions. See the release version numbers used are in the format `YY.MM`, where `YY` is the last two digits of the year (e.g., 15 for 2015) and MM are the two digits of the month (e.g., 04 for April), the release was made. For example, in October 2015 the 15.10 release of Ubuntu was made (which is codenamed Wily Werewolf).

The Unity desktop was originally developed for Ubuntu in mid 2010 as a graphical shell for GNOME and the first Ubuntu release in which it was officially included was 10.10. Unity has received a mixed reception in the FOSS community and personally I dislike it. Aesthetically it is nice enough, but it is far less customizable than the default GNOME shell and uses more system resources than GNOME. See, for example, [this](https://github.com/fusion809/fusion809.github.io/blob/master/_includes/OS-post/unity-ps_mem.sh) [`ps_mem`](https://github.com/pixelb/ps_mem) table I generated on a Ubuntu 15.10 VM running the Unity shell, it recorded that Unity was using a grand total of 588.3 MB of RAM. For the purposes of a comparison (granted due to different the operating systems that were used this test is not really fair), previous `ps_mem` tests on my Sabayon machine found that GNOME and KDE Plasma 5 used 292.8 MB and 300.9 MB of RAM, respectively.

I used Ubuntu for three years on my Dell Laptop (which has 4 GB RAM, ~250 GB HDD space, *etc.*) and I owe it my love of my Linux and most of the experience with Linux I have gained in this time. Although I must say whenever I use it, I feel like I am in preschool again with an awful lot of hand-holding and little freedom. Despite this, it is a nice fall-back distribution for those that do not wish to do anything fancy (like extensively customize the system) but still want to use a stable easy-to-use Linux system, with as little time-wasters as possible (like bugs).

There are several different official flavours of Ubuntu, each featuring their own desktop and/or their own set of preinstalled packages. The default flavour (which is often just called Ubuntu) features the Unity desktop, while [Kubuntu](https://en.wikipedia.org/wiki/Kubuntu), [Lubuntu](https://en.wikipedia.org/wiki/Lubuntu), [Ubuntu GNOME](https://en.wikipedia.org/wiki/Ubuntu_GNOME), [Ubuntu MATE](https://en.wikipedia.org/wiki/Ubuntu_MATE) and [Xubuntu](https://en.wikipedia.org/wiki/Xubuntu) are the only official flavours that feature different desktops and are built on all releases of Ubuntu (both LTS and non-LTS releases). New releases are made every six months in April and October of each year, with LTS releases made in April of even-numbered years.

Ubuntu 15.10 has a grand total of 58,345 binary packages available in its official repositories.[^9]

### Installer
Ubiquity is Ubuntu's official installer, that has been borrowed by many of its derivatives both official and unofficial.

### Package management
{% include OS-post/os-shot.html image="Ubuntu-15.10-software-center.png" float="none" description="The Ubuntu Software Center running on Ubuntu 15.10" width="1150px" %}
As previously mentioned Ubuntu uses the same basic command-line utilities for package management as its parent, Debian, namely APT and dpkg. Although it also features its own official graphical front-end for APT, the Ubuntu Software Center.

### Derivatives
{% include OS-post/derivatives.md os="Ubuntu" %}
Ubuntu derivatives are numerous in number. I have tried quite a few of them, of them only [Linux Mint](#linux-mint) is covered in this post. Others I have experience with, include:
* [Bodhi Linux](http://distrowatch.com/table.php?distribution=bodhi) &mdash; an American distribution based on LTS releases of Ubuntu and that features its own customized version of the Enlightenment 17 desktop. It supports both i386 and x86_64 processors and is ranked 21nd for popularity according to the *DistroWatch* website.
* [Chromixium OS](http://distrowatch.com/table.php?distribution=chromixium) &mdash; a British distribution based on LTS releases of Ubuntu and that features its own customized version of the Openbox window manager that is designed to look like Chrome OS's default user interface. It is available for machines with i386 processors only and is currently ranked 51st according to the *DistroWatch* website.
* [Deepin](http://distrowatch.com/table.php?distribution=deepin) &mdash; a Chinese distribution based on LTS releases of Ubuntu and that features its own desktop environment (that is called the Deepin Desktop Environment (DDE). This desktop is written in WebKit, HTML5 and its extensions are written in JavaScript. I like its aesthetics but it is quite heavy on system resources) and several homegrown applications (such as Deepin Music, Deepin Software Center, *etc.*). It is available for machines running both i386 and x86_64 processors. DDE has been successfully ported to Arch Linux and while ebuilds for DDE's components exist in the [`gentoo-zh`](https://github.com/Gentoo-zh/gentoo-zh) GPO they are outdated and expected to be removed soon unless a new maintainer is found for them.
* [elementary OS](http://distrowatch.com/table.php?distribution=elementary) &mdash; an American distribution based on LTS releases of Ubuntu and that features its own Aqua (OS X's desktop)-like desktop environment called Pantheon and several custom applications. It has been ported to several other operating systems including Gentoo Linux (although whenever I install it on my Sabayon machine it is so buggy that it is essentially unusable). It is available for computers with both i386 and x86_64 processor types and is currently ranked 11th according to *DistroWatch* for popularity.
* [LXLE](http://distrowatch.com/table.php?distribution=lxle) &mdash; an American distribution based on LTS releases of Ubuntu and features the LXDE desktop with special tweaks designed to minimize its system resource usage. It is compatible with both i386 and x86_64 processors and is presently ranked 12th on the *DistroWatch* website for popularity, making it more popular than the official Ubuntu derivative that features the LXDE desktop, Lubuntu.
* [Trisquel GNU/Linux](http://distrowatch.com/table.php?distribution=trisquel) &mdash; a Spanish distribution based on LTS releases of Ubuntu that uses the Linux-libre kernel and is the Linux distribution used by Richard Stallman, the founder of the Free Software Foundation and the GNU Project. It is compatible with i686 and x86_64 processors and is currently ranked 98th by *DistroWatch* in terms of its popularity.
* [Zorin OS](http://distrowatch.com/table.php?distribution=zorin) &mdash; an Irish distribution that is based on LTS releases of Ubuntu and includes both a free and paid version. It features customized versions of the GNOME and LXDE desktops that have a Windows-like appearance. It supports both i386 and x86_64 processors and is presently ranked 16th for popularity according to the *DistroWatch* website.

{% include OS-post/specs.md arch="armhf, i686, powerpc, ppc64el, x86_64." origin="U.K." date="2004." shell="Bash." ui="GNOME, KDE, LXDE, MATE, Unity and Xfce." base="Debian." im="Graphical using live media." pm="APT and dpkg." rm="Fixed." tm="Linux newcomers." %}

{% include OS-post/os-min.md cpu="i686 @ 266 MHz." ram="128 MB (Lubuntu). 512 MB preferable (for Lubuntu)." ims="654 MB (Lubuntu)." hdd="3 GB." %}

{% include OS-post/os-ratings.md bf="9." cmb="&lt;5." doc="8. Pretty good documentation at their Wiki, although I seldom ever used it when I was using Ubuntu." sup="9. Ask Ubuntu is the support medium I have the most experience with and it is pretty useful." pm="7. APT is alright enough." oa="8. It is a pretty good start for those interested in Linux, but after you become comfortable with it and Linux in general, you will likely want to use a different, more challenging and customizable distribution." sru="8. Lubuntu is fairly lightweight, the default flavour of Ubuntu is fairly heavy." mewi="10." sb="7-8. Fairly stable, although bugs are not unheard of." %}