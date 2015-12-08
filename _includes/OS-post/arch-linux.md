## Arch Linux
{% include OS-post/os-shot.html image="Arch-Linux-DDE-menu.png" width="1000px" float="none" description="Arch Linux running the Deepin Desktop Environment" %}

### Background
{% include OS-post/os.html os="Arch Linux" d="https://www.archlinux.org/download/" dw="arch" wp="Arch Linux" url="https://www.archlinux.org/" wiki="https://wiki.archlinux.org/" forum="https://bbs.archlinux.org/" bugs="https://bugs.archlinux.org/" gr="archlinux" irc="https://wiki.archlinux.org/index.php/IRC_channel" ml="https://lists.archlinux.org//listinfo" %} is an independent Linux distribution that was first founded in 2002 and has since become one of the most popular Linux distributions that is geared towards experienced users. It aims to adhere to the "Keep It Simple, Stupid" principle. Its take on this principle is that no automation should be done and that a fresh install of Arch should have as little software on it as possible. The purpose of this minimalism is that it gives the user as much control over their system as possible. Arch uses its own package management system too, pacman.

The manual installation process can be a newbie-killer (mostly in the sense that it is tedious and the [guide](https://wiki.archlinux.org/index.php/Beginners%27_guide) for it is not really written for Linux newcomers), although with installation scripts this can be bypassed. As I have never used Arch Linux on my PC, except through Oracle VM VirtualBox, I always use [Packer](https://github.com/fusion809/arch-builder) to automate the installation process. Once installed, intermediate-experienced Linux users that are comfortable with the command-line should feel at home, although novice Linux users that are much more comfortable with GUIs than with CLIs will probably struggle at this stage too. I personally find software installation on Arch Linux easier than it is on Debian and Fedora, because of its package managers, pacman and Yaourt.

### Package Management
**pacman** is a PMS written in C that installs software from binary packages with the file extension `.pkg.tar.xz`. These binary packages are stored in the pacman repositories, which contain over 13,600 packages as of {{ page.date | date: "%d %B %Y" }}.[^1] One can search the official repositories [here](https://www.archlinux.org/packages/). The [`pacman`](/man/pacman.8.html) package provides a number of different commands (which are all contained in the `/usr/bin` directory and a complete list of the files included by the pacman package on 64-bit systems may be found [here](https://www.archlinux.org/packages/core/x86_64/pacman/files/)) that can be executed from the command-line, including, but not limited to: [`makepkg`](/man/makepkg.8.html) and [`pactree`](/man/pactree.8.html). `makepkg` is used to build pacman binary packages (in `.pkg.tar.xz`) from instructions contained in a specialized type of Bash script called a [PKGBUILD](https://www.archlinux.org/pacman/PKGBUILD.5.html). PKGBUILDs usually describe to `makepkg` how to build binary packages from source code, which is, of course, a tedious and error-prone process.

Arch Linux also has its own online repository of PKGBUILDs, that is called the [**Arch User Repository**](https://aur.archlinux.org/) (**AUR**). The AUR actually contains more PKGBUILDs than there are binary packages in pacman's official repositories &mdash; as of {{ page.date | date: "%d %B %y" }} it contains over 29,990 PKGBUILDs. If one wants to install software from the PKGBUILDS contained in the AUR one has two choices: either do so manually, using `git` (as the AUR uses git as its version control system), `makepkg` (to compile the package using PKGBUILD instructions) and `pacman` (to install the package build with makepkg) command-line tools or use a wrapper for pacman that is called [Yaourt](https://wiki.archlinux.org/index.php/Yaourt) ([`yaourt`](https://archlinux.fr/man/yaourt.8.html) from the command-line).

Yaourt is French for yogurt and is so named as it is an acronym for <b>Y</b>et <b>A</b>n<b>o</b>ther <b>U</b>ser <b>R</b>epository <b>T</b>ool. Yaourt has the same syntax as pacman, but unlike pacman which when asked to install a program will only search for the program in the Arch binary package repositories, Yaourt will look at both Arch's binary package repositories and the AUR.

I would personally rate pacman and Yaourt as two of my favourite package managers, because of how simple, fast, yet flexible they are. Most package managers will install software from either binary packages or from source code, unlike Yaourt which can install from both. pacman and Yaourt are also fairly fast compared to equivalent package managers operating on other systems. For example, Yaourt will most of the time take less time to install a software package than Portage will take to install the same package. I suspect the reason behind this is that Portage is written in Python and Bash script, while pacman is written in C and Yaourt, being a wrapper for pacman, is written in C and Bash script. pacman is actually widely considered the fastest Linux package manager available.

Arch Linux also follows a bleeding-edge rolling release model (BE-RRM), which means that users almost always have the latest software and never need to perform a standard system upgrade. Although it is worthwhile noting that not all software on Arch is bleeding-edge, some can be a few releases behind. For example, as of {{ page.date | date: "%d %B %y" }} [e_dbus 1.7.9](https://www.archlinux.org/packages/extra/x86_64/e_dbus/) is still in their official pacman repositories, even though version 1.7.10 was released on 6 January 2014.[^3]

pacman and Yaourt both have very unusual syntax, see most command-line BSD/Linux package managers use the `install` option to install software, `remove` to remove software, `update` to update software repositories and `upgrade` to updated all installed software. pacman instead uses `-S`, `-R`, `-Sy` and `-Syu` options, respectively. Further details of its syntax can be found [here](https://wiki.archlinux.org/index.php/Pacman_Rosetta).

Here is an example `~/.bashrc` file one can use on Arch VMs.
```bash
# A less powerful replacement for Yaourt, I use when Yaourt is somehow inappropriate
function aurin {
  for i in "$@"
  do
    git clone https://aur.archlinux.org/$i.git
    pushd $i
    makepkg -s
    paclin $i
    popd
    rm -rf $i
  done
}

# `paclin` installs software with pacman from a local package.
function paclin {
  sudo pacman -U $@*.pkg.tar.xz
}

# `pacin` installs software with pacman, without asking for confirmation
# to get this command to ask for confirmation first remove the --noconfirm
# option
function pacin {
  sudo pacman -S $@ --noconfirm
}

# `pacrm` removes software with pacman, without asking for confirmation
# -Rsc option is used to get pacman to remove reverse dependencies of the target
# package, as needed. If you use the -R option instead quite often this command
# will fail due to reverse dependencies that would be broken if the target package
# is removed
function pacrm {
  sudo pacman -Rsc $@ --noconfirm
}

# `pacup` updates software installed with pacman (not Yaourt-installed software)
# without asking for confirmation
function pacup {
  sudo pacman -Syu --noconfirm
}

# `update` updates all software, including that originally installed with Yaourt
# without asking for confirmation
function update {
  yaourt -Syua --noconfirm
}

alias yaup=update

# `yain` installs software using Yaourt, without asking for confirmation
function yain {
  yaourt -S $@ --noconfirm
}

# `yalin` installs a local software package using Yaourt, without asking for
# confirmation
function yalin {
  yaourt -U $@ --noconfirm
}

# `yarm` removes software using Yaourt
function yarm {
  yaourt -Rsc $@ --noconfirm
}
```

{% include OS-post/specs.html arch="arm, i686, x86_64." shell="Bash." type="Linux." PMS="pacman" ui="Command-line." IM="Manual from the command-line or via unofficial shell script installers" date="2002." country="Canada." rm="Rolling." tm="Experienced users, especially those that value the latest software over system stability." %}

{% include OS-post/os-min.html cpu="i686." ims="659 MB." ram="256 MB." hdd="<800 MB." %}

{% include OS-post/os-ratings.html bf="4." cmb=">8." doc="8. Has some of the best documentation out there." sup="? Never really had to use their support forums and channels, except once when I was trying to install it manually on a VM. When I did then, there were plenty of responses to the forum post I wrote, but the general consensus of opinion was that I should not be using the system until I was a more competent Linux user." pm=">8." sru=">8." sb="7. I have found Arch disturbingly easy to inadvertently break and make unusable, but most of the time it is stable enough to use." mewi=">5. I have a decent amount of experience with this system and its more newbie-friendly derivative, Manjaro Linux." oa="8." %}
