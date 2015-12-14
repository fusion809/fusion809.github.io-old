### ebuilds
As previously mentioned **ebuilds** are specialized Bash scripts many of which are stored in the &ldquo;**Portage Tree**&rdquo; (PT) which is `/usr/portage`, by default. This tree is the official ebuild repository of the Gentoo Foundation and contains a wide range of different ebuilds that have been thoroughly and scrutinously-tested for bugs and malicious code, you can search this repository online at [packages.gentoo.org](https://packages.gentoo.org)). ebuilds in overlays added with [Layman](#layman) are added to another location, `/var/lib/layman`. Normally Portage installs (or &ldquo;*merges*&rdquo;) software from source code, so as to maximize the control users have over the features their software has, but some ebuilds (which I will henceforth refer to as **binary ebuilds**) in the Portage Tree install software from binary packages instead. ebuilds contain several specialized functions and variables that are unique to ebuilds and not found in other Bash scripts.

**Binary ebuilds** usually take binary packages for other Linux distributions (such as `.deb` and `.rpm` packages for Debian and Fedora, respectively), extract their contents (as these binary packages are essentially just file archives) and move their contents to the appropriate location on one's system. Quite often when a program is installed using a binary ebuild its performance will not be as good as if it were installed using a standard (source code) ebuild. The natural question is, of course, "Why even use a binary ebuild then?" Well usually it is a matter of time, see if you install a program from source code it will often take substantially longer than installing it from a binary package, even if that binary package was originally built for another Linux distribution. For most packages Gentoo users are assumed to be willing to put up with the extra time it takes to build a software from source code, as if they are not they probably should not be using a source-based distribution like Gentoo in the first place, but for some packages the compiling time is so unbelievably long (potentially taking days or even weeks) that the maintainers of the PT decided to provide a binary ebuild for the package too. Most binary ebuilds that fit this mold have the suffix `-bin` in their name to distinguish them from their respective source code ebuilds, an example of such an binary ebuild is [`app-emulation/virtualbox-bin`](https://packages.gentoo.org/packages/app-emulation/virtualbox-bin). Other times a binary ebuild is used because of licensing restrictions that do not allow users to access the source code, so they are forced instead to use binary packages from distributions with official releases of the software available. An example of such an ebuild is [`media-sound/spotify`](https://packages.gentoo.org/packages/media-sound/spotify).

ebuilds in overlays, including the Portage Tree, often come with accompanying files. One of these files is called a manifest and can be shared by more than one ebuild, provided the ebuilds are for different versions of the same package. Manifests contain checksums for ebuild(s) and accompayning files, other than itself. Another accompanying file that is sometimes seen (but not all ebuilds have one) is that of metadata.xml, which contains metadata for the package (such as a description, its home page, its maintainer, *etc.*). Some ebuilds will need patch files which are usually kept in a `files/` subdirectory of the directory in which the ebuild is found. 

`ebuild` is also the name of a command used on Gentoo-based systems like Sabayon to create manifests, merge ebuild, build binary packages from ebuilds, *etc.* The `ebuild` command is included in the `sys-apps/portage` package and its syntax is shown below:
{% include coder.html line1="ebuild &lt;FILE&gt; &lt;COMMAND&gt;" %}
where `<FILE>` is the ebuild file you are running the `ebuild` command on, while `<COMMAND>` is any one of the commands listed in table 3.
{% include PMS/table3-commands-for-ebuild.html %}

For details on how to write ebuilds see the [Writing ebuilds](#writing-ebuilds) section of this post.

#### Manpages
* [EBUILD(1) Manpage](/man/ebuild.1.html) which describes the `ebuild` command.
* [EBUILD(5) Manpage](/man/ebuild.5.html) which describes the `ebuild` format.