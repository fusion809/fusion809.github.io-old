## Atom
{% include image.html image="Atom-1.3.2.png" width="1130px" float="none" description="Atom 1.3.2 running under DDE" %}
### Background
**Atom** is a free and open-source (licensed under MIT) text editor developed by GitHub, Inc. Its first public release was in 2014, although its first stable release (1.0 release) was not until June 2015. It is unique amongst the text editors listed here in a few different ways, firstly, its target audience is very wide with it being designed to be usable for inexperienced programmers as well as seasoned programmers and software developers. Secondly, it is written in CoffeeScript, HTML, JavaScript and Less — computer languages usually used to write web pages.
### Customizability
Atom is very customizable, via several themes and plugins that can be installed from the command-line, using the `apm` command, or from within Atom itself. I personally prefer the command-line, as I have had some bad experiences with the built-in installer. From the command-line the command for installing new themes or plugins is:
{% include codeu.html line1="apm install &lt;PACKAGE&gt;" %}
where &lt;PACKAGE&gt; is the plugin/theme's name. Customizations, including plugins and themes are stored in `~/.atom`. Advanced customization (for example, of keyboard shortcuts) must be done by directly editing files in this directory. For example, in order to edit your keyboard shortcuts you need to edit `~/.atom/keymap.cson`.
### Features
Atom has plugins for syntax highlighting and auto-indentation of most major computer languages including:
* Ada
* C
* C#
* C++
* CoffeeScript
* CSS
* Fortran
* GNU Octave/MATLAB
* HTML
* Java
* JavaScript
* Less
* Lua
* MediaWiki markup
* PyMOL
* Python
* R
* SageMath
* Scilab
* Shell script
* XML
and several others. It also has packages that provide other features, including previews for markup languages such as HTML and markdown, an in-built terminal, *etc.*
### Obtaining it
Atom can be installed via three major methods on Sabayon: adding an overlay with Layman that contains an Atom ebuild and then installing this package with Portage or manually building the program from source code or via installing it using Entropy. I usually prefer the manual route as any momentary glitch in your internet connection can easily stuff up an Portage build, while with a manual build it is no big deal if it does as you can just re-run `script/build` and then proceed with the installation as usual. If you would rather install Atom from a binary package (experimental) go to [this GitHub repository](https://github.com/fusion809/sabayon-tools) and see the instructions there.
### Disadvantages (Cons)
* Slow to start
* Must be installed via one of two fairly error-prone methods, or a third experimental method.
### Advantages (Pros)
* Easily and extensively customizable
* Intuitive and easy to learn
* Support for a wide range of different computer languages
* Displays directory structure in (left) side panel
### Ratings
{% include_relative TE/atom-ratings.html %}
### Website(s)
* [GitHub Repository](https://github.com/atom/atom)
* [Linux Build Instructions](https://github.com/atom/atom/blob/master/docs/build-instructions/linux.md)
* [Official Website](https://atom.io)
