import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ViewSalon } from '../components/ViewSalon';
import { openDialogEditAction } from '../services/dialog/actions';
import { fetchSalonAction } from '../services/salons/actions';

class ViewSalonContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    const { fetchSalon, salonId } = this.props;
    fetchSalon(salonId);
  }

  editClick = () => {
    const { openDialogEdit } = this.props;
    openDialogEdit();
  }

  render() {
    const { dialog, handleClose, salon } = this.props;
    return (
      <ViewSalon
        salon={salon}
        dialog={dialog}
        handleClose={handleClose}
        handleClick={this.editClick}
      />
    );
  }
}

ViewSalonContainer.propTypes = {
  dialog: PropTypes.string,
  salonId: PropTypes.number,
  salon: PropTypes.instanceOf(Object),
  handleClose: PropTypes.func,
  openDialogEdit: PropTypes.func,
  fetchSalon: PropTypes.func
};

ViewSalonContainer.defaultProps = {
  dialog: '',
  salonId: 0,
  salon: {},
  handleClose: () => false,
  openDialogEdit: () => false,
  fetchSalon: () => false
};

const mapStateToProps = state => ({
  salon: state.salons.salon
});

const mapDispatchToProps = dispatch => ({
  openDialogEdit: () => dispatch(openDialogEditAction()),
  fetchSalon: id => dispatch(fetchSalonAction(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewSalonContainer);
