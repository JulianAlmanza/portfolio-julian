import style from "@/styles/Services.module.css";

function Services() {
  return (
    <section id='services' className={style.services}>
        <div>
            <h2 className={style.title}>Our <span className={style.span}>Services</span></h2>
        </div>
        <div className={style.box}>
            <div className={style.list}>
                <h3 className={style.subtitle}>Desarrollo Web</h3>
                <p className={style.description}>Diseño y desarrollo de aplicaciones web responsivas y fáciles de usar utilizando marcos y tecnologías Front-End modernos.</p>                
            </div>
            <div className={style.list}>
                <h3 className={style.subtitle}>Desarrollador de Back-end</h3>
                <p className={style.description}>Creación de aplicaciones del lado del servidor robustas y escalables utilizando lenguajes como Node.js o Python, e integración con bases de datos como MySQL o MongoDB.</p>                
            </div>
            <div className={style.list}>
                <h3 className={style.subtitle}>Desarrollo de API</h3>
                <p className={style.description}>Crear API (Interfaces de programación de aplicaciones) eficientes y seguras para facilitar la comunicación entre diferentes componentes de software o servicios de terceros.</p>                
            </div>
            <div className={style.list}>
                <h3 className={style.subtitle}>Gestión de Base de Datos</h3>
                <p className={style.description}>Diseñar y administrar bases de datos para garantizar un almacenamiento y recuperación de datos eficiente, así como optimizar las consultas para mejorar el rendimiento.</p>                
            </div>
            <div className={style.list}>
                <h3 className={style.subtitle}>Implementación y DevOps</h3>
                <p className={style.description}>Implementar aplicaciones web en entornos de producción, configurar servidores e implementar canales de integración/implementación continua (CI/CD).</p>                
            </div>
            <div className={style.list}>
                <h3 className={style.subtitle}>Colaboración y Comunicación</h3>
                <p className={style.description}>Trabajar en estrecha colaboración con equipos multifuncionales, comunicar los requisitos y el progreso del proyecto de manera efectiva y participar en procesos de desarrollo ágiles.</p>                
            </div>
        </div>
    </section>
  )
}

export default Services