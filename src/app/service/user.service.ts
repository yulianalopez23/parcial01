import { User } from '../models/user';
import { Respuesta } from '../models/respuesta';


export class UserService{
    public listUser = []
    public contador = 0;

    
    registrarUsuario(usuario: User): Respuesta{
        var respuesta = new Respuesta("¡Usuario registrado correctamente!", true);

        console.log("=======register=======");
        if(usuario.usuario==""||usuario.usuario==null&&usuario.email==""||usuario.email==null){
            console.log('false');
            respuesta.message = "¡Ingrese los datos completos!"
            respuesta.state = false
        }else{
            this.listUser.map((item: User) => {
                if(usuario.usuario==item.usuario){
                    respuesta.message = "¡Ya existe el Usuario!"
                    respuesta.state = false
                }
            });
        }
        if(respuesta.state==true){
            this.contador++;
            usuario._id = this.contador;
            this.contador++;
            this.listUser.push(new User(this.contador, usuario.nombre, usuario.apellido, usuario.email, usuario.fechaNacimiento, usuario.usuario, usuario.password, usuario.dni, true));
            console.log(this.listUser);
        }
        this.listUser.forEach((item =>{
            console.log("======USUARIO==");
            console.log("register -> "+item.usuario);
            console.log("register -> "+item.nombre);
            console.log("register -> "+item.apellido);
            console.log("register -> "+item.password);
            console.log("register -> "+item.email);
            console.log("register -> "+item.dni);
        }))
        return respuesta
    }

    loginUsuario(usuario: User): Respuesta{
        console.log("=======login=======");
        console.log("usuario"+usuario.usuario);
        var respuesta = new Respuesta("¡Usuario logueado correctamente!", true);
        if(usuario.usuario==""||usuario.usuario==null){
            respuesta.message = "¡Ingrese el usuario!"
            respuesta.state = false
        }else if(usuario.password==""||usuario.password==null){
            respuesta.message = "¡Ingrese la contraseña!"
            respuesta.state = false
        }else{
            console.log("lis -> "+this.listUser.length);
            this.listUser.map((item: User) => {
                console.log("user -> "+item.usuario);
                var str1 = new String(usuario.usuario);
                var str2 = new String(usuario.password);
                console.log("compare " + str1 +" => " +item.usuario);
                console.log("compare " + str2 +" => " +item.password);
                if(str1.localeCompare(item.usuario)==0){
                    if(str2.localeCompare(item.password)==0){
                        respuesta = new Respuesta("¡Usuario logueado correctamente!", true);
                    }else{
                        respuesta.message = "¡Contraseña Incorrecta!"
                        respuesta.state = false
                    }
                }else{
                    respuesta.message = "¡Usuario no existe!"
                    respuesta.state = false
                }
            });
        }
        return respuesta
    }
}