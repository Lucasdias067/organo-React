import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";

export const Header = styled.header`
  background-color: #6278f7;
  text-align: center;
  max-height: 90vh;

  img {
    max-width: 100%;
  }
`;

export const Button = styled.button`
  background: #6278f7;
  border-radius: 16px;
  font-weight: 700;
  font-size: 18px;
  padding: 32px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  border: none;
  transition: linear 0.5s 0.15s;

  &:hover {
    transform: scale(1.02);
    opacity: 0.9;
  }

  &:focus {
    background: #fafafa;
    color: #6278f7;
    transition: 1.2s;
  }
`;

export const ContainerInput = styled.div`
  margin: 24px 0;

  label {
    display: block;
    margin-bottom: 12px;
    font-size: 24px;
  }

  input {
    background: #ffffff;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.22);
    border-radius: 14px;
    width: 100%;
    border: none;
    font-size: 18px;
    padding: 24px;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    &:focus::placeholder {
      color: #b1b8da;
    }
  }

  input[type="color"] {
    height: 48px;
    padding: 5px 24px;
  }
`;

export const ContainerTimesInput = styled.div`
  margin: 24px 0;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
  }
  select {
    background: #ffffff;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    width: 100%;
    border: none;
    font-size: 18px;
    padding: 24px;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }
`;

export const ContainerFormulario = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 5rem 10rem;

  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #f7f7f7;
    box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    padding: 36px 64px;

    h2 {
      font-weight: 600;
      font-size: 30px;
      text-align: center;
    }
  }
`;

export const ContainerColaborador = styled.div`
  position: relative;
  width: 280px;
  margin-top: 48px;

  img {
    width: 100px;
    border-radius: 50%;
    position: relative;
    bottom: -50px;
  }

  > div {
    background-color: #f0f0f0;
  }
`;

export const ContainerColaboradorCard = styled.div`
  background: #ffffff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
  border-radius: 0px 0px 10px 10px;
  display: flex;
  flex-direction: column;
  padding-top: 90px;
  padding-bottom: 40px;
  
  h4 {
    color: #6278f7;
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  h5 {
    font-size: 18px;
    line-height: 22px;
    color: #212121;
    padding: 0 16px;
  }

  div {
    margin-top: 20px;
  }
  `;

export const Close = styled(AiFillCloseCircle)`
  position: absolute;
  right: -10px;
  top: -10px;
`;

export const ContainerTimes = styled.div`
  text-align: center;
  padding: 24px;
  background-blend-mode: multiply;
  position: relative;

  h3 {
    font-size: 32px;
    border-bottom: 4px solid;
    display: inline-block;
    padding-bottom: 8px;
  }

  input {
    position: absolute;
    top: 20px;
    right: 50px;
  }

  > div {
    display: flex;
    justify-content: space-around;
    margin-top: 32px;
    flex-wrap: wrap;
  }
`;

export const FooterContainer = styled.footer`
  background: #6278f7;
  color: #fff;
  padding: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  ul li {
    display: inline-block;
    margin-right: 32px;
  }

  ul li:last-child {
    margin-right: 0;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;
