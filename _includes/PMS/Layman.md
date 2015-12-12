###Layman
{% include links.html gp="Layman" gw="Layman" package="app-portage/layman" program="Layman" link="http://layman.sourceforge.net/" gr="gentoo/layman" %} is a command-line tool for managing Portage overlays. It can be installed with Portage (from the PT) using the command:
{% include coder.html line1="emerge -av app-portage/layman" %}
or with Entropy using the command:
{% include coder.html line1="equo i -av app-portage/layman" %}
I would recommend installing Layman using Entropy as it is less error-prone and the Layman package it installs was compiled with all the USE flags required to add every type of overlay available (including Bazaar (bzr), Git, Mercurial (hg) and Subversion (svn)). Layman-added overlays (and the ebuilds contained within them) are stored in <code>/var/lib/layman/</code>.

####Layman Syntax
The basic syntax for Layman is:
{% include coder.html line1="layman [<em>options</em>] [<em>action</em>]" %}
As with emerge, I am not going to cover every option and action available for layman, as that would take too long, plus this is not meant to be a substitute for the manpages of the package managers and other tools covered in this post. Some of the more important/frequently-used actions and options are covered in tables 3 and 4. Please note that all actions when given in long form, if they require input (like `--add` does) this input must be specified with an equal sign and no spaces. For example to add the `sabayon` overlay you may run:
{% include coder.html line1="layman --add=sabayon" %}
or in shortened notation:
{% include coder.html line1="layman -a sabayon" %}
It is important to note that while this technique will add the `sabayon` overlay to one's machine not all overlays can be added this way, as some overlays are not within Layman's default list of available overlays (which I will henceforth refer to as the **remote list**). To view the remote, run:
{% include coder.html line1="layman -L" %}
while to see the list of overlays currently installed, locally, on your machine run:
{% include coder.html line1="layman -l" %}
To add a new overlay that is not within the Layman remote list, run:
{% include coder.html line1="layman -o &lt;URL of repository XML file&gt; -f -a &lt;overlay name&gt;" %}
{% include PMS/table3-options-for-layman.html %}
<br/>
{% include PMS/table4-actions-for-layman.html %}
