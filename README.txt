Portfolio v3 — Abdul Basit
==========================

This is the editorial/academic redesign of your portfolio site — serif type,
paper tones, quiet rules — rebuilt responsively for phones, tablets, and
wide desktop screens, and using the full page width the way your original
site did (no more empty margins on a laptop screen).

Files
-----
  index.html      Home
  projects.html   Full project list
  gallery.html    Photo/video gallery
  gallery.js      Gallery logic (filters, lightbox, HEIC conversion)
  site.js         Theme (light/dark) toggle
  style.css       All styling
  assets/         Your photos, PDFs, and gallery media (unchanged from the
                  original site)

How to run
----------
The gallery does live image fetching (HEIC conversion, etc.), so open this
through a local server rather than double-clicking the HTML file:

  cd "~/Desktop/portfolio v3"
  python3 -m http.server 8000

Then visit http://localhost:8000/

_to_delete folder
------------------
I can't delete files on your Mac directly, so the three designs you didn't
pick (terminal-dev, modern-minimalist, warm-bold), the old multi-design hub
page, and the old editorial-academic wrapper folder have been moved into
"_to_delete" inside this folder instead of being left mixed in with the
site. Once you've confirmed everything looks right, just drag that folder
to the Trash yourself.

Next step
---------
Your original portfolio-site folder is still untouched. Whenever you're
ready, say the word and I can help retire it and put this design in its
place (or help you deploy it) — the CNAME file (abdulbasit.im) was
deliberately left out of this folder so nothing points at your live domain
until you're ready.
