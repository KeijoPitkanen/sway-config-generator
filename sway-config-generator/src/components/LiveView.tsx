import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

function LiveView() {
  const wallpaperWebURL = useSelector(
    (state: RootState) => state.parameters.wallpaperWebURL,
  );

  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        backgroundImage: wallpaperWebURL ? `url(${wallpaperWebURL})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      live view
    </div>
  );
}

export default LiveView;
