import React, { useState } from "react";
import styled from "styled-components";

import logo from "../assets/logo.jpg";
import InputItem from "../components/InputItem";

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url(${process.env.PUBLIC_URL}/assets/banner.jpg);
  background-size: cover;
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 45px;
`;

const NetflixLogo = styled.img`
  position: absolute;
  left: 50px;
  top: 10px;
  width: 200px;
  height: 150px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 440px;
  padding: 70px;
  background-color: rgba(0, 0, 0, 0.75);
  color: #f2f5f5;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: xx-large;
`;

const Input = styled.input`
  font-size: medium;
  height: 50px;
  padding: 16px 20px 0;
  margin-bottom: 16px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: rgb(51, 51, 51, 0.75);
`;

const SignInButton = styled.button`
  height: 50px;
  margin-top: 30px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: rgb(229, 9, 20);
  color: #f2f5f5;
  font-weight: 700;
  font-size: large;
  :focus {
    cursor: pointer;
  }
`;

//!
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkEmailValidation = (email) => {
    return email.length === 0 || !email.includes("@") ? false : true;
  };

  const checkPasswordValidation = (password) => {
    return email.length < 8 ? false : true;
  };

  const user = [
    {
      name: email,
      title: "email",
      type: "email",
      validation: checkEmailValidation,
      inputAlert: "정확한 이메일 주소 형식으로 입력해주세요.",
      setter: setEmail,
    },
    {
      name: password,
      title: "password",
      type: "password",
      validation: checkPasswordValidation,
      inputAlert: "8자 이상 영문 대소문자, 숫자, 특수문자를 입력해주세요.",
      setter: setPassword,
    },
  ];

  return (
    <Background>
      <NavBar>
        <NetflixLogo src={logo} />
      </NavBar>
      <LoginContainer>
        <Title>Sign In</Title>
        {user.map((data, idx) => {
          return <InputItem key={idx} data={data} />;
        })}
        <SignInButton>Sign In</SignInButton>
      </LoginContainer>
    </Background>
  );
};

export default Login;
