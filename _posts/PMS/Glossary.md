## Glossary
To ensure that everything in this post is clear as day to understand I felt I should explain some [acronyms](#acronyms), [terminology](#terminology) and [formatting conventions](#formatting) adopted in this post.

### Acronyms
The acronyms used in this post include:
* **CLI**: <b>c</b>ommand-<b>l</b>ine <b>i</b>nterface. Which is usually accessed on Sabayon via terminal emulators.
* **GPO**: <b>G</b>entoo <b>P</b>ortage <b>o</b>verlay.
* **GUI**: <b>g</b>raphical <b>u</b>ser <b>i</b>nterface.
* **PMS**: <b>p</b>ackage <b>m</b>anagement <b>s</b>ystem.
* **PT**: <b>P</b>ortage <b>T</b>ree, the main official overlay of the Gentoo Foundation.

### Formatting
Angle brackets `<` and `>` with a word between them denotes user-provided variables. For example, `<PACKAGE>` denotes the name of a software package, `<OVERLAY>` denotes the name of a software overlay, `<FILE>` is the name of a file, including its extension (e.g., it may equal `atom-1.3.2.ebuild`, when are referring to ebuild files), *etc.* `This` formatting denotes pieces of code or file paths, while [`this`](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) formatting denotes pieces of code/file paths for which I have provided a hyperlink.

### Terminology
#### [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell))
The **Bourne-Again Shell** that is developed as part of the GNU Project, is the default command shell of Sabayon Linux and most other Linux distributions (including Gentoo Linux). It is covered in greater detail, by the [*Bash Scripting and the Command-Line: an Introduction for Sabayon Users*](../../../11/26/bash-scripting-and-the-command-line-an-introduction-for-sabayon-users) post.

#### Binary package
A type of [software package](#software-package) that contains an executable script that is ready to be run. They are usually produced from pre-compiled source code. Most package managers work with binary packages, example of package managers that work with binary packages by default, include:
* [APT](https://en.wikipedia.org/wiki/Advanced_Packaging_Tool), the default command-line package manager used by Debian-based distributions, including Ubuntu. APT uses **Deb packages** which have the `.deb` file extension.
* [DNF](https://en.wikipedia.org/wiki/DNF_(software)), which is the default package manager of Fedora &geq;22. It uses **RPM packages** (with the `.rpm` file extension).
* [Entropy](https://en.wikipedia.org/wiki/Entropy_(package_manager)) is the default package manager of Sabayon and uses `.tbz2` binaries, the same type of binaries that Portage packages software as.
* [yum](https://en.wikipedia.org/wiki/Yellowdog_Updater,_Modified), the default package manager of CentOS, Fedora &lt;22 and Red Hat Enterprise Linux, which also uses **RPM packages**.
* [ZYpp](https://en.wikipedia.org/wiki/ZYpp), the default command-line package manager of openSUSE and SUSE Linux Enterprise, which also works with **RPM packages**.

#### [Software package](https://en.wikipedia.org/wiki/Package_manager)
A distribution of software and data contained in archive files, that can be used by package managers to install software.[^1] There are two main types of software package: [binary](#binary-package) and [source code](#source-code-package), which are both covered separately.

#### Source code package
A type of [software package](#software-package) that contain raw software source code which must be configured and compiled before an executable script is generated that can be run, as opposed to [binary packages](#binary-package) which contain an executable script that can be immediately run.