
export interface ResumeDataModel {
        leftColumn: {
          name?: string;
          title?: string;
          contact?: {
            email?: string;
            phone?: string;
            location?: string;
            linkedin?: string;
            github?: string;
          };
          skills?: {
            technical?: string[];
            soft?: string[];
          };
          education?: {
            school: string;
            degree: string;
            duration: string;
            description?: string;
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
          projects?: {
            name: string;
            description: string;
            technologies?: string[];
            link?: string;
          }[];
        };
      }
      

    /*
    leftColumn: {
      contact: {
        name: string;
        email: string;
        linkedin: string;
        github: string;
      };
      skills: {
        name: string;
        rating: number;
      }[];
    };
    rightColumn: {
      experience: {
        company: string;
        roles: {
          role: string;
          duration: string;
          description: string;
        }[];
      }[];
      education: {
        institution: string;
        duration?: string; // Optional because not all entries have a duration
      }[];
    };
  }*/
  /*
    // Interface for the Contact section
interface Contact {
    name: string;
    email: string;
    linkedin: string;
    github: string;
  }
  
  // Interface for a Skill
  interface Skill {
    name: string;
    rating: number;
  }
  
  // Interface for the Left Column
  interface LeftColumn {
    contact: Contact;
    skills: Skill[];
  }
  
  // Interface for a Role
  interface Role {
    role: string;
    duration: string;
    description: string;
  }
  
  // Interface for an Experience Entry
  interface Experience {
    company: string;
    roles: Role[];
  }
  
  // Interface for an Education Entry
  interface Education {
    institution: string;
    duration?: string; // Optional because not all entries have a duration
  }
  
  // Interface for the Right Column
  interface RightColumn {
    experience: Experience[];
    education: Education[];
  }
  
  // Top-Level Interface
  interface ResumeData {
    leftColumn: LeftColumn;
    rightColumn: RightColumn;
  }*/
  /*
    // Define your resume data structure here
    // For example:
    export interface ResumeData {
    leftColumn: array;
    contact:
    name: Nolan Hansen
    email: nolan_hansen@hotmail.com
    linkedin: https://www.linkedin.com/in/nolan-hansen-98093151/
    github: https://github.com/tkma496
  skills:
    - name: Typescript
      rating: 5
    - name: Python
      rating: 4
    - name: Angular
      rating: 3
    name?: string;
    experience?: any[];
    // ... other fields
  };*/