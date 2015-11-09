---
layout: post
title:  "Installing Moksha on Fedora 23"
date:   2015-11-09 03:40:58 +1000
categories: fedora moksha installation-guides
---
![Moksha running on Fedora 23 with the default F23 wallpaper](/images/Fedora-23-Moksha-desktop.png)

**[Moksha](http://mokshadesktop.org/)**, the free Enlightenment 17 fork, is the default desktop environment of Bodhi Linux since the 3.10 release.

{% highlight bash %}
wget -c https://raw.githubusercontent.com/fusion809/moksha-scripts/master/list.txt
sudo dnf install -y $(cat list.txt)

# Define these variables to save space
alias atrin='./autogen.sh --prefix=/usr && make && sudo make install'
alias trin='./configure --prefix=/usr && make && sudo make install'
EVAS=evas_generic_loaders
ELIBS=https://download.enlightenment.org/rel/libs
MOK=https://github.com/JeffHoogland/moksha/archive
REL=https://download.enlightenment.org/releases

# Get EFL 1.15.2
wget -cqO- $ELIBS/efl/efl-1.15.2.tar.xz | tar -xJ
pushd efl-1.15.2
  trin
popd

# Get e_dbus source
wget -cqO- $REL/e_dbus-1.7.10.tar.bz2 | tar -xv
pushd e_dbus-1.7.10
  atrin
popd

# Get evas_generic loaders
wget -cqO- $ELIBS/$EVAS/$EVAS-1.15.0.tar.xz | tar -xJ
pushd $EVAS-1.15.0
  atrin
popd

# Get Moksha
wget -cqO- $MOK/0.1.0.tar.gz | tar -xz
pushd moksha-0.1.0
  atrin
popd

cp -a MokshaRadiance.edj ~/.e/e/themes
{% endhighlight %}
