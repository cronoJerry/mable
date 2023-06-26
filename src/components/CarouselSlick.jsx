import { Box, HStack } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CarouselSlick() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box w="full" h="full">
      <Slider {...settings}>
        <HStack
          w="full"
          h="450px"
          backgroundImage={
            "url('https://media.contentapi.ea.com/content/dam/news/www-ea/common/ea-motive-new-title-teaser-16x9.jpg.adapt.1456w.jpg')"
          }
          backgroundSize="cover"
        ></HStack>
        <HStack
          w="full"
          h="450px"
          backgroundImage={
            "url('https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg')"
          }
          backgroundSize="cover"
        ></HStack>

        <HStack
          w="full"
          h="450px"
          backgroundImage={
            "url('https://images.unsplash.com/photo-1687335545159-0c3187752189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80')"
          }
          backgroundSize="cover"
        ></HStack>
      </Slider>
    </Box>
  );
}

