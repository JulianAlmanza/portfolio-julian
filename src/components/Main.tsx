import Image from 'next/image'
import style from "@/styles/Main.module.css";

function Main() {
    return (
        <section id='main' className={style.main}>
            <div className={style.contain}>
                <div className={style.text}>                    
                    <h3 className={style.title}>¡Hola, Soy <span className={style.span}>Yo!</span></h3>
                    <h1 className={style.name}>Julian Almanza</h1>
                    <h3 className={style.t}>Y soy un&nbsp;<span className={style.opc}>FullStack Developer</span></h3>
                    <p className={style.description}>de Colombia. Con habilidades en diferentes Lenguajes de Programación 💻⭐</p>
                </div>
                <div className={style.links}>
                    <a className={style.link} href="https://www.facebook.com/julian.almanza1930"><i className={style.bx + ' bx bxl-facebook'} ></i></a>
                    <a className={style.link} href="https://www.instagram.com/julian30_07/"><i className={style.bx + ' bx bxl-instagram-alt'} ></i></a>
                    <a className={style.link} href="https://github.com/JulianAlmanza"><i className={style.bx + ' bx bxl-github'} ></i></a>
                    <a className={style.link} href="https://www.linkedin.com/in/julian-almanza-dev/"><i className={style.bx +' bx bxl-linkedin'}></i></a>
                </div>
                <a className={'btn'} href="/dates/CV.pdf" download="CV-Julian-Almanza.pdf">Descargar CV</a>
            </div>
            <div className={style.image}>
                <Image className={style.img} src={"/image/IMG20230128161913.jpg"} alt='' layout='fill'></Image>
            </div>
        </section>
    )
}

export default Main