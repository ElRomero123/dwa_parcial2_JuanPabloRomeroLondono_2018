import { Component, OnInit } from '@angular/core';
import {ComicService} from '../../app/comic.service';
import { ComicSpecifiedService } from '../comic.specificed.service';

@Component({
  selector: 'app-comics-grid',
  templateUrl: './comics-grid.component.html',
  styleUrls: ['./comics-grid.component.scss'],
  providers: [ ComicService, ComicSpecifiedService ]
})

export class ComicsGridComponent implements OnInit 
{
  public document;
  public _httpService;
  constructor(private servicioComic:ComicService, private servicioComicWith:ComicSpecifiedService) 
  { 
    
  }

  showWith(param:String)
  {
    this.servicioComicWith.getComicsWith(param).subscribe(
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
}