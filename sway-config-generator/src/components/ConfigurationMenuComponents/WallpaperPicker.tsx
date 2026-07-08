import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { parametersSetWallpaperWebURL } from "../../store/parametersSlice";

function WallpaperPicker() {
  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);

    dispatch(parametersSetWallpaperWebURL(previewUrl));
  };

  return (
    <div>
      <Button onClick={() => fileInputRef.current?.click()}>
        Choose Image
      </Button>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {imagePreview && <img src={imagePreview} style={{ width: "200px" }} />}
    </div>
  );
}

export default WallpaperPicker;
