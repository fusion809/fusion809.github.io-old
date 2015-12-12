---
layout: post
title:  "Package Management on Sabayon Linux"
date:   2015-12-20
categories: sabayon, package-management, command-line
---
{% include draft.html %}
{% include note.md note1="This post contains links to external resources, which I have little, if any, control over and hence I cannot guarantee their accuracy at any given time." note2="Any instruction involving Portage or manual installation from source code, has the capability to break your system and cause other problems, so if you follow them you and you alone assume any and all responsibility for the consequences!" %}
Often, on this blog, I write posts regarding installing software with Sabayon's two package managers: **Portage** which it borrows from Gentoo and **Entropy** which is wholly original. I felt I would dedicate this post to both package managers, giving you some tips on how to use them safely and most efficiently. Generally speaking when it comes to Sabayon, unless you know what you are doing (for future reference users that "know what they are doing" in this context will be referred to as *competent Sabayon users*), you are recommended to only use Entropy as your **package management system** (**PMS**), as working with Portage is more risky and mixing Entropy with Portage is known to quite easily lead to system breaks. I mix the two, even though I have no formal training in anything technology-related and I have only been using Sabayon since July/August 2015.

This post will cover some of the basics of using Entropy and Portage and how to use them together, in the safest way possible. It will also cover other related topics like using Layman to add overlays. You will probably notice that the command-line is featured heavily in this article, with little mention (usually all they will get is about a sentence mention each, if they are really notable) of graphical user interface (GUI) front-ends for these programs, this is because I tend to find command-line front-ends for package managers are more stable than their graphical counterparts.

