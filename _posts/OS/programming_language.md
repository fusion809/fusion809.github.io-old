#### Programming languages
A [**programming language**](https://en.wikipedia.org/wiki/Programming_language) is a type of computer language that is used to write computer programs. Programming languages can be [**implemented**](https://en.wikipedia.org/wiki/Programming_language_implementation) (or executed, that is, run) via one of two methods, although the second usually requires some degree of the first. These two methods are:
* **Interpretation**. This method is basically what it sounds like: it is when the program's source code is translated into a series of actions implemented by the computer's hardware.
* **Compilation**. [**Compilers**](https://en.wikipedia.org/wiki/Compiler) essentially serve as translators between languages &mdash; transforming one programming language into another computer language, which can then be compiled further into another language or fed into an interpreter. Some compilers (**native code compilers**) compile programming languages directly into machine code (which as its name suggests is a set of instructions that can be directly interpreted by a computer's Central Processing Unit). The most popular type of compiler, however, is one that compiles source code into object code (which is readily executed).

Programming languages can be classed according to several different properties, including their **level of abstraction** (which refers to how different they are from machine code &mdash; high-level programming languages are more abstract than mid- and low-level programming languages. Higher-level programming languages are more human-readable than their lower-level counterparts, hence making them easier to work with), [**programming paradigm**](https://en.wikipedia.org/wiki/Programming_paradigm) and **purpose** (e.g., some programming languages are designed for numerical calculations while others are designed to write application software). For example, [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) is a general-purpose, high-level programming language that supports multiple paradigms.

A **programming paradigm** is a difficult concept for me to explain, but I will give it my best try. It essentially refers to the internal workings of the programming language. For example, object-oriented programming is based on the concept of objects, which are data structures, and procedures, or in other words, actions performed using the objects.

Another feature of programming languages that can be used to categorize them, that is also distinct from those previously mentioned, is that of **dynamic vs. static programming languages**. Dynamic programming languages are those that execute many of the tasks that static programming languages perform during compilation, during interpretation. Dynamic programming languages usually (but not always) also support scripts, which are special programs (that are usually fairly short) written for special interpreters that can automate the execution of tasks that would otherwise have to be performed manually by a human operator. Languages that support scripts are also called [**scripting languages**](https://en.wikipedia.org/wiki/Scripting_language).

{% include_relative OS/table1-comparison-of-common-programming-languages.html %}

#### Python
**Python** is a high-level general-purpose multi-paradigm programming language with scripting-compatibility. It is probably the most flexible programming language I have seen and it is used for numerical computations, scientific computing, writing and working with web apps, application software and package management systems. It is cross-platform and its syntax is far more human-readable
than C. It is worthwhile noting that its speed is significantly dependent on how it is implemented. The standard, official
implementation of Python is [CPython](https://en.wikipedia.org/wiki/CPython) which is more efficient than most implementations,
but less efficient than the [PyPy](https://en.wikipedia.org/wiki/PyPy) implementation.

There are also two main versions of Python presently in widespread use. Python 2 and Python 3. Most programs I have come across have
superior support for Python 2 than for Python 3. Python also has its own command-line package manager called
{% include wp.md name="pip" cat="software" %} (`pip`). Some programs I am particularly familiar with that are written
predominantly (if not exclusively) in Python that are compatible with Linux systems include:
* {% include wp.md name="PyMOL" %} &mdash; an application for viewing and performing calculations relating to molecules, especially macromolecules like proteins, DNA double helices and RNA helices.
* {% include wp.md name="SageMath" %} &mdash; a mathematics program that uses a Python-like syntax and integrates several free pieces of
mathematics software in a single command-line and notebook interface, with interfaces available for several proprietary mathematics programs too.
* [youtube-dl](https://rg3.github.io/youtube-dl/) ([`youtube-dl`](/man/youtube-dl.1.html)) &mdash; a command-line program for downloading YouTube videos as media files. It is managed by pip (so
running {% include codeus.html line1="sudo pip install youtube-dl" %} should install it)
