import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Modal } from 'bootstrap';
import { finalize } from 'rxjs';
import { ClientesService } from 'src/app/shared/services/clientes.service';
import { PageService } from 'src/app/shared/services/page.service';

export const messagesError: any = {
  required: 'El campo es requerido',
};

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  clientes!: any[];
  fromModal!: Modal;
  isLoading!: boolean;
  form!: FormGroup;

  constructor(private fb: FormBuilder,
              private pageService: PageService,
              private clientesService: ClientesService) {
    this.form = this.fb.group({
      name: new FormControl(null, [
        //Validators.required,
      ]),
      surnames: new FormControl(null, [
        //Validators.required,
      ]),
      email: new FormControl(null, [
        //Validators.required,
      ]),
      phone: new FormControl(null, [
        //Validators.required,
      ]),
    });
  }

  onClickShowForm() {
    this.fromModal.show();
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      console.log(this.form);
    });
    this.pageService.titlePage.next('Pagina de Clientes');
    this.showClientes();
    this.fromModal = new Modal(
      document.getElementById('formulario-registro-clientes') as Element,
      {}
    );
  }

  private showClientes() {
    this.clientesService
      .get()
      .subscribe((data: any[]) => (this.clientes = data));
  }

  onClickSave() {
    this.isLoading = true;
    const values = this.form.value;
    this.clientesService
      .post({
        name: values.name,
        surnames: values.surnames,
        email: values.email,
        phone: values.phone,
      })
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(
        () => (this.fromModal.hide(), this.form.reset(), this.showClientes())
      );
  }

  renderError(errors: any) {
    let message = '';

    if (errors) {
      for (let item of Object.entries(errors)) {
        console.log(item);
        message = messagesError[item[0]];
        console.log(message);
      }
    }

    return message;
  }

  eliminarCliente(id:any){
    console.log(id);
    this.clientesService
      .delete(id)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(
        () => (this.fromModal.hide(), this.form.reset(), this.showClientes())
      );
  }

}
