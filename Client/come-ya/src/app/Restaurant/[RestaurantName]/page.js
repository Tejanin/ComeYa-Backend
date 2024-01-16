"use client"
import * as React from 'react';
import { useState} from 'react'
import styles from './RestaurantName.module.css'
import { Image, Heading, Text, Box, Card, CardHeader, CardBody, CardFooter, Stack, Divider, ButtonGroup, Button, Badge } from '@chakra-ui/react'
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import { FormControlLabel, Checkbox } from '@mui/material';
import { StarRateRounded } from "@mui/icons-material"
import { Replay } from "@mui/icons-material"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import WindowDimensions from '../../../components/WindowDimensions/WindowDimensions'

let theme = createTheme({
  palette: {
    primary: {
      main: '#C62828',
    },
    secondary: {
      main: '#C62828',
    },
  },
});


function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks = [
  {
    value: 0,
  },
  {
    value: 20,
  },
  {
    value: 37,
  },
  {
    value: 95,
  },
];

const IOSSlider = styled(Slider)(({ theme }) => ({
  //color: theme.palette.mode === 'dark' ? '#3880ff' : '#3880ff',
  height: 2,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    '&:focus, &:hover, &.Mui-active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#C62828',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&::before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    '&.MuiSlider-markActive': {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  },
}));


