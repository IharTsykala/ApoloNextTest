import {NextPage} from "next";
import Image from 'next/image';
import mapImage from "../../public/map.png";
import {Components} from "../../styles/styles";

const ShopPage: NextPage = () => {
  return (
    <Components.ContainerComponent>
      <Components.ShopPageComponent>
        <Image
          src={mapImage}
          width={150}
          height={150}
        />
        <Components.HeaderTextComponent>Location Required</Components.HeaderTextComponent>
        <Components.LocationDescription>
          Let us show you nearby businesses and maps for collection
        </Components.LocationDescription>

        <Components.ParagraphComponent>
          Alternatively enter your location
        </Components.ParagraphComponent>
      </Components.ShopPageComponent>
    </Components.ContainerComponent>
  )
}

export default ShopPage