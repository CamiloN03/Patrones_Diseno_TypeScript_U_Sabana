La empresa está desarrollando una aplicación de mensajería en tiempo real que permite
a los usuarios comunicarse desde múltiples dispositivos. Cada vez que un usuario recibe un
nuevo mensaje, todos los dispositivos del usuario deben ser notificados para que el
mensaje se muestre en cada uno de ellos. Para mantener la flexibilidad y desacoplar la
lógica de notificación de la aplicación principal.
El patrón que escoja deberá permitir

1. Notificación en Tiempo Real: Cada dispositivo del usuario debe recibir una
notificación cuando llegue un nuevo mensaje.
2. Desacoplamiento: La aplicación de mensajería debe poder notificar a cualquier
número de dispositivos sin saber detalles específicos sobre cada uno de ellos.
3. Flexibilidad: Los dispositivos pueden ser añadidos o eliminados en tiempo de
ejecución sin necesidad de modificar la lógica principal de la aplicación

Ejercicio realizado por Jheny Vanessa Morales Osorio

Respuesta: 
Patron seleccionado: Observer 
1. Notificación en Tiempo Real: los dispositivos que se suscriban suscriptores, podrán tener el mensaje en tiempo real
2. Desacoplamiento: El notificador no tiene que conocer el detalle de sus suscriptores, solo emite el mensaje y los sucriptores se encargan de procesarlos
3.Flexibilidad: se pueden adicionar suscriptores y emitir mensajes diferentes sin hacer cambios en la aplicación
