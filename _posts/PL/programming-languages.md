## An Introduction to Classification
Programming languages can be [**implemented**](https://en.wikipedia.org/wiki/Programming_language_implementation) (or executed, that is, run) via one of two methods:
* **Interpretation**. This method is basically what it sounds like: it is when the program's source code is translated into a series of actions implemented by the computer's hardware.
* **Compilation**. [**Compilers**](https://en.wikipedia.org/wiki/Compiler) essentially serve as translators between languages &mdash; transforming one programming language into another computer language, which can then be compiled further into another language or fed into an interpreter. Some compilers (**native code compilers** [**NCCs**]) compile programming languages directly into machine code (which as its name suggests is a set of instructions that can be directly interpreted by a computer's Central Processing Unit). Assembly languages (explained later) are usually compiled using NCCs. The most popular type of compiler, overall, however, is one that compiles source code into object code (which is machine-readable, hence readily executed).
As a general rule of thumb, compiled languages are faster than interpreted languages, although interpreted languages tend to be more convenient and human-readable.

Programming languages can be classed according to several different properties, including their **level of abstraction** (which refers to how different they are from machine code &mdash; high-level programming languages are more abstract than mid- and low-level programming languages. Higher-level programming languages are more human-readable than their lower-level counterparts, hence making them easier to work with), **implementation method**, [**programming paradigm**](https://en.wikipedia.org/wiki/Programming_paradigm) and **purpose** (e.g., some programming languages are designed for numerical calculations while others are designed to write application software). For example, [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) is a general-purpose, high-level, interpreted programming language that supports multiple paradigms.

A **programming paradigm** is a difficult concept for me to explain, but I will give it my best try. It essentially refers to the internal workings of the programming language. For example, object-oriented programming is based on the concept of objects, which are data structures, and procedures, or in other words, actions performed using the objects.

Another feature of programming languages that can be used to categorize them, that is also distinct from those previously mentioned, is that of **dynamic vs. static programming languages**. Dynamic programming languages are those that execute many of the tasks that static programming languages perform during compilation, during interpretation. Dynamic programming languages usually (but not always) also support scripts, which are special programs (that are usually fairly short) written for special interpreters that can automate the execution of tasks that would otherwise have to be performed manually by a human operator. Languages that support scripts are also called [**scripting languages**](https://en.wikipedia.org/wiki/Scripting_language).

{% include_relative PL/table1-comparison-of-common-programming-languages.html %}

### Assembly Language
**Assembly language** is a low-level programming language that has a very strong correspondence to machine code. Due to this, it is very hardware-specific &mdash; an assembly language for one processor may not work for another. The only  program that I am aware of that is written, even partly, in assembly language is the Linux kernel. Although, I know other programs written in Assembly do exist, after all it is listed in the [TIOBE top 20 programming language (by popularity) list][1], I just cannot personally name them.

### Bash
**Bash** is the most commonly-encountered Unix shell and command language. Few have compared its speed to other programming
languages, hence I cannot provide an average for it. Most code written for Bash should also be compatible with Zsh, although whether
it is compatible with the syntax of other Unix shells is something I cannot comment on. The programming language of Unix shells is usually called shell script.

### C
**C** was originally developed for use by Research Unix, by Dennis Ritchie (1941-2011), while he was working at Bell Labs. Since then it has become one of the most widely-used programming languages in the world. The reason for this is several fold, *firstly*, it is cross-platform and able to run on most, if not all, computing platforms, *secondly*, it is fast and *thirdly*, it is powerful, giving developers almost complete control over their program. It was originally considered high-level, but it has since become considered low-level, and its low-level nature is best illustrated by the fact that users have to allocate memory to their program manually.

### C++
**C++** (pronounced *See-plus-plus*) is a programming language that was originally developed by Bjarne Stroustrup (1950-) while he was working at Bell Labs. Stroustrup wanted a programming language with similar features and speed to C, except with greater support for additional programming paradigms and it has some extra high-level features.

### C Sharp
{% include note.md note1="The use of the name <b>C Sharp</b>, is because of technical restrictions, the correct name is C#" %}
**C#** is a proprietary programming language that is developed by the Microsoft Corporation. Some C# compilers are proprietary, others are not. It is very popular, according to [TIOBE][1]. Microsoft employees started its development in the late 1990s, for the purpose of it being used in their .NET framework. In its early days it was said to be very similar to Java, although since then the two have become increasingly different to one another.

### Fortran
**Fortran** is a programming language first developed in 1957 by [John Backus](https://en.wikipedia.org/wiki/John_Backus)
(1924-2007), specifically suited for the purpose of numerical calculations and scientific computing. A program written in Fortran is used to test the performance of computers for the TOP500 list.

### Go
**Go**, or **golang**, is a programming language, initially developed by [Google](https://en.wikipedia.org/wiki/Google) employees, [Robert Griesemer](https://en.wikipedia.org/wiki/Robert_Griesemer), [Rob Pike](https://en.wikipedia.org/wiki/Rob_Pike) and [Ken Thompson](https://en.wikipedia.org/wiki/Ken_Thompson) (one of the original developers of Research Unix at Bell Labs).

### Java
**Java** is a cross-platform programming language, in its early days it was proprietary-licensed, until it was later released under the GNU GPL license. Java is one of the most popular programming languages in the world today.

### JavaScript
**JavaScript** (**JS**) is a cross-platform web-oriented programming language that is used primarily for the purpose of controlling the behaviour of web pages.

### Lua
**Lua** is a lightweight programming language that is primarily used for scripting in web development applications. The two examples of its use that I have come across, personally (out of the hundreds out there), are its use to improve the efficiency of MediaWiki templates using the [Scribunto extension](https://www.mediawiki.org/wiki/Extension:Scribunto) and its use by the [Awesome Window Manager](https://en.wikipedia.org/wiki/Awesome_(window_manager)).

### MATLAB
**MATLAB** is a proprietary programming language that is primarily intended for numerical computations and scientific computing, with scripting-compatability. MATLAB is also the name of an
[integrated development environment](https://en.wikipedia.org/wiki/Integrated_development_environment) (IDE) for the MATLAB
programming language. While MATLAB itself is proprietary, there are several free clones of MATLAB (including both a programming
language and an IDE) available that are licensed under FOSS Licenses like the GNU GPL. These free clones include [FreeMat](https://en.wikipedia.org/wiki/FreeMat) and [GNU Octave](https://en.wikipedia.org/wiki/GNU_Octave), another free programming language/IDE duo that is similar to MATLAB, but not necessarily a clone is [Scilab](https://en.wikipedia.org/wiki/Scilab), which while similar to MATLAB has several key differences too. Most tests have found that MATLAB and its clones/related programming languages are fairly slow compared to lower-level and less purpose-specific programming languages like C and Python. MATLAB is the most popular numerically-oriented programming language, according to [TIOBE][1], although because of GNU Octave's similarity (so much similarity that it even uses the same file extension for its scripts &mdash; `.m`) to MATLAB it is possible that TIOBE could not distinguish the popularity of GNU Octave from that of MATLAB. MATLAB/GNU Octave are probably the programming languages I have the second-greatest experience with, after Bash.

Below is an example pair of scripts I have written in it, for the purpose of plotting a Lorenz attractor. Note, in order to execute these yourself, you need to have GNU Octave (because of the use of the `lsode` function in the second of these two scripts, it is not compatible with MATLAB) installed and these two m files need to be stored in the SAME directory.
<script src="/js/21a43c7199d64d86255f.js"></script>
<script src="/js/458fb365ea109af5a201.js"></script>

### Objective-C
**Objective-C** is a programming language that is primarily object-oriented in its paradigm. It is one of the main languages that Apple's OS X is written in.

### Pascal
**Pascal** is a fairly old programming language, it and its derivatives (like [Object Pascal](https://en.wikipedia.org/wiki/Object_Pascal)) are still widely used today.

### Perl
**Perl** is a family of scripting languages, the most notable members are Perl 5 and Perl 6. It was originally developed for the purpose of automating reporting tasks on &#42;nix systems in 1987. It is licensed under GNU GPL.

### PHP
**PHP** is a server-side scripting language that is primarily intended for web development. Most web applications will use PHP to some extent, prominent examples of such applications include: [MediaWiki](https://www.mediawiki.org), the software that powers several Wiki websites including all the Wikimedia Foundation websites (such as Wikipedia, for example) and [WordPress](https://wordpress.org), the software that powers many blogs and personal websites on the web. It is a copyleft licensed under the PHP License.

### Python
**Python** is a widely and extensively-used high-level general-purpose multi-paradigm programming language that is particularly invaluable as a cross-platform scripting language. It is named after the BBC TV series [*Monty Python's Flying Circus*](https://en.wikipedia.org/wiki/Monty_Python's_Flying_Circus). Python is licensed under its own free, permissive (BSD-like) license called the [Python Software Foundation License](https://en.wikipedia.org/wiki/Python_Software_Foundation_License). Its design philosophy
emphasizes code readability and concision. It is probably the most flexible programming language I have seen and it is used for numerical computations, scientific computing, writing and working with web applications, application software and package management systems. It is cross-platform and its syntax is far more human-readable than C. It also automatically performs some tasks that users would have to perform manually if they were working with lower-level languages like C. Its major caveat is its speed, however, it is worthwhile noting that its speed is significantly dependent on how it is implemented. The standard, official implementation of Python is [CPython](https://en.wikipedia.org/wiki/CPython) which while it is more efficient than most implementations (like Jython), is less efficient than the [PyPy](https://en.wikipedia.org/wiki/PyPy) implementation. Regardless of the implementation used, however, usually you will find that Python is slower than lower-level languages like C, C++ or Java.

There are also two main versions of Python presently in widespread use: Python 2 and Python 3. Most programs I have come across have
greater support for Python 2 than for Python 3. Python also has its own command-line package manager called
{% include wp.md name="pip" cat="software" %} (`pip`). Some programs I am particularly familiar with that are written
predominantly (if not exclusively) in Python that are compatible with Linux systems include:

* {% include wp.md name="Anaconda" cat="installer" %} &mdash; an operating system installer used by Fedora and most of its derivatives, see the [Fedora](#fedora) section for details.
* {% include wp.md name="DNF" cat="software" %} &mdash; the default package manager of Fedora &geq;22.
* {% include gr.md owner="Sabayon" repo="entropy" name="Entropy" %} &mdash; the default binary package manager of Sabayon Linux.
* {% include wp.md name="Portage" cat="software" %} &mdash; the default package manager of Gentoo Linux, and the default source code package manager of its derivatives such as Sabayon Linux.
* {% include wp.md name="PyMOL" %} &mdash; an application for viewing and performing calculations relating to molecules, especially macromolecules like proteins, DNA double helices and RNA helices.
* {% include wp.md name="SageMath" %} &mdash; a mathematics program that uses a Python-like syntax and integrates several free pieces of
mathematics software in a single command-line and notebook interface, with interfaces available for several proprietary mathematics programs too.
* [youtube-dl](https://rg3.github.io/youtube-dl/) ([`youtube-dl`](/man/youtube-dl.1.html)) &mdash; a command-line program for downloading YouTube videos as media files. It is managed by pip (so running {% include codeus.html line1="sudo pip install youtube-dl" %} should install it)
* [yum](http://yum.baseurl.org/) &mdash; the default command-line package manager of CentOS, Fedora &lt;22, Oracle Linux, Red Hat Enterprise Linux (RHEL), *etc.* It is written almost entirely in Python and this likely contributes to its relatively slow speed.

### R
**R** is an interpreted programming language designed for statistical computing, that was first developed in 1993 by two New Zealand programmers and statisticians and is now developed as part of the GNU Project. It is licensed under the GNU GPL.

### Ruby
**Ruby** is a general-purpose, interpreted, programming language that is not as widely-used as C, C++, Java or Python, in my experience. The programs that are written in it, that I have experience with are two in number: [Jekyll](https://en.wikipedia.org/wiki/Jekyll_(software)) (the static site generator that powers this website) and [YaST2](https://en.wikipedia.org/wiki/YaST2) (the graphical package manager used by openSUSE). It is licensed under the permissive MIT License.

### Swift
**Swift** is a general-purpose compiled programming language that is proprietary, although plans to make it open-source in the near future are apparently underway. Swift has features that are most similar to Objective-C, although it is considered faster, hence its name. The speed estimate is based on limited comparisons with Objective-C.

### Visual Basic
**Visual Basic** and its descendents [Visual Basic for Applications](https://en.wikipedia.org/wiki/Visual_Basic for_Applications) (VBA) and [Visual Basic .NET](https://en.wikipedia.org/wiki/Visual_Basic_.NET), are programming languages that are usually used for developing GUIs.

[1]: http://www.tiobe.com/index.php/content/paperinfo/tpci/index.html
