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
          { name: "Helldivers Mobilize!", location: "Acquisition Center", tip: null },
          { name: "Steeled Veterans", location: "Acquisition Center", tip: null },
          { name: "Cutting Edge", location: "Acquisition Center", tip: null },
          { name: "Democratic Detonation", location: "Acquisition Center", tip: null },
          { name: "Polar Patriots", location: "Acquisition Center", tip: null },
          { name: "Viper Commandos", location: "Acquisition Center", tip: null },
          { name: "Freedom's Flame", location: "Acquisition Center", tip: null },
          { name: "Chemical Agents", location: "Acquisition Center", tip: null },
          { name: "Truth Enforcers", location: "Acquisition Center", tip: null },
          { name: "Urban Legends", location: "Acquisition Center", tip: null },
          { name: "Servants of Freedom", location: "Acquisition Center", tip: null },
          { name: "Borderline Justice", location: "Acquisition Center", tip: null },
          { name: "Masters of Ceremony", location: "Acquisition Center", tip: null },
          { name: "Force of Law", location: "Acquisition Center", tip: null },
          { name: "Control Group", location: "Acquisition Center", tip: null },
          { name: "Dust Devils", location: "Acquisition Center", tip: null },
          { name: "Python Commandos", location: "Acquisition Center", tip: null },
          { name: "Redacted Regiment", location: "Acquisition Center", tip: null },
          { name: "Siege Breakers", location: "Acquisition Center", tip: null },
          { name: "Obedient Democracy Support Troopers", location: "Acquisition Center", tip: null },
          { name: "Righteous Revenants", location: "Acquisition Center", tip: null },
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
