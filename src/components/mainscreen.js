
import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { useSelector } from "react-redux";



const Mainscreen = () =>{
   const user = useSelector((state) => state.user);
    return(
        <Container>
                <Text>Welcome {user.username}</Text>
        </Container>
    )
}
export default Mainscreen


const Container = styled.div`
   width:100%;
   height:100vh;
   display:flex;
   justify-content:center;
   align-items:center;
   background-color:#020c1b;
`
const Text = styled.div`
  color:white;
  font-size:25px;
`