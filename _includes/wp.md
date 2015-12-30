{% assign sortedcats = categories | split:' ' | sort %}
[{% for cats in sortedcats %}{{ cats | markdownify }}{% endfor %}](https://en.wikipedia.org/wiki/{% for cats in sortedcats %}{{ cats }}_{% endfor %})
