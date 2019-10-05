import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Input } from '../../ui/Input';
import { hasProperty, getObjectProperty } from '../../utils/functions';

import { FormHelperTextStyled } from './styled';

const InfoInputs = (props) => {
  const { errors, changeInput, values } = props;
  return (
    <Grid item sm={4}>
      <FormHelperTextStyled id="name-helper-text">{errors.name}</FormHelperTextStyled>
      <Input
        id="salon-name"
        label="Name"
        name="name"
        error={hasProperty(errors, 'name')}
        onChange={changeInput}
        value={hasProperty(values, 'name') ? values.name : ''}
        required
        aria-describedby="name-helper-text"
      />
      <Input
        id="salon-site"
        label="Site"
        name="website"
        error={false}
        onChange={changeInput}
        value={hasProperty(values, 'website') ? values.website : ''}
      />
      <Input
        id="salon-raiting"
        label="Raiting"
        name="raiting"
        error={false}
        onChange={changeInput}
        value={hasProperty(values, 'raiting') ? values.raiting : ''}
      />
      <FormHelperTextStyled focused id="lat-helper-text">{errors.lat}</FormHelperTextStyled>
      <Input
        id="salon-lat"
        label="Lat"
        type="text"
        name="lat"
        error={hasProperty(errors, 'lat')}
        onChange={changeInput}
        value={hasProperty(values, 'lat') ? values.lat : ''}
        aria-describedby="lat-helper-text"
      />
      <FormHelperTextStyled id="lng-helper-text">{errors.lng}</FormHelperTextStyled>
      <Input
        id="salon-lng"
        label="Lng"
        type="text"
        name="lng"
        error={hasProperty(errors, 'lng')}
        onChange={changeInput}
        value={hasProperty(values, 'lng') ? values.lng : ''}
        aria-describedby="lng-helper-text"
      />
      <Input
        id="salon-address"
        label="Address"
        type="text"
        name="address"
        error={hasProperty(errors, 'address')}
        onChange={changeInput}
        value={hasProperty(values, 'address') ? values.address : ''}
      />
      <Input
        id="salon-phone"
        label="Telephone Number"
        type="text"
        name="phone"
        error={hasProperty(errors, 'phone')}
        onChange={changeInput}
        value={hasProperty(values, 'phone') ? values.phone : ''}
      />
    </Grid>
  );
};

InfoInputs.propTypes = {
  errors: PropTypes.instanceOf(Object),
  values: PropTypes.instanceOf(Object),
  changeInput: PropTypes.func
};

InfoInputs.defaultProps = {
  errors: {},
  values: {},
  changeInput: () => false
};

export { InfoInputs };
