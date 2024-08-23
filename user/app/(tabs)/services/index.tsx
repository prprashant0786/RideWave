import { View, Text } from 'react-native'
import React from 'react'
import styles from "@/screens/home/styles";
import color from "@/themes/app.colors";
import { windowHeight } from "@/themes/app.constant";

const index = () => {
  return (
    <View
    style={[
      styles.rideContainer,
      { backgroundColor: color.lightGray, paddingTop: windowHeight(40) },
    ]}
  >
    <Text
      style={[
        styles.rideTitle,
        { color: color.primaryText, fontWeight: "600" },
      ]}
    >
      Services
    </Text>
  </View>
  )
}

export default index