export default function RestaurantMenu({params}) {
  const items = [
    {
      id: 1,
      food: 'PAPA SUPER SUPREMA',
      category: 'vegana',
      description: 'Papas fritas crujientes, Queso fundido, Salsa rosada especial, pechuga de pollo, pierna de cerdo, tocineta y puerro.',
      price: 750,
      image:
        'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      restaurant: 'La Barra (Atalaya)',
    },
    {
      id: 2,
      food: 'Combo Mega Stacker',
      category: 'no vegetariana',
      description: 'Pan, doble carne whopper, tocino, queso y salsa stacker, acompañado de papas regular y Coca-Cola 500ml',
      price: 600,
      image:
        'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      restaurant: 'Burger King',
    },
    {
      id: 3,
      food: 'Big Box Plus',
      category: 'no vegetariana',
      description: '1 Sandwich Doble Crunch + 1 Papa frita Peq + 1 Biscuit + 1 Pieza de pollo + 1 Refresco de botella Peq',
      price: 499.9,
      image:
        'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      restaurant: 'KFC',
    },
    {
      id: 4,
      food: 'Ensalada César',
      category: 'vegetariana',
      description: 'Lechuga romana, crutones, queso parmesano y aderezo César. Añade pollo a la parrilla opcionalmente.',
      price: 350,
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      restaurant: 'Fresh Greens',
    },
    {
      id: 5,
      food: 'Sushi Fusión',
      category: 'mariscos',
      description: 'Rollos de sushi variados con rellenos frescos y sabrosos. Acompañado de salsa de soja y jengibre encurtido.',
      price: 900,
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      restaurant: 'Sakura Sushi',
    },
    {
      id: 6,
      food: 'Pizza Suprema',
      category: 'no vegetariana',
      description: 'Mozzarella, pepperoni, champiñones, aceitunas, jamón y salsa de tomate en una masa crujiente y deliciosa.',
      price: 550,
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      restaurant: 'Pizza Italia',
    },
    {
      id: 7,
      food: 'Tacos Al Pastor',
      category: 'no vegetariana',
      description: 'Tacos de cerdo adobado con piña, cebolla y cilantro. ¡Auténtico sabor mexicano!',
      price: 180,
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      restaurant: 'Taquería El Rey',
    },
    {
      id: 8,
      food: 'Wrap Vegano',
      category: 'vegana',
      description: 'Wrap relleno de verduras frescas, hummus, aguacate y aderezo de tahini. Acompañado de batatas fritas.',
      price: 480,
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      restaurant: 'Green Bites',
    },
    {
      id: 9,
      food: 'Ramen de Mariscos',
      category: 'mariscos',
      description: 'Sopa de ramen con caldo de mariscos, fideos, camarones, almejas y cebollín. ¡Una explosión de sabores!',
      price: 680,
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      restaurant: 'Tokyo Ramen House',
    },
    {
      id: 10,
      food: 'Hamburguesa BBQ',
      category: 'no vegetariana',
      description: 'Hamburguesa con carne a la parrilla, queso cheddar, cebolla caramelizada, tocino y salsa BBQ. Servida con papas fritas.',
      price: 620,
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      restaurant: 'Smokehouse Grill',
    },
    {
      id: 11,
      food: 'Burrito Vegetariano',
      category: 'vegetariana',
      description: 'Burrito relleno de frijoles, arroz, aguacate, pimientos y salsa fresca. ¡Una opción deliciosa y saludable!',
      price: 420,
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      restaurant: 'Burritos Verdes',
    },
    {
      id: 12,
      food: 'Sándwich de Pavo',
      category: 'no vegetariana',
      description: 'Sándwich con pechuga de pavo, queso suizo, lechuga, tomate y mostaza. Servido con papas al horno.',
      price: 380,
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      restaurant: 'Fresh Deli',
    },
    {
      id: 14,
      food: 'Pollo a la Brasa',
      category: 'no vegetariana',
      description: 'Pollo entero asado a la brasa con papas doradas y salsa de ají amarillo. Acompañado de ensalada fresca.',
      price: 850,
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      restaurant: 'La Barra (Atalaya)',
    },
    {
      id: 15,
      food: 'Lomo Saltado',
      category: 'no vegetariana',
      description: 'Salteado de carne de res con cebolla, tomate, ají amarillo y papas fritas. Servido con arroz.',
      price: 780,
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      restaurant: 'La Barra (Atalaya)',
    },
    {
      id: 16,
      food: 'Whopper Doble',
      category: 'no vegetariana',
      description: 'Doble carne de res, queso, lechuga, tomate, cebolla, pepinillos y salsa de la casa en un pan suave con ajonjolí.',
      price: 680,
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      restaurant: 'Burger King',
    },
    {
      id: 17,
      food: 'Nuggets de Pollo',
      category: 'no vegetariana',
      description: 'Porción de nuggets de pollo crujientes. Acompañados de salsa a elección: barbacoa, mostaza o miel.',
      price: 350,
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      restaurant: 'Burger King',
    },
    {
      id: 18,
      food: 'Filete de Pescado',
      category: 'mariscos',
      description: 'Filete de pescado fresco empanizado y frito. Servido con papas fritas y salsa tártara.',
      price: 690,
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      restaurant: 'KFC',
    },
    {
      id: 19,
      food: 'Wrap de Pollo',
      category: 'no vegetariana',
      description: 'Wrap de pollo a la parrilla con lechuga, tomate, queso cheddar y salsa ranchera. Acompañado de nachos.',
      price: 420,
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      restaurant: 'KFC',
    },
    {
      id: 20,
      food: 'Café Latte',
      category: 'bebidas',
      description: 'Café espresso con leche vaporizada y una fina capa de espuma. La opción perfecta para los amantes del café.',
      price: 180,
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      restaurant: 'Starbucks',
    },
    {
      id: 21,
      food: 'Frappuccino de Vainilla',
      category: 'bebidas',
      description: 'Mezcla cremosa de café, leche y hielo con esencia de vainilla. Decorado con crema batida y jarabe de vainilla.',
      price: 250,
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      restaurant: 'Starbucks',
    },
    {
      id: 22,
      food: 'Subway Melt',
      category: 'no vegetariana',
      description: 'Submarino con pechuga de pavo, jamón, tocino, queso suizo, lechuga, tomate y aderezos a elección.',
      price: 540,
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      restaurant: 'Subway',
    },
    {
      id: 23,
      food: 'Ensalada Veggie Delight',
      category: 'vegetariana',
      description: 'Ensalada fresca con lechuga, espinaca, tomate, pepino, pimientos y aderezo a elección. Opción saludable y deliciosa.',
      price: 320,
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      restaurant: 'Subway',
    },
  ];


  const restaurantes = [
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
      Name: "Subway",
      Logo: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      Description: "Subway es una cadena de restaurantes especializada en la venta de sándwiches y ensaladas. Es conocida por su opción de personalizar los sándwiches según las preferencias del cliente.",
      Rating: 4.1,
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
  ];



    const property = {
        imageUrl: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
      }


  const restaurant = restaurantes.find(item => item.Id == params.RestaurantName);

  const [sliderValue, setSliderValue] = useState(50)

  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  }
  

  const windowDimensions = WindowDimensions();

    return(
        <div className={styles.mainConteiner}>
            <Image 
              src='https://bit.ly/2Z4KKcF'
              width='100vw'
              height={200}
              objectFit='cover'
              fallbackSrc={`https://via.placeholder.com/${windowDimensions.width}x200`}
            />

            <div className={styles.tittle}>
              {restaurant ? (
                <>
                  <Heading justifyContent={"flex-start"}>{restaurant.Name}</Heading>
                  <Box display='flex' flexDirection='row' alignItems='center'>
                    <StarRateRounded sx={{ color: "#ffc107" }} />
                    <Text py='2'>4.2</Text>
                  </Box> 
                </>
              ):null}
            </div>


            <Box className={styles.bodyConteiner} flexDirection={{ base: 'column', sm: 'row' }}>
                <div className={styles.filter}>
                  {/*Icono de limpiar*/}
                  <Box display={'flex'} justifyContent={'flex-end'}>
                    <ThemeProvider theme={theme}>
                      <Tooltip title="Reestablecer" placement='top' arrow>
                        <button>
                          <Replay sx={{ color: '#C62828' }} />
                        </button>
                      </Tooltip>
                    </ThemeProvider>
                  </Box>
                  <Heading as='h4' size='md'>Precios</Heading>
                    <Box>
                      <ThemeProvider theme={theme}>
                        <IOSSlider
                          aria-label="ios slider"
                          defaultValue={60}
                          marks={marks}
                          valueLabelDisplay="auto"
                        />
                      </ThemeProvider>
                    </Box>


                  {/*Slider Bar  
                    <Box pt={6} pb={2}>
                      <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
                        <SliderMark value={0} {...labelStyles}>
                          0%
                        </SliderMark>
                        <SliderMark value={25} {...labelStyles}>
                          25%
                        </SliderMark>
                        <SliderMark value={50} {...labelStyles}>
                          50%
                        </SliderMark>
                        <SliderMark value={75} {...labelStyles}>
                          75%
                        </SliderMark>
                        <SliderMark value={100} {...labelStyles}>
                          100%
                        </SliderMark>
                        <SliderMark
                          value={sliderValue}
                          textAlign='center'
                          bg='blue.500'
                          color='white'
                          mt='-10'
                          ml='-5'
                          w='12'
                        >
                          {sliderValue}%
                        </SliderMark>
                        <SliderTrack>
                          <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                      </Slider>
                    </Box>
                    */}

                  <Heading as='h4' size='md'>Tipo</Heading>
                  <ThemeProvider theme={theme}>
                    <FormControlLabel 
                      control={<Checkbox sx={{
                        color: '#D81B60',
                        '&.Mui-checked': {
                          color: '#C62828',
                        },
                      }}/>} label="Vegetariana"/>
                    <FormControlLabel 
                    control={<Checkbox sx={{
                      color: '#D81B60',
                      '&.Mui-checked': {
                        color: '#C62828',
                      },
                    }}/>} label="Vegana"/>
                    <FormControlLabel 
                    control={<Checkbox sx={{
                      color: '#D81B60',
                      '&.Mui-checked': {
                        color: '#C62828',
                      },
                    }}/>} label="Bebida"/>
                    <FormControlLabel 
                    control={<Checkbox sx={{
                      color: '#D81B60',
                      '&.Mui-checked': {
                        color: '#C62828',
                      },
                    }}/>} label="Marisco"/>
                  </ThemeProvider>
                  <Text>Vegetariana</Text>
                  <Text>Vegana</Text>
                  <Text>Bebida</Text>
                  <Text>Marisco</Text>
                  
                    


                </div>

                <div className={styles.menu}>
                  <Card maxW='sm' 
                  overflow='hidden' 
                  variant='elevated'
                  transition="box-shadow 0.3s ease-in-out"
                  _hover={{
                    boxShadow: 'lg', // Aumenta la sombra en el hover>
                  }}
                  >
                    <Image src={property.imageUrl} alt={property.imageAlt} />
                    <Box p='4'>
                      <Box display='flex' alignItems='center'>
                          <Badge borderRadius='full' px='2' mr='2' colorScheme='teal'>
                            Vegano
                          </Badge>
                          <Heading as='h4' size='md' fontWeight='semibold' noOfLines={1}>El Tremendo (Big Burrito)</Heading>
                      </Box>
                      <Box>
                          <Text fontSize='lg'>DOP$1,900</Text>
                      </Box>
                    </Box>
                  </Card>
                    {items.map((item, index) => {
                      return(
                        <div key={index}>
                          <Card 
                            maxW='sm' 
                            overflow='hidden' 
                            variant='elevated'
                            transition="box-shadow 0.3s ease-in-out"
                            _hover={{
                              boxShadow: 'lg', // Aumenta la sombra en el hover>
                            }}
                          >
                            <Image src={property.imageUrl} alt={property.imageAlt} objectFit='cover'/>

                            <Box p='4'>
                              <Box display='flex' alignItems='center'>
                                  <Badge borderRadius='full' px='2' mr='2' colorScheme='teal'>
                                    {item.category}
                                  </Badge>
                                  <Heading as='h4' size='md' fontWeight='semibold' noOfLines={1}>{item.food}</Heading>
                              </Box>
                              <Box>
                                <Text fontSize='lg'>DOP${item.price}</Text>
                              </Box>
                            </Box>
                          </Card>
                        </div>
                      )
                    })}
                </div>
            </Box>
        </div>
    )
}