import React from 'react';
import { Text, View, TouchableWithoutFeedback, Switch } from 'react-native';

const CheckInput = ({ label, onPress, style }) => {
  const mergedStyle = Object.assign({}, styles, style)
  return (
    <View style={mergedStyle.container}>
      <TouchableWithoutFeedback
        style={mergedStyle.touchable}
        onPress={onPress}>
        <View style={mergedStyle.textContainer}>
          <Switch />
          <Text style={mergedStyle.text}>{label}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = {
  container: {
    marginTop: 16,
  },
  touchable: {
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 45,
    marginRight: 45,
  },
  check: {
    flex: 1,
    height: 20,
  },
  text: {
    flex: 2,
    paddingLeft: 20,
    height: 19,
    textDecorationLine: 'none',
    textAlign: 'left',
    color: '#4a4a4a',
    letterSpacing: 0.3,
  }
};

export { CheckInput };
