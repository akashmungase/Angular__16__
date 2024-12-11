import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.css']
})
export class ForkjoinComponent implements OnInit {

  Users: any[] = [];
  Posts: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    const user = this.http.get('https://jsonplaceholder.typicode.com/users')
    const posts = this.http.get('https://jsonplaceholder.typicode.com/posts')

    forkJoin([user, posts]).subscribe((result: any) => {
      console.log('result2', result);
      this.Users = result[0];
      this.Posts = result[1];
    })
  }

}
