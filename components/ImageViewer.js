import React from 'react'
import { StyleSheet, Image } from 'react-native'

function ImageViewer({placeholderImageSource}) {
  return (
      <Image source={placeholderImageSource} style={styles.image} />
  )
}

export default ImageViewer

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});