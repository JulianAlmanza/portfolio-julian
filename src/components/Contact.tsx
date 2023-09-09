import style from '@/styles/Contac.module.css';

function Contact() {
  return (
    <section id='contact' className={style.contact}>
      <h2 className={style.title}>Contact <span className={style.span}>Me!</span></h2>
      <form action="" className={style.form}>
        <div className={style.box}>
          <input className={style.input} type="text" placeholder='Nombre Completo' />
          <input className={style.input} type="email" placeholder='Correo Electronico - example@gmail.com' />
        </div>
        <div className={style.box}>
          <input className={style.input} type="number" placeholder='Numero de Celular' />
          <input className={style.input} type="text" placeholder='Asuno del Correo' />
        </div>

        <textarea className={style.msg} placeholder='Su Mensaje'></textarea>
        <a className={'btn'} href="">Enviar  Mensaje</a>
      </form>
    </section>
  )
}

export default Contact