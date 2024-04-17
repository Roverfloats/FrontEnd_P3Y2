import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const InfoPage = () => {

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id") || "";
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://data.buienradar.nl/2.0/feed/json")
      .then((response) => response.json())
      .then((json) => setTodos(json.actual.stationmeasurements));
  }, []);

  const stationData = todos.find((station) => station.$id == id);

  return (
    <div>
        <h1>{stationData?.stationname.replace("Meetstation ", "")}</h1>

        <p>Temperatuur: {stationData?.temperature
                    ? `${stationData?.temperature}°`
                    : "Niet Beschikbaar"}</p>
        <p>Windsnelheid: {stationData?.windspeed
                    ? `${stationData?.windspeed} km/u`
                    : "Niet Beschikbaar"}</p>
        <p>Laatste Update: {stationData?.timestamp
                    ? `${stationData?.timestamp.replace("T", " ")}`
                    : "Niet Beschikbaar"}</p>
        <p>Windrichting: {stationData?.winddirection
                    ? `${stationData?.winddirection}`
                    : "Niet Beschikbaar"}</p>
    </div>
  );
};

export default InfoPage;