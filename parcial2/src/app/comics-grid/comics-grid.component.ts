import { Component, OnInit } from '@angular/core';
import {ComicService} from '../../app/comic.service';

@Component({
  selector: 'app-comics-grid',
  templateUrl: './comics-grid.component.html',
  styleUrls: ['./comics-grid.component.scss'],
  providers: [ ComicService ]
})

export class ComicsGridComponent implements OnInit 
{
  public document;
  public _httpService;
  constructor(private servicioComic:ComicService) 
  { 
    this.servicioComic.getComics().subscribe(
      result => 
      {
           
          if(result.code != 200)
          {
              console.log(result);
          }
          else
          {
              this.document = result.data;
              console.log(this.document);
          }

      },
      error => 
      {
          console.log(<any>error);
      }
    );
  }

  ngOnInit() 
  {
    
  }
}