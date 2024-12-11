import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  posts: any[] = [];
  paginatedPosts: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalPages!: number;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPostsData();
  }

  getPostsData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        Authorization: 'Bearer',
        Accept: 'application/json'
      }
    }).subscribe((result: any) => {
      this.posts = result;
      this.totalPages = this.posts.length / 10
      this.updatePaginatedPosts();
    })
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedPosts();
    }
  }

  updatePaginatedPosts(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedPosts = this.posts.slice(startIndex, endIndex);
  }
}
