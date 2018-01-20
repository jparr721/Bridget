import React, {Component} from 'react';

class List extends Component {
  render() {
    return (
      <div>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">{this.props.col1}</th>
              <th scope="col">{this.props.col2}</th>
              <th scope="col">{this.props.col3}</th>
              <th scope="col">{this.props.col4}</th>
              <th scope="col">{this.props.col5}</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    );
  }
}

export default List
