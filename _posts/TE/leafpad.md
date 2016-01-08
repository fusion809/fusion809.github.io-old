## Leafpad
{% include image.html image="Leafpad-running-under-Moksha.png" description="Leafpad 0.8.18.1 running under Moksha" float="none" width="1130px" %}

### Background
<strong>Leafpad</strong> is a lightweight and basic GTK+ based text editor. Its capabilities (or rather lack thereof) are very similar to those of Windows' Notepad.

### Customizability
There is little, if any, customizability for Leafpad.

### Features
It offers no syntax highlighting support or auto-indentation support that I am aware of.

### Obtaining it
To install it on Sabayon with Entropy run:
<div class="code"><span class="coder">root #</span>  equo i -av app-editors/leafpad</div>
while to install it with Portage run:
<div class="code"><span class="coder">root #</span>  emerge -av app-editors/leafpad</div>

### Disadvantages (Cons)
<ul>
	<li>It is very basic, has minimal customizability or features</li>
</ul>

### Advantages (Pros)
<ul>
	<li>Its chief advantage is its low system resource usage</li>
	<li>Easy to install on Sabayon</li>
</ul>

### Ratings
<ul>
	<li><strong>Availability</strong>: 8.</li>
	<li><strong>Beginner-friendliness</strong>: 10.</li>
	<li><strong>Customizablity</strong>: 0.</li>
	<li><strong>Features</strong>: 0.</li>
	<li><strong>Popularity</strong>: 4. One person has voted for it so far in my poll.</li>
	<li><strong>SRU</strong>: 9. <a href="https://packages.sabayon.org/show/leafpad,54626,sabayon-weekly,amd64,5,standard" target="_blank">Leafpad 0.8.18.1</a> is a 0.1 MB download and 3.3 MB package when installed. It is the most lightweight graphical TE in this comparison. Here is my <code>ps mem</code> table:
<pre>
Private  +   Shared  =  RAM used	Program

 10.8 MiB +   2.0 MiB =  12.8 MiB	leafpad
---------------------------------
                         12.8 MiB
=================================
</pre>
while under Manjaro Linux Leafpad 0.8.18 gave the following <code>ps_mem</code> table:
<pre>
Private  +   Shared  =  RAM used       Program

 4.4 MiB +   1.5 MiB =   6.0 MiB       leafpad
---------------------------------
												 6.0 MiB
=================================
</pre>
</li>
	<li><strong>Overall</strong>: 7. Fairly basic, but at least it is stable and easy to use.</li>
</ul>

### Website(s)
<ul>
	<li><a href="http://tarot.freeshell.org/leafpad/">Official Webpage</a></li>
</ul>
