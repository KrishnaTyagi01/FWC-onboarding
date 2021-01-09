
import styled from 'styled-components';

export const UploadContainer = styled.div`
  // padding: 30px;
  // color: #3f46cc;
  .heading {
    width: 600px;
    font-weight: 700;
    color: #3f46cc;
  }
  .form-group {
    margin: 20px 0;
  }
  .select {
    // margin: 30px 0px;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    // width: 500px;
  }
  .select input {
    width: 250px;
    font-size: 20px;
    height: 26px;
  }
  .select p {
    font-size: 20px;
  }
  #btn1,
  #btn2 {
    width: 500px;
    background: #2B5D80;
    font-weight: bold;
    padding: 11px 6px;
    color: white;
    border-radius: 5px;
    margin-top: 40px;
    text-align: center;
    // padding: 10px 0px;
    cursor: pointer;
  }
  .realupload {
    border: none;
    background: white;
    outline: none;
    width: 0px;
    height: 0px;
  }

  .heading h4 {
    border-bottom: 2px solid #3f46cc;
    color: #3f46cc;
    font-family: montserrat;
    text-transform: uppercase;
    width: 100%;
    margin: 40px 0px;
  }
`;
