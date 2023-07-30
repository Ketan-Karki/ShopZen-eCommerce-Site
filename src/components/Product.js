import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import styled from "styled-components";
import { useWishContext } from "../context/wish_context";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  const { addToWish, removeItem } = useWishContext();
  const { wish } = useWishContext();
  const checkWish = () => {
    var findWish = wish.find((curElem) => curElem.id === id);
    if (findWish) return true;
    else return false;
  };
  return (
    <Wrapper>
      <span id="heart" className="heart">
        {checkWish() ? (
          <FaHeart
            className="heartIcon filledHeartIcon"
            onClick={() => removeItem(id)}
          />
        ) : (
          <FiHeart
            className="heartIcon emptyHeartIcon"
            onClick={() => addToWish(curElem)}
          />
        )}
      </span>
      <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
          <figure>
            <img src={image} alt={name} />
            <figcaption className="caption">{category}</figcaption>
          </figure>
          <div className="card-data">
            <div className="card-data-flex">
              <h3>{name}</h3>
              <p className="card-data--price">
                {<FormatPrice price={price} />}
              </p>
            </div>
          </div>
        </div>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  .card-data-flex {
    padding-bottom: 2rem;
  }
  .card {
    position: relative;
  }
  .heartIcon {
    z-index: 1;
    font-size: 1rem;
    position: absolute;
    width: 30px;
    height: 30px;
    padding: 0px;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .emptyHeartIcon {
    color: #989898;
  }
  .filledHeartIcon {
    color: red;
  }
  .emptyHeartIcon:hover {
    color: red;
    background-color: transparent;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease-in-out;
  }
`;

export default Product;
