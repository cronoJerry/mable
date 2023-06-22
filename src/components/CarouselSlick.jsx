import { Box, HStack, Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function CarouselSlick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const carouselAddress = [
    {
      message: 'how dare you!!!',
      image:
        'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JUVDJThBJTg4JUVEJThEJUJDJTIwJUVEJTlFJTg4JUVDJTk2JUI0JUVCJUExJTlDfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },

    {
      message: 'how dare you!!!',
      image:
        'https://deadline.com/wp-content/uploads/2023/05/robert-downey-jr-iron-man-marvel.jpg',
    },
  ];
  return (
    <Box w={'full'} h={'100vh'}>
      <Slider {...settings}>
        {carouselAddress.map((item, i) => {
          return (
            <HStack
              w={'full'}
              spacing={8}
              key={i}
              h={'450px'}
              bgImage={item.image}
              bgPosition={'center'}
              bgSize={'cover'}
              justifyContent={'center'}
              alignItems={'center'}
              border={'1px solid'}
            >
              <Text
                lineHeight={'300px'}
                textAlign={'center'}
                color={'white'}
                fontSize={'24px'}
              >
                {item.message}
              </Text>
            </HStack>
          );
        })}
      </Slider>
    </Box>
  );
}
