---
layout: default
title: Writing
---
<ul class="max-w-2xl space-y-8">
  {% for post in site.posts %}
    <li>
      <a
        href="{{ post.url | relative_url }}"
        class="flex flex-wrap items-baseline gap-x-8 gap-y-1 font-mono
               hover:[background-image:linear-gradient(to_bottom,#e6efe0_0%,#c8d9be_100%)]
               dark:hover:[background-image:linear-gradient(to_bottom,#1f2a22_0%,#141a17_100%)]"
      >
        <span class="flex-1 text-xl min-w-sm">
          {{ post.title }}
        </span>
        <time
          datetime="{{ post.date | date_to_xmlschema }}"
          class="text-sm dark:text-moss-400 text-moss-700"
        >
          {{ post.date | date: "%B %-d, %Y" }}
        </time>
      </a>
    </li>
  {% endfor %}
</ul>