============================================================
 YOUR OWN LIST BUILDER
 Thanks for picking this up.
============================================================

You've just unzipped this folder — here's what's in it and
what order to use it in.

START HERE — the full setup guide, with a screenshot for every
step, lives here:

    https://romulus51.github.io/Your_Own-List_Builder-Guide/setup.html

This file is just a quick orientation in case you're looking at
these files before reading that guide. The guide is the real
instructions — this is the map.


------------------------------------------------------------
 WHAT'S IN THIS FOLDER
------------------------------------------------------------

  index.html
      The app itself. This is what you'll upload to a private
      GitHub repository, then deploy through Cloudflare, in
      Step 4 of the setup guide. Don't open this file directly
      from your computer yet — it needs to be hosted online
      first to work correctly.

  sw.js
      Lets the app keep working for the rest of a session even
      if you lose signal after loading it — handy at a venue
      with patchy wifi. Also lets Settings confirm the install
      is working correctly. Upload this in the SAME folder as
      index.html. (Note: this only lasts for the current
      session — closing or reloading the app while offline
      means you'll need signal again to reopen it. A Settings
      option lets you preload every card image in advance too.)

  manifest.webmanifest
      Required for "Add to Home Screen" to show the correct app
      name and icon, and for the app to open full-screen without
      Safari's browser bar. Same folder as index.html and sw.js.

  README.txt
      This file.

NOTE: Code.gs, appsscript.json, and supabase-setup.sql are NOT
in this zip. They are free downloads linked directly from the
setup guide at exactly the step you need them:

  Step 2 — Code.gs and appsscript.json (Apps Script connector):
  https://romulus51.github.io/Your_Own-List_Builder-Guide/setup.html#step-2

  Step 6 — supabase-setup.sql (optional cloud saves):
  https://romulus51.github.io/Your_Own-List_Builder-Guide/setup.html#step-6


------------------------------------------------------------
 THE SETUP, IN ORDER
------------------------------------------------------------

  1. Copy the free Google Sheet template
  2. Deploy the free Apps Script connector (Code.gs — free
     download linked from the setup guide at Step 2)
  3. Upload these three files to a private GitHub repository,
     then deploy through Cloudflare (this step — index.html,
     sw.js, manifest.webmanifest all in the same folder)
  4. Open your hosted link and run through the in-app
     setup wizard
  5. Optional: set up Supabase for cloud roster saves
     (supabase-setup.sql — free download linked from Step 6)
  6. Run a Health Check inside the app before building
     your first list

Every one of these steps has its own screenshots in the full
guide. None of this needs to be figured out from scratch —
just follow along:

    https://romulus51.github.io/Your_Own-List_Builder-Guide/setup.html


------------------------------------------------------------
 A FEW THINGS WORTH KNOWING
------------------------------------------------------------

  - Everything in this setup is free except this download.
    Google Sheets, Apps Script, GitHub, Cloudflare, and
    Supabase's free tier all stay free at this scale.

  - Keep your GitHub repository PRIVATE, not public. The app
    reads card data from your own Sheet, but that data — names,
    stats, rules text — comes from Mantic's published game. A
    private repo just keeps that content from being openly
    re-published in browsable form on GitHub. Cloudflare deploys
    from a private repo exactly the same way as a public one, so
    this costs nothing extra in setup.

  - Your Sheet, your Apps Script, and your hosted app all run
    under YOUR Google/GitHub account. Nobody else, including
    me, has access to any of it.

  - This app has no login and stores nothing on a server I
    run. If this page or my Itch account ever disappeared,
    your own running copy would be completely unaffected.

  - Updates: if a new version comes out, updating just means
    downloading the new index.html and re-uploading it to
    your GitHub project (Cloudflare automatically updates). Your Sheet, your saved
    rosters, and your connections are untouched by this.


------------------------------------------------------------
 NEED HELP?
------------------------------------------------------------

Check the FAQ first — it covers most setup questions directly,
including the "Who has access: Anyone" Apps Script setting
that trips people up the most:

    https://romulus51.github.io/Your_Own-List_Builder-Guide/faq.html

------------------------------------------------------------

This is an independent, unofficial fan project. Not affiliated
with, endorsed by, or sponsored by Mantic Games, 343 Industries,
or Microsoft.
