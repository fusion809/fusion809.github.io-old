---
layout: post
title:  "Package Management on Sabayon Linux"
date:   2015-11-28
categories: sabayon, package-management, command-line
---
{% include draft.html %}
{% include note.html note1="This post contains links to wikis, including the Gentoo and Sabayon Wikis and the English Wikipedia. The information contained on these pages is subject to frequent changes and no one, myself included, can guarantee their accuracy at any given time." note2="Any instruction involving Portage, has the capability to break your system and cause other problems, so if you follow them you and you alone assume any and all responsibility for the consequences!" %}
Often, on this blog, I write posts regarding installing software with Sabayon's two package managers: **Portage** which it borrows from Gentoo and **Entropy** which is wholly original. I felt I would dedicate this post to both package managers, giving you some tips on how to use them safely and most efficiently. Generally speaking when it comes to Sabayon, unless you know what you are doing (for future reference users that "know what they are doing" in this context will be referred to as *competent Sabayon users*), you are recommended to only use Entropy as your **package management system** (**PMS**), as working with Portage is more risky and mixing Entropy with Portage is known to quite easily lead to system breaks. I mix the two, even though I would not call myself a competent Sabayon user, because quite often Entropy does not provide the software I want, while Portage can.

This post will cover some of the basics of using Entropy and Portage and how to use them together, in the safest way possible. It will also cover other related topics like using Layman to add overlays. You will probably notice that the command-line is featured heavily in this article, with little mention (usually all they will get is about a sentence mention each, if they are really notable) of graphical user interface (GUI) front-ends for these programs, this is because I tend to find command-line front-ends for package managers are more stable than their graphical counterparts.

#Preliminary Information
Entropy, Layman and Portage are all written in Python. Entropy is maintained by Fabio Erculiani and other developers of Sabayon, while Layman and Portage are both maintained by the Gentoo community. This section will cover some of the preliminary information for each of these programs, including their command-line syntax, so as to make the rest of this post easier to understand.

##Portage
{% include image.html image="GTK-based-Portage-front-end-Porthole.png" description="Screenshot of Porthole running under KDE Plasma 5" width="1366" height="738" %}

