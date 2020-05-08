import React from 'react'
import { StatusBar } from "react-native";

import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='rgba(250, 250, 250, 0.9)' barStyle='dark-content' />
      <Routes />
    </>
  )
}

