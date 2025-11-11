export const services = [
  {
    slug: "cargo-hold-cleaning",
    title: "Cargo hold cleaning & passivation",
    summary:
      "Specialized riding squads delivering pre-loading inspections, hold washing, and residue disposal in full alignment with local terminals.",
    ports: ["Santos", "Itaqui", "Rio Grande", "Vitória"],
    includes: [
      "Hot and cold wash cycles with approved chemicals",
      "Residue segregation and MARPOL-compliant disposal",
      "Hold readiness certification and photo log",
      "Onboard gas monitoring and confined space permits",
    ],
    bullets: [
      "Rapid mobilization via Santos logistics base",
      "Approved chemical inventory with MSDS available",
      "Dedicated superintendent reporting to charterers",
    ],
    technical: {
      mobilization: "4-6 hours average, subject to pilotage windows",
      team: "Superintendent + 8 to 12 riding cleaners",
      equipment: "High-pressure washers, manlifts, sludge pumps, calibrated gas detectors",
      hse: "Confined space entry program, lock-out-tag-out, daily toolbox meetings",
    },
  },
  {
    slug: "underwater-hull-cleaning",
    title: "Underwater hull cleaning & inspections",
    summary:
      "Class-approved diving teams executing hull scrubbing, propeller polishing, and CCTV inspections under ANTAQ licensing.",
    ports: ["Vitória", "Itaqui", "Vila do Conde", "Rio Grande"],
    includes: [
      "Propeller and hull cleaning with capture systems",
      "Class-coordinated video inspections",
      "Biofouling assessment aligned with port health requirements",
      "Wastewater filtration prior to disposal",
    ],
    bullets: [
      "Dive supervisors with DP references",
      "Environmental monitoring per local harbor master",
      "Operations log provided to owner and charterer",
    ],
    technical: {
      mobilization: "Subject to port authority visibility limits and swell conditions",
      team: "Dive supervisor + 4 to 6 commercial divers",
      equipment: "Hydraulic brushes, cavitation tools, HD underwater cameras",
      hse: "Dive control van, redundant communications, decompression management",
    },
  },
  {
    slug: "ship-repair-riding-squads",
    title: "Ship repair & riding squads",
    summary:
      "Mechanical, electrical, and steel teams riding onboard for voyage repairs, afloat maintenance, and drydock preparation.",
    ports: ["Santos", "Paranaguá", "Rio Grande", "Suape"],
    includes: [
      "Class-approved welding procedures",
      "Pipefitting, pumps, and auxiliary machinery repair",
      "Electrical troubleshooting and automation support",
      "Logistics for tools, spares, and consumables",
    ],
    bullets: [
      "Temporary importation paperwork handled in-house",
      "Bilingual supervisors interfacing with owner reps",
      "Detailed work packs issued upon completion",
    ],
    technical: {
      mobilization: "Available 24/7 with customs pre-clearance",
      team: "Project manager + multi-discipline technicians",
      equipment: "Portable machining, welding sets, diagnostic instruments",
      hse: "Hot work permits, enclosed space procedures, PPE compliance",
    },
  },
  {
    slug: "shipping-agency-support",
    title: "Shipping agency & husbandry support",
    summary:
      "Port agency coordination, crew changes, provisioning, and customs documentation tailored for industrial projects.",
    ports: ["Santos", "Pecém", "Manaus", "Cabedelo"],
    includes: [
      "Pre-arrival coordination with authorities",
      "Crew handling and immigration formalities",
      "Cash to master and bonded logistics",
      "Launch services and waste collection",
    ],
    bullets: [
      "Integrated with Seachios® operations desk",
      "Compliance with Federal Police and Receita Federal",
      "Daily situation reports to principals",
    ],
    technical: {
      mobilization: "Agency desk monitors arrivals 24/7",
      team: "Port agent, boarding clerk, customs broker",
      equipment: "Secure bonded warehouse, dedicated vehicles",
      hse: "Visitor induction, PPE supply, launch safety briefings",
    },
  },
];

