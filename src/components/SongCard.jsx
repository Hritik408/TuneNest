import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, i }) => {
  const activeSong = "Test";

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50
      group-hover:flex ${
        activeSong?.title === song.title
          ? "flex bg-black bg-opacity-70"
          : 'hiddn'
      }`}>
        <playPause />
      </div>
      <img alt="song_img" src={song.images?.coverant} />
      </div>
    </div>
  );
};

export default SongCard;
