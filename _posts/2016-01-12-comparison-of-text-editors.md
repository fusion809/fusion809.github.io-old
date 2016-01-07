---
layout: post
title:  "A Comparison of Text Editors"
date:   2016-01-12 +1000
categories: comparisons, text-editors
redirect_from:
      - /comparison-of-text-editors/
---
{% include draft.html %}
{% include image.html image="Atom-1.3.2.png" width="1130px" float="none" description="Atom 1.3.2 running under the Deepin Desktop Environment" %}

**Text editors** are essential programs for software developers and programmers in general, as they enable users to write and edit source code files. They are popular tools used by both experienced and novice Linux users. In this post I will compare the various text editors available for Sabayon, with regard to several features and properties of each. It is important to note that I am not a programmer, my experience with programming is limited to mostly MATLAB/GNU Octave scripts, a small handful of Python scripts I wrote for technical computing (that is, numerical analysis) and a few bash scripts I have written to make my life easier, when I use Linux systems.

On Sabayon there are over a dozen different text editors (see, for example, the category [app-editors](http://gpo.zugaina.org/app-editors/) at gpo.zugaina.org) available for installation, many of these are part of the core applications of complete desktop environments, such as GNOME or KDE Plasma. Each of these text editors also has its own target audience, with some being designed to be used only by seasoned programmers while others are useful only for writing simple text files. Entropy and Portage both use the category for programs relating to text editing of `app-editors`. To list the Entropy packages in this category, from the command-line, run:
{% include codeu.html line1="equo search &quot;app-editors&quot;" %}
While to list ebuilds in installed overlays, plus the Portage tree, within the category of app-editors run:
{% include codeu.html line1="emerge --search &quot;%@^app-editors&quot;" %}
To search all overlays run:
{% include codeu.html line1="eix-update &amp;&amp; eix-remote update &amp;&amp; eix -RCc &quot;app-editors&quot;" %}
This post will compare several different text editors that are available for Sabayon (I know as I have installed them all myself), with respect to several aspects.
## Comparisons
An ideal or perfect text editor would be one with the following features:
<ul>
	<li><strong>Syntax highlighting</strong> for every computer language available (computer language includes programming languages (such as C, C++, JavaScript, Lua, Python, <em>etc.</em>), markup languages (such as HTML), style sheet languages (like CSS), <em>etc.</em>)</li>
	<li>Be <strong>extensively customizable</strong> (or some would say "hackable"), with user-supplied scripts and style sheets.</li>
	<li>Be <strong>accessible</strong> to <strong>inexperienced users</strong> and <strong>experienced users </strong>alike.</li>
	<li>Be <strong>free and open-source</strong> (licensed under either a permissive (e.g., MIT) or copyleft (e.g., GNU GPL) license).</li>
	<li>Be able to run on any <strong>operating system platform</strong>.</li>
	<li>Has <strong>keyboard shortcuts</strong> (such as <kbd>Ctrl</kbd>+<kbd>C</kbd> for copy or <kbd>Ctrl</kbd>+<kbd>V</kbd> for paste) that are intuitive and easily editable.</li>
	<li>Be <strong>fast</strong> to <strong>start </strong>and use minimal system resources to run.</li>
	<li>Be <strong>stable</strong>, not likely to <strong>crash</strong> or experience other bugs. As part of this, the text editor should also have a community of developers to help with rapid and effective troubleshooting whenever an issue arises.</li>
</ul>
In line with this, each section in which I discuss a particular text editor (TE) will have the following sections:
<ul>
	<li><strong>Background</strong>: relevant history and technical details of the TE.</li>
	<li><strong>Customizability</strong>: How customizable is the TE. Are there themes, plugins, extensions, <em>etc.</em> available for the TE?  Is it possible to customize the TE with user-supplied scripts.</li>
	<li><strong>Features</strong>: What other features does the TE have? Like how many different computer languages does it offer syntax highlighting and auto-indentation for.</li>
	<li><strong>Obtaining it</strong>: how can one get the TE on Sabayon?</li>
	<li><strong>Advantages (Pros)</strong>/<strong>Disadvantages (Cons)</strong>: this is where I will summarize the positive and negative points of the previous sections as well as discuss how easy it is to use the TE.</li>
	<li><strong>Ratings</strong>: this is where I provide a numerical rating for each of the following points (from 0 to 10, 0 being awful/non-existent, 10 being perfect):
<ul>
	<li><strong>Availability</strong>: how easy it is to get the TE on Sabayon. A score of 10 would mean that the text editor is pre-installed on a default Sabayon installation. While a score of 8 would mean that it is possible to install the package quite easily with Entropy.</li>
	<li><strong>Beginner-friendliness</strong>: how steep is the learning curve of using this TE? That is, how difficult would it be for me, a non-programmer, to get to know this TE enough to write scripts in it, within an hour of first trying it?</li>
	<li><strong>Customizability</strong>: how easily and extensively customizable the TE is.</li>
	<li><strong>Features</strong>: how extensive is the TE's syntax-highlighting cover of computer languages (that is, what proportion of computer languages can the TE do syntax highlighting for?). Does the TE also have IDE-type features such as in-built Python terminal, or shell terminal, <em>etc?</em></li>
	<li><strong>Popularity</strong>: how popular is this TE amongst Sabayon users? According to <a href="https://www.opinionstage.com/polls/2300580" target="_blank">this poll</a>. I will use just a numerical rating, as I expect this poll will likely get a few extra votes while I am writing this post.</li>
	<li><strong>System resource usage</strong> (<strong>SRU</strong>): how much CPU/RAM does this TE use? How much disk space does it take up? How much brandwidth is taken up downloading it? Yet again I will be using ps mem to assess RAM usage.</li>
	<li><strong>Overall</strong>: overall how satisfied am I with this TE?</li>
</ul>
</li>
</ul>
<h1>Atom</h1>
[caption id="attachment_557" align="alignnone" width="1366"]<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/Atom-functions.php-running-under-Moksha.png"><img class="wp-image-557 size-full" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/Atom-functions.php-running-under-Moksha.png" alt="Atom on Sabayon Linux, showing syntax highlighting of a PHP script" width="1366" height="734" /></a> <strong>Atom on Sabayon Linux, showing syntax highlighting of a PHP script</strong>[/caption]
<h2>Background</h2>
<strong>Atom</strong> is a free and open-source (licensed under MIT) text editor developed by GitHub, Inc. Its first public release was in 2014, although its first stable release (1.0 release) was not until June 2015. It is unique amongst the text editors listed here in a few different ways, firstly, its target audience is very wide with it being designed to be usable for inexperienced programmers as well as seasoned programmers and software developers. Secondly, it is written in CoffeeScript, HTML, JavaScript and Less — computer languages usually used to write web pages.
<h2>Customizability</h2>
Atom is very customizable, via several themes and plugins that can be installed from the command-line, using the command
<div class="code"><span class="codeu">user $</span>  apm install &lt;PACKAGE&gt;</div>
or from within Atom itself. I personally prefer the command-line, as I have had some bad experiences with the built-in installer. From the command-line the command for installing new themes or plugins is:
<div class="code"><span class="codeu">user $</span>  apm install &lt;PACKAGE&gt;</div>
where &lt;PACKAGE&gt; is the plugin/theme's name. Customizations, including plugins and themes are stored in <code>~/.atom. </code>Advanced customization (for example, of keyboard shortcuts) must be done by directly editing files in this directory. For example, in order to edit your keyboard shortcuts you need to edit <code>~/.atom/keymap.cson</code>.
<h2>Features</h2>
Atom has plugins for syntax highlighting and auto-indentation of most major computer languages including:
<ul>
	<li>Ada</li>
	<li>C</li>
	<li>C#</li>
	<li>C++</li>
	<li>CoffeeScript</li>
	<li>CSS</li>
	<li>Fortran</li>
	<li>GNU Octave/MATLAB</li>
	<li>HTML</li>
	<li>Java</li>
	<li>JavaScript</li>
	<li>Less</li>
	<li>Lua</li>
	<li>MediaWiki</li>
	<li>PyMOL</li>
	<li>Python</li>
	<li>R</li>
	<li>SageMath</li>
	<li>Scilab</li>
	<li>Shell script, including Bash and Zsh.</li>
	<li>XML</li>
</ul>
and several others. It also has packages that provide other features, including previews for markup languages such as HTML and markdown, an in-built terminal, <em>etc.</em>
<h2>Obtaining it</h2>
<div style="padding: 1px; border: 2px solid #ffa0a0; background-color: #ffa0a0;"><strong><em>Main Post</em></strong>: <a href="http://linux.x10host.com/blog/index.php/2015/09/14/installing-atom-on-sabayon-linux/">Installing Atom on Sabayon</a>.</div>
Atom can be installed via two major methods: either adding an overlay with Layman that contains an Atom ebuild and then installing this package with Portage or manually building the program from source code. I usually prefer the manual route as any momentary glitch in your internet connection can easily stuff up an Portage build, while with a manual build it is no big deal if it does as you can just re-run <code>script/build</code> and then proceed with the installation as usual. If you would rather install Atom from a binary package (experimental) go to <a href="https://github.com/fusion809/sabayon-tools" target="_blank">this GitHub repository</a> and see the instructions there.
<h2>Disadvantages (Cons)</h2>
<ul>
	<li>Slow to start</li>
	<li>Must be installed via one of two fairly error-prone methods, or a third experimental method.</li>
</ul>
<h2>Advantages (Pros)</h2>
<ul>
	<li>Easily and extensively customizable</li>
	<li>Intuitive and easy to learn</li>
	<li>Support for a wide range of different computer languages</li>
	<li>Displays directory structure in (left) side panel</li>
</ul>
<h2>Ratings</h2>
<ul>
	<li><strong>Availability</strong>: 3-4. It is possible to install Atom on Sabayon, but it is more error-prone than it is on more popular distributions like Debian, Fedora, openSUSE and Ubuntu, which have pre-compiled binary packages available on the Atom website.</li>
	<li><strong>Beginner-friendliness</strong>: ≥8. It is easy to get to used for beginners, as it uses the keymap as several basic text editors like gedit and Notepad.</li>
	<li><strong>Customizability</strong>: 8. It is totally customizable, for those with the skill and time. For lay persons its customizability is more limited, to customization with available packages and themes.</li>
	<li><strong>Features</strong>: 8. Most computer languages are covered by Atom's syntax highlighting plugins, but some are not, for example, it does not yet have support for <a href="https://discuss.atom.io/t/syntax-highlighting-for-desktop-configuration-files/21764">desktop configuration files.</a></li>
	<li><strong>Popularity</strong>: ≥8. While this text editor is new, its popularity on Sabayon is fairly high and increasing.</li>
	<li><strong>SRU</strong>: 2. <a href="https://github.com/fusion809/sabayon-tools" target="_blank">Atom 1.0.19</a> is a 59.4 MB download, when it is installed it takes up a total space of 196.2 MB. Here is my <code>ps mem</code> table for running under LXDE:
<pre> Private  +   Shared  =  RAM used	Program

259.6 MiB +  42.3 MiB = 301.9 MiB	atom (5)
---------------------------------
                        301.9 MiB
=================================
</pre>
</li>
	<li><strong>Overall</strong>: 7-9. It is my favourite text editor, but it is still early days, its SRU and boot time are issues that are being worked on, new packages and themes are created every week. It may become easier to install it on Sabayon, in the future, perhaps in response to my <a href="https://bugs.sabayon.org/show_bug.cgi?id=5011">request</a> that Atom be added to the Sabayon overlay.</li>
</ul>
<h2>Website(s)</h2>
<ul>
	<li><a href="https://github.com/atom/atom">GitHub Repository</a></li>
	<li><a href="https://github.com/atom/atom/blob/master/docs/build-instructions/linux.md">Linux Build Instructions</a></li>
	<li><a href="https://atom.io">Official Website</a></li>
</ul>
<h1>Bluefish</h1>
[caption id="attachment_603" align="alignnone" width="1366"]<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/2015-10-19-204920_1366x768_scrot.png"><img class="size-full wp-image-603" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/2015-10-19-204920_1366x768_scrot.png" alt="Figure 2: Bluefish running under LXDE" width="1366" height="741" /></a> <strong>Bluefish running under LXDE</strong>[/caption]
<h2>Background</h2>
<strong>Bluefish</strong> is a text editor, primarily intended for web development and programming, as it provides syntax highlighting support and other features mostly for web markup, programming and style sheet languages.
<h2>Customizability</h2>
I have limited experience with Bluefish but from what I can gather, it is customizable, although I cannot comment on how extensive this customizability is.
<h2>Features</h2>
Syntax highlighting is available for almost (if not all) all computer languages used in web development.
<h2>Obtaining it</h2>
It can be installed with Entropy or Portage (and is available in the Portage Tree). With Entropy run:
<div class="code"><span class="coder">root #</span>  equo i -av app-editors/bluefish</div>
While to install it with Portage run:
<div class="code"><span class="coder">root #</span>  emerge -av app-editors/bluefish</div>
<h2>Advantages (Pros)</h2>
<ul>
	<li>Customizable</li>
	<li>Has features that would appeal to a web developer</li>
</ul>
<h2>Disadvantages (Cons)</h2>
<ul>
	<li>?</li>
</ul>
<h2>Ratings</h2>
<ul>
	<li><strong>Availability</strong>: &gt;8. Available in the Entropy Store and from Portage</li>
	<li><strong>Beginner-friendliness</strong>: &gt;4. Its keyboard shortcuts are intuitive (e.g., <kbd>Ctrl</kbd>+<kbd>C</kbd> to copy), behind this my experience with it is not extensive enough for me to comment.</li>
	<li><strong>Customizability</strong>: &gt;4. It is customizable, but as I do not have much experience with this text editor, I do not know just how customizable it is.</li>
	<li><strong>Features</strong>: &gt;7. It is possible to do compiling and use integrated development environment (IDE)-type features.</li>
	<li><strong>Popularity</strong>: 2. It has received one vote on my poll, thus far.</li>
	<li><strong>SRU</strong>: 5. Bluefish (<a href="https://packages.sabayon.org/show/bluefish,155845,sabayon-weekly,amd64,5,standard" target="_blank">2.2.7</a>) is a 3.1 MB download with Entropy and takes up 9.5 MB HDD space when installed. This is my <code>ps mem</code> table:
<pre>Private  +   Shared  =  RAM used	Program

 53.1 MiB +   4.3 MiB =  57.4 MiB	bluefish
---------------------------------
                         57.4 MiB
=================================
</pre>
</li>
	<li><strong>Overall</strong>: ~7. Cannot be too confident as to this rating without using this text editor more.</li>
</ul>
<h2>Website(s)</h2>
<ul>
	<li><a href="http://bluefish.openoffice.nl/index.html">Official Website</a></li>
	<li><a href="http://bfwiki.tellefsen.net/index.php/Main_Page">Official Wiki</a>
<ul>
	<li><a href="http://bfwiki.tellefsen.net/index.php/Manual_2_ToC">Official Manual</a></li>
</ul>
</li>
</ul>
<h1>Geany</h1>
[caption id="attachment_689" align="alignnone" width="1366"]<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/Geany-1.24.1.png"><img class="size-full wp-image-689" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/Geany-1.24.1.png" alt="Geany 1.24.1 running under Moksha" width="1366" height="740" /></a> <strong>Geany 1.24.1 running under Moksha</strong>[/caption]
<h2>Background</h2>
<strong>Geany</strong> is a lightweight GTK+ and Scintilla-based text editor with basic IDE-type features that was originally developed by Enrico Tröger in 2005. It is licensed under GNU GPLv2.
<h2>Customizability</h2>
The <code>~/.geany</code> directory is where customizations are kept. This customization can be made with code <a href="http://www.geany.org/Download/Extras">snippets</a> (written in HTML, LaTeX, PHP and Python), <a href="http://www.geany.org/Support/Plugins">plugins</a>, <a href="https://github.com/geany/geany-themes/">themes</a>, <em>etc</em>.
<h2>Features</h2>
Geany provides auto-indentation and syntax-highlighting for over a dozen different computer languages. Geany has an embedded terminal emulator. Several extra features can be added to Geany, using plugins.
<h2>Obtaining it</h2>
Geany can be easily installed using Entropy or Portage. Using Entropy run:
<div class="code"><span class="coder">root #</span>  equo i geany</div>
while to install it using Portage run:
<div class="code"><span class="coder">root #</span>  emerge -av geany</div>
The latest version of Geany in the <a href="https://packages.sabayon.org/show/geany,126394,sabayon-weekly,amd64,5,standard" target="_blank">Entropy Store</a> is 1.24.1, while the latest version of Geany as of 24 October 2015 is 1.25 (released July 2015) which is available from the <a href="https://packages.gentoo.org/packages/dev-util/geany" target="_blank">Portage Tree</a>.
<h2>Disadvantages (Cons)</h2>
<ul>
<ul>
	<li>The list of supported computer languages, for syntax-highlighting and other features is fairly small, compared to Atom, Gedit, GNU Emacs and Vim. See for example, the screenshot below, showing allowed file types.</li>
</ul>
</ul>
<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/Geany-Document-File-Type-Programming-Languages.png"><img class="alignnone size-full wp-image-692" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/Geany-Document-File-Type-Programming-Languages.png" alt="Geany Document-&gt;File Type-&gt;Programming Languages" width="1366" height="740" /></a>
<ul>
	<li>The version of Geany in the Entropy Store is not the latest available</li>
</ul>
<h2>Advantages (Pros)</h2>
<ul>
	<li>It has a few IDE-type features.</li>
	<li>It is fairly lightweight.</li>
	<li>It is cross-platform, hence if you switch from Sabayon to another OS fairly frequently, it should not be too difficult to get Geany on said OS.</li>
	<li>Keyboard shortcuts are fairly intuitive.</li>
</ul>
<h2>Ratings</h2>
<ul>
	<li><strong>Availability</strong>: 7-8. I am rating it a little lower than 8, as the latest version in the Entropy Store is not the latest, even though the latest has been available for three months, thus far.</li>
	<li><strong>Beginner-friendliness</strong>: 8. It seems fairly user-friendly, as its keyboard shortcuts are fairly intuitive.</li>
	<li><strong>Customizability</strong>: 7? My experience with this TE is too limited for me to be confident with this rating.</li>
	<li><strong>Features</strong>: 8.</li>
	<li><strong>Popularity</strong>: 5-7.</li>
	<li><strong>SRU</strong>: 8. <a href="https://packages.sabayon.org/show/geany,126394,sabayon-weekly,amd64,5,standard" target="_blank">Geany 1.24.1</a> is a 3.4 MB download and takes up 9.8 MB HDD space when installed. Here is my <code>ps mem</code> table (remember I have neglected to include the RAM used by the embedded terminal emulator):
<pre>Private  +   Shared  =  RAM used	Program

 18.5 MiB +   3.1 MiB =  21.6 MiB	geany
---------------------------------
                         21.6 MiB
=================================
</pre>
</li>
	<li><strong>Overall</strong>: 8. Seems fairly good.</li>
</ul>
<h2>Website(s)</h2>
<ul>
	<li><a href="http://geany.org/">Official Website</a></li>
	<li><a href="http://wiki.geany.org/">Official Wiki</a></li>
</ul>
<h1>gedit</h1>
[caption id="attachment_611" align="alignnone" width="1366"]<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/gedit-screenshot-under-Moksha.png"><img class="size-full wp-image-611" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/gedit-screenshot-under-Moksha.png" alt="gedit running under Moksha" width="1366" height="735" /></a> <strong>gedit running under Moksha</strong>[/caption]
<h2>Background</h2>
<strong>gedit</strong> is a GTK+ based text editor that is one of the core applications of GNOME. In my opinion, it is the second most advanced text editor (after Kate) that is part of a desktop environment's core application suite. It is also more advanced than Windows' Notepad and Wordpad text editors.
<h2>Customizability</h2>
gedit is able to be customized, although from what I have gathered from reading its Wiki, customization options are limited as it does not seem to support advanced customization (via editing configure files, for example), rather there are some themes and plugins available but the plugins seem fairly limited.
<h2>Features</h2>
It supports syntax highlighting of several computer languages, including Desktop Configuration files (<code>.desktop</code> or <code>.directory</code>), MATLAB, MediaWiki, GNU Octave, Scilab and shell script, just to name a few I know are absent in a few basic text editors. Although it does not support syntax highlighting for PyMOL or SageMath, so I would not say its syntax highlighting is as extensive as Atom's or Vim's.
<h2>Obtaining it</h2>
It is easy to obtain gedit on Sabayon, via either Entropy or Portage (and yes it is available in the Portage Tree). If I am not mistaken, gedit comes with a default installation of Sabayon GNOME edition. To install it using Entropy on an existing Sabayon machine, simply run (you can omit the <code>-av</code> options, if you are sure gedit is not already installed on your system, I am using these options in case it is and you are not aware of it):
<div class="code"><span class="coder">root #</span>  equo i -av app-editors/gedit</div>
Alternatively to install it using Portage run:
<div class="code"><span class="coder">root #</span>  emerge -av app-editors/gedit</div>
<h2>Disadvantages (Cons)</h2>
<ul>
	<li>Customization options, beyond with a limited set of available themes and plugins, are limited.</li>
	<li>Fairly light on features, beyond syntax highlighting</li>
</ul>
<h2>Advantages (Pros)</h2>
<ul>
	<li>Light on resources</li>
	<li>Easy to obtain on Sabayon</li>
</ul>
<h2>Ratings</h2>
<ul>
	<li><strong>Availability</strong>: &gt;8.</li>
	<li><strong>Beginner-friendliness</strong>: &gt;8.</li>
	<li><strong>Customizability</strong>: 6.</li>
	<li><strong>Features</strong>: 8.</li>
	<li><strong>Popularity</strong>: ~7.</li>
	<li><strong>SRU</strong>: 7. Its Entropy package (<a href="https://packages.sabayon.org/show/gedit,158117,sabayon-weekly,amd64,5,standard" target="_blank">3.16.3</a>) size is 2.4 MB, while when installed it takes up 11.5 MB HDD space. Here is my <code>ps mem</code> table:
<pre>Private  +   Shared  =  RAM used	Program

 23.3 MiB +   3.5 MiB =  26.7 MiB	gedit
---------------------------------
                         26.7 MiB
=================================
</pre>
</li>
	<li><strong>Overall</strong>: 8.</li>
</ul>
<h2>Website(s)</h2>
<ul>
	<li><a href="https://wiki.gnome.org/Apps/Gedit">gedit article at the GNOME Wiki</a></li>
	<li><a href="https://help.gnome.org/users/gedit/">gedit User Manual</a></li>
</ul>
<h1>GNU Emacs</h1>
[caption id="attachment_619" align="alignnone" width="1366"]<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/GNU-Emacs.png"><img class="size-full wp-image-619" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/GNU-Emacs.png" alt="GNU Emacs running under Moksha" width="1366" height="740" /></a> <strong>GNU Emacs running under Moksha</strong>[/caption]
<h2>Background</h2>
<strong>GNU Emacs</strong> (<strong>GE</strong>) is an extensively-customizable text editor that is developed by the GNU Project. Its original developer was Richard Stallman, the founder of the GNU Project and its first release was in 1985. It belongs to a family of text editors called Emacs, which are text editors that are extensively customizable for users with sufficient programming knowledge. Emacs is abbreviated from <strong>E</strong>ditor <strong>Mac</strong>ro<b>s</b>, which refers to its origin as editor macros for the TECO text editor, that were developed, in part, by Richard Stallman. GE is written in C and Emacs Lisp (ELisp), a dialect of the Lisp programming language devised just for GE. ELisp is used to write extensions and provide extra functionalities for GE and related text editors like XEmacs.
<h2>Customizability</h2>
GE is one of the most customizable text editors available, but much of this customization must be done via writing code in ELisp, which limits much of this customization to advanced users only.
<h2>Features</h2>
GNU Emacs provides syntax highlighting for dozens of different computer languages, along with several features of IDEs like shell access, compiling code, using git from within GE, <em>etc. </em>The <a href="http://gpo.zugaina.org/app-emacs/" target="_blank">app-emacs</a> Portage category contains several plugins for GNU Emacs.
<h2>Obtaining it</h2>
GNU Emacs is available from the Entropy Store and the Portage Tree. To install it with Entropy run:
<div class="code"><span class="coder">root #</span>  equo i -av app-editors/emacs</div>
while to install it with Portage run:
<div class="code"><span class="coder">root #</span>  emerge -av app-editors/emacs</div>
<h2>Disadvantages (Cons)</h2>
<ul>
	<li>Has a steep learning curve for newcomers, hence making it inaccessible to newcomers to Linux and programming, in general.</li>
	<li>Has an unconventional keymap, which can take some time to learn. For example, to cut text you use <kbd>Ctrl+W</kbd>, as opposed to the usual <kbd>Ctrl+X</kbd>, while to paste text you use <kbd>Ctrl+Y</kbd>.</li>
</ul>
<h2>Advantages (Pros)</h2>
<ul>
	<li>Extensively customizable</li>
	<li>Heavy on features, especially for advanced users that can extend it using ELisp.</li>
	<li>Provides syntax highlighting for dozens, if not hundreds, of computer languages</li>
	<li>Has its own Wiki, manual and other documentation.</li>
</ul>
<h2>Ratings</h2>
<ul>
	<li><strong>Availability</strong>: &gt;8. Readily available for installation on Sabayon.</li>
	<li><strong>Beginner-friendliness</strong>: ≤5. Not particularly difficult for a newcomer to use as a basic text editor, but any further usage requires extensive knowledge of ELisp.</li>
	<li><strong>Customizability</strong>: &gt;9. Extensively customizable for all those that understand ELisp sufficiently.</li>
	<li><strong>Features</strong>: &gt;9. It is one of the most feature-packed text editors available today.</li>
	<li><strong>Popularity</strong>: 6. I am actually quite surprised by its lack of popularity on Sabayon, from what I have heard it should have ranked right up there with Vim for popularity.</li>
	<li><strong>SRU</strong>: 7-8. <a href="https://packages.sabayon.org/show/emacs,158951,sabayon-weekly,amd64,5,standard" target="_blank">Emacs 24.5</a> is a 35.8 MB download and takes up 142.2 MB HDD space when installed. Fairly lightweight as far as text editors go, RAM-wise. Here is my <code>ps mem</code> table:
<pre>
Private  +   Shared  =  RAM used	Program

 31.6 MiB +   3.0 MiB =  34.5 MiB	emacs-24
---------------------------------
                         34.5 MiB
=================================
</pre>
</li>
	<li><strong>Overall</strong>: 8. It is a very powerful text editor, but to me, its lack of customizability by those that do not understand ELisp is a significant disadvantage.</li>
</ul>
<h2>Website(s)</h2>
<ul>
	<li><a href="https://wiki.gentoo.org/wiki/GNU_Emacs" target="_blank">Gentoo Wiki Article</a></li>
	<li><a href="http://www.gnu.org/software/emacs/manual/">GNU Emacs Manuals Online</a></li>
	<li><a href="http://www.emacswiki.org/emacs/EmacsWiki">Oddmuse-powered Emacs Wiki</a></li>
	<li><a href="https://www.gnu.org/software/emacs/" target="_blank">Official Webpage</a></li>
</ul>
<h1>GNU nano</h1>
[caption id="attachment_642" align="alignnone" width="1366"]<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/GNU-nano-under-LXTerminal.png"><img class="size-full wp-image-642" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/GNU-nano-under-LXTerminal.png" alt="GNU nano running within LXTerminal under Moksha" width="1366" height="740" /></a> <strong>GNU nano 2.4.2 running within LXTerminal under Moksha</strong>[/caption]
<h2>Background</h2>
<strong>GNU nano</strong> is a command-line text editor that is developed as part of the GNU Project. Its development began in 1999 by Chris Allegretta, as a free alternative to the proprietary Pico text editor. Later, in 2001, it officially became part of the GNU Project. Several features (like search, search and replace, save, exit, <em>etc.</em>) are accessed using keyboard shortcuts. It can be invoked by running the command "nano" from the command-line. nano can be passed several different options from the command-line, to see a full list see its man page (invoked by running <code>man nano</code> or, if you would prefer to view it in your browser, go <a href="http://www.nano-editor.org/dist/v2.2/nano.1.html">here</a>). Usually when I want to edit a file with nano I simply run <code>nano &lt;FILE&gt;</code> where <code>&lt;FILE&gt;</code> is the file's name (potentially also with its path if it is not in my current directory).
<h2>Customizability</h2>
I am unaware of any possible customization of nano, if you know some please do tell me in the comments of this post.
<h2>Features</h2>
It offers syntax-highlighting, auto-indenting and miscellaneous other support for several computer languages. It also auto-detects the computer language using file extensions. It also has search functions (accessable via pressing <kbd>Ctrl</kbd>+<kbd>W</kbd>).
<h2>Obtaining it</h2>
It is fairly simple to get nano on Sabayon. Odds are it will already be installed by default on your Sabayon machine, so check to see if it is with <code>nano</code> (does not matter if you execute this as root or standard user). If you do not have it, you can try to install it with Entropy, via running:
<div class="code"><span class="coder">root #</span>  equo i -av app-editors/nano</div>
alternatively, to install it with Portage, run:
<div class="code"><span class="coder">root #</span>  emerge -av app-editors/nano</div>
<h2>Ratings</h2>
<ul>
	<li><strong>Availability</strong>: 10.</li>
	<li><strong>Beginner-friendliness</strong>: 7. Fairly easy to get used to, but its keyboard shortcuts are not totally intuitive.</li>
	<li><strong>Customizability</strong>: 0?</li>
	<li><strong>Features</strong>: 8.</li>
	<li><strong>Popularity</strong>: 7.</li>
	<li><strong>SRU</strong>: 10. <a href="https://packages.sabayon.org/show/nano,155245,sabayon-weekly,amd64,5,standard" target="_blank">GNU nano 2.4.2</a> is a 0.6 MB download and takes up 1.8 MB HDD space when installed. It is incredibly light, here is my <code>ps mem</code> table:
<pre>
Private  +   Shared  =  RAM used	Program

  1.4 MiB +  68.5 KiB =   1.4 MiB	nano
---------------------------------
                          1.4 MiB
=================================
</pre>
</li>
	<li><strong>Overall</strong>: 8. I rather like it for basic editing, but whenever I want to edit a several dozen-line file, or bigger, I usually switch to Atom as it is easier to navigate in Atom, in my experience.</li>
</ul>
<h2>Website(s)</h2>
<ul>
	<li><a href="https://wiki.gentoo.org/wiki/Nano" target="_blank">Gentoo Wiki Article</a></li>
	<li><a href="http://www.nano-editor.org/docs.php" target="_blank">GNU nano Documentation</a></li>
	<li><a href="http://www.nano-editor.org/dist/v2.2/nano.html" target="_blank">nano Command Manual (HTML)</a></li>
	<li><a href="http://www.nano-editor.org/dist/v2.2/nano.1.html" target="_blank">nano.1 Man Page (HTML)</a></li>
	<li><a href="http://www.nano-editor.org/dist/v2.2/nanorc.5.html" target="_blank">nanorc.5 Man Page (HTML)</a></li>
	<li><a href="http://www.nano-editor.org/" target="_blank">Official Website</a></li>
</ul>
<h1>jEdit</h1>
[caption id="attachment_627" align="alignnone" width="1366"]<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/jEdit-screenshot.png"><img class="size-full wp-image-627" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/jEdit-screenshot.png" alt="jEdit 5.2.0 running under Moksha" width="1366" height="740" /></a> <strong>jEdit 5.2.0 running under Moksha</strong>[/caption]
<h2>Background</h2>
<strong>jEdit </strong>is a Java-based text editor that began life in 1998, when Slava Pestov started developing it. Pestov later left the project in 2006, when he handed the reigns to the free software community. jEdit provides syntax highlighting for dozens of computer languages so far, and can be customized using scripts written in a variety of different programming languages such as JavaScript and Jython. As it is written in Java it can run on any Java-capable platform, including Sabayon.
<h2>Customizability</h2>
It is extensively customizable, via scripts in supported languages. Several plugins, that provide extra functionality, are available via a built-in plugin installer (under the "Plugins" menu).
<h2>Features</h2>
As previously mentioned auto-indentation and syntax-highlighting support exists for a long list of computer languages. Plugins with extra IDE-like capabilities also exist, including a plugin for using git from within jEdit, another for using a Jython interpreter from within jEdit, another for a Python shell, <em>etc.</em>
<h2>Obtaining it</h2>
On Sabayon jEdit can be installed via Entropy or Portage (from the Portage Tree, no need to add unofficial overlays for it). To install it using Entropy run:
<div class="code"><span class="coder">root #</span>  equo i -av app-editors/jedit</div>
while to install it using Portage run:
<div class="code"><span class="coder">root #</span>  emerge -av app-editors/jedit</div>
<h2>Disadvantages (Cons)</h2>
<ul>
	<li>Heavy on system resources.</li>
</ul>
<h2>Advantages (Pros)</h2>
<ul>
	<li>Easy to obtain it on Sabayon</li>
	<li>Extensively customizable</li>
	<li>Has intuitive keyboard shortcuts</li>
	<li>Written in Java, hence can run on most platforms, if you end up switching to a new operating system in the future</li>
	<li>User-friendly</li>
</ul>
<h2>Ratings</h2>
<ul>
	<li><strong>Availability</strong>: 8.</li>
	<li><strong>Beginner-friendliness</strong>: 8. Fairly beginner-friendly, but extra functionalities beyond that available via existing plugins must be added using self-made scripts.</li>
	<li><strong>Customizability</strong>: &gt;8. Very customizabile.</li>
	<li><strong>Features</strong>: 8. Extensive auto-indentation and syntax-highlighting support for a range of computer languages, as has some IDE features.</li>
	<li><strong>Popularity</strong>: &lt;3. Not a single vote casted in its favour so far.</li>
	<li><strong>SRU</strong>: 3. <a href="https://packages.sabayon.org/show/jedit,156957,sabayon-weekly,amd64,5,standard" target="_blank">jEdit 5.2.0</a> is a 2.6 MB download and takes up 10 MB HDD space when installed. Second heaviest text editor compared in this post, after Atom, RAM-wise. Here is my <code>ps mem</code> table:
<pre>
Private  +   Shared  =  RAM used	Program

128.0 MiB +   6.9 MiB = 134.9 MiB	java
---------------------------------
                        134.9 MiB
=================================
</pre>
</li>
	<li><strong>Overall</strong>: 8. Seems like quite a useful text editor.</li>
</ul>
<h2>Website(s)</h2>
<ul>
	<li><a href="http://www.jedit.org/" target="_blank">Official Website</a></li>
	<li><a href="http://sourceforge.net/projects/jedit/" target="_blank">SourceForge Page</a></li>
	<li><a href="http://www.jedit.org/users-guide/" target="_blank">User's Guide</a></li>
</ul>
<h1>Kate/KWrite</h1>
[caption id="attachment_633" align="alignnone" width="1366"]<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/Kate-under-Moksha.png"><img class="size-full wp-image-633" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/Kate-under-Moksha.png" alt="Kate 15.08.1 running under Moksha" width="1366" height="740" /></a> <strong>Kate 15.08.1 running under Moksha</strong>[/caption]

[caption id="attachment_647" align="alignnone" width="1366"]<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/KWrite-15.08.0-under-Moksha.png"><img class="size-full wp-image-647" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/KWrite-15.08.0-under-Moksha.png" alt="KWrite 15.08.0 running under Moksha" width="1366" height="740" /></a> <strong>KWrite 15.08.0 running under Moksha</strong>[/caption]
<h2>Background</h2>
<strong>Kate</strong>, which is abbreviated from <strong>K</strong>DE <strong>A</strong>dvanced <strong>T</strong>ext <strong>E</strong>ditor, is a text editor that is a KDE Core Application (a part of the KDE Software Compilation or KDE SC) and combines features of an advanced text editor (that is, one geared towards software developers and experienced programmers) such as customizability, extensive syntax-highlighting, code-indentation, <em>etc.<strong> </strong></em>support with sufficient user-friendliness for it to be suitable for inexperienced Linux users. Its development began in 2001 and has been a central part of KDE SC ever since.

<strong>KWrite</strong>, as I understand it (but I must admit I am a little confused by the degree of overlap between Kate and KWrite) is designed to be a lightweight derivative of Kate.
<h2>Customizability</h2>
Some customization (such as of keyboard shortcuts, the toolbar and a few other features) can be done graphically via going to the "Settings" menu and selecting an option from the menu. From what I can gather, however, limited customization can be done textually via user-supplied scripts.
<h2>Features</h2>
It has syntax-highlighting and auto-indentation support for over 180 different computer languages, including MediaWiki and shell script, but excluding PyMOL. It also has embedded terminal support.
<h2>Obtaining it</h2>
Kate can be quite easily obtained from Entropy or Portage. To install it from Entropy run:
<div class="code"><span class="coder">root #</span>  equo i -av kde-apps/kate</div>
while to install it with Portage run:
<div class="code"><span class="coder">root #</span>  emerge -av kde-apps/kate</div>
Getting KWrite is similarly easy, just use (for installation with Entropy):
<div class="code"><span class="coder">root #</span>  equo i -av kde-apps/kwrite</div>
while to install KWrite with Portage run (no need to add any overlays, it is in the Portage Tree):
<div class="code"><span class="coder">root #</span>  emerge -av kde-apps/kwrite</div>
<h2>Disadvantages (Cons)</h2>
<ul>
	<li>Minimal customization can be made to Kate/KWrite, via user-supplied scripts.</li>
	<li>Due to it being part of KDE SC it cannot be too easily ported to Microsoft Windows or OS X, although it is readily available on most Linux distributions.</li>
</ul>
<h2>Advantages (Pros)</h2>
<ul>
	<li>Easily customizable via graphical tools</li>
	<li>Intuitive keyboard shortcuts by default</li>
	<li>Extensive support for a wide range of computer languages</li>
</ul>
<h2>Ratings</h2>
<ul>
	<li><strong>Availability</strong>: 8. Easy to get on Sabayon.</li>
	<li><strong>Beginner-friendliness</strong>: 8. Easy for beginners to use.</li>
	<li><strong>Customizability</strong>: 7-8. Fairly customizable, but unlike Atom say where advanced users have the option of extending the TE further using their own scripts, Kate does not seem to have this capability</li>
	<li><strong>Features</strong>: 8. Extensive support for computer languages and has some IDE-like features.</li>
	<li><strong>Popularity</strong>: 8. Fairly popular according to my poll.</li>
	<li><strong>SRU</strong>: 7. <a href="https://packages.sabayon.org/show/kate,113072,sabayon-limbo,amd64,5,standard" target="_blank">Kate 15.08.2</a> is a 2.4 MB download and 9.2 MB package when installed, while <a href="https://packages.sabayon.org/show/kwrite,113128,sabayon-limbo,amd64,5,standard" target="_blank">KWrite 15.08.2</a> is a 0.1 MB download and 177 kB package when installed. Fairly lightweight for a graphical TE. Here are my <code>ps mem</code> tables (for Kate 15.08.1 and KWrite 15.08.0, respectively):
<pre>
Private  +   Shared  =  RAM used	Program

 28.6 MiB +   8.4 MiB =  37.0 MiB	kate
---------------------------------
                         37.0 MiB
=================================
</pre>
<pre>Private  +   Shared  =  RAM used	Program

 36.4 MiB +   3.7 MiB =  40.1 MiB	kwrite
---------------------------------
                         40.1 MiB
=================================
</pre>
</li>
	<li><strong>Overall</strong>: 8-9. User-friendly and fairly customizable.</li>
</ul>
<h2>Website(s)</h2>
<ul>
	<li><a href="http://kate-editor.org/about-kate/">About Kate</a></li>
	<li><a href="http://kate-editor.org/support/">Kate Support</a></li>
	<li><a href="http://kate-editor.org">Kate/KWrite's Website</a></li>
</ul>
<h1>Leafpad</h1>
[caption id="attachment_636" align="alignnone" width="1366"]<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/Leafpad-running-under-Moksha.png"><img class="wp-image-636 size-full" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/Leafpad-running-under-Moksha.png" alt="" width="1366" height="740" /></a> <strong>Leafpad 0.8.18.1 running under Moksha</strong>[/caption]
<h2>Background</h2>
<strong>Leafpad</strong> is a lightweight and basic GTK+ based text editor. Its capabilities (or rather lack thereof) are very similar to those of Windows' Notepad.
<h2>Customizability</h2>
There is little, if any, customizability for Leafpad.
<h2>Features</h2>
It offers no syntax highlighting support or auto-indentation support that I am aware of.
<h2>Obtaining it</h2>
To install it on Sabayon with Entropy run:
<div class="code"><span class="coder">root #</span>  equo i -av app-editors/leafpad</div>
while to install it with Portage run:
<div class="code"><span class="coder">root #</span>  emerge -av app-editors/leafpad</div>
<h2>Disadvantages (Cons)</h2>
<ul>
	<li>It is very basic, has minimal customizability or features</li>
</ul>
<h2>Advantages (Pros)</h2>
<ul>
	<li>Its chief advantage is its low system resource usage</li>
	<li>Easy to install on Sabayon</li>
</ul>
<h2>Ratings</h2>
<ul>
	<li><strong>Availability</strong>: 8.</li>
	<li><strong>Beginner-friendliness</strong>: 10.</li>
	<li><strong>Customizablity</strong>: 0.</li>
	<li><strong>Features</strong>: 0.</li>
	<li><strong>Popularity</strong>: 4. One person has voted for it so far in my poll.</li>
	<li><strong>SRU</strong>: 9. <a href="https://packages.sabayon.org/show/leafpad,54626,sabayon-weekly,amd64,5,standard" target="_blank">Leafpad 0.8.18.1</a> is a 0.1 MB download and 3.3 MB package when installed. It is the most lightweight graphical TE in this comparison. Here is my <code>ps mem</code> table:
<pre>
Private  +   Shared  =  RAM used	Program

 10.8 MiB +   2.0 MiB =  12.8 MiB	leafpad
---------------------------------
                         12.8 MiB
=================================
</pre>
</li>
	<li><strong>Overall</strong>: 7. Fairly basic, but at least it is stable and easy to use.</li>
</ul>
<h2>Website(s)</h2>
<ul>
	<li><a href="http://tarot.freeshell.org/leafpad/">Official Webpage</a></li>
</ul>
<h1>Mousepad</h1>
[caption id="attachment_639" align="alignnone" width="1366"]<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/Mousepad-under-Moksha.png"><img class="size-full wp-image-639" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/Mousepad-under-Moksha.png" alt="Mousepad 0.4.0 running under Moksha" width="1366" height="740" /></a> <strong>Mousepad 0.4.0 running under Moksha</strong>[/caption]
<h2>Background</h2>
<strong>Mousepad</strong> is a core application of the Xfce desktop environment, that was originally forked from Leafpad. Like Leafpad it is fairly lightweight, but unlike Leafpad, Mousepad can be customized and has a few basic features that are absent from Leafpad, such as syntax highlighting support for a few computer languages.
<h2>Customizability</h2>
Some basic customization can be done, graphically, by going to Edit←Preferences in the toolbar. Some customization of its appearance can be done by going to the View menu. Beyond this, to my knowledge, it cannot be customized.
<h2>Features</h2>
It supports syntax-highlighting for roughly, a couple of dozen computer languages.
<h2>Obtaining it</h2>
It is fairly easy to obtain it on Sabayon, to install it with Entropy run:
<div class="code"><span class="coder">root #</span>  equo i -av app-editors/mousepad</div>
while to install it with Portage (and yes it is available in the Portage Tree):
<div class="code"><span class="coder">root #</span>  emerge -av app-editors/mousepad</div>
<h2>Disadvantages (Cons)</h2>
<ul>
	<li>Basic, limited computer language support</li>
	<li>Limited customization options</li>
</ul>
<h2>Advantages (Pros)</h2>
<ul>
	<li>Lightweight</li>
	<li>All customization can be done graphically</li>
	<li>User-friendly</li>
</ul>
<h2>Ratings</h2>
<ul>
	<li><strong>Availability</strong>: 8. Easy to obtain on Sabayon</li>
	<li><strong>Beginner-friendliness</strong>: 10.</li>
	<li><strong>Customizability</strong>: 2-4.</li>
	<li><strong>Features</strong>: 4</li>
	<li><strong>Popularity</strong>: &lt;3.</li>
	<li><strong>SRU</strong>: 8. <a href="https://packages.sabayon.org/show/mousepad,146192,sabayon-weekly,amd64,5,standard" target="_blank">Mousepad 0.4.0</a> is a 0.4 MB download and takes up 1.1 MB when installed. Very lightweight. Here is my <code>ps mem</code> table:
<pre>
Private  +   Shared  =  RAM used	Program

 14.9 MiB +   2.7 MiB =  17.6 MiB	mousepad
---------------------------------
                         17.6 MiB
=================================
</pre>
</li>
	<li><strong>Overall</strong>: 7. The next step up from Leafpad, in complexity it is.</li>
</ul>
<h2>Website(s)</h2>
<ul>
	<li><a href="http://git.xfce.org/apps/mousepad/">Mousepad's git repository</a> (closest thing it has to an official website)</li>
</ul>
<h1>Pluma</h1>
[caption id="attachment_649" align="alignnone" width="1366"]<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/Pluma-1.8.1-running-under-Mokhsa.png"><img class="size-full wp-image-649" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/Pluma-1.8.1-running-under-Mokhsa.png" alt="Pluma 1.8.1 running under Moksha" width="1366" height="740" /></a> <strong>Pluma 1.8.1 running under Moksha</strong>[/caption]
<h2>Background</h2>
<strong>Pluma</strong> is a fork of gedit 2 created for the MATE desktop environment. It has many of the same features as gedit.
<h2>Customizability</h2>
Some customization (to the theme or adding some plugins) can be done by going to Edit→Preferences.
<h2>Features</h2>
Pluma has a few plugins that can be used to add features (mostly IDE-like features) to the text editor. It also has syntax-highlighting and auto-indenting support for several computer languages.
<h2>Obtaining it</h2>
It can be installed with Entropy by running:
<div class="code"><span class="coder">root #</span>  equo i -av app-editors/pluma</div>
or with Portage by running:
<div class="code"><span class="coder">root #</span>  emerge -av app-editors/pluma</div>
<h2>Disadvantages (Cons)</h2>
<ul>
	<li>Customization options are fairly limited</li>
</ul>
<h2>Advantages (Pros)</h2>
<ul>
	<li>Customization is done graphically, making it easier for beginners.</li>
	<li>Has intuitive keyboard shortcuts</li>
	<li>Has several IDE-like features like a Python terminal.</li>
	<li>Has syntax-highlighting and auto-indenting suport for several computer languages</li>
</ul>
<h2>Ratings</h2>
<ul>
	<li><strong>Availability</strong>: 8. Easy to get on Sabayon.</li>
	<li><strong>Beginner-friendliness</strong> 9. Customization is done graphically, making it more user-friendly.</li>
	<li><strong>Customizability</strong>: 6. Fairly limited customization options, but they can be done graphically at least.</li>
	<li><strong>Features</strong>: 8.</li>
	<li><strong>Popularity</strong>: &lt;3. No one has voted for it yet.</li>
	<li><strong>SRU</strong>: 8. <a href="https://packages.sabayon.org/show/pluma,130458,sabayon-weekly,amd64,5,standard" target="_blank">Pluma 1.8.1</a> is a 3.4 MB download and 12.7 MB package when installed. Fairly lightweight. Here is my <code>ps mem</code> table:
<pre>
Private  +   Shared  =  RAM used	Program

 17.2 MiB +   3.2 MiB =  20.3 MiB	pluma
---------------------------------
                         20.3 MiB
=================================
</pre>
</li>
	<li><strong>Overall</strong>: 8.</li>
</ul>
<h2>Website(s)</h2>
<ul>
	<li><a href="https://github.com/mate-desktop/pluma">Pluma's GitHub Repository</a></li>
</ul>
<h1>SciTE</h1>
[caption id="attachment_651" align="alignnone" width="1366"]<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/SciTE-3.6.1-running-under-Moksha.png"><img class="size-full wp-image-651" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/SciTE-3.6.1-running-under-Moksha.png" alt="SciTE 3.6.1 running under Moksha" width="1366" height="740" /></a> <strong>SciTE 3.6.1 running under Moksha</strong>[/caption]
<h2>Background</h2>
<strong>SciTE</strong> (abbreviated from <strong>SCi</strong>ntilla based <strong>T</strong>ext <strong>E</strong>ditor) is a Scintilla-based text editor originally developed by Neil Hodgson, that is licensed under a GPL-compatible license. It is a fairly user-friendly text editor, that can be customized and scripted with using Lua. Its syntax-highlighting is based on the contents of the <code>.properties</code> files it loads. SciTE is cross-platform, available on Microsoft Windows and most Linux distributions for free, although for OS X users it is only available for a fee of 41.99 USD.

I first tried it when it was the default text editor used by GNU Octave to edit m files.
<h2>Customizability</h2>
SciTE can be customized by editing <code>.properties</code> files or via scripting with Lua. There are no major graphical tools for customizing SciTE.
<h2>Features</h2>
It provides syntax-highlighting for dozens of computer languages. Support for extra languages can be added by creating <code>.properties</code> files for them.
<h2>Obtaining it</h2>
It is easy to install it with Entropy or Portage. To install it with Entropy, run:
<div class="code"><span class="coder">root #</span>  equo i -av app-editors/scite</div>
To install it with Portage, run:
<div class="code"><span class="coder">root #</span>  emerge -av app-editors/scite</div>
<h2>Disadvantages (Cons)</h2>
<ul>
	<li>The list of languages it automatically supports is &lt;30.</li>
</ul>
<h2>Advantages (Pros)</h2>
<ul>
	<li>Fairly lightweight</li>
	<li>Extensively customizable</li>
	<li>Easy to get on Sabayon and other Linux distributions</li>
</ul>
<h2>Ratings</h2>
<ul>
	<li><strong>Availability</strong>: 8.</li>
	<li><strong>Beginner-friendliness</strong>: 8. You should be able to get started with SciTE without much experience in programming or using text editors.</li>
	<li><strong>Customizability</strong>: 8. Fairly customizable, textually only.</li>
	<li><strong>Features</strong>: 7.</li>
	<li><strong>Popularity</strong>: &lt;3.</li>
	<li><strong>SRU</strong>: 8. <a href="https://packages.sabayon.org/show/scite,158952,sabayon-weekly,amd64,5,standard">SciTE 3.6.1</a> is a 1.7 MB download and 5.4 MB package when installed. Here is my <code>ps mem</code> table:
<pre>Private  +   Shared  =  RAM used	Program

 18.5 MiB +   2.8 MiB =  21.3 MiB	scite
---------------------------------
                         21.3 MiB
=================================
</pre>
</li>
	<li><b>Overall</b>: 8.</li>
</ul>
<h2>Website(s)</h2>
<ul>
	<li><a href="http://www.scintilla.org/SciTE.html" target="_blank">Official Website</a></li>
</ul>
<h1>Vim</h1>
[caption id="attachment_656" align="alignnone" width="1366"]<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/gVim-7.4.827-running-under-Moksha.png"><img class="size-full wp-image-656" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/gVim-7.4.827-running-under-Moksha.png" alt="gVim 7.4.827 running under Moksha" width="1366" height="740" /></a> <strong>gVim 7.4.827 running under Moksha</strong>[/caption]
<h2>Background</h2>
<strong>Vim</strong> (short for <strong>Vi</strong>-<strong>IM</strong>proved) is a text editor that was first released in 1991 by Bram Moolenaar, as a clone of Bill Joy's Vi text editor. It and GNU Emacs are seen as the most powerful free text editors available for experienced programmers. Vim is available as a command-line text editor, where users can edit text files from the command-line, or as a graphical text editor (which is called <strong>gVim</strong>). There is also a Qt-based GUI for Vim called Vim-Qt that is available via the Entropy Store. Compared to most text editors, Vim is far less intuitive and has a steep learning curve. For one, its keyboard shortcuts are far from conventional, with <kbd>Ctrl</kbd>+<kbd>C</kbd> for copy, <kbd>Ctrl</kbd>+<kbd>V</kbd> for paste, <em>etc.</em> not being available. Vim also has its own scripting language (Vim script) for adding functionalities to it.
<h2>Customizability</h2>
Vim is extensively customizable, for people with the required level of finesse in programming. There are also several extensions and other plugins available for it, from the internet.
<h2>Features</h2>
It has syntax-highlighting support for almost (if not every) every computer language. It also has several IDE-type features, like compiling source code from within it. Several other features can be added to it, for example, I wrote some of this post in Vim, using the <a href="https://github.com/PotHix/Vimpress">Vimpress plugin</a>. Several plugins are available in the <a href="http://gpo.zugaina.org/app-vim/" target="_blank">app-vim</a> Portage category.
<h2>Obtaining it</h2>
It is easy to obtain Vim (and gVim) on Sabayon using Entropy or Portage. To install Vim and gVim using Entropy, run:
<div class="code"><span class="coder">root #</span>  equo i -av app-editors/vim app-editors/gvim</div>
whereas to install it with Portage run:
<div class="code"><span class="coder">root #</span>  emerge -av app-editors/vim app-editors/gvim</div>
<h2>Disadvantages (Cons)</h2>
<ul>
	<li>Steep learning curve, making it difficult to learn. If you run <code>vimtutor</code> from the command-line after installing it, you will be taken through a tutorial of how to use it, which can be helpful.</li>
</ul>
<h2>Advantages (Pros)</h2>
<ul>
	<li>Easy to obtain it on Sabayon</li>
	<li>Extremely customizable</li>
	<li>Fairly light on system resources</li>
</ul>
<h2>Ratings</h2>
<ul>
	<li><strong>Availability</strong>: 8.</li>
	<li><strong>Beginner-friendliness</strong>: 2.</li>
	<li><strong>Customizability</strong>: 9-10.</li>
	<li><strong>Features</strong>: 10.</li>
	<li><strong>Popularity</strong>: 10.</li>
	<li><strong>SRU</strong>: 8-9. <a href="https://packages.sabayon.org/show/vim,157584,sabayon-weekly,amd64,5,standard">Vim 7.4.827</a> is a 1.3 MB download and takes up 3.1 MB when installed. <a href="https://packages.sabayon.org/show/gvim,157583,sabayon-weekly,amd64,5,standard">gVim 7.4.827</a> is a 1.4 MB download and takes up 3.4 MB HDD space when installed. <a href="https://packages.sabayon.org/show/vim-qt,156692,sabayon-weekly,amd64,5,standard">Vim-Qt 20150102-r1</a> is a 1.4 MB download and 3.4 MB package when installed. Here are my <code>ps mem</code> tables:
<pre> Private  +   Shared  =  RAM used	Program

 30.6 MiB +   3.3 MiB =  33.9 MiB	gvim
---------------------------------
                         33.9 MiB
=================================
</pre>
<pre> Private  +   Shared  =  RAM used	Program

 32.3 MiB +   2.4 MiB =  34.7 MiB	qvim
---------------------------------
                         34.7 MiB
=================================
</pre>
<pre>
Private  +   Shared  =  RAM used	Program

 11.0 MiB +   3.0 MiB =  14.0 MiB	vim
---------------------------------
                         14.0 MiB
=================================
</pre>
</li>
	<li><strong>Overall</strong>: 8-9.</li>
</ul>
<h2>Website(s)</h2>
<ul>
	<li><a href="https://wiki.gentoo.org/wiki/Vim" target="_blank">Gentoo Wiki Article</a></li>
	<li><a href="http://www.vim.org/">Vim Home Page</a></li>
</ul>
<h1>Poll</h1>
[socialpoll id="2300580"]
<h1>Comparison of SRU of the various Text Editors</h1>
<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/TextEditors.png"><img class="alignnone size-full wp-image-694" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/TextEditors.png" alt="TextEditors" width="1287" height="508" /></a>
