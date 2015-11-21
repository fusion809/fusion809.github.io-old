---
layout: post
title:  "An Introduction to Bash Scripting on Sabayon Linux"
date:   2015-10-31
categories: sabayon, bash, shell-scripting
---

{% include image.html image="optipng2.png" description="OptiPNG 0.7.5 running under Bash 4.3.39 in LXTerminal 0.2.0" width = "1240px" float = "none" %}
{% include note.html note1="Links to Wiki articles are provided in this post for those that wish to learn more, but it is important to note that I cannot guarantee their accuracy." %}

**Bash**, also known as the **Bourne-again shell**, is a Unix shell and command language, that is developed as part of the GNU Project. Along with the Linux kernel and package management system, I would rank Bash as one of the three most important components of a Sabayon Linux system. Without it or some other Unix shell in its place, one's ability to interact one's system would be very limited and difficult.

It was originally developed by [Brian J. Fox](https://en.wikipedia.org/wiki/Brian_Fox_(computer_programmer)) in 1989 and has since become the most-widely used [Unix shell](https://en.wikipedia.org/wiki/Unix_shell), with the vast majority of Linux distributions using it as their default command shell (only notable exception I have come across is Deepin, which uses Zsh) and since the release of 10.3 in October 2003 is has replaced tcsh as the default command shell for OS X.

In this post I will give some necessary background on Bash and its predecessor, the Bourne shell, as well as some basic scripting in Bash, some applications, *etc.* It is important to remember I am not an expert at Bash or Bash scripting, I have even had doubts I could even write an entire post on Bash scripting. It is important to note too that this post is nowhere near *comprehensive* on this topic, as the only type of text I, or anyone, could write that would be comprehensive on this topic would be an entire several-hundred page book, not a dozen-or-so-page blog post. This post just gives you some of the tools to do many of the basic things a novice or intermediate user of Sabayon would like to be able to do with Bash.

# Background
{% include image.html image="BrianJFox.png" width="300px" height="401px" description="Brian J. Fox (1959-), the original developer of Bash" %}

The development of Bash began in January 1988, when [Richard Stallman](https://en.wikipedia.org/wiki/Richard_Stallman), the founder of the [GNU Project](http://www.gnu.org/) and the [Free Software Foundation](http://www.fsf.org/) (FSF), became dissatisfied with the previous author of the GNU shell's failure to meet the required deadlines and decided, instead, to get FSF staff member, Brian J. Fox to write a free imitation of the Bourne Shell.[^1] Later in June 1989, the first public release of Bash was made, 0.99 (which was a beta release) and until mid 1992 (when Bash 1.12 was released), Fox remained the lead developer of Bash.[^2] When Fox left the FSF in mid 1992, [Chet Ramey](http://tiswww.case.edu/php/chet/) took over responsibility for Bash's development, which he has kept to this very day.[^3]

## Other Unix Shells
The Bourne Shell was one of the first official Unix shells to be developed and was first developed in 1977. I am using the phrasing "official Unix shells", to draw attention to the fact that the Bourne Shell was developed at Bell Labs for use by Research Unix, which was the original Unix system. The Bourne Shell is named after [Stephen Bourne](https://en.wikipedia.org/wiki/Stephen_R._Bourne), its original developer.

While Bash was originally developed as a free "imitation" of the Bourne Shell, it also has features that it borrows from other Unix shells: including the C shell and the Korn shell. The **[C shell](https://en.wikipedia.org/wiki/C_shell)** (**csh**) is a Unix shell that was originally developed by [Bill Joy](https://en.wikipedia.org/wiki/Bill_Joy) &mdash; the author of the Vi text editor (which is a direct ancestor of Vim) and was first released in 1978 (and is still under active development today). Its chief distinguishing feature is that its syntax is similar to that of the [C programming language](https://en.wikipedia.org/wiki/C_(programming_language)). A notable descendant of C shell that is also widely used today, is **[tcsh](https://en.wikipedia.org/wiki/Tcsh)** (the **TENEX C Shell**), which before release 10.3 was the default shell of OS X and continues to be the default shell of most [Berkeley Software Distribution](https://en.wikipedia.org/wiki/Berkeley_Software_Distribution) derivatives such as [FreeBSD](https://en.wikipedia.org/wiki/FreeBSD). The **[Korn shell](https://en.wikipedia.org/wiki/Korn_shell)** (**ksh**) was one of the Unix shells developed at Bell Labs for Research Unix, although unlike most other of the original Unix shells it is still under active development today.

Along with these shells, another free Unix shell that has gained notoriety, that I feel is worthwhile mentioning is the **[Z shell](https://en.wikipedia.org/wiki/Z_shell)** (**Zsh**). Zsh was first released by Paul Falstad in 1990 and at the time Falstad was a student at Princeton University. Since then Zsh's development has become coordinated by Peter Stephenson. What is notable about Zsh, is how feature-packed it is. It has many of the same features as Bash, but it also has spelling-correction, easier customizability and a few other features that Bash lacks.

All free Unix shells that are available for Gentoo or Sabayon systems are located in the category of app-shells within the [Entropy Store](https://packages.sabayon.org/quicksearch?q=app-shells&amp;filter=category_startswith&amp;filter_data=app-shells), [Portage Tree](https://packages.gentoo.org/categories/app-shells) and [Gentoo Portage Overlays](http://gpo.zugaina.org/app-shells). To show them all from the command-line run:
{% include coder.html line1='eix -C -c "app-shells"' %}

## Changing Unix Shells
On Unix/Unix-like platforms it is possible to change your login shell using the [`chsh`](/man/chsh.1.html) command. For example, to change your login shell to Zsh (assuming it is installed), run:
{% include codeu.html line1="chsh -s /bin/zsh" %}
and then reboot.

# Definitions
A natural question, that is asked by everyone, that is introduced to Unix shells, is "What is a Unix shell, exactly?" While this question sounds simple and straightforward, the answer is difficult to put into words, without it being either too generalized and vague, or too focused on specific examples. So I am going to air on the side of generalization and say that a Unix shell, is a **command-line interpreter** (**CLI**) that provides a familiar interface by which users can interact with the Unix[^4] system. Take the example of Bash, which is started whenever you open up a **terminal emulator** (**TEE**) or start **tty1** (with <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F1</kbd>) within most Linux systems, provided you have not set your default shell to something other than Bash. It interprets every command you type into the TEE or tty1 and can make changes to your system, accordingly. On most Linux systems, Unix shells are stored in the file directory `/bin`. You can list them all by issuing the command:
{% include coder.html line1="cat /etc/shells" %}
for me, for example, on my Sabayon machine this gives the output:
```sh
/bin/bash
/bin/csh
/bin/esh
/bin/fish
/bin/ksh
/bin/sash
/bin/sh
/bin/tcsh
/bin/zsh
/bin/rcsh
/bin/mksh
```
Bash and other Unix shells, have their own unique syntax or language (that is, how commands are passed onto Bash and other Unix shells), although most text editors (TEs) group all shell scripting languages together and call their collective syntax or language, "Shell script" or even just "sh". Examples of such TEs include: Atom, gedit and SciTE. They can do this without a problem in most cases because Unix shells share quite a lot of their syntax with one another.

Another important concept, for one to understand in order for the rest of this post to make any sort of sense, is that of a **script**. Scripts are programs that can be interpreted from within a **run-time environment** (**RTE**) and they automate the execution of tasks that would otherwise have to be performed manually, one-by-one, by a human operator. In the case of shell scripts, including Bash scripts, the RTE in which the script is interpreted is the Unix shell.

# Bash and Files
Bash scripts usually have the file extension of `.sh`, although some have no file extension. When Bash is started as an interactive, non-login shell (for example, from within a TEE) it first reads `~/.bashrc`. When it is started as an interactive, login shell (like when it is started within tty1) it first reads `/etc/profile`, `~/.bash_profile`, `~/.bash_login` and `~/.profile`. Commands executed in Bash are also recorded in `~/.bash_history`. Commands interpreted by Bash are case-sensitive.

# Basic Syntax
The Bash syntax has several distinct components, which can be classed as keywords and special characters, bulletins, variables, functions, tests and conditionals.

## Keywords and Special Characters
**Keywords and special characters** (**KSCs**) are an important concept to understand, they are words, or symbols, that have a special, set meaning when scripting in Bash. Examples are listed in **Table 1**.
<table style="width: 100%;"><caption>Table 1: Some Keywords and Special Characters Permitted in Bash</caption>
<tbody>
<tr>
<td class="title" style="width: 10%;"><abbr title = "Keywords/Special Character">KSC</abbr></td>
<td class="title" style="width: 40%;">Meaning, or usage</td>
<td class="title" style="width: 50%;">Example(s)</td>
</tr>
<tr>
<td><code>{...}</code><br/> <code>function</code></td>
<td>Used to define <a href="#Functions">functions</a>. Curly braces can also be used to just group lines of code together.</td>
<td>
{% highlight bash %}
function update {
   sudo equo update && sudo equo upgrade
}
{% endhighlight %}

</pre>
</td>
</tr>
<tr>
<td><code>[...]</code><br/><code>[[...]]</code></td>
<td>Used for <a href="#Tests">tests</a>, double square brackets are only available in more advanced Unix shells such as Bash, ksh and Zsh.</td>
<td>
{% highlight bash %}
[[ -n $1 ]]
{% endhighlight %}
tests whether the input variable, <code>$1</code> exists.
</td>
</tr>
<tr>
<td><code>#</code></td>
<td>Whatever follows is interpreted by Bash, as a comment, for human operators to read but to be left uninterpreted by Bash.</td>
<td>
{% highlight bash %}
# This is a comment
{% endhighlight %}</td>
</tr>
<tr>
<td><code>!</code></td>
<td>Returns the reciprocal (opposite) or negates of what follows it.</td>
<td>
{% highlight bash %}
[[ $X != 3 ]]
{% endhighlight %}
(which returns 0 (true) if the variable X does not equal 3, or 1 if it is equal to 3).
</td>
</tr>
<tr>
<td><code>$</code></td>
<td>Evaluates what comes after it, such as a mathematical expression in double square brackets.</td>
<td><code>echo $[3 * 2]</code> returns 6.</td>
</tr>
<tr>
<td><code>|</code></td>
<td>This is called a <b>pipe</b> and it sends the output of a command through another. For example, <code>A | B</code> does A and sends its output through B.</td>
<td>The following example downloads the source code tarball of the 1.1.0 release of Atom and pipes it through tar and gzip to decompress it.
<br/>
{% highlight bash %}
wget -qO- https://github.com/atom/atom/archive/v1.1.0.tar.gz | tar -xz
{% endhighlight %}</td>
</tr>
<tr>
<td><code>;</code></td>
<td>Allows several commands to be executed on the same line.</td>
<td>
{% highlight bash %}sudo equo update ; sudo equo upgrade{% endhighlight %}
</td>
</tr>
<tr>
<td><code>~</code></td>
<td>Denotes the home directory. For example, as my username is fusion809 on my Sabayon machine, my home directory is <code>/home/fusion809</code>.</td>
<td>{% highlight bash %}
cd ~
{% endhighlight %}
takes one to current user's home directory. If it is run as root it will take one to one's <code>/root</code>.</td>
</tr>
<tr>
<td><code>-</code></td>
<td>Can be used as the arithmetic operator, minus, or as the previous working directory.</td>
<td>{% highlight bash %}
cd -
{% endhighlight %}
takes one to one's previous working directory.</td>
</tr>
<tr>
<td><code>*</code></td>
<td>Wildcard operator, can take on any value. Can also be used for multiplication.</td>
<td>
If you have a directory, <code>~/VirtualBox</code> on your machine and no others starting with the prefix <code>~/Virtual</code> then:
<br/>
{% highlight bash %}
cd ~/Virtual*
{% endhighlight %}
should change your current working directory to <code>~/VirtualBox</code>.
</td>
</tr>
<tr>
<td><code>.</code></td>
<td>Serves as an equivalent to the <code>source</code> bulletin and as an equivalent to <code>pwd</code></td>
<td>As <code>source</code> (the following will execute every file with the extension <code>.sh</code> in the <code>~/Shell</code> directory):
<br/>
{% highlight bash %}
for i in ~/Shell/*.sh
do
	. $i
done
{% endhighlight %}
whereas as <code>pwd</code>:
<br/>
{% highlight bash %}
cd .
{% endhighlight %}
which causes no change in current directory.
</td>
</tr>
<tr>
<td><code>..</code></td>
<td>Denotes the parent directory</td>
<td>If I am working in the <code>~/Shell</code> directory, and run:
<br/>
{% highlight bash %}
cd ..
{% endhighlight %}
my present working directory (pwd) would then be <code>~</code>, my home directory. </td>
</tr>
<tr>
<td><code>&&</code></td>
<td>Executes subsequent commands, provided the preceding command(s) were executed without error. For example, <code>A && B</code> does A and then B, provided that A is executed without error. While <code>A && B && C</code> would do A, then if A returns no error, it would perform B and if A and B ran without error it would then run C.</td>
<td>
{% highlight bash %}sudo equo update && sudo equo upgrade{% endhighlight %}
</td>
</tr>
<tr>
<td><code>case</code><br/> <code>esac</code></td>
<td>Conditional statement, checking whether inputs match. <code>case</code> starts them and <code>esac</code> ends them.</td>
<td>
{% highlight bash %}
case $X in
     [1-5])
      Message="You're not at school yet!"
     ;;
     [6-12])
      Message="You're in primary school now, enjoy!"
     ;;
     [13-17])
      Message="You're in high school now, changes are coming!"
     ;;
     [18-20]*)
      Message="You're at Uni, enjoy the freedom!"
     ;;
esac
{% endhighlight %}</td>
</tr>
<tr>
<td><code>do</code><br/> <code>done</code><br/> <code>for</code></td>
<td>Used in <code>for</code> loops. <code>for</code> begins the loop, <code>do</code> enacts commands and <code>done</code> and finishes the loop.</td>
<td>
{% highlight bash %}
for i in `find . -name "*.png"`
do
  optipng -o7 "$i"
done
{% endhighlight %}</td>
</tr>
<tr>
<td><code>elif</code><br/> <code>else</code><br/> <code>fi</code><br/> <code>if</code><br/> <code>then</code></td>
<td>Used in <code>if</code> conditionals.</td>
<td>{% highlight bash %}
if [[ -n $1 ]]
   then
     atom ~/Shell/$1.sh
   elif [[ -v $X ]]
     atom ~/Shell/$X.sh
   else
     atom ~/.bashrc
fi
{% endhighlight %}</td>
</tr>
<tr>
<td><code>in</code></td>
<td>Used when dealing with lists</td>
<td>This script should, if passed an argument open Atom to <code>~/Shell/$1.sh</code>, otherwise ask the user to select from the list of shell scripts in <code>~/Shell</code> of which one to open in Atom.<br/>
{% highlight bash %}
pushd ~/Shell
if [[ -n $1 ]]
   then
     atom $1.sh
   else
     select x in `find . -name "*.sh"`
     do
       atom $x
      break
     done
fi
popd
{% endhighlight %}</td>
</tr>
<tr>
<td><code>select</code></td>
<td>Gets users to select from a list of options.</td>
<td>{% highlight bash %}
pushd ~/Shell #moving into the ~/Shell directory
if [[ -n $1 ]]
   then
     atom $1.sh
   else
     select x in `find . -name "*.sh"`
     do
       atom $x
      break
     done
fi
popd #moving back out of the ~/Shell directory
{% endhighlight %}</td>
</tr>
</tbody>
</table>
`until`, `while` and `time` are some other keywords that are not mentioned there, as I do not know enough about them to really comment on them. Keywords can be used as variables but I would not advise this, as this can quite easily become confusing.

## Variables
Bash **variables** are defined using equal signs. They can be made global (making them available for all processes) or local (making them available just for the script at hand). Local variables are defined by just using an equal sign, for example:
{% include codeu.html line1="PYTHONPATH=/usr/bin/python" %}
while to define this variable globally, one would run:
{% include codeu.html line1="export PYTHONPATH=/usr/bin/python" %}

## Bulletins
Several Bash commands (or **bulletins**) exist and some (but by no stretch of the imagination all &mdash; I do not even understand them all!) basic ones are explained in **Table 2**. It is worthwhile noting that all these commands are purely Bash commands, by this I mean, they do not call any command-line programs to do their work for them. See many commands you will see in Bash scripts are not Bash commands, *per se*, rather they are commands that use another command-line program such as `mv` or `pwd` to do the work, but they can be run from within Bash. Many of these programs are also borrowed from the GNU Project, namely its core utilities package ([`sys-apps/coreutils`](https://packages.sabayon.org/show/coreutils,156043,sabayon-weekly,amd64,5,standard)) and are stored in either `/usr/bin/` or `/bin/`, directories.

<table style="width: 100%;">
<caption>Table 2: Some Basic Bulletins</caption>
<tbody>
<tr>
<td class="title">Command</td>
<td class="title" style="width: 20%;">Meaning</td>
<td class="title" style="width: 50%;">Examples</td>
<td class="title" style="width: 20%;">Manpage (HTML)</td>
</tr>
<tr>
<td><code>alias</code></td>
<td>Set a synonym for a command or function</td>
<td>
{% highlight bash %}alias ..='cd ..'{% endhighlight %}
</td>
<td><a href="/man/alias.1p.html">alias.1p.html</a></td>
</tr>
<tr>
<td><code>cd</code></td>
<td>Change directory.</td>
<td>
{% highlight bash %}cd ~/Documents{% endhighlight %}
changes one's directory to /home/username/Documents.</td>
<td><a href="/man/cd.1p.html">cd.1p.html</a></td>
</tr>
<tr>
<td><code>date</code></td>
<td>Outputs the date. Inputs/variables can be used to set the timezone and the format of the date given.</td>
<td>This gives my local date and time in my preferred format:<br/>
{% highlight bash %}TZ="Australia/Brisbane" date +"%r %A, %d %B %Y"{% endhighlight %}
</td>
<td><a href="/man/date.1.html">date.1.html</a></td>
</tr>
<tr>
<td><code>export</code></td>
<td>Set variables provided to it as environment, or global, variables.</td>
<td>{% highlight bash %}export JAVA_HOME=/usr/lib/jvm/oracle-jdk-bin-1.8/bin{% endhighlight %}</td>
<td><a href="/man/export.1p.html">export.1p.html</a></td>
</tr>
<tr>
<td><code>history</code></td>
<td>Outputs Bash history.</td>
<td>
{% highlight bash %}history -10{% endhighlight %}
should show the last ten commands executed with Bash.</td>
<td><a href="/man/history.3.html">history.3.html</a></td>
</tr>
<tr>
<td><code>source</code></td>
<td>Execute script(s) provided to it.</td>
<td>{% highlight bash %}
source ~/.bashrc
{% endhighlight %}
runs the <code>~/.bashrc</code> script.
</td>
<td><a href="/man/source.n.html">source.n.html</a></td>
</tr>
</tbody>
</table>

## Tests
Tests are essential for conditionals. As their name suggests, they test to see whether or not a condition is satisfied. If the condition is satisfied they return 0, while if the condition is unsatisfied they return 1. Square brackets (which are a bulletin, by-the-way), `[...]`, are used for tests, although double square brackets (`[[...]]`) can also be used for this purpose since Bash 2.02. The difference, from what I can tell, between single and double square brackets is that double square brackets allow one to perform more advanced tests than single square brackets. Single square brackets are also POSIX compliant and are found on all Unix shells.[^6]
## Conditionals
In Bash scripts conditionals use the output of a test and perform an action accordingly. Conditionals usually involve at least one of the following keywords: `case`, `if`, `else`, `elseif` and `fi`.
## Functions
Functions are essentially convenient ways we can group pieces of code together, so as to give them order and make them more logical. Quite often functions are designed to take input and use it to generate an output, or to perform a task, although some functions require no input. All Bash functions share two main things in common: the use of the word "function" and the fact the function's contents are contained within curly braces `{...}`.
## Loops
Loops (which involve the `for` keyword), in Bash scripts, are used to automate the performing of tedious tasks that are sufficiently similar to one another.
## Selectors
Selectors (marked by the `select` keyword) gives users choices as to which input(s) the rest of the selector block uses.
# Applications
The primary value of Bash scripts is to automate tasks that would otherwise have to be done, over a longer time-frame by a human operator. I personally use shell scripts to make my life, when I am at the command-line, easier.

In my `~/.bashrc` file I have links to several shell scripts stored in my `~/Shell` directory. Both my `~/.bashrc` and the shell scripts in my `~/Shell` directory can be found at [this GitHub repository](https://github.com/fusion809/sabayon-scripts). Here is my current `~/.bashrc` file:[^7]
```bash
# /etc/skel/.bashrc
#
# This file is sourced by all *interactive* bash shells on startup,
# including some apparently interactive shells such as scp and rcp
# that can't tolerate any output. So make sure this doesn't display
# anything or bad things will happen !

# Test for an interactive shell.  There is no need to set anything
# past this point for scp and rcp, and it's important to refrain from
# outputting anything in those cases.
if [[ $- != *i* ]] ; then
	# Shell is non-interactive.  Be done now!
	return
fi

# Execute all shell scripts in the ~/Shell directory
for i in ~/Shell/*.sh
do
	. $i
done
```
I have at least three dozen functions I have defined in shell scripts located in the `~/Shell` directory, but here I will mention some of the more interesting, or useful ones for Sabayon users, in general.

## Interesting Scripts[^8]
You may have noticed that I am hosting HTML versions of several Linux man pages within the `/man` subdomain of this blog. I generate them using a function contained within `~/Shell/man.sh` called `manhtml`. For example, to generate [emerge.1.html](/man/emerge.1.html) I ran:
{% include codeu.html line1="manhtml 1 emerge" %}

Here are the contents of `~/Shell/man.sh` (showing all the contents as `manhtml` depends on other functions to work):
```bash
# Copy man page from /usr/share/man/... to ~/Documents/Manpages
function cpman {
  sudo cp -a /usr/share/man/man$1/$2.$1.bz2 ~/Documents/Manpages
}

# Convert bz2 man page to HTML
function manconv {
  cdman
  sudo chmod 777 -R $2.$1.bz2
  bzip2 -d $2.$1.bz2
  gzip -c $2.$1 > $2.$1.gz
  zcat $2.$1.gz | groff -mandoc -Thtml > $2.$1.html
  sudo chmod 777 -R $2.$1.html
  rm $2.$1.gz $2.$1
}

function manhtml {
  cpman $1 $2 && manconv $1 $2
}
```
while here is a function I created to help me install Moksha themes (it appears differently in my <code>~/Shell/other.sh</code> file, as this form is mostly to walk you through how it works):
```bash
function theme {
  #clone repo
  git clone https://github.com/JeffHoogland/$1
  #change directory to new cloned repo
  cd $1
  # add an upstream source
  git remote add upstream https://github.com/JeffHoogland/$1
  #change into the repo subdirectory where build.sh is located
  cd $1
  #build an edj file for the theme
  ./build.sh
  #cd back into the base repo directory
  cd ..
  #move edj file to theme directory
  cp -a $1.edj ~/.e/e/themes/
  #cd out of repo
  cd ..
}
```
to install a new Moksha theme you would run:
{% include codeu.html line1="theme &lt;THEME&gt;" %} where `<THEME>` is, of course, the theme's name (how they appear in their respective GitHub repo's URL).
## Useful Functions for Sabayon Users
The following are some functions that, depending on how you operate on Sabayon, may be helpful.
###Entropy
The following are taken from [`~/Shell/equo.sh`](https://github.com/fusion809/sabayon-scripts/blob/master/Shell/equo.sh) and they are functions (with aliases for said functions) that essentially automate some common actions one may perform with Entropy. They are not all the lines of code in `equo.sh`, they merely represent some of the more commonly-used codes. It is important to note some of these functions need not be defined as functions, they could instead be defined as aliases (using `alias NAME='CODE'` where NAME is the function's name and `CODE` is what is between the curly brackets).
```bash
# Inflate Portage binary into SPM binary.
function sepi {
	pushd /usr/portage/packages/$1
	sudo equo pkg inflate $2
	popd
}

# Reinstall dependencies of package along with the package itself and all deep
# dependencies
function seqd {
	sudo equo i -av --deep --empty $@
}

# Install a package with Entropy, ask first.
function seqi {
	sudo equo i -av $@
}

alias install=seqi
alias ins=seqi

# Install package dependencies (and only the dependencies) with Entropy
function seqo {
	sudo equo i -aov $@
}

alias build-dep=seqo
alias builddep=seqo
alias bdep=seqo

# Remove a package with Entropy and all packages that depend on said package
# Ask first. It is advisable to ask first, because sometimes this can remove
# packages you want.
function seqr {
	sudo equo rm -av $@
}

alias remove=seqr
alias rem=seqr

# Update all packages installed with Entropy and make Entropy acknowledge emerged packages
function sequ {
	spm && sudo equo update && sudo equo upgrade --purge && sudo equo cleanup
}

alias update=sequ

# Make Entropy acknowledge the existence of emerged packages
function spm {
	sudo equo rescue spmsync
}
```
###Layman/Portage
Here are some lines from my [emerge.sh](https://github.com/fusion809/sabayon-scripts/blob/master/Shell/emerge.sh) script.
```bash
# Install a package, but ask first
function ema {
  sudo emerge -av $@
}

# Install package dependencies only and ask before doing so. e.g., emo enlightenment
# would install all of enlightenment's dependencies.
function emo {
  sudo emerge -aov $@
}

# Pretend to install a package
function emp {
  sudo emerge -pv $@
}

# Unmerge a package
function emrm {
  sudo emerge -C $@
}

alias emc=emrm

# Sync Portage Tree and all Layman overlays.
function sync {
  sudo emerge --sync && sudo layman -S
}

# Track the download progress of packages being installed with Portage
function tailf {
  tail -f /var/log/emerge-fetch.log
}
```

# Free Help Resources
* [Stack Overflow](http://stackoverflow.com/)[^9]
* [Unix & Linux StackExchange](http://unix.stackexchange.com)[^10]


# Further Reading
{% include note.html note1="All the following links are to free PDFs" %}
* [Advanced Bash-Scripting Guide (2014) @ www.tldp.org](http://www.tldp.org/LDP/abs/abs-guide.pdf)
* [Bash Guide for Beginners (2008) @ www.tldp.org](http://www.tldp.org/LDP/Bash-Beginners-Guide/Bash-Beginners-Guide.pdf)
* [Bash Official Manual (2014) @ www.gnu.org](http://www.gnu.org/software/bash/manual/bash.pdf)
* [GNU/Linux Tools Summary (2006) @ www.tldp.org](http://www.tldp.org/LDP/GNU-Linux-Tools-Summary/GNU-Linux-Tools-Summary.pdf)
* [GNU Core Utilities Manual (2015) @ www.gnu.org](http://www.gnu.org/software/coreutils/manual/coreutils.pdf) (helpful in explaining what GNU Core Utilities you can call from within your Bash scripts)

# Footnotes
[^1]: Source: [email from 1987](https://groups.google.com/forum/#!original/comp.unix.questions/iNjWwkyroR8/yedr9yDWSuQJ)
[^2]: Source: [Chet Ramey's Scribd document](http://www.scribd.com/doc/40556434/2010-10-31-Chet-Ramey-Early-Bash-Dates)
[^3]: Source: [Bash Webpage](https://www.gnu.org/software/bash/)
[^4]: Or Unix-like, in the case of Linux distributions such as Sabayon
[^5]: Source: [Server Fault](http://serverfault.com/a/52050/298691)
[^7]: The for loop I got from the answers to <a href = "http://unix.stackexchange.com/q/239881/27613">this question</a> at Unix & Linux SE
[^8]: Which is in the eye of the beholder of course, you may not find these interesting at all
[^9]: Its general topic is programming, so it is suitable for shell script-related questions. I have asked two questions there relating to shell script, as of 31 October 2015, both were resolved within an hour.
[^10]: As of 31 October 2015 I have asked 8 questions relating to shell scripts there and seven have been answered. Each of those that have been answered were resolved (that is, given an answer that solved whatever problem I had) within a day of me asking them.
