import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  container: {
    height: Platform.OS === 'android' ? 59 : 79,
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
    backgroundColor: '#f4f4f4',
    paddingTop: Platform.OS === 'android' ? 5 : 25,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  headerLeft: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    marginTop: -5,
  },
  headerContent: {
    flex: 1,
  },
  headerRight: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: -5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#999',
    fontWeight: 'bold',
  },
})
