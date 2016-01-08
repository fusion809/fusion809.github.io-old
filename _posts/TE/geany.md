## Geany
{% include image.html image="Geany-1.24.1.png" float="none" width="1130px" description="Geany 1.24.1 running under Moksha" %}

### Background
{% include_relative TE/links.md program="Geany" package="dev-util/geany" link="http://geany.org/" wiki="http://wiki.geany.org/" pacman="community/x86_64/geany/" wp="Geany" %} is a lightweight GTK+ and Scintilla-based text editor with basic IDE-type features that was originally developed by Enrico Tr&ouml;ger in 2005. It is licensed under GNU GPLv2.

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
{% include image.html image="Geany-Document-File-Type-Programming-Languages.png" float="none" width="1100px" %}
* The version of Geany in the Entropy Store is not the latest available

### Advantages (Pros)
* It has a few IDE-type features.
* It is fairly lightweight.
* It is cross-platform, hence if you switch from Sabayon to another OS fairly frequently, it should not be too difficult to get Geany on said OS.
* Keyboard shortcuts are fairly intuitive.

### Ratings
{% include_relative TE/geany-ratings.html %}
