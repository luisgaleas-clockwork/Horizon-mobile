import React from 'react';
import Cover from '../Components/Products/Cover';
import PHeader from '../Components/Products/Product_header'
import Filter from '../Components/Products/FilterButtons';
//
import sortby from 'sort-by'

class Product extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      album: [],
      genre: "none",
      price: "none"
    }
     ///////////////////////////////////////
    //looking for value of the SELECT tag//
     //////////////////////////////////////
    this.musicGenre = (e) => {
      this.setState({ genre: e.target.value }, () => console.log('Genre -', this.state.genre))
    }
    //Filter buttons
    this.stateLow = () => {
      this.setState({ price: "low" }, () => console.log(this.state.price))
    }
    this.stateHigh = () => {
      this.setState({ price: "high" }, () => console.log(this.state.price))
    }
    this.stateNone = () => {
      this.setState({ price: "none" }, () => console.log(this.state.price))
    }
    /////////////////////////////////////////////
    // Renders products based on price in state//
     /////////////////////////////////////////////
    this.renderProduct = () => {
      if (this.state.price === "high") {
        return (
          <div className="cover__container">
            {this.state.album.sort(sortby("-price")).map((info) => {
              return <Cover
                info={info}
                state={this.state}
                click={this.click} />
            })}
          </div>
        )
      }
      if (this.state.price === "low") {
        return (
          <div className="cover__container">
            {this.state.album.sort(sortby("price")).map((info) => {
              return <Cover
                info={info}
                state={this.state}
                click={this.click} />
            })}
          </div>
        )
      }
     return(
      <div className="cover__container">
      {this.state.album.sort(sortby("product_name")).map((info) => {
        return <Cover
          info={info}
          state={this.state}
          click={this.click} />
      })}
    </div>
     )
    }
  }

  componentDidMount() {
    fetch("/product")
      .then((response) => {
        console.log('response - ', response);
        return response.json();
      }
      ).then((jsonData) => {
        return jsonData;
      }
      ).then((jsonStr) => {
        this.setState({ album: jsonStr });
        console.log(this.state)
      }).catch((e) => console.log('error - ', e));
  }

  render() {
    return (
      <div className="App">
        <PHeader />
        <Filter
          none={this.stateNone}
          high={this.stateHigh}
          low={this.stateLow}
          genre={this.musicGenre}
        />
        {this.renderProduct()}
      </div>
    );
  }
}

export default Product