import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAk90le7DXsnrN9e3SMO1UBGDqp5LH2AbME-61LILfLzVQoZmi3Ad6OBixMDt74WkJCVzKHYWh7X896zektsjhOWTJSPkAgKD9r6Cv7lwvvGY6OoPs',
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

}
