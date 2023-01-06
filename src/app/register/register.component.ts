import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationFailed = false;
  loginCtrl = this.fb.control('', [Validators.required, Validators.minLength(3)]);

  passwordCtrl = this.fb.control('', Validators.required);
  confirmPasswordCtrl = this.fb.control('', [Validators.required]);

  passwordGroup = this.fb.group(
    { password: this.passwordCtrl, confirmPassword: this.confirmPasswordCtrl },
    { validators: RegisterComponent.passwordMatch }
  );

  birthYearCtrl = this.fb.control<number | null>(null, [
    Validators.required,
    Validators.min(1900),
    Validators.max(new Date().getFullYear())
  ]);

  static passwordMatch(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')!.value;
    const confirmPassword = group.get('confirmPassword')!.value;
    return password === confirmPassword ? null : { matchingError: true };
  }

  userForm = this.fb.group({
    login: this.loginCtrl,
    password: this.passwordCtrl,
    birthYear: this.birthYearCtrl
  });

  constructor(private fb: FormBuilder, private userService: UserService, private routeur: Router) {}

  register(): void {
    const formValue = this.userForm.value;
    this.userService.register(formValue.login!, formValue.password!, formValue.birthYear!).subscribe({
      next: () => this.routeur.navigateByUrl('/'),
      error: () => (this.registrationFailed = true)
    });
  }
}
