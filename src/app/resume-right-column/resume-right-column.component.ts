import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-right-column',
  templateUrl: './resume-right-column.component.html',
  styleUrls: ['./resume-right-column.component.scss']
})
export class ResumeRightColumnComponent {
    @Input() data: any; // Accept data from the parent component
}
