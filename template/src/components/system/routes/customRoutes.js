import React from 'react'
import { Route } from 'react-router-dom'
import CustomPage from 'components/pages/customPage'
import routes from 'config/routes'

export default [<Route key='1' exact path={routes.customRoute} component={CustomPage} />]
