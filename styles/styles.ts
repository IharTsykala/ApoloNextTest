import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyleComponent = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;500&family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`

export const Components = {

  ContainerComponent: styled.div`{
    display: flex;
    align-items: center;
    justify-content: center;
  }`,

  HeaderTextComponent: styled.h3`{
    font-weight: 600;
    font-size: 110%;
  }`,

  HeaderTextLoginComponent: styled.h1`{
    font-weight: 600;
    font-size: 110%;
    padding-bottom: 20%;
  }`,

  ParagraphComponent: styled.p`{
    text-decoration: none;
    color: blue;
    padding-top: 10%;
  }`,

  FooterComponent: styled.div`
    font-size: 90%;
    border-top: 1px solid #808080;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    min-height: 7%;
    z-index: 1;
    transition:all 0.3s;
    
    &:hover{
      box-shadow: 0px -13px 8px 0px rgba(227, 253, 0, 0.2);
    }
  `,

  ScannerIconBox: styled.div`
    position: absolute;
    top: -25px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      z-index: 20;
      border-radius: 60%;
    }

    &:before {
      display: block;
      box-shadow: 0 5px 20px #c4c4c4;
      background-color: #C4C4C4;
      content: "";
      width: 66px;
      height: 33px;
      opacity: 0.5;
      top: 25px;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      position: absolute;
      border-radius: 0 0 80px 80px;
      z-index: -1;
    }
  `,

  LinksComponent: styled.a`
    cursor: pointer;
    margin: 0 auto;
    display: grid;
    justify-content: center;
    align-items: center;
    justify-items: center;
  `,

  ShopPageComponent: styled.div`
    text-align: center;
  `,

  LocationDescription: styled.p`
    font-size: 80%;
    width: 70%;
    margin: 0 auto;
  `,

  HomeContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 92.7vh;
  `,

  InputContainer: styled.div`
    position: relative;
    margin-bottom: 30px;
  `,

  LabelComponent: styled.label`{
    color: #999;
    font-size: 18px;
    position: absolute;
    pointer-events: none;
    left: 10px;
    top: -20px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }`,

  InputComponent: styled.input`
    font-size: 16px;
    padding: 10px;
    display: block;
    width: 300px;
    border: none;
    border-bottom: 1px solid #ccc;
    &:focus {
      outline: none;
    }
  `,

  LoginPage: styled.div`
    text-align: center;
  `,

  FormComponent: styled.form`
    text-align: center;
  `,

  ButtonComponent:styled.button`
    background:#eee;
    color: black;
    text-decoration:none;
    display:block;
    width:90px;
    text-align:center;
    margin:20px auto;
    padding:10px 10px;
    transition:all 0.3s;
    border: none;
    &:hover {
      box-shadow:0px -5px 0 gold inset;
    }
  `,
}