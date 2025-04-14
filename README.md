# Patrones_Diseno_TypeScript_U_Sabana

Repositorio creado para el aprendizaje de patrones de diseño en arquitectura de software

# Problema 1 ==> Clonación de Personajes en un Videojuego de Aventuras

# Problema 2 ==> Desarrollando de aplicación de mensajería

### Contexto:

La empresa está desarrollando una aplicación de mensajería en tiempo real que permite
a los usuarios comunicarse desde múltiples dispositivos. Cada vez que un usuario recibe un
nuevo mensaje, todos los dispositivos del usuario deben ser notificados para que el
mensaje se muestre en cada uno de ellos. Para mantener la flexibilidad y desacoplar la
lógica de notificación de la aplicación principal.
El patrón que escoja deberá permitir

### Aplicación del Patrón:

Para resolver el problema planteado, se ha seleccionado el patrón de diseño Observer, el cual permite establecer una relación de uno-a-muchos entre objetos. En este caso, la aplicación de mensajería actúa como el sujeto (publisher), y cada uno de los dispositivos del usuario funciona como un observador (subscriber).

Este patrón es ideal para escenarios en los que múltiples objetos deben ser notificados automáticamente cuando ocurre un cambio de estado, sin que el emisor de la notificación tenga que conocer los detalles de los receptores

Notificación en Tiempo Real:
Cada vez que un nuevo mensaje llega, el sistema notifica automáticamente a todos los dispositivos suscritos. Estos dispositivos, al estar escuchando como observadores, reciben el mensaje en tiempo real y lo muestran al usuario.

Desacoplamiento:
La aplicación de mensajería (sujeto) no necesita conocer los detalles específicos de los dispositivos (observadores). Solo emite el mensaje, y cada dispositivo suscrito se encarga de procesarlo según su lógica interna.

Flexibilidad:
Los dispositivos pueden añadirse o eliminarse dinámicamente durante la ejecución sin necesidad de modificar la lógica central. Esta capacidad permite escalar y adaptar el sistema a nuevos requerimientos de manera sencilla y mantenible.

### Diagrama de clases

![Diagrama_Clases](Patrones_Diseno/src/02.Problema_02/Diagrama_clases/Diagrama_clases.png)

### 🚀 Instrucciones para ejecutar el proyecto

1. Asegúrate de estar en la raíz del proyecto. Luego, ingresa a la carpeta del proyecto con:
   ```sh
   cd Patrones_Diseno/
   ```

2. Instala las dependencias ejecutando:
   ```sh
   npm install
   ```

3. Una vez completada la instalación, ejecuta el siguiente comando para correr el problema 03:
   ```sh
   npm run Problem_02
   ```

🎉 ¡Y listo! Ahora el problema 03 estará corriendo en tu máquina.


# Problema 3 💳  Integración de un Sistema de Pago Externo

### Contexto:

Imagina que estás desarrollando una plataforma de comercio electrónico y deseas ofrecer a tus clientes múltiples opciones de pago, incluyendo tarjetas de crédito, PayPal y un nuevo sistema de pago digital que acaba de ser lanzado. Sin embargo, este nuevo sistema de pago tiene una interfaz incompatible con tu plataforma existente, lo que dificulta su integración

### Aplicación del Patrón:

Para resolver este problema, aplicaremos el patrón de diseño Adapter, el cual permite que dos interfaces incompatibles trabajen juntas. En nuestro caso, simulamos que el nuevo sistema de pago implementa un método con una estructura diferente, lo que lo hace incompatible con el resto de las opciones de pago existentes.

Para solucionar esto, crearemos un adaptador que actuará como un wrapper, encapsulando la lógica necesaria para traducir la nueva implementación a una interfaz compatible con el sistema actual. De esta manera, garantizamos una integración fluida sin afectar el código existente.

Con este enfoque, logramos mayor flexibilidad y mantenibilidad en el sistema, facilitando la incorporación de futuras soluciones de pago sin alterar la lógica principal.

