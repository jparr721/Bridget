import React, {Component} from 'react';

class NewDialogue extends Component {
  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="foodName">Food Item Name:</span>
          </div>
          <input type="text" className="form-control" aria-label="Default" aria-describedby="foodName" />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="quantity">Quantity:</span>
          </div>
          <input type="text" className="form-control" aria-label="Default" aria-describedby="quantity" />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="units">Units:</span>
          </div>
          <input type="text" className="form-control" aria-label="Default" aria-describedby="units" />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="exp">Expiration Date:</span>
          </div>
          <input type="text" className="form-control" aria-lavel="Default" aria-describedby="exp" />
        </div>
        <button type="button" className="btn btn-outline-success">
          Add Food
        </button>
      </div>
    );
  }
}

export default NewDialogue;
