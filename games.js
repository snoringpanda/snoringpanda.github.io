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
    lastUpdated: "February 13, 2026",
    gameVersion: "1.0",

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
    lastUpdated: "February 13, 2026",
    gameVersion: "1.0",

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
          { name: "AR-23 Liberator", location: "WIP", tip: null },
          { name: "AR-23P Liberator Penetrator", location: "WIP", tip: null },
          { name: "AR-23C Liberator Concussive", location: "WIP", tip: null },
          { name: "StA-52 Assault Rifle", location: "WIP", tip: null },
          { name: "AR-32 Pacifier", location: "WIP", tip: null },
          { name: "AR-2 Coyote", location: "WIP", tip: null },
          { name: "MA5C Assault Rifle", location: "WIP", tip: null },
          { name: "AR-23A Liberator Carbine", location: "WIP", tip: null },
          { name: "AR-61 Tenderizer", location: "WIP", tip: null },
          { name: "BR-14 Adjudicator", location: "WIP", tip: null },
          { name: "AR/GL-21 One-Two", location: "WIP", tip: null },
          { name: "AR-59 Suppressor", location: "WIP", tip: null },
          { name: "R-2 Amendment", location: "WIP", tip: null },
          { name: "R-2124 Constitution", location: "WIP", tip: null },
          { name: "R-6 Deadeye", location: "WIP", tip: null },
          { name: "R-63 Diligence", location: "WIP", tip: null },
          { name: "R-63CS Diligence Counter Sniper", location: "WIP", tip: null },
          { name: "R-72 Censor", location: "WIP", tip: null },
          { name: "MP-98 Knight", location: "WIP", tip: null },
          { name: "StA-11 SMG", location: "WIP", tip: null },
          { name: "M7S SMG", location: "WIP", tip: null },
          { name: "SMG-32 Reprimand", location: "WIP", tip: null },
          { name: "SMG-37 Defender", location: "WIP", tip: null },
          { name: "SMG-72 Pummeler", location: "WIP", tip: null },
          { name: "SG-8 Punisher", location: "WIP", tip: null },
          { name: "SG-8S Slugger", location: "WIP", tip: null },
          { name: "SG-20 Halt", location: "WIP", tip: null },
          { name: "SG-451 Cookout", location: "WIP", tip: null },
          { name: "DBS-2 Double Freedom", location: "WIP", tip: null },
          { name: "M90A Shotgun", location: "WIP", tip: null },
          { name: "SG-225 Breaker", location: "WIP", tip: null },
          { name: "SG-225SP Breaker Spray&Pray", location: "WIP", tip: null },
          { name: "SG-225IE Breaker Incendiary", location: "WIP", tip: null },
          { name: "CB-9 Exploding Crossbow", location: "WIP", tip: null },
          { name: "R-36 Eruptor", location: "WIP", tip: null },
          { name: "SG-8P Punisher Plasma", location: "WIP", tip: null },
          { name: "PLAS-39 Accelerator Rifle", location: "WIP", tip: null },
          { name: "ARC-12 Blitzer", location: "WIP", tip: null },
          { name: "LAS-5 Scythe", location: "WIP", tip: null },
          { name: "LAS-16 Sickle", location: "WIP", tip: null },
          { name: "LAS-17 Double-Edge Sickle", location: "WIP", tip: null },
          { name: "PLAS-1 Scorcher", location: "WIP", tip: null },
          { name: "PLAS-101 Purifier", location: "WIP", tip: null },
          { name: "LAS-16 Trident", location: "WIP", tip: null },
          { name: "VG-70 Variable", location: "WIP", tip: null },
          { name: "FLAM-66 Torcher", location: "WIP", tip: null },
          { name: "JAR-5 Dominator", location: "WIP", tip: null },
        ]
      },
      {
        name: "Weapons Patterns",
        items: [
          { name: "AR-23 Liberator", location: "WIP", tip: null },
          { name: "AR-23P Liberator Penetrator", location: "WIP", tip: null },
          { name: "AR-23C Liberator Concussive", location: "WIP", tip: null },
          { name: "StA-52 Assault Rifle", location: "WIP", tip: null },
          { name: "AR-32 Pacifier", location: "WIP", tip: null },
          { name: "AR-2 Coyote", location: "WIP", tip: null },
          { name: "MA5C Assault Rifle", location: "WIP", tip: null },
          { name: "AR-23A Liberator Carbine", location: "WIP", tip: null },
          { name: "AR-61 Tenderizer", location: "WIP", tip: null },
          { name: "BR-14 Adjudicator", location: "WIP", tip: null },
          { name: "AR/GL-21 One-Two", location: "WIP", tip: null },
          { name: "AR-59 Suppressor", location: "WIP", tip: null },
          { name: "R-2 Amendment", location: "WIP", tip: null },
          { name: "R-2124 Constitution", location: "WIP", tip: null },
          { name: "R-6 Deadeye", location: "WIP", tip: null },
          { name: "R-63 Diligence", location: "WIP", tip: null },
          { name: "R-63CS Diligence Counter Sniper", location: "WIP", tip: null },
          { name: "R-72 Censor", location: "WIP", tip: null },
          { name: "MP-98 Knight", location: "WIP", tip: null },
          { name: "StA-11 SMG", location: "WIP", tip: null },
          { name: "M7S SMG", location: "WIP", tip: null },
          { name: "SMG-32 Reprimand", location: "WIP", tip: null },
          { name: "SMG-37 Defender", location: "WIP", tip: null },
          { name: "SMG-72 Pummeler", location: "WIP", tip: null },
          { name: "SG-8 Punisher", location: "WIP", tip: null },
          { name: "SG-8S Slugger", location: "WIP", tip: null },
          { name: "SG-20 Halt", location: "WIP", tip: null },
          { name: "SG-451 Cookout", location: "WIP", tip: null },
          { name: "DBS-2 Double Freedom", location: "WIP", tip: null },
          { name: "M90A Shotgun", location: "WIP", tip: null },
          { name: "SG-225 Breaker", location: "WIP", tip: null },
          { name: "SG-225SP Breaker Spray&Pray", location: "WIP", tip: null },
          { name: "SG-225IE Breaker Incendiary", location: "WIP", tip: null },
          { name: "CB-9 Exploding Crossbow", location: "WIP", tip: null },
          { name: "R-36 Eruptor", location: "WIP", tip: null },
          { name: "SG-8P Punisher Plasma", location: "WIP", tip: null },
          { name: "PLAS-39 Accelerator Rifle", location: "WIP", tip: null },
          { name: "ARC-12 Blitzer", location: "WIP", tip: null },
          { name: "LAS-5 Scythe", location: "WIP", tip: null },
          { name: "LAS-16 Sickle", location: "WIP", tip: null },
          { name: "LAS-17 Double-Edge Sickle", location: "WIP", tip: null },
          { name: "PLAS-1 Scorcher", location: "WIP", tip: null },
          { name: "PLAS-101 Purifier", location: "WIP", tip: null },
          { name: "LAS-16 Trident", location: "WIP", tip: null },
          { name: "VG-70 Variable", location: "WIP", tip: null },
          { name: "FLAM-66 Torcher", location: "WIP", tip: null },
          { name: "JAR-5 Dominator", location: "WIP", tip: null },
        ]
      },
      {
        name: "Weapons Attachments",
        items: [
          { name: "AR-23 Liberator", location: "WIP", tip: null },
          { name: "AR-23P Liberator Penetrator", location: "WIP", tip: null },
          { name: "AR-23C Liberator Concussive", location: "WIP", tip: null },
          { name: "StA-52 Assault Rifle", location: "WIP", tip: null },
          { name: "AR-32 Pacifier", location: "WIP", tip: null },
          { name: "AR-2 Coyote", location: "WIP", tip: null },
          { name: "MA5C Assault Rifle", location: "WIP", tip: null },
          { name: "AR-23A Liberator Carbine", location: "WIP", tip: null },
          { name: "AR-61 Tenderizer", location: "WIP", tip: null },
          { name: "BR-14 Adjudicator", location: "WIP", tip: null },
          { name: "AR/GL-21 One-Two", location: "WIP", tip: null },
          { name: "AR-59 Suppressor", location: "WIP", tip: null },
          { name: "R-2 Amendment", location: "WIP", tip: null },
          { name: "R-2124 Constitution", location: "WIP", tip: null },
          { name: "R-6 Deadeye", location: "WIP", tip: null },
          { name: "R-63 Diligence", location: "WIP", tip: null },
          { name: "R-63CS Diligence Counter Sniper", location: "WIP", tip: null },
          { name: "R-72 Censor", location: "WIP", tip: null },
          { name: "MP-98 Knight", location: "WIP", tip: null },
          { name: "StA-11 SMG", location: "WIP", tip: null },
          { name: "M7S SMG", location: "WIP", tip: null },
          { name: "SMG-32 Reprimand", location: "WIP", tip: null },
          { name: "SMG-37 Defender", location: "WIP", tip: null },
          { name: "SMG-72 Pummeler", location: "WIP", tip: null },
          { name: "SG-8 Punisher", location: "WIP", tip: null },
          { name: "SG-8S Slugger", location: "WIP", tip: null },
          { name: "SG-20 Halt", location: "WIP", tip: null },
          { name: "SG-451 Cookout", location: "WIP", tip: null },
          { name: "DBS-2 Double Freedom", location: "WIP", tip: null },
          { name: "M90A Shotgun", location: "WIP", tip: null },
          { name: "SG-225 Breaker", location: "WIP", tip: null },
          { name: "SG-225SP Breaker Spray&Pray", location: "WIP", tip: null },
          { name: "SG-225IE Breaker Incendiary", location: "WIP", tip: null },
          { name: "CB-9 Exploding Crossbow", location: "WIP", tip: null },
          { name: "R-36 Eruptor", location: "WIP", tip: null },
          { name: "SG-8P Punisher Plasma", location: "WIP", tip: null },
          { name: "PLAS-39 Accelerator Rifle", location: "WIP", tip: null },
          { name: "ARC-12 Blitzer", location: "WIP", tip: null },
          { name: "LAS-5 Scythe", location: "WIP", tip: null },
          { name: "LAS-16 Sickle", location: "WIP", tip: null },
          { name: "LAS-17 Double-Edge Sickle", location: "WIP", tip: null },
          { name: "PLAS-1 Scorcher", location: "WIP", tip: null },
          { name: "PLAS-101 Purifier", location: "WIP", tip: null },
          { name: "LAS-16 Trident", location: "WIP", tip: null },
          { name: "VG-70 Variable", location: "WIP", tip: null },
          { name: "FLAM-66 Torcher", location: "WIP", tip: null },
          { name: "JAR-5 Dominator", location: "WIP", tip: null },
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
          { name: "The Epitome of Super Earth", location: "WIP", tip: "Playstation exclusive! You would get this after getting all achievements!" },
          { name: "Hell Dive", location: "WIP", tip: null },
          { name: "Hold my primary, I'm going in!", location: "WIP", tip: null },
          { name: "Gone in 360 seconds!", location: "WIP", tip: null },
          { name: "Caught them by Supplies!", location: "WIP", tip: null },
          { name: "Samples are a diver's best friend", location: "WIP", tip: null },
          { name: "Doing your part", location: "WIP", tip: null },
          { name: "It's the only way to be sure…", location: "WIP", tip: null },
          { name: "For the greater good!", location: "WIP", tip: null },
          { name: "Kill it with fire!", location: "WIP", tip: null },
          { name: "Get some!", location: "WIP", tip: null },
          { name: "That which does not kill you…", location: "WIP", tip: null },
          { name: "The power of Democracy", location: "WIP", tip: null },
          { name: "Fully operational", location: "WIP", tip: null },
          { name: "Ship it!", location: "WIP", tip: null },
          { name: "Nothing is bigger than Freedom", location: "WIP", tip: null },
          { name: "The taller they are…", location: "WIP", tip: null },
          { name: "They don't call it Tacticool for nothin'", location: "WIP", tip: null },
          { name: "Let's call it a draw", location: "WIP", tip: null },
          { name: "Cool guys don't loo- AAAAH!", location: "WIP", tip: null },
          { name: "Hot Potato!", location: "WIP", tip: null },
          { name: "Bot Scrapper", location: "WIP", tip: null },
          { name: "Bug Stomper", location: "WIP", tip: null },
          { name: "Extractinating the Countryside", location: "WIP", tip: null },
          { name: "Patriot", location: "WIP", tip: null },
          { name: "Hold My Liber-tea!", location: "WIP", tip: null },
          { name: "Eat This!", location: "WIP", tip: null },
          { name: "Democracy ain't done with you yet", location: "WIP", tip: null },
          { name: "Promote Synergy", location: "WIP", tip: null },
          { name: "Strapping young lad", location: "WIP", tip: null },
          { name: "In the nick of time", location: "WIP", tip: null },
          { name: "The Real Deal", location: "WIP", tip: null },
          { name: "The long arm of Justice", location: "WIP", tip: null },
          { name: "Science is done by quantity", location: "WIP", tip: null },
          { name: "They mostly come at night…", location: "WIP", tip: null },
          { name: "Spread Managed Democracy", location: "WIP", tip: null },
          { name: "Extractamundo!", location: "WIP", tip: "Hidden Achievement!" },
          { name: "Job's done!", location: "WIP", tip: "Hidden Achievement!" },
          { name: "Stalking is illegal", location: "WIP", tip: "Hidden Achievement!" },
        ]
      },
      {
        name: "Ship Module Upgrades",
        items: [
          { name: "Patriotic Administration Center - Donation Access License", location: "WIP", tip: null },
          { name: "Patriotic Administration Center - Streamlined Request Process", location: "WIP", tip: null },
          { name: "Patriotic Administration Center - Hand Carts", location: "WIP", tip: null },
          { name: "Patriotic Administration Center - Superior Packing Methodology", location: "WIP", tip: null },
          { name: "Patriotic Administration Center - Payroll Management System", location: "WIP", tip: null },
          { name: "Orbital Cannons - Exploding Shrapnel", location: "WIP", tip: null },
          { name: "Orbital Cannons - More Guns", location: "WIP", tip: null },
          { name: "Orbital Cannons - Zero-G Breech Loading", location: "WIP", tip: null },
          { name: "Orbital Cannons - Atmospheric Monitoring", location: "WIP", tip: null },
          { name: "Orbital Cannons - High-Density Explosives", location: "WIP", tip: null },
          { name: "Hangar - Liquid-Ventilated Cockpit", location: "WIP", tip: null },
          { name: "Hangar - Pit Crew Hazard Pay", location: "WIP", tip: null },
          { name: "Hangar - Expanded Weapons Bay", location: "WIP", tip: null },
          { name: "Hangar - XXL Weapons Bay", location: "WIP", tip: null },
          { name: "Hangar - Advanced Crew Training", location: "WIP", tip: null },
          { name: "Bridge - Targeting Software Upgrade", location: "WIP", tip: null },
          { name: "Bridge - Nuclear Radar", location: "WIP", tip: null },
          { name: "Bridge - Power Steering", location: "WIP", tip: null },
          { name: "Bridge - Enhanced Combustion", location: "WIP", tip: null },
          { name: "Bridge - Morale Augmentation", location: "WIP", tip: null },
          { name: "Engineering Bay - Synthetic Supplementation", location: "WIP", tip: null },
          { name: "Engineering Bay - Advanced Construction", location: "WIP", tip: null },
          { name: "Engineering Bay - Rapid Launch System", location: "WIP", tip: null },
          { name: "Engineering Bay - Circuit Expansion", location: "WIP", tip: null },
          { name: "Engineering Bay - Streamlined Launch Process", location: "WIP", tip: null },
          { name: "Robotics Workshop - Dynamic Tracking", location: "WIP", tip: null },
          { name: "Robotics Workshop - Shock Absorption Gel", location: "WIP", tip: null },
          { name: "Robotics Workshop - High-Quality Lubricant", location: "WIP", tip: null },
          { name: "Robotics Workshop - Blast Absorption", location: "WIP", tip: null },
          { name: "Robotics Workshop - Cross-Platform Compatibility", location: "WIP", tip: null },
        ]
      },
      {
        name: "Stratagems",
        items: [
          { name: "MG-43 Machine Gun", location: "WIP", tip: null },
          { name: "APW-1 Anti-Materiel Rifle", location: "WIP", tip: null },
          { name: "M-105 Stalwart", location: "WIP", tip: null },
          { name: "EAT-17 Expendable Anti-Tank", location: "WIP", tip: null },
          { name: "GR-8 Recoilless Rifle", location: "WIP", tip: null },
          { name: "FLAM-40 Flamethrower", location: "WIP", tip: null },
          { name: "AC-8 Autocannon", location: "WIP", tip: null },
          { name: "MG-206 Heavy Machine Gun", location: "WIP", tip: null },
          { name: "RL-77 Airburst Rocket Launcher", location: "WIP", tip: null },
          { name: "MLS-4X Commando	", location: "WIP", tip: null },
          { name: "RS-422 Railgun", location: "WIP", tip: null },
          { name: "FAF-14 Spear", location: "WIP", tip: null },
          { name: "StA-X3 W.A.S.P. Launcher", location: "WIP", tip: null },
          { name: "Orbital Gatling Barrage", location: "WIP", tip: null },
          { name: "Orbital Airburst Strike", location: "WIP", tip: null },
          { name: "Orbital 120mm HE Barrage", location: "WIP", tip: null },
          { name: "Orbital 380mm HE Barrage", location: "WIP", tip: null },
          { name: "Orbital Walking Barrage", location: "WIP", tip: null },
          { name: "Orbital Laser", location: "WIP", tip: null },
          { name: "Orbital Napalm Barrage", location: "WIP", tip: null },
          { name: "Orbital Railcannon Strike", location: "WIP", tip: null },
          { name: "Eagle Strafing Run", location: "WIP", tip: null },
          { name: "Eagle Airstrike", location: "WIP", tip: null },
          { name: "Eagle Cluster Bomb", location: "WIP", tip: null },
          { name: "Eagle Napalm Airstrike", location: "WIP", tip: null },
          { name: "LIFT-850 Jump Pack", location: "WIP", tip: null },
          { name: "Eagle Smoke Strike", location: "WIP", tip: null },
          { name: "Eagle 110mm Rocket Pods", location: "WIP", tip: null },
          { name: "Eagle 500kg Bomb", location: "WIP", tip: null },
          { name: "M-102 Fast Recon Vehicle", location: "WIP", tip: null },
          { name: "TD-220 Bastion", location: "WIP", tip: null },
          { name: "Orbital Precision Strike", location: "WIP", tip: null },
          { name: "Orbital Gas Strike", location: "WIP", tip: null },
          { name: "Orbital EMS Strike", location: "WIP", tip: null },
          { name: "Orbital Smoke Strike", location: "WIP", tip: null },
          { name: "E/MG-101 HMG Emplacement", location: "WIP", tip: null },
          { name: "FX-12 Shield Generator Relay", location: "WIP", tip: null },
          { name: "A/ARC-3 Tesla Tower", location: "WIP", tip: null },
          { name: "E/GL-21 Grenadier Battlement", location: "WIP", tip: null },
          { name: "MD-6 Anti-Personnel Minefield", location: "WIP", tip: null },
          { name: "B-1 Supply Pack", location: "WIP", tip: null },
          { name: "GL-21 Grenade Launcher", location: "WIP", tip: null },
          { name: "LAS-98 Laser Cannon", location: "WIP", tip: null },
          { name: "MD-I4 Incendiary Mines", location: "WIP", tip: null },
          { name: "AX/LAS-5 \"Guard Dog\" Rover", location: "WIP", tip: null },
          { name: "SH-20 Ballistic Shield Backpack", location: "WIP", tip: null },
          { name: "ARC-3 Arc Thrower", location: "WIP", tip: null },
          { name: "MD-17 Anti-Tank Mines", location: "WIP", tip: null },
          { name: "LAS-99 Quasar Cannon", location: "WIP", tip: null },
          { name: "SH-32 Shield Generator Pack", location: "WIP", tip: null },
          { name: "MD-8 Gas Mines", location: "WIP", tip: null },
          { name: "A/MG-43 Machine Gun Sentry", location: "WIP", tip: null },
          { name: "A/G-16 Gatling Sentry", location: "WIP", tip: null },
          { name: "A/M-12 Mortar Sentry", location: "WIP", tip: null },
          { name: "AX/AR-23 \"Guard Dog\"", location: "WIP", tip: null },
          { name: "A/AC-8 Autocannon Sentry", location: "WIP", tip: null },
          { name: "A/MLS-4X Rocket Sentry", location: "WIP", tip: null },
          { name: "A/M-23 EMS Mortar Sentry", location: "WIP", tip: null },
          { name: "EXO-45 Patriot Exosuit", location: "WIP", tip: null },
          { name: "EXO-49 Emancipator Exosuit", location: "WIP", tip: null },
          { name: "TX-41 Sterilizer", location: "WIP", tip: null },
          { name: "AX/TX-13 \"Guard Dog\" Dog Breath", location: "WIP", tip: null },
          { name: "SH-51 Directional Shield", location: "WIP", tip: null },
          { name: "E/AT-12 Anti-Tank Emplacement", location: "WIP", tip: null },
          { name: "A/FLAM-40 Flame Sentry", location: "WIP", tip: null },
          { name: "B-100 Portable Hellbomb", location: "WIP", tip: null },
          { name: "LIFT-860 Hover Pack", location: "WIP", tip: null },
          { name: "CQC-1 One True Flag", location: "WIP", tip: null },
          { name: "GL-52 De-Escalator", location: "WIP", tip: null },
          { name: "AX/ARC-3 \"Guard Dog\" K-9", location: "WIP", tip: null },
          { name: "PLAS-45 Epoch", location: "WIP", tip: null },
          { name: "A/LAS-98 Laser Sentry", location: "WIP", tip: null },
          { name: "LIFT-182 Warp Pack", location: "WIP", tip: null },
          { name: "S-11 Speargun", location: "WIP", tip: null },
          { name: "EAT-700 Expendable Napalm", location: "WIP", tip: null },
          { name: "MS-11 Solo Silo", location: "WIP", tip: null },
          { name: "M-1000 Maxigun", location: "WIP", tip: null },
          { name: "CQC-9 Defoliation Tool", location: "WIP", tip: null },
          { name: "AX/FLAM-75 \"Guard Dog\" Hot Dog", location: "WIP", tip: null },
          { name: "B/MD C4 Pack", location: "WIP", tip: null },
          { name: "CQC-20 Breaching Hammer", location: "WIP", tip: null },
          { name: "EAT-411 Leveller", location: "WIP", tip: null },
          { name: "GL-28 Belt-Fed Grenade Launcher", location: "WIP", tip: null },
        ]
      },
      {
        name: "Superstore Purchases",
        items: [
          { name: "CE-81 Juggernaut (Armor)", location: "WIP", tip: null },
          { name: "CE-81 Juggernaut (Helmet)", location: "WIP", tip: null },
          { name: "FS-34 Exterminator (Armor)", location: "WIP", tip: null },
          { name: "FS-34 Exterminator (Helmet)", location: "WIP", tip: null },
          { name: "CM-21 Trench Paramedic (Armor)", location: "WIP", tip: null },
          { name: "CM-21 Trench Paramedic (Helmet)", location: "WIP", tip: null },
          { name: "FS-11 Executioner (Armor)", location: "WIP", tip: null },
          { name: "FS-11 Executioner (Helmet)", location: "WIP", tip: null },
          { name: "B-08 Light Gunner (Armor)", location: "WIP", tip: null },
          { name: "B-08 Light Gunner (Helmet)", location: "WIP", tip: null },
          { name: "FS-61 Dreadnought (Armor)", location: "WIP", tip: null },
          { name: "FS-61 Dreadnought (Helmet)", location: "WIP", tip: null },
          { name: "FS-38 Eradicator (Armor)", location: "WIP", tip: null },
          { name: "FS-38 Eradicator (Helmet)", location: "WIP", tip: null },
          { name: "B-27 Fortified Commando (Armor)", location: "WIP", tip: null },
          { name: "B-27 Fortified Commando (Helmet)", location: "WIP", tip: null },
          { name: "MORE SOON", location: "WIP", tip: null },
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
//    lastUpdated: "Month Day, Year",
//    gameVersion: "1.0",
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
