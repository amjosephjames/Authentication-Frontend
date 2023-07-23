import React from "react";
import styled from "styled-components";
import Header from "./header";
import { Link } from "react-router-dom";

const Homescreen = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Hold>
          <Texthold>
            <Holdings>
              <H1>Maximise your money</H1>
              <H2>with Vaults</H2>
            </Holdings>
            <P>
              Put money aside effortlessly for the things you want with vaults
            </P>
            <Mid>
              <Left>
                <Up>
                  <Numb>+234</Numb>
                  <Sign>+</Sign>
                </Up>
                <Line></Line>
              </Left>
              <Right>
                <Phonenumber>Phonenumber</Phonenumber>
                <Lined></Lined>
              </Right>
              <Button to="/signup">Get Started</Button>
            </Mid>
            <Down>Download our app rated by 1m+ people</Down>
          </Texthold>
          <Image></Image>
        </Hold>
      </Wrapper>
    </Container>
  );
};
export default Homescreen;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #020c1b;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Hold = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Texthold = styled.div`
  width: 500px;
  height: 250px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Holdings = styled.div`
  /* width: 500px; */
  height: 90px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const H1 = styled.div`
  color: white;
  font-size: 35px;
  font-weight: bold;
`;
const H2 = styled.div`
  color: white;
  font-size: 35px;
  font-weight: bold;
`;
const P = styled.div`
  color: white;
  font-size: 12px;
`;
const Mid = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Left = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Up = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
`;
const Numb = styled.div`
  color: white;
  font-size: 12px;
`;
const Sign = styled.div`
  color: white;
  font-size: 12px;
`;
const Right = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Phonenumber = styled.div`
  color: white;
  font-size: 12px;
`;
const Lined = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
`;
const Button = styled(Link)`
  text-decoration: none;
  background-color: white;
  font-size: 13px;
  width: 150px;
  /* text-decoration: none; */
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #020c1b;
  border-radius: 10px;
`;
const Down = styled.div`
  color: white;
  font-size: 12px;
`;
const Image = styled.div`
  height: 450px;
  width: 450px;
  background-image: url("wallimg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 90px;
  margin-top: 82px;
`;
