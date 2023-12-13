import PageContainer from "./components/PageContainer/PageContainer";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import UList from "./components/Nav/UList/UList";
import ListItem from "./components/Nav/ListItem/ListItem";
import navElements from "../src/util/nav.json";

function App() {
  console.log(navElements);

  return (
    <PageContainer>
      <Main>
        <Header>
          <Nav>
            <UList>
              {navElements.map((navItem) => (
                <ListItem key={navItem.category}>{navItem.category}</ListItem>
              ))}
            </UList>
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
