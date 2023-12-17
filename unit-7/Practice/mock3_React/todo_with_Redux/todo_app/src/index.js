import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'
import { Provider } from 'react-redux';
import { store } from './redux/stores';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
  <ChakraProvider>
<ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <App/>
  </ChakraProvider>
    </Provider>
  </React.StrictMode>
);


