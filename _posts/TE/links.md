{% if include.link %}[**{{ include.program }}**]({{ include.link }}){% else %}**{{ include.program }}**{% endif %} ({% if include.package %}[<abbr title="Entropy Store">ES</abbr>](https://packages.sabayon.org/quicksearch?q={{ include.package }}&x=0&y=0), [<abbr title="Gentoo Portage Overlays">GPO</abbr>](http://gpo.zugaina.org/{{ include.package }}), [<abbr title="Portage Tree">PT</abbr>](https://packages.gentoo.org/{{ include.package }}){% endif %} {% if include.pacman %};&nbsp;[<abbr title="Arch Linux Package">AP</abbr>](https://www.archlinux.org/packages/{{ include.pacman }}){% elsif include.aurs %};&nbsp;[<abbr title="Arch User Repository Package">AU</abbr>](https://aur.archlinux.org/packages/{{ include.aurs }})<sup><abbr title="Multiple AUR packages exist for this program">M</abbr></sup>{% elsif include.aur %};&nbsp;[<abbr title="Arch User Repository Package">AU</abbr>](https://aur.archlinux.org/packages/{{ include.aur }}){% endif %} {% if include.aw %};&nbsp;[<abbr title="ArchWiki">AW</abbr>](https://wiki.gentoo.org/wiki/{{ include.aw }}), {% endif %}{% if include.gw %}[<abbr title="Gentoo Wiki">GW</abbr>](https://wiki.gentoo.org/wiki/{{ include.gw }}), {% endif %}{% if include.wiki %}[<abbr title="Wiki">WK</abbr>]({{ include.wiki }}), {% endif %}{% if include.wp %}[<abbr title="Wikipedia">WP</abbr>](https://en.wikipedia.org/wiki/{{ include.wp }}){% endif %})