import styled from 'styled-components';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import { theme } from '../../ui/Themes';

const { palette } = theme;

export const DialogTitleStyled = styled(DialogTitle)`
  border-bottom: 1px solid ${palette.border.light};
  &&{
    padding: 42px 72px 26px;
    margin-bottom: 30px;
  }
`;

export const TitleStyled = styled(Typography)`
  &&{
    color: ${palette.text.transparent};
    font-size: 1.3rem;
  }
`;

export const DialogContentStyled = styled(DialogContent)`
  &&{
    padding: 0px 74px 42px;
  }
`;

export const GroupButtonStyled = styled(Typography)`
  button{
    margin: 0 4px;
  }
`;
