# Public Charging Stations Beta

This is a prototype of a mobile app that allows users to view surrounding public charging stations and start changing their electric vehicles using the ev.energy backend API.

## Approach
### Technology Stack
- Expo - for creating a cross-platform mobile app using React Native
- TypeScript - for static type checking and better code readability

## User Flow
1. This section of the app first laods and requests user location access permission.
2. Then the app will then fetch the openchargemap API to locate the nearest EV chargers by distance.
3. User will then see a list of charging stations -- each station is a clickable box with the name and the proximity.
4. Upon selection, a modal will appear with more details about the station -- like contact information, hours of operation.
5. When the user clicks the "Start Charging" button, it will confirm their selection and send a POST request to ev.energy's backend service router and handle accordingly.

## Implementation Details
This App uses
- `react` and `react-native` libraries to display the components of the UI
- `expo` build-tool to bundle and distribute the React Native Application
- `expo-location` library to request and find user-device geolocation

## Room for improvement
- As the application frontend grows, it may be necessary to lazyload some of the heavier components such as modals, so that we can defer the loading of unnecessary content
- Although Native's FlatList component has virtualization features embedded already, extra pagination may help offset the large load of charging stations on subsequent renders
- Instead of hard-coded user details, maybe a reducer (Redux) or context API (native React Hook) can help store and retrieve user data from storage to formulate the correct headers in the request as the user hits "Start Charging"
- Map added to UI as visual context so the user can plan their route more accordingly to their convenience and improves overall user experience.
- Unit, Integration, End-To-End Test Coverage
