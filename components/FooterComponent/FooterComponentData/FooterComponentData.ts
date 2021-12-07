import shopIcon from "../../../public/icons/ic_shop.png";
import shopIconActive from "../../../public/icons/ic_shop_active.png";
import forYouIcon from "../../../public/icons/ic_for_you.png";
import forYouIconActive from "../../../public/icons/ic_for_you_active.png";
import activities from "../../../public/icons/ic_activities.png";
import activitiesActive from "../../../public/icons/ic_activities_active.png";
import logIn from "../../../public/icons/ic_login.png";
import logInActive from "../../../public/icons/ic_login_active.png";
import scanner from "../../../public/icons/ic_scanner.png";
import scannerActive from "../../../public/icons/ic_scanner_active.png";

export const arrayLinks = [
  {
    name: "Shop",
    linkPush: "/shop",
    noActiveIcon: shopIcon,
    activeIcon: shopIconActive
  },
  {
    name: "For you",
    linkPush: "/forYou",
    noActiveIcon: forYouIcon,
    activeIcon: forYouIconActive
  },
  {
    name: "Activities",
    linkPush: "/activities",
    noActiveIcon: activities,
    activeIcon: activitiesActive
  },
  {
    name: "LogIn",
    linkPush: "/login",
    noActiveIcon: logIn,
    activeIcon: logInActive,
    visibility: [
      {name: "logInUserStatus", value: false}
    ],
  },
  {
    name: "LogOut",
    linkPush: "/login",
    noActiveIcon: logIn,
    activeIcon: logInActive,
    visibility: [
      {name: "logInUserStatus", value: true}
    ],
  }
]

export const scannerLink = {
  name: "Scanner",
  linkPush: "/scanner",
  noActiveIcon: scanner,
  activeIcon: scannerActive,
}