"use client"
import { useEffect, useState } from 'react';

const Dimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Verificar si estamos en un entorno de navegador antes de acceder a window
    if (typeof window !== 'undefined') {
      // Actualizar dimensiones de ventana cuando cambia el tamaño
      const updateWindowDimensions = () => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // Asignar el manejador de eventos al evento resize
      window.addEventListener('resize', updateWindowDimensions);

      // Obtener dimensiones de ventana iniciales
      updateWindowDimensions();

      // Limpia el manejador de eventos al desmontar el componente
      return () => {
        window.removeEventListener('resize', updateWindowDimensions);
      };
    }
  }, []);

  return {
        width: windowDimensions.width,
        height: windowDimensions.height
  };
};

export default Dimensions;
