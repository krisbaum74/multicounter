# MultiCounter

MultiCounter is an app that allows users to have multiple counters in parallel that they can increment, decrement, or reset individually.

## Installation

The project is configured using [Expo](https://docs.expo.dev/). You can follow the instructions below to configure and install the application.

1. Clone the project
2. Install dependencies with `npm install` or `yarn install`. This project was mostly configured with Yarn, so if NPM doesn't work you can try Yarn.
3. Run the app with Expo using `expo start` (if you haven't used expo before, you may need to [install expo-cli](https://docs.expo.dev/workflow/expo-cli/))

## The assignment

Your task is to implement the Settings Screen. The settings screen will allow users to toggle the visibility of the add, subtract, and reset button on each counter individually. The setting is immediately applied when upon switching the toggle between enabled/disabled. When a button is disabled, that button wouldn't appear on the home screen. When a button is enabled, that button will appear on the home screen.

### Design

The design for this project is in [Figma](https://www.figma.com/file/Rb7xTKvAqZgaYJWEhSoyME/MultiCounter). You should be able to download assets from the Figma design file as well.

The Font used is [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro). The icons are from [expo-vector-icons](https://docs.expo.dev/guides/icons/#expovector-icons) is used. You shouldn't need to download any additional libraries or font to the base code; they have been pre-configured for you. The base code uses the same font and icon set, so you should be able to find examples on how to use them. 

### Criteria

We will be looking at the following:

* Whether your code works and adhere to the specifications
* How clean your code is

### Submission

To submit, fork this repository into your own repository, then make a branch from `develop` and name it `your-name-here/name-of-feature` (e.g. `thomas-baker/delete-counter`). Once you have finished your feature, please make a pull request with the following details:

* Destination    : `develop`
* Title          : Name of Your Feature in Plain English
* Description    :
    - List of changes that you made
    - For example: Add a home screen to the app
