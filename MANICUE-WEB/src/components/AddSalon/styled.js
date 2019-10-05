import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { theme } from '../../ui/Themes';

const { palette } = theme;

export const FormBlockStyled = styled(Grid)`
  padding-top: 10px;
`;

export const DayStyled = styled(Typography)`
  text-transform: capitalize;
  text-align: right;
  &&{
    color: ${palette.text.transparent};
    line-height: 46px;
  }
`;

export const BlockPhotosStyled = styled(Grid)`
  overflow: hidden;
  height: 190px;
`;

export const GridListStyled = styled(GridList)`
  &&{
    flex-wrap: nowrap;
  }
  li{
    margin: 0 4px;
  }
  transform: translateZ(0);
  div{
    border-radius: 5px;
  }
`;

export const ButtonAddStyled = styled(Grid)`
  text-align: center;
  position: relative;
  top: calc(90px - 40px / 2);
`;

export const GridListTileBarStyled = styled(GridListTileBar)`
  div{
    flex-grow: 1;
  }
`;

export const InputFileStyled = styled('input')`
  display: none;
`;

export const AddPhotoStyled = styled(Button)`
  &&{
    display: inline-block;
    height: 48px;
    border-radius: 50%;
    min-width: 48px;
    width: 48px;
    line-height: 44px;
  }
`;

export const HeaserStyled = styled(Typography)`
  &&{
    color: ${palette.text.transparent};
  }
`;

export const FormHelperTextStyled = styled(FormHelperText)`
  &&{
    color: ${palette.error.main};
    margin: 0 0 2px 0;
    text-align: right;
  }
`;
