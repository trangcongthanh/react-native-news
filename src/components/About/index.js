import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'
import Logo from '../../assets/logo.png'
import iconBack from '../../assets/left-arrow.png'
import Header from '../Header'

const propTypes = {
  navigation: PropTypes.object.isRequired,
}

const defaultProps = {}

const About = ({ navigation: { goBack } }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header
        subTitle="About"
        title="NativeNews"
        left={() => (
          <TouchableOpacity
            onPress={() => goBack()}
            activeOpacity={0.7}
            hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
          >
            <Image source={iconBack} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
        )}
      />
      <View style={styles.container}>
        <Image source={Logo} />
        <Text style={{ fontSize: 12, color: '#777', fontStyle: 'italic', marginBottom: 5 }}>
          &lt;NativeNews by=&quot;J.&quot; ver=&quot;1.0&quot; /&gt;
        </Text>
        <Text style={{ fontSize: 12, color: '#777', fontStyle: 'italic' }}>fb.com/trangcongthanh</Text>
        <Text />
        <View style={styles.content}>
          <Text>Headlines from over 70 sources</Text>
          <Text />
          <Text style={{ fontWeight: 'bold' }}>Stack:</Text>
          <Text>- React Native</Text>
          <Text>- React Navigation</Text>
          <Text>- Redux & Redux Persist</Text>
          <Text>- Reactotron</Text>
          <Text />
          <Text style={{ fontSize: 12 }}>OpenSource @ https://github.com/trangcongthanh/react-native-news</Text>
          <Text style={{ fontSize: 12 }}>Icons & Logo made by flaticon.com is licensed by CC 3.0 BY</Text>
          <Text />
          <Text style={{ textAlign: 'center', fontSize: 12 }}>Powered by NewsAPI.org</Text>
        </View>
      </View>
    </View>
  )
}

About.propTypes = propTypes

About.defaultProps = defaultProps

export default About
