import styled from 'styled-components';

export const CardHeader = styled.h1`
  color: #111;
  border-radius: 2px;
  font-size: 28px;
  text-align: center;
  font-weight: 600;
  font-family: 'Montserrat';
`;

export const CardContainer = styled.div`a
  transition: all 0.4s ease-in-out;
  border-radius: 0px;
  opacity: 0.9;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;
  
  margin-left: 10px;
  &:hover {
    opacity: 1;
  }
`;

export const Card2Container = styled.div`
  background-color: white;
  .sub-card-container {
    height: 85px;
    background-color: #265b7e;
    border-bottom: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.4s ease-in-out;
    text-decoration: none;
  }

  .sub-card-container:hover {
    background-color: #6fa7cd;
  }

  .sub-card-content {
    color: white;
    margin-left: 30px;
    font-size: 22px;
    font-weight: bold;
  }
`;

export const Card2Header = styled.h1`
  color: black;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 29px;
  font-weight: light;
  letter-spacing: -1px;
  line-height: 1;
`;

export const PayslipCard = styled.div`
  border-radius: 0px;
  margin-top: 20px;

  .sub-card-container {
    height: 50px;
    background-color: #265b7e;
    // border-bottom: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.4s ease-in-out;
    text-decoration: none;
  }

  .sub-card-container:hover {
    background-color: #6fa7cd;
  }

  .sub-card-content {
    color: white;
    margin-left: 30px;
    font-size: 22px;
    font-weight: bold;
  }
`;

export const Title = styled.div`
  text-align: center;
  // font: normal normal medium 50px Montserrat;
  font-size: 24px;
  letter-spacing: 0px;
  font-weight: 800;
  color: #000;
  opacity: 1;
  padding-top: 35px;
  @media only screen and (max-width: 1500px) {
    font-size: 16px;
    letter-spacing: 0px;
    font-weight: 800;
  }
`;

export const Subtitle = styled.div`
  text-align: center;
  letter-spacing: 0px;
  opacity: 1;
  font-size: 20px;
  padding-bottom: 35px;
  @media only screen and (max-width: 1500px) {
    font-size: 14px;
  }
`;
