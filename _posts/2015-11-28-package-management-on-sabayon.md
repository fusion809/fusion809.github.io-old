---
layout: post
title:  "Package Management on Sabayon Linux"
date:   2015-12-20
categories: sabayon, package-management, command-line
---
{% include draft.html %}
{% include note.md note1="This post contains links to external resources, which I have little, if any, control over and hence I cannot guarantee their accuracy." note2="Any instruction involving Portage or manual installation from source code, has the capability to break your system and cause other problems, so if you follow them you and you alone assume any and all responsibility for the consequences!" %}
Often, on this blog, I write posts regarding installing software with Sabayon's two package managers: **Portage** which it borrows from Gentoo and **Entropy** which is wholly original. I felt I would dedicate this post to both package managers, giving you some tips on how to use them safely and most efficiently. Generally speaking when it comes to Sabayon, unless you know what you are doing (for future reference users that "know what they are doing" in this context will be referred to as *competent Sabayon users*), you are recommended to only use Entropy as your **package management system** (**PMS**), as working with Portage is more risky and mixing Entropy with Portage is known to quite easily lead to system breaks. I mix the two, even though I have no formal training in anything technology-related and I have only been using Sabayon since July/August 2015.

This post will cover some of the basics of using Entropy and Portage and how to use them together, in the safest way possible. It will also cover other related topics like using Layman to add overlays. You will probably notice that the command-line is featured heavily in this article, with little mention (usually all they will get is about a sentence mention each, if they are really notable) of graphical user interface (GUI) front-ends for these programs, this is because I tend to find command-line front-ends for package managers are more stable than their graphical counterparts.

{% include toc.html %}
##Preliminary Information
Entropy, Layman and Portage are all written in Python, Bash script and to smaller extents other programming languages like C. [Entropy](#Entropy) is maintained by Fabio Erculiani and other developers of Sabayon, while [Layman](#Layman) and [Portage](#Portage) are both maintained by the Gentoo community. This section will cover some of the preliminary information for each of these programs, including their command-line syntax, so as to make the rest of this post easier to understand.

{% include PMS/Portage.md %}

{% include PMS/Layman.md %}

{% include PMS/Entropy.md %}

##Mixing Entropy with Portage
By default Entropy and Portage act fairly independently of one another. In order for you to use them together, you must tell Entropy that you are also using Portage to install packages by running:
<div class="code"><span class="coder">root #</span>  equo rescue spmsync</div>
whenever you emerge, unmerge or update a package. I have this saved in my `~/.bashrc` (for root user) as the function `spm`, so as to make it easier for me to run it when necessary. What this will do is it will cause packages you installed with Portage to be acknowledged by Entropy, as otherwise Entropy has no clue as to their existence. After this you may also wish to mask packages you installed with Portage, so as to prevent Entropy from attempting to upgrade or remove software installed with Portage. To do this run:
<div class="code"><span class="coder">root #</span>  equo mask &lt;PACKAGE&gt;</div>
To prevent Entropy from downgrading emerged packages you need to edit `/etc/entropy/client.conf` and uncomment (removing the hashtag `#`) the line `ignore-spm-downgrades = enable`.
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
