import { Component, OnInit, Injectable } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { Nombres } from 'src/app/interfaces/nombres';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  rot_a: number = 0;
  rot_b: number = 0;
  rot_c: number = 0;
  rot_d: number = 0;

  pws_pwd:string = '';
  
  firstNames: Nombres[] = [];
  secondNames:Array<string> = [];

  namePerson:string = '';
  numberPerson:string = '';
  emailPerson:string = '';
  constructor(
    private clipboardApi: ClipboardService,
    private toastr: ToastrService
  ) {
    this.firstNames = [{"nombre":"Aarón", "genero":"H"},{"nombre":"Abdul", "genero":"H"},{"nombre":"Abel", "genero":"H"},{"nombre":"Abelardo", "genero":"H"},{"nombre":"Abraham", "genero":"H"},{"nombre":"Ada", "genero":"M"},{"nombre":"Adam", "genero":"H"},{"nombre":"Adán", "genero":"H"},{"nombre":"Adelaide", "genero":"M"},{"nombre":"Adeline", "genero":"M"},{"nombre":"Adolfo", "genero":"H"},{"nombre":"Adrián", "genero":"H"},{"nombre":"Adriano", "genero":"H"},{"nombre":"Agustín", "genero":"H"},{"nombre":"Aladino", "genero":"H"},{"nombre":"Alan", "genero":"H"},{"nombre":"Alba", "genero":"M"},{"nombre":"Alberto", "genero":"H"},{"nombre":"Alejandro", "genero":"H"},{"nombre":"Alessandra", "genero":"M"},{"nombre":"Alessandro", "genero":"H"},{"nombre":"Alessia", "genero":"M"},{"nombre":"Alexis", "genero":"H"},{"nombre":"Alfonsina", "genero":"M"},{"nombre":"Alfonso", "genero":"H"},{"nombre":"Alice", "genero":"M"},{"nombre":"Alonso", "genero":"H"},{"nombre":"Álvaro", "genero":"H"},{"nombre":"Amalia", "genero":"M"},{"nombre":"Amelia", "genero":"M"},{"nombre":"Andrés", "genero":"H"},{"nombre":"Andrómeda", "genero":"M"},{"nombre":"Angel", "genero":"H"},{"nombre":"Antígona", "genero":"M"},{"nombre":"Antonella", "genero":"M"},{"nombre":"Antonio", "genero":"H"},{"nombre":"Ariadna", "genero":"M"},{"nombre":"Ariel", "genero":"H"},{"nombre":"Armando", "genero":"H"},{"nombre":"Arturo", "genero":"H"},{"nombre":"Augusto", "genero":"H"},{"nombre":"Aurelio", "genero":"H"},{"nombre":"Ava", "genero":"M"},{"nombre":"Azahara", "genero":"M"},{"nombre":"Baltazar", "genero":"H"},{"nombre":"Bartolomé", "genero":"H"},{"nombre":"Belisario", "genero":"H"},{"nombre":"Benedicto", "genero":"H"},{"nombre":"Benjamín", "genero":"H"},{"nombre":"Bernarndo", "genero":"H"},{"nombre":"Bianca", "genero":"M"},{"nombre":"Boris", "genero":"H"},{"nombre":"Braulio", "genero":"H"},{"nombre":"Brian", "genero":"H"},{"nombre":"Bruno", "genero":"H"},{"nombre":"Caín", "genero":"H"},{"nombre":"Calipso", "genero":"M"},{"nombre":"Camila", "genero":"M"},{"nombre":"Camilo", "genero":"H"},{"nombre":"Carina", "genero":"M"},{"nombre":"Carlos", "genero":"H"},{"nombre":"Carlota", "genero":"M"},{"nombre":"Casandra", "genero":"M"},{"nombre":"Casimiro", "genero":"H"},{"nombre":"Catalina", "genero":"M"},{"nombre":"César", "genero":"H"},{"nombre":"Charlotte", "genero":"M"},{"nombre":"Chiara", "genero":"M"},{"nombre":"Chloe", "genero":"M"},{"nombre":"Christian", "genero":"H"},{"nombre":"Christopher", "genero":"H"},{"nombre":"Clara", "genero":"M"},{"nombre":"Claudia", "genero":"M"},{"nombre":"Claudio", "genero":"H"},{"nombre":"Clemente", "genero":"H"},{"nombre":"Constancio", "genero":"H"},{"nombre":"Constantino", "genero":"H"},{"nombre":"Cora", "genero":"M"},{"nombre":"Cristian", "genero":"H"},{"nombre":"Cristóbal", "genero":"H"},{"nombre":"Cristóbal", "genero":"H"},{"nombre":"Daniel", "genero":"H"},{"nombre":"Daniela", "genero":"M"},{"nombre":"Dario", "genero":"H"},{"nombre":"David", "genero":"H"},{"nombre":"Dian", "genero":"M"},{"nombre":"Diego", "genero":"H"},{"nombre":"Domingo", "genero":"H"},{"nombre":"Dulce", "genero":"M"},{"nombre":"Edgar", "genero":"H"},{"nombre":"Eduardo", "genero":"H"},{"nombre":"Eleanor", "genero":"M"},{"nombre":"Eleanor", "genero":"M"},{"nombre":"Electra", "genero":"M"},{"nombre":"Elías", "genero":"H"},{"nombre":"Elizabeth", "genero":"M"},{"nombre":"Emilia", "genero":"M"},{"nombre":"Emilio", "genero":"H"},{"nombre":"Emma", "genero":"M"},{"nombre":"Enrique", "genero":"H"},{"nombre":"Ernesto", "genero":"H"},{"nombre":"Esteban", "genero":"H"},{"nombre":"Eugenio", "genero":"H"},{"nombre":"Evelyn", "genero":"M"},{"nombre":"Ezequiel", "genero":"H"},{"nombre":"Fabián", "genero":"H"},{"nombre":"Farah", "genero":"M"},{"nombre":"Fátima", "genero":"M"},{"nombre":"Federico", "genero":"H"},{"nombre":"Fedra", "genero":"M"},{"nombre":"Felipe", "genero":"H"},{"nombre":"Félix", "genero":"H"},{"nombre":"Fermín", "genero":"H"},{"nombre":"Fernando", "genero":"H"},{"nombre":"Fidel", "genero":"H"},{"nombre":"Fiorella", "genero":"M"},{"nombre":"Francesca", "genero":"M"},{"nombre":"Francisco", "genero":"H"},{"nombre":"Frida", "genero":"M"},{"nombre":"Gabriel", "genero":"H"},{"nombre":"Gabriella", "genero":"M"},{"nombre":"Gerardo", "genero":"H"},{"nombre":"Germán", "genero":"H"},{"nombre":"Gianna", "genero":"M"},{"nombre":"Gilberto", "genero":"H"},{"nombre":"Giovanni", "genero":"H"},{"nombre":"Gonzalo", "genero":"H"},{"nombre":"Gregorio", "genero":"H"},{"nombre":"Guillermo", "genero":"H"},{"nombre":"Gustavo", "genero":"H"},{"nombre":"Habiba", "genero":"M"},{"nombre":"Halima", "genero":"M"},{"nombre":"Héctor", "genero":"H"},{"nombre":"Helena", "genero":"M"},{"nombre":"Heriberto", "genero":"H"},{"nombre":"Hilario", "genero":"H"},{"nombre":"Hilario", "genero":"H"},{"nombre":"Hugo", "genero":"H"},{"nombre":"Humberto", "genero":"H"},{"nombre":"Ignacio", "genero":"H"},{"nombre":"Irene", "genero":"M"},{"nombre":"Isaac", "genero":"H"},{"nombre":"Isabella", "genero":"M"},{"nombre":"Isla", "genero":"M"},{"nombre":"Ismael", "genero":"H"},{"nombre":"Iván", "genero":"H"},{"nombre":"Jacobo", "genero":"H"},{"nombre":"Jaime", "genero":"H"},{"nombre":"Jairo", "genero":"H"},{"nombre":"Javier", "genero":"H"},{"nombre":"Jesús", "genero":"H"},{"nombre":"Jimena", "genero":"M"},{"nombre":"Joaquín", "genero":"H"},{"nombre":"Jorge", "genero":"H"},{"nombre":"José", "genero":"H"},{"nombre":"Juan", "genero":"H"},{"nombre":"Julia", "genero":"M"},{"nombre":"Julián", "genero":"H"},{"nombre":"Kalila", "genero":"M"},{"nombre":"Karima", "genero":"M"},{"nombre":"Kevin", "genero":"H"},{"nombre":"Laura", "genero":"M"},{"nombre":"Leandro", "genero":"H"},{"nombre":"Leda", "genero":"M"},{"nombre":"Leonardo", "genero":"H"},{"nombre":"Leopoldo", "genero":"H"},{"nombre":"Lorenza", "genero":"M"},{"nombre":"Lucas", "genero":"H"},{"nombre":"Lucía", "genero":"M"},{"nombre":"Lucy", "genero":"M"},{"nombre":"Lucy", "genero":"M"},{"nombre":"Luis", "genero":"H"},{"nombre":"Malika", "genero":"M"},{"nombre":"Manuel", "genero":"H"},{"nombre":"Manuela", "genero":"M"},{"nombre":"Marcos", "genero":"H"},{"nombre":"Marena", "genero":"M"},{"nombre":"María", "genero":"M"},{"nombre":"Marie", "genero":"M"},{"nombre":"Mario", "genero":"H"},{"nombre":"Martín", "genero":"H"},{"nombre":"Martina", "genero":"M"},{"nombre":"Mateo", "genero":"H"},{"nombre":"Matías", "genero":"H"},{"nombre":"Maximiliano", "genero":"H"},{"nombre":"Máximo", "genero":"H"},{"nombre":"Mellea", "genero":"M"},{"nombre":"Miguel", "genero":"H"},{"nombre":"Nayla", "genero":"M"},{"nombre":"Nelson", "genero":"H"},{"nombre":"Néstor", "genero":"H"},{"nombre":"Nicolás", "genero":"H"},{"nombre":"Nicoletta", "genero":"M"},{"nombre":"Octavio", "genero":"H"},{"nombre":"Olimpia", "genero":"M"},{"nombre":"Olivia", "genero":"M"},{"nombre":"Omar", "genero":"H"},{"nombre":"Orazia", "genero":"M"},{"nombre":"Orlando", "genero":"H"},{"nombre":"Oscar", "genero":"H"},{"nombre":"Ovidio", "genero":"H"},{"nombre":"Pablo", "genero":"H"},{"nombre":"Pandora", "genero":"M"},{"nombre":"Patricio", "genero":"H"},{"nombre":"Paula", "genero":"M"},{"nombre":"Paulo", "genero":"H"},{"nombre":"Pedro", "genero":"H"},{"nombre":"Penélope", "genero":"M"},{"nombre":"Pia", "genero":"M"},{"nombre":"Rada", "genero":"M"},{"nombre":"Rafael", "genero":"H"},{"nombre":"Ramiro", "genero":"H"},{"nombre":"Ramón", "genero":"H"},{"nombre":"Raúl", "genero":"H"},{"nombre":"Regina", "genero":"M"},{"nombre":"Renata", "genero":"M"},{"nombre":"Ricardo", "genero":"H"},{"nombre":"Rita", "genero":"M"},{"nombre":"Roberto", "genero":"H"},{"nombre":"Romina", "genero":"M"},{"nombre":"Rosa", "genero":"M"},{"nombre":"Rubén", "genero":"H"},{"nombre":"Sabira", "genero":"M"},{"nombre":"Salma", "genero":"M"},{"nombre":"Salvador", "genero":"H"},{"nombre":"Samantha", "genero":"M"},{"nombre":"Samira", "genero":"M"},{"nombre":"Samuel", "genero":"H"},{"nombre":"Santiago", "genero":"H"},{"nombre":"Sara", "genero":"M"},{"nombre":"Scarlett", "genero":"M"},{"nombre":"Sergio", "genero":"H"},{"nombre":"Simón", "genero":"H"},{"nombre":"Sofía", "genero":"M"},{"nombre":"Stella", "genero":"M"},{"nombre":"Teodoro", "genero":"H"},{"nombre":"Tito", "genero":"H"},{"nombre":"Tobías", "genero":"H"},{"nombre":"Tomás", "genero":"H"},{"nombre":"Ulises", "genero":"H"},{"nombre":"Valentín", "genero":"H"},{"nombre":"Valentina", "genero":"M"},{"nombre":"Valeria", "genero":"M"},{"nombre":"Verónica", "genero":"M"},{"nombre":"Vicente", "genero":"H"},{"nombre":"Víctor", "genero":"H"},{"nombre":"Victoria", "genero":"M"},{"nombre":"Violet", "genero":"M"},{"nombre":"Wilfredo", "genero":"H"},{"nombre":"William", "genero":"H"},{"nombre":"Zacarías", "genero":"H"},{"nombre":"Zaida", "genero":"M"},{"nombre":"Zara", "genero":"M"},{"nombre":"Zinerva", "genero":"M"}];
    this.secondNames = ["Acosta", "Aguilar", "Aguirre", "Alvarado", "Álvarez", "Ávila", "Bautista", "Cabrera", "Camacho", "Campos", "Cárdenas", "Carrillo", "Castañeda", "Castillo", "Castro", "Cervantes", "Chávez", "Contreras", "Cortés", "Cruz", "De la Cruz", "Delgado", "Díaz", "Domínguez", "Espinosa", "Espinoza", "Estrada", "Fernández", "Flores", "Fuentes", "García", "Gómez", "González", "Guerrero", "Gutiérrez", "Guzmán", "Hernández", "Herrera", "Huerta", "Ibarra", "Jiménez", "Juárez", "Lara", "León", "López", "Lorenzo", "Luna", "Maldonado", "Márquez", "Martínez", "Medina", "Mejía", "Méndez", "Mendoza", "Meza", "Miranda", "Molina", "Morales", "Moreno", "Muñoz", "Nava", "Navarro", "Núñez", "Orozco", "Ortega", "Ortiz", "Pacheco", "Padilla", "Peña", "Pérez", "Ramírez", "Ramos", "Rangel", "Reyes", "Ríos", "Rivera", "Robles", "Rodríguez", "Rojas", "Romero", "Rosales", "Rosas", "Ruiz", "Salas", "Salazar", "Sánchez", "Sandoval", "Santiago", "Santos", "Silva", "Solís", "Soto", "Torres", "Trejo", "Valdez", "Valencia", "Valenzuela", "Vargas", "Vázquez", "Vega", "Velázque"];
  }

  rot(rot_a:string,rot_b:string,rot_c:string) {
    this.rot_d = ( Number(rot_c) * Number(rot_b) ) / Number(rot_a);
  }

  pwd(pws_chars:string) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < Number(pws_chars); i++){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    const copyIcon = document.querySelector('#copyIcon');
          copyIcon?.classList.add('active');

    this.pws_pwd = text;
  }

  copyToClipboardText(){
    this.clipboardApi.copyFromContent(this.pws_pwd);
    this.toastr.success('Password copied to clipboard');
  }

  createNameRandom(genero:string=''){
		let rand = 0;
    let namesAux:Nombres[] = this.firstNames;
    const gender:Array<string> = ["H","M"];

    if(genero.length==0){
			rand = Math.floor(Math.random() * 2);
			genero = gender[rand];
    }

    namesAux = this.firstNames.filter(data=>data.genero==genero);

    rand = Math.floor(Math.random() * namesAux.length);
    const nombre1 = namesAux[rand].nombre;

    rand = Math.floor(Math.random() * namesAux.length);
    const nombre2 = namesAux[rand].nombre;

    rand = Math.floor(Math.random() * this.secondNames.length);
		const apellido1 = this.secondNames[rand];

    rand = Math.floor(Math.random() * this.secondNames.length);
		const apellido2 = this.secondNames[rand];

    this.namePerson = `${nombre1} ${nombre2} ${apellido1} ${apellido2}`;
    this.numberPerson = this.randomPhone();

    let email:string = this.cleanString(`${nombre1.substring(0,1)}.${apellido1}`);
    this.emailPerson = `${email}@myemail.com`;;
  }

  cleanString = function(s:string){
		var r=s.toLowerCase();
			r = r.replace(new RegExp(/\s/g),"");
			r = r.replace(new RegExp(/[àáâãäå]/g),"a");
			r = r.replace(new RegExp(/æ/g),"ae");
			r = r.replace(new RegExp(/ç/g),"c");
			r = r.replace(new RegExp(/[èéêë]/g),"e");
			r = r.replace(new RegExp(/[ìíîï]/g),"i");
			r = r.replace(new RegExp(/ñ/g),"n");                
			r = r.replace(new RegExp(/[òóôõö]/g),"o");
			r = r.replace(new RegExp(/œ/g),"oe");
			r = r.replace(new RegExp(/[ùúûü]/g),"u");
			r = r.replace(new RegExp(/[ýÿ]/g),"y");
			r = r.replace(new RegExp(/\W/g),"");
			return r;
	};

  randomPhone = ()=>{
		let numero:string = ``;
		for(let i=0;i<=9;i++){
			const num = Math.round(Math.random()*10);
			numero+=num.toString();
		}
		return numero;
	};

  ngOnInit(): void {
  }

}
