---
layout: default
title: Writing
---
<ul class="max-w-2xl space-y-8">
  {% for post in site.posts %}
    <li>
      <a
        href="{{ post.url | relative_url }}"
        class="group flex flex-wrap items-baseline gap-x-8 gap-y-1 font-display px-0.5 rounded-sm
               hover:bg-neutral-900 hover:dark:bg-neutral-200 hover:dark:text-neutral-950 hover:text-neutral-200"
      >
        <span class="flex-1 text-xl font-light min-w-xs">
          {{ post.title }}
        </span>
        <time
          datetime="{{ post.date | date_to_xmlschema }}"
          class="text-sm font-thin dark:text-neutral-400 text-neutral-700 group-hover:text-inherit"
        >
          {{ post.date | date: "%B %-d, %Y" }}
        </time>
      </a>
    </li>
  {% endfor %}
</ul>
