import { React, useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import data from "./data.json";
import sortedEmissionFactors from "./emission-program";

const Measure = () => {
  const [fields, setFields] = useState([
    { name: "", emission: "", result: "" },
  ]);
  const [year, setYear] = useState(2023);

  useEffect(() => {
    // Initialize fields based on the JSON data
    setFields(
      data.emissionRecords.map((record) => ({
        name: record.subsubfactor_name,
        emission: record.input_value.toString(),
        result: record.net_emission.toString(),
      }))
    );
  }, []);

  const addField = () => {
    setFields([...fields, { name: "", emission: "", result: "" }]);
  };

  const removeField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleFieldChange = (index, event) => {
    const { name, value } = event.target;
    const newFields = [...fields];
    newFields[index][name] = value;

    // Calculate the resultant emission value based on your algorithm
    // const calculatedResult = calculateResult(
    //   newFields[index].emission,
    //   newFields[index].spend
    // );
    // newFields[index].result = calculatedResult;

    // setFields(newFields);
    const calculatedResult = calculateResult(value, index);
    newFields[index].result = calculatedResult;

    setFields(newFields);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const calculateResult = (emission, index) => {
    if (index >= 0 && index < sortedEmissionFactors.length) {
      const emissionFactor = sortedEmissionFactors[index];
      return parseFloat(emission) * emissionFactor;
    } else {
      return 0;
    }
  };

  const formatDataForAPI = () => {
    const records = fields.map((field, index) => ({
      subsubfactorId: index + 1,
      inputValue: parseFloat(field.emission),
    }));

    const apiData = {
      records,
      year: parseFloat(year),
    };

    return apiData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiData = formatDataForAPI();

    console.log("Formatted data for API:", apiData);

    const options = {
      method: "POST",
      url: "https://greenovate-server.vercel.app/api/emission/insert-records",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: apiData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar />
      <h2>Emission and Spending Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Year:</label>
        <input
          type="number"
          name="year"
          value={year}
          onChange={(e) => handleYearChange(e)}
          required
        />
        {fields.map((field, index) => (
          <div key={index}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={field.name}
              // onChange={(e) => handleFieldChange(index, e)}
              readonly
            />
            <label>Emission Value:</label>
            <input
              type="number"
              name="emission"
              value={field.emission}
              onChange={(e) => handleFieldChange(index, e)}
              required
            />
            <label>Resultant Emission:</label>
            <input type="number" name="result" value={field.result} readOnly />
            <button type="button" onClick={() => removeField(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addField}>
          Add Field
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Measure;
