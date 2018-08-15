/*eslint-disable*/
import React from 'react';
import ReactLoading from 'react-loading';
import ItemCard from '../../Components/ItemCard';
import HeaderWithSideBar from '../../Components/HeaderWithSideBar';
import './index.css';

class ItemPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsArray: []
    };
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(id) {}

  componentDidMount() {
    fetch('/api/getAllItems', {
      credentials: 'same-origin',
    })
      .then(response => response.json())
      .then(data => {
        if (data.message.includes('no signed')) this.props.history.push('/signin');
        if (data.message.includes('Unauthorized')) this.props.history.push('/signup');
        else this.setState({ itemsArray: data.data });
      })
      .catch(err => {
        console.log(
          'Something error happened while trying getting all items: ',
          err
        );
      });
  }

  render() {
    return (
      <div>
        <HeaderWithSideBar title="My Shop" newStyle={true} />

        <div>
          {this.state.itemsArray.length === 0 ? (
            <div className="centerLoadingIcon">
              <ReactLoading
                type="spokes"
                color="grey"
                height={367}
                width={75}
              />
            </div>
          ) : (
            this.state.itemsArray.map((item, index) => (
              <ItemCard
                deleteItem={this.deleteItem(item.id)}
                itemTitle={item.title}
                itemID={item.id}
                src={item.image}
              />
            ))
          )}
        </div>
        <button className="addNewItem">
          <i class="fas fa-plus addNewItemIcon" />
        </button>
      </div>
    );
  }
}

export default ItemPage;
