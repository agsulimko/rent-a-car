import styled from 'styled-components';

import { theme } from 'styles/theme.jsx';

// import { theme } from 'styles';
// import { theme } from 'styles';

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 18px;
  align-items: flex-end;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
const SelectBrand = styled.select``;
const SelectPrice = styled.select``;

const DivMileage = styled.div`
  display: flex;

  align-items: flex-end;
`;

export { Label, Form, DivMileage, SelectBrand, SelectPrice };
