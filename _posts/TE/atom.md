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
Atom can be installed via three major methods on Sabayon: adding an overlay with Layman that contains an Atom ebuild and then installing this package with Portage or manually building the program from source code or via installing it using Entropy. I usually prefer to install using Entropy, via issuing the command:
{% include coder.html line1="equo i app-editors/atom" %}
If, the version of Atom in the Entropy repositories are vastly out-of-date I usually use the ebuild in my overlay, {% include sabayon-tools.md %} to install it. The advantage of my ebuild over other ebuilds (including the one in the `sabayon` overlay, which I too help mantain) is that if you experience any momentary disruption of your Internet connection the other ebuilds may fail and you will have to start the build from the beginning again, while my ebuild will keep soldering on. This is unless the glitches in your Internet connection are so great in number or length that it overwhelms my ebuild.

### Disadvantages (Cons)
* Slow to start, although with the release of version 1.3.0 the start time has been supposedly cut by 20-30%.[^1]
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
