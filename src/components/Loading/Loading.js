import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import styles from './style'

const Loading = (props) => (
  <View style={styles.container}>
    <ActivityIndicator {...props} />
  </View>
)

export default Loading
