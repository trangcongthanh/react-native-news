# React Native News
Headlines from over 70 sources

## Demo
https://www.youtube.com/watch?v=FhF0Q1l2FK8

## Stack
- React Native
- React Navigation
- Redux & Redux Persist
- Reactotron

## Features/Components
* Uses React Native v0.46.4
* Pull down to Refresh FlatList
* Pagination Flatlist
* Follow a sources

## Installation
1. Clone the repo
```
$ cd react-native-news
```

2. Install dependencies
```
$ npm install
```

3. Get API key from newsapi.org (It's free)

4. Add your key to line 11 in file path-to-your-project/src/constants/news.js

5. Start packager
```
$ yarn start
```

6. Running on Android
```
$ react-native run-android or yarn run-android
$ adb reverse tcp:8081 tcp:8081
```

7. Running on iOS
```
$ react-native run-ios or yarn run-ios
```

## Todos
* :white_medium_small_square: Support CodePush
* :white_medium_small_square: Support adMob

## License
* MIT
* Icons & Logo made by [flaticon.com](http://flaticon.com) is licensed by CC 3.0 BY
* News API by [newsapi.org](http://newsapi.org)