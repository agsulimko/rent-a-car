import styled from 'styled-components';

const H1 = styled.h1`
  position: absolute;
  left: 420px;
  top: 100px;
  font-size: 56px;
  padding-top: 390px;
  margin-bottom: 40px;
  text-align: center;
  color: white;
  margin-top: 0;
  &:hover {
    font-size: 86px;
    color: #3470ff;
    left: 280px;
    top: 80px;
  }
`;

const H2 = styled.h2`
  position: absolute;
  color: rgb(200, 233, 235);
  color: #9da0b1;
  text-align: center;
  width: 800px;
  margin: 0 auto;
  left: 80px;
  bottom: 50px;
`;

const Img1 = styled.img`
  position: absolute;
  left: 100px;
  top: 100px;
  width: 400px;
  border-radius: 20px;
  /* transform: rotate(-20deg); */
  border: 1px solid black;
  &:hover {
    width: 500px;
    left: 50px;
    top: 50px;
  }
`;
const Img2 = styled.img`
  position: absolute;
  right: 100px;
  width: 400px;
  bottom: 100px;
  border-radius: 20px;
  border: 1px solid black;

  /* transform: rotate(-20deg); */
  &:hover {
    width: 500px;
    right: 50px;
    bottom: 50px;
  }
`;

const MainHome = styled.main`
  position: relative;
  background-color: dimgray;
  height: 1000px;
  background-repeat: no-repeat;
  max-width: 1440px;
  border: 2px solid black;
  border-radius: 15px;
  background-position: center;
  background-size: cover;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.1),
      rgba(46, 47, 66, 0.7)
    ),
    url('https://ftp.goit.study/img/cars-test-task/pontiac_firebird.jpeg');
`;

export { H1, H2, MainHome, Img1, Img2 };
