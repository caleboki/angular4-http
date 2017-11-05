import { Component, OnInit } from '@angular/core'; // importing the OnInit interface

import { HttpClient, HttpErrorResponse } from '@angular/common/http';


interface DataResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { // implementing OnInit
  title = 'app';

  constructor( private http: HttpClient ) {

  }
  ngOnInit(): void { // adding the lifecycle hook ngOnInit
    this.http.get<DataResponse>('https://jsonplaceholder.typicode.com/posts/1').subscribe(data => {
      console.log('UserId: ' + data.userId);
      console.log('Id: ' + data.id);
      console.log('Title: ' + data.title);
      console.log('Body: ' + data.body);
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client-side error occured.');
      } else {
        console.log('Server-side error occured.');
      }
    }
  );

    this.http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
  })
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occured');
      }
    );
  }

}


