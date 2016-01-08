## GNU nano
{% include image.html image="GNU-nano-under-LXTerminal.png" description="GNU nano 2.4.2 running within LXTerminal under Moksha" width="1130px" float="none" %}

### Background
{% include_relative TE/links.md program="GNU nano" package="app-editors/nano" wp="GNU nano" pacman="core/x86_64/nano/" gw="Nano" aw="Nano" link="http://www.nano-editor.org/" ml="http://www.nano-editor.org/docs.php" %} is a command-line text editor that is developed as part of the GNU Project. Its development began in 1999 by Chris Allegretta, as a free alternative to the proprietary Pico text editor. Later, in 2001, it officially became part of the GNU Project. Several features (like search, search and replace, save, exit, *etc.*) are accessed using keyboard shortcuts. It can be invoked by running the command "nano" from the command-line. nano can be passed several different options from the command-line, to see a full list see its man page (invoked by running `man nano` or, if you would prefer to view it in your browser, go [here](/man/nano.1.html)). Usually when I want to edit a file with nano I simply run `nano <FILE>` where `<FILE>` is the file's name (potentially also with its path if it is not in my current directory).

### Customizability
I am unaware of any possible customization of nano, if you know some please do tell me in the comments of this post.

### Features
It offers syntax-highlighting, auto-indenting and miscellaneous other support for several computer languages. It also auto-detects the computer language using file extensions. It also has search functions (accessable via pressing <kbd>Ctrl</kbd>+<kbd>W</kbd>).

### Obtaining it
It is fairly simple to get nano on Sabayon. Odds are it will already be installed by default on your Sabayon machine, so check to see if it is with `nano` (does not matter if you execute this as root or standard user). If you do not have it, you can try to install it with Entropy, via running:
{% include coder.html line1="equo i -av app-editors/nano" %}
alternatively, to install it with Portage, run:
{% include coder.html line1="emerge -av app-editors/nano" %}

### Ratings
{% include_relative TE/nano-ratings.html %}
