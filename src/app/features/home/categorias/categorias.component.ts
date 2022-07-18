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
import { CategoriesService } from 'src/app/shared/services/categorias.service';
import { PageService } from 'src/app/shared/services/page.service';

export const messagesError: any = {
  pattern: 'La expresion regular no coinciden',
  required: 'El campo es requerido',
  email: 'El correo no es correcto',
  customValidatorsLetra: 'El texto ingresado no es correcto',
};
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent implements OnInit {
  categories!: any[];
  fromModal!: Modal;
  isLoading!: boolean;
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private pageService: PageService,
    private categoriesService: CategoriesService
  ) {
    this.form = this.fb.group({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern(new RegExp('^[0-9]+$')),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        // Validators.email,
        this.customValidatorsLetra,
      ]),
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      console.log(this.form);
    });
    this.pageService.titlePage.next('Pagina de categorias');
    this.showCategories();
    this.fromModal = new Modal(
      document.getElementById('formulario-registro-categories') as Element,
      {}
    );
  }

  onKeypressLastName(event: any) {
    // if (!/^[a-zA-Z]+$/.test(event.target.value)) {
    // event.preventDefault();
    // }
  }

  onClickShowForm() {
    this.fromModal.show();
  }

  onClickSave() {
    this.isLoading = true;
    const values = this.form.value;
    this.categoriesService
      .post({
        name: values.name,
        lastname: values.name,
      })
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(
        () => (this.fromModal.hide(), this.form.reset(), this.showCategories())
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

  private customValidatorsLetra(control: AbstractControl) {
    const valid = /^[a-zA-Z]+$/.test(control.value);
    return !valid
      ? {
          customValidatorsLetra: true,
        }
      : null;
  }

  private showCategories() {
    this.categoriesService
      .get()
      .subscribe((data: any[]) => (this.categories = data));
  }
}
