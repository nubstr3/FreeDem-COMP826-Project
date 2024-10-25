
![Logo](https://private-user-images.githubusercontent.com/47936132/378690995-a8b1d052-8be9-4c57-b957-dd544edc0d70.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjk1NzQ2NDYsIm5iZiI6MTcyOTU3NDM0NiwicGF0aCI6Ii80NzkzNjEzMi8zNzg2OTA5OTUtYThiMWQwNTItOGJlOS00YzU3LWI5NTctZGQ1NDRlZGMwZDcwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDIyVDA1MTkwNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFmNzNiZmVhZmRhODdjZmRkYWE0NWQ0ZWQ3MTMwM2E1MGEzN2IyOGMwNGE4MzllMmE2YWEwODA4M2Q1NzdjNzQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Mnbpvb_KWnETpTa-y6eoIXTa9uUGzv-Npp_X5eStWVg)


# Free-Dem

A Mobile App that has an intended purpose to help patients and caregivers struggling with Dementia and wandering. This is part of Milestone 2 in the COMP826 course given by AUT.




## Acknowledgements
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [@stnguyen90](https://github.com/appwrite/appwrite) - For his excellent work on a 'hassle free' backend


## Run Locally
You may want to create the project from scratch however there is over 400Mb worth of dependencies, alternatively you may download just the node_modules folder from [here]()

### Nonetheless...
Create a new expo app within that folder by opening up a Terminal and typing
```bash
  npx create-expo-app@latest --template blank
```

Install dependencies

```bash
  npm install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar nativewind
  npm install --save-dev tailwindcss@3.3.2
  npx expo install react-native-appwrite react-native-url-polyfill expo-image-picker

```
Clone the project

```bash
  git clone https://github.com/nubstr3/FreeDem-COMP826-Project.git
```
Copy all cloned FreeDem_COMP826 files to your newly created project folder (essentially merging both folders)

Download the application 'Expo Go' or 'Expo' on a mobile device

- iOS: https://apps.apple.com/us/app/expo-go/id982107779

- Android: https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_NZ&pli=1

Go to the project directory

Start the server

```bash
  npx expo start
```

Navigate to the Camera App and scan the QR code, click on the 'open in Expo (Go)' link to access the application



## Appendix

Thanks for viewing

