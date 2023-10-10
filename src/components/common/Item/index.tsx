import React, { memo } from "react";

// constants
import { Item } from "interfaces/item";

// assets
import Star from "assets/images/seller/star.svg";

// styles
import "./index.css";
import { Link } from "react-router-dom";

interface Props {
  item: Item;
  index: number;
  className: string;
  onClick: () => void;
}

const ItemCard: React.FC<Props> = ({
  item,
  index,
  className,
  onClick,
}): JSX.Element => {
  const MAX_STAR = 5;

  const {
    perPrice = "",
    isSoldOut = false,
    discount = "",
    unit = "Default unit",
    image = "./../../../assets/images/default_image.webp",
    title = "",
    category = "Default category",
    name = "Default name",
    rate = "",
    reviews = "",
    sale = "",
    price = 0,
    volume,
  } = item;

  return (
    <article className={`item-card ${className} ${item.id}`} key={index}>
      <Link to={`/products/${item.id}`} key={item.id}>
        <section className="image-card">
          {perPrice && <p className="per-price">{perPrice}</p>}
          {isSoldOut && <p className="sold-out">Sold Out</p>}
          <img src={image} alt={title} />
        </section>

        <section className="content-item">
          <p className="cate-item">{category}</p>
          <h2 className="title-item">{name}</h2>

          <div className="star-review">
            <span className="voted">
              <img src={Star} alt="Star" />
              {rate}/{MAX_STAR}
            </span>

            <span className="review">
              {reviews}
              <span className="reviewsText">Reviews</span>
            </span>
          </div>

          <div className="sale">{sale}</div>

          <div className="discount-n-price">
            {discount && <p className="discount">{discount}</p>}
            <p className="price">
              {price}
              {!discount && unit && unit.length > 0 && (
                <span className="unit">{` / ${unit}`}</span>
              )}
            </p>
          </div>

          <div className="volumes">
            {volume.map((item: string, index: number) => (
              <div className="volume-child" key={index}>
                {item}
              </div>
            ))}
          </div>

          <div className="button-buy">
            <button className="btn btn-add-cart" onClick={onClick}>
              Add to Cart
            </button>
          </div>
        </section>
      </Link>
    </article>
  );
};

export default memo(ItemCard);
