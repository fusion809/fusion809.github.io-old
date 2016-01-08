## Pluma
{% include image.html image="Pluma-1.8.1-running-under-Mokhsa.png" description="Pluma 1.8.1 running under Moksha" float="none" width="1130px" %}

### Background
{% include_relative TE/links.md program="Pluma" package="app-editors/pluma" pacman="extra/x86_64/pluma/" %} is a fork of gedit 2 created for the MATE desktop environment. It has many of the same features as gedit.

### Customizability
Some customization (to the theme or adding some plugins) can be done by going to Edit→Preferences.

### Features
Pluma has a few plugins that can be used to add features (mostly IDE-like features) to the text editor. It also has syntax-highlighting and auto-indenting support for several computer languages.

### Obtaining it
It can be installed with Entropy by running:
{% include coder.html line1="equo i -av app-editors/pluma" %}
or with Portage by running:
{% include coder.html line1="emerge -av app-editors/pluma" %}

### Disadvantages (Cons)
* Customization options are fairly limited

### Advantages (Pros)
* Customization is done graphically, making it easier for beginners.
* Has intuitive keyboard shortcuts.
* Has several IDE-like features like a Python terminal.
* Has syntax-highlighting and auto-indenting support for several computer languages

### Ratings
{% include_relative TE/pluma-ratings.html %}
