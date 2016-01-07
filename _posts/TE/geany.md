## Geany
{% include image.html image="Geany-1.24.1.png" float="none" width="1130px" description="Geany 1.24.1 running under Moksha" %}

### Background
**Geany** is a lightweight GTK+ and Scintilla-based text editor with basic IDE-type features that was originally developed by Enrico Tröger in 2005. It is licensed under GNU GPLv2.

### Customizability
The `~/.geany` directory is where customizations are kept. This customization can be made with code [snippets](http://www.geany.org/Download/Extras) (written in HTML, LaTeX, PHP and Python), [plugins](http://www.geany.org/Support/Plugins), [themes](https://github.com/geany/geany-themes/), *etc*.

### Features
Geany provides auto-indentation and syntax-highlighting for over a dozen different computer languages. Geany has an embedded terminal emulator. Several extra features can be added to Geany, using plugins.

### Obtaining it
Geany can be easily installed using Entropy or Portage. Using Entropy run:
{% include coder.html line1="equo i -av geany" %}
while to install it using Portage run:
{% include coder.html line1="emerge -av geany" %}
The latest version of Geany in the [Entropy Store](https://packages.sabayon.org/show/geany,126394,sabayon-weekly,amd64,5,standard) is 1.24.1, while the latest version of Geany as of {{ page.date | date: "%d %B %Y" }} is 1.26 (released 15 November 2015) which is available from the [Portage Tree](https://packages.gentoo.org/packages/dev-util/geany).

### Disadvantages (Cons)
* The list of supported computer languages, for syntax-highlighting and other features is fairly small, compared to Atom, Gedit, GNU Emacs and Vim. See for example, the screenshot below, showing allowed file types.
{% include image.html image="Geany-Document-File-Type-Programming-Languages.png" float="none" width="1130px" %}
* The version of Geany in the Entropy Store is not the latest available

### Advantages (Pros)
<ul>
	<li>It has a few IDE-type features.</li>
	<li>It is fairly lightweight.</li>
	<li>It is cross-platform, hence if you switch from Sabayon to another OS fairly frequently, it should not be too difficult to get Geany on said OS.</li>
	<li>Keyboard shortcuts are fairly intuitive.</li>
</ul>

### Ratings
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

### Website(s)
<ul>
	<li><a href="http://geany.org/">Official Website</a></li>
	<li><a href="http://wiki.geany.org/">Official Wiki</a></li>
</ul>
