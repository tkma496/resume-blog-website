import { Component, OnInit } from "@angular/core";
import { BlogListDataService } from '../services/blog/blog-list-data.service';
import { BlogListData } from './blog-list-data';
import { BlogListDataModel } from "./blog-list-data-model";

@Component({
  selector: "app-blog",
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})

export class BlogComponent implements OnInit{
  blogListData: BlogListDataModel = { blog: { blog_list: [] } };
  constructor( private blogListDataService: BlogListDataService) {};

  ngOnInit(): void {
    this.blogListDataService.loadData().then((data: BlogListData) => {
      this.blogListData = data;
    });
  }

  //blogPosts = [
  //  { id: 1, title: "My First Blog Post", date: new Date("2023-01-01") },
  //  { id: 2, title: "Another Interesting Article", date: new Date("2023-02-15") },
    // TODO: Add more blog posts here
  //]
}