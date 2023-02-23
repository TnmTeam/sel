import { css } from "@emotion/react";
import { Box } from "@mui/material";
import Image from "next/image";
import ImagePath from "@/assets/progress/jouney/img-path.png";
import ImageDottedPath from "@/assets/progress/jouney/img-dotted-path.svg";
import { MapItem } from "./components/MapItem/MapItem";
import { MapItemsList } from "../../models/mapItem.model2";
import { JourneyListType } from "@/domain/Progress/types/journey.type";

interface DataType {
  data: JourneyListType;
}

export const JourneyMap = ({ data }: DataType) => {
  return (
    <Box css={sx.map}>
      <div css={sx.mapContainer}>
        <BackgroundImage />
         <Journey journeyList={data.journeyList} />
      </div>
    </Box>
  );
};

const Journey = ({ journeyList }: JourneyListType) => {
  let journeyResultList = [];
  
  const models = MapItemsList;
  for(var i = 0 ; i < journeyList.length ; i++){

    let itemMap = {
      x: models[i].x,
      y: models[i].y,
      circleXPosition: models[i].circleXPosition,
      textYPosition: models[i].textYPosition,
      text: journeyList[i].courseTitle,
      isHere: journeyList[i].isHere
    }

    let cardMap = {
      image: journeyList[i].courseThumbnail,
      title: journeyList[i].courseTitle,
      desc: journeyList[i].courseDescription
    }
    let resultMap = {
      item : itemMap,
      card: cardMap
    }
    
    journeyResultList.push(resultMap);

  }
  
  return (
    <>
      {journeyResultList.map((it, index) => (
          <MapItem key={index} item={it.item} card={it.card} />
        ))}
    </>
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
