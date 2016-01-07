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
Atom can be installed via three major methods on Sabayon: adding an overlay with Layman that contains an Atom ebuild and then installing this package with Portage or manually building the program from source code or via installing it using Entropy. I usually prefer the manual route as any momentary glitch in your internet connection can easily stuff up an Portage build, while with a manual build it is no big deal if it does as you can just re-run <code>script/build</code> and then proceed with the installation as usual. If you would rather install Atom from a binary package (experimental) go to <a href="https://github.com/fusion809/sabayon-tools" target="_blank">this GitHub repository</a> and see the instructions there.
<h2>Disadvantages (Cons)</h2>
<ul>
	<li>Slow to start</li>
	<li>Must be installed via one of two fairly error-prone methods, or a third experimental method.</li>
</ul>
<h2>Advantages (Pros)</h2>
<ul>
	<li>Easily and extensively customizable</li>
	<li>Intuitive and easy to learn</li>
	<li>Support for a wide range of different computer languages</li>
	<li>Displays directory structure in (left) side panel</li>
</ul>
<h2>Ratings</h2>
<ul>
	<li><strong>Availability</strong>: 3-4. It is possible to install Atom on Sabayon, but it is more error-prone than it is on more popular distributions like Debian, Fedora, openSUSE and Ubuntu, which have pre-compiled binary packages available on the Atom website.</li>
	<li><strong>Beginner-friendliness</strong>: ≥8. It is easy to get to used for beginners, as it uses the keymap as several basic text editors like gedit and Notepad.</li>
	<li><strong>Customizability</strong>: 8. It is totally customizable, for those with the skill and time. For lay persons its customizability is more limited, to customization with available packages and themes.</li>
	<li><strong>Features</strong>: 8. Most computer languages are covered by Atom's syntax highlighting plugins, but some are not, for example, it does not yet have support for <a href="https://discuss.atom.io/t/syntax-highlighting-for-desktop-configuration-files/21764">desktop configuration files.</a></li>
	<li><strong>Popularity</strong>: ≥8. While this text editor is new, its popularity on Sabayon is fairly high and increasing.</li>
	<li><strong>SRU</strong>: 2. <a href="https://github.com/fusion809/sabayon-tools" target="_blank">Atom 1.0.19</a> is a 59.4 MB download, when it is installed it takes up a total space of 196.2 MB. Here is my <code>ps mem</code> table for running under LXDE:
<pre> Private  +   Shared  =  RAM used	Program

259.6 MiB +  42.3 MiB = 301.9 MiB	atom (5)
---------------------------------
                        301.9 MiB
=================================
</pre>
</li>
	<li><strong>Overall</strong>: 7-9. It is my favourite text editor, but it is still early days, its SRU and boot time are issues that are being worked on, new packages and themes are created every week. It may become easier to install it on Sabayon, in the future, perhaps in response to my <a href="https://bugs.sabayon.org/show_bug.cgi?id=5011">request</a> that Atom be added to the Sabayon overlay.</li>
</ul>
<h2>Website(s)</h2>
<ul>
	<li><a href="https://github.com/atom/atom">GitHub Repository</a></li>
	<li><a href="https://github.com/atom/atom/blob/master/docs/build-instructions/linux.md">Linux Build Instructions</a></li>
	<li><a href="https://atom.io">Official Website</a></li>
</ul>
