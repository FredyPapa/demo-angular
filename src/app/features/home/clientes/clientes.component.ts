import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modal } from 'bootstrap';
import { UsersService } from 'src/app/shared/services/users.service';
import { Clientes, ICliente } from './clientes.constant';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  host: {
    class: 'page-content',
  },
})
export class ClientesComponent implements OnInit {
  // hoy = new Date();
  // name = '';
  // edad = 15;
  // clientes: ICliente[] = Clientes;
  // logoPeru = 'https://i.ytimg.com/vi/YMjK_TIhmtU/maxresdefault.jpg';
  fromModal!: Modal;
  username: string = '';
  password: string = '';
  constructor(private router: Router, private usersService: UsersService) {}

  ngOnInit(): void {
    this.fromModal = new Modal(
      document.getElementById('exampleModal') as Element,
      {
        keyboard: false,
      }
    );

    this.usersService.paginate().subscribe((res) => {
      console.log(res);
    })
  }

  onClickNewClient() {
    this.fromModal.show();
  }

  onClickGuardar() {
    this.usersService
      .post({
        username: this.username,
        password: this.password,
      })
      .subscribe((res) => {
        console.log(res);
      });
  }
  // onClickCalcular(event: any, cliente: ICliente) {
  //   // console.log(event);
  //   // event.target.innerText = (cliente.total1 + cliente.total2).toFixed(2);
  //   cliente.totalFinal = cliente.total1 + cliente.total2;
  // }

  // onClickEliminar(cliente: ICliente) {
  //   console.log(cliente);
  // }

  // onClickDetail(cliente: ICliente) {
  //   this.router.navigate(['clientes', 'detalle', cliente.id]);
  // }

  // onClickImage() {
  //   this.logoPeru = 'https://brandemia.org/contenido/subidas/2014/03/marca-pais-peru-logo-004_587_440_901.jpg';
  // }

  // condicionEdad() {
  //   return this.edad > 18;
  // }

  // getYears(fechaNacimiento: string) {
  //   const nacimiento = moment(fechaNacimiento, 'DD/MM/YYYY');
  //   const hoy = moment();

  //   return hoy.diff(nacimiento, 'years');
  // }

  // concatFullName(): string {
  //   return this.cliente.nombre + ' ' + this.cliente.apellidos;
  // }
}
