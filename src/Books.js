import React, { Component } from 'react';
import Searchbar from "./Searchbar";
import request from 'superagent';



class Books extends Component {
        constructor(props){
                super(props);
                this.state = {
                    books: [],
                    withinSearch: ''
                }
        }

        searchrequestMethod = (e) => {
            e.preventDefault();
            request
                .get('https://www.googleapis.com/books/v1/volumes')
                .query({ q: this.withinSearch})
                .then((data) => {
                    console.log(data);
                })
            
        }

        // set the state everytime typed in input box //
        searchMethod = (e) => {
            this.setState({ withinSearch: e.target.value })

        }
        // grab that event and pass that method as a prop//

  render() {
    return (
      <div>
     <Searchbar searchrequestMethod={this.searchrequestMethod} withinSearch={this.withinSearch}/>
      </div>
    );
  }
}

export default Books;