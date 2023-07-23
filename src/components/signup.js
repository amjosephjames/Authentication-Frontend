import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import swal from "sweetalert2";
import Loading from "./loadingstate";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const toggleLoading = () => {
    setLoading(true);
  };

  const formSchema = yup.object().shape({
    username: yup.string().required("this field cannot be empty"),
    email: yup.string().email().required("this field cannot be empty"),
    password: yup.string().required("this field cannot be empty"),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "password must match"),
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
    console.log(val);

    const { username, email, password, confirmpassword } = val;
    const url = "https://myauth-server.onrender.com/api/user/create";

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmpassword", confirmpassword);

    const config = {
      "content-type": "multipart/form-data",
    };

    toggleLoading();
    await axios
      .post(url, formData, config)
      .then((res) => {
        swal.fire({
          title: " Success",
          text: "proceed to signin",
          icon: "success",
        });
      })
      .catch((error) => {
        setLoading(false);
      });
    reset();
    navigate("/signin");
  });

  return (
    <Container>
      {loading ? <Loading /> : null}
      <Card>
        <Cardwrap onSubmit={onSubmit} type="multipart/form-data">
          <H1>Sign Up</H1>
          <Form>
            <Hold>
              <Label>Username</Label>
              <Input>
                <input
                  type="text"
                  placeholder="fill in your username"
                  {...register("username")}
                />
              </Input>
              <Error>{errors?.username?.message}</Error>
            </Hold>
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
            <Hold>
              <Label>Confirm Password</Label>
              <Input>
                <input
                  type="text"
                  placeholder="confirm your password"
                  {...register("confirmpassword")}
                />
              </Input>
              <Error>{errors?.confirmpassword?.message}</Error>
            </Hold>
          </Form>

          <Button type="submit">Sign Up</Button>
          <Mid>
            Already have an account?<P to="/signin">Sign In</P>
          </Mid>
        </Cardwrap>
      </Card>
    </Container>
  );
};
export default Signup;

const Container = styled.div`
  width: 100%;
  height: 150vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #020c1b;
`;
const Card = styled.div`
  width: 350px;
  height: 570px;
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
  height: 330px;
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
      /* margin-left: 5px; */
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
  width: 174px;
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
const Error = styled.div`
  color: red;
  font-weight: 500;
  display: none;
  font-size: 12px;
`;
