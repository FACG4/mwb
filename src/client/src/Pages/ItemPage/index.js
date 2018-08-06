/*eslint-disable*/
import React from 'react';
import ReactLoading from 'react-loading';
import ItemCard from '../../Components/ItemCard';
import HeaderWithSideBar from '../../Components/HeaderWithSideBar';
import './index.css';

class ItemPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      itemsArray:[]
    };
  }


  componentDidMount() {
    fetch('/getAllItems')
      .then(response => response.json())
      .then((data) => {
        this.setState({ itemsArray: data.data });
      })
      .catch((err) => {
        console.log('Something error happened while trying getting all orders: ', err);
      });
  }


render(){
  return(
    <div>
      <HeaderWithSideBar title="Items" />

      <div>
        {this.state.itemsArray.length === 0
          ? (
            <div className="centerLoadingIcon">
              <ReactLoading type="spokes" color="grey" height={367} width={75} />
            </div>
          )
          : this.state.itemsArray.map((item, index) => (
            <ItemCard
              itemTitle={item.title}
              itemID={item.id}
              src={item.image}
            />
          ))}
      </div>
      <button className="addNewItem"><i class="fas fa-plus addNewItemIcon"></i></button>
    </div>
  )
}
}


export default ItemPage;
