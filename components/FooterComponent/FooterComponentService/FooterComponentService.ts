import {getLogOutUser} from "../../../redux/security/actions";

export type ReplaceType = (url: string, as?: string | undefined) => Promise<boolean>

export interface LinkInterface {
  name: string;
  linkPush: string;
  visibility?: VisibilityInterface[]
  noActiveIcon?: StaticImageData,
  activeIcon?: StaticImageData
}

export  interface VisibilityInterface {
  name: string;
  value: boolean;
}

export interface SecurityInterface {
  logInUserStatus: boolean
  [key: string]: any,
}

export  type getImageType = (pathname: string, linkItem: LinkInterface) => StaticImageData | undefined

export  const getImage: getImageType = (pathname, {linkPush, activeIcon, noActiveIcon}) =>
  pathname === linkPush ? activeIcon : noActiveIcon

export const handlerOnClick = (replace: ReplaceType, {name, linkPush}: LinkInterface, dispatch: any) =>
    name === "LogOut"
      ? dispatch(getLogOutUser()) && replace(linkPush)
      : replace(linkPush)

export  const getFilterLinks = (securityStore: SecurityInterface, visibility: VisibilityInterface[] | undefined) =>
    visibility ? visibility.find(({name, value}) => securityStore?.[name] === value) : true