/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';

import {
  BlockPhotosStyled,
  GridListStyled,
  ButtonAddStyled,
  GridListTileBarStyled,
  InputFileStyled,
  AddPhotoStyled,
  HeaserStyled
} from './styled';

import AddSrc from '../../img/plus.svg';
import DeleteSrc from '../../img/delete.svg';

const PhotosInputs = (props) => {
  const { photos, loadFile, deleteFile } = props;
  return (
    <Grid item sm={12}>
      <HeaserStyled>Salon photos</HeaserStyled>
      <Grid container>
        <Grid item sm={2}>
          <ButtonAddStyled>
            <InputFileStyled
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={loadFile}
            />
            <label htmlFor="contained-button-file">
              <AddPhotoStyled color="secondary" component="span" variant="contained">
                <img src={AddSrc} alt="add" width="17" height="17" />
              </AddPhotoStyled>
            </label>
          </ButtonAddStyled>
        </Grid>
        <Grid item sm={10}>
          <BlockPhotosStyled container justify="space-around">
            <GridListStyled cols={4.6}>
              {photos.map((item, indx) => (
                <GridListTile key={indx}>
                  <img src={item} alt="dataInfo.name" />
                  <GridListTileBarStyled actionIcon={
                    <IconButton onClick={() => deleteFile(indx)}><img src={DeleteSrc} alt="" /></IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridListStyled>
          </BlockPhotosStyled>
        </Grid>
      </Grid>
    </Grid>
  );
};

PhotosInputs.propTypes = {
  photos: PropTypes.instanceOf(Array),
  loadFile: PropTypes.func,
  deleteFile: PropTypes.func
};

PhotosInputs.defaultProps = {
  photos: [],
  loadFile: () => false,
  deleteFile: () => false
};

export { PhotosInputs };
