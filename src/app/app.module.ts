import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppComponent } from "./app.component";
import { BlogPostComponent } from "./blog-post/blog-post.component";
import { BlogComponent } from "./blog/blog.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ResumeLeftColumnComponent } from './resume-left-column/resume-left-column.component';
import { ResumeRightColumnComponent } from './resume-right-column/resume-right-column.component';
import { ResumeComponent } from "./resume/resume.component";

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
    NavBarComponent,
    AboutMeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomePageComponent},
      { path: "resume", component: ResumeComponent },
      { path: "blog", component: BlogComponent },
      { path: "blog/:id", component: BlogPostComponent },
      { path: "about", component: AboutMeComponent},
    ]),
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}

