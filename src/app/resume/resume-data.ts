import { ResumeDataModel } from './resume-data-model'
export class ResumeData implements ResumeDataModel {
    leftColumn = {
      name: '',
      title: '',
      contact: {
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        github: ''
      },
      skills: {
        technical: [],
        soft: []
      },
      education: []
    };
  
    rightColumn = {
      experience: [],
      projects: []
    };
  
    constructor(data?: Partial<ResumeDataModel>) {
      if (data) {
        Object.assign(this, data);
      }
    }
  }