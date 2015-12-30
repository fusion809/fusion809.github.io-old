### Unix shells
A [**Unix shell**](https://en.wikipedia.org/wiki/Unix_shell) is a program that serves as a command-line interpreter (CLI) for &#42;nix systems including the various distributions of Linux. Unix shells are also defined by their POSIX compliance. Notable free examples include Bash, tcsh and Zsh. POSIX compliance also means that these Unix shells share some parts of their syntax. Bash and Zsh are probably the most feature-packed free widely-used Unix shells and most shell scripts written for Bash should also work without a hitch in Zsh. Although there are exceptions, for example, tests (indicated by single or double square brackets around a segment of code in Bash) in Zsh need double square brackets.

#### Bash
The **Bourne-Again Shell** (or [**Bash**](https://en.wikipedia.org/wiki/Bash_(Unix_shell))) is the most popular Unix shell around today. It is free, developed as part of the GNU Project and modelled after the Bourne Shell with features from miscellaneous other shells including the Korn Shell. Any Bash script snippet shown in this post is designed to be added to one's `.bashrc` file (which is found in the user's home directory) so that after one run's `source ~/.bashrc` (which will cause Bash to re-read this file) one can run the functions defined in the script from one's favourite terminal. For example, if you add the Bash script for Debian package management to your `~/.bashrc` file and run `source ~/.bashrc` then running `update` from a terminal emulator it should upgrade all packages on your system.

#### tcsh
The **TENEX C Shell** (or [**tcsh**](https://en.wikipedia.org/wiki/tcsh)) is the most common Unix shell used by BSDs, like FreeBSD. It is the least feature-packed Unix shell out of the three mentioned in this section. 

#### Zsh
The **Z Shell** (or [**Zsh**](https://en.wikipedia.org/wiki/Z_Shell))
