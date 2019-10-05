import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TableList } from '../components/TableList';
import AddSalonContainer from './AddSalonContainer';
import EditSalonContainer from './EditSalonContainer';
import ViewSalonContainer from './ViewSalonContainer';
import { fetchSalonsAction } from '../services/salons/actions';
import { closeDialogAction, openDialogAddAction, openDialogViewAction } from '../services/dialog/actions';
import { headerSalon } from '../utils/headersList';

class SalonTableListContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState = () => (
    {
      data: [],
      querySize: 10,
      totalSize: 0,
      pageNumber: 1,
      salonId: 0
    }
  )

  componentDidMount() {
    this.loadMore();
  }

  componentWillUnmount() {
    this.actuallyLoadMore = () => false;
  }

  // load part of data
  loadMore = () => {
    const { data, querySize, pageNumber } = this.state;
    const { fetchData, nextPage, waiting } = this.props;
    if (data.length === 0 || nextPage !== null) {
      fetchData(pageNumber, querySize)
        .then(() => {
          if (!waiting) {
            this.actuallyLoadMore();
          }
        });
    }
  };

  actuallyLoadMore = () => {
    const { data, pageNumber } = this.state;
    const { lastLoadedData, totalSize } = this.props;
    this.setState({
      data: data.concat(lastLoadedData),
      pageNumber: pageNumber + 1,
      totalSize
    });
  }

  initialState = () => {
    this.setState(this.getInitialState(), () => this.loadMore());
  }

  openAddSalonDialog = () => {
    const { openDialogAdd } = this.props;
    openDialogAdd();
  }

  openSalonDialog = (ev) => {
    const { openDialogView } = this.props;
    this.setState({
      salonId: ev.rowData.id
    });
    openDialogView();
  }

  closeAddSalonDialog = () => {
    const { closeDialog } = this.props;
    this.initialState();
    closeDialog();
  }

  closeViewSalonDialog = () => {
    const { closeDialog } = this.props;
    closeDialog();
  }

  render() {
    const { data, totalSize, waiting, salonId } = this.state;
    const { dialog } = this.props;
    let modalWindow = null;
    if (dialog === 'add') {
      modalWindow = <AddSalonContainer dialog={dialog} handleClose={this.closeAddSalonDialog} />;
    }
    if (dialog === 'edit') {
      modalWindow = <EditSalonContainer dialog={dialog} handleClose={this.closeAddSalonDialog} />;
    }
    if (dialog === 'view') {
      modalWindow = (
        <ViewSalonContainer
          salonId={salonId}
          dialog={dialog}
          handleClose={this.closeViewSalonDialog}
        />
      );
    }
    return (
      <Fragment>
        <TableList
          waiting={waiting}
          loadMoreRows={this.loadMore}
          listData={data}
          columns={headerSalon}
          handleOpen={this.openAddSalonDialog}
          rowCount={totalSize}
          onRowClick={this.openSalonDialog}
        />
        {modalWindow}
      </Fragment>
    );
  }
}

SalonTableListContainer.propTypes = {
  waiting: PropTypes.bool,
  fetchData: PropTypes.func.isRequired,
  lastLoadedData: PropTypes.instanceOf(Array),
  totalSize: PropTypes.number,
  nextPage: PropTypes.string,
  dialog: PropTypes.string,
  openDialogAdd: PropTypes.func,
  openDialogView: PropTypes.func,
  closeDialog: PropTypes.func
};

SalonTableListContainer.defaultProps = {
  waiting: false,
  lastLoadedData: [],
  totalSize: 0,
  nextPage: null,
  dialog: '',
  openDialogAdd: () => false,
  openDialogView: () => false,
  closeDialog: () => false
};

const mapStateToProps = state => ({
  waiting: state.salons.waiting,
  lastLoadedData: state.salons.salons,
  totalSize: state.salons.sizeOfSalons,
  nextPage: state.salons.nextPageSalons,
  dialog: state.dialog.dialog
});

const mapDispatchToProps = dispatch => ({
  fetchData: (pageNumber, size) => dispatch(fetchSalonsAction(pageNumber, size)),
  openDialogAdd: () => dispatch(openDialogAddAction()),
  openDialogView: () => dispatch(openDialogViewAction()),
  closeDialog: () => dispatch(closeDialogAction())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SalonTableListContainer);
