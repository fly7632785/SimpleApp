/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
//引入所需要用的组件
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  SectionList
} from "react-native";
//引入 navigation库
import { StackNavigator } from "react-navigation";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Welcome"
  };

  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
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
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40, width: 300 }}
            placeholder="Type here to translate!"
            onChangeText={text => this.setState({ text })}
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
            {this.state.text.split(" ").map(word => word && "🍕").join(" ")}
          </Text>
        </View>
        <ScrollView>
          <Text style={{ fontSize: 16 }}>Scroll me plz</Text>
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Text style={{ fontSize: 16 }}>If you like</Text>
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Text style={{ fontSize: 16 }}>Scrolling down</Text>
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Text style={{ fontSize: 16 }}>What's the best</Text>
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Text style={{ fontSize: 16 }}>Framework around?</Text>
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={{
              uri:
                "http://img.zcool.cn/community/0198cb574dd3266ac72525ae5006f1.jpg"
            }}
            style={{ width: 40, height: 40 }}
          />
          <Text style={{ fontSize: 16 }}>React Native</Text>
        </ScrollView>
      </View>
    );
  }
}
class ChatScreen extends React.Component {
  // 设置titlebar的标题
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`
  });
  render() {
    //定义一个变量params = this.props的navigation的状态
    //this.props 是这个类被传入的属性
    //自定义的组件也可以使用props。通过在不同的场景使用不同的属性定制，
    // 可以尽量提高自定义组件的复用范畴。
    // 只需在render函数中引用this.props，然后按需处理
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>
          Chat with {params.user}
        </Text>
        // 包含 dat数据源    renderItem 里面包含item的布局
        <FlatList
          data={[
            { key: "Devin" },
            { key: "Jackson" },
            { key: "James" },
            { key: "Joel" },
            { key: "John" },
            { key: "Jillian" },
            { key: "Jimmy" },
            { key: "Julie" },
            { key: "1" },
            { key: "12" },
            { key: "2" },
            { key: "3" },
            { key: "44" },
            { key: "55" },
            { key: "565" },
            { key: "555" }
          ]}
          renderItem={({ item }) =>
            <Text style={styles.item}>
              {item.key}
            </Text>}
        />
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    //props是组件创建就被父组件传入的 不可以改变
    //state是可以改变的
    super(props);
    //在该也在方法中 初始化state 数据状态
    //并且使用this.setState() 方法来改变状态 （里面类似一个json）
    this.state = { showText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      // setState 有一个参数 之前的状态  返回一个新的数据状态
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    //let 局部变量
    // 这里的this.props.text就是父控件传入的text <Blink text='xxxxx'>
    let display = this.state.showText ? this.props.text : " ";
    return (
      <Text>
        {display}
      </Text>
    );
  }
}

class BlinkApp extends Component {
  componentWithUnmount() {}
  static navigationOptions = ({ navigation }) => ({
    title: `BlinkApp`
  });
  render() {
    return (
      <View>
        // 这里的blink是自定一个一个组件 上面  text就会通过props当做参数传入
        <Blink text="I love to blink" />
        <Blink text="Yes blinking is so great" />
        <Blink text="Why did they ever take this out of HTML" />
        <Blink text="Look at me look at me look at me" />
        <SectionList
          sections={[
            { title: "D", data: ["Devin"] },
            {
              title: "J",
              data: [
                "Jackson",
                "James",
                "Jillian",
                "Jimmy",
                "Joel",
                "John",
                "Julie"
              ]
            },
            {
              title: "gf",
              data: [
                "Ja3ck5son",
                "Jam3e5s",
                "Ji3llia5n",
                "Jim5my",
                "J5oel",
                "Joh5n",
                "Ju5lie"
              ]
            },
            {
              title: "hg",
              data: [
                "Ja3ckson",
                "Jam3es",
                "Jil4lian",
                "Jim55my",
                "Joel",
                "John",
                "Julie"
              ]
            }
          ]}
          renderItem={({ item }) =>
            <Text style={styles.item}>
              {item}
            </Text>}
          renderSectionHeader={({ section }) =>
            <Text style={styles.sectionHeader}>
              {section.title}
            </Text>}
        />
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
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "space-around"
        }}
      >
        <View style={{ height: 100, backgroundColor: "powderblue" }} />
        <View style={{ height: 100, backgroundColor: "skyblue" }} />
        <View style={{ height: 100, backgroundColor: "steelblue" }} />
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
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
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
