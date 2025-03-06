import { Component } from "@angular/core"

@Component({
  selector: "app-blog",
  template: `
    <div class="container">
      <h1>Blog Posts</h1>
      <mat-list>
        <!-- TODO: Add your blog posts here -->
        <mat-list-item *ngFor="let post of blogPosts">
          <a matLine [routerLink]="['/blog', post.id]">{{ post.title }}</a>
          <p matLine>{{ post.date | date }}</p>
        </mat-list-item>
      </mat-list>
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
export class BlogComponent {
  blogPosts = [
    { id: 1, title: "My First Blog Post", date: new Date("2023-01-01") },
    { id: 2, title: "Another Interesting Article", date: new Date("2023-02-15") },
    // TODO: Add more blog posts here
  ]
}

