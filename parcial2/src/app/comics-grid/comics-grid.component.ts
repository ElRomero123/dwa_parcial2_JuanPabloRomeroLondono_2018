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
  public Score1; public Score2; public Score3; public Score4; public Score5; public Score6; public Score7; public Score8;
  public Score9; public Score10; public Score11; public Score12; public Score13; public Score14; public Score15; public Score16;
  public Score17; public Score18; public Score19; public Score20;
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
    this.Score1 = 0;
    this.Score2 = 0;
    this.Score3 = 0;
    this.Score4 = 0;
    this.Score5 = 0;
    this.Score6 = 0;
    this.Score7 = 0;
    this.Score8 = 0;
    this.Score9 = 0;
    this.Score10 = 0;
    this.Score11 = 0;
    this.Score12 = 0;
    this.Score13 = 0;
    this.Score14 = 0;
    this.Score15 = 0;
    this.Score16 = 0;
    this.Score17 = 0;
    this.Score18 = 0;
    this.Score19 = 0;
    this.Score20 = 0;

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