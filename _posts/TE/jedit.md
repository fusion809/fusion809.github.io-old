## jEdit
{% include image.html image="jEdit-screenshot.png" description="jEdit 5.2.0 running under Moksha" width="1130px" float="none" %}

### Background
{% include_relative TE/links.md program="jEdit" package="app-editors/jedit" link="http://www.jedit.org/" sf="jedit" ml="http://www.jedit.org/users-guide/" wp="jEdit" pacman="community/x86_64/jedit/" %} is a Java-based text editor that began life in 1998, when Slava Pestov started developing it. Pestov later left the project in 2006, when he handed the reigns to the free software community. jEdit provides syntax highlighting for dozens of computer languages so far, and can be customized using scripts written in a variety of different programming languages such as JavaScript and Jython. As it is written in Java it can run on any Java-capable platform, including Sabayon.

### Customizability
It is extensively customizable, via scripts in supported languages. Several plugins, that provide extra functionality, are available via a built-in plugin installer (under the "Plugins" menu).

### Features
As previously mentioned auto-indentation and syntax-highlighting support exists for a long list of computer languages. Plugins with extra IDE-like capabilities also exist, including a plugin for using git from within jEdit, another for using a Jython interpreter from within jEdit, another for a Python shell, *etc.*

### Obtaining it
On Sabayon jEdit can be installed via Entropy or Portage (from the Portage Tree, no need to add unofficial overlays for it). To install it using Entropy run:
{% include coder.html line1="equo i -av app-editors/jedit" %}
while to install it using Portage run:
{% include coder.html line1="emerge -av app-editors/jedit" %}

### Disadvantages (Cons)
* Heavy on system resources.

### Advantages (Pros)
* Easy to obtain it on Sabayon
* Extensively customizable
* Has intuitive keyboard shortcuts
* Written in Java, hence can run on most platforms, if you end up switching to a new operating system in the future
* User-friendly

### Ratings
{% include_relative TE/jedit-ratings.html %}
