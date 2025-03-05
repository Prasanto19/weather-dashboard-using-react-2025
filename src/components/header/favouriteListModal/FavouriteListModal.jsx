import { useContext } from "react";
import {
  FavouriteContext,
  LocationContext,
  WeatherContext,
} from "../../../context";
export default function FavouriteListModal() {
  const { favourites } = useContext(FavouriteContext);
  const { setSelectedLocation } = useContext(LocationContext);

  const { weatherData } = useContext(WeatherContext);
  return (
    <div className="max-w-xs py-4 bg-sky-400/100 rounded-md border-gray-500 absolute right-0 top-16 text-white shadow-lg ">
      <h3 className="text-lg text-black font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favourites.length > 0 ? (
          favourites.map((fav) => (
            <li
              key={fav.location}
              className={`shadow-lg ${
                fav.location === weatherData.location
                  ? "bg-sky-500"
                  : "hover:bg-sky-300/100"
              }`}
              onClick={() => setSelectedLocation({ ...fav })}
            >
              {fav.location}
            </li>
          ))
        ) : (
          <p>Nothing is added to the Favourites!</p>
        )}
      </ul>
    </div>
  );
}
