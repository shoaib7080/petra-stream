// src/data/industriesData.js
// Centralized comprehensive data for all 6 Industry Sectors served by Petra Stream (Petrastream Contracting LLC)

export const industriesData = [
  {
    id: "ind-oilgas",
    slug: "oil-and-gas",
    name: "Oil & Gas Industry",
    title: "Oil & Gas Industry",
    tagline: "Industrial Contracting & Equipment Solutions for Oil & Gas Operations",
    img: "/assets/img/general/pexels-anoop1992-5987842.jpg",
    desc: "The Oil & Gas industry requires specialized industrial services, reliable equipment and coordinated execution across upstream, midstream and downstream operations. Petrastream aims to support project and operational requirements through industrial contracting services, equipment coordination and specialized product solutions.",
    challenges: "Operations in upstream exploration, offshore platforms, pipeline transmission, and downstream refining face severe operating conditions including extreme pressures, high temperatures, sour gas (H2S), and stringent zero-flame permit-to-work safety regimes. Unplanned downtime costs millions, making scheduled turnaround execution and asset integrity paramount.",
    technicalStandards: [
      "ASME B31.3 / B31.4 / B31.8 (Process & Pipeline Piping Systems)",
      "API 6D / API 600 / API 598 (Pipeline Valves & Pressure Testing)",
      "API 510 / API 570 (Pressure Vessel & Piping Inspection Codes)",
      "ATEX / IECEx Zone 1 & Zone 2 Hazardous Area Standards",
      "ADNOC / Saudi Aramco / Regional Operator HSE Protocols"
    ],
    services: [
      { name: "Maintenance, Shutdown & Turnaround", slug: "maintenance-shutdown-turnaround" },
      { name: "Pre-Commissioning & Commissioning", slug: "pre-commissioning-commissioning" },
      { name: "Mechanical Equipment Erection", slug: "mechanical-erection" },
      { name: "Process & Plant Piping", slug: "process-plant-piping" },
      { name: "Pipeline Construction & Integrity", slug: "pipeline-construction" },
      { name: "Electrical & Instrumentation", slug: "electrical-instrumentation" },
      { name: "Oil & Gas Plant Construction", slug: "oil-gas-plant-construction" },
      { name: "Pressurized Welding Habitats", slug: "welding-habitats" }
    ],
    products: [
      { name: "Hot Tapping & Line Stopping Equipment", slug: "hot-tapping-equipment" },
      { name: "Industrial Chemical Flushing Skids", slug: "industrial-flushing-units" },
      { name: "High-Pressure Hydro-Jetting Units", slug: "hydro-jetting-equipment" },
      { name: "Industrial API Valves & Actuators", slug: "industrial-valves" },
      { name: "Orifice Flanges & Metering Plates", slug: "orifice-flanges-plates" },
      { name: "Ultrasonic Flow Transmitters", slug: "flow-transmitters" },
      { name: "Wireless Non-Intrusive Corrosion Sensors", slug: "wireless-corrosion-sensors" },
      { name: "Hydraulic Flange Management & Bolting Tools", slug: "flange-management-bolting-tools" },
      { name: "Pressurised Positive-Pressure Welding Habitats", slug: "pressurised-welding-habitat" },
      { name: "Specialized DNV 2.7-1 Industrial Containers", slug: "specialized-containers-accommodation" }
    ],
    applications: [
      "Refinery and process plant shutdown maintenance and turnaround coordination.",
      "Cross-country and gathering pipeline installation, hydrotesting, and pigging.",
      "Heavy static and rotating equipment erection (compressors, vessels, separators).",
      "High-pressure lube oil and chemical cleaning and pipeline flushing.",
      "Custody transfer orifice metering and multiphase flow measurement.",
      "Continuous non-intrusive wall-thickness and corrosion rate monitoring.",
      "Certified positive-pressure habitat hot-work within hazardous Zone 1/2 environments."
    ]
  },
  {
    id: "ind-petrochem",
    slug: "petrochemical-and-chemical",
    name: "Petrochemical & Chemical Industry",
    title: "Petrochemical & Chemical Industry",
    tagline: "Supporting Complex Process Facilities & Chemical Operations",
    img: "/assets/img/general/pexels-ian-panelo-38601958.jpg",
    desc: "Petrochemical and chemical facilities require equipment and services that are suitable for specific process conditions, fluid characteristics, operating pressures and temperatures. Petrastream's industrial services and product portfolio are intended to support maintenance, equipment installation, piping systems and selected process-related requirements.",
    challenges: "Chemical synthesis, polymer production, and cracking units handle highly corrosive media, aggressive solvents, and hazardous hydrocarbons. Maintaining mechanical seal reliability, joint tightness, emission containment, and alloy material metallurgy is critical for preventing loss of containment and ensuring environmental compliance.",
    technicalStandards: [
      "ASME Section VIII Div 1 & 2 (Boiler & Pressure Vessel Code)",
      "ASTM A312 / A358 (Stainless & High-Alloy Piping Standards)",
      "NACE MR0175 / ISO 15156 (Corrosion-Resistant Alloys in Sour Service)",
      "ISA 84 / IEC 61511 (Functional Safety & Instrumented Systems)",
      "EPA & Regional Environmental Fugitive Emission Regulations"
    ],
    services: [
      { name: "Plant Maintenance & Reliability", slug: "maintenance-shutdown-turnaround" },
      { name: "Shutdown & Turnaround Execution", slug: "maintenance-shutdown-turnaround" },
      { name: "Pre-Commissioning & Commissioning", slug: "pre-commissioning-commissioning" },
      { name: "Mechanical Equipment Erection", slug: "mechanical-erection" },
      { name: "Process & Plant Piping", slug: "process-plant-piping" },
      { name: "Electrical & Instrumentation", slug: "electrical-instrumentation" },
      { name: "Civil & Structural Foundations", slug: "civil-structural-works" }
    ],
    products: [
      { name: "Special Alloy Industrial Valves", slug: "industrial-valves" },
      { name: "Orifice Flanges & Restrictor Plates", slug: "orifice-flanges-plates" },
      { name: "Precision Flow Transmitters", slug: "flow-transmitters" },
      { name: "Industrial Chemical Flushing Units", slug: "industrial-flushing-units" },
      { name: "Wireless Corrosion Monitoring Solutions", slug: "wireless-corrosion-sensors" },
      { name: "Flange Management & Controlled Bolting Tools", slug: "flange-management-bolting-tools" },
      { name: "Explosion-Proof HVAC & Chiller Systems", slug: "hvac-systems-equipment" },
      { name: "Industrial Automation & PLC/SCADA Integration", slug: "industrial-automation-solutions" },
      { name: "Industrial Effluent RO & STP Water Treatment", slug: "ro-stp-water-treatment" }
    ],
    applications: [
      "Exotic alloy (Super Duplex, Inconel, Hastelloy) process piping installation.",
      "High-integrity valve replacement and emissions-tested flange torquing.",
      "Continuous chemical corrosion monitoring in acid and caustic circuits.",
      "Chemical cleaning, passivation, and hydrostatic re-certification.",
      "Reactor and column internal overhaul during planned unit turnarounds.",
      "Process instrument calibration, loop checks, and safety interlock validation."
    ]
  },
  {
    id: "ind-energy",
    slug: "energy-and-power-generation",
    name: "Energy & Power Generation",
    title: "Energy & Power Generation",
    tagline: "Industrial Support for Power Generation & Energy Facilities",
    img: "/assets/img/general/pexels-ugomon82-37703372.jpg",
    desc: "Power generation and energy facilities depend on reliable mechanical, electrical, instrumentation and utility systems. Planned maintenance, equipment installation and commissioning activities are important for maintaining plant performance and operational reliability. Petrastream aims to support energy-related projects through industrial contracting and equipment supply coordination.",
    challenges: "Combined cycle gas turbine plants, co-generation units, and substations operate under high thermal stress, cyclic peak-load demands, and continuous high-voltage requirements. Reliable steam piping, cooling water circuits, and automated switchgear are critical to ensure continuous electrical supply to industrial grids.",
    technicalStandards: [
      "ASME B31.1 (Power Piping Code)",
      "IEC 61850 / IEEE (Substation Automation & Switchgear Standards)",
      "ISO 9001 / ISO 14001 / ISO 45001 Integrated Management",
      "NFPA 850 (Fire Protection for Electric Generating Plants)",
      "DEWA / FEWA / GCC Interconnection Authority Technical Codes"
    ],
    services: [
      { name: "Mechanical Equipment Erection", slug: "mechanical-erection" },
      { name: "Electrical & Instrumentation", slug: "electrical-instrumentation" },
      { name: "Civil & Heavy Equipment Foundations", slug: "civil-structural-works" },
      { name: "Pre-Commissioning & Commissioning", slug: "pre-commissioning-commissioning" },
      { name: "Maintenance & Outage Support", slug: "maintenance-shutdown-turnaround" },
      { name: "High-Pressure Steam & Water Piping", slug: "process-plant-piping" }
    ],
    products: [
      { name: "High-Pressure Steam & Water Valves", slug: "industrial-valves" },
      { name: "Feedwater Flow Transmitters", slug: "flow-transmitters" },
      { name: "Lube Oil & Hydraulic Flushing Units", slug: "industrial-flushing-units" },
      { name: "Heavy-Duty HVAC & Substation Cooling", slug: "hvac-systems-equipment" },
      { name: "Blast-Resistant Electrical Houses (E-Houses)", slug: "blast-resistant-buildings-ehouses" },
      { name: "Demineralized Water RO Treatment Plants", slug: "ro-stp-water-treatment" },
      { name: "Industrial Automation & Power Management", slug: "industrial-automation-solutions" }
    ],
    applications: [
      "Steam and gas turbine auxiliary mechanical equipment erection.",
      "High-pressure boiler feedwater and steam bypass piping fabrication.",
      "Substation cable laying, tray routing, and high-voltage terminations.",
      "Turbine lube oil system chemical flushing and particle cleanliness verification.",
      "Control building and modular E-House electrical integration.",
      "Boiler feed water demineralization and cooling tower water treatment."
    ]
  },
  {
    id: "ind-mfg",
    slug: "industrial-manufacturing",
    name: "Industrial Manufacturing",
    title: "Industrial Manufacturing",
    tagline: "Supporting Industrial Facilities, Equipment & Production Infrastructure",
    img: "/assets/img/general/pexels-sergey-sergeev-2153675005-32845682.jpg",
    desc: "Manufacturing facilities require dependable equipment, utility systems and maintenance support to keep production operations functioning effectively. Petrastream's contracting and product solutions can support selected requirements associated with industrial machinery, equipment installation, plant maintenance and automation.",
    challenges: "Heavy manufacturing, metals production, and processing factories require continuous material handling, structural durability, consistent pneumatic/hydraulic power, and automated robotic process controls with minimal equipment downtime.",
    technicalStandards: [
      "ISO 12100 / ISO 13849 (Machinery Safety Standards)",
      "ASME B31.3 / B31.9 (Process & Building Services Piping)",
      "AWS D1.1 (Structural Welding Code - Steel)",
      "IEC 60204 (Safety of Machinery - Electrical Equipment)",
      "Local Municipality & Civil Defense Industrial Guidelines"
    ],
    services: [
      { name: "Industrial Maintenance & Plant Overhauls", slug: "maintenance-shutdown-turnaround" },
      { name: "Heavy Machinery & Equipment Erection", slug: "mechanical-erection" },
      { name: "Power Distribution & Automation Cabling", slug: "electrical-instrumentation" },
      { name: "Civil Equipment Foundations & Pits", slug: "civil-structural-works" },
      { name: "Pre-Commissioning & Acceptance Testing", slug: "pre-commissioning-commissioning" },
      { name: "Factory Utility & Process Piping", slug: "process-plant-piping" }
    ],
    products: [
      { name: "Industrial Utility & Process Valves", slug: "industrial-valves" },
      { name: "Hydraulic Skid Flushing Systems", slug: "industrial-flushing-units" },
      { name: "High-Pressure Hydro-Jetting Equipment", slug: "hydro-jetting-equipment" },
      { name: "Factory HVAC & Pressurization Systems", slug: "hvac-systems-equipment" },
      { name: "Industrial Robotic Material Handling", slug: "robotics-solutions" },
      { name: "PLC, HMI & SCADA Industrial Automation", slug: "industrial-automation-solutions" },
      { name: "Hydraulic Torque & Flange Tooling", slug: "flange-management-bolting-tools" },
      { name: "Process Water Treatment & Filtration", slug: "ro-stp-water-treatment" }
    ],
    applications: [
      "Heavy production machinery alignment, leveling, and grouting.",
      "Compressed air, cooling water, and hydraulic piping network installation.",
      "Manufacturing plant power distribution, MCC panel installation, and motor hookups.",
      "Automated robotic cells, conveyor integration, and PLC program tuning.",
      "Planned factory shutdown maintenance and mechanical equipment refurbishment.",
      "Industrial floor drainage, foundation pedestals, and structural steel additions."
    ]
  },
  {
    id: "ind-water",
    slug: "water-and-utilities",
    name: "Water & Utilities",
    title: "Water & Utilities",
    tagline: "Water Treatment, Utility Infrastructure & Process Support",
    img: "/assets/img/general/pexels-arda-kaykisiz-672105204-37479298.jpg",
    desc: "Water treatment and utility facilities require suitable process equipment, pumping systems, instrumentation and control solutions to support water production, distribution and wastewater treatment operations. Petrastream's product portfolio includes selected water treatment and industrial equipment solutions for utility-related applications.",
    challenges: "Desalination facilities, municipal wastewater plants, and industrial utility grids encounter scaling, biological fouling, high-salinity brine corrosion, and rigorous potable water purity regulations requiring continuous chlorination, filtration, and flow monitoring.",
    technicalStandards: [
      "AWWA Standards (American Water Works Association)",
      "NSF/ANSI 61 (Drinking Water System Components - Health Effects)",
      "ISO 24510 / ISO 24512 (Water and Wastewater Service Management)",
      "ASME B31.3 (Utility Piping Systems)",
      "UAE Ministry of Climate Change and Environment Water Quality Norms"
    ],
    services: [
      { name: "Pumping Station Mechanical Erection", slug: "mechanical-erection" },
      { name: "Water Transmission & Process Piping", slug: "process-plant-piping" },
      { name: "Electrical Distribution & Instrumentation", slug: "electrical-instrumentation" },
      { name: "Concrete Reservoirs & Structural Works", slug: "civil-structural-works" },
      { name: "Testing, Disinfection & Commissioning", slug: "pre-commissioning-commissioning" },
      { name: "Utility Maintenance & Valve Replacement", slug: "maintenance-shutdown-turnaround" }
    ],
    products: [
      { name: "Industrial Reverse Osmosis (RO) Plants", slug: "ro-stp-water-treatment" },
      { name: "Sewage Treatment Plants (STP)", slug: "ro-stp-water-treatment" },
      { name: "Media, Sand & Carbon Water Filtration Systems", slug: "ro-stp-water-treatment" },
      { name: "Corrosion-Resistant Water & Slurry Valves", slug: "industrial-valves" },
      { name: "Electromagnetic & Ultrasonic Flowmeters", slug: "flow-transmitters" },
      { name: "High-Pressure Hydro-Jetting Cleaning Units", slug: "hydro-jetting-equipment" },
      { name: "Utility Facility HVAC & Dehumidification", slug: "hvac-systems-equipment" },
      { name: "Pumping Station Automation & Telemetry", slug: "industrial-automation-solutions" }
    ],
    applications: [
      "Sea water and brackish water reverse osmosis desalination facilities.",
      "Municipal and industrial wastewater / sewage treatment plant execution.",
      "High-density polyethylene (HDPE) and ductile iron water transmission piping.",
      "Electromagnetic water flow metering and chemical dosing skids.",
      "Main water pump installation, alignment, and vibration testing.",
      "SCADA telemetric monitoring for regional water distribution networks."
    ]
  },
  {
    id: "ind-infra",
    slug: "infrastructure-and-construction",
    name: "Infrastructure & Construction",
    title: "Infrastructure & Construction",
    tagline: "Industrial Construction, Mechanical Works & Infrastructure Support",
    img: "/assets/img/general/pexels-jan-rune-smenes-reite-221584-3192662.jpg",
    desc: "Infrastructure and construction projects involve coordinated civil, structural, mechanical, electrical and utility-related activities. Petrastream aims to support relevant project requirements through its contracting services and specialized product supply capabilities.",
    challenges: "Large-scale industrial construction demands tight coordination between multiple engineering trades, heavy structural load management, extreme desert ambient temperatures, fast-track mobilization, and strict adherence to structural safety standards.",
    technicalStandards: [
      "AISC 360 / AISC 341 (Structural Steel Design & Seismic Codes)",
      "ACI 318 (Building Code Requirements for Structural Concrete)",
      "BS EN / ISO Standards for Building Infrastructure",
      "NFPA 101 (Life Safety Code & Building Fire Protection)",
      "UAE Fire and Life Safety Code of Practice"
    ],
    services: [
      { name: "Civil Engineering Foundations & Concrete Structures", slug: "civil-structural-works" },
      { name: "Heavy Mechanical Equipment Erection", slug: "mechanical-erection" },
      { name: "Substation & Electrical Infrastructure", slug: "electrical-instrumentation" },
      { name: "Chilled Water & Firefighting Utility Piping", slug: "process-plant-piping" },
      { name: "Industrial Facility Construction Execution", slug: "oil-gas-plant-construction" },
      { name: "Integrated Building Pre-Commissioning", slug: "pre-commissioning-commissioning" }
    ],
    products: [
      { name: "Specialized Offshore & Site Office Containers", slug: "specialized-containers-accommodation" },
      { name: "Modular Prefabricated Engineering Buildings", slug: "specialized-containers-accommodation" },
      { name: "Commercial & Industrial HVAC Central Chillers", slug: "hvac-systems-equipment" },
      { name: "Fire Protection & Utility Water Valves", slug: "industrial-valves" },
      { name: "Flange Joint Assembly & Tensioning Tools", slug: "flange-management-bolting-tools" },
      { name: "Building Management Automation Systems", slug: "industrial-automation-solutions" },
      { name: "Modular Construction Camp Water Treatment", slug: "ro-stp-water-treatment" },
      { name: "Blast-Resistant Modular Electrical Buildings (E-Houses)", slug: "blast-resistant-buildings-ehouses" }
    ],
    applications: [
      "Industrial warehouse, refinery building, and processing plant erection.",
      "Heavy equipment concrete pads, dynamic compressor table foundations.",
      "Modular blast-resistant technical building deployment for control rooms.",
      "Firewater ring mains, hydrant networks, and HVAC ducting installation.",
      "Multi-discipline contractor site offices and specialized containerized units.",
      "Temporary site power generation, distribution boards, and lighting towers."
    ]
  }
];

export default industriesData;

