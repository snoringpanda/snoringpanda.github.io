// ============================================================
// PURRGRESS'S COMPLETIONIST TRACKER — GAME DATA FILE
// ============================================================
// HOW TO ADD A NEW GAME:
// 1. Copy the TEMPLATE block at the bottom of this file
// 2. Paste it above the closing bracket
// 3. Fill in your game data
// 4. Save the file and refresh the site
// ============================================================

const GAMES = {

  // ============================================================
  // EXAMPLE GAME 1 — Hollow Knight (you can edit or remove this)
  // ============================================================
  "hollow-knight": {
    title: "Hollow Knight",
    cover: "🪲",          // Emoji shown on the game card
    difficulty: "8/10",
    timeEstimate: "60–80 hrs",
    hardestPart: "Pantheon of Hallownest",

    // ⚠ MISSABLES — things that can be permanently locked out
    missables: [
      "Grimmchild vs Carefree Melody — choose one, locks out the other charm permanently",
      "Nailsmith — can be killed or spared after final nail upgrade. Spare him for the secret ending scene",
      "Zote — must be saved in Greenpath AND Deepnest or he disappears forever",
    ],

    // 🧭 OPTIMAL COMPLETION ORDER — your recommended route
    completionOrder: [
      "Clear the base game story first without worrying about completion",
      "Get all nail upgrades and pale ore before tackling dream bosses",
      "Complete Grimm Troupe content before Godhome",
      "Collect all grubs, charms, and mask/vessel fragments",
      "Tackle the Pantheons last — Pantheon 5 is the final wall",
    ],

    // 📋 CATEGORIES — each category becomes a checklist section
    // Fields per item:
    //   name     = item name (required)
    //   location = where to find it or how to get it (required)
    //   tip      = your personal tip (optional, use null if none)
    categories: [
      {
        name: "Bosses",
        items: [
          { name: "False Knight", location: "Forgotten Crossroads", tip: null },
          { name: "Hornet Protector", location: "Greenpath", tip: null },
          { name: "Soul Master", location: "Soul Sanctum", tip: "Learn to dodge the ground slam phase 2" },
          { name: "Dung Defender", location: "Royal Waterways", tip: null },
          { name: "Broken Vessel", location: "Ancient Basin", tip: null },
          { name: "Nosk", location: "Deepnest", tip: "Follow your clone — the path loops around" },
          { name: "Mantis Lords", location: "Fungal Wastes", tip: "Best early fight to learn parrying" },
          { name: "The Hollow Knight", location: "Temple of the Black Egg", tip: null },
          { name: "Nightmare King Grimm", location: "Grimm Troupe DLC", tip: "Hardest base-game boss. Learn the pufferfish attack timing" },
          { name: "Absolute Radiance", location: "Pantheon of Hallownest", tip: "Final boss. Practice in Hall of Gods first" },
        ]
      },
      {
        name: "Charms",
        items: [
          { name: "Wayward Compass", location: "Iselda's Shop, Dirtmouth", tip: null },
          { name: "Gathering Swarm", location: "Sly's Shop, Dirtmouth", tip: null },
          { name: "Stalwart Shell", location: "Sly's Shop", tip: null },
          { name: "Soul Catcher", location: "Forgotten Crossroads, above Elder Hu", tip: null },
          { name: "Shaman Stone", location: "Forgotten Crossroads, near Ancestral Mound", tip: "One of the best charms in the game" },
          { name: "Mark of Pride", location: "Mantis Village, after Mantis Lords", tip: null },
          { name: "Sharp Shadow", location: "Deepnest", tip: "Requires Shade Cloak" },
          { name: "Grimmchild / Carefree Melody", location: "Grimm Troupe DLC", tip: "Mutually exclusive — this is a missable choice" },
        ]
      },
      {
        name: "Grubs",
        items: [
          { name: "Grub 1", location: "Forgotten Crossroads — near Gruzmother", tip: null },
          { name: "Grub 2", location: "Forgotten Crossroads — behind breakable wall", tip: null },
          { name: "Grub 3", location: "Greenpath — above Stag Station", tip: null },
          { name: "Grub 4", location: "Greenpath — near acid pool, requires Isma's Tear", tip: null },
          { name: "Grub 5", location: "Crystal Peak — above Crystallized Mound", tip: "Easy to miss, requires Crystal Heart" },
          { name: "Grub 6", location: "Deepnest — near the hot spring", tip: "One of these is Grubmimics — be ready" },
        ]
      },
      {
        name: "Upgrades",
        items: [
          { name: "Mothwing Cloak (Dash)", location: "Greenpath, after Hornet", tip: null },
          { name: "Mantis Claw (Wall Jump)", location: "Mantis Village", tip: null },
          { name: "Crystal Heart (Super Dash)", location: "Crystal Peak", tip: null },
          { name: "Isma's Tear (Acid Immunity)", location: "Royal Waterways", tip: null },
          { name: "Monarch Wings (Double Jump)", location: "Ancient Basin", tip: null },
          { name: "Shade Cloak (Shadow Dash)", location: "Abyss", tip: null },
          { name: "Dream Nail", location: "Resting Grounds", tip: null },
          { name: "Awoken Dream Nail", location: "Collect 1800 Essence", tip: null },
        ]
      },
    ],

    // 🖊 YOUR COMPLETION STORY — personal reflection (2-3 paragraphs)
    story: "Write your personal story here. When you played it, how long it took, what almost made you quit, and why finishing it was worth it. This is what makes your tracker different from a wiki.",
  },

  // ============================================================
  // EXAMPLE GAME 2 — Celeste (you can edit or remove this)
  // ============================================================
  "celeste": {
    title: "Celeste",
    cover: "🍓",
    difficulty: "9/10",
    timeEstimate: "40–60 hrs",
    hardestPart: "Chapter 9 Farewell golden strawberry",

    missables: [
      "No permanently missable items — all chapters can be replayed",
    ],

    completionOrder: [
      "Beat all A-sides (main chapters) first for the story",
      "Collect all red strawberries on A-sides",
      "Complete all B-sides (unlocked via cassette tapes)",
      "Complete all C-sides (unlocked after all B-sides)",
      "Tackle Chapter 9 Farewell",
      "Golden strawberries last — deathless runs of each chapter",
    ],

    categories: [
      {
        name: "A-Side Strawberries",
        items: [
          { name: "Chapter 1 — Forsaken City (all 20)", location: "Throughout chapter", tip: null },
          { name: "Chapter 2 — Old Site (all 18)", location: "Throughout chapter", tip: null },
          { name: "Chapter 3 — Celestial Resort (all 25)", location: "Throughout chapter", tip: "Longest chapter — some are well hidden" },
          { name: "Chapter 4 — Golden Ridge (all 29)", location: "Throughout chapter", tip: null },
          { name: "Chapter 5 — Mirror Temple (all 31)", location: "Throughout chapter", tip: null },
          { name: "Chapter 7 — Summit (all 47)", location: "Throughout chapter", tip: null },
        ]
      },
      {
        name: "B-Sides",
        items: [
          { name: "1B — Forsaken City", location: "Cassette tape in Ch.1", tip: null },
          { name: "2B — Old Site", location: "Cassette tape in Ch.2", tip: null },
          { name: "3B — Celestial Resort", location: "Cassette tape in Ch.3", tip: null },
          { name: "4B — Golden Ridge", location: "Cassette tape in Ch.4", tip: null },
          { name: "5B — Mirror Temple", location: "Cassette tape in Ch.5", tip: null },
          { name: "6B — Reflection", location: "Cassette tape in Ch.6", tip: null },
          { name: "7B — Summit", location: "Cassette tape in Ch.7", tip: "Major difficulty spike" },
          { name: "8B — Core", location: "Cassette tape in Ch.8", tip: null },
        ]
      },
      {
        name: "C-Sides",
        items: [
          { name: "1C — Forsaken City", location: "Unlocked after all B-sides", tip: "Short but brutal" },
          { name: "2C — Old Site", location: "Unlocked after all B-sides", tip: null },
          { name: "3C — Celestial Resort", location: "Unlocked after all B-sides", tip: null },
          { name: "7C — Summit", location: "Unlocked after all B-sides", tip: null },
          { name: "8C — Core", location: "Unlocked after all B-sides", tip: null },
        ]
      },
      {
        name: "Crystal Hearts",
        items: [
          { name: "Chapter 1 Heart", location: "Hidden path at end of bird dash tutorial", tip: null },
          { name: "Chapter 2 Heart", location: "Interaction puzzle in mirror area", tip: null },
          { name: "Chapter 3 Heart", location: "Hidden behind Mr. Oshiro chase", tip: null },
          { name: "Chapter 4 Heart", location: "Precise floating platform navigation", tip: null },
          { name: "Chapter 5 Heart", location: "Behind Theo puzzle section", tip: null },
          { name: "Chapter 7 Heart", location: "Gembird collectible across summit", tip: null },
          { name: "Chapter 8 Heart", location: "Core completion", tip: null },
        ]
      },
      {
        name: "Golden Strawberries",
        items: [
          { name: "1A Golden", location: "Deathless run of Chapter 1 A-side", tip: "Start here — easiest golden" },
          { name: "2A Golden", location: "Deathless run of Chapter 2", tip: null },
          { name: "3A Golden", location: "Deathless run of Chapter 3", tip: "Long chapter. Patience." },
          { name: "9 Golden (Farewell)", location: "Deathless run of Chapter 9", tip: "The Everest. Most players never get this." },
        ]
      },
    ],

    story: "Your personal completion story for Celeste goes here. The journey through golden strawberries, what the game's message about anxiety and persistence meant to you, and how it connects to the completionist philosophy.",
  },

    "placeholder": {
    title: "placeholder",
    cover: "🎮",
    difficulty: "?/10",
    timeEstimate: "??–?? hrs",
    hardestPart: "Describe the hardest part",

    missables: [
      "First missable thing and what to do about it",
      "Second missable thing",
      // Add more or use just: "No permanently missable items"
    ],

    completionOrder: [
      "Step 1 — what to do first",
      "Step 2 — what to do next",
      "Step 3 — and so on",
    ],

        categories: [
      {
        name: "Category Name",
        items: [
          { name: "Item Name", location: "Where / how to get it", tip: null },
          { name: "Item Name", location: "Where / how to get it", tip: "Your personal tip here" },
          // Add as many items as needed
        ]
      },
      {
        name: "Another Category",
        items: [
          { name: "Item Name", location: "Where / how to get it", tip: null },
        ]
      },
      // Add as many categories as needed
    ],

    story: "Your personal completion story goes here.",
  },
  
};


