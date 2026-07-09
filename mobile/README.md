# AthletIQ Mobile (scaffold)

This folder contains a minimal Expo (React Native + TypeScript) scaffold to start the Android/iOS app.

Quick start (on macOS):

1. Install dependencies (from the `mobile/` folder):

```bash
cd mobile
npm install
# or
# yarn install
```

2. Start the Expo dev server:

```bash
npm run start
# or
npm run ios
# or
npm run android
```

Notes:
- You'll need `node` and `npm` or `yarn` installed.
- For iOS simulator: Xcode + command-line tools required.
- For Android: Android Studio + emulator or a physical device.

Why Expo + React Native?
- Fast cross-platform iteration and single codebase for Android/iOS.
- Reuses React knowledge from the web app.
- Large ecosystem and easy native module usage when needed.

Next steps I can take:
- Add navigation (`react-navigation`) and app screens (Onboarding, Auth, Dashboard).
- Wire shared assets/styles from the web project.
- Implement API layer and local storage.
