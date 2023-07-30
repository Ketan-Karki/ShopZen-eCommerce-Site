import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>/ {title}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 25rem;

  a {
    font-size: 3.2rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding-left: 1rem;
  }
`;

export default PageNavigation;
