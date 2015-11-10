---
layout: post
title:  "Installing Moksha on openSUSE 42.1"
date:   2015-11-10 +1000
categories: opensuse, moksha, installation-guides
---


```bash
sudo zypper addrepo http://download.opensuse.org/repositories/X11:Enlightenment:Factory/openSUSE_Leap_42.1/X11:Enlightenment:Factory.repo
sudo zypper addrepo http://download.opensuse.org/distribution/leap/42.1/repo/oss/
sudo zypper refresh
sudo zypper install automake libtool gcc gcc-c++ autoconf ocaml-gettext gettext-tools efl efl-devel evas-generic-loaders e_dbus e_dbus-devel libxcb-keysyms1 xcb-util-keysyms
wget -cqO- https://download.enlightenment.org/rel/libs/evas_generic_loaders/evas_generic_loaders-1.15.0.tar.xz | tar -xJ

```
