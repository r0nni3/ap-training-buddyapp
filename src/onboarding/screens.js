import React, {Component} from 'react';
import {
  ScrollView, View, Text, Image, StyleSheet, TouchableWithoutFeedback
} from 'react-native';
import {Button, Input} from '../components/common';
// import { store } from '../state';

class OnboardingScreen extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = { currentStep: 0, steps: 3 };
    this.stepForward = this.stepForward.bind(this);
    this.stepBack = this.stepBack.bind(this);
  }

  stepForward() {
    const newStep = (this.state.currentStep < this.state.steps-1) ? this.state.currentStep + 1 : this.state.steps-1;
    this.setState({currentStep: newStep});
  }

  stepBack() {
    const newStep = (this.state.currentStep > 0) ? this.state.currentStep - 1 : 0;
    this.setState({currentStep: newStep});
  }

  screenState() {
    const data = {};
    switch(this.state.currentStep) {
      case 1:
        data.source = require('../assets/group6.png');
        data.title = "Our goal is to match pets with their forever home";
        data.subtitle = "";
        data.bodyText = "What kind of pet are you looking for?\n(you can select both)";
        data.bodyButtonText = "Next";
        data.headerContainerStyles = {backgroundColor: "#bdd12c"};
        data.headerTextContainerStyles = {marginTop: 32, marginBottom: 10};
        data.headerImageContainerStyles = {
          marginTop: 64, marginBottom: 0, marginLeft: 139, marginRight: 139,
        };
        break;
      case 2:
        data.source = require('../assets/group2.png');
        data.title = "We’ll find pets looking for homes near you";
        data.subtitle = "";
        data.bodyText = "";
        data.bodyButtonText = "Finish";
        data.headerContainerStyles = {backgroundColor: "#ea9e18"};
        data.headerTextContainerStyles = {marginTop: 32, marginBottom: 10};
        data.headerImageContainerStyles = {
          marginTop: 64, marginBottom: 0, marginLeft: 157, marginRight: 157,
        };
        break;
      case 0:
      default:
        data.source = require('../assets/buddyIconNocircle.png');
        data.title = "Welcome to Buddy!";
        data.subtitle = "There are tons of little buddies looking for a warm, loving home.";
        data.bodyText = "To start, tell us a little about yourself.";
        data.bodyButtonText = "Next";
        data.headerContainerStyles = {backgroundColor: "#00a7bf"};
        data.headerTextContainerStyles = {marginTop: 2, marginBottom: 38};
        data.headerImageContainerStyles = {
          marginTop: 61, marginBottom: 2, marginLeft: 113, marginRight: 110,
        };
        break;
    }

    return data;
  }

  renderHeaderImage() {
    const {source, headerImageContainerStyles} = this.screenState()

    return (
      <View style={Object.assign({}, styles.headerImageContainer, headerImageContainerStyles)}>
        <Image style={styles.headerImage} 
          source={source} />
      </View>
    );
  }

  renderHeaderText() {
    const {title, subtitle, headerTextContainerStyles} = this.screenState();

    return (
      <View style={Object.assign({}, styles.headerTextContainer, headerTextContainerStyles)}>
        <Text style={styles.headerTitle}>
          {title}
        </Text>
        <Text style={styles.headerText}>
          {subtitle}
        </Text>
      </View>
    );
  }

  renderHeader() {
    const {headerContainerStyles} = this.screenState();

    return (
      <View style={Object.assign({}, styles.headerContainer, headerContainerStyles)}>
        {this.renderHeaderImage()}
        {this.renderHeaderText()}
      </View>
    );
  }

  renderBody() {
    const {bodyText, bodyButtonText} = this.screenState();

    return (
      <View style={styles.bodyContainer}>
        <Text style={styles.formText}>{bodyText}</Text>
        <View style={styles.inputContainer}>
          <Input placeholder="name" />
        </View>
        <View style={styles.inputContainer}>
          <Input placeholder="email address" />
        </View>
        <View style={styles.inputContainer}>
          <Input placeholder="password" isSecure={true} />
        </View>
        <View style={styles.buttonContainerLessMargin}>
          <Button
            style={styles.buttonSignup}
            onPress={() => this.stepForward()}>
            {bodyButtonText}
          </Button>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.footerStepContainer}>
            <View style={styles.stepActive}></View>
            <View style={styles.step}></View>
            <View style={styles.step}></View>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.layout}>
        {this.renderHeader()}
        {this.renderBody()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    flex: 1,
    backgroundColor: '#00a7bf',
  },
  bodyContainer: {
    maxHeight: 386,
  },
  headerImageContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 61,
    marginBottom: 2,
    marginLeft: 113,
    marginRight: 110
  },
  headerImage: {
    flex: 1,
    alignSelf: 'stretch',
    resizeMode: 'contain',
    height: undefined,
    width: undefined,
  },
  headerTextContainer: {
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 38,
    marginLeft: 60,
    marginRight: 60,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 24,
    textAlign: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
  formText: {
    color: '#4a4a4a',
    fontSize: 18,
    letterSpacing: 0.4,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 18
  },
  buttonContainer: {
    height: 50,
    marginTop: 33,
    marginLeft: 60,
    marginRight: 60
  },
  buttonContainerLessMargin: {
    height: 50,
    marginTop: 0,
    marginLeft: 60,
    marginRight: 60
  },
  buttonLogin: {
    backgroundColor: '#bdd12c'
  },
  buttonSignup: {
    backgroundColor: '#8ac9ce'
  },
  inputContainer: {
    height: 35,
    marginBottom: 33,
    marginLeft: 48,
    marginRight: 41
  },
  footerContainer: {
    height: 10,
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 29,
  },
  footerStepContainer: {
    flexDirection: 'row',
  },
  step: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#9b9b9b',
    marginRight: 7.5,
    marginLeft: 7.5,
  },
  stepActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ea9e18',
    marginRight: 15,
    marginRight: 7.5,
    marginLeft: 7.5,
  }
});

export { OnboardingScreen }