import React from 'react'
import { View, Text, Image, ImageBackground, Linking, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'
import { fromNow } from '../../helpers/moment'

const propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  isBookmark: PropTypes.bool,
  onBookmark: PropTypes.func.isRequired,
}

const defaultProps = {
  isBookmark: false,
}

const ACTIVE_OPACITY = 0.7

const onLinkOpen = (url) => {
  Linking.openURL(url)
}

const ListItem = ({ source, title, description, url, urlToImage, publishedAt, isBookmark, onBookmark }) => {
  const flag = isBookmark
    ? require('../../assets/bookmark-flag.png')
    : require('../../assets/bookmark-flag-inactive.png')
  return (
    <View style={styles.article}>
      <TouchableOpacity
        activeOpacity={ACTIVE_OPACITY}
        onPress={() => onBookmark()}
        style={styles.bookmarkButton}
      >
        <Image source={flag} style={styles.articleBookmarkFlag} />
      </TouchableOpacity>
      <TouchableWithoutFeedback
        onPress={() => onLinkOpen(url)}
      >
        <ImageBackground
          source={{ uri: urlToImage }}
          style={styles.articleImage}
          resizeMode="cover"
        >
          <Text style={styles.articleSource}>{`#${source}`}</Text>
        </ImageBackground>
      </TouchableWithoutFeedback>
      <View style={styles.articleContent}>
        <TouchableOpacity
          activeOpacity={ACTIVE_OPACITY}
          onPress={() => onLinkOpen(url)}
        >
          <Text style={styles.articleTitle}>{title}</Text>
        </TouchableOpacity>
        <Text style={styles.articleDescription}>{description}</Text>
        <Text style={styles.articleDate}>{fromNow(publishedAt)}</Text>
      </View>
    </View>
  )
}

ListItem.propTypes = propTypes

ListItem.defaultProps = defaultProps

export default ListItem
