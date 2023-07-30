import React from "react";
import { FaTrash } from "react-icons/fa";
import { useWishContext } from "../context/wish_context";

const WishItem = (curElem) => {
  const { removeItem } = useWishContext();
  //   const setDecrease = () => {
  //     amount > 1 ? setAmount(amount - 1) : setAmount(1);
  //   };

  //   const setIncrease = () => {
  //     amount < stock ? setAmount(amount + 1) : setAmount(stock);
  //   };
  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={curElem.image} alt={curElem.id} />
          </figure>
        </div>
        <div>
          <p>{curElem.name}</p>
        </div>
      </div>
      <div className="cart-hide"></div>
      <div></div>
      <div className="cart-hide"></div>
      <div>
        <FaTrash
          className="remove_icon"
          onClick={() => removeItem(curElem.id)}
        />
      </div>
    </div>
  );
};

export default WishItem;
