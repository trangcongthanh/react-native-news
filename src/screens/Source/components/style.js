import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    backgroundColor: '#dbdbdb',
    marginRight: 10,
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemUrl: {
    fontStyle: 'italic',
    marginBottom: 10,
  },
  itemFollowButton: {
    width: 100,
  },
  itemFollowText: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    textAlign: 'center',
    borderWidth: 1,
  },
  itemFollowingText: {
    color: 'white',
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'green',
  },
})