{% include links.html sw="En:Portage" wp="Portage_(software)" package="sys-apps/portage" program="Portage" gw="Portage" %} is a package management system that is arguably the most powerful Linux PMS available today. It is written in [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) and [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) script, so as to afford users the ability to script with Portage. Portage installs, removes and upgrades software using the instructions contained in **ebuild** (that is, Bash scripts with the file extension `.ebuild`) files, which are stored within the &quot;**Portage Tree**&quot; which is `/usr/portage`, by default. This tree, only contains ebuilds from the **Portage Tree** (PT, you can search this overlay online [here](https://packages.gentoo.org)), ebuilds in overlays added with Layman are added to another location, `/var/lib/layman`. Normally Portage installs (or &quot;*merges*&quot;) software from source code, so as to maximize the control users have over the features their software has, but some pre-compiled binary packages exist in the OGO for software that would otherwise take several hours to compile. These packages are in `.tbz2` file format and are created by running emerge with the `--buildpkg` or `--buildpkgonly` options enabled. Installing software from source code may also improve the performance (minimizing resource usage) of software installed this way.

Portage affords users this extra control via **USE flags**, which are “keywords that embodies support and dependency-information for a certain concept” (quoted from the [Gentoo Handbook](https://wiki.gentoo.org/wiki/Handbook:X86/Working/USE)), in other words they are keywords that allow users to decide which (if any) optional package features (like language bindings, for example) will be built, when the package itself is built. These USE flags can be enabled or disabled for individual packages (via modifying files in the directory `/etc/portage/package.use`) or for all packages (via editing the `USE="...` line in `/etc/portage/make.conf`. USE flags should not be confused with **package keywords** (individual package keywords can be found in the directory `/etc/portage/package.keywords`, editing keywords for all packages can be done by editing the `ACCEPT_KEYWORDS="..."` line in `/etc/portage/make.conf`), which are entirely separate keywords, that detail architecture support (x86_64 vs. x86) and a few other features. Likewise packages you do not want Portage to emerge under any circumstances (which can be called **masked packages**) can be added to files within the directory `/etc/portage/package.mask`.

Portage is traditionally a **command-line package management system** (invoked by the command `emerge`), with no official graphical front-ends available, but a few unofficial graphical front-ends exist in the OGO, of which the most popular is probably the GTK+ based {% include links.html package="app-portage/porthole" program="Porthole" link="http://porthole.sourceforge.net/" %}

The OGO contains over 18,500 software packages, as of October 2015, and while this may seem like quite a fair number (which it is) there will always be some people that will want to install software that is not in the OGO. To do this it is advisable to search the [GPO website](http://gpo.zugaina.org/), for the package you would like and then add the overlay that contains the package you want with **Layman**.
###Emerge Syntax
According to **Portage's Manpage**[^1], emerge commands have the following format:
{% include coder.html line1="emerge [<em>options</em>] [<em>action</em>] [<em>ebuild</em> | <em>tbz2file</em> | <em>file</em> | <em>@set</em> | <em>atom</em>]" no="1" %}
This can be confusing to users not familiar with the formatting used by Gentoo's Manpages (or Linux Manpages in general, for that matter), but I will attempt to explain. Before I do, I need you to get into the mind-frame you had when you first learnt algebra in high school, where variables (like x or y) could be substituted with numbers, letters, other characters or a combination of any, or even all of these. With this mind-frame the above generalized format of emerge commands will make more sense, as all words in that command except for root and emerge can be substituted, depending on what you want to do with Portage.

What is in square-brackets (`[...]`) are optional parts of the command (that is, they can be omitted) and when you are writing an actual command you omit the square brackets and substitute the word inside with any of a set of possible values it can take on. Some (not all, I do not even understand them all!) possible values *options* and *action* can take on are covered in the tables below. Multiple options can be combined with certain actions, often using the shortened notation. For example, to combine the ask and verbose options when emerging GNU Octave, one can run the shortened form <code><span class="coder">root #</span> &nbsp;emerge -av sci-mathematics/octave</code> or the full-lengthed form <code><span class="coder">root #</span> &nbsp;emerge --ask --verbose sci-mathematics/octave</code>. The vertical lines or pipes, as they can also be called, which is `|`, in (1) means the options separated by it and between the square brackets are mutually-exclusive options (that is, you either pick one or you pick none, depending on what you want to do). To save time, I will call the following part of (1) &quot;**input**&quot;:
<div class="code">[<em>ebuild</em> | <em>tbz2file</em> | <em>file</em> | <em>@set</em> | <em>atom</em>]</div>
**Sets** (`@set` in the "input") are essentially a useful way of specifying a large group of packages. There are six sets found in a default install of Sabayon, more can be created by users with root access by them editing files in the directory, `/etc/portage/sets`. Running {% include coders.html line1="emerge --list-sets" %} should list all available sets. **ebuilds** are just the names of packages you want to install. At a bare minimum they should be the package's name (case-sensitive), without its category (e.g., wordpress for www-apps/wordpress), but sometimes specifying a package's name without its category leaves some ambiguity (that is, there may be more than one package in the Portage Tree or unofficial overlays added with Layman, that has the name specified), so it is often safer to specify the category also. Some people may want to specify the specific package version they want too, to do this add an equal sign before the category and specify the package version after the package's name, for example running {% include coders.html line1="emerge =sys-apps/portage-2.2.20" %} should install Portage version 2.2.20. **Files** are files that have been created by installed packages. **tbz2file**, as one can probably guess are any binary packages created by emerge itself, in the `.tbz2` file format that one wishes to install. **Atoms** (`atom`) are essentially the same as ebuilds, only with bounds on their version numbers specified. For example, {% include coders.html line1="emerge &lt;dev-lang/python-2.0" %} should install the latest version of Python available before version 2.0.
<table style="width: 100%; border: 1px; padding: 1em; vertical-align: middle;"><caption><strong>Table 1: Options for Emerge</strong></caption>
<tbody>
<tr class="green">
<td class="title" style="width: 240px;">Long</td>
<td class="title">Short</td>
<td class="title" style="width: 660px;">Meaning</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--ask</div></td>
<td class="green"><code>-a</code></td>
<td class="green">Ask before running the action.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--autounmask [y|n]</div></td>
<td class="green">N/A</td>
<td class="green">This option is enabled by default and it basically allows emerge to unmask packages as required and write changes for package.use. Possible forms this option can take on are <code>--autounmask=y</code>, <code>--autounmask=n</code> (which will disable this option and unmasking/package.use changes will not occur) or <code>--autounmask</code>.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--autounmask-write [y|n]</div></td>
<td class="green">N/A</td>
<td class="green">This option is similar to <code>--autounmask</code>, except it can write to package.use and other configuration files directly.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--buildpkg [y|n]</div></td>
<td class="green"><code>-b</code></td>
<td class="green">By default this option is disabled, but when enabled it causes emerge to install the package(s) and it also creates binary package(s) from the installed package(s) (file format: <code>.tbz2</code>) in <strong>PKGDIR</strong> (which is specified by <code>/etc/portage/make.conf</code>, by default it is <code>/usr/portage/packages</code>).</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--buildpkgonly</div></td>
<td class="green"><code>-B</code></td>
<td class="green">This option, which is not enabled by default, will only create binary package(s) and not install the package(s) specified to it.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--changed-use</div></td>
<td class="green"><code>-U</code></td>
<td class="green">Tells emerge to include installed packages where USE flags have changed since installation.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--debug</div></td>
<td class="green"><code>-d</code></td>
<td class="green">Show more detailed debugging information.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--deep</div></td>
<td class="green"><code>-D</code></td>
<td class="green">With this option emerge will look at the entire (or "deep") dependency tree (not just the immediate dependencies of the package it is emerging, which it does by default) for updates.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--emptytree</div></td>
<td class="green"><code>-e</code></td>
<td class="green">Reinstalls package and all deep dependencies.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--keep-going [ y | n ]</div></td>
<td class="green">N/A</td>
<td class="green">Continue as much as possible after an error.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--newuse</div></td>
<td class="green"><code>-N</code></td>
<td class="green">Reinstall packages that have had their USE flags changed since installation. This option is more comprehensive in the packages it reinstalls than <code>--changed-use</code>.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--nodeps</div></td>
<td class="green"><code>-O</code></td>
<td class="green">Installs specified packages, without installing any dependencies. This option may cause package breakage.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--noreplace</div></td>
<td class="green"><code>-n</code></td>
<td class="green">Skips packages that are already installed.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--oneshot</div></td>
<td class="green"><code>-1</code></td>
<td class="green">It will emerge the package as normal, but will not add the packages to the world file for later updating.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--onlydeps</div></td>
<td class="green"><code>-o</code></td>
<td class="green">Install the specified package(s) dependencies, only. This is the emerge equivalent to APT's <code>apt-get build-dep</code>.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--pretend</div></td>
<td class="green"><code>-p</code></td>
<td class="green">This option causes emerge to display which packages would have been emerged, had the pretend option not been used.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--quiet [y|n]</div></td>
<td class="green"><code>-q</code></td>
<td class="green">This option, although results do vary, should minimize the output provided by emerge.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--update</div></td>
<td class="green"><code>-u</code></td>
<td class="green">Updates packages to the best version available (not necessarily the latest, however).</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--verbose</div></td>
<td class="green"><code>-v</code></td>
<td class="green">This option causes more details to be given from ask and pretend commands. These details include GNU info errors and (for the pretend command) it will print USE flags.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--with-bdeps [y|n]</div></td>
<td class="green">N/A</td>
<td class="green">During dependency calculations, build time dependencies that are not strictly required will be included. For installation actions this defaults to n, while for depclean actions this defaults to y.</td>
</tr>
</tbody>
</table>
<table class="green" style="width: 100%; border: 1px; padding: 1em;"><caption><strong>Table 2: Action values for Emerge</strong></caption>
<tbody>
<tr class="green">
<td class="title" style="width: 130px;">Long</td>
<td class="title" style="width: 50px;">Short</td>
<td class="title" style="width: 50px;"><abbr title="Input-required?">IR</abbr>?</td>
<td class="title" style="width: 670px;">Meaning</td>
</tr>
<tr class="green">
<td class="green">None</td>
<td class="green">N/A</td>
<td style="background-color: green; color: white; text-align: center; vertical-align: middle;">Yes</td>
<td class="green">If no action is specified then emerge will merge all packages specified and their dependencies.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--config</div></td>
<td class="green">N/A</td>
<td style="background-color: green; color: white; text-align: center; vertical-align: middle;">Yes</td>
<td class="green">Run specific configuring processes that must be done after the package is emerged. The best example for this I can provide are the MariaDB and MySQL packages. Configuring these packages is required in order to set up a database with them.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--depclean</div></td>
<td class="green"><code>-c</code></td>
<td style="background-color: green; color: white; text-align: center; vertical-align: middle;">Yes</td>
<td class="green">Removes packages not associated with any merged package.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--help</div></td>
<td class="green"><code>-h</code></td>
<td style="background-color: red; color: white; text-align: center; vertical-align: middle;">No</td>
<td class="green">Displays some basic syntactic information, although if you really want some documentation for emerge from the command-line use <code>man emerge</code>.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--prune</div></td>
<td class="green"><code>-P</code></td>
<td style="background-color: green; color: white; text-align: center; vertical-align: middle;">Yes</td>
<td class="green">Remove all but the highest installed version of the package specified.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--regen</div></td>
<td class="green">N/A</td>
<td style="background-color: red; color: white; text-align: center; vertical-align: middle;">No</td>
<td class="green">Causes portage to check and update the dependency cache of all ebuilds in the portage tree.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--resume</div></td>
<td class="green"><code>-r</code></td>
<td style="background-color: red; color: white; text-align: center; vertical-align: middle;">No</td>
<td class="green">Resumes the last merge, if said merge was cancelled due to errors.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--search</div></td>
<td class="green"><code>-s</code></td>
<td style="background-color: green; color: white; text-align: center; vertical-align: middle;">Yes</td>
<td class="green">Search for packages who's name matches with the supplied case-insensitive string.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--searchdesc</div></td>
<td class="green"><code>-S</code></td>
<td style="background-color: green; color: white; text-align: center; vertical-align: middle;">Yes</td>
<td class="green">Search the Portage tree for string in package names and descriptions.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--sync</div></td>
<td class="green">N/A</td>
<td style="background-color: red; color: white; text-align: center; vertical-align: middle;">No</td>
<td class="green">Updates all the ebuilds in the Portage Tree. You should do this once a week, at least. The first time you do it, this will take quite some time (potentially up to a few hours). To save time the first time you do this you may wish to run <code>emerge-webrsync</code> which will download the Portage Tree as a tarball.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--unmerge</div></td>
<td class="green"><code>-C</code></td>
<td style="background-color: green; color: white; text-align: center; vertical-align: middle;">Yes</td>
<td class="green">Unmerges (that is, uninstalls) software packages specified.
<strong>WARNING: This command ignores packages that may depend on the unmerged packages.</strong> For a more dependency-conscious and hence safer version of this command use the <code>--depclean</code> or <code>--prune</code> options.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--version</div></td>
<td class="green"><code>-V</code></td>
<td style="background-color: red; color: white; text-align: center; vertical-align: middle;">No</td>
<td class="green">Display the version number of emerge.</td>
</tr>
</tbody>
</table>
###Links
####Handbook
* [AMD64 Handbook](https://wiki.gentoo.org/wiki/Handbook:AMD64/Working/Portage)

####Manpages
* [EBUILD(1) Manpage](/man/ebuild.1.html)
* [EBUILD(5) Manpage](/man/ebuild.5.html)
* [EMERGE(1) Manpage](/man/emerge.1.html)
* [PORTAGE(5) Manpage](/man/portage.5.html)


##Layman
{% include links.html gp="Layman" gw="Layman" package="app-portage/layman" program="Layman" link="http://layman.sourceforge.net/" gr="gentoo/layman" %} is a command-line tool for managing Portage overlays. It can be installed with Portage (from the OGO) using the command:
{% include coder.html line1="emerge -av app-portage/layman" %}
or with Entropy using the command:
{% include coder.html line1="equo i -av app-portage/layman" %}
I would recommend installing Layman using Entropy as it is less error-prone and the Layman package it installs was compiled with all the USE flags required to add every type of overlay available (including Bazaar (bzr), Git, Mercurial (hg) and Subversion (svn)). Layman-added overlays (and the ebuilds contained within them) are stored in <code>/var/lib/layman/</code>.

###Layman Syntax
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
<table class="green" style="width: 100%; border: 1px; padding: 1em; vertical-align: middle;"><caption><strong>Table 3: Options for Layman</strong></caption>
<tbody>
<tr class="green">
<td class="title" style="width: 150px;">Long</td>
<td class="title">Short</td>
<td class="title">Meaning</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--nocolor</div></td>
<td class="green"><code>-N</code></td>
<td class="green">Remove colour codes from Layman output.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--quiet</div></td>
<td class="green"><code>-q</code></td>
<td class="green">Reduce output.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--quietness</div></td>
<td class="green"><code>-Q</code></td>
<td class="green">Takes a numerical value between 0 and 4 to determine the amount of output provided. 0 means no output, 4 means full output.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--verbose</div></td>
<td class="green"><code>-v</code></td>
<td class="green">Makes Layman give more output details, such as a description of the overlays you download.</td>
</tr>
</tbody>
</table>
<table class="green" style="width: 100%; border: 1px; padding: 1em; vertical-align: middle;"><caption><strong>Table 4: Actions for Layman</strong></caption>
<tbody>
<tr class="green">
<td class="title" style="width: 130px;">Long</td>
<td class="title">Short</td>
<td class="title">Meaning</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--add</div></td>
<td class="green"><code>-a</code></td>
<td class="green">Add overlay.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--delete</div></td>
<td class="green"><code>-d</code></td>
<td class="green">Delete overlay. Specify "ALL" to delete all locally installed overlays.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--disable</div></td>
<td class="green"><code>-D</code></td>
<td class="green">Disable overlay. Specify "ALL" to disable all locally-installed overlays.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--info</div></td>
<td class="green"><code>-i</code></td>
<td class="green">Display all available information about the overlay.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--list</div></td>
<td class="green"><code>-L</code></td>
<td class="green">List all available overlays. Note that these overlays are not necessarily installed on your system.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--list-local</div></td>
<td class="green"><code>-l</code></td>
<td class="green">List all locally-installed overlays.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--readd</div></td>
<td class="green"><code>-r</code></td>
<td class="green">Re-add overlay(s) specified, to re-add all overlays, use the input "ALL".</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--sync</div></td>
<td class="green"><code>-s</code></td>
<td class="green">Synchronize (or in other words, update) overlay(s) specified. To sync them all use the input "ALL" or use the
<code>-S</code> option mentioned below.</td>
</tr>
<tr class="green">
<td class="green">
<div class="code">--sync-all</div></td>
<td class="green"><code>-S</code></td>
<td class="green">Update all overlays.</td>
</tr>
</tbody>
</table>
## Entropy
{% include image.html image="Rigo-Application-Browser.png" width="1366" height="738" float="none" description="Rigo Application Browser running under KDE Plasma 5" %}

{% include links.html package="sys-apps/entropy" program="Entropy" gr="Sabayon/entropy" sw="En:Entropy" link="/man/equo.pdf" pdf="PDF" %}, is a PMS that was specifically designed for Sabayon by Fabio Erculiani, the original creator of Sabayon. Its first unstable release to be added to Sabayon was in July 2008 when {% include forum.html f="60" t="13917" link="Sabayon 3.5 was released" %} and its first stable release to be added to Sabayon was made in May 2011 with the [release of Sabayon 6](https://lxnay.wordpress.com/2011/05/11/sabayon-6-entropy-1-a-new-era-is-about-to-come/). Unlike Portage which is primarily designed to install source code packages (although it can also install binary packages), Entropy is designed to work with binary packages only. Binary packages take less time than source code packages to install and requires less user know-how and input. Entropy is also unique in that it has two official front-ends: command-line/textual (**Equo**) and graphical (**Rigo**). I personally favour using the command-line for installing packages on Linux distributions, because in my experience graphical installers are more prone to crashes during installation than their command-line/textual counterparts.

Compared to Portage, Entropy is far more simple to use, if you go to the Entropy Store you can see the USE flags used to compile the software packages provided by Entropy, as all packages provided by Entropy had to be compiled with Portage on another machine first (in `.tbz2` format). Entropy contains packages from the Portage Tree and packages from Sabayon's own overlays, which are called `sabayon` and `sabayon-distro`, respectively. Entropy is also safer to use and support for using Entropy to install packages is far better than support for Portage-installed packages on the [Sabayon forums](https://forum.sabayon.org/).

###Equo Syntax
The generalized syntax for Entropy's command-line front-end, Equo, is:
{% include coder.html line1="equo [<em>action</em>] [<em>options</em>] [<em>ebuild</em> | <em>atom</em>]" %}
Some (but by no stretch of the imagine all) options and actions for Equo are listed in tables 4 and 5, below. Note some options are only available for certain actions, for details see the man pages for Equo and its various actions (e.g., run `man equo install` for the equo install manual). One action and another option that are not covered in these tables, that I felt were worthwhile mentioning, are repo and mirrorsort, respectively. The command:
{% include coder.html line1="equo repo mirrorsort &lt;REPO&gt;" %}
where `<REPO>` is the name of an Entropy repository (e.g., `sabayonlinux.org`, `sabayon-weekly` or `sabayon-limbo`), can be used to optimize the order of preference for the repository's mirrors, hence, potentially, accelerating the process by which Sabayon downloads software packages.
<table class="green" style="width: 100%; border: 1px; padding: 1em; vertical-align: middle;"><caption><strong>Table 5: Options for Equo</strong></caption>
<tbody>
<tr class="green">
<td class="title" style="width: 130px;">Option</td>
<td class="title" style="width: 660px;">Meaning</td>
</tr>
<tr class="green">
<td class="green"><code>-a</code>, <code>--ask</code></td>
<td class="green">Ask before performing actions. For example <code>equo i -a [ebuild]</code> will ask you before it will install the package specified by the <code>ebuild</code> argument.</td>
</tr>
<tr class="green">
<td class="green"><code>--deep</code></td>
<td class="green">Reinstall dependencies, even if unnecessary.</td>
</tr>
<tr class="green">
<td class="green"><code>-h</code>, <code>--help</code>, <code>help</code></td>
<td class="green">Print help information.</td>
</tr>
<tr class="green">
<td class="green"><code>-o</code></td>
<td class="green">If given to the "install" action this option will cause only the package's dependencies to be installed. This is the equivalent to running <code>apt-get build-dep</code> for APT.</td>
</tr>
<tr class="green">
<td class="green"><code>-p</code>, <code>--pretend</code></td>
<td class="green">Show what would be done, had this option not been given.</td>
</tr>
<tr class="green">
<td class="green"><code>--purge</code></td>
<td class="green">(for upgrade) it will remove unmaintained packages, if any.</td>
</tr>
<tr class="green">
<td class="green"><code>-q</code>, <code>--quiet</code></td>
<td class="green">Quiet (reduce) output.</td>
</tr>
<tr class="green">
<td class="green"><code>-v</code>, <code>--verbose</code></td>
<td class="green">Verbose output.</td>
</tr>
</tbody>
</table>
<br/>
<table class="green" style="width: 100%; border: 1px; padding: 1em; vertical-align: middle;"><caption><strong>Table 6: Actions for Equo</strong></caption>
<tbody>
<tr class="green">
<td class="title">Long</td>
<td class="title">Short</td>
<td class="title">Meaning</td>
<td class="title" style="width: 140px;">Manpage</td>
</tr>
<tr class="green">
<td class="green"><code>cleanup</code></td>
<td class="green">N/A</td>
<td class="green">Remove downloaded packages and clean temporary directories.</td>
<td class="green"><a href="/man/equo-cleanup.1.html">equo-cleanup.1</a></td>
</tr>
<tr class="green">
<td class="green"><code>config</code></td>
<td class="green">N/A</td>
<td class="green">Configure installed packages.</td>
<td class="green"><a href="/man/equo-config.1.html">equo-config.1</a></td>
</tr>
<tr class="green">
<td class="green"><code>deptest</code></td>
<td class="green"><code>dt</code></td>
<td class="green">Look for unsatisfied dependencies.</td>
<td class="green"><a href="/man/equo-deptest.1.html">equo-deptest.1</a></td>
</tr>
<tr class="green">
<td class="green"><code>install</code></td>
<td class="green"><code>i</code></td>
<td class="green">Install software.</td>
<td class="green"><a href="/man/equo-install.1.html">equo-install.1</a></td>
</tr>
<tr class="green">
<td class="green"><code>libtest</code></td>
<td class="green"><code>lt</code></td>
<td class="green">Look for missing libraries required by other packages.</td>
<td class="green"><a href="/man/equo-libtest.1.html">equo-libtest.1</a></td>
</tr>
<tr class="green">
<td class="green"><code>mask</code></td>
<td class="green">N/A</td>
<td class="green">Mask packages given as input.</td>
<td class="green"><a href="/man/equo-mask.1.html">equo-mask.1</a></td>
</tr>
<tr class="green">
<td class="green"><code>remove</code></td>
<td class="green"><code>rm</code></td>
<td class="green">Remove packages given as input.</td>
<td class="green"><a href="/man/equo-remove.1.html">equo-remove.1</a></td>
</tr>
<tr class="green">
<td class="green"><code>rescue</code></td>
<td class="green">N/A</td>
<td class="green">Tools to rescue system</td>
<td class="green"><a href="/man/equo-rescue.1.html">equo-rescue.1</a></td>
</tr>
<tr class="green">
<td class="green"><code>search</code></td>
<td class="green"><code>s</code></td>
<td class="green">Search for packages in repositories.</td>
<td class="green"><a href="/man/equo-search.1.html">equo-search.1</a></td>
</tr>
<tr class="green">
<td class="green"><code>unmask</code></td>
<td class="green">N/A</td>
<td class="green">Unmask packages given as input.</td>
<td class="green"><a href="/man/equo-unmask.1.html">equo-unmask.1</a></td>
</tr>
<tr class="green">
<td class="green"><code>update</code></td>
<td class="green"><code>up</code></td>
<td class="green">Update repositories.</td>
<td class="green"><a href="/man/equo-update.1.html">equo-update.1</a></td>
</tr>
<tr class="green">
<td class="green"><code>upgrade</code></td>
<td class="green"><code>u</code></td>
<td class="green">Upgrade packages that have been updated (in the software repositories) since they were installed, or since you last ran this command.</td>
<td class="green"><a href="/man/equo-upgrade.1.html">equo-upgrade.1</a></td>
</tr>
</tbody>
</table>

#Mixing Entropy with Portage
By default Entropy and Portage act fairly independently of one another. In order for you to use them together, you must tell Entropy that you are also using Portage to install packages by running:
<div class="code"><span class="coder">root #</span>  equo rescue spmsync</div>
whenever you emerge, unmerge or update a package. I have this saved in my `~/.bashrc` (for root user) as the function `spm`, so as to make it easier for me to run it when necessary. What this will do is it will cause packages you installed with Portage to be acknowledged by Entropy, as otherwise Entropy has no clue as to their existence. After this you may also wish to mask packages you installed with Portage, so as to prevent Entropy from attempting to upgrade or remove software installed with Portage. To do this run:
<div class="code"><span class="coder">root #</span>  equo mask &lt;PACKAGE&gt;</div>
To prevent Entropy from downgrading emerged packages you need to edit
<div class="code">/etc/entropy/client.conf</div>
and uncomment (removing the hashtag `#`) the line
<div class="code">ignore-spm-downgrades = enable</div>
Packages installed with Entropy are almost always safer (less likely to lead to system breaks or have bugs) than their Portage-installed counterparts, so when you install a package with Portage that has several non-installed dependencies I would suggest you install as many of these dependencies as possible with Entropy before you merge the remaining dependencies and the package itself with Portage.

##Further Reading
* ["HOWTO: Safely mix Entropy and Portage" @ Sabayon Wiki](https://wiki.sabayon.org/index.php?title=HOWTO:_Safely_mix_Entropy_and_Portage)

#The Algorithm
Occasionally, while browsing the internet, I find a program I would like to install on my Sabayon machine. Here is the algorithm I follow to install it:
<ol>
	<li>I search for whether or not said software is available in the <a href="https://packages.sabayon.org" target="_blank">Entropy Store</a>. If it is there I install it with Equo (e.g., via running {% include coders.html line1="equo i &lt;PACKAGE&gt;" %}), if not I proceed to the next step.</li>
	<li>I search for whether or not said software is available in the main <a href="https://packages.gentoo.org" target="_blank">Gentoo Overlay</a>. If it is there I install it with Emerge (e.g., via running {% include coders.html line1="emerge -av &lt;PACKAGE&gt;" %}), otherwise I move onto the next step.</li>
	<li>I search for whether or not the software is available in any <a href="http://gpo.zugaina.org/" target="_blank">unofficial overlays</a>. If it is, and the version number is acceptable (usually I prefer the latest stable version of a software, but sometimes I will settle for fairly recent stable versions) I may add the containing overlay with
{% include coder.html line1="layman -a &lt;OVERLAY&gt;" %}
then sync both Portage and Layman with (I also have this added as a function called <code>sync</code> in my <code>~/.bashrc</code> script)
{% include coder.html line1="emerge --sync && layman -S" %}
and then emerge the package with
{% include coder.html line1="emerge -av &lt;PACKAGE&gt;" %}</li>
otherwise I proceed to the next step. If the package has several dependencies I try to install as many as possible with Entropy, before I emerge the remaining dependencies and <code>&lt;PACKAGE&gt;</code> itself. Often using pretend instead of ask options (<code>emerge -pv...</code> instead of <code>emerge -av...</code>) will be helpful if you want a list of packages to install with Entropy. Sometimes emerge will say you need to adjust your USE flags (stored in <code>/etc/portage/package.use/</code>), package keywords (stored in <code>/etc/portage/package.keywords</code>), list of accepted software licenses (stored in <code>/etc/portage/make.conf</code>) and alike to install the package you want.
	<li>If all else fails I get the source code and try compiling and installing it myself. This step is last, because this step is very error prone if, like me, you do not know an awful lot about compiling software or programming, in general. This step depends on the instructions in any INSTALL or README file included with the source code. If these files do not exist I use my knowledge on common compiling methods to install the software. For example, if the source code is written in C/C++ often there will be an autogen.sh or configure file somewhere in the source code base directory, which I will run (usually by opening up a terminal emulator and running {% include codeus.html line1="./&lt;FILE&gt;" %} where &lt;FILE&gt; is either autogen.sh or configure)) and read the output of. If the output includes an error, concerning some missing dependency, I will try to install said dependency (following the same algorithm outlined here) and re-run the autogen.sh/configure script or if the dependency is on my PC already I will try giving the autogen.sh or configure file a PATH variable pointing to the dependency's location on my system when I re-execute them. If no errors are encountered when running these scripts, or I manage to fix them with the methods I just mentioned I then run
{% include codeu.html line1="make" line2="sudo make install" %}
While if the source code is written in Python I look for a setup.py file and run
{% include coder.html line1="python setup.py install" %}</li>
	<li>If errors are encountered at any of these steps (by errors I do not include the absence of available software packages as errors) I also attempt to seek support. For example, if the failure happened with an added unofficial overlay I often find the GitHub repository that houses the overlay and create a new issue for said repository. This process of getting support often occurs quite slowly, taking several days, at least, to get any solution to the problem, so often if failures happen I move onto the next step of this algorithm (if there are any steps left) before I report the failures.</li>
</ol>
#Examples
##OpenRA
{% include image.html image="OpenRA.jpg" description="An example of OpenRA running" width="1920" height="1080" float="none" %}

{% include links.html package="games-strategy/openra" program="OpenRA" link="http://www.openra.net/" wp="OpenRA" gr="OpenRA/OpenRA" wiki="https://github.com/OpenRA/OpenRA/wiki" %} is a free and open-source futuristic strategy game. For me, it reminds me of one of my favourite Windows games, [Outlive](https://en.wikipedia.org/wiki/Outlive). OpenRA is unusual in that it is not available in the Entropy Store, although a [few ebuilds](https://packages.gentoo.org/packages/games-strategy/openra) for it do exist in the Portage Tree, although it is worthwhile mentioning that these ebuilds are often out of date. For example, as of 26 November 2015 the latest ebuild available in the Portage Tree is for version 20141029 (note how this number represents the date of the release, 29 October 2014), while the latest release is 20150919 (released 19 September 2015). There are unofficial overlays (such as [games-overlay](https://github.com/hasufell/games-overlay)) that contain more recent versions of OpenRA, although it was not until 19 October 2015 that an ebuild for 20150919 was added to this overlay.

To install the latest version available of OpenRA on Sabayon one has four main options:
<ol>
<li>Emerge the package from the Portage Tree. This will get you release 20141029, at best. I have not tried this due to how old a version this package is. To do this simply run:
{% include coder.html line1="emerge games-strategy/openra" %}</li>
<li>Add the <code>games-overlay</code> with Layman and emerge the latest version available from it, 20150919. To do this run:
{% include coder.html line1="layman -a games-overlay" line2="emerge --sync && layman -S" line3="emerge games-strategy/openra-20150919::games-overlay" %}</li>
<li>Add the <code><a href="https://github.com/cerebrum/dr">dr</a></code> overlay (not available with Layman) and emerge the latest version, 20150919. This option I have not done, due to the fact it needs freetype unmerged and that would break my system. To do this run:
{% include coder.html line1="layman -o http://github.com/cerebrum/dr/raw/master/repo.xml -f -a dr" line2="emerge --sync && layman -S" line3="emerge games-strategy/openra::dr" %}</li>
<li>Compile the source code yourself and install OpenRA from that (which will get you the latest version of OpenRA, 20150919). This option I have succeeded in doing and is how OpenRA is currently installed on my system. To do this I ran:
{% include codeu.html line1="wget -c https://github.com/OpenRA/OpenRA/archive/release-20150919.tar.gz | tar -xz" line2="cd OpenRA-release-20150919" line3="make dependencies && make all" %}
This does not add an executable of OpenRA to <code>/usr/games/bin/</code> and hence running <code>openra</code> from the command-line will not start the game. So after this I also created a shell script file called <code>/usr/games/bin/openra</code> with nano (that is, I ran
{% include coder.html line1="nano /usr/games/bin/openra" %}
) with the line <code>mono --debug /path/to/OpenRA.Game.exe</code> where <code>/path/to</code> is replaced with the path to where you built OpenRA from source code (which for me is <code>/home/fusion809/Programs/OpenRA-release-20150919)</code>.</li>
</ol>

###External links
* [Download Page](http://www.openra.net/download/)
* [Frequently Ask Questions](https://github.com/OpenRA/OpenRA/wiki/FAQ)
* [Official Forums](http://www.sleipnirstuff.com/forum/viewforum.php?f=80)
##SuperTux
{% include image.html image="Supertux-checkpoint.png" description="SuperTux 0.3.3" float="none" width="800" height="600" %}

{% include links.html package="games-arcade/supertux" program="SuperTux" link="http://supertux.github.io/" wp="SuperTux" gr="SuperTux/supertux" %} is a free and open-source (licensed under GNU GPLv3) 2D platform game that was first released in April 2003. Its gameplay is very similar to that of the proprietary game, Super Mario Bros. The initial 2003 release was called "Milestone 1" (or if you would prefer a version number 0.1.3) and is the version of SuperTux available in the Entropy Store and the Portage Tree I have installed this version with Entropy, using:
{% include coder.html line1="equo i games-arcade/supertux" %}
This game is enjoyable, giving several hours of entertainment for me at least. Despite this, due to my preoccupation with using the latest software available, I looked to install the latest version of SuperTux (which are developmental, but still fairly stable, versions of Milestone 2 (or SuperTux 2) which is due to be released in December 2015). I tried installing it using the unofficial [`yarik-overlay`](https://github.com/yarikmsu/yarik-overlay) and while this succeeded I found the most stable version provided by it (0.3.4) plagued by bugs. To do this I ran:
{% include coder.html line1="layman -a yarik-overlay" line2="emerge --sync && layman -S" line3="emerge -av supertux" %}
So after this, I decided to give manually building and installing it myself, a go. Then I got the [latest tarball source code release](https://github.com/SuperTux/supertux/releases/download/v0.3.5a/supertux-0.3.5a.tar.bz2) (<code>tar -xvf supertux-0.3.5a.tar.bz2</code> should do this from the command-line), decompressed it, changed into the supertux-0.3.5a directory and ran:
{% include codeu.html line1="mkdir build" line2="cd build" line3="cmake .. -DCMAKE_INSTALL_PREFIX=/usr" line4="make" line5="sudo make install" %}
this ran without error and the resulting SuperTux 2 installation (which by-the-way I have managed to keep on my system despite never removing my SuperTux 1 Entropy installation) was less buggy, in fact, I do not believe any bugs were left. Later, I replaced this installation with the latest git release of SuperTux, via running:
{% include codeu.html line1="git clone https://github.com/SuperTux/supertux" line2="cd supertux" line3="mkdir build && cd build" line4="cmake .. -DCMAKE_INSTALL_PREFIX=/usr" line5="make" line6="sudo make install" %}

###External links
* [User Manual](https://github.com/SuperTux/supertux/wiki/User-Manual)

#Footnotes
[^1]: Specifically the [emerge.1.html](/man/emerge.1.html) manpage
