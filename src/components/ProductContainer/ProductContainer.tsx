import styles from "./ProductContainer.module.scss";
import Caroussel from "../Caroussel/Caroussel";

export default function ProductContainer() {
  return (
    <section className={styles.productContainer}>
      {/* ######## LEFT SIDE ########## */}
      <section className={styles.leftSide}>
        <Caroussel />
        <div className="preview"></div>
      </section>

      {/* ######## RIGHT SIDE  ########## */}
      <section className={styles.rightSide}>
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
      </section>
    </section>
  );
}
