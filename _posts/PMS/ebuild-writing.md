## ebuild Writing
{% include note.md note1="This section is for advanced users (or those that are interested in attaining this level of understanding) and is mostly based on the [official ebuild writing guide](https://devmanual.gentoo.org/)." %}
**ebuild writing** and **testing** are two of the most important, yet difficult activities for Gentoo developers to do. Efficient ebuild writing requires a good knowledge of [Bash scripting](/2015/11/26/bash-scripting-and-the-command-line-an-introduction-for-sabayon-users/), which I do not even possess, so bare with me. ebuilds can contain traditional Bash functions and calls to standard POSIX utilities (such as `cp` or `mv`), as well as specialized ebuild functions and code snippets (which are known as **eclasses**). Here is an example ebuild
{% include note.md note1="An integer between brackets `()` at the end of a line denotes a footnote number that may be referred to later. For example, on line `(1)` is footnote number 1." %}
```bash
# Copyright 1999-2015 Gentoo Foundation (1)
# Distributed under the terms of the GNU General Public License v2
# $Id$

EAPI="N" # N can take values of 1-6 (2)

inherit ...

DESCRIPTION="..." # (3)
HOMEPAGE="..." # (4)
```

Footnote 1 is there because the time range (1999-2015) is to be adjusted according to the date the ebuild was last updated.  
