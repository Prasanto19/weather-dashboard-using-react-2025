import { useState } from "react";
import AppLogo from "./appLogo/AppLogo";
import FavouriteListModal from "./favouriteListModal/FavouriteListModal";
import FavouriteLocations from "./favouriteLoactions/FavouriteLocations";
import SearchForm from "./searchForm/SearchForm";
export default function Header() {
  const [showFavModal, setShowFavModel] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <AppLogo />

        <div className="flex items-center gap-4 relative">
          <SearchForm />
          <FavouriteLocations
            onShow={() => setShowFavModel(!showFavModal)}
            showFavModal={showFavModal}
          />

          {/* <!-- Modal --> */}
          {showFavModal && <FavouriteListModal />}
        </div>
      </nav>
    </header>
  );
}
