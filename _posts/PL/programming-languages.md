## An Introduction to Classification
Programming languages can be [**implemented**](https://en.wikipedia.org/wiki/Programming_language_implementation) (or executed, that is, run) via one of two methods:
* **Interpretation**. This method is basically what it sounds like: it is when the program's source code is translated into a series of actions implemented by the computer's hardware.
* **Compilation**. [**Compilers**](https://en.wikipedia.org/wiki/Compiler) essentially serve as translators between languages &mdash; transforming one programming language into another computer language, which can then be compiled further into another language or fed into an interpreter. Some compilers (**native code compilers** [**NCCs**]) compile programming languages directly into machine code (which as its name suggests is a set of instructions that can be directly interpreted by a computer's Central Processing Unit). Assembly languages (explained later) are usually compiled using NCCs. The most popular type of compiler, overall, however, is one that compiles source code into object code (which is machine-readable, hence readily executed).
As a general rule of thumb, compiled languages are faster than interpreted languages, although interpreted languages tend to be more convenient and human-readable.

Programming languages can be classed according to several different properties, including their **level of abstraction** (which refers to how different they are from machine code &mdash; high-level programming languages are more abstract than mid- and low-level programming languages. Higher-level programming languages are more human-readable than their lower-level counterparts, hence making them easier to work with), **implementation method**, [**programming paradigm**](https://en.wikipedia.org/wiki/Programming_paradigm) and **purpose** (e.g., some programming languages are designed for numerical calculations while others are designed to write application software). For example, [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) is a general-purpose, high-level, interpreted programming language that supports multiple paradigms.

A **programming paradigm** is a difficult concept for me to explain, but I will give it my best try. It essentially refers to the internal workings of the programming language. For example, object-oriented programming is based on the concept of objects, which are data structures, and procedures, or in other words, actions performed using the objects.

Another feature of programming languages that can be used to categorize them, that is also distinct from those previously mentioned, is that of **dynamic vs. static programming languages**. Dynamic programming languages are those that execute many of the tasks that static programming languages perform during compilation, during interpretation. Dynamic programming languages usually (but not always) also support scripts, which are special programs (that are usually fairly short) written for special interpreters that can automate the execution of tasks that would otherwise have to be performed manually by a human operator. Languages that support scripts are also called [**scripting languages**](https://en.wikipedia.org/wiki/Scripting_language).

{% include_relative PL/table1-comparison-of-common-programming-languages.html %}

### Ada
{% include links.html program="Ada" category="dev-ada" %} is a high-level programming language that supports multiple paradigms and is descended from Pascal. The most popular free compiler for Ada is {% include links.html program="GNAT" package="dev-lang/gnat-gcc" wp="GNAT" puncr="," %} a front-end of the **GNU Compiler Collection** (**GCC**).

### Assembly Language
**Assembly language** is a low-level programming language that has a very strong correspondence to machine code. Due to this, it is very hardware-specific &mdash; an assembly language for one processor may not work for another. The only  program that I am aware of that is written, even partly, in assembly language is the Linux kernel. Although, I know other programs written in Assembly do exist, after all it is listed in the [TIOBE top 20 programming language (by popularity) list][1], I just cannot personally name them.

### Bash
{% include links.html package="app-shells/bash" program="Bash" category="dev-bash" %} is the most commonly-encountered Unix shell and command language. Few have compared its speed to other programming languages, hence I cannot provide an average for it. Despite this I know that for most things it is considered slower than Python. Most code written for Bash should also be compatible with Zsh, although whether it is compatible with the syntax of other Unix shells is something I cannot comment on. The programming language of Unix shells is usually called shell script. For an introduction to the Bash syntax, see [*An Introduction to Bash Scripting for Sabayon Users*](/bash-scripting-and-the-command-line-an-introduction-for-sabayon-users/). Due to the fact it is a Unix shell, it is not considered cross-platform.

### C
**C** was originally developed for use by Research Unix, by Dennis Ritchie (1941-2011), while he was working at Bell Labs. Since then it has become one of the most widely-used programming languages in the world. The reason for this is several fold, *firstly*, it is cross-platform and able to run on most, if not all, computing platforms, *secondly*, it is fast and *thirdly*, it is powerful, giving developers complete control over their program. It was originally considered high-level, but it has since become considered low-level, and its low-level nature is best illustrated by the fact that developers have to allocate memory to their program manually. The most popular free compiler of C is the GCC.

Programs written, predominantly, in it, that I have experience with, include:
* {% include wp.md name="Bash" %} &mdash; the Unix shell is predominantly written in C.
* {% include wp.md name="FreeBSD" %} &mdash; the Unix-like operating system, is predominantly written in C.
* {% include wp.md name="GNU Coreutils" %} &mdash; the command-line utilities package for &#43;nix systems is written predominantly in C.
* {% include wp.md name="GTK+" %} or the GIMP Toolkit &mdash; is a free widget toolkit developed for use by the GNOME desktop environment.
* {% include wp.md name="Linux kernel" %} &mdash; the kernel of Linux operating systems.
* {% include wp.md name="VLC media player" %} (71.2% C, 17.7% C++, 6.7% Objective-C, 1.3% Lua, *etc.* according to GitHub[^1])

### C++
**C++** (pronounced *See-plus-plus*) is a programming language that was originally developed by Bjarne Stroustrup (1950-) while he was working at Bell Labs. Stroustrup wanted a programming language with similar features and speed to C, except with greater support for additional programming paradigms as well as some extra high-level features. Its most popular free compiler is probably the GCC too.

### C Sharp
{% include note.md note1="The use of the name <b>C Sharp</b>, is because of technical restrictions, the correct name is C#" %}
**C#** is a proprietary programming language that is developed by the Microsoft Corporation. Some C# compilers are proprietary, others are not. It is very popular, according to [TIOBE][1]. Microsoft employees started its development in the late 1990s, for the purpose of it being used in their .NET framework. In its early days it was said to be very similar to Java, although since then the two have become increasingly different to one another.

### D
**D**, a member of the C programming language family, is a free and open-source programming language, that is essentially like a more feature-packed, modern version of C++, with support for extra programming paradigms, automatic memory management and syntactic sugar (to make the language more human-readable).

### Fortran
**Fortran** is the eldest high-level programming language and was first developed in 1957 by [John Backus](https://en.wikipedia.org/wiki/John_Backus) (1924-2007), specifically suited for the purpose of numerical calculations and scientific computing. A program written in Fortran is used to test the performance of computers for the TOP500 list. The GCC includes a Fortran compiler.

### Go
{% include links.html program="Go" package="dev-lang/go" puncr="," %} or **golang**, is a programming language, initially developed by [Google](https://en.wikipedia.org/wiki/Google) employees, [Robert Griesemer](https://en.wikipedia.org/wiki/Robert_Griesemer), [Rob Pike](https://en.wikipedia.org/wiki/Rob_Pike) and [Ken Thompson](https://en.wikipedia.org/wiki/Ken_Thompson) (one of the original developers of Research Unix at Bell Labs). The GCC has a front-end for compiling Go.

### Groovy
{% include links.html program="Groovy" package="dev-java/groovy" %} is a programming language that is specifically designed to work on the Java platform, wherein it serves predominantly as a scripting language, that interfaces with Java to modify program behaviour, extract data, *etc.*

{% include_relative PL/java.md %}

### JavaScript
**JavaScript** (**JS**) is a cross-platform web-oriented programming language that is used primarily for the purpose of controlling the behaviour of web pages. Despite this it can be used for non-web applications. For example, the text editor I am using to write this blog post, [Atom](https://atom.io), is written predominantly in JavaScript and its close lesser-used relative, CoffeeScript. JavaScript was also used to write extensions for the Deepin Desktop Environment. Despite being an interpreted language it is usually rated as one of the fastest high-level programming languages around.

### Lisp
{% include links.html program="Lisp" category="dev-lisp" %} is a family of programming languages that are second only to Fortran for the title of being the eldest high-level programming languages. Notable members include the {% include wp.md name="Common Lisp" %} and {% include wp.md name="Emacs Lisp" puncr="," %} the latter of which is used by {% include wp.md name="GNU Emacs" %} and other Emacs text editors.

### Lua
{% include links.html program="Lua" package="dev-lang/lua" category="dev-lua" %} is a lightweight programming language that is primarily used for scripting in web development applications. The two examples of its use that I have come across, personally (out of the hundreds out there), are its use to improve the efficiency of MediaWiki templates using the [Scribunto extension](https://www.mediawiki.org/wiki/Extension:Scribunto) and its use by the [Awesome Window Manager](https://en.wikipedia.org/wiki/Awesome_(window_manager)) (where it is used to extend functionality).

{% include_relative PL/matlab.md %}

### Objective-C
{% include links.html program="Objective-C" wp="Objective-C" link="https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html" %} is a programming language that belongs to the C family of programming language and is primarily object-oriented in its paradigm. It is one of the main languages that Apple's OS X is written in. The most popular free Objective-C compiler is probably GCC.

### Pascal
**Pascal** is a fairly old programming language, it and its derivatives (like [Object Pascal](https://en.wikipedia.org/wiki/Object_Pascal)) are still widely used today.

### Perl
{% include links.html program="Perl" package="dev-lang/perl" category="dev-perl" %} is a family of interpreted scripting languages, the most notable members are Perl 5 and Perl 6. It was originally developed for the purpose of automating reporting tasks on &#42;nix systems in 1987. It is licensed under GNU GPL. The only program I have personal experience with that is written mostly in Perl is the [RuneScape Unix Client](https://github.com/HikariKnight/rsu-client) (RSU).

### PHP
{% include links.html program="PHP" package="dev-lang/php" category="dev-php" %} is a server-side scripting language that is primarily intended for web development. Most web applications will use PHP to some extent, prominent examples of such applications include: [MediaWiki](https://www.mediawiki.org), the software that powers several Wiki websites including all the Wikimedia Foundation websites (such as Wikipedia, for example) and [WordPress](https://wordpress.org), the software that powers many blogs and personal websites on the web. It is a copyleft licensed under the PHP License.

{% include_relative PL/python.md %}

### R
{% include links.html program="R" package="dev-lang/R" %} is an interpreted programming language designed for statistical computing, that was first developed in 1993 by two New Zealand programmers and statisticians and is now developed as part of the GNU Project. It is licensed under the GNU GPL.

### Ruby
{% include links.html program="Ruby" package="dev-lang/ruby" category="dev-ruby" %} is a general-purpose, interpreted, programming language that is not as widely-used as C, C++, Java or Python, in my experience. The programs that are written in it, that I have experience with are two in number: {% include wp.md name="Jekyll" cat="software" %} (the static site generator that powers this website) and {% include wp.md name="YaST2" %} (the graphical package manager used by openSUSE). A program that I have never used, but I have heard of, that is used as a package management system for OS X, {% include wp.md name="Homebrew" puncr="," %} is written in Ruby too. Ruby like Python has its own package manager too, [RubyGems](https://rubygems.org/) that is invoked by the command `gem`. For example, to install Jekyll one may run:
{% include coder.html line1="gem install jekyll" %}
[Bundler](http://bundler.io) is a Ruby package manager that has better dependency-resolution than RubyGems that is also popular. I personally use Bundler to install Jekyll, because installing it with RubyGems can be a nightmare. Ruby, Bundler and RubyGems are all licensed under the permissive MIT License.

### Swift
**Swift** is a general-purpose compiled programming language that is proprietary, although plans to make it open-source in the near future are apparently underway. Swift has features that are most similar to Objective-C, although it is considered faster, hence its name. The speed estimate is based on limited comparisons with Objective-C.

### Visual Basic
**Visual Basic** and its descendents [Visual Basic for Applications](https://en.wikipedia.org/wiki/Visual_Basic for_Applications) (VBA) and [Visual Basic .NET](https://en.wikipedia.org/wiki/Visual_Basic_.NET), are programming languages that are usually used for developing GUIs.

[1]: http://www.tiobe.com/index.php/content/paperinfo/tpci/index.html
[^1]: [videolan/vlc](https://github.com/videolan/vlc) (5 Jan 2015).
[^2]: [fusion809/octave-src](https://github.com/fusion809/octave-src) (6 Jan 2015)
