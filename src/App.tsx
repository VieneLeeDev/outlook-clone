import { RouterProvider } from 'react-router-dom'
import './styles/app.scss'
import { router } from './routers'
import { ThemeProvider, getAllureTheme, Themes, Language } from '@gui/fluent-ui-allure';
import * as React from 'react';
function App() {
  
  return <ThemeProvider theme={getAllureTheme(Themes.Cobalt, Language.EN)}>
            <RouterProvider router={router} />
        </ThemeProvider> 
}

export default App
