import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import { Button } from '../../ui/Button';

import { DialogContentStyled, GroupButtonStyled, DialogTitleStyled, TitleStyled } from './styled';

const ModalWindow = (props) => {
  const { dialog, children, titleWindow, closeWindow, editClick, saveClick } = props;
  let handleButton = null;
  if (dialog === 'view') {
    handleButton = <Button variant="contained" color="secondary" text="Edit" handleClick={editClick} />;
  }
  if (dialog === 'edit' || dialog === 'add') {
    handleButton = <Button variant="contained" color="secondary" text="Save" handleClick={saveClick} />;
  }
  return (
    <Dialog
      open={dialog !== ''}
      maxWidth="lg"
      fullWidth
    >
      <DialogTitleStyled id="dialog">
        <Grid container justify="space-between">
          <TitleStyled variant="h5">{titleWindow}</TitleStyled>
          <GroupButtonStyled variant="subtitle1">
            <Button color="default" text="Back" handleClick={closeWindow} />
            {handleButton}
          </GroupButtonStyled>
        </Grid>
      </DialogTitleStyled>
      <DialogContentStyled>
        {children}
      </DialogContentStyled>
    </Dialog>
  );
};

ModalWindow.propTypes = {
  dialog: PropTypes.string,
  children: PropTypes.node,
  titleWindow: PropTypes.string,
  closeWindow: PropTypes.func,
  saveClick: PropTypes.func,
  editClick: PropTypes.func
};

ModalWindow.defaultProps = {
  dialog: '',
  children: null,
  titleWindow: '',
  closeWindow: () => false,
  saveClick: () => false,
  editClick: () => false
};

export { ModalWindow };
