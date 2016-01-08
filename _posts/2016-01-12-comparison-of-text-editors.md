---
layout: post
title:  "A Comparison of Text Editors"
date:   2016-01-12 +1000
categories: comparisons, text-editors
redirect_from:
      - /comparison-of-text-editors/
---
{% include draft.html %}
{% include image.html image="Atom-1.3.2.png" width="1130px" float="none" description="Atom 1.3.2 running under the Deepin Desktop Environment (DDE)" %}

**Text editors** are essential programs for software developers and programmers in general, as they enable users to write and edit source code or markup files. They are popular tools used by both experienced and novice Linux users. In this post I will compare the various text editors available for Sabayon, with regard to several features and properties of each. It is important to note that I am not a programmer, my experience with programming is limited to mostly MATLAB/GNU Octave scripts, a small handful of Python scripts I wrote for technical computing (that is, numerical analysis) and a few Bash scripts I have written to make my life easier, when I use Linux systems.

On Sabayon there are over a dozen different text editors (see, for example, the category [app-editors](http://gpo.zugaina.org/app-editors/) at gpo.zugaina.org) available for installation, many of these are part of the core applications of complete desktop environments, such as GNOME or KDE Plasma. Each of these text editors also has its own target audience, with some being designed to be used only by seasoned programmers while others are useful only for writing simple text files. Entropy and Portage both use the category for programs relating to text editing of `app-editors`. To list the Entropy packages in this category, from the command-line, run:
{% include codeu.html line1="equo search &quot;app-editors&quot;" %}
While to list ebuilds in installed overlays, plus the Portage tree, within the category of app-editors run:
{% include codeu.html line1="emerge --search &quot;%@^app-editors&quot;" %}
To search all overlays run:
{% include codeu.html line1="eix-update &amp;&amp; eix-remote update &amp;&amp; eix -RCc &quot;app-editors&quot;" %}
This post will compare several different text editors that are available for Sabayon (I know as I have installed them all myself), with respect to several aspects.
{% include_relative TE/comparisons.md %}
{% include_relative TE/atom.md %}
{% include_relative TE/bluefish.md %}
{% include_relative TE/geany.md %}
{% include_relative TE/gedit.md %}
{% include_relative TE/emacs.md %}
{% include_relative TE/nano.md %}
{% include_relative TE/jedit.md %}
{% include_relative TE/kate.md %}
{% include_relative TE/leafpad.md %}
{% include_relative TE/mousepad.md %}
{% include_relative TE/pluma.md %}
{% include_relative TE/scite.md %}
{% include_relative TE/vim.md %}
## Poll
[socialpoll id="2300580"]
## Comparison of SRU of the various Text Editors
<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/TextEditors.png"><img class="alignnone size-full wp-image-694" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/TextEditors.png" alt="TextEditors" width="1287" height="508" /></a>
