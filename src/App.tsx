import PageContainer from "./components/PageContainer/PageContainer";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import UList from "./components/Nav/UList/UList";
import ListItem from "./components/Nav/ListItem/ListItem";
import navElements from "../src/util/nav.json";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import SideMenu from "./components/SideMenu/SideMenu";
import { useState } from "react";
import { SVGstorage } from "./util/SVGstorage";
import styles from "./components/SideMenu/Sidemenu.module.scss";
import Image from "./components/Image/Image";
// import Caroussel from "./components/Caroussel/Caroussel";
import ProductContainer from "./components/ProductContainer/ProductContainer";

// console.clear();

function App() {
  const [isSidemenuOpen, setIsSidemenuOpen] = useState<boolean>(false);

  console.log(isSidemenuOpen);

  return (
    <PageContainer>
      <Main isSidemenuOpen={isSidemenuOpen}>
        <SideMenu isSideMenuOpen={isSidemenuOpen}>
          <SVGstorage
            className={styles.back_icon}
            variant="cancel"
            size="32px"
            color="#111418"
            viewBox="0 0 470 1000"
            onClick={() => setIsSidemenuOpen(!isSidemenuOpen)}
          />

          <UList>
            {navElements.map((navItem) => (
              <ListItem isSideMenuOpen={isSidemenuOpen} key={navItem.category}>
                {navItem.category}
              </ListItem>
            ))}
          </UList>
        </SideMenu>

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
        <ProductContainer />
      </Main>
    </PageContainer>
  );
}

export default App;
