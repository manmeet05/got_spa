import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { House } from './house';



@Injectable()
export class HouseService{
  private baseUrl: string = 'https://anapioficeandfire.com/api';
  constructor(private http : Http){
  }

  /* 
  getAll() function is used to fetch all the Houses with the corresponding Headers Information in the HTTP Call
  */
  getAll(): Observable<House[]>{
    let house$ = this.http
      .get(`${this.baseUrl}/houses/`, { headers: this.getHeaders()})
      .map(mapHouses)
      .catch(handleError);
      return house$;
  }

  private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
  /* 
  get() function is used to fetch the specific House Information with the corresponding Headers Information in the HTTP Call
  */
  get(id: number): Observable<House> {
    let house$ = this.http
      .get(`${this.baseUrl}/houses/${id}/`, {headers: this.getHeaders()})
      .map(mapHouse)
      .catch(handleError);
      return house$;
  }
}


function mapHouses(response:Response): House[]{
  //throw new Error('ups! Force choke!');

  // The response of the API has a direct JSON Structure, i.e. the Results donot hang under any other Property
  return response.json().map(toHouse)
}

/* 
  toHouse() function is used to assign the specific (fetched from API) House Information to Interface House and return it. 
  */
function toHouse(r:any): House{
  let house = <House>({
    id: extractId(r),
    url: r.url,
    name: r.name,
    coatOfArms: r.coatOfArms,
    words: r.words,
    region: r.region,
    currentLord: r.currentLord,
    overlord: r.overlord,
    founded: r.founded,
    founder: r.founder,
  });
  console.log('Parsed House:', house);
  return house;
}

// to avoid breaking the rest of our app
// I extract the id from the houses url
function extractId(houseData:any){
  let extractedId = houseData.url.replace('https://anapioficeandfire.com/api/houses/','').replace('/','');
  return parseInt(extractedId);
}

function mapHouse(response:Response): House{
   // toHouse maps the House JSON Structure
   return toHouse(response.json());
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sophisticated
  let errorMsg = error.message || `Oops! There was a problem with the API and the data could not be retrieved!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}

