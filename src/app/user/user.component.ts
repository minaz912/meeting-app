import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { LoopBackAuth } from '../shared/sdk/services/core/auth.service';
import { ParticipantApi } from '../shared/sdk/services/custom/Participant';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private participantApi: ParticipantApi,
    private loopbackAuth: LoopBackAuth
  ) {
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  login(loginForm: any) {
    console.log(loginForm);
    this.participantApi.login({email: loginForm.email, password: loginForm.password}, 'null', true).toPromise().then((token: any) => {
      console.log('token', token);
      this.loopbackAuth.setToken(token);
      this.loopbackAuth.save();
    })
    .catch((err: any) => {
      console.log('error', err);
    })
  }
}
