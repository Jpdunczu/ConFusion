import { Component, OnInit } from '@angular/core';

// the Reactive form is built mostly in the code and thereafter mapped into the form elemnts in the template files.
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup; // formModel which will host the reactive form
  feedback: Feedback; // corresponding data model
  contactType = ContactType;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      telnum: [0, Validators.required],
      email: ['', Validators.required],
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }

  onSubmit() {
    // the feedbackForm model has an attribute called value which allows you to retrieve the current vallue of all the expilicitly defined variables.
    // in this case, the data model and the form model have the exact same structure, which allows us to do this.
    this.feedback = this.feedbackForm.value;    
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    }); // resets the form back to empty state.
  }

}
