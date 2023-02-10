import { useState } from "react";

export const useModalHooks = () => {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState("");
  const [open, setOpen] = useState(false);

  const handleImagePopupOpen = (image: any) => {
    setImage(image);
    setOpen(true);
  };
  const handleVideoPopupOpen = (videoSrc: string) => {
    setVideo(videoSrc);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return {
    modalState: {
      open: open,
      onClose: handleClose,
      videoSrc: video,
      image: image,
      onImageOpen: handleImagePopupOpen,
      onVideoOpen: handleVideoPopupOpen,
    },
  };
};
