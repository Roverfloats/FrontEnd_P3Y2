import Locations from "./Locations";

const HomePage = (props) => {

return(
<div className="main">
    <div className="location-container">
        <Locations favoriteList={props.favoriteList} stationList={props.stationList} addFavorite={props.addFavorite}/>
    </div>
        <div className="radar-area">
            <a>
            <img className="radar" src="https://image.buienradar.nl/2.0/image/single/RadarMapRainNL?height=512&width=500&renderBackground=True&renderBranding=True&renderText=True" />
            </a>
        </div>
    </div>
    );
};

export default HomePage;