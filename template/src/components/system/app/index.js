import React from 'react'
import { Admin, Resource } from 'react-admin'
import Users from 'components/pages/users'
import admin from 'config/admin'

const App = () => (
  <Admin {...admin}>
    <Resource name='users' {...Users} />
  </Admin>
)

export default App
