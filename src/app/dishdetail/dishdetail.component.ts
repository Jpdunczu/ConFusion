// when a property is being bound, we can use the input module
import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import { switchMap } from 'rxjs/operators';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/comment';

import "hammerjs";

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {
  
  dish: Dish;
  dishIds: number[];
  prev: number;
  next: number;

  commentForm: FormGroup;
  newComment: Comment;
  formErrors = { // simple JS object for error messages
    // this is defined here because it will be used in onValueChanged method.
    'author': '',
    'comment': ''
  };
  date: Date;

  validationMessages = {
    'author': {
      'required': "Name is required.",
      'minlength': 'First Name must be at least 2 characters long.',
      'maxlength': 'First Name cannot be more than 25 characters long.'
    },
    'comment': {
      'required': "Comment is required.",
      'minlength': 'Comment must be at least 10 characters long.'
    }
  };

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) { 
      this.createForm();
    }

  ngOnInit() {
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);

    // fetch the info
    // what is snapshot: taking one snapshot from the route service, obtaining the value of the params at that particular time.
    //let id = +this.route.snapshot.params['id'];
    this.route.params.pipe(
    // the + converts this which is a string to an int value.
      switchMap((params: Params) => this.dishservice.getDish(+params['id'])))
    //this.dishservice.getDish(id)
      //.then(dish => this.dish = dish);
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }

  setPrevNext(dishId: number) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  // add a back button into the card
  goBack(): void {
    // location service has a method to go back
    this.location.back();
  }

  createForm() {
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      rating: 5,
      comment: ['', [Validators.required, Validators.minLength(10)]]
    });

    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // reset form validation messages.
  }

  onSubmit() {
    this.newComment = this.commentForm.value;
    console.log(this.newComment);
    this.date = new Date();
    this.newComment.date = this.date.toISOString();
    this.dish.comments.push(this.newComment);
    this.commentForm.reset({
      author: '',
      rating: 5,
      comment: ''
    });
  }

  onValueChanged(data?: any) {
    if(!this.commentForm) { return; }
    const form = this.commentForm;

    for(const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if(control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for(const key in control.errors) {
          this.formErrors[field] += messages[key] + '';
        }
      }
    }

    
  }

}
