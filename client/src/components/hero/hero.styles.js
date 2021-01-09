import styled from 'styled-components';

export const HeroContainer = styled.div`
  background-color: #111;
  background: url(https://images.unsplash.com/photo-1581091215367-9b6c00b3035a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)
    center center no-repeat;
  background-size: cover;
  // height: 100vh;
  // padding: 80px 0 60px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  padding: 80px 80px;
  .link {
    color: #111;
  }

  .link:hover {
    color: #6598bb;
    text-decoration: none;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #040f16;
    background-image: linear-gradient(315deg, #040f16 0%, #3e92cc 74%);
    opacity: 0.6;
    -moz-opacity: 0.6;
    -khtml-opacity: 0.6;
  }

  .form-link {
    padding: 10px;
    color: white;
    font-size: 24px;
  }

  .sub-card {
  }

  .form-link:hover {
    color: #6598bb;
    text-decoration: none;
  }

  .list-item-style {
    color: blue;
  }

  .list-group-item {
    transition: all 0.2s ease-in-out;
    color: red;
    background-color: red;
    border-bottom: 1px solid aquamarine;
  }

  .list-group-item:hover {
    transform: scale(1.03);
    z-index: 1;
  }

  .hero-row {
    margin-bottom: 10px;
  }
`;

export const MainHeader = styled.h1`
  color: #0e0e0e;
  border-radius: 5px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  b {
    font-size: 20px;
    font-weight: 400;
  }
`;

export const MainPara = styled.div`
  color: #0e0e0e;
  font-size: 18px;
  @media only screen and (max-width: 1500px) {
    font-size: 14px;
  }
`;

export const MainHeader2 = styled.h1`
  color: #f8f8f8;
  font-family: 'Helvetica Neue', sans-serif;
  border-radius: 5px;
  font-size: 50px;
  padding: 5px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
`;

export const MainPara2 = styled.p`
  color: #111;
  // background: #222;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 25px;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
  padding: 20px;
`;
