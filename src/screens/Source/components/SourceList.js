import React from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'
import ListItem from './SourceListItem'

const propTypes = {
  data: PropTypes.array.isRequired,
  onFollow: PropTypes.func.isRequired,
}

const defaultProps = {}

const List = ({ data, onFollow, ...restProps }) => (
  <FlatList
    data={data}
    renderItem={({ item }) => <ListItem {...item} onFollow={onFollow} />}
    keyExtractor={(item) => item.id}
    {...restProps}
  />
)

List.propTypes = propTypes

List.defaultProps = defaultProps

export default List
