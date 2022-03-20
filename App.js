import React from "react";
import { LogBox } from 'react-native';
import RootStack from "./navigators/RootStack";

LogBox.ignoreLogs(['Warning: ...']);

LogBox.ignoreAllLogs();

export default function App() {
  return <RootStack />
}
