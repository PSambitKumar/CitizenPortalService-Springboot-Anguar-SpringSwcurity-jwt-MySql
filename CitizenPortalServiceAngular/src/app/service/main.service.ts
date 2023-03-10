import { Injectable } from '@angular/core';
import {TokenService} from "./token.service";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {urlConfig} from "../url/url.config";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  baseUrl = environment.baseURL;

  constructor(private tokenService : TokenService, private http : HttpClient) { }

  getURL(apiToken : any, authToken : any, userId : any) : Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization":  authToken,
      "Token": apiToken,
    });

    // Method 1
    // let httpParams = new HttpParams()
    //   .append("userId", userId);
    //
    // let options = {
    //   headers: headers,
    //   params: httpParams
    // }

    // Method 2
    let options = {
      headers: headers,
      params: {
        "userId": userId
      }
    };
    return this.http.get<any>(this.baseUrl + urlConfig.getURL, options);
  }

  getCountryList(apiToken : any, authToken : any) : Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": authToken,
      "Token": apiToken,
    });

    let options = {
      headers: headers
    };
    return this.http.get<any>(this.baseUrl + urlConfig.getCountryList, options);
  }

  addCountryData(countryName : any, countryCode : any, status : any, apiToken : any, authToken : any) : Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": authToken,
      "Token": apiToken,
    });

    let body = {
      countryName : countryName,
      countryCode : countryCode,
      status : status
    }

    let options = {
      headers: headers,
    }
    return this.http.post<any>(this.baseUrl + urlConfig.addCountryData, body,  options);
  }

  getCountryById(countryId : any, apiToken : any, authToken : any) : Observable<any> {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": authToken,
        "Token": apiToken,
      });

      let options = {
        headers: headers,
        params: {
          "countryId": countryId
        }
      }
      return this.http.get<any>(this.baseUrl + urlConfig.getCountryById, options);
    }

  deleteCountryById(countryId : any, apiToken : any, authToken : any) : Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let options = {
      headers: headers,
      params: {
        "countryId": countryId,
        "apiToken": apiToken,
        "authToken": authToken
      }
    }
    return this.http.delete<any>(this.baseUrl + urlConfig.deleteCountryById, options);
  }

  getStateList(apiToken : any, authToken : any) : Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": authToken,
      "Token": apiToken,
    });

    let options = {
      headers: headers
    }
    return this.http.get<any>(this.baseUrl + urlConfig.getAllStateList, options);
  }

  getAllDistrictList(apiToken : any, authToken : any) : Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authToken,
      'Token': apiToken
    });

    let options = {
      headers: headers
    }
    return this.http.get<any>(this.baseUrl + urlConfig.getAllDistrictList, options);
  }

  getStateListByCountryId(apiToken : any, authToken : any, countryId : any) : Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authToken,
      'Token': apiToken
    });

    let options = {
      headers: headers,
      params: {
        "countryId": countryId
      }
    }
    return this.http.get<any>(this.baseUrl + urlConfig.getStateListByCountryId, options);
  }

  addDistrictData(countryId : any, stateId : any, districtName : any, status : any, apiToken : any, authToken : any) : Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authToken,
      'Token': apiToken
    });

    let body = {
      countryId : countryId,
      stateId : stateId,
      districtName : districtName,
      status : status
    }

    let options = {
      headers: headers,
      body: body
    }

    return this.http.post<any>(this.baseUrl + urlConfig.addDistrictData, body, options);
  }
}
