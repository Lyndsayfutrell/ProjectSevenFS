import React, { Component } from 'react';
import axios from 'axios';
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import PhotoContainer from "./components/PhotoContainer";
import apiKey from './config'; 

export default class App extends Component {


  constructor() {
    super();
    this.key = apiKey;
    this.state = {
      images: [],
      loading: true,
    };
  } 
  componentDidMount() {
    this.performSearch();
  }

    performSearch = (query = 'cats') => {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.key}&text=${query}&per_page=24&page=1&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            images: response.data.photos.photo,
            loading: false
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    }
  
    render() {
      return (
        <div>
          <SearchForm onSearch={this.performSearch}/>
          <Nav />
          <PhotoContainer data={this.state.images}/>
        </div>
      );
    }
}
