{{ include.puncl }}{% if include.id %}[Gentoo Bug #{{ include.id }}](https://bugs.gentoo.org/show_bug.cgi?id={{ include.id }}){% elsif include.ID %}[Gentoo Bug #{{ include.ID }}](https://bugs.gentoo.org/show_bug.cgi?id={{ include.ID }}){% elsif include.bug %}[Gentoo Bug #{{ include.bug }}](https://bugs.gentoo.org/show_bug.cgi?id={{ include.bug }}){% endif %}{{ include.punc }}{{ include.puncr }}