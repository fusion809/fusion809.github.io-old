## Vim
{% include image.html image="gVim-7.4.827-running-under-Moksha.png" description="gVim 7.4.827 running under Moksha" width="1130px" float="none" %}

### Background
<strong>Vim</strong> (short for <strong>Vi</strong>-<strong>IM</strong>proved) is a text editor that was first released in 1991 by Bram Moolenaar, as a clone of Bill Joy's Vi text editor. It and GNU Emacs are seen as the most powerful free text editors available for experienced programmers. Vim is available as a command-line text editor, where users can edit text files from the command-line, or as a graphical text editor (which is called <strong>gVim</strong>). There is also a Qt-based GUI for Vim called Vim-Qt that is available via the Entropy Store. Compared to most text editors, Vim is far less intuitive and has a steep learning curve. For one, its keyboard shortcuts are far from conventional, with <kbd>Ctrl</kbd>+<kbd>C</kbd> for copy, <kbd>Ctrl</kbd>+<kbd>V</kbd> for paste, <em>etc.</em> not being available. Vim also has its own scripting language (Vim script) for adding functionalities to it.

### Customizability
Vim is extensively customizable, for people with the required level of finesse in programming. There are also several extensions and other plugins available for it, from the Internet.

### Features
It has syntax-highlighting support for almost (if not every) every computer language. It also has several IDE-type features, like compiling source code from within it. Several other features can be added to it, for example, I wrote some of this post in Vim, using the <a href="https://github.com/PotHix/Vimpress">Vimpress plugin</a>. Several plugins are available in the <a href="http://gpo.zugaina.org/app-vim/" target="_blank">app-vim</a> Portage category.

### Obtaining it
It is easy to obtain Vim (and gVim) on Sabayon using Entropy or Portage. To install Vim and gVim using Entropy, run:
<div class="code"><span class="coder">root #</span>  equo i -av app-editors/vim app-editors/gvim</div>
whereas to install it with Portage run:
<div class="code"><span class="coder">root #</span>  emerge -av app-editors/vim app-editors/gvim</div>

### Disadvantages (Cons)
<ul>
	<li>Steep learning curve, making it difficult to learn. If you run <code>vimtutor</code> from the command-line after installing it, you will be taken through a tutorial of how to use it, which can be helpful.</li>
</ul>

### Advantages (Pros)
<ul>
	<li>Easy to obtain it on Sabayon</li>
	<li>Extremely customizable</li>
	<li>Fairly light on system resources</li>
</ul>

### Ratings
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
while under Manjaro for Vim 7.4.944 (installed via the gvim package) I received the following <code>ps_mem</code> tables (note Vim-Qt is not available from the official Manjaro repositories):
<pre>Private  +   Shared  =  RAM used       Program

 8.9 MiB +   1.9 MiB =  10.8 MiB       gvim
---------------------------------
												10.8 MiB
=================================
</pre>
<pre>Private  +   Shared  =  RAM used       Program

 4.9 MiB + 601.0 KiB =   5.4 MiB       vim
---------------------------------
												 5.4 MiB
=================================
</pre>
</li>
	<li><strong>Overall</strong>: 8-9.</li>
</ul>

### Website(s)
<ul>
	<li><a href="https://wiki.gentoo.org/wiki/Vim" target="_blank">Gentoo Wiki Article</a></li>
	<li><a href="http://www.vim.org/">Vim Home Page</a></li>
</ul>
