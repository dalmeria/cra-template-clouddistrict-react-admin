import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import colors from 'assets/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.black,
    },
    secondary: {
      main: colors.black,
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {},
  overrides: {
    RaSidebar: {
      drawerPaper: {
        '@media (min-width: 0px)': {
          backgroundColor: colors.black,
        },
      },
    },
    RaLogout: {
      menuItem: {
        // XS breakpoint
        '@media (max-width: 600px)': {
          color: colors.white,
          '& svg': {
            fill: colors.white,
          },
        },
      },
    },
    MuiDrawer: {
      root: {
        background: colors.black,
        minHeight: '100vh',
      },
    },
    RaLink: {
      link: {
        textDecoration: 'underline',
      },
    },
    RaMenuItemLink: {
      root: {
        color: colors.white50,
      },
      active: {
        color: colors.white,
      },
      icon: {
        color: colors.white,
      },
    },
  },
})

export default theme
