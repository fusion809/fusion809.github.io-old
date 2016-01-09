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

On Manjaro Linux many, if not all of these text editors, are also available from the [**Arch User Repository**](https://aur.archlinux.org) (**AUR**) or the Manjaro repositories.

{% include_relative TE/glossary.md %}
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
<div id="debate_1_2300580"></div>
<script>
  (function () {
    var opst = document.createElement('script');
    opst.type = 'text/javascript';
    opst.async = true;
    opst.src = '/js/embed-2300580.js';
    (document.getElementsByTagName('head')[0] ||
      document.getElementsByTagName('body')[0]).appendChild(opst);
  }());
</script>

## SRU Comparison
{% include image.html image="TextEditors.png" width="1130px" float="none" description="A comparison of the RAM usage of the various text editors compared here on Sabayon" %}
{% include image.html image="TextEditors-manjaro.png" width="1130px" float="none" description="A comparison of the RAM usage of the various text editors compared here on Manjaro" %}

[^1]: Ben Ogle (11 November 2015). [*Atom 1.3*](http://blog.atom.io/2015/12/11/atom-1-3.html). *blog.atom.io*: Atom.
