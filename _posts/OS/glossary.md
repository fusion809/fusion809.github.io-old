## Glossary
{% include_relative OS/short-definitions.md %}

### Basic Definitions
#### Command-Line Interface
A [**command-line interface**](https://en.wikipedia.org/wiki/Command-line_interface) (**CLI**) or **command-line interpreter** is a type of user interface that allows users to interact with their computer by issuing a series of commands. On &#42;nix systems the most common type of CLI are Unix shells.

#### Fork
In the field of software development a [**fork**](https://en.wikipedia.org/wiki/Fork_(software_development)) is when software developers take a copy of a project's source code and start working on it independently of its previous developers. Proprietary software licenses do not usually allow for forks except with the expressed permission of the software's previous developer(s). In the FOSS community forks are common due to the fact that FOSS licenses permit the creation of forks without the previous developer(s)'s permission.

#### GUI
A [**graphical user interface**](https://en.wikipedia.org/wiki/Graphical_user_interface) (**GUI**) is a type of interface that allows users to interact with their computer using graphical icons and visual indicators. This is as opposed to command-line interfaces (CLIs) and textual user interfaces (TUIs), in which users interact with the computer by issuing lines of commands or by writing textual responses to prompts. The most notable type of GUI found on many &#42;nix systems is that of a desktop environment like Cinnamon, GNOME, KDE, LXDE, MATE, Xfce, *etc.*

#### Hardware
[**Computer hardware**](https://en.wikipedia.org/wiki/Computer_hardware) consists of the physical or tangible components of a computer, including its [**hard disk drive**](https://en.wikipedia.org/wiki/Hard_disk_drive) (**HDD**, or simply **hard drive**), [**central processing unit**](https://en.wikipedia.org/wiki/Central_processing_unit) (**CPU**), [**graphics card**](https://en.wikipedia.org/wiki/Video_card), *etc.*

#### Software
[**Software**](https://en.wikipedia.org/wiki/Software) are the non-physical or tangible components of a computer, specifically data stored on a computer's hard drive, computer programs (e.g., the web browser you are using to view this blog post), software libraries, *etc.*

### Licensing Definitions
#### Copyleft License
[**Copyleft**](https://en.wikipedia.org/wiki/Copyleft), which is a play on the word &ldquo;copyright&rdquo;, in the context of software licensing, refers to licenses that allow people to freely distribute copies of software licensed under their terms, as well as to make any modifications of the software they see fit and redistribute these modified versions provided they distribute these modified versions under a similar copyleft license. One of the most popular examples of a copyleft license is the [GNU General Public License](https://en.wikipedia.org/wiki/GNU_General_Public_License) (GPL).

#### Free and Open-Source Software
[**Free and open-source software**](https://en.wikipedia.org/wiki/Free_and_open-source_software) (**FOSS**) refers to software that is **freely licensed** to be used, studied, copied, modified in anyway, and the source code is **openly shared** so that anyone with the skill and inclination is free to improve on the software should they choose, provided they conform to the requirements of its respective license. FOSS is licensed under either a copyleft or permissive license or licenses in between (e.g., the [GNU Lesser General Public License](https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License) and [Mozilla Public License](https://en.wikipedia.org/wiki/Mozilla_Public_License)).

#### Permissive License
[**Permissive licenses**](https://en.wikipedia.org/wiki/Permissive_license) are FOSS licenses that do not require that derivatives of the software licensed under their terms be released under similar FOSS licenses. Popular examples of permissive licenses include the various BSD licenses and the MIT License.

### Operating Systems

#### BSD
[**Berkeley Software Distribution**](https://en.wikipedia.org/wiki/Berkeley_Software_Distribution) (**BSD**), a Unix operating system developed at the University of California, Berkeley between 1977 and 1995. The early releases of BSD were proprietary-licensed, although releases from 4.3 onwards (which was made in 1986) were licensed under the permissive BSD licenses. BSD 4.4 was forked to create several operating systems (including Apple's OS X) that are still under active development today.

#### GNU
[**GNU**](https://en.wikipedia.org/wiki/GNU), which is a recursive acronym for **GNU is Not Unix**, is an extensive collection of software that can be used to build &#42;nix systems. This includes a kernel, GNU Hurd, although most commonly operating systems using GNU software will use the Linux kernel instead.

#### Kernel
An [**operating system kernel**](https://en.wikipedia.org/wiki/Kernel_(operating_system)) is a piece of system software that manages all communication between a computer's software and its hardware. It essentially converts all software input/output requests into implementable instructions for the computer's hardware. There are three major categories of kernel, although one of these categories is debatable with the creator of the Linux kernel calling it simple marketing, they are:

* [**Hybrid kernels**](https://en.wikipedia.org/wiki/Hybrid_kernel) (the debatable kernel category) are, as their name suggests, kernels that are a compromise between micro- and monolithic kernels, with some (but not all) system software components running in the kernel's virtual memory (or kernel space). Examples include the kernels of both OS X and the Windows NT family.
* [**Microkernels**](https://en.wikipedia.org/wiki/Microkernel) (and more extreme members of this category like nano- and pico-kernels). These are kernels that keep as little of the system software running in the kernel's virtual memory as possible. They are so called because they usually consist of significantly fewer lines of source code than corresponding monolithic kernels. This makes bug-fixing easier, although it may also reduce the performance of operating systems using these kernels. Examples include the GNU Hurd and MINIX kernels.
* [**Monolithic kernels**](https://en.wikipedia.org/wiki/Monolithic_kernel), which are kernels that keep all system software in the kernel's virtual memory, and are often reported to be superior, performance-wise than their microkernel counterparts. Examples include the FreeBSD, Linux, NetBSD, OpenBSD and Solaris kernels.

#### Linux distribution
A [**Linux distribution**](https://en.wikipedia.org/wiki/Linux_distribution) is any operating system that is built on top of the Linux or Linux-libre kernel. Most Linux distributions can also be called GNU/Linux distributions because of the fact that most of their userland software come from the GNU Project. This userland software includes the [GNU Coreutils](https://en.wikipedia.org/wiki/GNU_Coreutils) package that provide some of the basic POSIX utilities, including `cat`, `chmod`, `cp`, `mv`, *etc.*

#### Linux kernel
The [**Linux kernel**](https://en.wikipedia.org/wiki/Linux_kernel) is a monolithic kernel originally created by and named after Finnish computer programmer, [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds), whom at the time of its founding in 1991 was a 21-year-old computer science student. It started off as a side project by Torvalds to create an operating system for his own personal use, but has since expanded to become one of the most widely used free (licensed primarily under GPLv2) operating system kernels worldwide.

#### Linux-libre kernel
The [**Linux-libre kernel**](https://en.wikipedia.org/wiki/Linux-libre) is a kernel that is essentially the Linux kernel with its proprietary binary blobs removed. These binary blobs are licensed under non-FOSS licenses and hence do not give users the freedom to study, modify and redistribute them under FOSS licenses. The binary blobs basically improve the kernel's compatibility with one's hardware. The Linux-libre kernel is developed as part of the GNU Project.

#### NET
Usually refers to **netinstall** editions. These are OS editions that contain the barebones required to install an OS using one's network (or Internet) connection.

#### Operating system
An [**operating system**](https://en.wikipedia.org/wiki/Operating_system), is essentially the pieces of system software that manages hardware and software resources and provides common services for computer programs. The most important piece of system software of any operating system is its kernel.

#### Out-of-the-box
The property of an operating system of being &ldquo;[**out-of-the-box**](https://en.wikipedia.org/wiki/Out_of_the_box_(feature))&rdquo; means that as soon as the default installer (if any) has done its job and installed the system, the system should be ready to be used by the user without any further configuration or installation of software onto the system.

#### POSIX
[**Portable Operating System Interface**](https://en.wikipedia.org/wiki/Portable_Operating_System_Interface). A family of standards for the application programming interface (API), Unix shell, command-line utilities, *etc.* of &#42;nix systems.

#### RRM
[**Rolling release model**](https://en.wikipedia.org/wiki/Rolling_release) (**RRM**), a type of operating system development model in which the system is continually developing, this is as opposed to standard release models (SRMs) which uses distinct OS versions that must be reinstalled over the previous version.

#### Unix
[**Unix**](https://en.wikipedia.org/wiki/Unix) is a family of operating systems with several defining characteristics including support for multiple users and for the execution of multiple tasks simultaneously, a modular design with simple tools that perform limited, well-defined functions, a Unix shell, POSIX compliance, compliance to the Single Unix Specification (SUS), *etc.* Notable examples include BSD, OS X (previously called Mac OS X), Research Unix and Solaris.

#### Unix-like
[**Unix-like operating systems**](https://en.wikipedia.org/wiki/Unix-like) are a family of operating systems, that share the vast majority of the features of Unix systems, without necessarily being certified as compliant to any particular version of the SUS. This certification costs money, so many free operating systems do not have the funds or the inclination to get SUS certification. Examples include FreeBSD, Linux, NetBSD and OpenBSD.

{% include_relative OS/unix-shells.md %}
