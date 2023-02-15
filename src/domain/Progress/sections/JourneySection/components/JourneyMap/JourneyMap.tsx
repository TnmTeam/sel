import { css } from "@emotion/react";
import { Box } from "@mui/material";
import Image from "next/image";
import ImagePath from "@/assets/progress/jouney/img-path.png";
import ImageDottedPath from "@/assets/progress/jouney/img-dotted-path.svg";
import { MapItem } from "./components/MapItem/MapItem";
import { MapItems } from "../../models/mapItem.model";

export const JourneyMap = () => {
  const models = MapItems;
  return (
    <Box css={sx.map}>
      <div css={sx.mapContainer}>
        <BackgroundImage />
        {models.map((it, index) => (
          <MapItem key={index} item={it.item} card={it.card} />
        ))}
      </div>
    </Box>
  );
};

const sx = {
  map: css`
    width: 100%;
    position: absolute;
    bottom: 300px;
    left: 0;
  `,
  mapContainer: css`
    position: relative;
    width: 100%;
    height: 500px;
  `,
  imageContainer: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `,
};

const BackgroundImage = () => (
  <div css={sx.imageContainer}>
    <Image fill src={ImagePath} alt="img" />
    <Image fill src={ImageDottedPath} alt="img" />
  </div>
);
