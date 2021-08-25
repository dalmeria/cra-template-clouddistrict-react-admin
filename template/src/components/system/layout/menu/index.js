import React, { createElement } from 'react'
import { useSelector } from 'react-redux'
import { useMediaQuery } from '@material-ui/core'
import { MenuItemLink, getResources, useTranslate } from 'react-admin'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import CustomMenuItems from './customMenuItems'
import styles from './styles'

const Menu = ({ onMenuClick, logout }) => {
  const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'))
  const open = useSelector(state => state.admin.ui.sidebarOpen)
  const resources = useSelector(getResources)
  const translate = useTranslate()

  return (
    <div style={styles.menu}>
      {resources.map(resource => (
        <MenuItemLink
          key={resource.name}
          to={`/${resource.name}`}
          primaryText={(resource.options && resource.options.label) || translate(`resources.${resource.name}.name`)}
          leftIcon={createElement(resource.icon)}
          onClick={onMenuClick}
          sidebarIsOpen={open}
        />
      ))}
      <CustomMenuItems onMenuClick={onMenuClick} open={open} />
      {isXSmall && logout}
    </div>
  )
}

Menu.defaultProps = {
  onMenuClick: () => {},
  logout: () => {},
}

Menu.propTypes = {
  onMenuClick: PropTypes.func,
  logout: PropTypes.object,
}

export default withRouter(Menu)
