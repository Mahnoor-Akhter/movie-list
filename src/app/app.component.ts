import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies=[];

  constructor(private movieService:MovieService){}
ngOnInit(){
  this.movies= this.movieService.getMovies();
  console .log(this.movies);

}

}
