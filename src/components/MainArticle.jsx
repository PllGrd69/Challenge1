import imgMobile from '../assets/images/image-web-3-mobile.jpg'
import imgDesktop from '../assets/images/image-web-3-desktop.jpg'


export const MainArticle = () => {
  return (
    <section>
      <picture>
        <source media="(max-width:640px)" srcSet={imgMobile} />
        <source media="(max-width:641px)" srcSet={imgDesktop} />
        <img src={imgMobile} alt="Imagen Articulo Principal"/>
      </picture>
    </section>
  )
}