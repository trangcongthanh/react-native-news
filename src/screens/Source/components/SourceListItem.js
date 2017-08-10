import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'

const propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onFollow: PropTypes.func.isRequired,
  isFollowing: PropTypes.bool.isRequired,
}

const defaultProps = {}

const ListItem = ({ name, url, id, onFollow, isFollowing }) => (
  <View style={styles.itemContainer}>
    <Image
      style={styles.itemImage}
      source={{ uri: `https://icons.better-idea.org/icon?url=${url}&size=80..160..200` }}
    />
    <View style={styles.itemContent}>
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemUrl}>{url}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onFollow(id)}
        style={styles.itemFollowButton}
      >
        <Text
          style={isFollowing ? [styles.itemFollowText, styles.itemFollowingText] : [styles.itemFollowText]}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </Text>
      </TouchableOpacity>
    </View>
  </View>
)

ListItem.propTypes = propTypes

ListItem.defaultProps = defaultProps

export default ListItem
