import React from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

const propTypes = {
  focused: PropTypes.bool.isRequired,
  active: PropTypes.number.isRequired,
  inactive: PropTypes.number.isRequired,
}

const defaultProps = {}

const TabBarIcon = ({ focused, active, inactive }) => {
  const icon = focused ? active : inactive
  return (
    <Image source={icon} style={{ width: 32, height: 32 }} />
  )
}

TabBarIcon.propTypes = propTypes

TabBarIcon.defaultProps = defaultProps

export default TabBarIcon