export const operations = [
  {
    slug: "cargo-hold-cleaning-mv-atlantic-lumen",
    title: "Cargo Hold Cleaning for M/V Atlantic Lumen in Santos, Brazil",
    vessel: "M/V Atlantic Lumen",
    port: "Port of Santos",
    service: "Cargo hold cleaning",
    date: "2025-02-18",
    summary:
      "Hold washing, passivation, and readiness certification completed within 36 hours between grain parcels while meeting charterer standards.",
    tags: ["Cargo Hold Cleaning"],
    content: {
      intro:
        "Seachios® was instructed by the owner's superintendent to reinstate six Panamax holds after a fertilizer discharge prior to a maize parcel.",
      scope: [
        "Hot wash, detergency, and freshwater rinse of all hold surfaces",
        "Cleaning and drying of ladders, bilges, and deckhead structures",
        "Application of passivation agent approved by the receiver",
        "Wastewater collection and disposal via licensed contractor",
      ],
      compliance: [
        "ANTAQ-licensed riding team with valid port IDs",
        "Gas-free certification and confined space supervision",
        "Solid waste manifest issued to terminal HSE",
      ],
      outcome:
        "Holds accepted on first inspection by surveyor, vessel sailed on schedule with zero remarks from charterers.",
      statement:
        "Our Santos-based supervisors maintain tight coordination with terminals to secure access windows without disrupting berth programs.",
    },
  },
  {
    slug: "underwater-inspection-fpso-serrana",
    title: "Underwater Survey for FPSO Serrana at Port of Vitória, Brazil",
    vessel: "FPSO Serrana",
    port: "Port of Vitória",
    service: "Underwater hull cleaning",
    date: "2025-03-07",
    summary:
      "Class-requested hull inspection and partial cleaning executed under port captaincy supervision with zero downtime to production operations.",
    tags: ["Underwater"],
    content: {
      intro:
        "The chartering company required a UWILD preparation survey focusing on sea chests, thrusters, and hull biofouling removal.",
      scope: [
        "Surface-supplied diving with redundant communications",
        "Propeller polishing and class-approved roughness readings",
        "High-definition video capture for class surveyor",
        "Filtration of recovered debris prior to disposal",
      ],
      compliance: [
        "ANTAQ dive permit and harbor master notification",
        "Dive spread audited by client HSE",
        "Environmental monitoring with turbidity logs",
      ],
      outcome:
        "Client received complete digital report, enabling class endorsement for extended operation window.",
      statement:
        "Our Vitória diving cell is structured to meet offshore HSE metrics while aligning with local port health directives.",
    },
  },
  {
    slug: "voyage-repair-mv-iguacu-spirit",
    title: "Voyage Repair for M/V Iguaçu Spirit in Rio Grande, Brazil",
    vessel: "M/V Iguaçu Spirit",
    port: "Port of Rio Grande",
    service: "Ship repair & riding squads",
    date: "2024-12-11",
    summary:
      "Multi-discipline riding squad completed pipe renewal, cargo crane troubleshooting, and automation diagnostics during coastal voyage.",
    tags: ["Repair"],
    content: {
      intro:
        "Owner requested voyage repairs to reinstate cargo gear and ballast system instrumentation without delaying laycan commitments.",
      scope: [
        "Fabrication and installation of stainless ballast lines",
        "Servo valve overhaul on No.2 cargo crane",
        "PLC diagnostic and software patch deployment",
        "Sea trial assistance and reporting",
      ],
      compliance: [
        "Temporary import paperwork cleared with Receita Federal",
        "Hot work permits validated by terminal HSE",
        "Daily toolbox meetings and permit-to-work audits",
      ],
      outcome:
        "Vessel resumed schedule with full cargo gear availability and verified ballast readings.",
      statement:
        "Our riding squads integrate seamlessly with ship staff, ensuring documentation meets owners', charterers', and local authority expectations.",
    },
  },
];

export const ports = [
  {
    slug: "santos",
    name: "Port of Santos",
    region: "São Paulo State",
    focus: ["Cargo hold cleaning", "Ship repair", "Agency support"],
  },
  {
    slug: "itaqui",
    name: "Port of Itaqui",
    region: "Maranhão State",
    focus: ["Bulk carriers", "Underwater services", "Riding squads"],
  },
  {
    slug: "vila-do-conde",
    name: "Port of Vila do Conde",
    region: "Pará State",
    focus: ["River-sea logistics", "Diving operations", "Agency"],
  },
  {
    slug: "cabedelo",
    name: "Port of Cabedelo",
    region: "Paraíba State",
    focus: ["Tankers", "Hold washing", "Crew logistics"],
  },
  {
    slug: "rio-grande",
    name: "Port of Rio Grande",
    region: "Rio Grande do Sul State",
    focus: ["Voyage repairs", "Spare parts handling", "Class surveys"],
  },
  {
    slug: "vitoria",
    name: "Port of Vitória",
    region: "Espírito Santo State",
    focus: ["Underwater inspections", "FPSO support", "Agency"],
  },
];
