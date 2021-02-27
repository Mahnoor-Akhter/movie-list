import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList=[
{id: 1 ,title:'The GodFather', year:'1972',director:'Francis Ford Coppola'},
{
  id:2,title: 'Millers Crossing',year:'1990',director:'The Coen Brother'},
  {
    id:3, title:'Dial M for Murder',year:'1954',director:'Alfred Micheal'},{
      id:4, title:'Whiplash',year: '2018',director:'Damien Chazella'}
    
  



  ];

  getMovies(){
    return this.movieList;
  }
}
