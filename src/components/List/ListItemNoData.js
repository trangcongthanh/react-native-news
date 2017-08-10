import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'

const propTypes = {
  text: PropTypes.string,
}

const defaultProps = {
  text: 'No Data',
}

const ListItemNoData = ({ text }) => (
  <View style={styles.itemEmpty}>
    <Text style={styles.itemEmptyText}>{text}</Text>
  </View>
)

ListItemNoData.propTypes = propTypes

ListItemNoData.defaultProps = defaultProps

export default ListItemNoData
