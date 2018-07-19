import React, {Component} from 'react';
import {ScrollView, View, Text, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Button} from '../components/Button'
import {Input} from '../components/Input'
import {CheckInput} from '../components/CheckInput'
import {Link} from '../components/Link'
// import { store } from '../state';

class SessionScreen extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = { logginIn: false };
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleFalseLogin = this.toggleFalseLogin.bind(this);
  }

  toggleLogin() {
    this.setState({logginIn: !this.state.logginIn});
  }

  toggleFalseLogin() {
    this.setState({logginIn: false});
  }

  renderContent() {
    if (this.state.logginIn === true) {
      return (
        <View>
          <View style={styles.inputContainer}>
            <Input placeholder="email address" />
          </View>
          <View style={styles.inputContainer}>
            <Input placeholder="password" isSecure={true} />
          </View>
          <CheckInput label="remember email" />
          <View style={styles.buttonContainer}>
            <Button
              style={styles.buttonLogin}
              onPress={() => console.log('logincalls')}>
              Log in
            </Button>
          </View>
          <Link value="create new account"
                onPress={() => console.log('Navigate to "create account"')}/>
        </View>
      );
    }

    return (
      <View>
        <Text style={styles.headerSlogan}>find your furry best friend</Text>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttonSignup}
            onPress={() => console.log('SessionScreen signup button pressed!')}>
            Sign Up
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttonLogin}
            onPress={() => this.toggleLogin()}>
            Log in
          </Button>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.layout}>
        <View style={styles.headerContainer}>
          <View style={styles.headerImageContainer}>
            <Image style={styles.headerImage} 
              source={require('../assets/laurenNickEdited0011.png')} />
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.headerLogoContainer}>
            <TouchableWithoutFeedback
                onPress={() => this.toggleFalseLogin()}>
              <Image 
                style={styles.headerLogo} 
                source={require('../assets/buddyIcon.png')} />
            </TouchableWithoutFeedback>
          </View>
          {this.renderContent()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    alignContent: 'space-around'
  },
  headerContainer: {
    flex: 1,
    overflow: 'hidden'
  },
  bodyContainer: {
    minHeight: 327
  },
  headerImageContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  headerImage: {
    resizeMode: 'contain',
  },
  headerLogoContainer: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerLogo: {
    height: 120,
    resizeMode: 'contain',
    position: 'relative',
    top: -30
  },
  headerSlogan: {
    color: '#00a7bf',
    fontSize: 18,
    letterSpacing: 0.4,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 21
  },
  buttonContainer: {
    height: 50,
    marginTop: 30,
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
    marginTop: 12,
    marginLeft: 48,
    marginRight: 41
  }
});

export { SessionScreen }