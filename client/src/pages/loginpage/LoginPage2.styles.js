import styled from 'styled-components';

export const HOLDER = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    #0d3c61: #0d3c61;
    #092e4b: #092e4b;
  }

  .background-here-login {
    background-image: url(/background.jpg);
    background-size: cover;
    /* filter: blur(4px); */
  }

  nav {
    height: 3.5rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav .heading {
    color: white;
  }

  .main-Login {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 4rem);
    padding-bottom: 4rem;
  }

  .card {
    max-width: 50%;
    min-height: 50vh;
    border-bottom: 0.5rem solid var(#0d3c61);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.95);
  }

  .card-left {
    width: 60%;
    padding: 0rem 1rem 0rem 3rem;
  }

  h3 {
    font-weight: 400;
  }

  .cb {
    color: #0d3c61;
    font-size: 2.5rem;
    font-weight: 500;
  }

  .small-text {
    font-size: 0.8rem;
  }

  .gutterBottom {
    margin-bottom: 0.5rem;
  }

  .icon-text {
    display: flex;
    flex-direction: row;
    margin: 2.5rem 0;
    align-items: center;
  }

  .icon-text i {
    padding-right: 1rem;
    font-size: 1.5rem;
  }

  .icon-text span {
    padding-right: 1rem;
  }

  .card-right {
    width: 40%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    padding: 0rem 3rem 0rem 1rem;
    justify-content: center;
  }

  .form {
    width: 70%;
    display: flex;
    flex-direction: column;
  }

  .input-icons i {
    position: absolute;
  }

  .input-icons {
    width: 100%;
  }

  .icon {
    margin: 0.25rem 0 0 0.25rem;
  }

  .input-label {
    font-size: 0.7rem;
    font-weight: 500;
  }

  .input-field {
    width: 100%;
    padding: 0.5rem;
    padding-left: 2rem;
    border: 1px solid rgb(146, 145, 145);
    margin-bottom: 1rem;
    outline: transparent;
    border-radius: 0.25rem;
  }

  .input-field:focus {
    border: 1px solid #0d3c61;
  }
  .unchange {
    color: black;
  }
  .btn-primary {
    background-color: #0d3c61;
    color: white;
    padding: 0.5rem;
    width: 100%;
    outline: none;
    font-weight: 600;
    border: none;
    border-radius: 0.25rem;
  }

  .btn-primary:active {
    background-color: #092e4b;
    outline: none;
    border-radius: 0.25rem;
  }

  .link {
    color: grey;
    text-decoration: underline;
    font-size: 0.8rem;
    text-align: right;
  }

  .unchange {
    text-decoration: none;
  }

  @media (max-width: 1280px) {
    .card-left {
      padding: 1rem;
    }
    .card-right {
      padding: 1rem;
    }
    .form {
      width: 90%;
    }
  }

  @media (max-width: 768px) {
    /* For mobile phones: */
    .card {
      flex-direction: column;
    }
    .card-left {
      width: 100%;
      padding: 2rem;
    }
    .card-right {
      width: 100%;
      padding: 2rem;
    }
    .icon-text {
      margin: 1rem 0;
    }
    .form {
      width: 90%;
    }
  }
`;
export const MainLogin = styled.div`
  width: 480px;
  z-index: 80;
  height: 94vh;
  .loginform {
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  h6 {
    margin: 0 13%;
    padding: 10px 0 -20px 0;
  }
  .form-group {
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    padding: 8px;
    height: 24px;
    outline: none;
    font-size: 16px;
    margin: 0 0;
  }
  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
    border: none;
  }

  .btn {
    width: 190px;
    margin: auto;
    background: #3f47cc;
    color: white;
  }

  @media only screen and (max-width: 1500px) {
    .form-group {
      margin: 12px 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    h6 {
      font-size: 12px;
    }
    .btn {
      width: 150px;
      padding: auto;
      font-size: 14px;
      margin: auto;
      background: #3f47cc;
      color: white;
    }
    input {
      padding: 8px;
      height: 18px;
      outline: none;
      font-size: 13px;
      margin: 0 0;
    }
  }
  @media only screen and (max-width: 800px) {
    width: 100vw;
  }
`;
export const MainSlide = styled.div`
  
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  width: 100vw;
  background: #3f47cc;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  z-index: 10;
  overflow: hidden;
  .image {
    position: absolute;
    z-index: 20;
    opacity: 0.8;
    text-align: center;
  }
  .imageMain{
    width: 800px;
    objectFit: 'fill';
  }

  .Head {
    position: absolute;
    bottom: 80px;
    color: white;
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;
  }

  @media only screen and (max-width: 951px) {
    .Head {
      font-size: 21px;
    }

  }
 @media only screen and (max-width: 1500px) {
  .imageMain{
    width: 400px;
    objectFit: 'fill';
  }
  }


  .Circle1 {
    position: absolute;
    width: 450px
    z-index: -10;
    left: 360px;

        top : -80px;
  }
  .Circle1 img {
    width: inherit;
  }

  @media only screen and (max-width: 780px) {
    display: none;
  }
`;
export const MainContainer = styled.div`
  display: flex;

  * {
    border: none;
    margin: none;
    padding: none;
    overflow-x: none;
    box-sizing: border-box;
  }
  .Logo {
    margin: none;
  }
`;
export const Heading = styled.div`
  font-size: 48px;

  font-weight: 700;
  text-align: center;
  font-family: 'rubik';
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.87;
`;

export const SubHeading = styled.p`
  text-align: center;
  font-family: 'rubik';
  font-size: 16px;
  margin-left: 10%;
  font-weight: 400;
`;
export const Footer = styled.div`
  z-index: 12;
  font-size: 20px;

  width: 100%;
  background: white;
  height: 7vh;
  .footer-up {
    height: 1vh;
    width: inherit;
  }
  .footer-down {
    height: 4vh;
    background: #3f47cc;
    color: white;
    display: flex;
  }
  .Link {
    color: white;
    text-decoration: none;
    margin: 0 10px;
  }
  .Link:hover {
    color: white;
  }

  @media only screen and (max-width: 1600px) {
    font-size: 14px;
  }
`;
