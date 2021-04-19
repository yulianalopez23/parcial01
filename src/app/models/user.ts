export class User{
    constructor(
        public _id: number,
        public nombre: string,
        public apellido: string,
        public email: string,
        public fechaNacimiento: string,
        public usuario: string,
        public password: string,
        public dni: string,
        public estado: boolean
    ){}
}