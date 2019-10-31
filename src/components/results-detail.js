import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: result.image_url
        }}
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Estrellas, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginBottom: 5
  },
  image: {
    borderRadius: 4,
    width: 250,
    height: 120,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold"
    // marginBottom: 5
  }
});

export default ResultsDetail;
