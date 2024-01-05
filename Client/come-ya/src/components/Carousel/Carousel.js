"use client"
import { Heading, Text,  Image, IconButton } from '@chakra-ui/react'
import { ChevronLeft, ChevronRight, StarRateRounded } from '@mui/icons-material';
import { Box } from '@mui/material';
import Link from 'next/link';
import ImageLoading from '../ImageLoading/ImageLoading';
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './Carousel.module.css'

//Objeto de ejemplo
const images = [
  {
    label: 'Oakland Bay Bridge',
    imgPath:
      'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    price: 1200,
    restaurant: 'KFC',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    price: 300,
    restaurant: 'Burger King',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    price: 120,
    restaurant: 'Jade Teriyaki',
  },
  {
    label: 'Goč',
    imgPath:
      'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    price: 12,
    restaurant: 'Hummus Sabores del Desierto',
  },
  {
    label: 'Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    price: 12,
    restaurant: 'KFC',
  },
  {
    label: 'Chicharrón Light Josefa Brea Chicharrón LightJosefaBrea',
    imgPath:
      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    price: 1222,
    restaurant: 'Chicharrón Light Josefa Brea Chicharrón LightJosefaBrea',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    price: 12,
    restaurant: 'KFC',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    price: 12,
    restaurant: 'ChicharrónLightJosefaBreaChicharrón LightJosefaBreaChicharrón Light Josefa BreaChicharrónLightJosefaBrea',
  },
];

const restaurants = [
  {
    Id: 1,
    Name: "Burger King",
    Logo: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    Description: "Burger King es una cadena de restaurantes de comida rápida que se especializa en hamburguesas y otros productos similares.  Actualmente, Burger King es la segunda cadena de hamburguesas más grande de los Estados Unidos.",
    Rating: 4.5,
  },
  {
    Id: 2,
    Name: "McDonald's",
    Logo: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    Description: "Burger King es una cadena de restaurantes de comida rápida que se especializa en hamburguesas y otros productos similares.  Actualmente, Burger King es la segunda cadena de hamburguesas más grande de los Estados Unidos.",
    Rating: 4.2,
  },
  {
    Id: 3,
    Name: "Pizza Hut",
    Logo: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    Description: "Pizza Hut es una cadena internacional de restaurantes de pizzas y comida italiana. Ofrece una variedad de pizzas, pasta, ensaladas y otros platos deliciosos.",
    Rating: 4.9,
  },
  {
    Id: 4,
    Name: "Starbucks",
    Logo: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    Description: "Starbucks es una cadena global de cafeterías que ofrece una amplia variedad de bebidas a base de café, té, y aperitivos. Es conocida por su ambiente acogedor y café de alta calidad.",
    Rating: 4.7,
  },
  {
    Id: 4.0,
    Name: "Subway",
    Logo: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    Description: "Subway es una cadena de restaurantes especializada en la venta de sándwiches y ensaladas. Es conocida por su opción de personalizar los sándwiches según las preferencias del cliente.",
    Rating: 4.1,
  },
  {
    Id: 5,
    Name: "KFC, Kentucky Fried Chicken ffffffffffff fffffffff",
    Logo: "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    Description: "KFC, Kentucky Fried Chicken, es una cadena de restaurantes de comida rápida especializada en pollo frito. Sus recetas originales y crujientes son muy populares en todo el mundo.",
    Rating: 4.3,
  },
  {
    Id: 6,
    Name: "Domino's Pizza",
    Logo: "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    Description: "Domino's Pizza es una cadena de pizzerías conocida por su entrega rápida y su variedad de pizzas. Ofrece opciones de personalización y entrega a domicilio.",
    Rating: 2.9,
  },
  {
    Id: 7,
    Name: "Taco Bell",
    Logo: "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    Description: "Taco Bell es una cadena de restaurantes de comida rápida especializada en comida tex-mex, como tacos, burritos y nachos. Es conocida por su menú sabroso y asequible.",
    Rating: 4.0,
  },
  {
    Id: 8,
    Name: "Starbucks",
    Logo: "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    Description: "Starbucks es una cadena global de cafeterías que ofrece una amplia variedad de bebidas a base de café, té y aperitivos. Es conocida por su ambiente acogedor y café de alta calidad.",
    Rating: 4.7,
  },
  {
    Id: 9,
    Name: "Dunkin'",
    Logo: "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    Description: "Dunkin' es una cadena de cafeterías y donas conocida por sus cafés, donas y productos horneados. Ofrece una selección variada de bebidas y opciones para el desayuno.",
    Rating: 3.2,
  },
  {
    Id: 10,
    Name: "Chick-fil-A",
    Logo: "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    Description: "Chick-fil-A es una cadena de restaurantes de comida rápida especializada en pollo. Es famosa por sus sándwiches de pollo y opciones de menú de alta calidad.",
    Rating: 4.6,
  },
]

