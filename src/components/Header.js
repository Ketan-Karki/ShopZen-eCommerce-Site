import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="..\images\logo.png" alt="my logo img" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 20rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-content: center;
  position: relative;

  .logo {
    height: 5rem;
  }

  img {
    width: 78px;
    position: absolute;
    left: 24rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2rem;
    img {
      width: 70px;
      position: absolute;
      left: 2rem;
    }
  }
`;

export default Header;
