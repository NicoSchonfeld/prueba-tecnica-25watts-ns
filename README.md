![Logo](https://i.ibb.co/hMGTZqQ/25-Watts-logo.png)

# Prueba tecnica de 25Watts para FullStack Developer 👩🏻‍💻

¡Hola! Me llamo Nicolás Schönfeld y esta es mi prueba tecnica para aplicar a 25Watts como FullStack Developer.

Por lo general en mis proyectos utilizo Next.js y librerias para añadir estilos a la web como tailwind css ya que me facilitan el trabajo.

Más de mis proyectos:
[Proyectos](https://nicoschonfeld.vercel.app/)

Sin enbargo en esta ocasion quise respetar las consignas de la prueba y hacerlo lo mas simple posible.

## Requisitos:

Fecha de Entrega: 3 días luego de su envío
Formato de entrega: Repositorio público en Github / Bitbucket.
Vista previa de la landing
[Adobe XD](...) (Enlace oculto).

- Los comentarios están en la plataforma XD (haces clic en el icono de diálogo y se despliega los pin de cada punto, cualquier duda que tengas nos avisas).
- Debajo del ícono de diálogo vas a encontrar el panel de preferencias con los assets, colores y tipografías que utiliza el diseño, y si haces clic en cada parte del documento vas a poder ver su estilo y contenido particular.

**Resumen:**

- Desarrollar landing page en React (o en su defecto Angular) y el Backend (libre elección, puede ser node, php, python, java, etc)
- Sitio diseñado en 12 columnas.
- El contenido de la sección Slider y Products debe ser obtenida de manera dinámica (asíncrona mediante fetch o algún método que maneje request a su backend).
- En la sección Products mostrar 3 de una cantidad total (12 o 15) elementos de manera random consumidos desde el backend.
- Validar campos de formulario.
- Los enlaces del menú superior deben funcionar con efecto de smooth scrolling.

Evaluaremos en términos de prolijidad y diseño responsive (mobile - tablet - desktop). Se le entrega diseño desktop y usted tiene que hacer adaptación a tablet y mobile.

## Tecnologias usadas en la prueba

**Cliente:** React.js, Css, Framer-Motion, React-Icons, React-Scroll, Swiper, React-router-dom, React-hook-form.

**Servidor:** Node.js, Express.js.

## Deploy

Frontend:
[25Watts-NicoSchonfeld](https://prueba-tecnica-25watts-ns.vercel.app/)

Backend:
[25Watts-Backend-NicoSchonfeld](...)

## Correr proyecto en localhost

Clonar repositorio.

```bash
  git clone https://github.com/NicoSchonfeld/prueba-tecnica-25watts-ns
```

Acceder a la carpeta del proyecto.

```bash
  cd [nombre de la carpeta del proyecto]
```

Instalar dependencias en las dos carpetas, tanto la de Frontend como la de Backend.

```bash
  cd ./Frontend || cd ./Backend
  npm install
```

En frontend correr comando para ejecutar en modo desarrollador.

```bash
  npm run dev
```

En backend correr comando para ejecutar en modo desarrollador.

```bash
  npm run dev
```

## Back-End

Para realizar el Backend utilice Node y Express.js.

El proyecto esta organizado de la siguiente manera.

![App Screenshot](https://i.ibb.co/SnvkWkn/Carpetas-Backend.png)

- **SRC** es carpeta raiz del proyecto.
- **main.js** es donde se inicia la aplicación con Express llamando a las rutas para realizar los endpoints.
- **router** contiene las rutas de la `/api`.
- **controllers** contiene las funciones para cada request de las rutas.

## API

#### Obtener productos

```http
  GET /api/products
```

#### Obtener información para la sección Slider.

```http
  GET /api/slider
```

Aclarar que los datos que se obtienen y se envian a la api, son datos hardcodeados y que no se guardan en ningun lado.

Para guardar datos que se envian de un Front-End podemos utilizar bases de datos.

En mi caso me gusta usar MySQL.

Para integrar MySQL en el proyecto de Express, podemos instalar `npm i mysql2` y hacer la coneccion a la base de datos desde express creando tablas y guardando datos.

#### Enviar datos del formulario

```http
  POST /api/contact
```

## Front-End

Para realizar el Frontend utilice Vite.js como herramienta de compilación para trabajar con React.js.

El proyecto esta organizado de la siguiente manera.

![App Screenshot](https://i.ibb.co/894yhv3/Carpetas-Frontend.png)

- **SRC** es carpeta raiz del proyecto.
- **assets** que contiene todas las imagenes e iconos de la web.
- **components** contienen componentes como `Navbar.jsx`, `Footer.jsx` y el icono de 25Watts transformado en componente `LogoWatts.jsx`.
- **page** contiene todas las secciones de la landing page.
- **styles** contiene todos los estilos de la página utlilizando `[name].module.css` para evitar confictos con otros archivos.
- **App.jsx** contiene todos los componenes que se muestran en la web.
- **main.jsx** es el archivo donde se carga la aplicación de React.

## Fetch

Para obtener la información del Backend para la sección Slider y Products utilice `Fetch`.
Por lo general casi siempre suelo utilizar librerias para hacer solisitudes HTTP como axios.

En el componente `App.jsx` se crean dos estados con `useState` que guardan la información obtenida de manera asíncrona mediante `Fetch` que se ejecuta cada vez que inicia la página gracias a un `useEffect`.

La información de los estados se pasan como `props` a los componentes para mostrarlos en sus secciones.

```javascript
const [products, setProducts] = useState([]);
const [slider, setSlider] = useState([]);

const getProducts = async () => {
  const res = await fetch("http://localhost:8989/api/products");
  const data = await res.json();

  setProducts(data);
};

const getSlider = async () => {
  const res = await fetch("http://localhost:8989/api/slider");
  const data = await res.json();

  setSlider(data);
};

useEffect(() => {
  getProducts();
  getSlider();
}, []);
```

## lazy loading

Utilice `lazy` y `Suspense` para optimizar los componentes de la página.

```javascript
import React, { Suspense, lazy, useEffect, useState } from "react";
import Loading from "./pages/Loading/Loading";

const Navbar = lazy(() => import("./components/Navbar"));
const HomePage = lazy(() => import("./pages/Home/HomePage"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const Services = lazy(() => import("./pages/Services/Services"));
const Products = lazy(() => import("./pages/Products/Products"));
const MoreDetails = lazy(() => import("./pages/MoreDetails/MoreDetails"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  const [products, setProducts] = useState([]);
  const [slider, setSlider] = useState([]);

  const getProducts = async () => {
    const res = await fetch("http://localhost:8989/api/products");
    const data = await res.json();

    setProducts(data);
  };

  const getSlider = async () => {
    const res = await fetch("http://localhost:8989/api/slider");
    const data = await res.json();

    setSlider(data);
  };

  useEffect(() => {
    getProducts();
    getSlider();
  }, []);

  // En caso de agregar un loading a la página de inicio, activar el fallback en línea 39.

  return (
    <Suspense /* fallback={<Loading />} */>
      <Navbar />
      <HomePage slider={slider} />
      <AboutUs />
      <Services />
      <Products cards={products} />
      <MoreDetails />
      <Contact />
      <Footer />
    </Suspense>
  );
};

export default App;
```

## Sitio diseñado en 12 columnas

En este caso obte por utilizar `Flexbox` para estilar la web y hacerla responsive ya que es un modelo que se dominar.

En algunas secciones como `Services` y `Footer` se utilizo `CSS Grid`.

## En la sección Products mostrar 3 de una cantidad total (12 o 15) elementos de manera random consumidos desde el backend.

Esta funcion esta creada en el backend, a la hora de enviar los Products al cliente antes se ejecuta una funcion que devuelve los datos del array de manera random.

El cliente obtiene los datos y los muestra en un carrusel limitando a una cantidad de 3 objetos.
A medida que la página se va achicando, los objetos se van adaptando de manera responsive.

## Backend

```javascript
const products = [...]

const randomProducts = (products) => {
  for (let i = products?.length - 1; i > 0; i--) {
    const randomNum = Math.floor(Math.random() * (i + 1));

    const posicionArray = products[i];

    products[i] = products[randomNum];
    products[randomNum] = posicionArray;
  }

  return products;
};

export const getProducts = (req, res) =>
  res.status(200).json(randomProducts(products));

```

## Frontend

```javascript
{
  cards?.slice(0, 3).map((item, index) => (
    <div key={index} className={styles.cards}>
      <h3 className={styles.titleCards}>{item.title}</h3>

      <ul className={styles.listCards}>
        <li className={styles.itemsCards}>{item.item1}</li>
        <li className={styles.itemsCards}>{item.item2}</li>
        <li className={styles.itemsCards}>{item.item3}</li>
        <li className={styles.itemsCards}>{item.item4}</li>
      </ul>

      <div className={styles.decorationCards}></div>
    </div>
  ));
}
```

## Carrusel

Para hacer el carrusel tanto para el Slider del Home como para los Products, utilize la libreria `Swiper`.

Elegí esta opcion ya que es una libreria que te permite hacer sliders de una manera muy simple con pocal lineas de código.

## Ejemplo

```javascript
<Swiper
  className={styles.containerCards}
  navigation={{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }}
  modules={[Navigation]}
  spaceBetween={200}
  slidesPerView={1}
  breakpoints={{
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 200,
    },
  }}
>
  {cards?.map((item, index) => (
    <SwiperSlide key={index} className={styles.cards}>
      <h3 className={styles.titleCards}>{item.title}</h3>

      <ul className={styles.listCards}>
        <li className={styles.itemsCards}>{item.item1}</li>
        <li className={styles.itemsCards}>{item.item2}</li>
        <li className={styles.itemsCards}>{item.item3}</li>
        <li className={styles.itemsCards}>{item.item4}</li>
      </ul>

      <div className={styles.decorationCards}></div>
    </SwiperSlide>
  ))}
</Swiper>
```

## Validar campos de formulario.

Para validar los campos del formulario utilice la libreria `react-hook-form`.

## Los enlaces del menú superior deben funcionar con efecto de smooth scrolling.

Por lo general cuando queremos hacer el efecto smooth en una landing, solo hay que colocar una etiqueta `a` con su ruta `#home`

y una seccion de la página con un id con la misma ruta `#home`

```javascript
<a href='#home'>Home</a>


<section id='#home'>
    //...
</section>
```

Esto hace que al darle click al enlace nos lleve a la seccion que le especificamos. Si a esto en nuesto index.css le añádimos esta propiedad `scroll-behavior: smooth;`, la transision entre secciones va a tener un efecto smooth y se va a ver mas fluido.

## ¿Porque no hice eso?

La razon de por que no lo hice de esa manera, es porque al dividir la pagina en componentes no me tomaba el id de cada seccion. Para lograrlo tenia que guardar el id y pasarlo entre componentes y era todo muy tedioso.

## Mi solución.

Para solucionar esto utilice la libreria `React-Scroll` que me permite solo con importar el componente `Link` y `Element` realizar este efecto.

El componente `Link` recibe como parametro la el id o la 'ruta' de la sección y más parametros como duracion de la transision etc...

El componente `Element` recibe el nombre/id que le asignamos a enlace.
Para que funcione, el componente `Element` tiene que envolver la seccion a la que queramos ir y el componente `Link` funciona como una etiqueta `<a>`

```javascript
// Navbar
<nav>
    <Link to={'home'} {/* ...props */}>Home</Link>
    <Link to={'about'} {/* ...props */}>Home</Link>
</nav>


// PageSections
<>
    <Element name='home'>
        <section>
            // ...
        </section>
    </Element>

    <Element name='about'>
        <section>
            // ...
        </section>
    </Element>
</>

```
