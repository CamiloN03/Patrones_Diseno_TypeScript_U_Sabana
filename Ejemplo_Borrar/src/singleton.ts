class Singleton {
  private static instance: Singleton;

  private constructor() {} // Evita instanciación externa

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public sayHello(): void {
    console.log("Hola desde el Singleton 👋");
  }
}

// Uso
const singleton1 = Singleton.getInstance();
singleton1.sayHello();

const singleton2 = Singleton.getInstance();
console.log(singleton1 === singleton2); // true
