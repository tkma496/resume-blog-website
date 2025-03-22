
export interface ResumeDataModel {
  resume: {
    name?: string;
    title?: string;
    quote?: string;
    quoteAuthor?: string;
    leftColumn: {

      contact?: {
        email?: string;
        phone?: string;
        location?: string;
        linkedin?: string;
        github?: string;
      };
      skills?: {
        name?: string;
        rating?: number;
      }[];

    };
    rightColumn: {
      experience?: {
        company: string;
        roles: {
          role: string;
          duration: string;
          description: string;
        }[];
      }[];
      education?: {
        institution: string;
        duration: string;
      }[];
    };
  };
  };