import PageContainer from "./components/PageContainer/PageContainer";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import UList from "./components/Nav/UList/UList";
import ListItem from "./components/Nav/ListItem/ListItem";
import navElements from "../src/util/nav.json";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import useWindowResize from "./hooks/useWindowResize";
// import useCheckMediaQuery from "./hooks/useCheckMediaQuery";

console.clear();

function App() {
  const { width } = useWindowResize();
  let mobileHeader;
  let xxlScreen;

  console.log(width);

  const burgerHandler = () => {
    console.log("hello");
  };

  if (width >= 375 && width <= 1439) {
    mobileHeader = <BurgerMenu onClick={burgerHandler} />;
  } else {
    return null;
  }

  if (width >= 1440) {
    xxlScreen = (
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
        <Header>
          <Nav>
            {mobileHeader}
            {xxlScreen}
          </Nav>
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
