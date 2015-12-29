## Glossary
### Short Definitions
* **&#42;nix**
  * Unix/Unix-like operating system.
* **BE**
  * <b>B</b>leeding <b>e</b>dge: means has the very latest software.
* **BSDs**
  * <b>B</b>erkeley <b>S</b>oftware <b>D</b>istribution derivative<b>s</b>.
* **Calamares**
  * [Calamares](https://calamares.io) is a distribution-independent graphical installer framework written predominantly in C++ (82.0%) and Python (8.0%), according to [GitHub](https://github.com/calamares/calamares).  
* **CLI**
  * <b>C</b>ommand-<b>l</b>ine <b>i</b>nterface. Also known as terminal, a way of interacting with one&#39;s OS by issuing a series of textual commands.
* **CLIs**
  * <b>C</b>ommand-<b>l</b>ine <b>i</b>nterface<b>s</b>.
* **GUIs**
  * <b>G</b>raphical <b>u</b>ser <b>i</b>nterface<b>s</b>.
* **LD**
  * <b>L</b>inux <b>d</b>istribution.
* **LDs**
  * <b>L</b>inux <b>d</b>istribution<b>s</b>.
* **LTS**
  * <b>L</b>ong-<b>t</b>erm <b>s</b>table/<b>s</b>upport.
* **OS**
  * <b>O</b>perating <b>s</b>ystem.
* **OSs**
  * <b>O</b>perating <b>s</b>ystem<b>s</b>.
* **PMS**
  * <b>P</b>ackage <b>m</b>agement <b>s</b>ystem.
* **PMSs**
  * <b>P</b>ackage <b>m</b>agement <b>s</b>ystem<b>s</b>.
* **VM**
  * <b>V</b>irtual <b>m</b>achine. Host operating systems run within virtualization software such as VirtualBox.
* **VMs**
  * <b>V</b>irtual <b>m</b>achine<b>s</b>.

### Longer Definitions
#### Bash
The <b>B</b>ourne-<b>A</b>gain <b>Sh</b>ell is the most popular Unix shell around today. It is free and developed as part of the GNU Project. Any Bash script snippet shown in this post is designed to be added to one's `.bashrc` file (which is found in the user's home directory) so that after one run's `source ~/.bashrc` (which will cause Bash to re-read this file) one can run the functions defined in the script from one's favourite terminal. For example, if you add the Bash script for Debian package management to your `~/.bashrc` file and run `source ~/.bashrc` then running `update` from a terminal emulator it should upgrade all packages on your system.

