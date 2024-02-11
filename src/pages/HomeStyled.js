import styled from 'styled-components';

const H1 = styled.h1`
  padding-top: 350px;
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

const MainHome = styled.main`
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

export { H1, H2, MainHome };
