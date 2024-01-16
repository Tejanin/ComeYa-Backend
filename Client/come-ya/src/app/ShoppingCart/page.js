'use client'
import styles from "./ShoppingCart.module.css"
import { useState, useEffect } from 'react';
import { Card, CardBody, Heading, Text, Box, Image, Button } from '@chakra-ui/react'
import { FormControl, Select, MenuItem } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import Link from 'next/link'

const ShoppingCart = () => {
  const cart = [
      {
        "id": 43,
        "name": "Rollito Playbe",
        "description": null,
        "price": 395,
        "quantity": 3,
        "amount": 1398.3,
        "image": "https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
      },
      {
        "id": 45,
        "name": "David Sakayama",
        "description": null,
        "price": 795,
        "quantity": 4,
        "amount": 3752.4,
        "image": "https://imgur.com/FXd7EJm.png"
      },
      {
        "id": 46,
        "name": "Pokesemeimpolta",
        "description": null,
        "price": 475,
        "quantity": 3,
        "amount": 1681.5,
        "image": "https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
      }
  ]

  const [cartState, setCartState] = useState(cart)
  console.log(cartState)

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

  const [cartItemsCounter, setCartItemsCounter] = useState(0);
  const [cartItemsSubtotal, setCartItemsSubtotal] = useState(0);

  useEffect (() => {
    setCartItemsCounter(cartState.reduce((itemCounter, item ) => itemCounter + item.quantity, 0))
    setCartItemsSubtotal(cartState.reduce((itemSubtotal, item) => itemSubtotal + item.amount, 0))
  },[cartState])

  const handleQuantityChange = (id, quantity) => {
    // Utiliza map para crear un nuevo array con los cambios
    const updatedCart = cartState.map(item => {
      // Verifica si este es el objeto que deseas actualizar
      if (item.id === id) {
        // Crea un nuevo objeto con la cantidad actualizada y retorna
        const updatedItem = {
          ...item,
          quantity: quantity,
          amount: item.price * quantity, // Actualiza el valor de 'amount'
        };
        return updatedItem;
      }
      // Si no es el objeto que deseas actualizar, retorna el objeto sin cambios
      return item;
    });

    // Actualiza el estado con el nuevo array
    setCartState(updatedCart);
  };

  return(
    <div className={styles.mainConteiner}>
      <div className={styles.tittle}>
        <Heading>Carrito de compras</Heading>
      </div>
      <div className={styles.cartConteiner}>
        {cartState.map((item, index) => {
          return(
            <div key={index}>
              { item.quantity > 0 ? (
                <Card
                  direction={{ base: 'column', sm: 'row' }}
                  overflow='hidden'
                  variant='elevated'
                >
                  <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={item.image}
                    alt={`Imagen de ${item.name}`}
                  />
                  <CardBody>
                    <Box display='flex' justifyContent='space-between'>
                      <Box>
                          <Heading size='xs' textTransform='uppercase'>{item.name}</Heading>
                          <Box display='flex' justifyContent='flex-start' alignItems='center' gap={2} >
                            <ThemeProvider theme={theme}>
                              <FormControl sx={{ m: 1, minWidth: 50}} size="small" error>
                                <Select
                                  style={{ color: '#C62828' }}
                                  value={item.quantity}
                                  displayEmpty
                                  onChange={(event) => handleQuantityChange(item.id, event.target.value)}
                                  inputProps={{ 'aria-label': 'Without label' }}
                                >
                                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
                                    <MenuItem key={value} value={value}>
                                      Cant. {value}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </ThemeProvider>
                            <button onClick={(event) => handleQuantityChange(item.id, 0)}>Eliminar</button>
                          </Box>
                      </Box>
                      <Box >
                        <Heading size='sm' >${item.price}</Heading>
                      </Box> 
                    </Box>
                  </CardBody>
                </Card>
              ):(null)}
            </div>
          )
        })}
        {cartItemsCounter !== 0 ? (
          <Box display='flex' alignItems='flex-end' flexDirection='column'>
            <Heading size='sm' my={4}>Subtotal ({cartItemsCounter} productos): ${cartItemsSubtotal} </Heading>
            <Link href={'/'} style={{ width:'100%'}}>
              <Button mt={4} backgroundColor='yellow.400' colorScheme='yellow' width={'100%'} p={6}>PROCESAR COMPRA</Button>
            </Link> 
            
          </Box>
        ):(
          <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <ProductionQuantityLimitsRoundedIcon sx={{ fontSize: 200, color: '#BDBDBD' }} />
            <Text size='sm' my={4}>Tu carrito esta vacio, haz click para <Link href={'/'} style={{textDecoration: 'underline'}}>continuar viendo</Link></Text>
          </Box>
        )}
      </div>
    </div>
  )
}

export default ShoppingCart