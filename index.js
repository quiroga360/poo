import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Juliana", "j@j", "2024-01-01");
const novoAdmin = new User("Camilla", "c@c", "2024-01-01");
const novoDocente = new User("Jonas", "j@j", "2024-01-01");

console.log(novoUser.exibirInfos());
