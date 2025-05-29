# 📱 WallpaperApp

A beautiful React Native app built using Expo that lets users view, download, and fetch high-quality wallpapers from Unsplash.



## ✨ Features

- 🔍 View full-screen wallpapers
- ⬇️ Download wallpapers directly to device gallery
- 🔁 Fetch new random wallpapers with the "Next" button
- 📁 Saved images are stored in a custom `MyWallpapers` album

## 📽 Demo

> Here's a screen recording of the app in action:
### Demo Video
https://github.com/user-attachments/assets/dba92c6e-e1cf-4aa0-9e6b-0a1391683403




## 🚀 Getting Started

To run this app locally:

### 1. Clone the repo

```bash
git clone https://github.com/Aditya010524/WallpaperApp.git
cd WallpaperApp

2. Install dependencies
npm install

3. Start the app
npx expo start

Open it in Expo Go on your phone or an emulator.
🔑 Unsplash API
Make sure you replace YOUR_UNSPLASH_ACCESS_KEY in Screen2.js with your own Unsplash developer access key.
You can get one for free by signing up at https://unsplash.com/developers.

const response = await fetch('https://api.unsplash.com/photos/random?client_id={}');
📦 Built With
React Native

Expo

Unsplash API

expo-media-library

expo-file-system

📄 License
This project is open source and available under the MIT License.
