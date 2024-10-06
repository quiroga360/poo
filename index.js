import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Juliana", "j@j.com", "1989-06-16");
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("Camilla", "c@c.com", "2024-01-01");
console.log(novoAdmin.exibirInfos());


