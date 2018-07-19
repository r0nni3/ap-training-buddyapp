import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

const Link = ({ value, onPress, style }) => {
  const mergedStyle = Object.assign({}, styles, style)
  return (
    <View style={mergedStyle.container}>
      <TouchableWithoutFeedback
        style={mergedStyle.touchable}
        onPress={onPress}>
        <View style={mergedStyle.textContainer}>
          <Text style={mergedStyle.text}>{value}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = {
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 16,
  },
  touchable: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    height: 19,
    textDecorationLine: 'underline',
    textAlign: 'center',
    color: '#4a4a4a',
    letterSpacing: 0.3,
  }
};

export { Link };
