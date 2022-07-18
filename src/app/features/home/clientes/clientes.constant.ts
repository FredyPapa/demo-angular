export interface ICliente {
  id: number;
  action?: string;
  nombre: string;
  apellidos: string;
  fechaNacimiento: string;
  total1: number;
  total2: number;
  status: boolean;
  foto: string;
  totalFinal?: number;
}
export const Clientes: ICliente[] = [
  {
    id: 1,
    action: 'eliminar',
    nombre: 'FORMATIVA',
    apellidos: 'APELLIDO',
    fechaNacimiento: '27/02/1993',
    total1: 100.39123123,
    total2: 200.2012312,
    status: true,
    foto: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
  {
    id: 2,
    action: 'editar',
    nombre: 'FORMATIVA',
    apellidos: 'APELLIDO',
    fechaNacimiento: '27/02/1993',
    total1: 100.39123123,
    total2: 200.2012312,
    status: true,
    foto: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
  {
    id: 3,
    nombre: 'FORMATIVA',
    apellidos: 'APELLIDO',
    fechaNacimiento: '27/02/1993',
    total1: 100.39123123,
    total2: 200.2012312,
    status: true,
    foto: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
  {
    id: 4,
    nombre: 'FORMATIVA',
    apellidos: 'APELLIDO',
    fechaNacimiento: '27/02/1993',
    total1: 100.39123123,
    total2: 200.2012312,
    status: false,
    foto: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
];
