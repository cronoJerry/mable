import React from 'react';
import ReactDOM from 'react-dom/client';
// chakra-ui
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

