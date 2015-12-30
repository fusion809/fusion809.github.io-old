### Unix shells
A [**Unix shell**](https://en.wikipedia.org/wiki/Unix_shell) is a program that serves as a command-line interpreter (CLI) for &#42;nix systems including the various distributions of Linux. Unix shells are also defined by their POSIX compliance. Notable free examples include Bash, tcsh and Zsh. POSIX compliance also means that these Unix shells share some parts of their syntax. Bash and Zsh are probably the most feature-packed free widely-used Unix shells and most shell scripts written for Bash should also work without a hitch in Zsh. Although there are exceptions, for example, tests (indicated by single or double square brackets around a segment of code in Bash) in Zsh need double square brackets.

#### Bash
The **Bourne-Again Shell** (or [**Bash**](https://en.wikipedia.org/wiki/Bash_(Unix_shell))) is the most popular Unix shell around today. It is free, developed as part of the GNU Project and modelled after the Bourne Shell with features from miscellaneous other shells including the KornShell. Any Bash script snippet shown in this post is designed to be added to one's `.bashrc` file (which is found in the user's home directory) so that after one run's `source ~/.bashrc` (which will cause Bash to re-read this file) one can run the functions defined in the script from one's favourite terminal. For example, if you add the Bash script for Debian package management to your `~/.bashrc` file and run `source ~/.bashrc` then running `update` from a terminal emulator it should upgrade all packages on your system.

#### Bourne Shell
The [**Bourne Shell**](https://en.wikipedia.org/wiki/Bourne_Shell) (**sh**) is the best-accepted of the original shells developed for Research Unix. Its development was discontinued many years ago, although some modern-day &#42;nix systems still use it. For example, it is still used as the default user shell of FreeBSD.

#### KornShell
The [**KornShell**](https://en.wikipedia.org/wiki/KornShell) (**ksh**, several descendents of the KornShell also exist, they usually have ksh somewhere in their abbreviated name) is a Unix shell that was first developed at Bell Labs in the early 1980s and while it is not the most popular of Unix shells, it is still under active development and used by a small handful of &#42;nix systems such as OpenBSD, as their default shell.

#### tcsh
The **TENEX C Shell** (or [**tcsh**](https://en.wikipedia.org/wiki/tcsh)) is a Unix shell with fewer features than Bash and Zsh and it has been falling out of favour in recent years. It used to be the default shell of OS X (before the release of 10.3 in 2003) and is the default root shell of FreeBSD.

#### Zsh
The **Z Shell** (or [**Zsh**](https://en.wikipedia.org/wiki/Z_Shell)) is a less popular Unix shell than Bash and is not the official Unix shell of anymore than a couple of unpopular &#42;nix systems. Despite this it is very feature-packed, surpassing Bash in this regard.
