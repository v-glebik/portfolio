import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { ModalWindow } from '../ModalWindow';

import { } from './styled';

const ViewSalon = (props) => {
  const { dialog, salon, handleClose, handleClick } = props;
  console.log(salon);
  return (
    <ModalWindow
      dialog={dialog}
      titleWindow="Salon"
      closeWindow={handleClose}
      editClick={handleClick}
    >
      <Grid container direction="column">
        hjh
      </Grid>
    </ModalWindow>
  );
};

ViewSalon.propTypes = {
  dialog: PropTypes.string,
  salon: PropTypes.instanceOf(Object),
  handleClose: PropTypes.func,
  handleClick: PropTypes.func
};

ViewSalon.defaultProps = {
  dialog: '',
  salon: {},
  handleClose: () => false,
  handleClick: () => false
};

export { ViewSalon };
