"use client"

import { Stack, Heading, Text, Image, AspectRatio } from '@chakra-ui/react'

import ImageLoading from '@/components/ImageLoading/ImageLoading';
import Carousel from '@/components/Carousel/Carousel';
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



 export default async function post(){
  
  const images = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bird',
      imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
      label: 'Goč, Serbia',
      imgPath:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
  ];

    //Prueba de Loading
    await new Promise ((resolve) => setTimeout(resolve, 3000))
    
    return(
        <div>
            <Stack spacing={6}>
                <Heading as='h1' size='4xl' noOfLines={1}>
                  (4xl) In love with React & Next
                </Heading>
                <Heading as='h2' size='3xl' noOfLines={1}>
                  (3xl) In love with React & Next
                </Heading>
                <Heading as='h2' size='2xl'>
                  (2xl) In love with React & Next
                </Heading>
                <Heading as='h2' size='xl'>
                  (xl) In love with React & Next
                </Heading>
                <Heading as='h3' size='lg'>
                  (lg) In love with React & Next
                </Heading>
                <Heading as='h4' size='md'>
                  (md) In love with React & Next
                </Heading>
                <Heading as='h5' size='sm'>
                  (sm) In love with React & Next
                </Heading>
                <Heading as='h6' size='xs'>
                  (xs) In love with React & Next
                </Heading>

            </Stack>

            <Stack spacing={3}>
              <Text fontSize='6xl'>(6xl) In love with React & Next</Text>
              <Text fontSize='5xl'>(5xl) In love with React & Next</Text>
              <Text fontSize='4xl'>(4xl) In love with React & Next</Text>
              <Text fontSize='3xl'>(3xl) In love with React & Next</Text>
              <Text fontSize='2xl'>(2xl) In love with React & Next</Text>
              <Text fontSize='xl'>(xl) In love with React & Next</Text>
              <Text fontSize='lg'>(lg) In love with React & Next</Text>
              <Text fontSize='md'>(md) In love with React & Next</Text>
              <Text fontSize='sm'>(sm) In love with React & Next</Text>
              <Text fontSize='xs'>(xs) In love with React & Next</Text>
            </Stack>

            {/*<Carousel/>*/}
            <div>
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d-69.962495!3d18.4880037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
                />
              </AspectRatio>
            </div>
            




        </div>
    )
}