## COMMANDS

### Assemble Debug

Generate unsigned react native app that works without server

```
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

cd android && ./gradlew assembleDebug
```

### Clean Gradle

`cd andreid && ./gradlew clean`
