## GNU Emacs
[caption id="attachment_619" align="alignnone" width="1366"]<a href="http://linux.x10host.com/blog/wp-content/uploads/2015/10/GNU-Emacs.png"><img class="size-full wp-image-619" src="http://linux.x10host.com/blog/wp-content/uploads/2015/10/GNU-Emacs.png" alt="GNU Emacs running under Moksha" width="1366" height="740" /></a> <strong>GNU Emacs running under Moksha</strong>[/caption]
<h2>Background</h2>
<strong>GNU Emacs</strong> (<strong>GE</strong>) is an extensively-customizable text editor that is developed by the GNU Project. Its original developer was Richard Stallman, the founder of the GNU Project and its first release was in 1985. It belongs to a family of text editors called Emacs, which are text editors that are extensively customizable for users with sufficient programming knowledge. Emacs is abbreviated from <strong>E</strong>ditor <strong>Mac</strong>ro<b>s</b>, which refers to its origin as editor macros for the TECO text editor, that were developed, in part, by Richard Stallman. GE is written in C and Emacs Lisp (ELisp), a dialect of the Lisp programming language devised just for GE. ELisp is used to write extensions and provide extra functionalities for GE and related text editors like XEmacs.
<h2>Customizability</h2>
GE is one of the most customizable text editors available, but much of this customization must be done via writing code in ELisp, which limits much of this customization to advanced users only.
<h2>Features</h2>
GNU Emacs provides syntax highlighting for dozens of different computer languages, along with several features of IDEs like shell access, compiling code, using git from within GE, <em>etc. </em>The <a href="http://gpo.zugaina.org/app-emacs/" target="_blank">app-emacs</a> Portage category contains several plugins for GNU Emacs.
<h2>Obtaining it</h2>
GNU Emacs is available from the Entropy Store and the Portage Tree. To install it with Entropy run:
<div class="code"><span class="coder">root #</span>  equo i -av app-editors/emacs</div>
while to install it with Portage run:
<div class="code"><span class="coder">root #</span>  emerge -av app-editors/emacs</div>
<h2>Disadvantages (Cons)</h2>
<ul>
	<li>Has a steep learning curve for newcomers, hence making it inaccessible to newcomers to Linux and programming, in general.</li>
	<li>Has an unconventional keymap, which can take some time to learn. For example, to cut text you use <kbd>Ctrl+W</kbd>, as opposed to the usual <kbd>Ctrl+X</kbd>, while to paste text you use <kbd>Ctrl+Y</kbd>.</li>
</ul>
<h2>Advantages (Pros)</h2>
<ul>
	<li>Extensively customizable</li>
	<li>Heavy on features, especially for advanced users that can extend it using ELisp.</li>
	<li>Provides syntax highlighting for dozens, if not hundreds, of computer languages</li>
	<li>Has its own Wiki, manual and other documentation.</li>
</ul>
<h2>Ratings</h2>
<ul>
	<li><strong>Availability</strong>: &gt;8. Readily available for installation on Sabayon.</li>
	<li><strong>Beginner-friendliness</strong>: ≤5. Not particularly difficult for a newcomer to use as a basic text editor, but any further usage requires extensive knowledge of ELisp.</li>
	<li><strong>Customizability</strong>: &gt;9. Extensively customizable for all those that understand ELisp sufficiently.</li>
	<li><strong>Features</strong>: &gt;9. It is one of the most feature-packed text editors available today.</li>
	<li><strong>Popularity</strong>: 6. I am actually quite surprised by its lack of popularity on Sabayon, from what I have heard it should have ranked right up there with Vim for popularity.</li>
	<li><strong>SRU</strong>: 7-8. <a href="https://packages.sabayon.org/show/emacs,158951,sabayon-weekly,amd64,5,standard" target="_blank">Emacs 24.5</a> is a 35.8 MB download and takes up 142.2 MB HDD space when installed. Fairly lightweight as far as text editors go, RAM-wise. Here is my <code>ps mem</code> table:
<pre>
Private  +   Shared  =  RAM used	Program

 31.6 MiB +   3.0 MiB =  34.5 MiB	emacs-24
---------------------------------
                         34.5 MiB
=================================
</pre>
</li>
	<li><strong>Overall</strong>: 8. It is a very powerful text editor, but to me, its lack of customizability by those that do not understand ELisp is a significant disadvantage.</li>
</ul>
<h2>Website(s)</h2>
<ul>
	<li><a href="https://wiki.gentoo.org/wiki/GNU_Emacs" target="_blank">Gentoo Wiki Article</a></li>
	<li><a href="http://www.gnu.org/software/emacs/manual/">GNU Emacs Manuals Online</a></li>
	<li><a href="http://www.emacswiki.org/emacs/EmacsWiki">Oddmuse-powered Emacs Wiki</a></li>
	<li><a href="https://www.gnu.org/software/emacs/" target="_blank">Official Webpage</a></li>
</ul>
