import React from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import Logo from '../../assets/logo.png'
import styles from './style'

const propTypes = {
  content: PropTypes.string.isRequired,
}

const defaultProps = {}

const Splash = ({ content }) => (
  <View style={styles.container}>
    <Image style={styles.logo} source={Logo} />
    <Text style={styles.text}>{content}</Text>
  </View>
)

Splash.propTypes = propTypes

Splash.defaultProps = defaultProps

export default Splash
