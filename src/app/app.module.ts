import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component"
import { HeaderComponent } from "./header/header.component"
import { FooterComponent } from "./footer/footer.component"
import { ResumeComponent } from "./resume/resume.component"
import { BlogComponent } from "./blog/blog.component"
import { BlogPostComponent } from "./blog-post/blog-post.component"
import { HomePageComponent } from "./home-page/home-page.component";
import { ResumeLeftColumnComponent } from './resume-left-column/resume-left-column.component'
import { ResumeRightColumnComponent } from './resume-right-column/resume-right-column.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResumeComponent,
    BlogComponent,
    BlogPostComponent,
    HomePageComponent,
    ResumeLeftColumnComponent,
    ResumeRightColumnComponent,
    NavBarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomePageComponent},
      { path: "resume", component: ResumeComponent },
      { path: "blog", component: BlogComponent },
      { path: "blog/:id", component: BlogPostComponent },
    ]),
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}

