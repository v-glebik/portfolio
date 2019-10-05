import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Button } from '../../ui/Button';

import { GroupButtonStyled, DialogTitleStyled, TitleStyled } from './styled';

const TitleBar = (props) => {
  const { titleWindow, closeWindow, saveClick } = props;
  return (
    <DialogTitleStyled id="dialog">
      <Grid container justify="space-between">
        <TitleStyled variant="h5">{titleWindow}</TitleStyled>
        <GroupButtonStyled variant="subtitle1">
          <Button color="default" text="Back" handleClick={closeWindow} />
          <Button variant="contained" color="secondary" text="Edit" handleClick={saveClick} />
        </GroupButtonStyled>
      </Grid>
    </DialogTitleStyled>
  );
};

TitleBar.propTypes = {
  titleWindow: PropTypes.string,
  closeWindow: PropTypes.func,
  saveClick: PropTypes.func
};

TitleBar.defaultProps = {
  titleWindow: '',
  closeWindow: () => false,
  saveClick: () => false
};

export { TitleBar };
