import styles from './page.module.css'
import Carousel from '../components/Carousel/Carousel'
import MainCarousel from '../components/MainCarousel/MainCarousel'

export default function Home() {
  return(
    <main>
      <div className={styles.homeConteiner}>
        <div className={styles.mainCarousel}>
          <MainCarousel />
        </div>

        <div className={styles.categoriesConteiner}>
          <div className={styles.category}>
              <div className={styles.categoryBottomSide}>
                <Carousel
                  titulo={'Restaurantes'}
                />
              </div>
          </div>

          <div className={styles.category}>
              <div className={styles.categoryBottomSide}>
                <Carousel
                  titulo={'Ofertas de hoy'}
                />
              </div>
          </div>

          <div className={styles.category}>
              <div className={styles.categoryBottomSide}>
                <Carousel
                  titulo={'Combos especiales'}
                />
              </div>
          </div>

          <div className={styles.category}>
              <div className={styles.categoryBottomSide}>
                <Carousel
                  titulo={'Bebidas'}
                />
              </div>
          </div>
        </div>
      </div>
    </main>
  )
}
