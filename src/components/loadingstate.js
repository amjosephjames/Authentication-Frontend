import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const Loading = () => {
  return (
    <Container>
      <ClipLoader color="#fff" />
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-color: #020c1b;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
`;
