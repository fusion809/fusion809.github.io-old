## SciTE
[caption id="attachment_651" align="alignnone" width="1366"]<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/SciTE-3.6.1-running-under-Moksha.png"><img class="size-full wp-image-651" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/SciTE-3.6.1-running-under-Moksha.png" alt="SciTE 3.6.1 running under Moksha" width="1366" height="740" /></a> <strong>SciTE 3.6.1 running under Moksha</strong>[/caption]
### Background
<strong>SciTE</strong> (abbreviated from <strong>SCi</strong>ntilla based <strong>T</strong>ext <strong>E</strong>ditor) is a Scintilla-based text editor originally developed by Neil Hodgson, that is licensed under a GPL-compatible license. It is a fairly user-friendly text editor, that can be customized and scripted with using Lua. Its syntax-highlighting is based on the contents of the <code>.properties</code> files it loads. SciTE is cross-platform, available on Microsoft Windows and most Linux distributions for free, although for OS X users it is only available for a fee of 41.99 USD.

I first tried it when it was the default text editor used by GNU Octave to edit m files.
### Customizability
SciTE can be customized by editing <code>.properties</code> files or via scripting with Lua. There are no major graphical tools for customizing SciTE.
### Features
It provides syntax-highlighting for dozens of computer languages. Support for extra languages can be added by creating <code>.properties</code> files for them.
### Obtaining it
It is easy to install it with Entropy or Portage. To install it with Entropy, run:
<div class="code"><span class="coder">root #</span>  equo i -av app-editors/scite</div>
To install it with Portage, run:
<div class="code"><span class="coder">root #</span>  emerge -av app-editors/scite</div>
### Disadvantages (Cons)
<ul>
	<li>The list of languages it automatically supports is &lt;30.</li>
</ul>
### Advantages (Pros)
<ul>
	<li>Fairly lightweight</li>
	<li>Extensively customizable</li>
	<li>Easy to get on Sabayon and other Linux distributions</li>
</ul>
### Ratings
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
while under Manjaro SciTE 3.6.2 gave the <code>ps_mem</code> table:
<pre>
Private  +   Shared  =  RAM used       Program

 7.2 MiB +   1.3 MiB =   8.5 MiB       SciTE
---------------------------------
												 8.5 MiB
=================================
</pre>
</li>
	<li><b>Overall</b>: 8.</li>
</ul>
### Website(s)
<ul>
	<li><a href="http://www.scintilla.org/SciTE.html" target="_blank">Official Website</a></li>
</ul>
