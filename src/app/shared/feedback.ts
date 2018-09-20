// represents the data model which corresponds to the form model we will use in the form
 export class Feedback {
     firstname: string;
     lastname: string;
     telnum: number;
     email: string;
     agree: boolean;
     contacttype: string;
     message: string;
 };

 export const ContactType = ['None', 'Tel', 'Email'];