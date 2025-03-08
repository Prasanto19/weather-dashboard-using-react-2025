import HeartIcon from "../../../../src/assets/heart.svg";
// eslint-disable-next-line react/prop-types
export default function FavouriteLocations({ onShow, showFavModal }) {
  let favModalStyle;
  if (showFavModal) {
    favModalStyle = "bg-black/30";
  } else {
    favModalStyle = "";
  }
  return (
    <div
      className={`p-2 hover:bg-black/30 text-white  cursor-pointer flex gap-2 items-center rounded-md ${favModalStyle}`}
      onClick={onShow}
    >
      <img src={HeartIcon} alt="HeartIcon" />
      <span>Favourite Locations</span>
    </div>
  );
}
