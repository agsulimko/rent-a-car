import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 56px;
  padding-top: 390px;
  margin-bottom: 40px;
  text-align: center;
  color: white;
  margin-top: 0;
`;

const H2 = styled.h2`
  color: rgb(200, 233, 235);
  text-align: center;
  width: 800px;
  margin: 0 auto;
`;

const Img1 = styled.img`
  position: absolute;
  left: 100px;
  top: 100px;
  border-radius: 20px;
  /* transform: rotate(-20deg); */
`;
const Img2 = styled.img`
  position: absolute;
  right: 100px;
  bottom: 100px;
  border-radius: 20px;
  /* transform: rotate(-20deg); */
`;

const MainHome = styled.main`
  position: relative;
  background-color: dimgray;
  height: 1000px;
  background-repeat: no-repeat;
  max-width: 1440px;
  background-position: center;
  background-size: cover;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.1),
      rgba(46, 47, 66, 0.7)
    ),
    url('https://ftp.goit.study/img/cars-test-task/pontiac_firebird.jpeg');
`;

export { H1, H2, MainHome, Img1, Img2 };
