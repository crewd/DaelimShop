import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle, css } from "styled-components";
import Menu from "./Menu";
import Footer from "./Footer";
import Modal from "./Modal";
import Notices from "./Notices";
import QnA from "./QnA";
import Login from "./Login";
import SignPage1 from "./SignPage1";
import SignPage2 from "./SignPage2"
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import Main from "./Main";
import Product from "./Product"
import Detail from "./Detail"
import Memfind from "./Memfind"
import Pwdfind1 from "./Pwdfind1"
import Pwdfind2 from "./Pwdfind2"

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');

  body { 
    background-color: #ffffff;
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: 'Noto Sans KR', sans-serif;
    ${(props) => props.hidden &&
    css`
      overflow: hidden;
    `}
  }
  
  div {
    margin: 0;
  }

  h1 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  header {
    background: #ffffff;
    z-index: 50;
    position: fixed;
    left:0;
    right:0;
    z-index: 300;
    top: 0;
  }

  footer {
    width: 100%;
    position:relative;
    bottom: 0;
    background: #fff;
    padding-bottom: 20px;
  }
`;

const PcScreen = styled.div`
  @media all and (max-width: 1023px) {
    display: none;
  }
`;

const MobileScreen = styled.div`
  @media all and (min-width: 1024px) {
    display: none;
  }
`;

const Contents = styled.div`
  width: 100%;
  margin-top: 230px;
  margin-bottom: 100px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuContent: [
        { id: 1, list: "판매", link: "" },
        { id: 2, list: "쪽지", link: "" },
        { id: 3, list: "공지사항", link: "" },
        { id: 4, list: "QnA", link: "" }
      ],

      topMenu: [
        { id: 1, list: "마이페이지", link: "" },
        { id: 2, list: "로그아웃", link: "" },
      ],
      category: [
        { id: 0, list: "전체" },
        { id: 1, list: "의류" },
        { id: 2, list: "생활용품" },
        { id: 3, list: "디지털" },
        { id: 4, list: "뷰티" },
        { id: 5, list: "도서" },
        { id: 6, list: "기타" },
      ],

      info: {
        name: "류창천",
        schoolNum: "201640115",
        department: "모바일인터넷과",
        yaer: "3",
      },

      login: false,

      product: [
        { key: 0, name: "디지털 상품", price: "10000", img: "/image/monitor.png", src: "", tab: "디지털"},
        { key: 1, name: "의류 상품", price: "10000", img: "/image/clothes.jpg", src: "", tab: "의류"},
        { key: 2, name: "가구 상품", price: "10000", img: "/image/furniture.png", src: "", tab: "가구/인테리어"},
        { key: 3, name: "뷰티 상품", price: "10000", img: "/image/beauty.jpg", src: "", tab: "뷰티"},
        { key: 4, name: "도서 상품", price: "10000", img: "/image/book.jpg", src: "", tab: "도서"},
        { key: 5, name: "기타 상품", price: "10000", img: "/image/bird-932704_640.jpg", src: "", tab: "기타" },
        { key: 6, name: "기타 상품", price: "10000", img: "/image/bird-932704_640.jpg", src: "", tab: "기타" },
        { key: 7, name: "기타 상품", price: "10000", img: "/image/bird-932704_640.jpg", src: "", tab: "기타" },
        { key: 8, name: "기타 상품", price: "10000", img: "/image/bird-932704_640.jpg", src: "", tab: "기타" },
        { key: 9, name: "기타 상품", price: "10000", img: "/image/bird-932704_640.jpg", src: "", tab: "기타" },
      ],

      LoginOpen: false,
      signpage1: false,
      signpage2: false,
      idFind: false,
      pwdFind1: false,
      pwdFind2: false
    };
  }

  LoginOpen() {
    this.setState({ LoginOpen: true });
    if (this.state.LoginOpen === true) {
      this.setState({ LoginOpen: false });
    }
  }

  sign1_Open() {
    this.setState({ signpage1: true });

    if (this.state.signpage1 === true) {
      this.setState({ signpage1: false });
    }

    if (this.state.LoginOpen === true) {
      this.setState({ LoginOpen: false });
      this.setState({ signpage1: true });
    }
  }

  sign2_Open() {
    this.setState({ signpage2: true });

    if (this.state.signpage2 === true) {
      this.setState({ signpage2: false });
    }

    if (this.state.signpage1 === true) {
      this.setState({ signpage1: false });
      this.setState({ signpage2: true });
    }
  }

  idFind() {
    this.setState({ idFind: true });
    if (this.state.idFind === true) {
      this.setState({ idFind: false });
    }
    if (this.state.LoginOpen === true) {
      this.setState({ LoginOpen: false });
      this.setState({ idFind: true });
    }
  }

  pwdFind_1() {
    this.setState({ pwdFind1: true });
    if (this.state.pwdFind1 === true) {
      this.setState({ pwdFind1: false });
    }
    if (this.state.LoginOpen === true) {
      this.setState({ LoginOpen: false });
      this.setState({ pwdFind1: true });
    }
  }

  pwdFind_2() {
    this.setState({ pwdFind2: true });
    if (this.state.pwdFind2 === true) {
      this.setState({ pwdFind2: false });
    }
    if (this.state.pwdFind1 === true) {
      this.setState({ pwdFind1: false });
      this.setState({ pwdFind2: true });
    }
  }

  render() {
    const loginState = this.state.login;
    let screen;
    console.log(this.state.LoginOpen)

    if (this.state.LoginOpen || this.state.signpage1 || this.state.signpage2 || this.state.idFind) {
      screen = <GlobalStyle hidden />
    } else {
      screen = <GlobalStyle />
    }

    return (
      <Router>
        {screen}
        <Route
          path='/'
          render={() =>
            <Header
              category={this.state.category}
              topMenu={this.state.topMenu}
              menuContent={this.state.menuContent}
              login={this.state.login}
              loginOpen={this.LoginOpen.bind(this)}
            />
          } />
        <Contents>
          <Route
            exact path='/'
            render={() =>
              <Main category={this.state.category} product={this.state.product} />
            } />
          <Route path="/detail" component={Detail} />
        </Contents>
        <Route path="/signpage1" component={SignPage1} />
        <Route path="/signpage2" component={SignPage2} />
        <Route path="/notice" component={Notices} />
        <footer>
          <Route path="/" component={Footer} />
        </footer>
        {this.state.LoginOpen === true && (
          <Login
            loginOpen={this.LoginOpen.bind(this)}
            sign1_Open={this.sign1_Open.bind(this)}
            idFind={this.idFind.bind(this)}
            pwdFind1={this.pwdFind_1.bind(this)}
          />
        )}

        {this.state.signpage1 === true && (
          <SignPage1 sign1_Open={this.sign1_Open.bind(this)} sign2_Open={this.sign2_Open.bind(this)} />
        )}
        {this.state.signpage2 === true && (
          <SignPage2 sign2_Open={this.sign2_Open.bind(this)} />
        )}
        {this.state.idFind === true && (
          <Memfind idFind={this.idFind.bind(this)} />
        )}
        {this.state.pwdFind1 === true && (
          <Pwdfind1 pwdFind1={this.pwdFind_1.bind(this)} pwdFind2={this.pwdFind_2.bind(this)} />
        )}

        {this.state.pwdFind2 === true && (
          <Pwdfind2 pwdFind2={this.pwdFind_2.bind(this)} />
        )}

      </Router>
    );
  }
}

export default App;
