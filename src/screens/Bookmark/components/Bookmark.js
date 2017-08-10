import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'
import Header from '../../../components/Header'
import List from '../../../components/List'
import TabBarIcon from '../../../components/TabBarIcon'
import iconInfo from '../../../assets/info.png'
import iconActive from '../../../assets/bookmark.png'
import iconInactive from '../../../assets/bookmark-inactive.png'

const propTypes = {
  news: PropTypes.object.isRequired,
  unbookmarkArticle: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
}

const defaultProps = {}

const navigationOptions = {
  title: 'Bookmark',
  tabBarIcon: (props) => <TabBarIcon {...props} active={iconActive} inactive={iconInactive} />,
}

class Bookmark extends React.PureComponent {

  renderHeaderRight = () => {
    const { navigation: { navigate } } = this.props
    return (
      <TouchableOpacity
        onPress={() => navigate('About')}
        activeOpacity={0.7}
        hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
      >
        <Image source={iconInfo} style={{ width: 16, height: 16 }} />
      </TouchableOpacity>
    )
  }

  render() {
    const { news: { bookmark }, unbookmarkArticle } = this.props
    const { renderHeaderRight } = this
    return (
      <View style={styles.container}>
        <Header
          subTitle="YOUR"
          title="Bookmarks"
          right={renderHeaderRight}
        />
        <List
          data={bookmark}
          isBookmark={() => true}
          onBookmarkArticle={unbookmarkArticle}
          keyExtractor={(item, index) => `${item.publishedAt}-${index}`}
        />
      </View>
    )
  }
}

Bookmark.propTypes = propTypes

Bookmark.defaultProps = defaultProps

Bookmark.navigationOptions = navigationOptions

export default Bookmark