// ============================================================
// 📋 TEMPLATE — COPY EVERYTHING BELOW THIS LINE TO ADD A GAME
// ============================================================
//
// STEP 1: Copy from the line that starts with "game-id-here"
//         to the closing },
// STEP 2: Paste it ABOVE the final closing }; of the GAMES object
// STEP 3: Change "game-id-here" to a unique lowercase-dash id
// STEP 4: Fill in all the fields
// STEP 5: Add as many categories and items as you need
// STEP 6: Save and refresh
//
// ─── START COPY ───
//
//  "game-id-here": {
//    title: "Game Title Here",
//    cover: "🎮",
//    difficulty: "?/10",
//    timeEstimate: "??–?? hrs",
//    hardestPart: "Describe the hardest part",
//
//    missables: [
//      "First missable thing and what to do about it",
//      "Second missable thing",
//      // Add more or use just: "No permanently missable items"
//    ],
//
//    completionOrder: [
//      "Step 1 — what to do first",
//      "Step 2 — what to do next",
//      "Step 3 — and so on",
//    ],
//
//    categories: [
//      {
//        name: "Category Name",
//        items: [
//          { name: "Item Name", location: "Where / how to get it", tip: null },
//          { name: "Item Name", location: "Where / how to get it", tip: "Your personal tip here" },
//          // Add as many items as needed
//        ]
//      },
//      {
//        name: "Another Category",
//        items: [
//          { name: "Item Name", location: "Where / how to get it", tip: null },
//        ]
//      },
//      // Add as many categories as needed
//    ],
//
//    story: "Your personal completion story goes here.",
//  },
//
// ─── END COPY ───
