/**
 * LOC IT — Prototype Product Catalog
 *
 * IMPORTANT: This is a prototype taxonomy for demonstration purposes only.
 * Product claims, positioning, and descriptions must be verified against the
 * official Philippine LOCTITE product portfolio before final presentation.
 * Do not treat these as official LOCTITE technical classifications.
 */

export const products = [
  {
    id: "super-glue-liquid-control",
    name: "LOCTITE Super Glue Liquid Control",
    shortName: "Liquid Control",
    tagline: "Fast-setting general-purpose adhesive",

    // Compatibility scoring dimensions
    materials: ["plastic", "metal", "wood", "ceramic", "glass", "rubber"],
    repairTypes: ["close-fitting", "fast"],
    useCases: ["home", "diy", "school-work", "other"],

    strengths: [
      "Fast-setting formula",
      "Works on multiple common materials",
      "Precision tip for control",
      "Strong bond for close-fitting parts",
    ],

    description:
      "A fast-setting, general-purpose cyanoacrylate adhesive with a precision control tip. Designed for close-fitting repairs on a wide range of common household materials. [Prototype description — verify before final use.]",

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
        instruction:
          "Apply a small amount of adhesive to one surface. A little goes a long way — less is more.",
      },
      {
        step: 3,
        instruction: "Press the parts firmly together and hold for 30–60 seconds.",
      },
      {
        step: 4,
        instruction:
          "Allow the bond to cure fully before putting the repair under stress. Full strength typically develops within 24 hours. [Times are indicative — refer to product label.]",
      },
    ],

    proof: {
      title: "See It Hold",
      description:
        "Watch how this adhesive creates a fast, strong bond on everyday materials. [Placeholder — real demonstration video to be added.]",
      videoPlaceholder: true,
      demoSteps: [
        { label: "Problem", desc: "Broken household item with clean, close-fitting surfaces." },
        { label: "Apply", desc: "A single drop applied to one surface." },
        { label: "Set", desc: "Parts pressed together and held briefly." },
        { label: "Test", desc: "Bond stress-tested after cure." },
        { label: "Result", desc: "Repair holds firm under normal use." },
      ],
    },

    purchaseLinks: [
      { platform: "Shopee", type: "official-store", url: "#" },
      { platform: "TikTok Shop", type: "authorized-seller", url: "#" },
      { platform: "Find a Store", type: "retail", url: "#" },
    ],
  },

  {
    id: "super-glue-gel-control",
    name: "LOCTITE Super Glue Gel Control",
    shortName: "Gel Control",
    tagline: "Precision no-drip gel adhesive",

    materials: ["plastic", "metal", "wood", "rubber", "ceramic"],
    repairTypes: ["precision", "close-fitting", "gap"],
    useCases: ["model", "diy", "home", "school-work"],

    strengths: [
      "No-drip gel formula",
      "Controlled, precise application",
      "Works on vertical surfaces",
      "Good for small or delicate repairs",
    ],

    description:
      "A no-drip gel cyanoacrylate adhesive designed for precise, controlled application. Suitable for vertical surfaces and repairs requiring accuracy. [Prototype description — verify before final use.]",

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
        instruction:
          "Apply a small amount of gel to one surface with precision. The no-drip formula helps with placement control.",
      },
      {
        step: 3,
        instruction: "Join the parts carefully and hold firmly for 30–60 seconds.",
      },
      {
        step: 4,
        instruction:
          "Allow full cure before stressing the repair. Full strength typically develops within 24 hours. [Times are indicative — refer to product label.]",
      },
    ],

    proof: {
      title: "Precision in Action",
      description:
        "Demonstration of precise gel application on a model/collectible repair. [Placeholder — real demonstration video to be added.]",
      videoPlaceholder: true,
      demoSteps: [
        { label: "Problem", desc: "Delicate model part with small join requiring precision." },
        { label: "Apply", desc: "Gel applied precisely with no run or drip." },
        { label: "Set", desc: "Parts joined carefully and held steady." },
        { label: "Test", desc: "Repair examined for alignment and strength." },
        { label: "Result", desc: "Clean, strong bond without unwanted adhesive spread." },
      ],
    },

    purchaseLinks: [
      { platform: "Shopee", type: "official-store", url: "#" },
      { platform: "TikTok Shop", type: "authorized-seller", url: "#" },
      { platform: "Find a Store", type: "retail", url: "#" },
    ],
  },

  {
    id: "super-glue-ultra-gel-control",
    name: "LOCTITE Super Glue Ultra Gel Control",
    shortName: "Ultra Gel Control",
    tagline: "Tough gel adhesive for demanding repairs",

    materials: ["rubber", "plastic", "metal", "wood", "ceramic"],
    repairTypes: ["durable", "gap", "precision"],
    useCases: ["automotive", "diy", "home", "other"],

    strengths: [
      "Impact and shock resistance",
      "Durable bond for demanding repairs",
      "Gap-filling gel formula",
      "Suitable for high-stress applications",
    ],

    description:
      "A high-performance ultra gel adhesive designed for demanding repair situations requiring impact resistance, durability, and gap-filling capability. [Prototype description — verify before final use.]",

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
        instruction:
          "Clean and prepare both surfaces. Remove any loose material, grease, or moisture.",
      },
      {
        step: 2,
        instruction:
          "Apply the ultra gel adhesive to one surface. The gel formula will help fill any minor gaps.",
      },
      {
        step: 3,
        instruction: "Press parts together firmly and hold for 60 seconds.",
      },
      {
        step: 4,
        instruction:
          "Allow the bond to fully cure before subjecting to impact or stress. Full strength typically requires 24 hours. [Times are indicative — refer to product label.]",
      },
    ],

    proof: {
      title: "Built to Last",
      description:
        "Watch how this adhesive handles tough, high-stress repairs. [Placeholder — real demonstration video to be added.]",
      videoPlaceholder: true,
      demoSteps: [
        {
          label: "Problem",
          desc: "Damaged automotive or high-stress repair with gap between surfaces.",
        },
        { label: "Apply", desc: "Ultra gel applied and gap filled." },
        { label: "Set", desc: "Parts firmly joined and held." },
        { label: "Test", desc: "Bond tested against impact and vibration." },
        { label: "Result", desc: "Durable hold maintains under demanding conditions." },
      ],
    },

    purchaseLinks: [
      { platform: "Shopee", type: "official-store", url: "#" },
      { platform: "TikTok Shop", type: "authorized-seller", url: "#" },
      { platform: "Find a Store", type: "retail", url: "#" },
    ],
  },
];

export default products;
