import { Link } from "react-router-dom";

const Station = (props) => {

  return (
            <Link to={{pathname: `/InfoPage`, search: `?id=` + props.station.$id}}  className="location-box" key={props.station.stationid}>
              <div className="info-box">
                <h3>{props.station.stationname
                .replace("Meetstation ", "")
                }</h3>
                <h5>
                  {props.station.temperature
                    ? `${props.station.temperature}°`
                    : "Niet Beschikbaar"}
                </h5>
                <h5>
                  {props.station.windspeed
                    ? `${props.station.windspeed} km/u`
                    : "Niet Beschikbaar"}
                </h5>
                <h5>
                  {props.station.winddirection
                    ? `${props.station.winddirection}`
                    : "Niet Beschikbaar"}
                </h5>
              </div>
              <div className="space"></div>
              
              <button onClick={(event) => {event.preventDefault(); props.addFavorite(props.station);}} className="favorite">
                {
                  true
                    ? "station volgen"
                    : "station onvolgen"
                }
              </button>
            </Link>
  );
};

export default Station;