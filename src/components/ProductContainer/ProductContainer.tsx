import styles from "./ProductContainer.module.scss";
import Caroussel from "../Caroussel/Caroussel";
import Image from "../Image/Image";
import ProdPreview from "../ProdPreview/ProdPreview";
import Product from "../Product/Product";
import product from "../Product/Product.module.scss";

export default function ProductContainer() {
  return (
    <section className={styles.productContainer}>
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
          <div className={product.company}>SNEAKER COMPANY</div>
          <div className={product.title}>Fall Limited Edition Sneakers</div>
          <div className={product.desciption}>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </div>
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
        </Product>
      </section>
    </section>
  );
}
