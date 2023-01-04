import React from "react";
import { StyleSheet, Image } from "react-native";

function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource =
    selectedImage !== null ? {uri: selectedImage} : placeholderImageSource;
  return <Image source={imageSource} style={styles.image} />;
}

export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
