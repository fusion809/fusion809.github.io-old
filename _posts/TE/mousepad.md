## Mousepad
[caption id="attachment_639" align="alignnone" width="1366"]<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/Mousepad-under-Moksha.png"><img class="size-full wp-image-639" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/Mousepad-under-Moksha.png" alt="Mousepad 0.4.0 running under Moksha" width="1366" height="740" /></a> <strong>Mousepad 0.4.0 running under Moksha</strong>[/caption]
### Background
<strong>Mousepad</strong> is a core application of the Xfce desktop environment, that was originally forked from Leafpad. Like Leafpad it is fairly lightweight, but unlike Leafpad, Mousepad can be customized and has a few basic features that are absent from Leafpad, such as syntax highlighting support for a few computer languages.
### Customizability
Some basic customization can be done, graphically, by going to Edit←Preferences in the toolbar. Some customization of its appearance can be done by going to the View menu. Beyond this, to my knowledge, it cannot be customized.
### Features
It supports syntax-highlighting for roughly, a couple of dozen computer languages.
### Obtaining it
It is fairly easy to obtain it on Sabayon, to install it with Entropy run:
<div class="code"><span class="coder">root #</span>  equo i -av app-editors/mousepad</div>
while to install it with Portage (and yes it is available in the Portage Tree):
<div class="code"><span class="coder">root #</span>  emerge -av app-editors/mousepad</div>
### Disadvantages (Cons)
<ul>
	<li>Basic, limited computer language support</li>
	<li>Limited customization options</li>
</ul>
### Advantages (Pros)
<ul>
	<li>Lightweight</li>
	<li>All customization can be done graphically</li>
	<li>User-friendly</li>
</ul>
### Ratings
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
while under Manjaro Linux Mousepad 0.4.0 gave the <code>ps_mem</code> table:
<pre>
Private  +   Shared  =  RAM used       Program

 6.8 MiB +   1.7 MiB =   8.5 MiB       mousepad
---------------------------------
												 8.5 MiB
=================================
</pre>
</li>
	<li><strong>Overall</strong>: 7. The next step up from Leafpad, in complexity it is.</li>
</ul>
### Website(s)
<ul>
	<li><a href="http://git.xfce.org/apps/mousepad/">Mousepad's git repository</a> (closest thing it has to an official website)</li>
</ul>
