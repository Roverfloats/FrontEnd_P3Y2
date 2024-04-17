import Station from "./Station";
import { useState, useEffect } from "react";

const Locations = (props) => {

  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setFilteredUsers(props.stationList?.actual?.stationmeasurements);
  },[props]);

  const handleFilter = (value) => {
    const filtered = props.stationList?.actual?.stationmeasurements.filter(user => user.stationname.toLowerCase().includes(value));
    setFilteredUsers(filtered);
    console.log(value);
  };

  return (
    <div>
      <div className="favorite-bar">
        {props.favoriteList?.map(station => {
          return (
            <Station addFavorite={props.addFavorite} station={station} key={station.$id} />
          )
        })}
      </div>
      <div>
      <input onChange={event => handleFilter(event.target.value)} />
      </div>
      <div className="all">
        {filteredUsers?.map((station) => {
          return (
            <Station favoriteList={props.favoriteList} addFavorite={props.addFavorite} station={station} key={station.$id} />
          );
        })}
      </div>
    </div>
  );
};

export default Locations;