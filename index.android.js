/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";

import { StackNavigator } from "react-navigation";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{"\n"}
          Shake or press menu button for dev menu
        </Text>
        <Button
          onPress={() => navigate("Chat", { user: "123213" })}
          title="Chat with Lucy"
        />
        <Button onPress={() => navigate("Blink")} title="Blink" />
        <Button onPress={() => navigate("LotsOfStyles")} title="LotsOfStyles" />
        <Button
          onPress={() => navigate("FlexDimensionsBasics")}
          title="FlexDimensionsBasics"
        />
      </View>
    );
  }
}
class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>
          Chat with {params.user}
        </Text>
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : " ";
    return (
      <Text>
        {display}
      </Text>
    );
  }
}

class BlinkApp extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `BlinkApp`
  });
  render() {
    return (
      <View>
        <Blink text="I love to blink" />
        <Blink text="Yes blinking is so great" />
        <Blink text="Why did they ever take this out of HTML" />
        <Blink text="Look at me look at me look at me" />
      </View>
    );
  }
}

class LotsOfStyles extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `LotsOfStyles`
  });
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

class FlexDimensionsBasics extends Component {
  render() {
    return (
      // 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
      // <View style={{flex:1,flexDirection:'column'}}>
      //   <View style={{  flex: 1,
      //   flexDirection: 'column',
      //   justifyContent: 'center',}}>
      //     <View style={{ flex: 1, width:100,backgroundColor: "powderblue" }} />
      //     <View style={{ flex: 2,width:100, backgroundColor: "skyblue" }} />
      //     <View style={{ flex: 3, width:100,backgroundColor: "steelblue" }} />
      //   </View>
      //   <View style={{ flex: 2 }}>
      //     <View style={{ flex: 1, backgroundColor: "steelblue" }} />
      //     <View style={{ flex: 2, backgroundColor: "powderblue" }} />
      //     <View style={{ flex: 3, backgroundColor: "skyblue" }} />
      //   </View>
      // </View>
      <View style={{
       flex: 1,
       flexDirection: 'column',
       alignItems : 'stretch',
       justifyContent:'space-around',
     }}>
       <View style={{height:100, backgroundColor: 'powderblue'}} />
       <View style={{height:100, backgroundColor: 'skyblue'}} />
       <View style={{height:100, backgroundColor: 'steelblue'}} />
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  bigblue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30
  },
  red: {
    color: "red"
  }
});

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Blink: { screen: BlinkApp },
  LotsOfStyles: { screen: LotsOfStyles },
  FlexDimensionsBasics: { screen: FlexDimensionsBasics }
});

AppRegistry.registerComponent("SimpleApp", () => SimpleApp);