### Diagrama de clases

![Diagrama_Clases](Patrones_Diseno/src/03.Problema_03/class-diagram/class_diagram_03.png)

### 🚀 Instrucciones para ejecutar el proyecto

1. Asegúrate de estar en la raíz del proyecto. Luego, ingresa a la carpeta del proyecto con:
   ```sh
   cd Patrones_Diseno/
   ```

2. Instala las dependencias ejecutando:
   ```sh
   npm install
   ```

3. Una vez completada la instalación, ejecuta el siguiente comando para correr el problema 03:
   ```sh
   npm run Problem_03
   ```

🎉 ¡Y listo! Ahora el problema 03 estará corriendo en tu máquina.


# Problema 4 ==> Sistema de Gestión de Tareas

Contexto:

    Imagina un sistema de gestión de tareas en el que los usuarios pueden crear, editar, eliminar y completar tareas. Cada acción realizada por el usuario corresponde a una acción que debe ser ejecutada. Además, es importante mantener un registro de todas las acciones realizadas para permitir la reversión de las mismas si es necesario.

Aplicación del Patrón:

    En este escenario, el patrón será aplicado para encapsular cada una de las acciones que el usuario puede realizar sobre una tarea.
    El patrón que seleccione debe tener los siguientes beneficios:
        ● Desacopla el invocador de los objetos que realizan las acciones.
        ● Permite la extensión de nuevas operaciones sin modificar el código existente.
        ● Facilita el registro de acciones para realizar operaciones de reversión.

Análisis de SOLID en la Implementación

Esta implementación del gestor de tareas con el patrón Command sigue los principios SOLID, garantizando un código limpio, modular y escalable.

Principios SOLID Aplicados

    S - Principio de responsabilidad única (SRP)

        Cada clase tiene una única responsabilidad:

        Task → Representa una tarea.
        CreateTaskCommand, EditTaskCommand, DeleteTaskCommand, CompleteTaskCommand → Cada una encapsula una sola acción sobre una tarea.
        TaskManager → Se encarga solo de ejecutar y deshacer comandos.

    O - Principio de abierto/cerrado (OCP)

        Se pueden agregar nuevas operaciones sin modificar el código existente.

        Si mañana necesitamos un nuevo comando (AssignUserCommand, SetPriorityCommand), solo agregamos una nueva clase sin tocar las demás.
        TaskManager no necesita saber qué comandos existen, solo los ejecuta.

    L - Principio de sustitución de liskov (LSP)

        ITaskCommand define una interfaz clara (execute() y undo()), y todas las clases de comandos la implementan sin romper la funcionalidad.

    I - Principio de segregación de interfaces (ISP)

        ITaskCommand es una interfaz específica y simple, con solo los métodos que cada comando necesita (execute() y undo()).

    D - Principio de inversión de dependencias (DIP)

        TaskManager depende de una abstracción (ITaskCommand) en lugar de implementaciones concretas.
        Esto permite intercambiar comandos sin modificar TaskManager.

Diagrama de clases para la solución del problema 04

![Diagrama_Clases](Patrones_Diseno/src/04.Problema_04/Diagrama_clases/Class_diagram_problem_04.drawio.png)

# Problema 5 ==> Decoración de Habitaciones en un Hotel

## 🧑‍💻 Autores

Este proyecto fue desarrollado por:

| Nombre             | GitHub                                                         |
| ------------------ | -------------------------------------------------------------- |
| Camilo Navarrete   | [@CamiloN03](https://github.com/CamiloN03)                     |
| Cristian Melgarejo | [@CristianMelgarejo94](https://github.com/CristianMelgarejo94) |
| Vanessa Morales    | [@ness918](https://github.com/ness918)                       |
| [Nombre]           | [@TuGitHub](https://github.com/TuGitHub)                       |
| [Nombre]           | [@TuGitHub](https://github.com/TuGitHub)                       |
