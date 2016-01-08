## Pluma
[caption id="attachment_649" align="alignnone" width="1366"]<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/Pluma-1.8.1-running-under-Mokhsa.png"><img class="size-full wp-image-649" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/Pluma-1.8.1-running-under-Mokhsa.png" alt="Pluma 1.8.1 running under Moksha" width="1366" height="740" /></a> <strong>Pluma 1.8.1 running under Moksha</strong>[/caption]
### Background
<strong>Pluma</strong> is a fork of gedit 2 created for the MATE desktop environment. It has many of the same features as gedit.
### Customizability
Some customization (to the theme or adding some plugins) can be done by going to Edit→Preferences.
### Features
Pluma has a few plugins that can be used to add features (mostly IDE-like features) to the text editor. It also has syntax-highlighting and auto-indenting support for several computer languages.
### Obtaining it
It can be installed with Entropy by running:
<div class="code"><span class="coder">root #</span>  equo i -av app-editors/pluma</div>
or with Portage by running:
<div class="code"><span class="coder">root #</span>  emerge -av app-editors/pluma</div>
### Disadvantages (Cons)
<ul>
	<li>Customization options are fairly limited</li>
</ul>
### Advantages (Pros)
<ul>
	<li>Customization is done graphically, making it easier for beginners.</li>
	<li>Has intuitive keyboard shortcuts</li>
	<li>Has several IDE-like features like a Python terminal.</li>
	<li>Has syntax-highlighting and auto-indenting suport for several computer languages</li>
</ul>
### Ratings
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
while under Manjaro Pluma 1.12.1 gave the following <code>ps_mem</code> table:
<pre>
Private  +   Shared  =  RAM used       Program

11.8 MiB +   2.6 MiB =  14.4 MiB       pluma
---------------------------------
												14.4 MiB
=================================
</pre>
</li>
	<li><strong>Overall</strong>: 8.</li>
</ul>
### Website(s)
<ul>
	<li><a href="https://github.com/mate-desktop/pluma">Pluma's GitHub Repository</a></li>
</ul>
