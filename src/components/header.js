import React from "react";
import styled from "styled-components";
import pix from "../components/logo.svg";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={pix} />
        <Navigator>
          <Span>Home</Span>
          <Span>About</Span>
          <Span>Contact</Span>
          <Span>Blog</Span>
          <Span>Help</Span>
          <Spaned to="/signin">Sign In</Spaned>
          <Button to="/signup">Sign Up</Button>
        </Navigator>
        <Menu>
          <AiOutlineMenu
            id="menu"
            fontSize="25px"
            color="white"
            onClick={() => {
              document.getElementById("sidebar").style.width = "230px";
              document.getElementById("menu").style.display = "none";
              document.getElementById("close").style.display = "block";
            }}
          />
          <AiOutlineClose
            id="close"
            color="white"
            fontSize="25px"
            style={{
              display: "none",
            }}
            onClick={() => {
              document.getElementById("sidebar").style.width = "0";
              document.getElementById("menu").style.display = "block";
              document.getElementById("close").style.display = "none";
            }}
          />
        </Menu>
        <Sidebar id="sidebar">
          <Hold>
            <Span>Home</Span>
            <Span>About</Span>
            <Span>Contact</Span>
            <Span>Blog</Span>
            <Span>Help</Span>
            <Spaned to="/signin">Sign In</Spaned>
            <Button to="/signup">Sign Up</Button>
          </Hold>
        </Sidebar>
      </Wrapper>
    </Container>
  );
};
export default Header;

const Container = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Logo = styled.img`
  width: 180px;
  height: 35px;
`;
const Navigator = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 900px) {
    display: none;
  }
`;
const Span = styled.div`
  font-size: 13px;
  color: white;
`;
const Spaned = styled(Link)`
  font-size: 13px;
  text-decoration: none;
  color: white;
`;
const Button = styled(Link)`
  width: 150px;
  text-decoration: none;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  font-size: 13px;
  color: white;
  border-radius: 15px;
  background: inherit;
`;

const Menu = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`;
const Sidebar = styled.div`
  z-index: 10;
  transition: all 950ms;
  overflow: hidden;
  width: 0;
  height: 100vh;

  background-color: #020c1b;

  position: fixed;
  top: 0;
  left: 0;
  display: none;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Hold = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 75%;
  /* flex: 1; */
`;
