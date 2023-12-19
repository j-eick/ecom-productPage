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

// console.clear();

function App() {
  const [isSidemenuOpen, setIsSidemenuOpen] = useState<boolean>(Boolean);
  const { width } = useWindowResize();
  let burgerMenu,
    navCategories = null;

  const burgermenuHandler = () => {
    setIsSidemenuOpen(!isSidemenuOpen);
  };

  if (width >= 375 && width <= 1439) {
    burgerMenu = <BurgerMenu onClick={burgermenuHandler} />;
  }
  if (width >= 1440) {
    navCategories = (
      <UList>
        {navElements.map((navItem) => (
          <ListItem key={navItem.category}>{navItem.category}</ListItem>
        ))}
      </UList>
    );
  }

  return (
    <PageContainer>
      <Main>
        {/* <SideMenu isSideMenuOpen={isSidemenuOpen}> */}
        {/* <SVGstorage
            variant="backArrow_empty"
            size="24px"
            color="#111418"
            onClick={() => setIsSidemenuOpen(!isSidemenuOpen)}
          /> */}
        {navCategories}
        {/* </SideMenu> */}
        <Header>
          <Nav>{burgerMenu}</Nav>
        </Header>
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
