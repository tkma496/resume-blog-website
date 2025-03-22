import { ResumeDataModel } from './resume-data-model'

export class ResumeData implements ResumeDataModel {

 resume = {
    name: '', 
    title: '',
    quote: '',
    quoteAuthor: '',
    leftColumn: {
      contact: {
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        github: ''
      },
      skills: [],
  },

  rightColumn: {
    experience: [],
    education: []
  }
  };

  constructor(data?: Partial<ResumeDataModel>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}