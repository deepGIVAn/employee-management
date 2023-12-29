// rnefs

import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const index = () => {
  return (
    <ScrollView>
      <Redirect href={"/(home)"} />
      {/* <Text>index</Text> */}
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
