# react-native-mypicker
React Native Picker for only iOS

[![gif.gif](https://s12.postimg.org/otkj4in71/gif.gif)](https://postimg.org/image/n1rk9m3u1/)

### Installation

```sh
$ npm install react-native-mypicker
```

### Import

```sh
$ Import MyPicker from 'react-native-mypicker'
```

### Usage

```sh
<Button title="Click Me" onPress={() => this.refs.picker.open()} />
<MyPicker
    ref="picker"
    data={[{label: 'a', value: '10'}, {label: 'b', value: '20'}]}
    onDone={data => alert(data)}
/>
```


### Props

| Props | Description |
| ------ | ------ |
| data | Object Array  |
| cancelButtonColor | HEX / RGBA |
| doneButtonColor | HEX / RGBA |

### Basic Example

```sh
import React, { Component } from 'react';
import { 
  View,
  TextInput,
  Keyboard,
} from 'react-native';
import MyPicker from 'react-native-mypicker'

export default class example extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={{flex:1}}>
        <TextInput
          style={{height: 40,marginTop:30,margin:10,borderRadius:15, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          placeholder="Useless placeholder"
          value={this.state.text}
          onFocus={() => {Keyboard.dismiss();this.refs.picker.open()}}
        />
        <MyPicker
          ref="picker"
          data={[{label: 'a', value: '10'}, {label: 'b', value: '20'}]}
          onDone={data => this.setState({text:data})}
        />
      </View>
    );
  }
}
```

License
----

MIT