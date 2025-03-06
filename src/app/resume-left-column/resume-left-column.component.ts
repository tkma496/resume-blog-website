import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-left-column',
  templateUrl: './resume-left-column.component.html',
  styleUrls: ['./resume-left-column.component.scss']
})

export class ResumeLeftColumnComponent {
    @Input() data: any; // Accept data from the parent component

}