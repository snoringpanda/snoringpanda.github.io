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
  // PLACEHOLDER
  // ============================================================

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

  // ============================================================
  // HELLDIVERS 2
  // ============================================================

    "helldivers-2": {
    title: "Helldivers 2",
    cover: "🫡",
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
        name: "Weapons Levels",
        items: [
          { name: "Item Name", location: "Where / how to get it", tip: null },
          { name: "Item Name", location: "Where / how to get it", tip: "Your personal tip here" },
          // Add as many items as needed
        ]
      },
      {
        name: "Weapons Patterns",
        items: [
          { name: "Item Name", location: "Where / how to get it", tip: null },
        ]
      },
      {
        name: "Weapons Attachments",
        items: [
          { name: "Item Name", location: "Where / how to get it", tip: null },
        ]
      },
      {
        name: "Warbonds",
        items: [
          { name: "Item Name", location: "Where / how to get it", tip: null },
        ]
      },
      {
        name: "Achievements",
        items: [
          { name: "Item Name", location: "Where / how to get it", tip: null },
        ]
      },
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