{% include toc.html %}
##Preliminary Information
Entropy, Layman and Portage are all written in Python, Bash script and to smaller extents other programming languages like C. [Entropy](#Entropy) is maintained by Fabio Erculiani and other developers of Sabayon, while [Layman](#Layman) and [Portage](#Portage) are both maintained by the Gentoo community. This section will cover some of the preliminary information for each of these programs, including their command-line syntax, so as to make the rest of this post easier to understand.

###Portage
{% include image.html image="GTK-based-Portage-front-end-Porthole.png" description="Screenshot of Porthole running under KDE Plasma 5" width="1366" height="738" %}

{% include links.html sw="En:Portage" wp="Portage_(software)" package="sys-apps/portage" program="Portage" gw="Portage" %} is a package management system that is arguably the most powerful Linux PMS available today. It is written in [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) and [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) script, so as to afford users the ability to script with Portage. Portage installs, removes and upgrades software using the instructions contained in a specialized type of Bash script known as an **ebuild**, which are stored within the &quot;**Portage Tree**&quot; which is `/usr/portage`, by default. This tree, only contains ebuilds from the **Portage Tree** (PT, you can search this overlay online at [packages.gentoo.org](https://packages.gentoo.org)), ebuilds in overlays added with Layman are added to another location, `/var/lib/layman`. Normally Portage installs (or &quot;*merges*&quot;) software from source code, so as to maximize the control users have over the features their software has, but some pre-compiled binary packages exist in the PT for software that would otherwise take several hours to compile. These packages are in `.tbz2` file format and are created by running emerge with the `--buildpkg` or `--buildpkgonly` options enabled. Installing software from source code may also improve the performance (minimizing resource usage) of software installed this way.

Portage affords users this extra control via **USE flags**, which are “keywords that embodies support and dependency-information for a certain concept” (quoted from the [Gentoo Handbook](https://wiki.gentoo.org/wiki/Handbook:X86/Working/USE)), in other words they are keywords that allow users to decide which (if any) optional package features (like language bindings, for example) will be built, when the package itself is built. These USE flags can be enabled or disabled for individual packages (via modifying files in the directory `/etc/portage/package.use`) or for all packages (via editing the `USE="...` line in `/etc/portage/make.conf`. USE flags should not be confused with **package keywords** (individual package keywords can be found in the directory `/etc/portage/package.keywords`, editing keywords for all packages can be done by editing the `ACCEPT_KEYWORDS="..."` line in `/etc/portage/make.conf`), which are entirely separate keywords, that detail architecture support (x86_64 vs. x86) and a few other features. Likewise packages you do not want Portage to emerge under any circumstances (which can be called **masked packages**) can be added to files within the directory `/etc/portage/package.mask`.

Portage is traditionally a **command-line package management system** (invoked by the command `emerge`), with no official graphical front-ends available, but a few unofficial graphical front-ends exist in the PT, of which the most popular is probably the GTK+ based {% include links.html package="app-portage/porthole" program="Porthole" link="http://porthole.sourceforge.net/" %}

The PT contains over 18,750 software packages, as of December 2015, and while this may seem like quite a fair number (which it is) there will always be some people that will want to install software that is not in the PT. To do this it is advisable to search the [GPO website](http://gpo.zugaina.org/), for the package you would like and then add the overlay that contains the package you want with **Layman**.
####Emerge Syntax
According to **Portage's Manpage**[^1], emerge commands have the following format:
{% include coder.html line1="emerge [<em>options</em>] [<em>action</em>] [<em>ebuild</em> | <em>tbz2file</em> | <em>file</em> | <em>@set</em> | <em>atom</em>]" no="1" %}
This can be confusing to users not familiar with the formatting used by Gentoo's Manpages (or Linux Manpages in general, for that matter), but I will attempt to explain. Before I do, I need you to get into the mind-frame you had when you first learnt algebra in high school, where variables (like x or y) could be substituted with numbers, letters, other characters or a combination of any, or even all of these. With this mind-frame the above generalized format of emerge commands will make more sense, as all words in that command except for root and emerge can be substituted, depending on what you want to do with Portage.

What is in square-brackets (`[...]`) are optional parts of the command (that is, they can be omitted) and when you are writing an actual command you omit the square brackets and substitute the word inside with any of a set of possible values it can take on. Some (not all, I do not even understand them all!) possible values *options* and *action* can take on are covered in the tables below. Multiple options can be combined with certain actions, often using the shortened notation. For example, to combine the ask and verbose options when emerging GNU Octave, one can run the shortened form <code><span class="coder">root #</span> &nbsp;emerge -av sci-mathematics/octave</code> or the full-lengthed form <code><span class="coder">root #</span> &nbsp;emerge --ask --verbose sci-mathematics/octave</code>. The vertical lines or pipes, as they can also be called, which is `|`, in (1) means the options separated by it and between the square brackets are mutually-exclusive options (that is, you either pick one or you pick none, depending on what you want to do). To save time, I will call the following part of (1) &quot;**input**&quot;:
<div class="code">[<em>ebuild</em> | <em>tbz2file</em> | <em>file</em> | <em>@set</em> | <em>atom</em>]</div>
**Sets** (`@set` in the "input") are essentially a useful way of specifying a large group of packages. There are six sets found in a default install of Sabayon, more can be created by users with root access by them editing files in the directory, `/etc/portage/sets`. Running {% include coders.html line1="emerge --list-sets" %} should list all available sets. **ebuilds** are just the names of packages you want to install. At a bare minimum they should be the package's name (case-sensitive), without its category (e.g., wordpress for www-apps/wordpress), but sometimes specifying a package's name without its category leaves some ambiguity (that is, there may be more than one package in the Portage Tree or unofficial overlays added with Layman, that has the name specified), so it is often safer to specify the category also. Some people may want to specify the specific package version they want too, to do this add an equal sign before the category and specify the package version after the package's name, for example running {% include coders.html line1="emerge =sys-apps/portage-2.2.20" %} should install Portage version 2.2.20. **Files** are files that have been created by installed packages. **tbz2file**, as one can probably guess are any binary packages created by emerge itself, in the `.tbz2` file format that one wishes to install. **Atoms** (`atom`) are essentially the same as ebuilds, only with bounds on their version numbers specified. For example, {% include coders.html line1="emerge &lt;dev-lang/python-2.0" %} should install the latest version of Python available before version 2.0.
{% include PMS/table1-options-for-emerge.html %}
<br/>
{% include PMS/table2-actions-for-emerge.html %}
###Links
####Handbook
* [AMD64 Handbook](https://wiki.gentoo.org/wiki/Handbook:AMD64/Working/Portage)

####Manpages
* [EBUILD(1) Manpage](/man/ebuild.1.html)
* [EBUILD(5) Manpage](/man/ebuild.5.html)
* [EMERGE(1) Manpage](/man/emerge.1.html)
* [PORTAGE(5) Manpage](/man/portage.5.html)

###Layman
{% include links.html gp="Layman" gw="Layman" package="app-portage/layman" program="Layman" link="http://layman.sourceforge.net/" gr="gentoo/layman" %} is a command-line tool for managing Portage overlays. It can be installed with Portage (from the PT) using the command:
{% include coder.html line1="emerge -av app-portage/layman" %}
or with Entropy using the command:
{% include coder.html line1="equo i -av app-portage/layman" %}
I would recommend installing Layman using Entropy as it is less error-prone and the Layman package it installs was compiled with all the USE flags required to add every type of overlay available (including Bazaar (bzr), Git, Mercurial (hg) and Subversion (svn)). Layman-added overlays (and the ebuilds contained within them) are stored in <code>/var/lib/layman/</code>.

####Layman Syntax
The basic syntax for Layman is:
{% include coder.html line1="layman [<em>options</em>] [<em>action</em>]" %}
As with emerge, I am not going to cover every option and action available for layman, as that would take too long, plus this is not meant to be a substitute for the manpages of the package managers and other tools covered in this post. Some of the more important/frequently-used actions and options are covered in tables 3 and 4. Please note that all actions when given in long form, if they require input (like `--add` does) this input must be specified with an equal sign and no spaces. For example to add the `sabayon` overlay you may run:
{% include coder.html line1="layman --add=sabayon" %}
or in shortened notation:
{% include coder.html line1="layman -a sabayon" %}
It is important to note that while this technique will add the `sabayon` overlay to one's machine not all overlays can be added this way, as some overlays are not within Layman's default list of available overlays (which I will henceforth refer to as the **reference list**). To view the reference list, run:
{% include coder.html line1="layman -L" %}
while to see the list of overlays currently installed, locally, on your machine run:
{% include coder.html line1="layman -l" %}
To add a new overlay that is not within the reference list, run:
{% include coder.html line1="layman -o &lt;URL of repository XML file&gt; -f -a &lt;overlay name&gt;" %}
{% include PMS/table3-options-for-layman.html %}
<br/>
{% include PMS/table4-actions-for-layman.html %}
### Entropy
{% include image.html image="Rigo-Application-Browser.png" width="1366" height="738" float="none" description="Rigo Application Browser running under KDE Plasma 5" %}

{% include links.html package="sys-apps/entropy" program="Entropy" gr="Sabayon/entropy" sw="En:Entropy" link="/man/equo.pdf" pdf="PDF" %}, is a PMS that was specifically designed for Sabayon by Fabio Erculiani, the original creator of Sabayon. Its first unstable release to be added to Sabayon was in July 2008 (although its first unstable release full stop was back in 2007, according to Entropy's GitHub repository[^2]) when {% include forum.html f="60" t="13917" link="Sabayon 3.5 was released" %} and its first stable release to be added to Sabayon was made in 2012. Unlike Portage which is primarily designed to install source code packages (although it can also install binary packages), Entropy is designed to work with binary packages only. Binary packages take less time than source code packages to install and requires less user know-how and input. Entropy is also unique in that it has two official front-ends: command-line/textual (**Equo**) and graphical (**Rigo**). I personally favour using the command-line for installing packages on Linux distributions, because in my experience graphical installers are more prone to crashes during installation than their command-line/textual counterparts.

Compared to Portage, Entropy is far more simple to use, if you go to the Entropy Store you can see the USE flags used to compile the software packages provided by Entropy, as all packages provided by Entropy had to be compiled with Portage on another machine first (in `.tbz2` format) and then convert from a Portage package to an Entropy package with {% include coders.html line1="equo pkg inflate &lt;PACKAGE&gt;"%}. Entropy contains packages from the Portage Tree and packages from Sabayon's own overlays, which are called [`sabayon`](https://github.com/Sabayon/for-gentoo) and [`sabayon-distro`](https://github.com/Sabayon/sabayon-distro), respectively. Entropy is also safer to use and support for using Entropy to install packages is far better than support for Portage-installed packages on the [Sabayon forums](https://forum.sabayon.org/).

####Equo Syntax
The generalized syntax for Entropy's command-line front-end, Equo, is:
{% include coder.html line1="equo [<em>action</em>] [<em>options</em>] [<em>ebuild</em> | <em>atom</em>]" %}
Some (but by no stretch of the imagine all) options and actions for Equo are listed in tables 4 and 5, below. Note some options are only available for certain actions, for details see the man pages for Equo and its various actions (e.g., run `man equo install` for the equo install manual). One action and another option that are not covered in these tables, that I felt were worthwhile mentioning, are repo and mirrorsort, respectively. The command:
{% include coder.html line1="equo repo mirrorsort &lt;REPO&gt;" %}
where `<REPO>` is the name of an Entropy repository (e.g., `sabayonlinux.org`, `sabayon-weekly` or `sabayon-limbo`), can be used to optimize the order of preference for the repository's mirrors, hence, potentially, accelerating the process by which Sabayon downloads software packages.
{% include PMS/table5-equo-options.html %}
<br/>
{% include PMS/table6-equo-actions.html %}

##Mixing Entropy with Portage
By default Entropy and Portage act fairly independently of one another. In order for you to use them together, you must tell Entropy that you are also using Portage to install packages by running:
<div class="code"><span class="coder">root #</span>  equo rescue spmsync</div>
whenever you emerge, unmerge or update a package. I have this saved in my `~/.bashrc` (for root user) as the function `spm`, so as to make it easier for me to run it when necessary. What this will do is it will cause packages you installed with Portage to be acknowledged by Entropy, as otherwise Entropy has no clue as to their existence. After this you may also wish to mask packages you installed with Portage, so as to prevent Entropy from attempting to upgrade or remove software installed with Portage. To do this run:
<div class="code"><span class="coder">root #</span>  equo mask &lt;PACKAGE&gt;</div>
To prevent Entropy from downgrading emerged packages you need to edit
<div class="code">/etc/entropy/client.conf</div>
and uncomment (removing the hashtag `#`) the line
<div class="code">ignore-spm-downgrades = enable</div>
Packages installed with Entropy are almost always safer (less likely to lead to system breaks or have bugs) than their Portage-installed counterparts, so when you install a package with Portage that has several non-installed dependencies I would suggest you install as many of these dependencies as possible with Entropy before you merge the remaining dependencies and the package itself with Portage.

###Further Reading
* ["HOWTO: Safely mix Entropy and Portage" @ Sabayon Wiki](https://wiki.sabayon.org/index.php?title=HOWTO:_Safely_mix_Entropy_and_Portage)

##The Algorithm
Occasionally, while browsing the internet, I find a program I would like to install on my Sabayon machine. Here is the general algorithm I follow to install it:
{% include PMS/algorithm.html %}
##Examples

###OpenRA
{% include image.html image="OpenRA.jpg" description="An example of OpenRA running" width="1920" height="1080" float="none" %}

{% include links.html package="games-strategy/openra" program="OpenRA" link="http://www.openra.net/" wp="OpenRA" gr="OpenRA/OpenRA" wiki="https://github.com/OpenRA/OpenRA/wiki" %} is a free and open-source futuristic strategy game. For me, it reminds me of one of my favourite Windows games, [Outlive](https://en.wikipedia.org/wiki/Outlive). OpenRA is unusual in that it is not available in the Entropy Store, although a [few ebuilds](https://packages.gentoo.org/packages/games-strategy/openra) for it do exist in the Portage Tree, although it is worthwhile mentioning that these ebuilds are often out of date. For example, as of 26 November 2015 the latest ebuild available in the Portage Tree was for version 20141029 (note how this number represents the date of the release, 29 October 2014), while the latest release was 20150919 (released 19 September 2015). There are unofficial overlays (such as [games-overlay](https://github.com/hasufell/games-overlay)) that contain more recent versions of OpenRA, although it was not until 19 October 2015 that an ebuild for 20150919 was added to this overlay.

To install the latest version available of OpenRA on Sabayon one has four main options:
{% include PMS/openra.html %}

####External links
* [Download Page](http://www.openra.net/download/)
* [Frequently Ask Questions](https://github.com/OpenRA/OpenRA/wiki/FAQ)
* [Official Forums](http://www.sleipnirstuff.com/forum/viewforum.php?f=80)
###SuperTux
{% include image.html image="Supertux-checkpoint.png" description="SuperTux 0.3.3" float="none" width="800" height="600" %}

{% include links.html package="games-arcade/supertux" program="SuperTux" link="http://supertux.github.io/" wp="SuperTux" gr="SuperTux/supertux" %} is a free and open-source (licensed under GNU GPLv3) 2D platform game that was first released in April 2003. Its gameplay is very similar to that of the proprietary game, Super Mario Bros. The initial 2003 release was called "Milestone 1" (or if you would prefer a version number 0.1.3) and is the version of SuperTux that is currently available in the Entropy Store and the Portage Tree. I have installed this version with Entropy, using:
{% include coder.html line1="equo i games-arcade/supertux" %}
This game is enjoyable, giving several hours of entertainment for me at least. Despite this, due to my preoccupation with using the latest software available, I looked to install the latest version of SuperTux (which are developmental, but still fairly stable, versions of Milestone 2 (or SuperTux 2) which is due to be released in December 2015). I tried installing it using the unofficial [`yarik-overlay`](https://github.com/yarikmsu/yarik-overlay) and while this succeeded I found the most stable version provided by it (0.3.4) plagued by bugs. To do this I ran:
{% include coder.html line1="layman -a yarik-overlay" line2="emerge --sync && layman -S" line3="emerge -av supertux" %}
So after this, I decided to give manually building and installing it myself, a go. Then I got the [latest tarball source code release](https://github.com/SuperTux/supertux/releases/download/v0.3.5a/supertux-0.3.5a.tar.bz2) (<code>tar -xvf supertux-0.3.5a.tar.bz2</code> should do this from the command-line), decompressed it, changed into the supertux-0.3.5a directory and ran:
{% include codeu.html line1="mkdir build" line2="cd build" line3="cmake .. -DCMAKE_INSTALL_PREFIX=/usr" line4="make" line5="sudo make install" %}
this ran without error and the resulting SuperTux 2 installation (which by-the-way I have managed to keep on my system despite never removing my SuperTux 1 Entropy installation) was less buggy. Later, I replaced this installation with the latest git release of SuperTux, via running:
{% include codeu.html line1="git clone https://github.com/SuperTux/supertux" line2="cd supertux" line3="mkdir build && cd build" line4="cmake .. -DCMAKE_INSTALL_PREFIX=/usr" line5="make" line6="sudo make install" %}
and surprisingly (because git snapshots are usually less stable than tarball pre-releases) it had fewer bugs. There was one bug that stayed quite persistently, however, after compiling the source code manually &mdash; after a while SuperTux2 would not launch (even when run from the command-line) and the error message it gave was related to `SDL_BASEPATH` not being set. Reinstalling `libsdl2` with Entropy solved this problem, for some reason. In an attempt to overcome this error more permanently I have created an ebuild for the latest git snapshot of SuperTux ({% include stebuild.md ebuild="games-arcade/supertux/supertux-9999" link="games-arcade/supertux-9999" %})

####External links
* [User Manual](https://github.com/SuperTux/supertux/wiki/User-Manual)

##Footnotes
[^1]: Specifically the [emerge.1.html](/man/emerge.1.html) manpage
[^2]: Source: [Entropy releases before 0.6.9](https://github.com/Sabayon/entropy/releases?after=0.6.9)
