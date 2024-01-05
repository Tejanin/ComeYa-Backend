"use client"
import { useState } from 'react';
import styles from './NavBar.module.css'
import Link from 'next/link'
import * as React from 'react';
import Box from '@mui/system/Box';
import { Stack } from '@mui/material';
import OpenModal from '../OpenModal/OpenModal';
import { ChakraProvider, Heading } from '@chakra-ui/react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseRounded from '@mui/icons-material/CloseRounded';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';


export default function NavBar(){
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    // Lógica para realizar la búsqueda con searchValue
    // llamar a una API, filtrar datos, etc.
    alert(`Realizar búsqueda con: ${searchValue}`);
  };

  const handleClear = () => {
    // Limpiar el valor de búsqueda
    setSearchValue('');
  };

  return(
    <nav className={styles.nav}>
      <Box className={styles.navLeft}>
        <Box className={styles.logo}>
          <Link href='/'>
            <img className={styles.imgLogo} src='imagenes/ComeYa-icono.png'>
            </img>
          </Link>
          <Heading>ComeYa</Heading>


          <Paper variant="filled"
            component="form"
            sx={{ p: '1px 4px', display: 'flex', alignItems: 'center', width: '99%', backgroundColor: 'rgba(0, 0, 0, 0.1)'}}
          >
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Comida, restaurante, bebidas..."
              inputProps={{ 'aria-label': 'search come ya' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="clear" onClick={handleClear}>
              <CloseRounded />
            </IconButton>
          </Paper>


        </Box>
      </Box>
      
      <Box className={styles.navRight}>
        {/*<Button color='warning' variant='contained'>100 ComeCoins</Button>*/}
        <Stack direction="row" spacing={2}>
          <ChakraProvider><ThemeSwitcher/></ChakraProvider>
          <OpenModal //Para el prop WhatButton, si se pone "SignIn" es para el boton de Iniciar Sesion, sino es para Registrarse
          whatButton="SignIn"
          />
          <OpenModal 
          whatButton="SignUp"
          />
        </Stack>
      </Box>
    </nav>
  )
}