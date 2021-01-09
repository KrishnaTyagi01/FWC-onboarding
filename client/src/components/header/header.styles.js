import styled from 'styled-components';

export const HeaderContainer = styled.div`
  // background: #2193b0;
  // background: -webkit-linear-gradient(to right, #2193b0, #6dd5ed);
  // background: linear-gradient(to right, #2193b0, #6dd5ed);
  background: #f8f8ff;
  transition: all 0.5s;
  z-index: 997;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.05);
  margin:revert;
  padding:15px 0px;

  & .navbar-brand {
    font-family: 'Helvetica Neue', sans-serif;
    color: #111;
    font-size: 35px;
    font-weight: bold;
    letter-spacing: -1px;
    line-height: 1;
    text-align: center;
    
  }

  // & .navbar-nav {
  //   margin:revert;
  // }

  & .navbar-nav a {
    font-family: 'Helvetica Neue', sans-serif;
    color: #111;
    // background-color: #121416;
    font-size: 16px;
    font-weight: bold;
    // letter-spacing: 1px;
    line-height: 1;
    text-align: right;
    transition: all 0.4s ease-in-out;
    text-transform: uppercase;
    margin-top:5px;
    padding: 5px 0px;
    border-bottom: 1px solid black;

  }

  & .navbar-nav a:hover {
   
    border-bottom: 1px solid black;
   
    // letter-spacing: 1px;
    // line-height: 1;
    // text-align: center;
    transform: scale(1.04);
  }
`;
