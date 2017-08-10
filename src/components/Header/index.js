import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { now } from '../../helpers/moment'
import styles from './style'

const propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  left: PropTypes.func,
  right: PropTypes.func,
}

const defaultProps = {
  title: 'nativeNews',
  subTitle: now().toUpperCase(),
}

const Header = ({ title, subTitle, left, right }) => (
  <View style={styles.container}>
    {left && <View style={styles.headerLeft}>{left()}</View>}
    <View style={styles.headerContent}>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
    {right && <View style={styles.headerRight}>{right()}</View>}
  </View>
)

Header.propTypes = propTypes

Header.defaultProps = defaultProps

export default Header
