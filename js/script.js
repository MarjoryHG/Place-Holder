superplaceholder({
	el: document.querySelector('.text1'),
	sentences: [ 'Escribe tu Nombre de Usuario', 'Por Favor'],//la coma es para separar el texto, salga una y luego salga la otra
	options: {

		//especifica la cantidad de tiempo a esperar entre un cambio pedido hacia una propiedad
		letterDelay:40, 
		sentenceDelay: 500,
		startOnFocus: false,//efecto que se le da al poner el cursor
		//  forma rápida y sencilla de hacer algo repetidamente
		loop: true
	}
});

superplaceholder({
	el: document.querySelector('.text2'),
	sentences: [ 'Digita tu Contraseña'],
	options: {


		letterDelay:90,//Tiempo en que van saliendo las letras
		sentenceDelay: 500,//tiempo enque se van a mantener las letras
		startOnFocus: true,
		loop: true
	}
});