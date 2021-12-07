import FooterComponent from "../../components/FooterComponent/FooterComponent";
import {Components, GlobalStyleComponent} from "../../styles/styles";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setLoginUser} from "../../redux/security/actions";

function MainLayout({children}: any) {
  const dispatch = useDispatch()
  useEffect(() => {
    if(localStorage.getItem("token")) {
      dispatch(setLoginUser(localStorage.getItem("token") ?? ""))
    }
  }, [dispatch])
  return (
    <Components.HomeContainer>
      <GlobalStyleComponent/>
      {children}
      <FooterComponent/>
    </Components.HomeContainer>
  )
}

export default MainLayout