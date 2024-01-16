"use client"
import { Image } from '@chakra-ui/react'
import ImageLoading from '../ImageLoading/ImageLoading';
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//Objeto de ejemplo
const images = [
  {
    imgPath:
      'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  },
  {
    imgPath:
      'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  },
  {
    imgPath:
      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
  },
  {
    imgPath:
      'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
  },
  {
    imgPath:
      'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  },
  {
    imgPath:
      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
  },
  {
    imgPath:
      'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
  },
  {
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

export default class MainCarousel extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            arrows: false,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        };
        return (
          <div>
            <Slider {...settings}>
                {images.map((image, index) => {
                    return(
                        <div key={index}>
                          <div style={{ marginLeft:'1em', marginRight: '1em'}}>
                            <Image 
                              src={image.imgPath}
                              width={500}
                              height={300}
                              borderRadius='5%'
                              objectFit='cover'
                              loading={<ImageLoading/>} 
                              fallbackSrc={'https://via.placeholder.com/500x300'}
                            />
                          </div>
                        </div>
                    )
                })}
            </Slider>
          </div>
        );
    }
}
