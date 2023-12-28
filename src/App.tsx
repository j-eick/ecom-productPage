import PageContainer from "./components/PageContainer/PageContainer";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import UList from "./components/Nav/UList/UList";
import ListItem from "./components/Nav/ListItem/ListItem";
import navElements from "../src/util/nav.json";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import useWindowResize from "./hooks/useWindowResize";
import SideMenu from "./components/SideMenu/SideMenu";
import { useState } from "react";
import { SVGstorage } from "./util/SVGstorage";
import styles from "./components/SideMenu/Sidemenu.module.scss";
import HeaderDesktop from "./components/HeaderDesktop/HeaderDesktop";

// console.clear();

function App() {
  const [isSidemenuOpen, setIsSidemenuOpen] = useState<boolean>(false);
  const { width } = useWindowResize();
  let burgerMenu,
    navCategories_mobile,
    navCategories_desktop = null;

  console.log(isSidemenuOpen);

  if (width >= 375 && width <= 1439) {
    burgerMenu = (
      <BurgerMenu
        onClick={() => {
          setIsSidemenuOpen(!isSidemenuOpen);
        }}
      />
    );
  }

  // ##### Mobile Nav #####
  if (width >= 375 && width <= 1439) {
    navCategories_mobile = (
      <UList>
        {navElements.map((navItem) => (
          <ListItem isSideMenuOpen={isSidemenuOpen} key={navItem.category}>
            {navItem.category}
          </ListItem>
        ))}
      </UList>
    );
  }
  // ##### Desktop Nav #####
  if (width >= 1440) {
    navCategories_desktop = (
      <UList>
        {navElements.map((navItem) => (
          <ListItem isSideMenuOpen={isSidemenuOpen} key={navItem.category}>
            {navItem.category}
          </ListItem>
        ))}
      </UList>
    );
  }

  return (
    <PageContainer>
      <Main>
        <SideMenu isSideMenuOpen={isSidemenuOpen}>
          <SVGstorage
            className={styles.back_icon}
            variant="cancel"
            size="32px"
            color="#111418"
            viewBox="0 0 470 1000"
            onClick={() => setIsSidemenuOpen(!isSidemenuOpen)}
          />

          {navCategories_mobile}
        </SideMenu>

        {/* 
          //  put mobile + desktop header-components into <header>
          //  media queries will do the rest
        */}
        <Header>
          <Nav>
            {burgerMenu}
            <img
              src="/images/logo.svg"
              alt="logo"
              width={130}
              style={{ marginRight: "95px" }}
            />
            <img
              src="/images/icon-cart.svg"
              alt="cart_icon"
              width={20}
              style={{ marginRight: "15px" }}
            />
            <img src="/images/image-avatar.png" alt="logo" width={25} />
          </Nav>
        </Header>
        <HeaderDesktop>{navCategories_desktop}</HeaderDesktop>

        {/*     ##### Side-Content #####     */}
        <div className="product">
          <div className="company">company</div>
          <div className="product-title">product-title</div>
          <div className="product-photo">product-photo</div>
          <div className="product-desciption">product-details</div>
          <div className="product-price">product-price: 125 USD</div>
          <div>
            <ul>
              <li>
                <button>-</button>
              </li>
              <li>
                <span>(number)</span>
              </li>
              <li>
                <button>+</button>
              </li>
            </ul>
            <button>Add to cart</button>
          </div>
        </div>
      </Main>
    </PageContainer>
  );
}

export default App;
