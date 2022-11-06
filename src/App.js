import React, { Component } from 'react';
import axios from 'axios';
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import PhotoContainer from "./components/PhotoContainer";
import apiKey from './config'; 

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [],
      loading: true
    };
  } 
  componentDidMount() {
    this.performSearch();
  }

    performSearch = (query = 'cats') => {
      const key = apiKey;
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&text=${query}&per_page=25&page=1&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            gifs: response.data.data,
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
          <SearchForm />
          <Nav />
          <PhotoContainer />
        </div>
      );
  }
}
