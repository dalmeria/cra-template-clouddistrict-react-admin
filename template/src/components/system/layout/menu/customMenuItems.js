import React from 'react'
import { MenuItemLink, withTranslate } from 'react-admin'
import LabelIcon from '@material-ui/icons/Label'
import PropTypes from 'prop-types'
import routes from 'config/routes'

const CustomMenuItems = ({ onMenuClick, open, translate }) => (
  <MenuItemLink
    to={routes.customRoute}
    primaryText={translate('pages.customPage')}
    leftIcon={<LabelIcon />}
    onClick={onMenuClick}
    sidebarIsOpen={open}
  />
)

CustomMenuItems.defaultProps = {
  onMenuClick: () => {},
  open: false,
  translate: () => {},
}

CustomMenuItems.propTypes = {
  onMenuClick: PropTypes.func,
  open: PropTypes.bool,
  translate: PropTypes.func,
}

export default withTranslate(CustomMenuItems)
