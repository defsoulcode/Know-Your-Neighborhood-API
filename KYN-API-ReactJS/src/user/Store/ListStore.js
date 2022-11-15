import React, { Component } from 'react';
import  {searchStore,getStore}  from '../../service/StoreService';


class ListStore extends Component {
    constructor(props) {
        super(props)

        this.state = {
             stores: [],
             keyword: "",
        };
        this.searchStore = this.searchStore.bind(this);
    }

    componentDidMount(){
        getStore()
        .then((response) => {
            console.log(response)

            this.setState({
                stores: response
           })
        })
    }

    changeSearchHandler = (event) => {
		console.log("search Handler");
		this.setState({ keyword: event.target.value });
	};

	searchStore(keyword) {
        searchStore(this.state.keyword).then((res) => {
            console.log("search Store Method " , res);
			this.setState({ stores: res.data });
		});
		
	}
  render(){
    return (
      <div className="container" style={{marginTop:"30px"}}>
   
      <div className="input-group" style={{width:"30%"}}>  
      <input className='form-control' type='search' placeholder='Search'
        aria-label='Search' value={this.state.searchKeyword} onChange={this.changeSearchHandler} size={"30"}/>

      <button onClick={() => this.searchStore(this.state.searchKeyword)} type ="button" className='btn btn-success'>
        Search{" "}
      </button>
      </div>
  
          
      <div className="card border-0 shadow my-5" >
        <div className="card-body p-5" >
        <h2 className="text-center">List Store</h2>
        <br></br>
        <div className="row row-cols-1 row-cols-md-2">
        <table className="table">
          <thead>

              <tr>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Localities</th>
              </tr>
          </thead>
          <tbody>
          {
              this.state.stores.map(store =>
              <tr>
                  <td>{store.name}</td>
                  <td>{store.phone}</td>
                  <td>{store.localities}</td>
              </tr>
              )
          }
          </tbody>
          </table>
          </div>
          </div>
          </div>
      </div>
  
)
  
}
}

// Need to export 
export default ListStore