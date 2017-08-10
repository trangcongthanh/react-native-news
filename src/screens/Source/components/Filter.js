import React from 'react'
import { View, TextInput } from 'react-native'
import PropTypes from 'prop-types'

const propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

const defaultProps = {
  value: '',
}

const Filter = ({ onChangeText, value }) => (
  <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#dbdbdb' }}>
    <TextInput
      placeholder="Filter"
      value={value}
      onChangeText={(text) => onChangeText(text)}
      underlineColorAndroid="transparent"
    />
  </View>
)

Filter.propTypes = propTypes

Filter.defaultProps = defaultProps

export default Filter