#### BSD
<b>B</b>erkeley <b>S</b>oftware <b>D</b>istribution, a Unix operating system developed at the University of California, Berkeley between 1977 and 1995. The early releases of BSD were proprietary-licensed, although releases from 4.3 onwards (which was made in 1986) were licensed under the permissive BSD licenses. BSD 4.4 was forked to create several operating systems (including Apple's OS X) that are still under active development today.

#### Copyleft license
[Copyleft](https://en.wikipedia.org/wiki/Copyleft), which is a play on the word &ldquo;copyright&rdquo;, in the context of software licensing, refers to licenses that allow people to freely distribute copies of software licensed under their terms, as well as to make any modifications of the software they see fit and redistribute these modified versions provided they distribute these modified versions under a similar copyleft license. One of the most popular examples of a copyleft license is the [GNU General Public License](https://en.wikipedia.org/wiki/GNU_General_Public_License) (GPL).

#### Fork
In the field of software development a [fork](https://en.wikipedia.org/wiki/Fork_(software_development)) is when software developers take a copy of a project's source code and start working on it independently of its previous developers. Proprietary software licenses do not usually allow for forks except with the expressed permission of the software's previous developer(s). In the FOSS community forks are common due to the fact that FOSS licenses permit the creation of forks without the previous developer(s)'s permission.

#### FOSS
[<b>F</b>ree and <b>o</b>pen-<b>s</b>ource <b>s</b>oftware](https://en.wikipedia.org/wiki/Free_and_open-source_software). FOSS refers to software that is **freely licensed** to be used, studied, copied, modified in anyway, and the source code is **openly shared** so that anyone with the skill and inclination is free to improve on the software should they choose, provided they conform to the requirements of its respective license. FOSS is licensed under either a copyleft or permissive license or licenses in between (e.g., the [GNU Lesser General Public License](https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License) and [Mozilla Public License](https://en.wikipedia.org/wiki/Mozilla_Public_License)).

#### GNU
GNU, which is a recursive acronym for **GNU is Not Unix**, is an extensive collection of software that can be used to build &#42;nix systems. This includes a kernel, GNU Hurd, although most commonly operating systems using GNU software will use the Linux kernel instead.

#### GUI
<b>G</b>raphical <b>u</b>ser <b>i</b>nterface. The most notable type of GUI found on many &#42;nix systems is that of a desktop environment like Cinnamon, GNOME, KDE, LXDE, MATE, Xfce, *etc.*

#### Hardware
Computer hardware consists of the physical or tangible components of a computer, including its hard disk drive (HDD), central processing unit (CPU), graphics card, *etc.*

#### Kernel
An [operating system kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)) is a piece of system software that manages all communication between a computer's software and its hardware. It essentially converts all software input/output requests into implementable instructions for the computer's hardware. There are three major categories of kernel, although one of these categories is debatable with the creator of the Linux kernel calling it simple marketing, they are:

* [Hybrid kernels](https://en.wikipedia.org/wiki/Hybrid_kernel) (the debatable kernel category) are, as their name suggests, kernels that are a compromise between micro- and monolithic kernels, with some (but not all) system software components running in the kernel's virtual memory (or kernel space). Examples include the kernels of both OS X and the Windows NT family.
* [Microkernels](https://en.wikipedia.org/wiki/Microkernel) (and more extreme members of this category like nano- and pico-kernels). These are kernels that keep as little of the system software running in the kernel's virtual memory as possible. They are so called because they usually consist of significantly fewer lines of source code than corresponding monolithic kernels. This makes bug-fixing easier, although it may also reduce the performance of operating systems using these kernels. Examples include the GNU Hurd and MINIX kernels.
* [Monolithic kernels](https://en.wikipedia.org/wiki/Monolithic_kernel), which are kernels that keep all system software in the kernel's virtual memory, and are often reported to be superior, performance-wise than their microkernel counterparts. Examples include the FreeBSD, Linux, NetBSD, OpenBSD and Solaris kernels.

#### Linux distribution
A Linux distribution is any operating system that is built on top of the Linux or Linux-libre kernel. Most Linux distributions can also be called GNU/Linux distributions because of the fact that most of their userland software come from the GNU Project. This userland software includes the GNU Coreutils package that provide some of the basic POSIX utilities, including `cat`, `chmod`, `cp`, `mv`, *etc.*

#### Linux kernel
The [Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel) is a monolithic kernel originally created by and named after Finnish computer programmer, [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds), whom at the time of its founding in 1991 was a 21-year-old computer science student. It started off as a side project by Torvalds to create an operating system for his own personal use, but has since expanded to become one of the most widely used free (licensed primarily under GPLv2) operating system kernels worldwide.

#### Linux-libre kernel
The [Linux-libre kernel](https://en.wikipedia.org/wiki/Linux-libre) is a kernel that is essentially the Linux kernel with its proprietary binary blobs removed. These binary blobs are licensed under non-FOSS licenses and hence do not give users the freedom to study, modify and redistribute them under FOSS licenses. The binary blobs basically improve the kernel's compatibility with one's hardware. The Linux-libre kernel is developed as part of the GNU Project.

#### NET
Usually refers to netinstall editions. These are OS editions that contain the barebones required to install an OS using one's network (or internet) connection.

#### Operating system
An operating system, is essentially the pieces of system software that manages hardware and software resources and provides common services for computer programs. The most important piece of system software of any operating system is its kernel.

#### Out-of-the-box
The property of an operating system of being <q>out-of-the-box</q> means that as soon as the default installer (if any) has done its job and installed the system, the system should be ready to be used by the user without any further configuration or installation of software onto the system.

#### Permissive license
[Permissive licenses](https://en.wikipedia.org/wiki/Permissive_license) are FOSS licenses that do not require that derivatives of the software licensed under their terms be released under similar FOSS licenses. Popular examples of permissive licenses include the various BSD licenses and the MIT License.

#### POSIX
<b>P</b>ortable <b>O</b>perating <b>S</b>ystem <b>I</b>nterface. A family of standards for the application programming interface (API), Unix shell, command-line utilities, *etc.* of &#42;nix systems.

#### Programming languages
A programming language is a type of computer language that is used to write computer programs. Programming languages can be **implemented** (or executed, that is, run) via one of two methods, although the second usually requires some degree of the first. These two methods are:
* **Interpretation**. This method is basically what it sounds like: it is when the program's source code is translated into a series of actions implemented by the computer's hardware.
* **Compilation**. Compilers essentially serve as translators between languages &mdash; transforming one programming language into another computer language, which can then be compiled further into another language or fed into an interpreter. Some compilers (**native code compilers**) compile programming languages directly into machine code (which as its name suggests is a set of instructions that can be directly interpreted by a computer's Central Processing Unit).

#### RRM
<b>R</b>olling <b>r</b>elease <b>m</b>odel. A type of operating system development model in which the system is continually developing, this is as opposed to standard release models (SRMs) which uses distinct OS versions that must be reinstalled over the previous version.

#### Software
Software are the non-physical or tangible components of a computer, specifically data stored on a computer's hard drive, computer programs (e.g., the web browser you are using to view this blog post), software libraries, *etc.*

#### Unix
A family of operating systems with several defining characteristics including support for multiple users and for the execution of multiple tasks simultaneously, a modular design with simple tools that perform limited, well-defined functions, a Unix shell, POSIX compliance, compliance to the Single Unix Specification (SUS), *etc.* Notable examples include BSD, OS X (previously called Mac OS X), Research Unix and Solaris.

#### Unix-like
A family of operating systems, that share the vast majority of the features of Unix systems, without necessarily being certified as compliant to any particular version of the SUS. This certification costs money, so many free operating systems do not have the funds or the inclination to get SUS certification. Examples include FreeBSD, Linux, NetBSD and OpenBSD.

#### Unix shell
A Unix shell is a program that serves as a command-line interpreter (CLI) for &#42;nix systems including the various distributions of Linux. Unix shells are also defined by their POSIX compliance. Notable free examples include Bash, tcsh and Zsh. POSIX compliance also means that these Unix shells share some parts of their syntax. Bash and Zsh are probably the most feature-packed free widely-used Unix shells and most shell scripts written for Bash should also work without a hitch in Zsh. Although there are exceptions, for example, tests (indicated by single or double square brackets around a segment of code in Bash) in Zsh need double square brackets.
