## Glossary
To ensure that everything in this post is clear as day to understand I felt I should explain some acronyms, [terminology](#binary-package) and formatting conventions adopted in this post.

### Terminology
#### Binary package
A type of [software package](#software-package) that contains an executable script that is ready to be run. They are usually produced from pre-compiled source code. Most package managers work with binary packages, example of package managers that work with binary packages by default, include:
* [APT](https://en.wikipedia.org/wiki/Advanced_Packaging_Tool), the default command-line package manager used by Debian-based distributions, including Ubuntu. The binary packages used by APT have the `.deb` file extension.
* [DNF](https://en.wikipedia.org/wiki/DNF_(software)), which is the default package manager of Fedora &geq;22. It uses RPM packages (with the `.rpm` file extension).
* [Entropy](https://en.wikipedia.org/wiki/Entropy_(package_manager)) is the default package manager of Sabayon and uses `.tbz2` binaries, the same type of binaries that Portage packages software as.
* [yum](https://en.wikipedia.org/wiki/Yellowdog_Updater,_Modified), the default package manager of CentOS, Fedora &lt;22 and Red Hat Enterprise Linux, which also uses RPM packages.
* [ZYpp](https://en.wikipedia.org/wiki/ZYpp), the default command-line package manager of openSUSE and SUSE Linux Enterprise, which also works with RPM packages.

#### [Software package](https://en.wikipedia.org/wiki/Package_manager)
A distribution of software and data contained in archive files, that can be used by package managers to install software.[^1] There are two main types of software package: [binary](#binary-package) and [source code](#source-code-package), which are both covered separately.

#### Source code package
A type of [software package](#software-package) that contain raw software source code which must be configured and compiled before an executable script is generated that can be run, as opposed to [binary packages](#binary-package) which contain an executable script that can be immediately run.
