import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ComicSpecifiedService 
{
    public BD: JSON;
    public url: string;

    constructor(public http: HttpClient)
    { 
      this.url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=ef72b9f41751b65fabd5039e95e54d2b&hash=70c19025de05277f3c01a21a8b351885";
    }

    getComicsWith(param:String): any
    {
      this.url = "http://gateway.marvel.com/v1/public/comics?titleStartsWith=" + param + "&ts=1&apikey=ef72b9f41751b65fabd5039e95e54d2b&hash=70c19025de05277f3c01a21a8b351885";   
      return this.http.get(this.url);
    }
}