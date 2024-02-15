import './app.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers'
import { ThemeProvider, getAllureTheme} from '@gui/fluent-ui-allure';
import { allureSelector } from './store/selector/allureSelector';
import { useSelector } from 'react-redux';
import './i18n';
function App() {
  const globalState = useSelector(allureSelector)
  return <ThemeProvider theme={getAllureTheme(globalState.themes, globalState.languages)}>
  <RouterProvider router={router} />
</ThemeProvider>
}

export default App
