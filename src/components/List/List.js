import React from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'
import ListItem from './ListItem'
import ListItemNoData from './ListItemNoData'

const propTypes = {
  data: PropTypes.array.isRequired,
  isBookmark: PropTypes.func.isRequired,
  onBookmarkArticle: PropTypes.func.isRequired,
}

const defaultProps = {}

const List = ({ data, onBookmarkArticle, isBookmark, ...restProps }) => (
  <FlatList
    data={data}
    renderItem={({ item }) => (
      <ListItem
        onBookmark={() => onBookmarkArticle(item)}
        isBookmark={isBookmark(item)}
        removeClippedSubviews
        {...item}
      />
    )}
    ListEmptyComponent={ListItemNoData}
    {...restProps}
  />
)

List.propTypes = propTypes

List.defaultProps = defaultProps

export default List
