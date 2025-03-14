# Patrones_Diseno_TypeScript_U_Sabana

Repositorio creado para el aprendizaje de patrones de diseño en arquitectura de software

# Problema 1 ==> Clonación de Personajes en un Videojuego de Aventuras

# Problema 2 ==> Desarrollando de aplicación de mensajería

# Problema 3 💳  Integración de un Sistema de Pago Externo

### Contexto:

Imagina que estás desarrollando una plataforma de comercio electrónico y deseas ofrecer a tus clientes múltiples opciones de pago, incluyendo tarjetas de crédito, PayPal y un nuevo sistema de pago digital que acaba de ser lanzado. Sin embargo, este nuevo sistema de pago tiene una interfaz incompatible con tu plataforma existente, lo que dificulta su integración

### Aplicación del Patrón:

Para resolver este problema, aplicaremos el patrón de diseño Adapter, el cual permite que dos interfaces incompatibles trabajen juntas. En nuestro caso, simulamos que el nuevo sistema de pago implementa un método con una estructura diferente, lo que lo hace incompatible con el resto de las opciones de pago existentes.

Para solucionar esto, crearemos un adaptador que actuará como un wrapper, encapsulando la lógica necesaria para traducir la nueva implementación a una interfaz compatible con el sistema actual. De esta manera, garantizamos una integración fluida sin afectar el código existente.

Con este enfoque, logramos mayor flexibilidad y mantenibilidad en el sistema, facilitando la incorporación de futuras soluciones de pago sin alterar la lógica principal.

### Diagrama de clases

![Diagrama_Clases](Patrones_Diseno/src/03.Problema_03/class-diagram/class_diagram_03.png)


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
| [Nombre]           | [@TuGitHub](https://github.com/TuGitHub)                       |
| [Nombre]           | [@TuGitHub](https://github.com/TuGitHub)                       |
| [Nombre]           | [@TuGitHub](https://github.com/TuGitHub)                       |
