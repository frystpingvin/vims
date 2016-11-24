{% assign anchor = id | strip %}
<div class="abc-entry" id="{{ anchor }}">
  <h1>{{ title }}</h1>
  <p>
    {{ body | replace: "å", "å" | replace: "ä", "ä" | replace: "ö", "ö" }}
  </p>
</div>
