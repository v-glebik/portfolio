import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { InfoInputs } from './InfoInputs';
import { HoursInputs } from './HoursInputs';
import { PhotosInputs } from './PhotosInputs';
import { ModalWindow } from '../ModalWindow';

import { FormBlockStyled } from './styled';

const AddSalon = (props) => {
  const {
    dialog, values, errors,
    changeInput,
    loadFile, deleteFile,
    handleClose, handleClick
  } = props;
  return (
    <ModalWindow
      dialog={dialog}
      titleWindow="Add a new Salon"
      closeWindow={handleClose}
      saveClick={handleClick}
    >
      <Grid container direction="column">
        <FormBlockStyled container spacing={16}>
          <InfoInputs errors={errors} values={values} changeInput={changeInput} />
          <Grid item sm={1} />
          <HoursInputs values={values} changeInput={changeInput} />
          <PhotosInputs photos={values.photos} loadFile={loadFile} deleteFile={deleteFile} />
        </FormBlockStyled>
      </Grid>
    </ModalWindow>
  );
};

AddSalon.propTypes = {
  dialog: PropTypes.string,
  values: PropTypes.instanceOf(Object),
  errors: PropTypes.instanceOf(Object),
  changeInput: PropTypes.func,
  loadFile: PropTypes.func,
  deleteFile: PropTypes.func,
  handleClose: PropTypes.func,
  handleClick: PropTypes.func
};

AddSalon.defaultProps = {
  dialog: '',
  values: {},
  errors: {},
  changeInput: () => false,
  loadFile: () => false,
  deleteFile: () => false,
  handleClose: () => false,
  handleClick: () => false
};

export { AddSalon };
