import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
// import { useDispatch } from "react-redux";
// import { signInUser } from "./global/globalstate";
import swal from "sweetalert2";
import Loading from "./loadingstate";

const Signin = () => {
  const [loading, setLoading] = useState(false);

  const toggleLoading = () => {
    setLoading(true);
  };
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const formSchema = yup.object().shape({
    email: yup.string().email().required("email must be present"),
    password: yup.string().required("password must match"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = handleSubmit(async (val) => {
    const { email, password } = val;

    const url = "https://myauth-server.onrender.com/api/user/signin";
    toggleLoading();
    await axios
      .post(url, { email, password })
      .then((res) => {
        // dispatch(signInUser
        console.log(res.data.data);
        //  );
        swal.fire({
          title: " Success",
          text: "welcome  ",
          icon: "success",
        });
      })
      .catch((err) => {
        swal.fire({
          title: "failed",
          text: "error",
          icon: "failed",
        });
        setLoading(false);
      });
    reset();
    navigate("/mainscreen");
  });

  return (
    <Container>
      {loading ? <Loading /> : null}
      <Card>
        <Cardwrap onSubmit={onSubmit}>
          <H1>Sign In</H1>
          <Form>
            <Hold>
              <Label>Email</Label>
              <Input>
                <input
                  type="text"
                  placeholder="fill in your email"
                  {...register("email")}
                />
              </Input>
              <Error>{errors?.email?.message}</Error>
            </Hold>
            <Hold>
              <Label>Password</Label>
              <Input>
                <input
                  type="text"
                  placeholder="fill in your password"
                  {...register("password")}
                />
              </Input>
              <Error>{errors?.password?.message}</Error>
            </Hold>
          </Form>
          <Middle>
            <Left>remember me</Left>
            <Right to="/forgotpassword">forgot password</Right>
          </Middle>
          <Button type="submit">Sign In</Button>
          <Mid>
            Do not have an account?<P to="/signup">Sign Up</P>
          </Mid>
        </Cardwrap>
      </Card>
    </Container>
  );
};
export default Signin;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #020c1b;
`;
const Card = styled.div`
  width: 350px;
  height: 400px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const Cardwrap = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
const H1 = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #020c1b;
`;
const Form = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Hold = styled.div`
  width: 100%;
  height: 67px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Label = styled.div`
  font-size: 13px;
`;
const Input = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #020c1b;
  padding-left: 3px;
  input {
    width: 100%;
    height: 100%;
    background: inherit;
    opacity: none;
    border: none;
    outline: none;
    ::placeholder {
      color: #020c1b;
      font-size: 10px;
    }
  }
`;
const Button = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #020c1b;
  color: white;
  font-size: 13px;
`;
const Mid = styled.div`
  width: 175px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-size: 12px;
  color: #020c1b;
`;
const P = styled(Link)`
  font-size: 12px;
  color: red;
  text-decoration: none;
`;
const Middle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
const Left = styled.div`
  font-size: 10px;
  color: #020c1b;
`;
const Right = styled(Link)`
  font-size: 10px;
  text-decoration: none;
  color: #020c1b;
`;
const Error = styled.div`
  color: red;
  font-weight: 500;
  display: none;
  font-size: 12px;
`;
