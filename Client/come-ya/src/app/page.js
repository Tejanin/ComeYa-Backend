"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { Heading, Text } from '@chakra-ui/react'
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
                  titulo={'Ofertas de hoy'}
                  //Proximanente: props para filtrar fotos
                  />
              </div>
          </div>

          <div className={styles.category}>
              <div className={styles.categoryBottomSide}>
                <Carousel
                  titulo={'Restaurantes'}/>
              </div>
          </div>

          <div className={styles.category}>
              <div className={styles.categoryBottomSide}>
                <Carousel
                  titulo={'Combos especiales'}/>
              </div>
          </div>

          <div className={styles.category}>
              <div className={styles.categoryBottomSide}>
                <Carousel
                  titulo={'Bebidas'}/>
              </div>
          </div>

          

          <div>
            <Heading as='h3' size='lg'>Restaurantes</Heading>
          </div>

          <div>
            <Heading as='h3' size='lg'>Ofertas de hoy</Heading>
          </div>

          <div>
            <Heading as='h3' size='lg'>Bebidas&</Heading>
          </div>

          <div>
            <Heading as='h3' size='lg'>Ofertas de hoy</Heading>
          </div>


          <div>
            <Link href="/Screens/Post">
              Poner espera&
            </Link>
          </div>
          
        </div>
        
      </div>
    </main>
  )
}
