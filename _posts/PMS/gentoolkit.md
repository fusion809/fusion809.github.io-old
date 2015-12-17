{% capture my_capture %}
### Gentoolkit
{% include links.html program="Gentoolkit" package="app-portage/gentoolkit" gw="Gentoolkit" %} is a suite of tools that make Gentoo administration easier. Examples of these tools include:
* [`eclean`](/man/eclean.1.html) which can be used to remove old source files and binary packages from one's system.
* [`equery`](/man/equery.1.html) which can be used to query installed packages. For example, it can list the installed files associated with a package, as well as to determine which package an installed file belongs. It can also be used to determine an installed package's dependencies
* [`euse`](/man/euse.1.html) which can be used to set, unset or see USE flags.
* [`revdep-rebuild`](/man/revdep-rebuild.1.html) which will scan for packages that have become broken as a result of the upgrade of packages they depend on. It will also attempt to fix these problems itself by emerging package dependencies. It will pass all flags to `emerge` so {% include coders.html line1="revdep-rebuild -p" %} will show the packages that would be emerged if the `-p` (shortened version of `--pretend`) flag was not passed.

The Gentoolkit can be installed using Entropy or Portage. Using Entropy one would install it using the command:
{% include coder.html line1="equo i app-portage/gentoolkit" %}
{% endcapture %}
{{ my_capture | markdownify }}
