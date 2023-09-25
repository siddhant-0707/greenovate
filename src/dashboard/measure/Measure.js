import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Button,
  Col,
  Collapse,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import css from "./styles.module.css";
const Measure = () => {
  const [buildingToggle, setBuildingToggle] = useState(false);
  const [vehiclesToggle, setVechiclesToggle] = useState(false);
  const [waterToggle, setWaterToggle] = useState(false);
  const [equipmentToggle, setEquipmentToggle] = useState(false);
  const [productToggle, setProductToggle] = useState(false);
  const [buildingData, setBuildingData] = useState({
    quarter: 1,
    GridElectricity: { GridElectricityGridSupply: 0 },
    EnergyGeneration: {
      EnergyGenerationOther: 0,
      EnergyGenerationWind: 0,
      EnergyGenerationPetroleumandOilDerivatives: 0,
      EnergyGenerationNuclear: 0,
      EnergyGenerationHydro: 0,
      EnergyGenerationCoal: 0,
    },
    Gas: {
      GasDieselOil: 0,
      NaturalGasLiquids: 0,
      GasWorksGas: 0,
      CokeOvenGas: 0,
      BlastFurnaceGas: 0,
    },
    Pipeline: { PipelineTransport: 0 },
    Facility: {
      OfficeFacility: 0,
      ManufacturingFacility: 0,
      LodgingFacility: 0,
      HealthcareFacility: 0,
      FoodSaleFacility: 0,
      EducationFacility: 0,
      OtherFacility: 0,
    },
    FugitiveGases: {
      DomesticHeatingOilCoalCoke: 0,
      PurchasedHeatandSteam: 0,
    },
    Accomodation: { HotelandRestaurantServices: 0 },
  });
/*   const [vehiclesData, setVehiclesData] = useState({
    quarter: 1,
    Car: { lpg: 0, cng: 0, ev: 0, gasoline: 0, diesel: 0 },
    Bus: {
      passengerkm: 0,
    },
    Vans: {
      PetrolVanClassIII: 0,
      DieselVanClassIII: 0,
      PetrolVanClassI: 0,
      DieselVanClassI: 0,
      PetrolVanClassII: 0,
      DieselVanClassII: 0,
      BatteryEVvans: 0,
    },
    Transportation: {
      other: 0,
      RoadFreightInlandtransport: 0,
      Rail: 0,
      Waterfreighttransportservices: 0,
      Airfreight: 0,
      Upstreamtransportationanddistribution: 0,
      Warehousingandsupportservicesfortransportation: 0,
    },
  }); */
  const handleDataChange = (property, value) => {
    setBuildingData((prevState) => ({
      ...prevState,
      [property]: value,
    }));
  };
  return (
    <>
      <Navbar />
      <Container
        fluid
        style={{ padding: "5rem 25rem 16rem", backgroundColor: "#F0F0F0" }}
        className={css.main}
      >
        <Row>
          <Row>
            <Col>
              <Button
                style={{
                  backgroundColor: "#053B50",
                  borderColor: "#053B50",
                }}
                onClick={() => {
                  console.log(buildingData.Accomodation);
                }}
              >
                Save
              </Button>
            </Col>
          </Row>
          <Col
            xs={4}
            style={{ position: "sticky", top: "0", zIndex: "1" }}
            className="pt-5"
          >
            <div
              onClick={() => {
                setBuildingToggle(true);
                setEquipmentToggle(false);
                setProductToggle(false);
                setVechiclesToggle(false);
                setWaterToggle(false);
              }}
              className="alert alert-light"
            >
              Building
            </div>
            <div
              onClick={() => {
                setBuildingToggle(false);
                setEquipmentToggle(false);
                setProductToggle(false);
                setVechiclesToggle(true);
                setWaterToggle(false);
              }}
              className="alert alert-light"
            >
              Vehicles
            </div>
            <div
              onClick={() => {
                setBuildingToggle(false);
                setEquipmentToggle(false);
                setProductToggle(false);
                setVechiclesToggle(false);
                setWaterToggle(true);
              }}
              className="alert alert-light"
            >
              Water
            </div>
            <div
              onClick={() => {
                setBuildingToggle(false);
                setEquipmentToggle(true);
                setProductToggle(false);
                setVechiclesToggle(false);
                setWaterToggle(false);
              }}
              className="alert alert-light"
            >
              Equipment
            </div>
            <div
              onClick={() => {
                setBuildingToggle(false);
                setEquipmentToggle(false);
                setProductToggle(true);
                setVechiclesToggle(false);
                setWaterToggle(false);
              }}
              className="alert alert-light"
            >
              Product
            </div>
          </Col>
          <Col xs={8}>
            <Row className="pt-5">
              <Button
                onClick={() => setBuildingToggle(!buildingToggle)}
                aria-controls="example-collapse-text"
                aria-expanded={buildingToggle}
                style={{
                  backgroundColor: "#053B50",
                  borderColor: "#053B50",
                  textAlign: "start",
                  width: "100%",
                }}
              >
                Building
              </Button>
              <Collapse in={buildingToggle}>
                <div id="example-collapse-text" className="pt-3">
                  <h3 className="pb-3">Grid Electricity</h3>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Grid Electricity - Grid Supply"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("GridElectricity", {
                          ...buildingData.GridElectricity,
                          GridElectricityGridSupply: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/kWh</InputGroup.Text>
                  </InputGroup>

                  <h3 className="pb-3">Energy Generation</h3>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Energy Generation - Petroleum and Oil Derivatives"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationPetroleumandOilDerivatives:
                            e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Specific emission for electricity generated from nuclear"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationNuclear: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Energy Generation - Wind"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationWind: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Energy Generation - Hydro"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationHydro: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Energy Generation - Coal"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationCoal: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Energy Generation - Other"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationOther: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>

                  <h3 className="pb-3">Gas</h3>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Gas - Gas/Diesel Oil"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Gas", {
                          ...buildingData.Gas,
                          GasDieselOil: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Gas - Natural Gas Liquids"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Gas", {
                          ...buildingData.Gas,
                          NaturalGasLiquids: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Gas - Gas Works Gas"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Gas", {
                          ...buildingData.Gas,
                          GasWorksGas: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Gas - Coke Oven Gas"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Gas", {
                          ...buildingData.Gas,
                          CokeOvenGas: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Gas - Blast Furnace Gas"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Gas", {
                          ...buildingData.Gas,
                          BlastFurnaceGas: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>

                  <h3 className="pb-3">Pipeline</h3>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Pipeline - Pipeline Transport"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Pipeline", {
                          ...buildingData.Pipeline,
                          PipelineTransport: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/USD</InputGroup.Text>
                  </InputGroup>

                  <h3 className="pb-3">Facility</h3>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Facility - Office Facility"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Facility", {
                          ...buildingData.Facility,
                          OfficeFacility: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/m2</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Facility - Manufacturing Facility"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Facility", {
                          ...buildingData.Facility,
                          ManufacturingFacility: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/m2</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Facility - Lodging Facility"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Facility", {
                          ...buildingData.Facility,
                          LodgingFacility: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/m2</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Facility - Healthcare Facility"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Facility", {
                          ...buildingData.Facility,
                          HealthcareFacility: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/m2</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Facility - Food Sale Facility"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Facility", {
                          ...buildingData.Facility,
                          FoodSaleFacility: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/m2</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Facility - Education Facility"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Facility", {
                          ...buildingData.Facility,
                          EducationFacility: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/m2</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Facility - Other Facility"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Facility", {
                          ...buildingData.Facility,
                          OtherFacility: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/m2</InputGroup.Text>
                  </InputGroup>
                  <h3 className="pb-3">Fugitive Gases</h3>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Fugitive Gases - Domestic Heating Oil/Coal/Coke"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("FugitiveGases", {
                          ...buildingData.FugitiveGases,
                          DomesticHeatingOilCoalCoke: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/GBP</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Fugitive Gases - Purchased Heat and Steam"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("FugitiveGases", {
                          ...buildingData.FugitiveGases,
                          PurchasedHeatandSteam: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">
                      kg/MMBTU
                    </InputGroup.Text>
                  </InputGroup>
                  <h3 className="pb-3">Accomodation</h3>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Accommodation - Hotel and Restaurant Services"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Accomodation", {
                          ...buildingData.Facility,
                          HotelandRestaurantServices: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                </div>
              </Collapse>
            </Row>
            {/* --------------------------------------------------------------------------- */}

            <Row className="pt-5">
              <Button
                onClick={() => setVechiclesToggle(!vehiclesToggle)}
                aria-controls="example-collapse-text"
                aria-expanded={vehiclesToggle}
                style={{
                  backgroundColor: "#053B50",
                  borderColor: "#053B50",
                  textAlign: "start",
                  width: "100%",
                }}
              >
                Vehicles
              </Button>
              <Collapse in={vehiclesToggle}>
                <div id="example-collapse-text" className="pt-3">
                  <h3 className="pb-3">Car</h3>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="LPG"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationPetroleumandOilDerivatives:
                            e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">Kgco2e</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="CNG"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationNuclear: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">Kgco2e</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="EV"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationWind: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">Kgco2e</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Gasoline"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationHydro: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">Kgco2e</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Diesel"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationCoal: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">Kgco2e</InputGroup.Text>
                  </InputGroup>

                  <h3 className="pb-3">Bus</h3>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Passenger-km"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Gas", {
                          ...buildingData.Gas,
                          GasDieselOil: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">
                      Kgco2e/pass-km
                    </InputGroup.Text>
                  </InputGroup>

                  <h3 className="pb-3">Vans</h3>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Petrol van - Class III (1.74 to 3.5 tonnes)"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Pipeline", {
                          ...buildingData.Pipeline,
                          PipelineTransport: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">
                      Kgco2e/km
                    </InputGroup.Text>
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Diesel van - Class III (1.74 to 3.5 tonnes)"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Facility", {
                          ...buildingData.Facility,
                          OfficeFacility: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">
                      Kgco2e/km
                    </InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Petrol van - Class II (1.305 to 1.74 tonnes)"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Facility", {
                          ...buildingData.Facility,
                          ManufacturingFacility: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">
                      Kgco2e/km
                    </InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Diesel van - Class II (1.305 to 1.74 tonnes)"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Facility", {
                          ...buildingData.Facility,
                          LodgingFacility: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">
                      Kgco2e/km
                    </InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Diesel van - Class I (up to 1.305 tonnes)"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Facility", {
                          ...buildingData.Facility,
                          HealthcareFacility: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">
                      Kgco2e/km
                    </InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Petrol van - Class I (up to 1.305 tonnes)"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Facility", {
                          ...buildingData.Facility,
                          FoodSaleFacility: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">
                      Kgco2e/km
                    </InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Battery EV vans - average (up to 3.5 tonnes)"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Facility", {
                          ...buildingData.Facility,
                          EducationFacility: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">
                      Kgco2e/km
                    </InputGroup.Text>
                  </InputGroup>
                  <h3 className="pb-3">Transportation</h3>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Road Freight/Inland transport"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("FugitiveGases", {
                          ...buildingData.FugitiveGases,
                          DomesticHeatingOilCoalCoke: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">
                      Kgco2e/USD
                    </InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Rail (freight)"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("FugitiveGases", {
                          ...buildingData.FugitiveGases,
                          PurchasedHeatandSteam: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">
                      Kgco2e/USD
                    </InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Water freight transport services"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Accomodation", {
                          ...buildingData.Facility,
                          HotelandRestaurantServices: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">
                      Kgco2e/USD
                    </InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Air freight"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("FugitiveGases", {
                          ...buildingData.FugitiveGases,
                          DomesticHeatingOilCoalCoke: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">
                      Kgco2e/USD
                    </InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Upstream transportation and distribution"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("FugitiveGases", {
                          ...buildingData.FugitiveGases,
                          PurchasedHeatandSteam: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/USD</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Warehousing and support services for transportation"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Accomodation", {
                          ...buildingData.Facility,
                          HotelandRestaurantServices: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/GBP</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Other"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("Accomodation", {
                          ...buildingData.Facility,
                          HotelandRestaurantServices: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                </div>
              </Collapse>
            </Row>
            {/* --------------------------------------------------------------------------- */}

            <Row className="pt-5">
              <Button
                onClick={() => setWaterToggle(!waterToggle)}
                aria-controls="example-collapse-text"
                aria-expanded={waterToggle}
                style={{
                  backgroundColor: "#053B50",
                  borderColor: "#053B50",
                  textAlign: "start",
                  width: "100%",
                }}
              >
                Water
              </Button>
              <Collapse in={waterToggle}>
                <div id="example-collapse-text" className="pt-3">
                  <h3 className="pb-3">Default</h3>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Collected and Purified Water/Distribution of Water (Services)"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationPetroleumandOilDerivatives:
                            e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Water Treatment"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationNuclear: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/m3</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Water Supply"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationWind: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/m3</InputGroup.Text>
                  </InputGroup>
                </div>
              </Collapse>
            </Row>

            {/* --------------------------------------------------------------------------- */}

            <Row className="pt-5">
              <Button
                onClick={() => setEquipmentToggle(!equipmentToggle)}
                aria-controls="example-collapse-text"
                aria-expanded={equipmentToggle}
                style={{
                  backgroundColor: "#053B50",
                  borderColor: "#053B50",
                  textAlign: "start",
                  width: "100%",
                }}
              >
                Equipment
              </Button>
              <Collapse in={equipmentToggle}>
                <div id="example-collapse-text" className="pt-3">
                  <h3 className="pb-3">Default</h3>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Office Machinery and Computers"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationPetroleumandOilDerivatives:
                            e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Machinery and Equipment (Not Elsewhere Specified)"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationNuclear: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Rental of Machinery and Equipment (without operator) and of Personal and Household Goods (Services)"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationWind: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Radio/Television and Communication Equipment and Apparatus"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationPetroleumandOilDerivatives:
                            e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Medical/Precision and Optical Instruments/Watches and Clocks"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationNuclear: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Electrical Machinery and Apparatus"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationWind: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                </div>
              </Collapse>
            </Row>

            {/* --------------------------------------------------------------------------- */}

            <Row className="pt-5">
              <Button
                onClick={() => setProductToggle(!productToggle)}
                aria-controls="example-collapse-text"
                aria-expanded={productToggle}
                style={{
                  backgroundColor: "#053B50",
                  borderColor: "#053B50",
                  textAlign: "start",
                  width: "100%",
                }}
              >
                Product
              </Button>
              <Collapse in={productToggle}>
                <div id="example-collapse-text" className="pt-3">
                  <h3 className="pb-3">Default</h3>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Textiles"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationPetroleumandOilDerivatives:
                            e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Paper and Paper Products"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationNuclear: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Retail Trade Except of Motor Vehicles and Motorcycles/Repair of Household Goods"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationWind: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/USD</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Retail Trade (Except of Motor Vehicles and Motorcycles) and Repair of Personal and Household Goods (Services)"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationPetroleumandOilDerivatives:
                            e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Wearing Apparel/Furs"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationNuclear: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Vegetable Oils and Fats"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationWind: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Sugar"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationPetroleumandOilDerivatives:
                            e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Processed Rice"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationNuclear: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Meat Products"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationWind: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Leather/Leather and Footwear"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationPetroleumandOilDerivatives:
                            e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/USD</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Furniture/Other Manufactured Goods (Not Elsewhere Specified)"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationNuclear: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Food Products (Not Elsewhere Specified)"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationWind: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Fish Products"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationPetroleumandOilDerivatives:
                            e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Dairy Products"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationNuclear: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Beverages"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationWind: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Private Households with Employed Persons"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        handleDataChange("EnergyGeneration", {
                          ...buildingData.EnergyGeneration,
                          EnergyGenerationPetroleumandOilDerivatives:
                            e.target.value,
                        })
                      }
                    />
                    <InputGroup.Text id="basic-addon2">kg/EUR</InputGroup.Text>
                  </InputGroup>
                </div>
              </Collapse>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Measure;
