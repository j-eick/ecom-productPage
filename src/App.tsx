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
import Image from "./components/Image/Image";
// import HeaderDesktop from "./components/HeaderDesktop/HeaderDesktop";

// console.clear();

function App() {
  const [isSidemenuOpen, setIsSidemenuOpen] = useState<boolean>(false);
  const { width } = useWindowResize();
  let navCategories_mobile = null;

  console.log(isSidemenuOpen);

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
            <BurgerMenu
              onClick={() => {
                setIsSidemenuOpen(!isSidemenuOpen);
              }}
            />
            <Image variant="logo" src="/images/logo.svg" alt="logo" />
            <Image variant="cart" src="/images/icon-cart.svg" alt="cart_icon" />
            <Image variant="avatar" src="/images/image-avatar.png" alt="logo" />
          </Nav>
        </Header>

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
