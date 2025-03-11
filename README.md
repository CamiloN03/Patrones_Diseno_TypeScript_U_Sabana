# Patrones_Diseno_TypeScript_U_Sabana

Repositorio creado para el aprendizaje de patrones de diseño en arquitectura de software

# Problema 1 ==> Clonación de Personajes en un Videojuego de Aventuras

# Problema 2 ==> Desarrollando de aplicación de mensajería

# Problema 3 ==> Integración de un Sistema de Pago Externo

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

Esta implementación del Gestor de Tareas con el Patrón Command sigue los principios SOLID, garantizando un código limpio, modular y escalable.

Principios SOLID Aplicados

    S - Principio de Responsabilidad Única (SRP)

        Cada clase tiene una única responsabilidad:

        Task → Representa una tarea.
        CreateTaskCommand, EditTaskCommand, DeleteTaskCommand, CompleteTaskCommand → Cada una encapsula una sola acción sobre una tarea.
        TaskManager → Se encarga solo de ejecutar y deshacer comandos.

    O - Principio de Abierto/Cerrado (OCP)

        Se pueden agregar nuevas operaciones sin modificar el código existente.

        Si mañana necesitamos un nuevo comando (AssignUserCommand, SetPriorityCommand), solo agregamos una nueva clase sin tocar las demás.
        TaskManager no necesita saber qué comandos existen, solo los ejecuta.

    L - Principio de Sustitución de Liskov (LSP)

        ITaskCommand define una interfaz clara (execute() y undo()), y todas las clases de comandos la implementan sin romper la funcionalidad.

    I - Principio de Segregación de Interfaces (ISP)

        ITaskCommand es una interfaz específica y simple, con solo los métodos que cada comando necesita (execute() y undo()).

    D - Principio de Inversión de Dependencias (DIP)

        TaskManager depende de una abstracción (ITaskCommand) en lugar de implementaciones concretas.
        Esto permite intercambiar comandos sin modificar TaskManager.

Diagrama de clases para la solución del problema 04

![Diagrama_Clases](src/04.Problema_04/Diagrama_clases/Class_diagram_problem_04.drawio.png)

# Problema 5 ==> Decoración de Habitaciones en un Hotel

## 🧑‍💻 Autores

Este proyecto fue desarrollado por:

| Nombre           | GitHub                                     |
| ---------------- | ------------------------------------------ |
| Camilo Navarrete | [@CamiloN03](https://github.com/CamiloN03) |
| [Nombre]         | [@TuGitHub](https://github.com/TuGitHub)   |
| [Nombre]         | [@TuGitHub](https://github.com/TuGitHub)   |
| [Nombre]         | [@TuGitHub](https://github.com/TuGitHub)   |
| [Nombre]         | [@TuGitHub](https://github.com/TuGitHub)   |
