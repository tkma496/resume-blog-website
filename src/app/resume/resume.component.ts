import { Component, OnInit } from "@angular/core"
import { ResumeDataService } from '../services/resume-data.service'
import { ResumeData } from './resume-data'


@Component({
  selector: "app-resume",
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})

export class ResumeComponent implements OnInit {
  resumeData: ResumeData = new ResumeData();

  constructor(private resumeDataService: ResumeDataService) {}

  ngOnInit(): void {
    this.resumeDataService.loadData().then((data: ResumeData) => {
      this.resumeData = data;
    });
  }
}