import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { AddSalon } from '../components/AddSalon';
import { addSalonAction } from '../services/salons/actions';
import { convertURLtoBase64, formedData } from '../utils/functions';

class EditSalonContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    };
  }

  changeInput = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  loadPhoto = (ev) => {
    const { photos } = this.state;
    if (ev.target.files.length) {
      const url = ev.target.files[0];
      convertURLtoBase64(url, (result) => {
        this.setState({
          photos: photos.concat(result)
        });
      });
    }
  }

  deletePhoto = (idPhoto) => {
    const { photos } = this.state;
    this.setState({
      photos: photos.filter((item, indx) => (
        idPhoto !== indx ? item : null
      ))
    });
  }

  checkSuccessPost = () => {
    const { errors, handleClose } = this.props;
    if (!Object.values(errors).length) {
      handleClose();
      this.setState(this.getInitialState());
    }
  }

  saveClick = async () => {
    const { addSalon } = this.props;
    const { ...values } = this.state;
    const val = formedData(values);
    await addSalon(val);
    this.checkSuccessPost();
  }

  render() {
    const { ...values } = this.state;
    const { dialog, handleClose, errors } = this.props;
    return (
      <AddSalon
        errors={errors}
        dialog={dialog}
        changeInput={this.changeInput}
        loadFile={this.loadPhoto}
        deleteFile={this.deletePhoto}
        values={values}
        handleClose={handleClose}
        handleClick={this.saveClick}
      />
    );
  }
}

EditSalonContainer.propTypes = {
  dialog: PropTypes.string,
  errors: PropTypes.instanceOf(Object),
  handleClose: PropTypes.func,
  addSalon: PropTypes.func
};

EditSalonContainer.defaultProps = {
  dialog: '',
  errors: {},
  handleClose: () => false,
  addSalon: () => false
};

const mapStateToProps = state => ({
  errors: state.salons.error
});

const mapDispatchToProps = dispatch => ({
  addSalon: values => dispatch(addSalonAction(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditSalonContainer);
