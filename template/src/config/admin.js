import jsonServerProvider from 'ra-data-json-server'
import customRoutes from 'components/system/routes/customRoutes'
import Login from 'components/pages/login'
import authProvider from 'providers/authProvider'
//import dataProvider from 'providers/dataProvider'
import i18nProvider from 'providers/i18nProvider'
import layout from 'components/system/layout'
import theme from './theme'

export default {
  authProvider,
  //dataProvider,
  dataProvider: jsonServerProvider('https://jsonplaceholder.typicode.com'),
  i18nProvider,
  layout,
  theme,
  loginPage: Login,
  customRoutes,
  disableTelemetry: true,
}
