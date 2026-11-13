/**
 * Full case studies for every brand except Tiffany.
 * Pictures are the files already on the site. Nothing here replaces them.
 */

import { getCaseGallery } from "@/lib/data/premium-work/caseGallery";
import { ORIGINAL_STUDIES } from "@/lib/data/premium-work/originalStudies";
import type { FullCase, FullPicture } from "@/lib/data/premium-work/caseFull";

const EXTRA: Record<string, FullPicture[]> = {
  pjazza: [
    { src: "/attached_assets/premium-work/pjazza-food_b3085783.jpg", alt: "Food on PJAZZA, shown live before a buyer pays." },
    { src: "/attached_assets/premium-work/pjazza-electrician_b56f2c78.jpg", alt: "A trade on PJAZZA, shown live before a buyer pays." },
    { src: "/attached_assets/premium-work/pjazza-car_d813e37a.jpg", alt: "A car walkaround on the PJAZZA marketplace." },
    { src: "/attached_assets/premium-work/pjazza-property_4f730440.jpg", alt: "A property tour on the PJAZZA marketplace." },
    { src: "/attached_assets/premium-work/pjazza-yacht_ccabfa41.jpg", alt: "A boat shown live on the PJAZZA marketplace." },
  ],
  "data-foundation": [
    { src: "/attached_assets/premium-work/oarc-confidential-data-foundation_61730536.jpg", alt: "The product-data view built for the distributor." },
    { src: "/attached_assets/premium-work/oarc-confidential-data-lineage_2e1a3236.jpg", alt: "How a product record is checked before an order goes out." },
  ],
};

function shots(slug: string): FullPicture[] {
  if (EXTRA[slug]) return EXTRA[slug];
  const gallery = getCaseGallery(slug);
  if (gallery) {
    return gallery.items.map((item) => ({
      src: item.src,
      alt: item.alt,
      frame: /poster/i.test(item.src) ? "poster" : undefined,
    }));
  }
  const study = ORIGINAL_STUDIES[slug];
  if (study?.image) return [{ src: study.image, alt: study.name }];
  return [];
}

function at(slug: string, index: number): FullPicture | undefined {
  return shots(slug)[index];
}

function page(slug: string, body: Omit<FullCase, "afterSummary" | "afterBrief" | "afterGrew"> & { blocks: FullCase["blocks"] }): FullCase {
  const pictures = shots(slug);
  const [a, b, c, d, e, f] = pictures;
  const blocks = body.blocks.map((block, index) => {
    const picture = [c, d, e][index];
    return picture ? { ...block, picture } : block;
  });
  return {
    ...body,
    blocks,
    afterSummary: a,
    afterBrief: b,
    afterGrew: f,
  };
}

