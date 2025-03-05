import Page from "./Page";
import {
  FavouriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider";

function WeatherDashBoardApp() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default WeatherDashBoardApp;
