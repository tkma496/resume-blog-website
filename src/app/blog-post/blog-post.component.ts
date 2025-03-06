import { Component, type OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: "app-blog-post",
  template: `
    <div class="container" *ngIf="post">
      <mat-card>
        <mat-card-header>
          <mat-card-title>{{ post.title }}</mat-card-title>
          <mat-card-subtitle>{{ post.date | date }}</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>{{ post.content }}</p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
    .container {
      max-width: 800px;
      margin: 2rem auto;
      padding: 0 1rem;
    }
  `,
  ],
})
export class BlogPostComponent implements OnInit {
  post: any

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id")
    // TODO: Fetch the blog post data based on the ID
    this.post = {
      id: 1,
      title: "My First Blog Post",
      date: new Date("2023-01-01"),
      content: "This is the content of my first blog post. Replace this with your actual blog post content.",
    }
  }
}


