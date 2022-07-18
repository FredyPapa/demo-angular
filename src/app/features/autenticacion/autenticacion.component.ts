import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.css'],
})
export class AutenticacionComponent implements OnInit {
  username!: string;
  password!: string;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onClickIngresar() {
    this.authService.valid(this.username, this.password).subscribe((res) => {
      environment.storage.setItem('user', JSON.stringify(res));
      this.router.navigate(['/']);
    });
  }
}
