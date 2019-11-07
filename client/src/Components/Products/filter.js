import React,{Component} from 'react';


class Filter extends Component{

  state={
    price:[]
  }

  componentDidMount(){
    const price = this.setState({price:[...this.props.data]})

  }

  sortAscending = () => {
     const { price } = this.state;
     price.sort((a, b) => a.price - b.price)
     this.setState({ price })
   }

   sortDescending = () => {
     const { price } = this.state;
     price.sort((a, b) => a.price - b.price).reverse()
     this.setState({ price })
   }



  render(){
const { price } = this.state;

    return(
      <div>
      
      <button onClick={this.sortAscending}>asc</button>
      <button onClick={this.sortDescending}>desc</button>

      </div>
    )
  }
}

export default Filter;
