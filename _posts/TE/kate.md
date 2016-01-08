## Kate/KWrite
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
