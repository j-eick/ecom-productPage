import styles from "./ProductContainer.module.scss";
import Caroussel from "../Caroussel/Caroussel";
import Image from "../Image/Image";
import ProdPreview from "../ProdPreview/ProdPreview";
import Product from "../Product/Product";
import product from "../Product/Product.module.scss";
import Button from "../Button/Button";

export default function ProductContainer() {
  return (
    <section className={styles.productContainer}>
      {/* ######## IF DESKTOP... ############ */}
      {/* ######## LEFT SIDE ########## */}
      <section className={styles.leftSide}>
        <Caroussel />
        <ProdPreview>
          <Image
            variant="prod_thumbnails"
            src="/images/prodThumbnails/image-product-1-thumbnail.jpg"
            alt="prodPhoto_1"
          />
          <Image
            variant="prod_thumbnails"
            src="/images/prodThumbnails/image-product-2-thumbnail.jpg"
            alt="prodPhoto_1"
          />
          <Image
            variant="prod_thumbnails"
            src="/images/prodThumbnails/image-product-3-thumbnail.jpg"
            alt="prodPhoto_1"
          />
          <Image
            variant="prod_thumbnails"
            src="/images/prodThumbnails/image-product-4-thumbnail.jpg"
            alt="prodPhoto_1"
          />
        </ProdPreview>
      </section>

      {/* ######## RIGHT SIDE  ########## */}
      <section className={styles.rightSide}>
        <Product>
          {/* +++++  COMPANY NAME  +++++ */}
          <div className={product.company}>SNEAKER COMPANY</div>

          {/* +++++  PRODUCT TILE  +++++ */}
          <div className={product.title}>Fall Limited Edition Sneakers</div>

          {/* +++++  PRODUCT DESCRIPTION  +++++ */}
          <div className={product.desciption}>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </div>

          {/* +++++  PRODUCT PRICE  +++++ */}
          <ul className={product.priceContainer}>
            <li className={product.price}>$125.00</li>
            <li className={product.discount}>50%</li>
            <li className={product.formerPrice}>$250.00</li>
          </ul>

          {/* +++++  PRODUCT CHECKOUT  +++++ */}
          <div className={product.checkout}>
            <ul className={product.ulCounterContainer}>
              <li className={product.liLess}>
                <Button
                  variant="buttonCounterAmount"
                  className={product.buttonCounterLess}
                >
                  <Image src="/images/icon-minus.svg" alt="button_less" />
                </Button>
              </li>
              <li className={product.liCounter}>
                <span>0</span>
              </li>
              <li className={product.liMore}>
                <Button
                  variant="buttonCounterAmount"
                  className={product.buttonCounterMore}
                >
                  <Image src="/images/icon-plus.svg" alt="button_more" />
                </Button>
              </li>
            </ul>
            <Button variant="addToCart" iconSrc="/images/icon-cart.svg">
              {/* <span icon="addToCartIcon" /> */}
              <Image src="/images/icon-cart.svg" alt="cart_icon" width={16} />
              Add to cart
            </Button>
          </div>
        </Product>
      </section>
    </section>
  );
}
