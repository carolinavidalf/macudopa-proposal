// Everything client-specific lives in this file.
// For a new proposal, change the text below and swap the three images in the client/ folder.
// Text can include simple HTML, like <a href="...">a link</a> or <em>emphasis</em>.

window.PROPOSAL = {

  // ---- The client ----
  client: "MacuDopa",
  tabTitle: "Working on MacuDopa",   // shown in the browser tab on the Home page

  // The logo sits at the end of the headline and in the footer.
  // Its size is set on the image itself, so it always matches the text height.
  // width and height are the image's real pixel size (only the ratio matters).
  logo: { src: "client/logo.png", width: 1600, height: 213 },

  // ---- Home ----
  headline: "Bringing the new brand to the website for",   // the logo goes right after this

  intro: "I went through both prototypes and the full brand toolkit. The wires are already in good shape, with real copy and a clear flow from the homepage to Shop, the Day product page, Lab results and the account screens, so the job is mostly about dressing them in the new brand in a way a Shopify developer can build from without guessing. I'd do it in a week, using Claude with Figma so the repetitive parts go fast and my time goes into the decisions.",

  curious: {
    opener: "The toolkit asks for a voice of &ldquo;calm, consideration, and care&rdquo;, and I think the site should feel the same way to someone with Parkinson's using it on their phone. These are the things I noticed while going through it.",
    items: [
      { title: "Colour on the Shop page", text: "The wires are grey, so most of the work is deciding where Day Orange, Night Purple and Support Green go. The toolkit says text stays in Precision White or Macuna Purple and product colours shouldn't sit together, which gets tricky on Shop, where Day, Night, Sleep Support and Gut Support sit side by side, and on the Day + Night starter pack." },
      { title: "Fonts", text: "Titles are Caslon Ionic Rounded and body copy is TWK Lausanne, and both need a web licence (Commercial Type and Weltkern). I'd flag that early in the dev brief, with a fallback, so it doesn't hold up the build. Memoir for product titles is free to use." },
      { title: "What Horizon does out of the box", text: "A lot of the homepage maps nicely onto Horizon sections, but some parts won't come for free, like the Continuum Method graph, the MacuDopa vs most Mucuna supplements table and the Lab results page. In the dev brief I'd mark every section as native, custom Liquid, or an app, so a developer can quote from it straight away." },
      { title: "Apps and accounts", text: "Subscribe and save, the 1-minute quiz, the Trustpilot reviews and the chat button will each need an app. The sign in, code and account screens look like Shopify's own customer accounts, which are styled through settings and not in the theme, so they'd sit in a separate part of the brief." },
      { title: "Content that's still placeholder", text: "The wires already say reviews need a compliance check, and there are placeholders for batch numbers, the phone number and the professional quotes. I'd list those in the brief so nothing launches with XXXX in it." }
    ],
    note: "This is based on the wires and the toolkit Adam shared on Contra. If I've misread anything, I'd rather hear it early."
  },

  // Which offer shows under "Where I'd start" on Home (use its id from the list below).
  startWith: "main",

  nextStep: "If this sounds right, just reply on Contra and we can have a quick call to go through the wires together. If you'd rather change the scope, tell me and we'll work it out.",

  // ---- Prices ----
  // Shown under the prices on Home and on Ways to work.
  priceNote: "Prices are in pounds and fixed for the scope above. If something extra comes up during the week, I'll tell you before I do it.",

  // ---- Offers ----
  // group: the grey label on Ways to work. Offers with the same group sit together, in this order.
  // icon: flag, scan, layers, sliders or clock.
  // price + unit: "£1,200" + "about 2 days". from: true adds a small "from" before the price.
  // price2 + unit2: an optional second price, like a day rate.
  // homeText: optional longer text for when this offer is shown on Home.
  // onHome: false hides it from "At a glance" on Home.
  offers: [
    {
      id: "main",
      group: "The job",
      icon: "flag",
      name: "The wires and both briefs",
      price: "£2,400", unit: "one week",
      text: "I apply the rebrand to every wire on mobile and desktop: Home, Shop, the product page, Lab results, and the sign in and account screens. The Figma file gets the toolkit's colours and type as variables and components, named to match how Horizon sections and blocks work. You also get a design brief that explains how the brand is used across the site, and a dev brief that goes section by section with what's native, what's custom and what needs an app, so it's ready to send out for quotes.",
      homeText: "I apply the rebrand to every wire on mobile and desktop: Home, Shop, the product page, Lab results, and the sign in and account screens. The Figma file gets the toolkit's colours and type as variables and components, named to match how Horizon sections and blocks work. You also get a design brief that explains how the brand is used across the site, and a dev brief that goes section by section with what's native, what's custom and what needs an app, so it's ready to send out for quotes. I've built a component library from Figma tokens in React before, so setting up a file that maps cleanly to code is something I care about a lot."
    },
    {
      id: "pages",
      group: "If you need more",
      icon: "layers",
      name: "The pages that aren't wired yet",
      price: "£300", unit: "per page",
      text: "The menu and footer link to pages like How to take it, FAQs, Our story and For professionals that don't have wires yet. If you want them in the same file, I'd design them in the same system, mobile and desktop, and add them to both briefs."
    },
    {
      id: "time",
      group: "If you need more",
      icon: "clock",
      name: "Help during the build",
      price: "£90", unit: "per hour",
      price2: "£600", unit2: "per day",
      text: "For when the developer has questions, a section needs adjusting, or you want someone to check the build against the designs before launch."
    }
  ],

  // ---- How it goes ----
  // The three steps are the same for every client. This line under them changes with the offers.
  timing: "The whole thing is one week of work. I'd share the homepage midweek so you can check the direction before I take it across the rest of the pages."
};
