## GNU nano
[caption id="attachment_642" align="alignnone" width="1366"]<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/GNU-nano-under-LXTerminal.png"><img class="size-full wp-image-642" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/GNU-nano-under-LXTerminal.png" alt="GNU nano running within LXTerminal under Moksha" width="1366" height="740" /></a> <strong>GNU nano 2.4.2 running within LXTerminal under Moksha</strong>[/caption]
### Background
<strong>GNU nano</strong> is a command-line text editor that is developed as part of the GNU Project. Its development began in 1999 by Chris Allegretta, as a free alternative to the proprietary Pico text editor. Later, in 2001, it officially became part of the GNU Project. Several features (like search, search and replace, save, exit, <em>etc.</em>) are accessed using keyboard shortcuts. It can be invoked by running the command "nano" from the command-line. nano can be passed several different options from the command-line, to see a full list see its man page (invoked by running <code>man nano</code> or, if you would prefer to view it in your browser, go <a href="http://www.nano-editor.org/dist/v2.2/nano.1.html">here</a>). Usually when I want to edit a file with nano I simply run <code>nano &lt;FILE&gt;</code> where <code>&lt;FILE&gt;</code> is the file's name (potentially also with its path if it is not in my current directory).
### Customizability
I am unaware of any possible customization of nano, if you know some please do tell me in the comments of this post.
### Features
It offers syntax-highlighting, auto-indenting and miscellaneous other support for several computer languages. It also auto-detects the computer language using file extensions. It also has search functions (accessable via pressing <kbd>Ctrl</kbd>+<kbd>W</kbd>).
### Obtaining it
It is fairly simple to get nano on Sabayon. Odds are it will already be installed by default on your Sabayon machine, so check to see if it is with <code>nano</code> (does not matter if you execute this as root or standard user). If you do not have it, you can try to install it with Entropy, via running:
<div class="code"><span class="coder">root #</span>  equo i -av app-editors/nano</div>
alternatively, to install it with Portage, run:
<div class="code"><span class="coder">root #</span>  emerge -av app-editors/nano</div>
### Ratings
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
### Website(s)
<ul>
	<li><a href="https://wiki.gentoo.org/wiki/Nano" target="_blank">Gentoo Wiki Article</a></li>
	<li><a href="http://www.nano-editor.org/docs.php" target="_blank">GNU nano Documentation</a></li>
	<li><a href="http://www.nano-editor.org/dist/v2.2/nano.html" target="_blank">nano Command Manual (HTML)</a></li>
	<li><a href="http://www.nano-editor.org/dist/v2.2/nano.1.html" target="_blank">nano.1 Man Page (HTML)</a></li>
	<li><a href="http://www.nano-editor.org/dist/v2.2/nanorc.5.html" target="_blank">nanorc.5 Man Page (HTML)</a></li>
	<li><a href="http://www.nano-editor.org/" target="_blank">Official Website</a></li>
</ul>
