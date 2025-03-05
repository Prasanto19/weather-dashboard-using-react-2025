/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import SearchIcon from "../../../../src/assets/search.svg";
import { getLocationByName, getLocations } from "../../../data/location-data";

import { LocationContext, WeatherContext } from "../../../context";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchList, setShowSearchList] = useState(false);
  const { setSelectedLocation } = useContext(LocationContext);

  const { weatherData } = useContext(WeatherContext);
  const locationList = getLocations();
  const [filteredLocations, setFilteredLocations] = useState(locationList);
  function fetchData(location) {
    const fetchedLocation = getLocationByName(location);
    setSelectedLocation({ ...fetchedLocation });
  }
  console.log(weatherData);

  function handleInputChange(e) {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    console.log("Locations : ", locationList[0].location.toLowerCase());

    const filteredLocations = locationList.filter((location) =>
      location.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredLocations(filteredLocations);
    console.log("searchTerm : ", searchTerm);
    console.log("filteredLocations : ", filteredLocations);
  }
  function handleSearchList() {
    setShowSearchList(true);
  }
  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
          onChange={(e) => handleInputChange(e)}
          onFocus={handleSearchList}
          // onBlur={handleSearchList}
        />
        <img src={SearchIcon} alt="Search Icon" />
      </div>
      {showSearchList && (
        <div
          className=" bg-sky-400/100
 rounded-md border-gray-500 absolute  top-16 text-white shadow-lg h-48 w-1/2 overflow-auto
"
        >
          <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
            {filteredLocations.length > 0 ? (
              filteredLocations.map((location) => (
                <li
                  className={`  shadow-md ${
                    location.location === weatherData.location
                      ? "bg-sky-500/100"
                      : "hover:bg-sky-300/100"
                  }`}
                  key={location.location}
                  onClick={() => fetchData(location.location)}
                >
                  {location.location}
                </li>
              ))
            ) : (
              <p>No city found!</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
