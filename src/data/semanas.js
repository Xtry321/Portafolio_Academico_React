export const semanas = [

  /* Semana 1 */
  {
    titulo: "Semana 1",
    fecha:  "07/04/2026",

    notas: `## Fundamentos de las Tecnologías Web
Las tecnologías web permiten crear aplicaciones y servicios accesibles mediante internet usando navegadores web. Estas tecnologías facilitan la comunicación entre clientes (usuarios) y servidores para compartir información de manera rápida y segura.
## Soluciones Web
### Sistema Web
Es un conjunto de componentes y funcionalidades conectadas mediante internet que permiten realizar procesos específicos, como sistemas académicos, bancarios o empresariales.
### Aplicación Web
Es un software que funciona desde un navegador web sin necesidad de instalación local. Permite interacción dinámica con el usuario.
**Ejemplos:** Gmail, Google Docs, Facebook.
### Sitio Web
Es un conjunto de páginas web relacionadas bajo un mismo dominio y estructura.
**Ejemplo:** www.openai.com
### Página Web
Es un documento individual dentro de un sitio web que contiene información visual, texto, imágenes o videos.
## Tecnologías Web Básicas
### HTML
Lenguaje utilizado para estructurar el contenido de una página web.
### CSS
Lenguaje encargado del diseño y la apariencia visual de las páginas web.
### JavaScript
Lenguaje de programación que permite agregar interactividad y dinamismo a las páginas web.
[img: /assets/img/HTML-CSS-JS.webp | Tecnologías Web Básicas]
## Lenguajes y Tecnologías Complementarias
- **PHP:** Desarrollo backend.
- **Python:** Desarrollo web y procesamiento de datos.
- **SQL:** Gestión de bases de datos.
- **XML:** Intercambio y almacenamiento de información.
- **JSON:** Formato ligero para intercambio de datos.
### Tecnologías Gráficas Web
### SVG
Formato gráfico vectorial utilizado para imágenes escalables sin pérdida de calidad.
### WebGL
Tecnología que permite gráficos 2D y 3D acelerados por hardware dentro del navegador.
## Funcionamiento de la Web
### DNS (Domain Name System)
Sistema que traduce nombres de dominio en direcciones IP para localizar servidores en internet.
### Protocolo TCP/IP
Conjunto de protocolos que permiten la comunicación y transmisión de datos entre dispositivos conectados a internet.
### Protocolo HTTP/HTTPS
Protocolos utilizados para transferir información entre navegadores y servidores web.
- **HTTP:** Comunicación estándar.
- **HTTPS:** Comunicación segura mediante cifrado SSL/TLS.
## Roles en el Desarrollo de Aplicaciones para Internet
### Desarrollador Frontend
Se encarga de la parte visual e interactiva que ve el usuario.
**Tecnologías:** HTML, CSS, JavaScript.
### Desarrollador Backend
Gestiona la lógica del servidor, bases de datos y procesamiento interno de la aplicación.
**Tecnologías:** PHP, Python, Node.js, SQL.
### Desarrollador Fullstack
Combina conocimientos de frontend y backend para desarrollar aplicaciones completas.
## Exposición del silabo`,

    reflexion: `La información sobre tecnologías web permite comprender cómo internet y las aplicaciones modernas funcionan actualmente. Conocer conceptos como HTML, CSS, JavaScript, protocolos de comunicación y roles de desarrollo ayuda a entender que la web no solo consiste en páginas visuales, sino en una infraestructura compleja que conecta sistemas, usuarios y servicios a nivel mundial. Además, aprender sobre frontend, backend y fullstack demuestra la importancia del trabajo colaborativo y especializado dentro del desarrollo de software, donde cada rol contribuye al funcionamiento eficiente y seguro de las aplicaciones web.`,

    bibliografia: [
      "Rubiales (2021). Curso de desarrollo Web. HTML, CSS y JavaScript. ANAYA. https://anayamultimedia.es/primer_capitulo/curso-de-desarrollo-web-html-css-y-javascript-edicion-2021.pdf"
    ]
  },

  /* Semana 2 */
  {
    titulo: "Semana 2",
    fecha:  "14/04/2026",

    notas: `## Tipos de Desarrollo de Software
- **Software nativo:** Aplicaciones desarrolladas para un sistema operativo específico.
- **Tecnología web:** Aplicaciones accesibles desde navegadores y adaptables a distintos dispositivos mediante diseño responsive.
## Tipos de Web
### Web Superficial
Parte pública de internet accesible mediante buscadores como Google o Bing.
### Deep Web
Contenido no indexado por buscadores, como correos, bases de datos y sistemas privados.
### Dark Web
Zona oculta de internet accesible con herramientas como :contentReference[oaicite:0]{index=0}, utilizada tanto para anonimato como para actividades ilegales.
### Marianas Web
Concepto teórico relacionado con supuestas capas profundas y secretas de internet sin evidencia real.
### Capa Mediadora
Idea especulativa relacionada con sistemas de control y filtrado de acceso, similares a VPN y firewalls.
### La Fog
Representa el caos digital asociado a malware, botnets y datos corruptos.
### Sistema Primarca
Teoría sobre una entidad autónoma que controlaría funciones ocultas de internet.
[img: /assets/img/nivelesweb.webp | Niveles de la Web]
## Open Web Platform
Conjunto de tecnologías y estándares abiertos para el desarrollo web.
### Organizaciones principales
- W3C
- Unicode Consortium
- Internet Engineering Task Force
- ECMA International
### Tecnologías
- HTML5
- CSS
- ECMAScript
- SVG
- MathML
- WAI-ARIA
- WebGL
### Principios
- Transparencia
- Integración
- Libertad de uso
- Documentación abierta
## Funcionamiento de la Web
La infraestructura de internet está compuesta por:
- Nodos (routers)
- Gateways o pasarelas
- Sistemas Autónomos (AS)
## Estándares para el Desarrollo Web
### Principales
- HTTP / HTTPS
- HTML
- CSS
- XML
- JavaScript
### Complementarios
- Web API
- SVG
- WebGL
- MathML`,

    reflexion: `La clase permitió comprender que el desarrollo web no solo consiste en crear páginas visuales, sino también en conocer cómo funciona internet, sus tecnologías y estándares. Además, se identificó la importancia de herramientas abiertas como HTML, CSS y JavaScript para construir aplicaciones accesibles y adaptables a distintos dispositivos. Finalmente, el desarrollo del portafolio web representa una oportunidad para aplicar progresivamente los conocimientos aprendidos durante el curso.`,

    bibliografia: [
      "Rubiales (2021). Curso de desarrollo Web. HTML, CSS y JavaScript. ANAYA. https://anayamultimedia.es/primer_capitulo/curso-de-desarrollo-web-html-css-y-javascript-edicion-2021.pdf"
    ]
  },

  /* Semana 3  */
  {
    titulo: "Semana 3",
    fecha:  "21/04/2026",

    notas: `## Frontend
### Desarrollo del lado del cliente
El frontend es la parte visible de una aplicación web con la que interactúa el usuario. Se encarga del diseño, estructura e interactividad de las páginas.
#### Tecnologías principales
- HTML
- CSS
- JavaScript
#### Frameworks
- React
- Vue
- Angular
#### Herramientas
- Vite
- Webpack
## Backend
### Desarrollo del lado del servidor
El backend procesa la lógica de la aplicación, administra la información y se conecta con las bases de datos.
#### Lenguajes
- JavaScript (Node.js)
- Python
- Java
#### Frameworks
- Express
- Django
- Spring Boot
#### Bases de datos
- MongoDB
- PostgreSQL
- MySQL
#### APIs
- REST
- GraphQL
[img: /assets/img/frontend_vs_backend.webp | Frontend vs Backend]
## Diseño UX/UI
### Experiencia de Usuario e Interfaz
El diseño UX/UI busca crear interfaces atractivas, funcionales y fáciles de usar.
### UX (User Experience)
Se enfoca en la experiencia del usuario, usabilidad y navegación.
### UI (User Interface)
Se enfoca en el diseño visual: colores, botones, tipografía y distribución.
#### Herramientas de diseño
- Figma
- Adobe XD
- Sketch
- Balsamiq
- Photoshop
- Illustrator
#### Principios básicos
- Simplicidad
- Consistencia
- Accesibilidad
- Retroalimentación visual
- Jerarquía visual
[img: /assets/img/ux-ui.webp | Diseño UX/UI]`,

    reflexion: `La clase permitió comprender que el desarrollo web moderno requiere la integración de varias áreas especializadas. El frontend se encarga de la interacción visual con el usuario, mientras que el backend administra la lógica y los datos del sistema. Además, el diseño UX/UI cumple un papel fundamental al garantizar que las aplicaciones sean atractivas, intuitivas y accesibles. La combinación de estas áreas permite crear aplicaciones web funcionales y con una mejor experiencia para los usuarios.`,

    bibliografia: [
      "Rubiales (2021). Curso de desarrollo Web. HTML, CSS y JavaScript. ANAYA. https://anayamultimedia.es/primer_capitulo/curso-de-desarrollo-web-html-css-y-javascript-edicion-2021.pdf",
    ]
  },


  /* Semana 4  */
  {
    titulo: "Semana 4",
    fecha:  "28/04/2026",

    notas: `## Motores JavaScript
Los motores JavaScript son programas complejos (intérpretes y compiladores Just-In-Time o JIT) encargados de traducir el código fuente a código de máquina para que el procesador pueda ejecutarlo rápidamente, ya sea en el navegador o en el servidor.
### Motores más conocidos
- **V8:** Desarrollado por Google. Es de código abierto, altamente optimizado y el motor detrás de Google Chrome, Node.js y Deno.
- **SpiderMonkey:** El primer motor de JavaScript de la historia, desarrollado por Netscape y actualmente mantenido y utilizado por Mozilla Firefox.
- **JavaScriptCore:** También conocido como Nitro, es el motor desarrollado por Apple para su navegador Safari y el ecosistema WebKit.
## Variables y Operadores
Las variables actúan como contenedores intermedios que permiten almacenar, referenciar y manipular datos en la memoria de un programa.
### Declaración de variables
- **var:** La forma tradicional (ES5). Tiene alcance de función (function-scope) y permite la reinicialización, pero puede causar problemas debido al hoisting (elevación).
- **let:** Introducido en ES6. Tiene alcance de bloque (block-scope), lo que significa que solo existe dentro de las llaves donde se declaró. Es ideal para valores que van a cambiar.
- **const:** Introducido en ES6. También tiene alcance de bloque, pero define una constante. Su valor no puede ser reasignado una vez definido (aunque si almacena un objeto o array, sus propiedades sí pueden mutar).
### Operadores principales
- **Aritméticos (+, -, *, /, %):** Permiten realizar operaciones matemáticas. Se incluye el módulo (%) para obtener el resto de una división.
- **Comparación (==, ===, !=, !==):** == compara solo el valor (hace conversión de tipo implícita), mientras que === es la comparación estricta, evaluando que coincidan tanto el valor como el tipo de dato.
- **Lógicos (&&, ||, !):** Permiten combinar o invertir condiciones booleanas (AND, OR y NOT respectivamente).
## Tipos de Datos
En JavaScript los tipos de datos se dividen principalmente en Primitivos (inmutables y se pasan por valor) y Objetos (mutables y se pasan por referencia).
- **Números (Number):** Representan valores numéricos, tanto enteros como decimales (punto flotante). JavaScript no diferencia entre integers y floats. También incluye valores especiales como NaN (Not a Number) e Infinity.
- **Strings:** Cadenas de caracteres delimitadas por comillas simples, dobles o backticks, estos últimos permiten interpolar variables fácilmente.
- **Booleanos:** Representan una entidad lógica y solo pueden tener dos valores: true (verdadero) o false (falso).
- **Otros tipos primitivos:**
  - **null:** Representa intencionalmente la ausencia total de valor o un objeto "vacío".
  - **undefined:** Indica que una variable ha sido declarada pero aún no se le ha asignado ningún valor.
- **Objetos y Estructuras Complejas:**
  - **Objetos (Object):** Estructuras clave-valor que agrupan propiedades (datos) y métodos (funciones).
  - **Arrays:** Colecciones ordenadas de elementos (que técnicamente en JavaScript son un tipo especial de objeto) indexados numéricamente a partir del 0.
## Estructuras de Control y Bucles
Permiten romper la ejecución lineal del código para tomar decisiones o repetir tareas según las necesidades del flujo del programa.
### Condicionales
- **if / else if / else:** Evalúa una condición boojana; si es verdadera ejecuta un bloque de código, de lo contrario pasa al siguiente.
- **switch:** Evalúa una sola expresión comparando su valor con múltiples casos, ideal para evitar estructuras condicionales demasiado largas.
### Bucles
- **for:** Ideal cuando se conoce de antemano el número exacto de iteraciones que se desean realizar.
- **while:** Ejecuta un bloque de código continuamente mientras una condición dada sea verdadera.
- **do while:** Similar al while, con la garantía de que el bloque de código se ejecutará al menos una vez antes de evaluar la condición.
## Funciones
Las funciones son los bloques de construcción fundamentales en JavaScript; encapsulan lógica reutilizable y modular.
### Sintaxis e Invocación
Una función puede declararse y luego ejecutarse mediante su nombre.
### Funciones Anónimas
Funciones sin nombre utilizadas normalmente como parámetros o expresiones.
### Función Objeto
Las funciones en JavaScript pueden tratarse como objetos.
### Funciones Flecha
Sintaxis moderna y simplificada para declarar funciones usando =>.
### Funciones Auto Invocadas
Funciones que se ejecutan automáticamente al ser definidas.
### Closures
Funciones que conservan acceso a variables de su contexto externo incluso después de ejecutarse.
## Practica de Git y GitHub`,

    reflexion: `La clase permitió comprender los fundamentos de JavaScript, incluyendo variables, operadores, tipos de datos, estructuras de control y funciones, elementos esenciales para el desarrollo de aplicaciones web dinámicas. Además, la práctica realizada con Git y GitHub ayudó a fortalecer el manejo de control de versiones y la gestión de proyectos colaborativos, habilidades importantes dentro del desarrollo de software moderno.`,

    bibliografia: [
      "MoureDev (s.f.). Hello-git. https://github.com/mouredev/hello-git/tree/0a3e7e416c5ef94e908babf0bba32c18559c6816"
    ]
  },

/* Semana 5  */
  {
    titulo: "Semana 5",
    fecha:  "05/05/2026",

    notas: `## ¿Qué es React?
React es una biblioteca de JavaScript desarrollada por Meta para construir interfaces de usuario mediante componentes reutilizables. Utiliza un modelo Client Side Rendering (CSR) donde el navegador construye la UI.
### Herramientas del Ecosistema:
- **Vite:** Bundler ultrarrápido para crear proyectos React modernos.
- **npm / pnpm / yarn:** Gestores de dependencias y paquetes.
- **React DOM:** Renderiza componentes en el navegador.
- **React DevTools:** Extensión para inspeccionar el árbol de componentes.
### Estructura de un Proyecto Vite + React:
- **src/:** Código fuente de la aplicación.
- **public/:** Archivos estáticos (imágenes, fuentes).
- **package.json:** Dependencias y scripts.
- **vite.config.ts:** Configuración del bundler.
- **index.html:** Punto de entrada del HTML.
## JSX: JavaScript + XML
JSX es una extensión de sintaxis de JavaScript que permite escribir HTML dentro del código JS. Babel lo transforma a llamadas React.createElement().
### Reglas de JSX:
- Retornar un único elemento raíz (o usar <Fragment> / <></>).
- Cerrar todas las etiquetas, incluso las de auto-cierre: <img />
- Usar className en lugar de class.
- Usar htmlFor en lugar de for en labels.
- Expresiones JS entre llaves: { variable }
- Estilos inline como objeto: style={{ color: "red" }}
### Renderizado Condicional en JSX:
- **Ternario:** { condicion ? <A /> : <B /> }
- **AND:** { condicion && <Componente /> }
- **Nullish:** { valor ?? <Default /> }
## Componentes, Props y Children
Un componente es una función de JavaScript que recibe datos (props) y retorna JSX. Los componentes son la unidad básica de construcción en React.
### Props:
- Los props pasan datos del componente padre al hijo (flujo unidireccional).
- Son de solo lectura dentro del componente que los recibe.
- Se desestructuran: function Card({ title, desc }) { }
- Valores por defecto: function Btn({ color = "red" }) { }
### Children:
- Prop especial que representa el contenido anidado del componente.
- Acceso: { children } en los parámetros del componente.
- Permite componer componentes de forma flexible como contenedores.
### Buenas Prácticas:
- Nombres de componentes siempre en PascalCase.
- Un componente, una responsabilidad (principio SRP).
- Componentes pequeños y reutilizables.
## Estrategias de Estilos en React
Existen múltiples enfoques para aplicar estilos en una aplicación React, cada uno con sus ventajas según el contexto.
- **1. Estilos Inline:** Se pasan como objeto JS directamente al atributo style. Útil para estilos dinámicos basados en props o estado. No soporta pseudo-clases ni media queries.
- **2. Style Sheets Globales:** Archivos .css importados en el componente. Los estilos son globales y pueden causar colisiones de nombres en proyectos grandes.
- **3. CSS Modules:** Archivos .module.css con alcance local por componente. Las clases se importan como un objeto JS, evitando colisiones globales.
- **4. Framework CSS (Tailwind):** Clases utilitarias aplicadas directamente en el JSX. Alta productividad, consistencia de diseño y excelente integración con React y Vite.
- **5. Styled Components:** CSS-in-JS que genera componentes con estilos encapsulados usando template literals. Soporta props dinámicas y theming avanzado.
## GINKANA
[img: /assets/img/ginkana.webp | GINKANA]`,

    reflexion: `La clase permitió comprender cómo React facilita el desarrollo de aplicaciones modernas mediante componentes reutilizables y una estructura organizada. El uso de JSX, props y children demuestra cómo React mejora la construcción de interfaces dinámicas y mantenibles. Además, conocer herramientas como Vite y diferentes estrategias de estilos ayuda a desarrollar proyectos más escalables, eficientes y adaptables a las necesidades actuales del desarrollo frontend.`,

    bibliografia: [
      "Wieruch (2018). The Road to learn React. Leanpub."
    ]
  },
  
  /* Semana 6  */
  {
    titulo: "Semana 6",
    fecha:  "12/05/2026",

    notas: `## Eventos en React
Los eventos permiten ejecutar acciones cuando el usuario interactúa con la aplicación.
### Eventos comunes
- **onClick**: Se ejecuta al hacer clic sobre un elemento.
- **onChange**: Detecta cambios en inputs o formularios.
- **onSubmit**: Maneja el envío de formularios.
- **onMouseOver**: Se activa cuando el cursor pasa sobre un elemento.
Los eventos en React se manejan mediante funciones JavaScript asociadas a componentes.
## Renderizado Condicional
Permite mostrar diferentes elementos según una condición específica.
### Métodos comunes
- **Operador ternario**: Muestra un elemento u otro dependiendo de la condición.
- **Operador &&**: Renderiza contenido solo si la condición es verdadera.
- **Condiciones con if**: Permiten controlar qué componente o contenido mostrar.
Se utiliza para mensajes dinámicos, validaciones y control de vistas.
## Renderizado Iterativo
Permite mostrar listas de datos de forma dinámica recorriendo arreglos.
### Método principal
- **map()**: Recorre un arreglo y genera componentes o elementos JSX automáticamente.
Cada elemento renderizado debe incluir una propiedad key única para mejorar el rendimiento de React.
## Formularios en React
Los formularios permiten capturar información ingresada por el usuario.
### Elementos comunes
- **Inputs**: Capturan texto o datos específicos.
- **Select**: Permite seleccionar opciones de una lista.
- **Textarea**: Se utiliza para textos largos.
- **Buttons**: Ejecutan acciones o envían formularios.
React normalmente utiliza componentes controlados mediante useState.
## Routing en React
El routing permite navegar entre páginas sin recargar el navegador.
### Librería principal
- **React Router DOM**: Administra la navegación dentro de la aplicación.
### Componentes importantes
- **BrowserRouter**: Envuelve la aplicación y habilita el enrutamiento.
- **Routes**: Contiene todas las rutas disponibles.
- **Route**: Define qué componente mostrar según la URL.
- **Link**: Permite navegar entre páginas sin recargar.
## Consumo de APIs
Las APIs permiten intercambiar información entre el frontend y un servidor.
### Operaciones comunes
- **GET**: Obtiene información desde el servidor.
- **POST**: Envía nuevos datos.
- **PUT**: Actualiza información existente.
- **DELETE**: Elimina información del servidor.
## Promesas y Async/Await
Las promesas permiten manejar tareas asíncronas como peticiones a servidores.
### Async/Await
Facilita escribir código asíncrono de forma más ordenada y legible usando funciones async y await.
## Obtención de Datos desde una API
React permite consumir datos externos y mostrarlos dinámicamente en la interfaz.
### Hooks utilizados
- **useEffect**: Ejecuta lógica cuando el componente se renderiza.
- **useState**: Almacena y actualiza datos obtenidos desde la API.
## Librería Axios
Es una librería utilizada para realizar solicitudes HTTP de manera sencilla.
### Ventajas
- **Sintaxis más limpia**: Simplifica las peticiones HTTP.
- **Manejo automático de JSON**: Convierte respuestas automáticamente.
- **Mejor control de errores**: Facilita detectar fallos en solicitudes.
- **Interceptores**: Permiten modificar solicitudes y respuestas antes de procesarlas.`,

    reflexion: `La clase permitió comprender cómo React facilita el desarrollo de aplicaciones dinámicas mediante eventos, renderizado condicional y manejo de listas. Además, el uso de formularios, routing y consumo de APIs demuestra cómo una aplicación frontend puede interactuar con servidores y mostrar información en tiempo real. Finalmente, herramientas como async/await y Axios ayudan a escribir código más organizado y eficiente para manejar operaciones asíncronas.`,

    bibliografia: [
      "Wieruch (2018). The Road to learn React. Leanpub."
    ]
  },

  /* Semana 7  */
  {
    titulo: "Semana 7",
    fecha:  "19/05/2026",

    notas: `## Hooks en React
Los hooks son funciones especiales de React que permiten manejar estados, efectos y otras funcionalidades dentro de componentes funcionales.
## useState
useState permite crear y actualizar estados dentro de un componente.
### Funciones principales
- Almacenar datos dinámicos.
- Actualizar la interfaz cuando cambia el estado.
- Manejar formularios, contadores y listas.
### Sintaxis básica
~~~javascript
js
const [valor, setValor] = useState(valorInicial)
~~~
## useEffect
useEffect permite ejecutar código cuando el componente se renderiza o cambia su estado.
### Usos comunes
- Consumir APIs.
- Ejecutar validaciones.
- Escuchar eventos.
- Ejecutar código al iniciar el componente.
### Funcionamiento
Se ejecuta automáticamente dependiendo de sus dependencias.
## useContext
useContext permite compartir información entre múltiples componentes sin enviar props manualmente.
### Funciones principales
- Compartir datos globales.
- Evitar el “prop drilling”.
- Manejar temas, usuarios o configuraciones.
## useRef
useRef permite almacenar referencias o valores sin provocar renderizados.
### Usos comunes
- Acceder a elementos del DOM.
- Mantener valores persistentes.
- Controlar inputs o temporizadores.
## useReducer
useReducer permite manejar estados complejos mediante acciones y reducers.
### Funciones principales
- Centralizar cambios de estado.
- Organizar lógica compleja.
- Trabajar con múltiples actualizaciones.
### Elementos básicos
- Estado
- Acción
- Reducer
## useCallback
useCallback memoriza funciones para evitar recrearlas en cada renderizado.
### Beneficios
- Optimiza rendimiento.
- Evita renderizados innecesarios.
- Mejora componentes reutilizables.
## useMemo
useMemo memoriza resultados de operaciones costosas.
### Funciones principales
- Optimizar cálculos complejos.
- Evitar ejecuciones repetidas.
- Mejorar rendimiento de la aplicación.
## Hooks Personalizados
Los hooks personalizados son funciones creadas por el desarrollador utilizando otros hooks de React.
### Características
- Reutilizan lógica entre componentes.
- Mejoran organización del código.
- Facilitan mantenimiento y escalabilidad.
### Regla principal
Deben iniciar con la palabra use.`,

    reflexion: `La clase permitió comprender la importancia de los hooks en React para desarrollar aplicaciones modernas y dinámicas. Hooks como useState y useEffect facilitan el manejo de estados y eventos del ciclo de vida, mientras que herramientas como useContext, useReducer y useMemo ayudan a organizar mejor la lógica y optimizar el rendimiento. Además, los hooks personalizados permiten reutilizar código y construir aplicaciones más escalables y mantenibles.`,

    bibliografia: [
      "Wieruch (2018). The Road to learn React. Leanpub."
    ]
  },
  /* Semana 9 */
  {
    titulo: "Semana 9",
    fecha:  "09/06/2026",

    notas: `## Tecnología Web Backend
Las tecnologías del lado del servidor (backend) se encargan de gestionar la lógica de negocio, procesar la información y comunicarse con las bases de datos para entregar respuestas estructuradas al cliente de forma segura y eficiente.

## Arquitectura de Aplicaciones Web
Las aplicaciones web modernas suelen organizarse en tres capas principales, distribuyendo así las responsabilidades del sistema:
- **Capa Cliente:** Es la interfaz con la que interactúa el usuario (Navegador, Aplicaciones móviles o de escritorio).
- **Capa Servidor (Backend):** Contiene el servidor web (Apache, Nginx), el servidor de aplicaciones (PHP, Node.js, Tomcat) y los mecanismos de caché (Redis, Memcached).
- **Capa de Datos:** Almacena la información del sistema mediante bases de datos relacionales (MySQL, PostgreSQL), no relacionales (MongoDB) o sistemas de archivos locales.

## Servidores Web y de Aplicaciones
### Apache HTTP Server
Servidor web de código abierto con una trayectoria consolidada en la industria. Procesa peticiones mediante un modelo basado en hilos o procesos individuales, integrando soporte para backend a través de módulos específicos como \`mod_php\`.
### Nginx
Servidor diseñado bajo una arquitectura asíncrona orientada a eventos. Destaca por su alta eficiencia gestionando múltiples conexiones simultáneas y es ampliamente utilizado como proxy inverso, balanceador de carga y caché.
### Apache Tomcat
Servidor de aplicaciones y contenedor de servlets desarrollado específicamente para el ecosistema Java. Implementa las especificaciones técnicas de Servlet y JavaServer Pages (JSP).
### Node.js (http)
Entorno de ejecución (runtime) para JavaScript en el servidor. Utiliza una arquitectura no bloqueante y un bucle de eventos que le permite actuar como servidor web ágil y de alto rendimiento.

## Funcionamiento del Server Side (SSR)
En el modelo de renderizado en el servidor (Server-Side Rendering), la aplicación procesa la solicitud del cliente, ejecuta la lógica necesaria consultando la base de datos y construye un documento HTML completo en el servidor antes de enviarlo de vuelta para su visualización.

### Ventajas del SSR
- **SEO óptimo:** Al entregar el documento HTML con contenido estructurado completo, los motores de búsqueda indexan la información con mayor facilidad.
- **Carga inicial rápida:** El cliente visualiza la estructura del sitio web sin necesidad de esperar a que se ejecute JavaScript localmente.
- **Robustez:** La aplicación básica puede funcionar sin depender del soporte de scripts complejos en el navegador del usuario.

### Desventajas del SSR
- **Carga del Servidor:** Requiere que el servidor procese y ensamble el contenido para cada petición recibida.
- **Refresco de página:** Cada navegación o acción suele implicar la recarga y descarga completa de un nuevo documento HTML.
- **Interactividad local reducida:** Depende de llamadas constantes al servidor para actualizar vistas dinámicas complejas.

## Lenguajes y Frameworks Backend
- **PHP:** Especializado en el desarrollo web dinámico y APIs. Sus frameworks más conocidos son *Laravel*, *Symfony* y *CodeIgniter*.
- **Java:** Orientado a sistemas empresariales robustos y microservicios con frameworks como *Spring Boot* y *Jakarta EE*.
- **Python:** Utilizado en desarrollo web, scripting y ciencia de datos. Cuenta con herramientas como *Django*, *FastAPI* y *Flask*.
- **Node.js:** Empleado en APIs en tiempo real y arquitecturas de microservicios. Utiliza frameworks como *Express*, *Fastify* y *NestJS*.
- **Ruby:** Enfocado en la agilidad del desarrollo web mediante la convención sobre configuración con *Ruby on Rails*.
- **C# / .NET:** Ecosistema empresarial de Microsoft ideal para aplicaciones corporativas de gran tamaño mediante *ASP.NET Core*.

## Aplicaciones Web con PHP
PHP es un lenguaje de desarrollo web que permite la inserción directa de sentencias dinámicas dentro de las estructuras de documentos HTML tradicionales.

### Sintaxis básica de PHP:
~~~php
<?php
$nombre = "Cristhian";
$edad = 21;
echo "Hola, $nombre";

// Array
$items = ["HTML", "CSS", "JS"];

// Función
function saludar($n) {
    return "Hola $n";
}
?>
~~~

### Integración en el HTML:
~~~php
<!DOCTYPE html>
<html>
<body>
  <?php foreach ($items as $item): ?>
    <li><?= $item ?></li>
  <?php endforeach; ?>
</body>
</html>
~~~
- **Variables:** Se declaran anteponiendo el símbolo \`$\`.
- **Superglobales:** Matrices asociativas integradas accesibles desde cualquier punto del programa (ej. \`$_GET\`, \`$_POST\`, \`$_SESSION\`).
- **Acceso a Datos:** Realizado habitualmente a través de abstracciones de bases de datos como \`PDO\` o \`MySQLi\`.

## Aplicaciones Web con JSP (JavaServer Pages)
JSP es una tecnología del ecosistema de Java diseñada para generar páginas web con contenido dinámico. El archivo \`.jsp\` es compilado a un Servlet por un servidor (como Tomcat) la primera vez que se solicita, ejecutando el código en el servidor y entregando HTML estándar al cliente.

### Sintaxis de JSP:
~~~jsp
<%@ page language="java" contentType="text/html" %>
<html>
<body>
<%
  String nombre = "Cristhian";
  int year = 2025;
%>
<h1>Hola, <%= nombre %></h1>
<p>Año: <%= year %></p>
</body>
</html>
~~~

### Etiquetas Principales de JSP:
- **\`<% ... %>\` (Scriptlet):** Bloque contenedor para escribir código fuente estándar en Java.
- **\`<%= ... %>\` (Expresión):** Evalúa un valor y lo inserta directamente en la respuesta HTML.
- **\`<%@ ... %>\` (Directiva):** Envía instrucciones del sistema al motor de JSP (como configuraciones de página e importaciones).
- **\`<%! ... %>\` (Declaración):** Declara variables o métodos globales que persistirán durante el ciclo de vida del Servlet.`,

    reflexion: `El estudio del backend en la tecnología web proporciona una perspectiva profunda sobre cómo se maneja la seguridad, persistencia y procesamiento de los datos antes de que estos lleguen a la pantalla del usuario. Analizar las diferencias entre servidores asíncronos como Nginx y de aplicaciones tradicionales como Tomcat permite evaluar con criterio técnico qué herramientas implementar según los requerimientos del proyecto. Además, comprender técnicas clásicas y efectivas como el renderizado del lado del servidor (SSR) a través de lenguajes como PHP o JSP ayuda a balancear de mejor manera los recursos del servidor y la optimización para motores de búsqueda (SEO) en las aplicaciones actuales.`,

    bibliografia: [
      "Saurabh, K. (2021). Cloud Computing: Unleashing the Power of Backend Frameworks. Wiley.",
      "Welling, L., & Thomson, L. (2016). PHP and MySQL Web Development (5th ed.). Addison-Wesley Professional."
    ]
  },
  /* Semana 10 */
  {
    titulo: "Semana 10",
    fecha:  "16/06/2026",

    notas: `## Lenguaje Python
Python es un lenguaje de programación de alto nivel, propósito general, interpretado y de tipado dinámico. Su filosofía de diseño prioriza la legibilidad del código. En Python, la indentación no es opcional, ya que define la estructura y el alcance de los bloques de código.

## Sintaxis Básica de Python
### Variables y Cadenas
Python cuenta con un tipado dinámico, lo que significa que no se requiere declarar explícitamente el tipo de dato de una variable al crearla.
~~~python
# Variables (tipado dinámico)
nombre = "Ana"       # tipo str
edad = 22            # tipo int
pi = 3.14            # tipo float
activo = True        # tipo bool

# Cadenas - métodos útiles
nombre.upper()       # Retorna "ANA"
nombre.lower()       # Retorna "ana"
nombre.strip()       # Elimina espacios en blanco iniciales y finales
f"Hola {nombre}"     # Interpolación mediante f-string
~~~

### Indentación y Comentarios
~~~python
# Comentario de una línea

"""
Comentario
multilínea (docstring)
"""

# La indentación define los bloques de código (estándar: 4 espacios)
if edad >= 18:
    print("Mayor de edad")
    print("Puede votar")
else:
    print("Menor de edad")
~~~

## Tipos de Datos Fundamentales
Python asigna automáticamente el tipo según el valor dado. Se puede emplear la función integrada \`type()\` para validar el tipo de dato de cualquier variable.

- **\`int\`:** Entero sin límite de tamaño (ej. \`42\`, \`-18\`, \`0\`).
- **\`float\`:** Número de punto flotante (ej. \`3.14\`, \`-0.5\`, \`1e10\`).
- **\`str\`:** Cadena de caracteres inmutable (ej. \`"hola"\`, \`'mundo'\`).
- **\`bool\`:** Subclase de entero para valores de verdad (\`True\`, \`False\`).
- **\`list\`:** Colección de elementos ordenada y mutable (ej. \`[1, "a", True]\`).
- **\`tuple\`:** Colección ordenada e inmutable (ej. \`(1, 2, 3)\`).
- **\`dict\`:** Colección de pares clave-valor ordenada (ej. \`{"a": 1, "b": 2}\`).
- **\`set\`:** Colección de valores únicos sin orden (ej. \`{1, 2, 3}\`).
- **\`None\`:** Indica la ausencia de valor o valor nulo (\`None\`).

## Colecciones: Listas, Tuplas y Diccionarios
Las colecciones son estructuras de datos esenciales para agrupar elementos en Python.

### Listas (Mutables)
Las listas permiten añadir, modificar y eliminar elementos tras su definición.
~~~python
frutas = ["manzana", "pera", "uva"]

frutas.append("mango")    # Agregar al final
frutas.remove("pera")     # Eliminar elemento específico
frutas[0]                 # Acceso por índice: "manzana"
frutas[-1]                # Acceso al último elemento: "uva"
frutas[1:3]               # Segmentación (slice)
len(frutas)               # Tamaño de la lista
~~~

### Tuplas (Inmutables)
Las tuplas se definen y no pueden ser modificadas (no admiten adición ni eliminación de elementos), lo que las hace seguras para datos fijos.
~~~python
punto = (10, 20)
colores = ("rojo", "verde", "azul")

punto[0]                  # Acceso por índice: 10
x, y = punto              # Desempaquetado de tuplas
~~~

### Diccionarios (Clave: Valor)
Colecciones ordenadas que asocian claves únicas con sus respectivos valores.
~~~python
persona = {"nombre": "Ana", "edad": 22, "activo": True}

persona["nombre"]          # Retorna "Ana"
persona.get("email", "N/A") # Retorna valor por defecto "N/A" si la clave no existe
persona["ciudad"] = "Lima"  # Añadir un nuevo par clave-valor
del persona["activo"]       # Eliminar clave específica
persona.keys()             # Obtener claves
persona.values()           # Obtener valores
persona.items()            # Obtener pares (clave, valor)
~~~

## Condicionales y Estructuras de Control
### Condicionales (if, elif, else)
Permiten desviar el flujo de ejecución basándose en expresiones booleanas.
~~~python
nota = 85

if nota >= 90:
    print("Excelente")
elif nota >= 70:
    print("Aprobado")
else:
    print("Reprobado")

# Operador ternario
resultado = "Aprueba" if nota >= 70 else "Reprueba"

# Match (Introducido en Python 3.10+)
match nota:
    case 100: print("Perfecto")
    case _: print("Otro")
~~~

### Bucles (for y while)
~~~python
# Bucle for con rango
for i in range(5):          # Itera de 0 a 4
    print(i)

# Iteración en colecciones
for fruta in frutas:
    print(fruta)

# enumerate para obtener índice y valor
for i, v in enumerate(frutas):
    print(i, v)

# Bucle while
n = 0
while n < 5:
    print(n)
    n += 1
    if n == 3:
        break       # Termina el bucle prematuramente
~~~

## Funciones en Python
Las funciones son objetos de primera clase. Soportan parámetros opcionales con valores predeterminados, argumentos posicionales variables (\`*args\`), argumentos de palabra clave variables (\`**kwargs\`) y retornos múltiples.

### Declaración, Parámetros y Retorno Múltiple
~~~python
# Definición básica y Docstring
def saludar(nombre, saludo="Hola"):
    """Docstring: Retorna un saludo personalizado."""
    return f"{saludo}, {nombre}!"

saludar("Ana")                    # Retorna "Hola, Ana!"
saludar("Ana", "Buenos días")     # Retorna "Buenos días, Ana!"

# Retorno de múltiples valores (como tupla)
def min_max(lista):
    return min(lista), max(lista)

minimo, maximo = min_max([3, 1, 7, 2])
~~~

### Argumentos Variables y Expresiones Lambda
~~~python
# *args (múltiples argumentos posicionales)
def suma(*numeros):
    return sum(numeros)

# **kwargs (múltiples argumentos nombrados)
def perfil(**datos):
    for k, v in datos.items():
        print(f"{k}: {v}")

# Lambda (función anónima)
doble = lambda x: x * 2
doble(5)                          # Retorna 10

# Uso de lambda con funciones de orden superior
nums = [3, 1, 4, 1, 5]
sorted(nums, key=lambda x: -x)
~~~

## Programación Orientada a Objetos (POO)
### Clases, Atributos e Instancias
La clase actúa como plantilla para construir objetos. El método \`__init__\` opera como constructor, y la palabra reservada \`self\` hace referencia a la instancia del objeto en proceso de ejecución.
~~~python
class Animal:
    reino = "Animalia"                                # Atributo de clase

    def __init__(self, nombre, sonido):
        self.nombre = nombre                          # Atributo de instancia
        self.sonido = sonido

    def hablar(self):                                 # Método de instancia
        print(f"{self.nombre} dice {self.sonido}")

    def __str__(self):                                # Representación como cadena
        return f"Animal({self.nombre})"

    def __del__(self):                                # Método destructor
        print(f"{self.nombre} eliminado")

# Instancia del objeto
perro = Animal("Rex", "guau")
perro.hablar()
~~~

### Herencia, Encapsulamiento y Polimorfismo
~~~python
# Herencia simple
class Perro(Animal):
    def __init__(self, nombre):
        super().__init__(nombre, "guau")              # Invocar constructor base

    def hablar(self):
        return f"{self.sonido.upper()}!"              # Sobreescritura de método

# Encapsulamiento (Atributos protegidos '_' y privados '__')
class Cuenta:
    def __init__(self, saldo):
        self.__saldo = saldo                          # Atributo privado

    @property
    def saldo(self):                                  # Getter
        return self.__saldo

    @saldo.setter
    def saldo(self, valor):                           # Setter
        if valor >= 0:
            self.__saldo = valor

# Polimorfismo
animales = [Perro("Rex"), Gato("Luna"), Pato("Donald")]
for a in animales:
    print(a.hablar())                                 # Distinta respuesta al mismo método
~~~

## Excepciones y Módulos
### Manejo de Excepciones
El control de fallos en ejecución se realiza mediante la estructura estructurada \`try/except/else/finally\`.
~~~python
try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("No se puede dividir entre 0")
except (TypeError, ValueError) as e:
    print(f"Error detectado: {e}")
else:
    print("Código ejecutado exitosamente")            # Si no hubo excepciones
finally:
    print("Instrucción finalizada")                   # Se ejecuta siempre

# Lanzamiento de excepciones
raise ValueError("Valor no permitido")
~~~

### Importación de Módulos
~~~python
# Importar módulo completo de la biblioteca estándar
import math
math.sqrt(16)

# Importaciones específicas
from datetime import datetime
from random import randint, choice

# Importación de un archivo/módulo local (utils.py)
from utils import formatear_fecha
~~~`,

    reflexion: `El aprendizaje del lenguaje Python proporciona una comprensión sólida sobre la programación bajo múltiples paradigmas, integrando de forma nativa la programación imperativa, funcional y orientada a objetos. Su sintaxis limpia y la obligación de la indentación facilitan la creación de código legible y mantenible. Comprender conceptos clave como la mutabilidad de listas frente a la inmutabilidad de tuplas, así como los mecanismos internos de encapsulamiento mediante dobles guiones bajos y decoradores de propiedad, permite optimizar recursos en el servidor y construir sistemas robustos que manejen excepciones y dividan su lógica en módulos reutilizables de forma eficiente.`,

    bibliografia: [
      "Lutz, M. (2013). Learning Python (5th ed.). O'Reilly Media.",
      "Van Rossum, G., & Drake, F. L. (2009). An Introduction to Python. Network Theory Ltd."
    ]
  },
  /* Semana 11 */
  {
    titulo: "Semana 11",
    fecha:  "23/06/2026",

    notas: `## Introducción a Django
Django es un framework de desarrollo web de alto nivel escrito en Python que fomenta el desarrollo rápido y el diseño limpio y pragmático. Sigue el principio "Don't Repeat Yourself" (DRY) y provee de forma integrada la mayoría de los componentes requeridos en aplicaciones modernas.

## Patrón MTV (Model-Template-View)
Django implementa una arquitectura basada en el patrón **MTV**, el cual es una variación del patrón clásico MVC (Modelo-Vista-Controlador):

- **Model (M):** Es la capa de acceso y definición de datos. Django utiliza un ORM (Object-Relational Mapper) que mapea clases de Python a tablas de bases de datos.
- **Template (T):** Es la capa de presentación. Corresponde al código HTML enriquecido con la sintaxis del motor de plantillas de Django para generar vistas dinámicas.
- **View (V):** Contiene la lógica de negocio. Recibe peticiones HTTP, interactúa con el Modelo para obtener datos, procesa la información y retorna una plantilla renderizada o una respuesta directa.

### Ciclo de vida de una petición en Django:
Petición HTTP $\\rightarrow$ URL Dispatcher (Controlador de Rutas) $\\rightarrow$ Vista (Lógica) $\\rightarrow$ Modelo (Consulta BD) $\\rightarrow$ Template (Renderizado HTML) $\\rightarrow$ Respuesta HTTP

## Instalación y Estructura del Proyecto
Django organiza el software en un proyecto global que contiene una o más aplicaciones modulares e independientes especializadas en tareas específicas (como autenticación, blog, etc.).

### Comandos de Creación y Mantenimiento
~~~bash
# Instalar Django usando pip
pip install django

# Crear la estructura base del proyecto
django-admin startproject miproyecto

# Crear una aplicación modular dentro del proyecto
python manage.py startapp blog

# Levantar el servidor de desarrollo local
python manage.py runserver

# Detectar cambios en los modelos y preparar archivos de migración
python manage.py makemigrations

# Aplicar las migraciones a la base de datos estructurada
python manage.py migrate
~~~

### Árbol de Directorios del Proyecto
~~~text
miproyecto/
├── manage.py         <- Interfaz de línea de comandos (CLI) del proyecto
├── miproyecto/
│   ├── settings.py   <- Configuración global del proyecto
│   ├── urls.py       <- Enrutador de URLs raíz
│   ├── wsgi.py       <- Interfaz de servidor web para despliegue (WSGI)
│   └── asgi.py       <- Interfaz de servidor asíncrono para despliegue (ASGI)
└── blog/             <- Aplicación modular creada
    ├── models.py     <- Definición de modelos (Base de Datos)
    ├── views.py      <- Lógica de procesamiento de peticiones (Vistas)
    ├── urls.py       <- Enrutamiento interno de la aplicación
    ├── admin.py      <- Configuración para el panel de administración
    └── templates/    <- Directorio de plantillas HTML
~~~

## Gestión de URLs y Vistas
Las rutas se configuran en el archivo \`urls.py\` para vincular patrones de URL con funciones o clases de vista específicas.

### Configuración del Enrutador (\`urls.py\`)
~~~python
from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.inicio, name="inicio"),
    path("blog/", include("blog.urls")),
    path("post/<int:id>/", views.detalle, name="detalle"),
]
~~~

### Vista Basada en Función (FBV)
~~~python
from django.shortcuts import render
from .models import Post

def inicio(request):
    posts = Post.objects.all()
    return render(request, "blog/inicio.html", {"posts": posts})
~~~

### Vista Basada en Clase (CBV)
~~~python
from django.views import View
from django.shortcuts import render
from .models import Post

class InicioView(View):
    def get(self, request):
        posts = Post.objects.all()
        return render(request, "inicio.html", {"posts": posts})
~~~

## Uso del Motor de Plantillas (Django Template Language - DTL)
El motor de plantillas permite inyectar lógica de control directamente sobre documentos HTML para estructurar vistas dinámicas con soporte para herencia, parciales y formatos predefinidos.

### Plantilla Base (\`base.html\`) - Plantilla Madre
~~~html
<!DOCTYPE html>
<html>
<head>
  <title>{% block title %}Sitio{% endblock %}</title>
</head>
<body>
  {% include "navbar.html" %}
  <main>
    {% block content %}
    {% endblock %}
  </main>
</body>
</html>
~~~

### Plantilla de Detalle (\`blog.html\`) - Hereda de la base
~~~html
{% extends "base.html" %}

{% block title %}Blog{% endblock %}

{% block content %}
  {% for post in posts %}
    <h2>{{ post.titulo }}</h2>
    <p>{{ post.contenido|truncatewords:20 }}</p>
    {% if post.publicado %}
      <span>Publicado</span>
    {% endif %}
  {% endfor %}
{% endblock %}
~~~

### Etiquetas y Filtros Comunes
Las **etiquetas** ejecutan lógica y control de flujo (\`{% %}\`), mientras que los **filtros** modifican la presentación de los datos antes de ser impresos (\`{{ | }}\`).

- **Etiquetas de Control:**
  - \`{% for x in lista %}\` / \`{% endfor %}\` : Bucle para iteración.
  - \`{% if condicion %}\` / \`{% endif %}\` : Condicional lógico.
  - \`{% extends "base.html" %}\` : Define herencia de plantillas.
  - \`{% include "partial.html" %}\` : Incluye bloques parciales reutilizables.
  - \`{% url "nombre_ruta" %}\` : Generación dinámica de rutas de navegación.

- **Filtros de Formato:**
  - \`{{ nombre|upper }}\` : Convierte texto a mayúsculas.
  - \`{{ texto|truncatewords:10 }}\` : Limita el texto a las primeras 10 palabras.
  - \`{{ fecha|date:"d/m/Y" }}\` : Formatea objetos de fecha y hora.
  - \`{{ precio|floatformat:2 }}\` : Redondea números de coma flotante a decimales fijos.
  - \`{{ lista|length }}\` : Retorna la cantidad de elementos en una colección.
  - \`{{ valor|default:"N/A" }}\` : Muestra un valor por defecto si el dato original está vacío.

## Modelos y API de Base de Datos (ORM)
Los modelos representan conceptualmente la estructura de las tablas de datos usando sintaxis nativa de Python. El ORM de Django traduce estas definiciones en sentencias SQL específicas según el motor configurado.

### Definición de un Modelo (\`models.py\`)
~~~python
from django.db import models

class Post(models.Model):
    titulo = models.CharField(max_length=200)
    contenido = models.TextField()
    fecha = models.DateTimeField(auto_now_add=True)
    publicado = models.BooleanField(default=False)
    autor = models.ForeignKey("auth.User", on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo

    class Meta:
        ordering = ["-fecha"]  # Ordenar de forma descendente por fecha
~~~

### Tipos de Campos Comunes
- **\`CharField\`**: Cadenas de texto de tamaño limitado. Requiere \`max_length\`.
- **\`TextField\`**: Campos de texto de gran tamaño sin un límite predefinido.
- **\`IntegerField\`**: Almacenamiento de valores numéricos enteros.
- **\`DateTimeField\`**: Fechas completas con horas.
- **\`BooleanField\`**: Valores lógicos de verdadero o falso.
- **\`ForeignKey\`**: Define relaciones muchos a uno (clave foránea).
- **\`ManyToManyField\`**: Define relaciones muchos a muchos.

### API de Consultas (QuerySets)
~~~python
# Lectura de datos
Post.objects.all()                           # Recupera todos los registros
Post.objects.filter(publicado=True)        # Filtra registros bajo condiciones
Post.objects.get(pk=1)                     # Obtiene un único registro (lanza excepción si no existe)
Post.objects.exclude(publicado=False)      # Excluye registros que coinciden con el criterio
Post.objects.order_by("-fecha")            # Ordena los resultados
Post.objects.filter(titulo__icontains="py") # Búsqueda de coincidencia parcial insensible a mayúsculas
Post.objects.count()                       # Cuenta los elementos resultantes

# Escritura, actualización y eliminación
p = Post.objects.create(titulo="Nuevo", contenido="...")
p.titulo = "Actualizado"
p.save()                                    # Guarda cambios en la base de datos
p.delete()                                  # Elimina el registro
~~~`,

    reflexion: `El estudio de Django y su patrón de diseño MTV permite valorar la eficiencia que proporcionan los frameworks robustos en el desarrollo de software. El uso de su ORM elimina la necesidad de escribir sentencias SQL complejas manualmente, disminuyendo la propensión a errores de sintaxis y previniendo vulnerabilidades críticas de seguridad como la inyección SQL de forma automática. Además, la separación modular de las aplicaciones y la implementación del motor de plantillas (DTL) con herencia promueven buenas prácticas de desarrollo, facilitando el mantenimiento y la escalabilidad de proyectos web complejos de manera organizada.`,

    bibliografia: [
      "Holovaty, A., & Kaplan-Moss, J. (2009). The Definitive Guide to Django: Web Development Done Right. Apress.",
      "Django Software Foundation. (2026). Django Documentation. https://docs.djangoproject.com/"
    ]
  },
  /* Semana 12 */
  {
    titulo: "Semana 12",
    fecha:  "30/06/2026",

    notas: `## Formularios, Admin, Middleware y Sesiones
Esta sección abarca los componentes avanzados de Django para gestionar la interacción segura con los usuarios: el sistema de validación de formularios, la personalización avanzada del panel de administración, la arquitectura de procesamiento por capas (Middleware) y el control de estado mediante autenticación y sesiones.

## Gestión de Formularios en Django
Django cuenta con un motor de formularios encargado de automatizar el renderizado HTML, la sanitización y la validación de los datos. Existen dos clases primordiales: \`Form\` (para formularios libres) y \`ModelForm\` (para formularios vinculados directamente a modelos de base de datos).

### Formulario Estándar (\`forms.py\`)
~~~python
from django import forms

class ContactoForm(forms.Form):
    nombre = forms.CharField(max_length=100, label="Nombre completo")
    email = forms.EmailField()
    mensaje = forms.CharField(widget=forms.Textarea, min_length=20)
    acepta_terminos = forms.BooleanField(required=True)
~~~

### Formulario Vinculado a Modelo (\`ModelForm\`)
~~~python
from django import forms
from django.forms import ModelForm
from .models import Post

class PostForm(ModelForm):
    class Meta:
        model = Post
        fields = ["titulo", "contenido", "publicado"]
        widgets = {
            "contenido": forms.Textarea(attrs={"rows": 5})
        }
        labels = {
            "titulo": "Título del post"
        }
~~~

### Renderizado de Formularios en Plantillas
~~~html
<form method="post">
  {% csrf_token %}
  {{ form.as_p }}      {# Renderiza automáticamente usando etiquetas <p> #}
  
  {# Opciones alternativas de renderizado: #}
  {# {{ form.as_table }} -> Renderiza como filas de tabla #}
  {# {{ form.as_ul }}    -> Renderiza como elementos de lista #}

  <button type="submit">Enviar</button>
</form>
~~~

## Validación y Sanitización de Datos
El ciclo de validación de un formulario inicia al invocar el método \`is_valid()\`. Si la información es correcta, se almacena de forma estructurada y sanitizada en el diccionario \`cleaned_data\`.

### Validadores en Campo e Individuales
~~~python
from django.core.validators import MinLengthValidator, RegexValidator

# Declaración de campo con validadores predefinidos
nombre = forms.CharField(
    validators=[
        MinLengthValidator(3),
        RegexValidator(r'^[a-zA-Z ]+$', 'Solo se permiten letras y espacios')
    ]
)
~~~

### Validación Personalizada y Validación Cruzada
~~~python
class ContactoForm(forms.Form):
    email = forms.EmailField()
    email_confirma = forms.EmailField()

    # Validación individual (clean_<campo>)
    def clean_email(self):
        email = self.cleaned_data["email"]
        if "spam" in email:
            raise forms.ValidationError("Dirección de correo no permitida")
        return email.lower() # Sanitización de datos

    # Validación cruzada (método clean global)
    def clean(self):
        cleaned_data = super().clean()
        email = cleaned_data.get("email")
        email_confirma = cleaned_data.get("email_confirma")

        if email != email_confirma:
            raise forms.ValidationError("Las direcciones de correo electrónico no coinciden")
        return cleaned_data
~~~

### Lógica del Formulario en Vistas
~~~python
from django.shortcuts import render, redirect
from .forms import ContactoForm

def contacto(request):
    if request.method == "POST":
        form = ContactoForm(request.POST)
        if form.is_valid():
            datos = form.cleaned_data # Obtener diccionario limpio
            enviar_email(datos)
            return redirect("gracias")
    else:
        form = ContactoForm() # Instancia vacía para GET
    return render(request, "contacto.html", {"form": form})
~~~

## Django Admin (Panel de Administración)
El panel administrativo de Django se genera de forma dinámica. La clase \`ModelAdmin\` proporciona utilidades avanzadas para la personalización de listados, búsquedas, filtros y conjuntos de edición.

### Registro y Personalización Básica (\`admin.py\`)
~~~python
from django.contrib import admin
from .models import Post

# Registro simple de un modelo
# admin.site.register(Post)

# Registro personalizado usando decoradores y clases ModelAdmin
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ["titulo", "autor", "fecha", "publicado"]
    list_filter = ["publicado", "fecha"]
    search_fields = ["titulo", "contenido"]
    ordering = ["-fecha"]
    list_per_page = 20
~~~

### Campos Calculados y Estructuración (Fieldsets)
~~~python
from django.utils.html import format_html

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ["titulo", "resumen_palabras", "estado_badge"]
    readonly_fields = ["fecha", "slug"]

    # Campo calculado no perteneciente al modelo físico
    @admin.display(description="Palabras", ordering="contenido")
    def resumen_palabras(self, obj):
        return len(obj.contenido.split())

    # Generación de elementos HTML dinámicos
    @admin.display(description="Estado")
    def estado_badge(self, obj):
        color = "green" if obj.publicado else "red"
        return format_html(
            '<span style="color:{}">{}</span>',
            color,
            "Publicado" if obj.publicado else "Borrador"
        )

    # Segmentación del formulario de edición en el panel
    fieldsets = (
        ("Contenido", {
            "fields": ("titulo", "contenido")
        }),
        ("Metadatos", {
            "fields": ("autor", "publicado", "fecha"),
            "classes": ("collapse",)  # Ocultable mediante JS
        }),
    )
~~~

## Middleware en Django
Un **Middleware** es un componente intermedio que intercepta y procesa las peticiones de forma secuencial antes de llegar a la vista, y las respuestas antes de ser enviadas de vuelta al navegador.

### Ciclo de Ejecución de Middlewares:
Petición HTTP $\\rightarrow$ SecurityMiddleware $\\rightarrow$ SessionMiddleware $\\rightarrow$ AuthenticationMiddleware $\\rightarrow$ CsrfViewMiddleware $\\rightarrow$ Vista de la App $\\rightarrow$ (Retorno de respuesta en orden inverso)

### Implementación de un Middleware Personalizado
~~~python
class LogRequestMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Código ejecutado antes de que la petición llegue a la vista
        print(f"Petición entrante: {request.method} {request.path}")

        response = self.get_response(request) # Llama a la vista o al siguiente middleware

        # Código ejecutado antes de devolver la respuesta al cliente
        print(f"Respuesta generada: {response.status_code}")
        return response
~~~

## Sesiones, Autenticación y Autorización
### Manejo de Sesiones
Las sesiones permiten almacenar el estado e información específica de un cliente de manera persistente entre distintas peticiones HTTP.
~~~python
# Almacenar información en la sesión del usuario
request.session["carrito"] = [1, 2, 3]
request.session["usuario_id"] = 42

# Obtener información de la sesión de manera segura
carrito = request.session.get("carrito", [])

# Eliminar una clave específica de la sesión
if "carrito" in request.session:
    del request.session["carrito"]

# Destruir la sesión completa del usuario actual
request.session.flush()
~~~

### Control de Flujo de Autenticación
~~~python
from django.contrib.auth import authenticate, login, logout

# Lógica de inicio de sesión seguro
def iniciar_sesion(request):
    user = authenticate(
        request, 
        username=request.POST["user"], 
        password=request.POST["pass"]
    )
    if user is not None:
        login(request, user)
        return redirect("dashboard")

# Lógica de cierre de sesión
def cerrar_sesion(request):
    logout(request)
    return redirect("inicio")
~~~

### Autorización y Protección de Vistas
Las vistas pueden protegerse mediante el uso de decoradores especializados en el lado del servidor y condicionales en el motor de plantillas.
~~~python
from django.contrib.auth.decorators import login_required, permission_required

# Restringir acceso solo a usuarios autenticados
@login_required(login_url="/login/")
def dashboard(request):
    return render(request, "dashboard.html")

# Restringir acceso basándose en permisos de modelo específicos
@permission_required("blog.add_post", raise_exception=True)
def crear_post(request):
    pass
~~~

### Control de Permisos en Plantillas HTML
~~~html
{% if user.is_authenticated %}
  <p>Bienvenido, {{ user.username }}</p>
  <a href="/dashboard/">Mi Cuenta</a>
{% endif %}

{% if perms.blog.add_post %}
  <a href="/post/nuevo/">Añadir nuevo artículo</a>
{% endif %}
~~~`,

    reflexion: `El estudio de los componentes avanzados de Django revela la robustez de su arquitectura y su enfoque prioritario en la seguridad informática. La estructura de validación en dos pasos de los formularios (is_valid() y clean) asegura que los datos sean sanitizados antes de interactuar con la persistencia, previniendo entradas maliciosas de forma sistemática. De igual forma, comprender el ciclo de vida de los Middlewares y la gestión de sesiones junto con la autenticación permite estructurar aplicaciones web con políticas estrictas de control de acceso, garantizando la integridad de la información en entornos de producción complejos.`,

    bibliografia: [
      "Elman, J., & Lavin, M. (2018). Lightweight Django. O'Reilly Media.",
      "Mele, A. (2022). Django 4 by Example. Packt Publishing."
    ]
  },
  /* Semana 13 */
  {
    titulo: "Semana 13",
    fecha:  "07/07/2026",

    notas: `## Diseño de APIs RESTful
REST (Representational State Transfer) es un estilo arquitectónico diseñado para estructurar servicios web de forma estandarizada. Una API RESTful expone recursos identificados de forma unívoca a través de URLs y utiliza métodos HTTP definidos para operar sobre ellos.

## Principios Fundamentales de REST
- **Stateless (Sin Estado):** Cada petición HTTP enviada por el cliente debe contener toda la información requerida para procesarla. El servidor no almacena estado ni sesiones sobre el cliente entre peticiones.
- **Client-Server (Cliente-Servidor):** Existe una separación clara entre la interfaz de usuario (Cliente) y la lógica de negocio y persistencia (Servidor), permitiendo el desarrollo independiente de ambas partes.
- **Uniform Interface (Interfaz Uniforme):** Los recursos se identifican mediante URLs de manera uniforme. La manipulación de los datos se realiza a través de representaciones (JSON, XML) y verbos HTTP estándar.
- **Cacheable (Cacheabilidad):** Las respuestas enviadas por el servidor deben indicar explícitamente si son susceptibles de ser almacenadas en caché, mejorando el rendimiento y reduciendo la carga del sistema.
- **Layered System (Sistema por Capas):** El cliente interactúa con la API sin necesidad de conocer si la comunicación se realiza directamente con el servidor de aplicación o mediante intermediarios (proxies, cachés o balanceadores de carga).
- **HATEOAS:** Las respuestas del servidor deben proveer hipervínculos dinámicos que guíen al cliente sobre las acciones disponibles que puede realizar a continuación.

## Diseño de Endpoints RESTful
Los recursos se deben nombrar siempre en plural y en minúsculas, usando nombres en lugar de verbos. Las acciones quedan definidas por el método HTTP utilizado sobre la URL del recurso:

| Método HTTP | Endpoint | Descripción | Código de Estado Común |
| :--- | :--- | :--- | :--- |
| **GET** | \`/api/posts/\` | Listar la colección de recursos (posts) | \`200 OK\` |
| **POST** | \`/api/posts/\` | Crear un nuevo recurso | \`201 Created\` |
| **GET** | \`/api/posts/{id}/\` | Obtener un recurso específico por su identificador | \`200 OK\` |
| **PUT** | \`/api/posts/{id}/\` | Reemplazar la totalidad de un recurso específico | \`200 OK\` |
| **PATCH** | \`/api/posts/{id}/\` | Actualizar parcialmente un recurso específico | \`200 OK\` |
| **DELETE** | \`/api/posts/{id}/\` | Eliminar un recurso específico | \`204 No Content\` |

## Serialización de Modelos
La serialización es el proceso de convertir instancias de modelos de Python en tipos de datos nativos intercambiables (como formato JSON/XML). La deserialización realiza el proceso inverso, validando los datos antes de guardarlos. Django REST Framework (DRF) incluye \`ModelSerializer\` para automatizar esta tarea basándose en los modelos definidos.

### Definición de un Serializador (\`serializers.py\`)
~~~python
from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["id", "titulo", "contenido", "fecha"]
        # fields = "__all__"
        # read_only_fields = ["fecha"]
~~~

### Uso de Serializadores en Vistas
~~~python
# Serializar: De Objeto/Modelo Python a JSON
post = Post.objects.get(pk=1)
serializer = PostSerializer(post)
data_json = serializer.data  # Retorna el diccionario listo para JSON: {'id': 1, 'titulo': '...'}

# Deserializar: De JSON a Objeto/Modelo Python
serializer = PostSerializer(data=request.data)
if serializer.is_valid():
    serializer.save()  # Crea el registro o lo actualiza si ya existía
~~~

## Filtrado, Paginación y Rate Limiting
DRF facilita la protección de los endpoints mediante mecanismos integrados para estructurar y proteger la API:

### Filtrado y Búsqueda por Parámetros
~~~python
# Query params comunes en endpoints
# GET /api/posts/?publicado=true
# GET /api/posts/?autor=1
# GET /api/posts/?search=python

# Integración en clases de Vista
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend

class PostListView:
    filter_backends = [SearchFilter, DjangoFilterBackend]
    search_fields = ["titulo"]
    filterset_fields = ["publicado"]
~~~

### Configuración de Paginación (\`settings.py\`)
~~~python
REST_FRAMEWORK = {
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.PageNumberPagination",
    "PAGE_SIZE": 10
}
~~~
*Ejemplo de respuesta paginada:*
~~~json
{
  "count": 100,
  "next": "/api/posts/?page=2",
  "previous": null,
  "results": [...]
}
~~~

### Control de Consumo (Rate Limiting / Throttling)
Permite configurar el número de peticiones permitidas en base a intervalos de tiempo para prevenir abusos en la API.
~~~python
REST_FRAMEWORK = {
    "DEFAULT_THROTTLE_CLASSES": [
        "rest_framework.throttling.AnonRateThrottle",
        "rest_framework.throttling.UserRateThrottle"
    ],
    "DEFAULT_THROTTLE_RATES": {
        "anon": "100/day",
        "user": "1000/day"
    }
}
~~~

## ViewSets y Routers
La combinación de \`ModelViewSet\` y \`DefaultRouter\` abstrae por completo el mapeo de URLs dinámicas para operaciones CRUD bajo estándares REST.

### CRUD Automático con \`ModelViewSet\`
~~~python
from rest_framework.viewsets import ModelViewSet
from .models import Post
from .serializers import PostSerializer

class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    # Genera automáticamente los métodos de lectura, creación, edición y borrado
~~~

### Enrutamiento Automático mediante Routers
~~~python
from rest_framework.routers import DefaultRouter
from .views import PostViewSet

router = DefaultRouter()
router.register("posts", PostViewSet)

# urls.py
urlpatterns = [
    path("api/", include(router.urls)),
]

# Genera dinámicamente las siguientes rutas:
# /api/posts/        -> Métodos GET (Listar) y POST (Crear)
# /api/posts/{id}/   -> Métodos GET (Ver), PUT (Reemplazar), PATCH (Modificar), DELETE (Borrar)
~~~

## AJAX, CSRF y CORS: Seguridad e Integración
Al consumir endpoints desde un navegador, es fundamental proteger la transmisión de datos frente a ataques y configurar los accesos de origen.

### Petición Asíncrona (AJAX con Fetch API)
~~~javascript
// Petición HTTP asíncrona enviando datos en JSON con cabecera CSRF
fetch("/api/posts/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": getCookie("csrftoken")
    },
    body: JSON.stringify(data)
});
~~~

### Protección CSRF (Cross-Site Request Forgery)
Django previene ataques de falsificación de peticiones en sitios cruzados requiriendo un token en operaciones de modificación del estado del servidor.
~~~html
{# En vistas con renderizado de plantillas de Django #}
{% csrf_token %}
~~~
~~~python
# En Django REST Framework (DRF)
from rest_framework.authentication import SessionAuthentication

# Al utilizar SessionAuthentication, DRF fuerza automáticamente la validación del CSRF Token
~~~

### Configuración de CORS (Cross-Origin Resource Sharing)
Mecanismo de seguridad que permite o restringe el acceso a los recursos de la API desde dominios ajenos al del servidor de origen.
~~~bash
# Instalación del paquete de cabeceras CORS
pip install django-cors-headers
~~~
~~~python
# settings.py
INSTALLED_APPS += ["corsheaders"]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    # Debe posicionarse antes de CommonMiddleware
    "django.middleware.common.CommonMiddleware",
]

# Lista blanca de dominios que pueden consumir la API
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "https://mifrontend.com"
]
~~~`,

    reflexion: `El estudio de las arquitecturas orientadas a servicios y el estándar RESTful destaca la importancia del desacoplamiento en el software de cara a la escalabilidad de sistemas modernos. El uso de Django REST Framework permite estructurar de forma clara la comunicación cliente-servidor a través de Serializadores que actúan como validadores de contratos de datos estrictos en JSON. Por otra parte, la implementación de herramientas como ViewSets y Routers reduce la sobrecarga de código de control y repetitivo en el backend, permitiendo concentrar el esfuerzo en las reglas de negocio, la seguridad informática y la optimización de los servicios expuestos.`,

    bibliografia: [
      "Richardson, L., & Ruby, S. (2013). RESTful Web Services. O'Reilly Media.",
      "Django REST Framework Documentation. (2026). https://www.django-rest-framework.org/"
    ]
  },
  /* Semana 14 */
  {
    titulo: "Semana 14",
    fecha:  "14/07/2026",

    notas: `## Microservicios con Django
La arquitectura de microservicios divide un sistema de software complejo en un conjunto de servicios pequeños, desacoplados e independientes. Cada uno se enfoca en una única responsabilidad, maneja su propia persistencia (base de datos) y posee un ciclo de despliegue y desarrollo autónomo.

## Monolito vs Microservicios
- **Arquitectura Monolítica:** Centraliza toda la lógica de negocio, interfaz de usuario, acceso a datos y componentes de soporte dentro de un único proyecto y despliegue integrado (un único bloque deployable).
- **Arquitectura de Microservicios:** Descompone el sistema en servicios dedicados (ej. Auth Service, Product Service, Order Service, Payment Service) que operan autónomamente y se comunican a través de redes locales o colas de mensajería.

### Ventajas de los Microservicios
- **Escalado independiente:** Se puede escalar horizontalmente solo el servicio que experimente mayor carga.
- **Diversidad tecnológica:** Posibilidad de usar diferentes tecnologías, lenguajes o bases de datos según la necesidad de cada servicio.
- **Aislamiento de fallos:** El fallo crítico en un componente (ej. Notificaciones) no necesariamente interrumpe la operatividad de los demás.
- **Autonomía de equipos:** Facilita el desarrollo descentralizado mediante equipos de trabajo más pequeños y especializados.

### Desventajas de los Microservicios
- **Complejidad operacional:** Requiere una infraestructura robusta para el despliegue, enrutamiento, monitoreo y balanceo de carga.
- **Latencia de red:** La comunicación inter-servicio se realiza a través de llamadas de red, lo que introduce tiempos de latencia adicionales.
- **Consistencia de datos:** Dificultad para mantener transacciones atómicas distribuidas, requiriendo patrones de consistencia eventual.
- **Mayor costo inicial:** Requiere mayor infraestructura base en comparación con un entorno monolítico tradicional.

## Arquitectura con API Gateway
El **API Gateway** actúa como el punto de entrada unificado para todos los clientes (aplicaciones móviles, SPA, etc.). Su propósito principal es recibir las peticiones entrantes, enrutarlas de forma transparente hacia el microservicio correspondiente, centralizar la autenticación (JWT), gestionar el logging y aplicar límites de consumo (Rate Limiting).

En esta arquitectura se implementa el patrón **Database per Service**, donde cada microservicio tiene acceso exclusivo a su propia base de datos (ej. DB Auth, DB Products, DB Orders), garantizando el desacoplamiento físico de la información.

## Comunicación entre Servicios
Los microservicios deben intercambiar datos de forma estructurada mediante dos enfoques de comunicación:

### 1. Comunicación Síncrona (REST / HTTP)
El servicio emisor realiza una llamada HTTP directa a otro servicio y bloquea el hilo de ejecución esperando una respuesta inmediata.
~~~python
# Ejemplo de comunicación síncrona: Order Service consulta a Product Service
import requests

def verificar_stock(product_id):
    response = requests.get(
        f"http://product-service:8002/api/products/{product_id}/"
    )
    # Retorna un booleano determinando la disponibilidad de inventario
    return response.json()["stock"] > 0
~~~

### 2. Comunicación Asíncrona (Message Queues)
Los servicios se comunican publicando eventos a través de un gestor de colas de mensajes (como *RabbitMQ* o *Apache Kafka*). Es un modelo desacoplado y altamente resiliente ante fallos.
- **Flujo:** Order Service (produce evento de orden creada) $\\rightarrow$ Message Broker (RabbitMQ) $\\rightarrow$ Notification Service (consume evento y despacha correo).

## Contenedores con Docker
Docker permite empaquetar cada microservicio junto con su entorno de ejecución, bibliotecas y variables de configuración para asegurar un comportamiento reproducible independientemente de la máquina donde se despliegue.

### Archivo de Configuración de Imagen (\`Dockerfile\`)
~~~dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
~~~

### Orquestación de Entornos Locales (\`docker-compose.yml\`)
El uso de \`docker-compose\` permite configurar, enlazar y levantar múltiples contenedores locales con un único comando.
~~~yaml
services:
  auth:
    build: ./auth-service
    ports: ["8001:8000"]
    environment:
      DATABASE_URL: postgres://user:pass@db:5432/auth_db

  products:
    build: ./product-service
    ports: ["8002:8000"]

  db:
    image: postgres:15
    environment:
      POSTGRES_DB: microdb
~~~

### Comandos Esenciales de Docker
- \`docker build\` : Construye una imagen de Docker basada en el Dockerfile.
- \`docker run\` : Crea e inicia un contenedor a partir de una imagen.
- \`docker ps\` : Lista los contenedores en ejecución en la máquina local.
- \`docker compose up\` : Levanta y conecta todos los servicios definidos en el archivo yaml.

## Orquestación con Kubernetes
En entornos de producción masivos, Kubernetes (K8s) administra el ciclo de vida, despliegue, escalado y la salud de los contenedores mediante configuraciones declarativas.

### Conceptos Clave en K8s
- **Pod:** Es la unidad de ejecución mínima de Kubernetes, la cual puede contener uno o más contenedores que comparten almacenamiento y red local.
- **Deployment:** Define el estado deseado de la aplicación (cantidad de réplicas e imágenes a desplegar) y gestiona las actualizaciones automáticas.
- **Service:** Expone un conjunto de Pods bajo una IP única y estable, sirviendo como balanceador de carga interno o externo.

### Despliegue de un Microservicio (\`deployment.yaml\`)
~~~yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: auth-service
spec:
  replicas: 3          # Mantiene tres instancias simultáneas del servicio
  selector:
    matchLabels:
      app: auth-service
  template:
    metadata:
      labels:
        app: auth-service
    spec:
      containers:
        - name: auth
          image: auth-service:latest
          ports:
            - containerPort: 8000
~~~

## Seguridad, Monitoreo y Escalado en Producción
Para garantizar la resiliencia y resguardar el sistema bajo escenarios de alta disponibilidad, se deben considerar los siguientes factores:

### Seguridad
- **JWT Tokens:** Gestión de tokens para autenticación sin estado en la comunicación interna.
- **API Keys:** Permiten identificar y autorizar el consumo por cliente.
- **Rate limiting:** Previene ataques de denegación de servicio (DoS) limitando la tasa de llamadas.
- **HTTPS / TLS:** Cifrado obligatorio para la transmisión de datos tanto en redes externas como internas.

### Monitoreo
- **Prometheus:** Herramienta enfocada en la recolección activa de métricas de rendimiento del sistema.
- **Grafana:** Panel de control visual para representar de forma gráfica las métricas capturadas.
- **ELK Stack:** Suite dedicada al almacenamiento, indexación y análisis de logs centralizados.
- **Health Checks:** Endpoint de diagnóstico (ej. \`/health\`) para monitorear el estado operativo del servicio.

### Escalado
- **Horizontal (Out):** Adición de nuevas instancias (Pods) para distribuir la carga entrante.
- **Vertical (Up):** Incremento de recursos físicos (CPU y memoria RAM) a los contenedores existentes.
- **Auto-scaling:** Ajuste automático del número de réplicas basado en la demanda actual de CPU o tráfico.
- **Load Balancer:** Distribución equitativa de las solicitudes de red entre las réplicas activas del servicio.`,

    reflexion: `El análisis de la arquitectura de microservicios evidencia un cambio significativo en la forma de diseñar software, priorizando el desacoplamiento para mejorar la escalabilidad y tolerancia a fallos del sistema. Si bien este enfoque introduce complejidades técnicas ausentes en los monolitos tradicionales —como el enrutamiento a través de API Gateways, la sincronización asíncrona mediante colas de mensajes y la consistencia eventual de bases de datos distribuidas—, la incorporación de herramientas como Docker y Kubernetes para la containerización y orquestación proporciona un marco de control eficiente. Esto permite asegurar que las aplicaciones backend modernas respondan dinámicamente a demandas extremas de rendimiento y seguridad.`,

    bibliografia: [
      "Newman, S. (2015). Building Microservices: Designing Fine-Grained Systems. O'Reilly Media.",
      "Burns, B. (2016). Designing Distributed Systems. O'Reilly Media."
    ]
  },
    /* Semana 15 */
  {
    titulo: "Monografía",
    fecha:  "06/10/2026",

    notas: `
    [img: /assets/img/regresion.png | Tecnologías Web Básicas]
    `,

    reflexion: ``,

    bibliografia: [
    ]
  },
];