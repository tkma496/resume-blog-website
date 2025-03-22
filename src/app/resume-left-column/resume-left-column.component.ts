import { Component, Input } from '@angular/core';
import { ResumeDataModel } from '../resume/resume-data-model';

@Component({
  selector: 'app-resume-left-column',
  templateUrl: './resume-left-column.component.html',
  styleUrls: ['./resume-left-column.component.scss']
})

export class ResumeLeftColumnComponent {
    @Input() data: ResumeDataModel['resume']['leftColumn'] = {contact: {}, skills: [] }; // Accept data from the parent component

}