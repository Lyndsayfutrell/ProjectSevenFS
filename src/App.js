import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './config';
import { Route, Routes, Navigate} from "react-router-dom";


//Components

import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import PhotoContainer from "./components/PhotoContainer";
import NotFound from './NotFound';

export default class App extends Component {
  
  constructor() {
    super();
    this.key = apiKey;
    this.state = {
      images: [],
      loading: true,
      query: 'cats',
    };
  } 
  componentDidMount() {
    this.performSearch();
  }

    performSearch = (query = 'cats') => {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.key}&text=${query}&safe_search=1&per_page=24&page=1&format=json&nojsoncallback=1`)
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

          <Routes>
            <Route index element={<Navigate replace to='cats'/>}/>
            <Route path=':search' 
            element={(this.state.loading) 
            ? <p>Loading...</p> 
            : <div>
              <SearchForm onSearch={this.performSearch}/>
              <Nav search={this.performSearch}/>
              <PhotoContainer data={this.state.images}/>
            </div>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
      );
    }
}
