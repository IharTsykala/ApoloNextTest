import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../pages/_app";
import {Components} from "../../styles/styles";
import {securitySelector} from "../../redux/security/reducer";
import Image from 'next/image';
import {
  getFilterLinks,
  getImage,
  handlerOnClick,
  SecurityInterface
} from "./FooterComponentService/FooterComponentService";
import {arrayLinks, scannerLink} from "./FooterComponentData/FooterComponentData";

function FooterComponent() {
  const {replace, pathname} = useRouter()
  const dispatch = useDispatch()

  const securityStore = useSelector<RootState, SecurityInterface>(securitySelector)
  const {name, linkPush} = scannerLink

  return (
    <Components.FooterComponent>
      <Components.ScannerIconBox>
        <Image src={getImage(pathname, scannerLink) ?? "/"} width={50} height={50} alt="Picture"
               onClick={() => handlerOnClick(replace, {name, linkPush}, dispatch)}
        />
      </Components.ScannerIconBox>
      {arrayLinks?.filter(({name, linkPush, visibility}) => getFilterLinks(securityStore, visibility))
        ?.map((linkItem) => {
            const {name, linkPush} = linkItem
            return (
              <Components.LinksComponent
                key={name}
                onClick={() => handlerOnClick(replace, {name, linkPush}, dispatch)}
              >
                <Image src={getImage(pathname, linkItem) ?? "/"} width={35} height={35} alt="Picture"/>
                {name}
              </Components.LinksComponent>)
          }
        )
      }

    </Components.FooterComponent>
  )
}

export default FooterComponent