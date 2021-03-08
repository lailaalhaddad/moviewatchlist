
import Movies  from "../components/Movie"

import { action, makeObservable, observable } from "mobx";
// import { useState } from "react";

class MovieStore{
    movies=Movies

    constructor() {
        makeObservable(this, {
          movies: observable,
         deleteMovie: action
        })
      }

 deleteMovie = (movieId) =>{
   const updatedmovies = this.movies.filter((movie) => movie.id !== movieId);
    this.movies=updatedmovies;
  };
  AddMovie = (data) =>{
    let newMovie=data;
    newMovie.id=this.movies.length+1;
    console.log(newMovie);
    this.movies.push(newMovie);
   };


 



 }

const moviestore= new MovieStore();
export default moviestore;