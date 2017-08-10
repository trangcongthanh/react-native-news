import React from 'react'
import { ScrollView, Text, BackHandler } from 'react-native'
import { DrawerItems } from 'react-navigation'
import PropTypes from 'prop-types'

const propTypes = {
  navigation: PropTypes.object.isRequired,
}

const defaultProps = {}

class Drawer extends React.PureComponent {
  constructor() {
    super()
    this.handleBack = this.handleBack.bind(this)
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBack)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBack)
  }

  handleBack() {
    const { navigation } = this.props
    navigation.navigate('DrawerClose')
    return true
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Text>Drawer Logo</Text>
        <DrawerItems {...this.props} />
      </ScrollView>
    )
  }
}

Drawer.propTypes = propTypes

Drawer.defaultProps = defaultProps

export default Drawer
