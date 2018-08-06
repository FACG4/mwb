/*eslint-disable*/
import React from 'react';
import HeaderWithSideBar from '../HeaderWithSideBar';
import './index.css';

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (

      <div className="itemCard">
        <div className="data dataDiv">

        <button className="crossButton"><i class="fas fa-times crossIcon"></i></button>

          <div>
            <span className="ItemCardLabelBold">Item:</span> <span className="ItemCardLabel">{this.props.itemTitle}</span>
          </div>

          <div>
            <span className="ItemCardLabelBold" >Item ID:</span> <span  className="ItemCardLabel">{this.props.itemID}</span>
          </div>

        </div>
        <div className="image"><img src={this.props.src} className="img"/></div>
    </div>

    );
  }
}

export default ItemCard;
