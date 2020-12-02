import React from "react";
import { View, Text, Button } from "react-native";

const Movies = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <Text>Movies</Text>
      <Button title="Detail" onPress={() => navigation.navigate("Detail")} />
    </View>
  );
};

export default Movies;
