import { Button } from '@mui/material';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  width: 400px;
  && {
    ${({ theme }) => {
      return `
      color: ${theme.colors.white}`;
    }}
  }
`;
