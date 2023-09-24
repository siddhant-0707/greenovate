// Your JSON data
const jsonData = [
  {
    factor_id: 1,
    factor_name: "Vehicles",
    subfactors: [
      {
        subfactor_id: 1,
        subfactor_name: "Car",
        subsubfactors: [
          {
            subsubfactor_id: 5,
            subsubfactor_name: "lpg",
            emission_factor: 0.1978,
            description: "Specific emission for LPG cars",
            unit: "Kgco2e",
          },
          {
            subsubfactor_id: 4,
            subsubfactor_name: "cng",
            emission_factor: 0.1752,
            description: "Specific emission for CNG cars",
            unit: "Kgco2e",
          },
          {
            subsubfactor_id: 3,
            subsubfactor_name: "ev",
            emission_factor: 0.0514,
            description: "Specific emission for electric cars",
            unit: "Kgco2e",
          },
          {
            subsubfactor_id: 2,
            subsubfactor_name: "gasoline",
            emission_factor: 0.1705,
            description: "Specific emission for gasoline cars",
            unit: "Kgco2e",
          },
          {
            subsubfactor_id: 1,
            subsubfactor_name: "diesel",
            emission_factor: 0.1708,
            description: "Specific emission for diesel cars",
            unit: "Kgco2e",
          },
        ],
      },
      {
        subfactor_id: 2,
        subfactor_name: "Bus",
        subsubfactors: [
          {
            subsubfactor_id: 6,
            subsubfactor_name: "passenger-km",
            emission_factor: 0.1778,
            description: "Specific emission per passenger-kilometer for buses",
            unit: "Kgco2e/pass-km",
          },
        ],
      },
      {
        subfactor_id: 3,
        subfactor_name: "Vans",
        subsubfactors: [
          {
            subsubfactor_id: 13,
            subsubfactor_name: "Petrol van - Class III (1.74 to 3.5 tonnes)",
            emission_factor: 0.3261,
            description: "Specific emission for Petrol vans (Class III)",
            unit: "Kgco2e/km",
          },
          {
            subsubfactor_id: 12,
            subsubfactor_name: "Diesel van - Class III (1.74 to 3.5 tonnes)",
            emission_factor: 0.2548,
            description: "Specific emission for Diesel vans (Class III)",
            unit: "Kgco2e/km",
          },
          {
            subsubfactor_id: 11,
            subsubfactor_name: "Petrol van - Class II (1.305 to 1.74 tonnes)",
            emission_factor: 0.2046,
            description: "Specific emission for Petrol vans (Class II)",
            unit: "Kgco2e/km",
          },
          {
            subsubfactor_id: 10,
            subsubfactor_name: "Diesel van - Class II (1.305 to 1.74 tonnes)",
            emission_factor: 0.1751,
            description: "Specific emission for Diesel vans (Class II)",
            unit: "Kgco2e/km",
          },
          {
            subsubfactor_id: 9,
            subsubfactor_name: "Diesel van - Class I (up to 1.305 tonnes)",
            emission_factor: 0.1467,
            description: "Specific emission for Diesel vans (Class I)",
            unit: "Kgco2e/km",
          },
          {
            subsubfactor_id: 8,
            subsubfactor_name: "Petrol van - Class I (up to 1.305 tonnes)",
            emission_factor: 0.1969,
            description: "Specific emission for Petrol vans (Class I)",
            unit: "Kgco2e/km",
          },
          {
            subsubfactor_id: 7,
            subsubfactor_name: "Battery EV vans - average (up to 3.5 tonnes)",
            emission_factor: 0.057,
            description: "Specific emission for Battery EV vans",
            unit: "Kgco2e/km",
          },
        ],
      },
      {
        subfactor_id: 4,
        subfactor_name: "Transportation",
        subsubfactors: [
          {
            subsubfactor_id: 20,
            subsubfactor_name: "other",
            emission_factor: 1.4529,
            description: "Specific emission for other transportation",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 19,
            subsubfactor_name: "Road Freight/Inland transport",
            emission_factor: 0.776,
            description:
              "Specific emission for road freight and inland transport",
            unit: "Kgco2e/USD",
          },
          {
            subsubfactor_id: 18,
            subsubfactor_name: "Rail (freight)",
            emission_factor: 0.776,
            description: "Specific emission for rail freight",
            unit: "Kgco2e/USD",
          },
          {
            subsubfactor_id: 17,
            subsubfactor_name: "Water freight transport services",
            emission_factor: 1.9324,
            description:
              "Specific emission for water freight transport services",
            unit: "Kgco2e/USD",
          },
          {
            subsubfactor_id: 16,
            subsubfactor_name: "Air freight",
            emission_factor: 1.6372,
            description: "Specific emission for air freight",
            unit: "Kgco2e/USD",
          },
          {
            subsubfactor_id: 15,
            subsubfactor_name: "Upstream transportation and distribution",
            emission_factor: 0.484,
            description:
              "Specific emission for upstream transportation and distribution",
            unit: "kg/USD",
          },
          {
            subsubfactor_id: 14,
            subsubfactor_name:
              "Warehousing and support services for transportation",
            emission_factor: 0.181,
            description:
              "Specific emission for warehousing and support services",
            unit: "kg/GBP",
          },
        ],
      },
    ],
  },
  {
    factor_id: 2,
    factor_name: "Building",
    subfactors: [
      {
        subfactor_id: 5,
        subfactor_name: "Grid Electricity",
        subsubfactors: [
          {
            subsubfactor_id: 21,
            subsubfactor_name: "Grid Electricity - Grid Supply",
            emission_factor: 0.7132,
            description:
              "Specific emission for electricity supplied from the grid",
            unit: "kg/kWh",
          },
        ],
      },
      {
        subfactor_id: 6,
        subfactor_name: "Energy Generation",
        subsubfactors: [
          {
            subsubfactor_id: 27,
            subsubfactor_name: "Energy Generation - Other",
            emission_factor: 1.1626,
            description:
              "Specific emission for electricity generation not elsewhere specified",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 26,
            subsubfactor_name: "Energy Generation - Wind",
            emission_factor: 0.7056,
            description:
              "Specific emission for electricity generated from wind",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 25,
            subsubfactor_name:
              "Energy Generation - Petroleum and Oil Derivatives",
            emission_factor: 3.8659,
            description:
              "Specific emission for electricity generated from petroleum and other oil derivatives",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 24,
            subsubfactor_name: "Energy Generation - Nuclear",
            emission_factor: 0.2324,
            description:
              "Specific emission for electricity generated from nuclear",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 23,
            subsubfactor_name: "Energy Generation - Hydro",
            emission_factor: 0.1972,
            description:
              "Specific emission for electricity generated from hydro",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 22,
            subsubfactor_name: "Energy Generation - Coal",
            emission_factor: 25.5489,
            description:
              "Specific emission for electricity generated from coal",
            unit: "kg/EUR",
          },
        ],
      },
      {
        subfactor_id: 7,
        subfactor_name: "Gas",
        subsubfactors: [
          {
            subsubfactor_id: 32,
            subsubfactor_name: "Gas - Gas/Diesel Oil",
            emission_factor: 1.4262,
            description: "Specific emission for gas/diesel oil",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 31,
            subsubfactor_name: "Gas - Natural Gas Liquids",
            emission_factor: 7.0704,
            description: "Specific emission for natural gas liquids",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 30,
            subsubfactor_name: "Gas - Gas Works Gas",
            emission_factor: 1.3999,
            description: "Specific emission for gas works gas",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 29,
            subsubfactor_name: "Gas - Coke Oven Gas",
            emission_factor: 1.3988,
            description: "Specific emission for coke oven gas",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 28,
            subsubfactor_name: "Gas - Blast Furnace Gas",
            emission_factor: 1.3849,
            description: "Specific emission for blast furnace gas",
            unit: "kg/EUR",
          },
        ],
      },
      {
        subfactor_id: 8,
        subfactor_name: "Pipeline",
        subsubfactors: [
          {
            subsubfactor_id: 33,
            subsubfactor_name: "Pipeline - Pipeline Transport",
            emission_factor: 1.668,
            description: "Specific emission for pipeline transport",
            unit: "kg/USD",
          },
        ],
      },
      {
        subfactor_id: 9,
        subfactor_name: "Facility",
        subsubfactors: [
          {
            subsubfactor_id: 40,
            subsubfactor_name: "Facility - Other Facility",
            emission_factor: 39.808,
            description: "Specific emission for other facility owned",
            unit: "kg/m2",
          },
          {
            subsubfactor_id: 39,
            subsubfactor_name: "Facility - Office Facility",
            emission_factor: 40.251,
            description:
              "Specific emission for office facility owned [scope 1]",
            unit: "kg/m2",
          },
          {
            subsubfactor_id: 38,
            subsubfactor_name: "Facility - Manufacturing Facility",
            emission_factor: 392.346,
            description: "Specific emission for manufacturing facility owned",
            unit: "kg/m2",
          },
          {
            subsubfactor_id: 37,
            subsubfactor_name: "Facility - Lodging Facility",
            emission_factor: 109.352,
            description:
              "Specific emission for lodging facility owned [scope 1]",
            unit: "kg/m2",
          },
          {
            subsubfactor_id: 36,
            subsubfactor_name: "Facility - Healthcare Facility",
            emission_factor: 82.452,
            description:
              "Specific emission for healthcare facility owned [scope 1]",
            unit: "kg/m2",
          },
          {
            subsubfactor_id: 35,
            subsubfactor_name: "Facility - Food Sale Facility",
            emission_factor: 29.528,
            description:
              "Specific emission for food sale facility owned [scope 1]",
            unit: "kg/m2",
          },
          {
            subsubfactor_id: 34,
            subsubfactor_name: "Facility - Education Facility",
            emission_factor: 148.866,
            description:
              "Specific emission for education facility owned [scope 1]",
            unit: "kg/m2",
          },
        ],
      },
      {
        subfactor_id: 11,
        subfactor_name: "Fugitive Gases",
        subsubfactors: [
          {
            subsubfactor_id: 42,
            subsubfactor_name:
              "Fugitive Gases - Domestic Heating Oil/Coal/Coke",
            emission_factor: 0.528,
            description: "Specific emission for domestic heating oil/coal/coke",
            unit: "kg/GBP",
          },
          {
            subsubfactor_id: 41,
            subsubfactor_name: "Fugitive Gases - Purchased Heat and Steam",
            emission_factor: 66.398125,
            description: "Specific emission for purchased heat and steam",
            unit: "kg/MMBTU",
          },
        ],
      },
      {
        subfactor_id: 12,
        subfactor_name: "Accomodation",
        subsubfactors: [
          {
            subsubfactor_id: 43,
            subsubfactor_name: "Accommodation - Hotel and Restaurant Services",
            emission_factor: 1.0854,
            description: "Specific emission for hotel and restaurant services",
            unit: "kg/EUR",
          },
        ],
      },
    ],
  },
  {
    factor_id: 3,
    factor_name: "Water",
    subfactors: [
      {
        subfactor_id: 13,
        subfactor_name: "Default",
        subsubfactors: [
          {
            subsubfactor_id: 46,
            subsubfactor_name:
              "Collected and Purified Water/Distribution of Water (Services)",
            emission_factor: 0.3196,
            description:
              "Specific emission for collected and purified water/distribution of water (services)",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 45,
            subsubfactor_name: "Water Treatment",
            emission_factor: 0.272,
            description: "Specific emission for water treatment",
            unit: "kg/m3",
          },
          {
            subsubfactor_id: 44,
            subsubfactor_name: "Water Supply",
            emission_factor: 0.344,
            description: "Specific emission for water supply",
            unit: "kg/m3",
          },
        ],
      },
    ],
  },
  {
    factor_id: 5,
    factor_name: "Equipment",
    subfactors: [
      {
        subfactor_id: 15,
        subfactor_name: "Default",
        subsubfactors: [
          {
            subsubfactor_id: 52,
            subsubfactor_name: "Office Machinery and Computers",
            emission_factor: 1.0591,
            description: "Specific emission for office machinery and computers",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 51,
            subsubfactor_name:
              "Machinery and Equipment (Not Elsewhere Specified)",
            emission_factor: 1.1501,
            description:
              "Specific emission for machinery and equipment (not elsewhere specified)",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 50,
            subsubfactor_name:
              "Rental of Machinery and Equipment (without operator) and of Personal and Household Goods (Services)",
            emission_factor: 0.7381,
            description:
              "Specific emission for rental of machinery and equipment (without operator) and of personal and household goods (services)",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 49,
            subsubfactor_name:
              "Radio/Television and Communication Equipment and Apparatus",
            emission_factor: 1.01,
            description:
              "Specific emission for radio/television and communication equipment and apparatus",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 48,
            subsubfactor_name:
              "Medical/Precision and Optical Instruments/Watches and Clocks",
            emission_factor: 0.6407,
            description:
              "Specific emission for medical/precision and optical instruments/watches and clocks",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 47,
            subsubfactor_name: "Electrical Machinery and Apparatus",
            emission_factor: 1.3437,
            description:
              "Specific emission for electrical machinery and apparatus",
            unit: "kg/EUR",
          },
        ],
      },
    ],
  },
  {
    factor_id: 6,
    factor_name: "Product",
    subfactors: [
      {
        subfactor_id: 16,
        subfactor_name: "Default",
        subsubfactors: [
          {
            subsubfactor_id: 68,
            subsubfactor_name: "Textiles",
            emission_factor: 1.163,
            description: "Specific emission for textiles",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 67,
            subsubfactor_name: "Paper and Paper Products",
            emission_factor: 0.8273,
            description: "Specific emission for paper and paper products",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 66,
            subsubfactor_name:
              "Retail Trade Except of Motor Vehicles and Motorcycles/Repair of Household Goods",
            emission_factor: 0.2236,
            description:
              "Specific emission for retail trade except of motor vehicles and motorcycles/repair of household goods",
            unit: "kg/USD",
          },
          {
            subsubfactor_id: 65,
            subsubfactor_name:
              "Retail Trade (Except of Motor Vehicles and Motorcycles) and Repair of Personal and Household Goods (Services)",
            emission_factor: 0.3356,
            description:
              "Specific emission for retail trade (except of motor vehicles and motorcycles) and repair of personal and household goods (services)",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 64,
            subsubfactor_name: "Wearing Apparel/Furs",
            emission_factor: 0.7317,
            description: "Specific emission for wearing apparel/furs",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 63,
            subsubfactor_name: "Vegetable Oils and Fats",
            emission_factor: 0.9315,
            description: "Specific emission for vegetable oils and fats",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 62,
            subsubfactor_name: "Sugar",
            emission_factor: 0.61,
            description: "Specific emission for sugar",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 61,
            subsubfactor_name: "Processed Rice",
            emission_factor: 3.6888,
            description: "Specific emission for processed rice",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 60,
            subsubfactor_name: "Meat Products",
            emission_factor: 0.8778,
            description: "Specific emission for meat products",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 59,
            subsubfactor_name: "Leather/Leather and Footwear",
            emission_factor: 0.9437,
            description: "Specific emission for leather/leather and footwear",
            unit: "kg/USD",
          },
          {
            subsubfactor_id: 58,
            subsubfactor_name:
              "Furniture/Other Manufactured Goods (Not Elsewhere Specified)",
            emission_factor: 0.9189,
            description:
              "Specific emission for furniture/other manufactured goods (not elsewhere specified)",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 57,
            subsubfactor_name: "Food Products (Not Elsewhere Specified)",
            emission_factor: 1.0279,
            description:
              "Specific emission for food products (not elsewhere specified)",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 56,
            subsubfactor_name: "Fish Products",
            emission_factor: 0.3505,
            description: "Specific emission for fish products",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 55,
            subsubfactor_name: "Dairy Products",
            emission_factor: 2.1024,
            description: "Specific emission for dairy products",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 54,
            subsubfactor_name: "Beverages",
            emission_factor: 1.321,
            description: "Specific emission for beverages",
            unit: "kg/EUR",
          },
          {
            subsubfactor_id: 53,
            subsubfactor_name: "Private Households with Employed Persons",
            emission_factor: 0.5637,
            description:
              "Specific emission for private households with employed persons",
            unit: "kg/EUR",
          },
        ],
      },
    ],
  },
];

// Function to extract and sort emission factors
function extractAndSortEmissionFactors(data) {
  let emissionFactors = [];

  // Iterate through the data
  for (const factor of data) {
    for (const subfactor of factor.subfactors) {
      const subsubfactorsReversed = subfactor.subsubfactors.slice().reverse();

      for (const subsubfactor of subsubfactorsReversed) {
        emissionFactors.push(subsubfactor.emission_factor);
      }
    }
  }

  return emissionFactors;
}

// Call the function to get the sorted emission factors
const sortedEmissionFactors = extractAndSortEmissionFactors(jsonData);

// Log the result in the desired format
console.log(sortedEmissionFactors);

export default sortedEmissionFactors;