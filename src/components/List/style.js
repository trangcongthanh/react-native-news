import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  bookmarkButton: {
    position: 'absolute',
    top: 0,
    right: 10,
    zIndex: 99,
  },
  article: {
    position: 'relative',
  },
  articleImage: {
    width: '100%',
    height: 250,
    backgroundColor: '#dbdbdb',
  },
  articleBookmarkFlag: {
    width: 32,
    height: 32,
  },
  articleSource: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    padding: 5,
    backgroundColor: 'white',
  },
  articleContent: {
    padding: 10,
  },
  articleTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  articleDescription: {
    marginBottom: 10,
  },
  articleAuthor: {
    fontWeight: 'bold',
  },
  articleDate: {
    fontStyle: 'italic',
  },
  itemEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  itemEmptyText: {
    fontSize: 16,
  },
})
