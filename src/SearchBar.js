import React, { Component } from 'react';
import axios from 'axios';

import DisplayMovie from './DisplayMovie'

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: ''
        }
    }

    getMovie = () => {
        axios.get(`http://www.omdbapi.com/?s=${this.search.value}&apikey=${this.props.apiKey}`)
            .then(data => {
                console.log(data);
                this.setState({
                    data: data.data.Search
                })
            })
            .catch(err => {console.log("Error", err)});  
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <form className="searchBar">
                        <input className="searchBar__input" ref={input => this.search = input} type="text" name="searchBar"/>
                        <button className="searchBar__btn" type="button" onClick={() => this.getMovie()}>Search</button>
                    </form>
                </div>
                <div className="row">
                        <ul className="movieList">
                            {
                                [...this.state.data].map((el)=>{
                                    return(
                                        <li className="movieListElement" key={el.imdbID} ><a className="movieLink" href="" ><img className="movieTitle" alt={el.Title} src={el.Poster}/>{el.Title}</a></li>
                                    );
                                })
                            }
                        
                        </ul>
                </div>
                <DisplayMovie movie={this.state.data} showComp={this.showMovie}/>
            </div>
        );
    }
}

export default SearchBar;