import { Typography } from "@mui/material";
import { css } from "@emotion/react";
import Image from "next/image";
import { Colors } from "@/common/themes/Color";
import VideoIcon from "@/assets/progress/report/video-ic.png";
import Link from "next/link";
import { VideoPopup } from "./popup/VideoPopup";
import { useModalHooks } from "./useModalHooks";
export const RecentUploads = () => {
  const models = {
    href: "#",
    items: [
      {
        title: "Video",
        text: "Day One Progress Report",
        videoSrc: "assets/videos/video-sample.mp4",
      },
      {
        title: "Video",
        text: "Day One Progress Report",
        videoSrc: "assets/videos/video-sample.mp4",
      },
      {
        title: "Video",
        text: "Day One Progress Report",
        videoSrc: "assets/videos/video-sample.mp4",
      },
      {
        title: "Video",
        text: "Day One Progress Report",
        videoSrc: "assets/videos/video-sample.mp4",
      },
      {
        title: "Video",
        text: "Day One Progress Report",
        videoSrc: "assets/videos/video-sample.mp4",
      },
    ],
  };

  const { modalState } = useModalHooks();
  return (
    <div>
      <div css={sx.comingSoon}>Coming Soon</div>
      <Typography css={sx.title}>Recent Uploads</Typography>
      <div css={sx.boxWrapper}>
        {models.items.map((it, index) => (
          <VideoItem
            key={index}
            title={it.title}
            text={it.text}
            onClick={() => modalState.onVideoOpen(it.videoSrc)}
          />
        ))}
      </div>
      <StudentArchiveLink href={models.href} />
      <VideoPopup
        open={modalState.open}
        onClose={modalState.onClose}
        videoSrc={modalState.videoSrc}
      />
    </div>
  );
};

const sx = {
  title: css`
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    color: #0a0b26;
    margin-bottom: 31px;
  `,
  boxWrapper: css`
    width: 100%;
    height: 260px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
  box: css`
    height: 50px;
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
  `,
  comingSoon: css`
    background: rgba(0,0,0,0.7);
    font-size: 50px;
    color: white;
    text-align: center;
    border-radius: 10px;    
    position: absolute;    
    width: 400px;
    line-height: 400px;    
  `,
};

type VideoItemType = {
  title: string;
  text: string;
  onClick: () => void;
};

const VideoItem = ({ title, text, onClick }: VideoItemType) => {
  return (
    <div css={sx.box} onClick={onClick}>
      <Image src={VideoIcon} alt="icon" width={38} height={38} />
      <div>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="body2" lineHeight={"21px"}>
          {text}
        </Typography>
      </div>
    </div>
  );
};

type StudentArchiveLinkType = {
  href: string;
};

const StudentArchiveLink = ({ href }: StudentArchiveLinkType) => {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Typography
        variant="subtitle1"
        lineHeight={1}
        color={Colors.ActiveBlue}
        sx={{ cursor: "pointer" }}
      >
        {"View Student Archive >"}
      </Typography>
    </Link>
  );
};
