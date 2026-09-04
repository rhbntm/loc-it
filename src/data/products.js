/**
 * LOC IT — LOCTITE Official Product Catalog
 *
 * Covers core DIY, Craft, Installation, Renovation, and Repair adhesives.
 * Compatible with recommendProduct engine and catalog filtering.
 */

export const products = [
  {
    id: "super-glue-liquid-control",
    name: "LOCTITE Super Glue Liquid Control",
    shortName: "Liquid Control",
    tagline: "Fast-setting general-purpose adhesive",
    categoryBadge: "Super Glue",
    projectCategories: ["create-craft", "repair"],
    rating: 4.8,
    reviewsCount: 312,

    // Compatibility scoring dimensions
    materials: ["plastic", "metal", "wood", "ceramic", "glass", "rubber"],
    repairTypes: ["close-fitting", "fast"],
    useCases: ["home", "diy", "school-work", "other"],

    strengths: [
      "Fast-setting cyanoacrylate formula",
      "Works on multiple common materials",
      "Precision side-squeeze control tip",
      "Superior bond for close-fitting parts",
    ],

    description:
      "A fast-setting, general-purpose cyanoacrylate adhesive with a precision control tip. Designed for close-fitting repairs on a wide range of common household materials.",

    reasons: {
      material: {
        plastic: "Bonds well to common hard plastics.",
        metal: "Effective on metal-to-metal and metal-to-other repairs.",
        wood: "Suitable for bonding wood in close-fitting joins.",
        ceramic: "Works on ceramic and porcelain surfaces.",
        glass: "Bonds glass when parts fit closely together.",
        rubber: "Suitable for rubber repairs with close contact.",
      },
      repairType: {
        "close-fitting": "Optimized for repairs where parts fit together snugly.",
        fast: "Fast-setting formula minimizes waiting time.",
      },
      useCase: {
        home: "Ideal for everyday household repairs.",
        diy: "Versatile for general DIY and craft projects.",
        "school-work": "Convenient for school and work project repairs.",
        other: "A reliable general-purpose choice.",
      },
    },

    usageSteps: [
      {
        step: 1,
        instruction: "Clean both surfaces thoroughly and ensure they are dry and free from grease.",
      },
      {
        step: 2,
        instruction: "Apply a small amount of adhesive to one surface. A little goes a long way — less is more.",
      },
      {
        step: 3,
        instruction: "Press the parts firmly together and hold for 30–60 seconds.",
      },
      {
        step: 4,
        instruction: "Allow the bond to cure fully before putting the repair under stress (full cure in 24 hours).",
      },
    ],

    proof: {
      title: "See It Hold",
      description: "Watch how this adhesive creates a fast, strong bond on everyday materials.",
      videoPlaceholder: true,
      demoSteps: [
        { label: "Problem", desc: "Broken household item with clean, close-fitting surfaces." },
        { label: "Apply", desc: "A single drop applied with squeeze control." },
        { label: "Set", desc: "Parts pressed together and held briefly." },
        { label: "Test", desc: "Bond stress-tested after cure." },
        { label: "Result", desc: "Repair holds firm under normal use." },
      ],
    },

    purchaseLinks: [
      { platform: "Shopee", type: "Official Store", url: "https://shopee.ph/" },
      { platform: "TikTok Shop", type: "Official Seller", url: "https://www.tiktok.com/" },
      { platform: "Ace Hardware", type: "In-Store & Online", url: "https://www.loctiteproducts.com/where-to-buy.html" },
    ],
  },

  {
    id: "super-glue-gel-control",
    name: "LOCTITE Super Glue Gel Control",
    shortName: "Gel Control",
    tagline: "Precision no-drip gel adhesive",
    categoryBadge: "Super Glue Gel",
    projectCategories: ["create-craft", "repair"],
    rating: 4.9,
    reviewsCount: 428,

    materials: ["plastic", "metal", "wood", "rubber", "ceramic"],
    repairTypes: ["precision", "close-fitting", "gap"],
    useCases: ["model", "diy", "home", "school-work"],

    strengths: [
      "No-drip gel formula for vertical surfaces",
      "Controlled, precise application",
      "Patented easy-squeeze bottle design",
      "Excellent for small or delicate repairs",
    ],

    description:
      "A no-drip gel cyanoacrylate adhesive designed for precise, controlled application. Perfect for vertical surfaces and repairs requiring pinpoint accuracy.",

    reasons: {
      material: {
        plastic: "Gel formula provides controlled bonding on plastics including delicate parts.",
        metal: "Precise application on metal components without dripping.",
        wood: "Ideal for controlled application on wood joins.",
        rubber: "Gel consistency helps on rubber surfaces.",
        ceramic: "Controlled application on ceramic repairs.",
      },
      repairType: {
        precision: "Gel formula allows for very precise, no-drip application.",
        "close-fitting": "Works well on close-fitting repairs with gel consistency.",
        gap: "Thicker gel can bridge small gaps between surfaces.",
      },
      useCase: {
        model: "Preferred for model, hobby, and collectible repairs requiring precision.",
        diy: "Excellent for craft and DIY work needing control.",
        home: "Good choice for household repairs needing precise placement.",
        "school-work": "Suitable for project work requiring careful application.",
      },
    },

    usageSteps: [
      {
        step: 1,
        instruction: "Clean both surfaces and ensure they are dry and free from grease or dust.",
      },
      {
        step: 2,
        instruction: "Apply a small amount of gel with the patented side-squeeze grips.",
      },
      {
        step: 3,
        instruction: "Join the parts carefully and hold firmly for 30–60 seconds.",
      },
      {
        step: 4,
        instruction: "Allow full cure before stressing the repair (24 hours).",
      },
    ],

    proof: {
      title: "Precision in Action",
      description: "Demonstration of precise gel application on delicate collectible and craft repairs.",
      videoPlaceholder: true,
      demoSteps: [
        { label: "Problem", desc: "Delicate part with small join requiring precision." },
        { label: "Apply", desc: "Gel applied precisely with zero drip." },
        { label: "Set", desc: "Parts joined carefully and held steady." },
        { label: "Test", desc: "Repair examined for alignment and strength." },
        { label: "Result", desc: "Clean, strong bond without adhesive spread." },
      ],
    },

    purchaseLinks: [
      { platform: "Shopee", type: "Official Store", url: "https://shopee.ph/" },
      { platform: "TikTok Shop", type: "Official Seller", url: "https://www.tiktok.com/" },
      { platform: "Ace Hardware", type: "In-Store & Online", url: "https://www.loctiteproducts.com/where-to-buy.html" },
    ],
  },

  {
    id: "super-glue-ultra-gel-control",
    name: "LOCTITE Super Glue Ultra Gel Control",
    shortName: "Ultra Gel Control",
    tagline: "Tough gel adhesive for demanding repairs",
    categoryBadge: "Ultra Gel",
    projectCategories: ["repair", "renovate"],
    rating: 4.9,
    reviewsCount: 519,

    materials: ["rubber", "plastic", "metal", "wood", "ceramic"],
    repairTypes: ["durable", "gap", "precision"],
    useCases: ["automotive", "diy", "home", "other"],

    strengths: [
      "Rubber-toughened for impact and shock resistance",
      "Durable bond for demanding repairs & vibration",
      "Gap-filling ultra gel formula",
      "Suitable for outdoor & high-stress applications",
    ],

    description:
      "A high-performance ultra gel adhesive with rubber-toughened technology designed for demanding repair situations requiring impact resistance, durability, and gap-filling capability.",

    reasons: {
      material: {
        rubber: "Designed for tough repairs on rubber and flexible materials.",
        plastic: "Durable bond on plastics subject to stress or vibration.",
        metal: "Strong performance on metal components in demanding environments.",
        wood: "Suitable for wood repairs requiring durable hold.",
        ceramic: "Handles ceramic repairs that may be subject to impact.",
      },
      repairType: {
        durable: "Engineered for long-lasting, impact-resistant bonds.",
        gap: "Ultra gel formula fills gaps between surfaces effectively.",
        precision: "Controlled gel application even in demanding repair contexts.",
      },
      useCase: {
        automotive: "Well-suited for automotive and vehicle-related repairs.",
        diy: "Reliable for demanding DIY repair work.",
        home: "Good choice when household repairs need extra durability.",
        other: "Strong option when the repair will be subject to stress.",
      },
    },

    usageSteps: [
      {
        step: 1,
        instruction: "Clean and prepare both surfaces. Remove any loose material, grease, or moisture.",
      },
      {
        step: 2,
        instruction: "Apply the ultra gel adhesive to one surface. The gel formula will fill minor gaps.",
      },
      {
        step: 3,
        instruction: "Press parts together firmly and hold for 60 seconds.",
      },
      {
        step: 4,
        instruction: "Allow the bond to fully cure before subjecting to impact or heavy stress.",
      },
    ],

    proof: {
      title: "Built to Last",
      description: "Watch how rubber-toughened ultra gel handles tough, high-stress automotive repairs.",
      videoPlaceholder: true,
      demoSteps: [
        { label: "Problem", desc: "Damaged automotive or high-stress repair with gap between surfaces." },
        { label: "Apply", desc: "Ultra gel applied and gap filled." },
        { label: "Set", desc: "Parts firmly joined and held." },
        { label: "Test", desc: "Bond tested against impact and vibration." },
        { label: "Result", desc: "Durable hold maintains under demanding conditions." },
      ],
    },

    purchaseLinks: [
      { platform: "Shopee", type: "Official Store", url: "https://shopee.ph/" },
      { platform: "TikTok Shop", type: "Official Seller", url: "https://www.tiktok.com/" },
      { platform: "Ace Hardware", type: "In-Store & Online", url: "https://www.loctiteproducts.com/where-to-buy.html" },
    ],
  },

  {
    id: "power-grab-express",
    name: "LOCTITE Power Grab Express All-Purpose",
    shortName: "Power Grab Express",
    tagline: "Instant grab construction adhesive",
    categoryBadge: "Construction",
    projectCategories: ["install", "renovate"],
    rating: 4.7,
    reviewsCount: 284,

    materials: ["wood", "ceramic", "metal", "stone"],
    repairTypes: ["durable", "gap"],
    useCases: ["home", "diy"],

    strengths: [
      "Zero-second instant grab technology",
      "Reduces or eliminates the need for bracing and nails",
      "Low odor, soap & water cleanup",
      "Paintable white finish",
    ],

    description:
      "A premium interior construction adhesive with 9x stronger instant grab. Eliminates the need for nails and screws in many home improvement and installation projects.",

    reasons: {
      material: {
        wood: "Bonds baseboards, molding, and lumber instantly.",
        ceramic: "Great for tile backsplashes and bathroom trim.",
        metal: "Secures metal brackets and fixtures to drywall.",
      },
      repairType: {
        durable: "Long-term heavy-duty hold.",
        gap: "Bridges uneven walls and studs.",
      },
      useCase: {
        home: "Perfect for baseboards, wall panels, and trim.",
        diy: "Fast and easy DIY installations without power tools.",
      },
    },

    usageSteps: [
      { step: 1, instruction: "Surfaces must be clean, dry, and free of grease." },
      { step: 2, instruction: "Cut nozzle and apply continuous bead or spots to one surface." },
      { step: 3, instruction: "Press firmly into place within 15 minutes. Repositionable for 15 minutes." },
      { step: 4, instruction: "Dries to full strength in 24 hours." },
    ],

    proof: {
      title: "Instant Grab Test",
      description: "Watch heavy molding stick to vertical wall with zero bracing.",
      videoPlaceholder: true,
      demoSteps: [
        { label: "Apply", desc: "Bead applied along baseboard." },
        { label: "Stick", desc: "Pressed against wall." },
        { label: "Hold", desc: "Sticks immediately without falling." },
      ],
    },

    purchaseLinks: [
      { platform: "Shopee", type: "Official Store", url: "https://shopee.ph/" },
      { platform: "Ace Hardware", type: "Retail Store", url: "https://www.loctiteproducts.com/where-to-buy.html" },
      { platform: "Wilcon Depot", type: "Authorized Dealer", url: "https://www.loctiteproducts.com/where-to-buy.html" },
    ],
  },

  {
    id: "pl-premium-max",
    name: "LOCTITE PL Premium MAX Construction Adhesive",
    shortName: "PL Premium MAX",
    tagline: "Strongest, most durable polyurethane formula",
    categoryBadge: "Heavy Duty",
    projectCategories: ["install", "renovate"],
    rating: 4.9,
    reviewsCount: 610,

    materials: ["wood", "metal", "stone", "rubber"],
    repairTypes: ["durable", "gap"],
    useCases: ["home", "diy"],

    strengths: [
      "100% solid polyurethane formula",
      "Bonds to wet, frozen, or dry lumber",
      "Cold and hot weather gunnable",
      "3x stronger than standard adhesives",
    ],

    description:
      "LOCTITE's strongest construction adhesive. 100% solid, waterproof, and bonds virtually all building materials indoors or outdoors.",

    reasons: {
      material: {
        wood: "Permanent subfloor and framing bonding.",
        stone: "Ideal for landscape stone, pavers, and concrete.",
        metal: "Heavy architectural metal bonding.",
      },
      repairType: {
        durable: "Highest structural strength in extreme conditions.",
        gap: "Expands slightly to fill voids.",
      },
      useCase: {
        home: "Structural home renovations.",
        diy: "Decks, landscape walls, and heavy installations.",
      },
    },

    usageSteps: [
      { step: 1, instruction: "Wear gloves. Ensure surfaces are free of ice, debris, or standing water." },
      { step: 2, instruction: "Apply adhesive in a zigzag bead to one surface." },
      { step: 3, instruction: "Join surfaces within 20 minutes and clamp or fasten." },
      { step: 4, instruction: "Full cure achieved within 24 to 48 hours." },
    ],

    proof: {
      title: "Weatherproof Power",
      description: "Proven strength across freezing temperatures and exterior submersion.",
      videoPlaceholder: true,
      demoSteps: [
        { label: "Apply", desc: "Gunnable even in winter weather." },
        { label: "Bond", desc: "Joins concrete pavers solidly." },
        { label: "Result", desc: "Permanent exterior hold." },
      ],
    },

    purchaseLinks: [
      { platform: "Shopee", type: "Official Store", url: "https://shopee.ph/" },
      { platform: "Ace Hardware", type: "Retail Store", url: "https://www.loctiteproducts.com/where-to-buy.html" },
      { platform: "Handyman", type: "Authorized Retailer", url: "https://www.loctiteproducts.com/where-to-buy.html" },
    ],
  },

  {
    id: "threadlocker-blue-242",
    name: "LOCTITE Threadlocker Blue 242",
    shortName: "Threadlocker Blue 242",
    tagline: "Medium strength removable fastener locker",
    categoryBadge: "Threadlocker",
    projectCategories: ["repair", "renovate"],
    rating: 4.9,
    reviewsCount: 840,

    materials: ["metal"],
    repairTypes: ["precision", "durable"],
    useCases: ["automotive", "home", "diy"],

    strengths: [
      "Prevents bolts and screws from vibrating loose",
      "Seals threads against leaks and corrosion",
      "Removable with normal hand tools",
      "Ideal for engines, lawnmowers, and bikes",
    ],

    description:
      "The classic LOCTITE blue threadlocker. Designed for locking and sealing of threaded fasteners which require normal disassembly with standard hand tools.",

    reasons: {
      material: {
        metal: "Specifically formulated for all metal threaded assemblies from 1/4\" to 3/4\".",
      },
      repairType: {
        durable: "Resists vibration and shock loosening.",
        precision: "Pinpoint drop tip applicator.",
      },
      useCase: {
        automotive: "Essential for carburetors, brake calipers, and steering gear.",
        diy: "Lawnmower blade bolts, bicycle assemblies, power tools.",
      },
    },

    usageSteps: [
      { step: 1, instruction: "Clean threads with solvent or rag and let dry." },
      { step: 2, instruction: "Shake bottle well and apply drops to engagement area of the bolt." },
      { step: 3, instruction: "Assemble parts and tighten to recommended torque." },
      { step: 4, instruction: "Locks in 20 minutes, fully cures in 24 hours." },
    ],

    proof: {
      title: "Vibration Resistance Test",
      description: "Extreme shaker table testing shows unthreaded vs LOCTITE secured bolts.",
      videoPlaceholder: true,
      demoSteps: [
        { label: "Apply", desc: "Blue drops applied to fastener." },
        { label: "Torque", desc: "Bolt torqued down." },
        { label: "Vibrate", desc: "Survives high RPM engine vibration." },
      ],
    },

    purchaseLinks: [
      { platform: "Shopee", type: "Official Store", url: "https://shopee.ph/" },
      { platform: "TikTok Shop", type: "Official Seller", url: "https://www.tiktok.com/" },
      { platform: "Ace Hardware", type: "Retail Store", url: "https://www.loctiteproducts.com/where-to-buy.html" },
    ],
  },
];

export default products;
