import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {User} from "../../interfaces";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Input() isShow!: boolean;
  @Output() hideAuth: EventEmitter<void> = new EventEmitter<void>();

  isLogin: boolean = false;
  isSingInWindow: boolean = true;
  form!: FormGroup;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  onClose() {
    this.isSingInWindow = true;
    this.hideAuth.emit();
  }

  switchWindow() {
    this.isSingInWindow = !this.isSingInWindow
  }

  login() {
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.auth.login(user).subscribe(() => {
      this.form.reset();
      this.hideAuth.emit();
    })
  }

  register() {
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.auth.register(user).subscribe(() => {
      this.form.reset();
      this.hideAuth.emit();
    })
  }
}
