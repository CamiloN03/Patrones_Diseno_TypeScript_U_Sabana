Principio de Responsabilidad Única (SRP - Single Responsibility Principle)
El Principio de Responsabilidad Única establece que una clase debe tener solo una razón para cambiar. En tu diseño:

La clase HabitacionBasica tiene la responsabilidad de representar una habitación básica, sin preocuparse por las decoraciones.
Los decoradores (FloresDecorador, ChocolateDecorador, VinoDecorador) tienen la responsabilidad exclusiva de agregar una funcionalidad específica a la habitación (decoraciones) sin alterar la funcionalidad de la habitación original.
De esta manera, cada clase tiene una única responsabilidad y no se mezcla con otras preocupaciones.

2. Principio de Abierto/Cerrado (OCP - Open/Closed Principle)
El Principio de Abierto/Cerrado dice que una clase debe estar abierta para su extensión, pero cerrada para su modificación.

El patrón Decorador se adapta perfectamente a este principio. En lugar de modificar la clase HabitacionBasica para añadir nuevas decoraciones, se pueden crear nuevas clases de decoradores (FloresDecorador, ChocolateDecorador, VinoDecorador) que extienden la funcionalidad de Habitacion de manera independiente.
Si en el futuro se desean nuevas decoraciones, se pueden añadir nuevas clases de decoradores sin necesidad de cambiar la implementación de las clases existentes, asegurando que el código esté cerrado para modificaciones pero abierto para extensiones.

3. Principio de Sustitución de Liskov (LSP - Liskov Substitution Principle)
El Principio de Sustitución de Liskov establece que los objetos de una clase derivada deben ser sustituibles por objetos de la clase base sin alterar las propiedades deseables del programa.

En tu diseño, las clases FloresDecorador, ChocolateDecorador y VinoDecorador son sustitutos válidos de la interfaz Habitacion. Puedes reemplazar una instancia de HabitacionBasica por cualquier clase decoradora y el sistema seguirá funcionando correctamente.
Esto asegura que el patrón no interrumpe la estructura o la funcionalidad de las clases base, y puedes trabajar con cualquier objeto Habitacion de manera intercambiable.

4. Principio de Segregación de Interfaces (ISP - Interface Segregation Principle)
El Principio de Segregación de Interfaces sugiere que una clase no debe verse obligada a depender de interfaces que no utiliza.

La interfaz Habitacion define solo dos métodos esenciales (getDescripcion() y getCosto()), que son necesarios para todas las habitaciones. No se obliga a las clases a implementar métodos que no se utilicen.
De esta manera, el diseño es ligero y las clases no están sobrecargadas con responsabilidades que no les conciernen. Cada clase tiene solo las responsabilidades necesarias.

5. Principio de Inversión de Dependencias (DIP - Dependency Inversion Principle)
El Principio de Inversión de Dependencias establece que las clases deben depender de abstracciones (interfaces), no de clases concretas.

El patrón Decorador sigue este principio porque HabitacionDecorador depende de la interfaz Habitacion y no de una implementación concreta de habitación. Esto permite que diferentes implementaciones de Habitacion (como HabitacionBasica o cualquier otra clase que implemente Habitacion) puedan ser decoradas sin que los decoradores dependan de una implementación específica.
Este enfoque permite que el sistema sea flexible, fácil de extender y mantiene las dependencias desacopladas.