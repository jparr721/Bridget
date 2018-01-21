import React, {Component} from 'react';
import ReactModal from 'react-modal';
import NewDialogue from './common/NewDialogue';

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import NavigateBefore from 'material-ui-icons/NavigateBefore';

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <Tooltip placement="top" title="Add a new food">
          <Button fab color="primary" className="fabulous" aria-label="add" onClick={() => this.handleOpenModal()}>
            <AddIcon />
          </Button>
        </Tooltip>
        <ReactModal
          isOpen={this.state.showModal}>
          <IconButton color="primary" onClick={() => this.handleCloseModal()}>
            <NavigateBefore />
          </IconButton>
          <NewDialogue />
        </ReactModal>
      </div>
    );
  }
}

export default Modal;
