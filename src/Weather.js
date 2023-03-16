import React from "react";
import axios from "axios";
import { Dna } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }
  let apiKey = "b1a8336ff1e05b64da5625e4158fbea3";
  let unit = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndpoint}q=${props.city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <h2>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </h2>
  );
}
