### Python
{% include links.html program="Python" package="dev-lang/python" category="dev-python" wp="Python_(programming_language)" %} is a widely and extensively-used high-level general-purpose multi-paradigm programming language that is particularly invaluable as a cross-platform scripting language. It is named after the BBC TV series [*Monty Python's Flying Circus*](https://en.wikipedia.org/wiki/Monty_Python's_Flying_Circus). Python is licensed under its own free, permissive (BSD-like) license called the [Python Software Foundation License](https://en.wikipedia.org/wiki/Python_Software_Foundation_License). It is probably the most flexible programming language I have seen and it is used for numerical computations, scientific computing, writing and working with web applications, application software and package management systems. Its design philosophy emphasizes code readability and concision. It also automatically performs some tasks that users would have to perform manually if they were working with lower-level languages like C. For these reasons it, and JavaScript, are usually the programming languages that people interested in programming, are recommended to learn first, before they learn more complicated programming languages like C, C++ and Java. Its major caveat is its speed, however, it is worthwhile noting that its speed is significantly dependent on how it is implemented. The standard, official implementation of Python is [CPython](https://en.wikipedia.org/wiki/CPython) which while it is more efficient than most implementations (like Jython), is less efficient than the [PyPy](https://en.wikipedia.org/wiki/PyPy) implementation. Regardless of the implementation used, however, it is usually significantly slower than compiled languages like C, C++ and Java.

There are also two main versions of Python presently in widespread use: Python 2 and Python 3. Most programs I have come across have
greater support for Python 2 than for Python 3. Python also has its own command-line package manager called {% include wp.md name="pip" cat="software" %} (`pip`). Some programs I am particularly familiar with that are written predominantly (if not exclusively) in Python that are compatible with Linux systems include:

{% capture point1 %}
{% include wp.md name="Anaconda" cat="installer" %} &mdash; an operating system installer used by Fedora and most of its derivatives, see the [Fedora](#fedora) section for details.
{% endcapture %}
{% capture point2 %}
{% include wp.md name="DNF" cat="software" %} &mdash; the default package manager of Fedora &geq;22.
{% endcapture %}
{% capture point3 %}
{% include gr.md owner="Sabayon" repo="entropy" name="Entropy" %} &mdash; the default binary package manager of Sabayon Linux.
{% endcapture %}
{% capture point4 %}
{% include wp.md name="GNU Bazaar" %} &mdash; the distributed version control system developed by Canonical Ltd.
{% endcapture %}
{% capture point5 %}
{% include wp.md name="Portage" cat="software" %} &mdash; the default package manager of Gentoo Linux, and the default source code package manager of its derivatives such as Sabayon Linux.
{% endcapture %}
{% capture point6 %}
{% include wp.md name="PyMOL" %} &mdash; an application for viewing and performing calculations relating to molecules, especially macromolecules like proteins, DNA double helices and RNA helices. Which is managed by pip, so running {% include codeus.html line1="sudo pip install pymol" %} should install it.
{% include image.html image="PyMOL-1.7.6.0-3EIG.png" float="none" %}
{% endcapture %}
{% capture point7 %}
{% include wp.md name="SageMath" %} &mdash; a mathematics program that uses a Python-like syntax and integrates several free pieces of
mathematics software in a single command-line and notebook interface, with interfaces available for several proprietary mathematics programs too.
{% include image.html image="SageMath-6.10.png" float="none" %}
{% endcapture %}
{% capture point8 %}
{% include wp.md name="Spyder" cat="software" %} &mdash; a cross-platform free and open-source IDE for scientific computing in Python. It is managed by pip, so running {% include codeus.html line1="sudo pip install spyder" %} should install it, provided its dependency PyQt4/PyQt5 is already installed.
{% include image.html image="Spyder-2.3.8.png" float="none" %}
{% endcapture %}
{% capture point9 %}
[youtube-dl](https://rg3.github.io/youtube-dl/) ([`youtube-dl`](/man/youtube-dl.1.html)) &mdash; a command-line program for downloading YouTube videos as media files. It is managed by pip (so running {% include codeus.html line1="sudo pip install youtube-dl" %} should install it)
{% endcapture %}
{% capture point10 %}
[yum](http://yum.baseurl.org/) &mdash; the default command-line package manager of CentOS, Fedora &lt;22, Oracle Linux, Red Hat Enterprise Linux (RHEL), *etc.* It is written almost entirely in Python and this likely contributes to its relatively slow speed.
{% endcapture %}

<ul>
<li>{{ point1 | markdownify }}</li>
<li>{{ point2 | markdownify }}</li>
<li>{{ point3 | markdownify }}</li>
<li>{{ point4 | markdownify }}</li>
<li>{{ point5 | markdownify }}</li>
<li>{{ point6 | markdownify }}</li>
<li>{{ point7 | markdownify }}</li>
<li>{{ point8 | markdownify }}</li>
<li>{{ point9 | markdownify }}</li>
<li>{{ point10 | markdownify }}</li>
</ul>

Bash, MATLAB/GNU Octave and Python, in order from most to least experience, are the languages I have the most experience with. Here is an example Python script I have written, with some help from the work of others, to solve and plot the solution to the Lorenz equations. If you would like to see the Python scripts I have written see [this repository](https://github.com/fusion809/python-scripts).
{% include_relative PL/python-scripts.html %}
