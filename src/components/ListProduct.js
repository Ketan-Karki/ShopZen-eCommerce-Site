import React from "react";
import { useWishContext } from "../context/wish_context";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import FormatPrice from "../Helpers/FormatPrice";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

const ListProduct = (curElem) => {
  const { id, name, image, price, description } = curElem;
  const { addToWish, removeItem } = useWishContext();
  const { wish } = useWishContext();
  const checkWish = () => {
    var findWish = wish.find((curElem) => curElem.id === id);
    if (findWish) return true;
    else return false;
  };
  return (
    <Wrapper>
      <div className="card grid grid-two-column">
        <figure>
          <img src={image} alt={name} />
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
        </figure>
        <div className="card-data">
          <h3>{name}</h3>
          <p>
            <FormatPrice price={price} />
          </p>
          <p>{description.slice(0, 90)}...</p>
          <NavLink to={`/singleproduct/${id}`}>
            <Button className="btn">Read More</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 3.2rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);

    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      text-transform: capitalize;
    }

    .btn {
      margin: 2rem 0;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(28, 52, 84);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(28, 52, 84);

      &:hover {
        background-color: rgb(28, 52, 84);
        color: #fff;
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(28, 52, 84);
        font-size: 1.4rem;
      }
    }

    .btn-main .btn:hover {
      color: #fff;
    }

    .heart {
      color: #989898;
      z-index: 1;
      font-size: 30px;
      position: absolute;
      width: 40px;
      height: 40px;
      padding: 0px;
      text-align: center;
      cursor: pointer;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }

    .heart-active {
      color: #c50707;
    }

    .heart:hover {
      color: red;
      background-color: transparent;
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      -o-transition: all 1s ease;
      transition: all 1s ease-in-out;
    }
  }
`;

export default ListProduct;
