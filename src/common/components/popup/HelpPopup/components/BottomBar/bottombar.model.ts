import { MenuType } from "./bottombar.type";
import HomeIcon from "@/assets/helppopup/bottomBar/home1.png";
import HomeSelectedIcon from "@/assets/helppopup/bottomBar/home-selected.png";
import MessageIcon from "@/assets/helppopup/bottomBar/message.png";
import MessageSelectedIcon from "@/assets/helppopup/bottomBar/message-selected.png";
import HelpIcon from "@/assets/helppopup/bottomBar/help-ic.svg";
import HelpSelectedIcon from "@/assets/helppopup/bottomBar/help-selected.png";
import NewsIcon from "@/assets/helppopup/bottomBar/news-ic.svg";
import NewsSelectedIcon from "@/assets/helppopup/bottomBar/news-selected.png";

export const BottombarModels: MenuType[] = [
  {
    title: "Home",
    src: HomeIcon,
    alt: "home",
    selected: HomeSelectedIcon,
  },
  {
    title: "Message",
    src: MessageIcon,
    alt: "Message",
    selected: MessageSelectedIcon,
  },
  {
    title: "Help",
    src: HelpIcon,
    alt: "Help",
    selected: HelpSelectedIcon,
  },
  {
    title: "News",
    src: NewsIcon,
    alt: "News",
    selected: NewsSelectedIcon,
  },
];
