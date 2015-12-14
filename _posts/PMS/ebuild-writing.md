## ebuild Writing
{% include note.md note1="This section is for advanced users (or those that are interested in attaining this level of understanding) and is mostly based on the [official ebuild writing guide](https://devmanual.gentoo.org/)." %}
**ebuild writing** and **testing** are two of the most important, yet difficult activities for Gentoo developers to do. Efficient ebuild writing requires a good knowledge of [Bash scripting](/2015/11/26/bash-scripting-and-the-command-line-an-introduction-for-sabayon-users/), which I do not even possess, so bare with me. ebuilds can contain traditional Bash functions and calls to standard POSIX utilities (such as `cp` or `mv`), as well as specialized ebuild functions and code snippets (which are known as **eclasses**). ebuilds are so varied in their contents and structure that it is difficult for me to find a reasonable example with which to teach their general structure. This is partly because many ebuilds have components that are specific to them and take up so much space that I do not wish to include them here. This is probably the best ebuild example I can provide (which is in the Portage Tree and is the `games-arcade/supertux-0.1.3` ebuild):
```bash
# Copyright 1999-2015 Gentoo Foundation
# Distributed under the terms of the GNU General Public License v2
# $Id$

EAPI=5
inherit eutils games

DESCRIPTION="A game similar to Super Mario Bros"
HOMEPAGE="http://super-tux.sourceforge.net"
SRC_URI="https://supertux.googlecode.com/files/${P}.tar.bz2"

LICENSE="GPL-2"
SLOT="0"
KEYWORDS="amd64 ~mips ppc ~ppc64 sparc x86 ~x86-fbsd"
IUSE="opengl"

DEPEND="media-libs/libsdl[joystick]
	media-libs/sdl-image[png,jpeg]
	media-libs/sdl-mixer[mod,vorbis]
	x11-libs/libXt"
RDEPEND=${DEPEND}

src_prepare() {
	epatch \
	"${FILESDIR}"/${P}-gcc41.patch \
	"${FILESDIR}"/${P}-ndebug.patch \
	"${FILESDIR}"/${P}-desktop.patch
}

src_configure() {
	egamesconf \
		--disable-debug \
		$(use_enable opengl)
}

src_install() {
	emake DESTDIR="${D}" \
		desktopdir=/usr/share/applications \
		icondir=/usr/share/pixmaps \
		install
	dodoc AUTHORS ChangeLog LEVELDESIGN README TODO
	prepgamesdirs
}
```
