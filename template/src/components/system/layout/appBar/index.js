import React from 'react'
import { AppBar } from 'react-admin'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Logo from 'assets/images/logo.png'

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  logo: {
    maxWidth: 80,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  spacer: {
    flex: 1,
  },
})

const MyAppBar = props => {
  const classes = useStyles()
  return (
    <AppBar {...props}>
      <img className={classes.logo} alt='Logo' src={Logo} />
      <Typography variant='h6' color='inherit' className={classes.title} id='react-admin-title' />
      <span className={classes.spacer} />
    </AppBar>
  )
}

export default MyAppBar
