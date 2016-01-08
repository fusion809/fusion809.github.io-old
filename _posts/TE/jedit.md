## jEdit
[caption id="attachment_627" align="alignnone" width="1366"]<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/jEdit-screenshot.png"><img class="size-full wp-image-627" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/jEdit-screenshot.png" alt="jEdit 5.2.0 running under Moksha" width="1366" height="740" /></a> <strong>jEdit 5.2.0 running under Moksha</strong>[/caption]
### Background
<strong>jEdit </strong>is a Java-based text editor that began life in 1998, when Slava Pestov started developing it. Pestov later left the project in 2006, when he handed the reigns to the free software community. jEdit provides syntax highlighting for dozens of computer languages so far, and can be customized using scripts written in a variety of different programming languages such as JavaScript and Jython. As it is written in Java it can run on any Java-capable platform, including Sabayon.
### Customizability
It is extensively customizable, via scripts in supported languages. Several plugins, that provide extra functionality, are available via a built-in plugin installer (under the "Plugins" menu).
### Features
As previously mentioned auto-indentation and syntax-highlighting support exists for a long list of computer languages. Plugins with extra IDE-like capabilities also exist, including a plugin for using git from within jEdit, another for using a Jython interpreter from within jEdit, another for a Python shell, <em>etc.</em>
### Obtaining it
On Sabayon jEdit can be installed via Entropy or Portage (from the Portage Tree, no need to add unofficial overlays for it). To install it using Entropy run:
<div class="code"><span class="coder">root #</span>  equo i -av app-editors/jedit</div>
while to install it using Portage run:
<div class="code"><span class="coder">root #</span>  emerge -av app-editors/jedit</div>
### Disadvantages (Cons)
<ul>
	<li>Heavy on system resources.</li>
</ul>
### Advantages (Pros)
<ul>
	<li>Easy to obtain it on Sabayon</li>
	<li>Extensively customizable</li>
	<li>Has intuitive keyboard shortcuts</li>
	<li>Written in Java, hence can run on most platforms, if you end up switching to a new operating system in the future</li>
	<li>User-friendly</li>
</ul>
### Ratings
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
### Website(s)
<ul>
	<li><a href="http://www.jedit.org/" target="_blank">Official Website</a></li>
	<li><a href="http://sourceforge.net/projects/jedit/" target="_blank">SourceForge Page</a></li>
	<li><a href="http://www.jedit.org/users-guide/" target="_blank">User's Guide</a></li>
</ul>
