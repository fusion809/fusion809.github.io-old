## openSUSE
{% include OS-post/os-shot.html image="openSUSE-42.1-desktop-screenshot-appmenu.png" float="none" description="Screenshot of openSUSE 42.1 with its default wallpaper." width="1000px" %}

### Background
{% include OS-post/os.html os="openSUSE" url="https://www.opensuse.org/" d="https://software.opensuse.org/" dw="opensuse" wp="openSUSE" wiki="https://en.opensuse.org/Main_Page" forum="https://forums.opensuse.org/forum.php" ml="https://en.opensuse.org/openSUSE:Mailing_lists" irc="https://en.opensuse.org/openSUSE:IRC_list" docs="http://doc.opensuse.org/" gr="openSUSE" %} is a German Linux distribution that is the free continuation of S.u.S.E., a Linux distribution first founded in the early 1990s by a group of German mathematics university students. openSUSE is a community project sponsored by Novell, Inc. an American multinational company. openSUSE is used as the open-source basis of the commercial SUSE Linux Enterprise (SLE) product sold by Novell. openSUSE is unique amongst Linux distributions in that both fixed release model versions (e.g., 13.1, 13.2 and 42.1) and a rolling release model version (called Tumbleweed) is available of the OS. Of these the fixed release model versions are usually more popular amongst users, but the Tumbleweed version is not too unpopular either.

{% include OS-post/os-shot.html image="openSUSE-42.1-YaST2-running.png" width="1000px" float="none" description="YaST2 running on openSUSE 42.1" %}
Internationally openSUSE is one of the most popular Linux distributions, with it currently being ranked 4th by the *DistroWatch* website for popularity. openSUSE's good points include the fact it is fairly user-friendly, with one of the most powerful graphical PMS front-ends, YaST2, plus openSUSE has the [openSUSE Build Service](https://build.opensuse.org/) (OBS), which is essentially the openSUSE equivalent to Arch's PKGBUILDs and the AUR, providing thousands of unofficial binary packages for users to install. OBS has an advantage over the AUR too because it contains binary packages which are simpler and faster to install than PKGBUILDs.

Novell signed a deal with Microsoft in 2006, which was meant to improve on compatibility between free and open-source programs and Microsoft's proprietary programs, that has lead to significant contention in the FOSS community. This is because, in general, the FOSS community has a great deal of disdain for big software companies like Microsoft and this agreement seemed more like Novell selling out to Microsoft, than anything else. Further criticism of openSUSE has been focused on the belief that the system is a little "bloated". What I interpret this to mean is that the live DVD ISO file used to install openSUSE without relying on one's network too much is larger (namely 4.7 GB for 42.1) than what one would expect based on the size of similar Linux distribution's live media. That and the fact that the system contains several unnecessary packages that while intended to make the system more "out-of-the-box" add unnecessary size to the system.

### Package Management
openSUSE uses [**ZYpp**](https://github.com/openSUSE/zypper) ([`zypper`](/man/zypper.8.html) from the command-line) for package management which installs software from RPM binary packages. ZYpp (not including any of its libraries, just zypper) is written in C++ (96.1%), Perl (1.3%), Bash script (1.1%), C (0.9%), *etc.*[^4] Here is an example Bash script for automating some common actions with ZYpp:
```bash
# Install software from binary packages in available repos
# Alternatively a URL to the RPM binary can be used as an input
function zypin {
  sudo zypper in $@
}
alias szpi=zypin

# Remove software
function zyprm {
  sudo zypper rm $@
}
alias szpr=zyprm

# Add zypper repo.
# First input is the URL to the repo, e.g.,
# http://download.opensuse.org/repositories/home:/Bumblebee-Project:/nVidia:/310.40/openSUSE_Tumbleweed/
# second input is a name for the repo, e.g., I used home:Bumblebee-Project:nVidia:310.40 for the
# aforementioned example.
function zyprp {
  sudo zypper ar -f $1 $2
}

# Install software from src.rpm packages in available repos
function zypsi {
  sudo zypper si $@
}
alias szps=zypsi

# Update all software on one's system
function update {
        sudo zypper up
}

alias zypup=update
alias szpu=update
```

{% include OS-post/specs.html arch="armhf, i586, x86_64." origin="Germany." date="&lt;1996. Depends on the point at which one considers openSUSE to have been born." ui="GNOME, KDE, IceWM, LXDE, Xfce, etc." im="Graphical, using live media." type="Linux." pm="ZYpp." rm="Fixed (standard releases), Rolling (Tumbleweed)." tm="Users that prefer to an OS that works &ldquo;out-of-the-box&rdquo;." %}

{% include OS-post/os-min.html cpu="Pentium 4 @ 1.6 GHz." ram="1024 MB, 2048 MB recommended." hdd="3 GB, 5 GB for a graphical desktop." ims="85 MB (x86_64, NET edition)." %}

{% include OS-post/os-ratings.html bf="8-9." cmb="7." doc="&gt;8. Pretty extensive documentation." sup="? Only used their forums once and the support I got fixed the problem." pm="&gt;8. I actually rather like ZYpp and YaST2." sru="5. Fairly bloated, especially when using the usual desktops, GNOME/KDE." sb="8. I have found it fairly stable since the release of 42.1." mewi="7. I have a fair degree of experience with it on VirtualBox VMs." oa="9. I love Tumbleweed." %}