import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { theme } from '../Themes';

const { palette } = theme;

export const InputStyled = styled(TextField)`
  &&{
    text-align: left;
    margin-top: 0;
    margin-bottom: ${props => (props.size === 'large' ? '14px' : '21px')};
    max-width: ${props => (props.select ? '150px' : '100%')};
    input, label{
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      font-size: ${props => (props.size === 'large' ? '1.25em' : '1em')};
      top: -2px;
      color: ${props => (props.error ? palette.text.error : palette.text.transparent)};
    }
    input, div{
      height: ${props => (props.size === 'large' ? '50px' : '42px')};
      box-sizing: border-box;
      color: ${palette.text.transparent};
    }
    div:hover fieldset{
      border-color: ${palette.primary.main} !important;
    }
  }
`;
