---
layout: single
title: "Svi tagovi"
permalink: /tagovi/
---

<div class="tags-cloud">
  {% assign tags = site.tags | sort %}
  {% for tag in tags %}
    <a href="{{ tag[0] | slugify | prepend: '/' | prepend: '/tagovi' | relative_url }}" class="tag-badge">
      {{ tag[0] }} <span class="tag-count">({{ tag[1].size }})</span>
    </a>
  {% endfor %}
</div>

<style>
.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 2rem 0;
}

.tag-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #60003b;
  color: white;
  border-radius: 25px;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.tag-badge:hover {
  background: #952F66;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.tag-count {
  opacity: 0.8;
  font-size: 0.85em;
}
</style>