export default class Carousel extends Component {
  constructor(props) {
      /*Props disponibles
          titulo = string
      */
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        swipeToSlide: true,
        arrows: false,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    };
    return (
      <div>
        {this.props.titulo == "Restaurantes" ? (
          <>
            <div className={styles.topConteiner}>
              <div className={styles.tittle}>
                <Heading as='h3' size='lg'>{this.props.titulo}</Heading>
              </div>
              <div className={styles.buttons} style={{ textAlign: "center" }}>
                <button className={styles.verTodo}>
                  {/*<Link href={`/${this.props.titulo}`}>
                    Ver todo
                  </Link>*/}
                  <Link href="/Restaurant/">
                    Ver todo
                  </Link>
                </button>
                <IconButton isRound={true} colorScheme='gray' onClick={this.previous}>
                  <ChevronLeft fontSize="large" />
                </IconButton>
                <IconButton isRound={true} colorScheme='gray' onClick={this.next}>
                  <ChevronRight fontSize="large" />
                </IconButton>
              </div>
            </div><Slider ref={c => (this.slider = c)} {...settings}>
              {restaurants.map((restaurant, index) => {
                return (
                  <div key={index}>
                    <div className={styles.item}>
                      <Image
                        src={restaurant.Logo}
                        width={350}
                        height={175}
                        borderRadius={'5%'}
                        objectFit='cover'
                        loader={<ImageLoading />}
                        alt={restaurant.Name} />
                      <div className={styles.info}>
                        <Text fontSize='xl' noOfLines={1}>{restaurant.Name}</Text>
                        <Box display='flex' flexDirection='row' alignItems='flex-end'>
                          <StarRateRounded sx={{ color: "#ffc107" }} />
                          <Text>{restaurant.Rating}</Text>
                        </Box> 
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </>
        ):(
          <>
            <div className={styles.topConteiner}>
              <div className={styles.tittle}>
                <Heading as='h3' size='lg'>{this.props.titulo}</Heading>
              </div>
              <div className={styles.buttons} style={{ textAlign: "center" }}>
                <button className={styles.verTodo}>
                  {/*<Link href={`/${this.props.titulo}`}>
                    Ver todo
                  </Link>*/}
                  <Link href="/Search/">
                    Ver todo
                  </Link>
                </button>
                <IconButton isRound={true} colorScheme='gray' onClick={this.previous}>
                  <ChevronLeft fontSize="large" />
                </IconButton>
                <IconButton isRound={true} colorScheme='gray' onClick={this.next}>
                  <ChevronRight fontSize="large" />
                </IconButton>
              </div>
            </div>
            <Slider ref={c => (this.slider = c)} {...settings}>
              {images.map((image, index) => {
                return (
                  <div key={index}>
                    <div className={styles.item}>
                      <Image
                        src={image.imgPath}
                        width={350}
                        height={175}
                        borderRadius={'5%'}
                        objectFit='cover'
                        loader={<ImageLoading />}
                        alt={image.label} />
                      <Text fontSize='xl' noOfLines={1}>{image.label}</Text>
                      <div className={styles.info}>
                        <Text fontSize='sm' noOfLines={1}>{image.restaurant}</Text>
                        <Text fontSize='md' align={'right'}>RD${image.price}</Text>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider></>
          )
        }
      </div>
    );
  }
}
