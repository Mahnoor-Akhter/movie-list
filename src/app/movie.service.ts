import { Injectable } from '@angular/core';
import { Movie } from "./movie.model";


@Injectable({
  providedIn: 'root'
})
export class MovieService {
movie: Movie;
  constructor() { }

  movieList=[
    new Movie('The GodFather', '1972','Francis Ford Coppola'),
   new Movie( 'Millers Crossing','1990','The Coen Brother'),
    new Movie('Dial M for Murder','1954','Alfred Micheal'),
  new Movie(
       'Whiplash', '2018','Damien Chazella')
    ]
  

    addMovies(movietitle:string, moviedirector:string, movieyear:string){
      this.movieList.push({title:movietitle, director:moviedirector,year:movieyear});
    }

  getMovies(){
    return this.movieList.sort();
  }
  addMovie(movietitle:string, moviedirector:string, movieyear:string,){
    this.movieList.push(new Movie(movietitle,movieyear, moviedirector) );
      }

} 

