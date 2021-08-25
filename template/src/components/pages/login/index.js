import React from 'react'
import { Login } from 'react-admin'
import Image from 'assets/images/login_background.png'

const CustomLoginPage = props => <Login {...props} backgroundImage={Image} />

export default CustomLoginPage