export const CASE_FULL_OTHERS: Record<string, FullCase> = {
  "portomaso-casino": page("portomaso-casino", {
    headline: ["35% MORE", "RESTAURANT BOOKINGS."],
    year: "2026",
    industry: "Venue and restaurant",
    place: "Portomaso Marina",
    services: ["Venue photography", "Restaurant content", "Location posts", "Marina setting"],
    summary: ["Portomaso Casino sits on the marina in St Julian’s. OARC photographed the entrance, the floor and the lounge, and ran content that sent people to the restaurant. Restaurant booking clicks grew 35%. Venue content brought 450 more diners to the restaurant page and reached 60,000 local viewers."],
    briefTitle: "The restaurant, seen from the marina.",
    brief: ["The work was the venue as it stands: the entrance, the floor, the lounge, and the marina around it. The posts led to the restaurant page and the table booking. The story stays on the place and the meal."],
    blocks: [
      { title: "The venue, photographed.", body: ["The entrance, the floor and the lounge were shot on site. People recognise the building from those photos. The marina setting is in the frame, so the restaurant is tied to a place they already know."] },
      { title: "The restaurant page.", body: ["Venue content brought 450 more diners to the restaurant page. Location-led posts grew restaurant booking clicks by 35%. The click is for a table, not a promise about the floor."] },
      { title: "Who saw it.", body: ["The Portomaso setting reached 60,000 local viewers. The aim on the work was a venue video, visits to the restaurant page, booking clicks, and saves on the posts."] },
    ],
    grewTitle: "Photos first. Then the table.",
    grew: ["It started with the real photographs. The posts then carried the marina and the restaurant. One set of pictures feeds the page where a diner books."],
    resultTitle: "More diners. More booking clicks.",
    resultBody: "Restaurant booking clicks grew 35%. Venue content brought 450 more diners to the restaurant page. The setting reached 60,000 local viewers.",
    closeTitle: "The place, then the table.",
    close: ["OARC Digital made the venue photographs and the restaurant content for Portomaso Casino. The numbers come from the work on this account."],
    moreSlugs: ["massive-fan-zone", "spinola-gin-fest", "calle-bistro"],
    faq: [
      { q: "What did OARC Digital do for Portomaso Casino?", a: "OARC Digital photographed the entrance, floor and lounge at Portomaso Marina and ran content that sent people to the restaurant. Restaurant booking clicks grew 35%." },
      { q: "Did the Portomaso work promote gambling?", a: "No. The page and the posts are about the venue and the restaurant. Booking clicks are for a table." },
      { q: "How many people reached the restaurant page?", a: "Venue content brought 450 more diners to the restaurant page. The marina setting reached 60,000 local viewers." },
    ],
  }),
  "massive-fan-zone": page("massive-fan-zone", {
    headline: ["12,000 FANS.", "ONE BAY."],
    year: "2026",
    industry: "Event campaign",
    place: "Spinola Bay",
    services: ["Match-night posts", "Paid ads", "Fixture content"],
    summary: ["Massive Promotions ran the World Cup Fan Zone at Spinola Bay. OARC made a post for the fixtures and ran the paid ads. 12,000 fans came. 2,000 people opened the match-night details from social posts, and the cost of each event-interest action fell 30%."],
    briefTitle: "A reason to come, every match.",
    brief: ["Each fixture needed its own post before kick-off, and paid ads behind it so fans nearby knew which match was on and where to stand."],
    blocks: [
      { title: "A post for the fixtures.", body: ["Fan Zone posts were built around the World Cup fixtures. A fan could see the match, the bay, and the plan before they left the house. Social posts sent 2,000 people to the match-night details."] },
      { title: "Paid, around the bay.", body: ["Paid ads put those posts in front of fans near Spinola Bay. 12,000 fans came to the Fan Zone. The cost of each event-interest action fell 30%."] },
      { title: "Before kick-off.", body: ["The posts gave fans the match-night plan early enough to decide. The aims on the work were video views and saves on the match-night posts."] },
    ],
    grewTitle: "Fixtures, then the crowd.",
    grew: ["The campaign started as fixture posts. Paid ads carried them. The same account covered the nights people actually attended."],
    resultTitle: "12,000 fans at the bay.",
    resultBody: "12,000 fans came to the Spinola Bay Fan Zone. 2,000 people visited the match-night details. The cost of each event-interest action fell 30%.",
    closeTitle: "One bay. Every match.",
    close: ["OARC Digital made the Fan Zone posts and ran the paid ads for Massive Promotions. The numbers come from the work on this account."],
    moreSlugs: ["spinola-gin-fest", "drink-n-more", "portomaso-casino"],
    faq: [
      { q: "What did OARC Digital do for the Spinola Bay Fan Zone?", a: "OARC Digital made Fan Zone posts around the World Cup fixtures and ran the paid ads. 12,000 fans came to Spinola Bay." },
      { q: "How did fans find the match details?", a: "Social posts sent 2,000 people to the match-night details. The posts went up so fans could plan before kick-off." },
    ],
  }),
  "spinola-gin-fest": page("spinola-gin-fest", {
    headline: ["4,500 PEOPLE.", "TWO NIGHTS."],
    year: "2026",
    industry: "Festival",
    place: "Spinola",
    services: ["Festival videos", "Posts", "Campaign content"],
    summary: ["Spinola Gin Fest is the festival Massive Promotions ran on 16 and 17 July 2026, its 4th edition. OARC made the videos and posts and pushed them before opening night. 4,500 people came over two nights. The campaign reached 300,000 people, visits to the details doubled before opening, and 1,000 people saved an event plan."],
    briefTitle: "Seen before opening night.",
    brief: ["The festival had to be obvious before the doors opened: the drinks, the stage, the crowd, and the dates. The content went out ahead of 16 July."],
    blocks: [
      { title: "The festival, on film.", body: ["Videos and posts showed the drinks, the stage and the crowd. Visits to the festival details doubled before opening night. People could decide with the date in front of them."] },
      { title: "Two nights, 16 and 17 July.", body: ["The work covered the 4th Gin Fest on those two dates. 4,500 people visited over the two nights."] },
      { title: "Reach and saves.", body: ["The campaign reached 300,000 people. Festival clips became 1,000 saved event plans. The aims were views on the videos and interest taps for the next edition."] },
    ],
    grewTitle: "Clips first. Then the gate.",
    grew: ["It started with the films and the poster. The same content carried the dates, the details page, and the two nights themselves."],
    resultTitle: "4,500 visitors. 300,000 reached.",
    resultBody: "4,500 people visited Spinola Gin Fest over two nights. The campaign reached 300,000 people. 1,000 people saved an event plan. Visits to the details doubled before opening night.",
    closeTitle: "The dates, then the crowd.",
    close: ["OARC Digital made the Gin Fest videos, posts and poster for Massive Promotions. The numbers come from the work on this account."],
    moreSlugs: ["massive-fan-zone", "drink-n-more", "calle-bistro"],
    faq: [
      { q: "When was the Spinola Gin Fest that OARC Digital promoted?", a: "The 4th Spinola Gin Fest ran on 16 and 17 July 2026. OARC Digital made the videos and posts before opening night. 4,500 people came." },
      { q: "How far did the Gin Fest campaign reach?", a: "The campaign reached 300,000 people. Visits to the festival details doubled before opening night, and 1,000 people saved an event plan." },
    ],
  }),
  "drink-n-more": page("drink-n-more", {
    headline: ["2,000 NEW", "FOLLOWERS."],
    year: "2026",
    industry: "Bar launch",
    place: "Spinola Bay",
    services: ["Launch plan", "Launch message", "Launch creative", "Content before opening"],
    summary: ["Drink N More launched at Spinola Bay. OARC planned the launch, shaped the first public message, and mapped the content before opening. Launch posts helped 600 more people find it. 2,000 local people came to the launch details, launch-week followers grew by 2,000, and 800 people came back from that content."],
    briefTitle: "A first week with a message.",
    brief: ["A new bar needs a line people can repeat, pictures ready before the doors open, and a page that tells them where it is. That was the launch."],
    blocks: [
      { title: "The message, before opening.", body: ["The first public line and the launch creative were set before opening day. The content was mapped so the week was not invented on the night."] },
      { title: "Who found it.", body: ["Launch posts helped 600 more people find Drink N More. 2,000 local people came to the launch details page. Launch-week social followers grew by 2,000."] },
      { title: "Who came back.", body: ["Launch-week content brought 800 people back. The aims were views on the launch videos, visits to the launch page, direction taps, and saves."] },
    ],
    grewTitle: "Plan, then the opening week.",
    grew: ["The work started as a launch plan and a message. The creative and the content calendar followed. The same plan carried the details page and the return visit."],
    resultTitle: "Found, followed, and back.",
    resultBody: "2,000 local people came to the launch details. Launch-week followers grew by 2,000. 600 more people found Drink N More from the posts. 800 people came back.",
    closeTitle: "The opening, planned.",
    close: ["OARC Digital planned and made the Drink N More launch at Spinola Bay. The numbers come from the work on this account."],
    moreSlugs: ["spinola-gin-fest", "massive-fan-zone", "mcw-cbd"],
    faq: [
      { q: "What did OARC Digital do for the Drink N More launch?", a: "OARC Digital planned the Spinola Bay launch, wrote the first public message, and made the content before opening. 2,000 people came to the launch details and followers grew by 2,000 in launch week." },
      { q: "Did people come back after opening week?", a: "Launch-week content brought 800 people back. Another 600 found Drink N More from the launch posts." },
    ],
  }),
  "mcw-cbd": page("mcw-cbd", {
    headline: ["#1 ON GOOGLE.", "€20,000 IN SALES."],
    year: "2026",
    industry: "Retail",
    place: "Malta",
    services: ["Google listings", "Branch pages", "Review replies", "Social posts", "Local ads"],
    summary: ["MCW has shops across Malta. OARC rebuilt the Google listing for every branch, tied local search to the website, replied to reviews, and ran the social posts and local ads. MCW reached #1 on Google in Malta within three months. Sales grew 30% month on month. The work generated €20,000 in sales."],
    briefTitle: "The nearest shop, every time.",
    brief: ["A search had to land on the right branch: address, hours, phone and directions. The website had to open on the product, and the posts had to send shoppers to that branch page."],
    blocks: [
      { title: "Every branch, listed the same way.", body: ["Each Google listing was brought to the same standard: address, hours, phone and directions. Local search was tied to the website so the click did not die on a homepage. Review replies were written. The listings brought 500 more calls and direction requests."] },
      { title: "Social and local ads.", body: ["Social posts sent 1,500 shoppers to the branch pages. Local campaigns grew product-page visits by 35%. Social ads brought 200 new local shoppers. Social pages reached more people around the shops."] },
      { title: "The sales.", body: ["MCW reached #1 on Google in Malta within three months. Sales grew 30% month on month. The work generated €20,000 in sales. The page is about being found and buying. It makes no medical or health claim."] },
    ],
    grewTitle: "The listing, then the shop.",
    grew: ["It started with the Google listings. The website link, the review replies, the posts and the local ads were added on the same branches."],
    resultTitle: "First on Google. Sales up 30%.",
    resultBody: "MCW reached #1 on Google in Malta within three months. Sales grew 30% month on month and the work generated €20,000 in sales. Listings brought 500 more calls and direction requests.",
    closeTitle: "Search, then the nearest shop.",
    close: ["OARC Digital ran the listings, the branch pages, the social posts and the local ads for MCW. The numbers come from the work on this account. Nothing on this page is a medical or health claim."],
    moreSlugs: ["calle-bistro", "kreta", "palino"],
    faq: [
      { q: "What did OARC Digital do for MCW?", a: "OARC Digital fixed the Google listing for every MCW branch in Malta, linked search to the website, replied to reviews, and ran social posts and local ads. MCW reached #1 on Google in Malta within three months." },
      { q: "What sales came from the MCW work?", a: "Sales grew 30% month on month. The work generated €20,000 in sales. The page does not make a medical or health claim." },
      { q: "How do people find the nearest MCW shop?", a: "Each branch listing carries the address, hours, phone and directions. The listings brought 500 more calls and direction requests. Social posts sent 1,500 shoppers to the branch pages." },
    ],
  }),
  "calle-bistro": page("calle-bistro", {
    headline: ["48% MORE", "CALLS FROM GOOGLE."],
    year: "2026",
    industry: "Restaurant",
    place: "Sliema",
    services: ["Google listing", "Website bookings", "Paid social ads", "Ad tracking"],
    summary: ["Calle Bistro is a seafood restaurant in Sliema. OARC improved the Google listing, linked the website to table bookings, ran paid social ads, and added ad tracking. Calls from Google grew 48%. Social ads brought 400 diners to the reservation page and 300 table-booking clicks. 650 people saved one seafood-night post."],
    briefTitle: "From a Sliema search to a table.",
    brief: ["Someone looking for seafood in Sliema had to find the restaurant, see the food, and book without a dead end. The listing, the site and the ads had to be one path, and the ads had to be measured."],
    blocks: [
      { title: "Google, then the phone.", body: ["The Google listing was improved so a local search could become a call. Calls from Google grew 48%. The listing is how diners in Sliema find the restaurant before they see an ad."] },
      { title: "The website books the table.", body: ["The website was linked to table bookings. Paid social brought 300 table-booking clicks and 400 diners to the reservation page. A diner can move from the dish to the booking on the same path."] },
      { title: "Ads, with the numbers kept.", body: ["Paid social ads ran on the seafood posts. Ad tracking and website analytics were added so each euro could be read. 650 people saved one seafood-night post. The aims were views, menu visits, booking clicks and saves."] },
    ],
    grewTitle: "Search, then the ads.",
    grew: ["The listing came first. The booking link, the paid social and the tracking were added so the restaurant could see which diners arrived from search and which arrived from an ad."],
    resultTitle: "The phone, then the booking.",
    resultBody: "Calls from Google grew 48%. Social ads brought 400 diners to the reservation page and 300 table-booking clicks. 650 people saved a seafood-night post.",
    closeTitle: "Sliema search. Booked table.",
    close: ["OARC Digital ran the Google listing, the booking link, the paid social and the tracking for Calle Bistro. The numbers come from the work on this account."],
    moreSlugs: ["kreta", "palino", "louisiana-mama"],
    faq: [
      { q: "What did OARC Digital do for Calle Bistro in Sliema?", a: "OARC Digital improved Calle Bistro’s Google listing, linked the website to table bookings, and ran paid social ads with tracking. Calls from Google grew 48%." },
      { q: "How many diners reached the reservation page?", a: "Social ads brought 400 diners to the reservation page and 300 table-booking clicks. 650 people saved a seafood-night post." },
    ],
  }),
  kreta: page("kreta", {
    headline: ["28% MORE", "TABLES BOOKED."],
    year: "2026",
    industry: "Restaurant",
    place: "Paceville",
    services: ["Google listing", "Menu", "Table bookings", "Photo content"],
    summary: ["Kreta is a Greek grill in Paceville. OARC fixed the Google listing, connected search to the menu and the table bookings, and made the content from Kreta’s own photos. Reservations from Instagram grew 28%. Grill content reached 60,000 local diners. Late-night posts brought 450 people to the menu, and 300 more people used the ordering links."],
    briefTitle: "Greek food in Paceville, easy to book.",
    brief: ["A late search had to find the restaurant, show the grill, and end on a booking or an order. The listing, the menu and the photos had to agree."],
    blocks: [
      { title: "The listing, completed.", body: ["The Google listing was improved and the details people use to find Kreta were fixed. Search, the menu and table bookings were connected, so a Paceville search can finish on a table."] },
      { title: "The grill, from their photos.", body: ["The content was made from Kreta’s own food photos. That content reached 60,000 local diners. Reservations from Instagram grew 28%."] },
      { title: "Late night.", body: ["Late-night posts brought 450 people to the menu. 300 more people used the ordering links. The aims covered grill views, menu taps, booking clicks and saves."] },
    ],
    grewTitle: "Search, menu, then the table.",
    grew: ["The listing was the start. The menu link and the photo content were added so the same diner could find Kreta, see the food, and book."],
    resultTitle: "More reservations. More late orders.",
    resultBody: "Reservations from Instagram grew 28%. Greek grill content reached 60,000 local diners. Late-night posts brought 450 people to the menu. 300 more people used the ordering links.",
    closeTitle: "Paceville. Found, then booked.",
    close: ["OARC Digital fixed the listing and connected search, the menu and the bookings for Kreta, using Kreta’s own photos. The numbers come from the work on this account."],
    moreSlugs: ["calle-bistro", "palino", "ricky-jr-burger"],
    faq: [
      { q: "What did OARC Digital do for Kreta in Paceville?", a: "OARC Digital improved Kreta’s Google listing, connected search to the menu and table bookings, and made content from Kreta’s own photos. Reservations from Instagram grew 28%." },
      { q: "How many people saw the Kreta food posts?", a: "Greek grill content reached 60,000 local diners. Late-night posts brought 450 people to the menu, and 300 more people used the ordering links." },
    ],
  }),
  "louisiana-mama": page("louisiana-mama", {
    headline: ["700 MORE", "MEALS SOLD."],
    year: "2026",
    industry: "Restaurant",
    place: "Malta",
    services: ["Brand and social", "WhatsApp ordering", "Menu", "Food ads"],
    summary: ["Louisiana Mama sells hand-battered chicken, made fresh daily. OARC built the brand and the social posts, set up direct ordering on WhatsApp, and linked the menu and the website to that order. One weekly special sold 700 more meals. WhatsApp menu taps grew 45% from the food videos. Social posts brought 1,500 new visitors to the order menu, and social ads reached 80,000 local food lovers."],
    briefTitle: "The order stays with the kitchen.",
    brief: ["The guest had to see the chicken, open the menu, and order on WhatsApp without an app in the middle. Catering had to be askable from the same place."],
    blocks: [
      { title: "The chicken, posted.", body: ["Brand and social posts show the food. Food videos grew WhatsApp menu taps by 45%. Social ads reached 80,000 local food lovers."] },
      { title: "WhatsApp, direct.", body: ["Direct ordering was set up on WhatsApp. The menu and the website both link to it. Social posts brought 1,500 new visitors to the order menu. The restaurant keeps the order."] },
      { title: "The weekly special.", body: ["One weekly special campaign sold 700 more meals. The aims included video views, menu visits, WhatsApp order starts, catering enquiries, and saves on the sauces and sides."] },
    ],
    grewTitle: "The look, then the order.",
    grew: ["The brand and the posts came first. WhatsApp ordering and the menu links were added so a hungry person could finish on an order, not a dead page."],
    resultTitle: "700 more meals.",
    resultBody: "A weekly special sold 700 more meals. WhatsApp menu taps grew 45%. Social posts brought 1,500 new visitors to the order menu. Social ads reached 80,000 local food lovers.",
    closeTitle: "See it. Order it. Direct.",
    close: ["OARC Digital built the brand, the posts and the WhatsApp ordering for Louisiana Mama. The numbers come from the work on this account."],
    moreSlugs: ["palino", "ricky-jr-burger", "calle-bistro"],
    faq: [
      { q: "What did OARC Digital do for Louisiana Mama?", a: "OARC Digital built the brand and social posts, set up WhatsApp ordering, and linked the menu and website to that order. A weekly special sold 700 more meals." },
      { q: "How do customers order?", a: "They order direct on WhatsApp. Food videos grew WhatsApp menu taps by 45%, and social posts brought 1,500 new visitors to the order menu." },
    ],
  }),
  palino: page("palino", {
    headline: ["28% MORE", "DELIVERY ORDERS."],
    year: "2026",
    industry: "Pizza",
    place: "Żabbar and Sliema",
    services: ["Brand look", "Social posts", "Influencers", "Two-location ads"],
    summary: ["Palino has pizza shops in Żabbar and Sliema. OARC gave both shops one blue-and-white look, made the social posts, worked with food influencers, and ran ads for both locations. Delivery orders grew 28%. Social engagement grew 35%. Influencer posts brought 400 more menu visits, and the work reached 75,000 pizza lovers across the two towns."],
    briefTitle: "Two shops. One Palino.",
    brief: ["Żabbar and Sliema had to look like the same pizza brand, and each ad had to send a customer to the right shop’s order."],
    blocks: [
      { title: "One look, both towns.", body: ["The blue-and-white look is the same in Żabbar and Sliema. A customer who sees a post in one town still recognises the shop in the other."] },
      { title: "Posts and influencers.", body: ["Social posts and food influencers carried the pizza. Social engagement grew 35%. Influencer posts brought 400 more menu visits."] },
      { title: "Ads for both shops.", body: ["Two-location ads grew delivery orders by 28%. The work reached 75,000 pizza lovers in Żabbar and Sliema. Each ad points at the ordering route for the shop it names."] },
    ],
    grewTitle: "The look, then both order links.",
    grew: ["The shared look came first. Posts, influencers and the two-location ads were added so the brand and the order stayed together."],
    resultTitle: "More orders from both shops.",
    resultBody: "Delivery orders grew 28% with two-location ads. Social engagement grew 35%. Influencer posts brought 400 more menu visits. 75,000 pizza lovers were reached in Żabbar and Sliema.",
    closeTitle: "Żabbar and Sliema, one brand.",
    close: ["OARC Digital made the look, the posts, the influencer work and the ads for Palino. The numbers come from the work on this account."],
    moreSlugs: ["ricky-jr-burger", "louisiana-mama", "kreta"],
    faq: [
      { q: "What did OARC Digital do for Palino?", a: "OARC Digital gave the Żabbar and Sliema shops one blue-and-white look, made the social posts, worked with food influencers, and ran ads for both locations. Delivery orders grew 28%." },
      { q: "Did both Palino shops get the same work?", a: "Yes. The look is shared. Ads run for both locations and point to the right ordering route. The posts reached 75,000 pizza lovers across Żabbar and Sliema." },
    ],
  }),
  "ricky-jr-burger": page("ricky-jr-burger", {
    headline: ["700 MORE", "PEOPLE IN THE SHOPS."],
    year: "2026",
    industry: "Burger shops",
    place: "Qormi and St Julian’s",
    services: ["Daily social", "Burger photos", "Reels", "Local ads"],
    summary: ["Ricky Jr has burger shops in Qormi and St Julian’s. OARC posts every day, photographs the burgers, makes the graphics, edits the reels, and runs local ads for both shops. Daily burger reels got 50,000 views. Menu taps from Instagram grew 40%. Local ads brought 700 more people into the two shops, and 500 customers voted on the next burger."],
    briefTitle: "Both shops, every day.",
    brief: ["The feed had to show the burger people would cross a town for, and the ads had to say which shop was closest. Qormi and St Julian’s needed one style so the brand did not split."],
    blocks: [
      { title: "Every day.", body: ["Social posts go out every day. The photos, graphics and reels are made for those posts. Daily burger reels got 50,000 views. Menu taps from Instagram grew 40%."] },
      { title: "Qormi and St Julian’s.", body: ["Both shops share one style. Local ads name the shop. Those ads brought 700 more people to the two shops, and helped people pick the nearer one."] },
      { title: "The vote.", body: ["500 customers voted on the next burger. Weekend visits grew with the local burger videos. The aims were views, saves, menu visits and votes."] },
    ],
    grewTitle: "Daily posts, then the ads.",
    grew: ["The daily photos and reels came first. Local ads for the two shops were added once the feed had a burger worth stopping for."],
    resultTitle: "Views, taps, and the door.",
    resultBody: "Daily burger reels got 50,000 views. Menu taps from Instagram grew 40%. Local ads brought 700 more people to the Qormi and St Julian’s shops. 500 customers voted on the next burger.",
    closeTitle: "The burger, then the nearer shop.",
    close: ["OARC Digital makes the daily posts, photos, reels and local ads for Ricky Jr. The numbers come from the work on this account."],
    moreSlugs: ["palino", "louisiana-mama", "kreta"],
    faq: [
      { q: "What did OARC Digital do for Ricky Jr Burger?", a: "OARC Digital posts for Ricky Jr every day, photographs the burgers, edits the reels, and runs local ads for the Qormi and St Julian’s shops. Local ads brought 700 more people into the shops." },
      { q: "How many people watched the burger reels?", a: "Daily burger reels got 50,000 views. Menu taps from Instagram grew 40%, and 500 customers voted on the next burger." },
    ],
  }),
  pjazza: page("pjazza", {
    headline: ["100 NEW SELLERS.", "500 BUYER CHATS."],
    year: "2026",
    industry: "Live shopping",
    place: "Malta",
    services: ["Marketplace", "Live video", "Buyer chat", "Protected payment"],
    summary: ["PJAZZA is Malta’s live-shopping marketplace, built by OARC Digital. A buyer watches the product live, asks the seller a question, and pays on a protected path. Category campaigns brought 100 new sellers. 500 buyers started a chat. 2,000 local shoppers visited marketplace pages, and social clips grew live-session visits by 40%."],
    briefTitle: "See it live. Ask. Then pay.",
    brief: ["A photo cannot answer a question. The marketplace had to let a buyer watch, talk to the seller, and pay without leaving the path. It lists 12 sectors and more than 24 businesses."],
    blocks: [
      { title: "Built, end to end.", body: ["OARC researched, designed, coded and launched PJAZZA. One path runs from the live video to the chat to the protected payment."] },
      { title: "Sellers and buyers.", body: ["Category campaigns brought 100 new sellers onto the marketplace. 500 buyers started a chat with a seller. 2,000 local shoppers visited the marketplace pages."] },
      { title: "The live session.", body: ["Social clips grew live-session visits by 40%. The aims were views on live-shopping videos, marketplace visits, buyer-seller chats, and seller-contact taps."] },
    ],
    grewTitle: "The platform, then the campaigns.",
    grew: ["The marketplace was built first. The category campaigns and social clips were added to bring sellers and buyers onto a platform that could already take the chat and the payment."],
    resultTitle: "Sellers in. Buyers talking.",
    resultBody: "100 new sellers joined. 500 buyers started a chat. 2,000 local shoppers visited marketplace pages. Live-session visits grew 40%.",
    closeTitle: "Watch, ask, pay.",
    close: ["PJAZZA is an OARC Digital product. The numbers come from the marketplace and the campaigns that filled it."],
    moreSlugs: ["data-foundation", "live-context", "meridian-retail-response"],
    faq: [
      { q: "What is PJAZZA?", a: "PJAZZA is Malta’s live-shopping marketplace, built by OARC Digital. A buyer watches a product live, asks the seller a question, and pays on a protected path." },
      { q: "What results did the PJAZZA campaigns produce?", a: "Category campaigns brought 100 new sellers. 500 buyers started a chat. 2,000 local shoppers visited marketplace pages, and live-session visits grew 40%." },
    ],
  }),
  "data-foundation": page("data-foundation", {
    headline: ["25% FEWER", "ORDER ERRORS."],
    year: "2026",
    industry: "Product data",
    place: "Malta",
    services: ["Data clean-up", "One product view", "Order checks"],
    summary: ["A national distributor’s product data did not agree from system to system. OARC built a clean-up that brought more than 10,000 product records into one view. Order errors fell 25%. Fulfilment delays fell 30%. Planners find a product record 3 times faster."],
    briefTitle: "One product. One record.",
    brief: ["Orders were going wrong because the same product was saved differently in different systems. The job was one trusted view, and checks that catch a bad record before it delays an order."],
    blocks: [
      { title: "10,000 records, one view.", body: ["More than 10,000 product records were brought into one clear view. Time spent checking records fell 35%. Time spent matching customer and supplier records fell 40%."] },
      { title: "Errors, before the order.", body: ["Order errors fell 25%. Fulfilment delays fell 30%. Staff catch bad data 45% sooner. Supplier follow-up checks fell 20%."] },
      { title: "Faster decisions.", body: ["Planners find product records 3 times faster and make stock decisions 40% faster. Repeat data-cleanup work fell 35%."] },
    ],
    grewTitle: "Clean the record. Then trust it.",
    grew: ["The first job was one view of the product file. The checks and the faster lookups were built on that view, so a planner could act without opening a second system."],
    resultTitle: "Fewer errors. Fewer delays.",
    resultBody: "Order errors fell 25%. Fulfilment delays fell 30%. More than 10,000 product records sit in one view. Planners find a record 3 times faster.",
    closeTitle: "The order can trust the record.",
    close: ["OARC Digital built the data clean-up for this distributor. The numbers come from the work on this account."],
    moreSlugs: ["live-context", "meridian-retail-response", "cobalt-decision-thread"],
    faq: [
      { q: "What did OARC Digital build for the distributor?", a: "OARC Digital built a data clean-up that brought more than 10,000 product records into one view. Order errors fell 25% and fulfilment delays fell 30%." },
      { q: "How fast can a planner find a product record?", a: "Planners find product records 3 times faster, and make stock decisions 40% faster. Staff catch bad data 45% sooner." },
    ],
  }),
  "live-context": page("live-context", {
    headline: ["LIVE SCORES.", "35% FASTER."],
    year: "2026",
    industry: "Sports app",
    place: "Malta",
    services: ["App redesign", "Live match pages", "Phone layout"],
    summary: ["OARC redesigned a live sports app so the score comes first on any phone. Fans find live scores 35% faster. Match details are 40% easier to read on a phone, and the taps needed to find an update fell 30%."],
    briefTitle: "The score, before anything else.",
    brief: ["During a match a fan has a moment, not a minute. The screen had to give the score, the commentary and the next detail without a hunt."],
    blocks: [
      { title: "Score first.", body: ["The live page leads with the score. Fans find live scores 35% faster and find key match details 25% faster. Time spent searching for a live update fell 35%."] },
      { title: "A phone, not a desktop.", body: ["Match details are 40% easier to read on a phone. The taps to an update fell 30%. The next match detail is twice as easy to find. 20% more fans can follow the game at a glance."] },
      { title: "They come back.", body: ["Fans return to live updates 30% more often. Scores, commentary and match context sit in one view, and the next useful update is one tap away."] },
    ],
    grewTitle: "The score, then the rest.",
    grew: ["The redesign started with the score. Commentary and context were placed around it so a fan never lost the game to find a detail."],
    resultTitle: "Faster to the score.",
    resultBody: "Fans find live scores 35% faster. Match details are 40% easier to read on a phone. Taps to an update fell 30%. Fans return to live updates 30% more often.",
    closeTitle: "One glance. The score.",
    close: ["OARC Digital redesigned the live match pages. The numbers come from the work on this account."],
    moreSlugs: ["data-foundation", "fanline-live-ritual", "arena-one-regional-signal"],
    faq: [
      { q: "What did OARC Digital change on the live sports app?", a: "OARC Digital redesigned the live match pages so the score comes first on a phone. Fans find live scores 35% faster." },
      { q: "Is the match page easier on a small screen?", a: "Match details are 40% easier to read on a phone. The taps needed to find an update fell 30%, and fans return to live updates 30% more often." },
    ],
  }),
};
