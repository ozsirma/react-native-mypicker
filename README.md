# react-native-mypicker
React Native Picker for only iOS

[![gif.gif](https://s12.postimg.org/otkj4in71/gif.gif)](https://postimg.org/image/n1rk9m3u1/)

### Installation

```sh
$ npm install react-native-mypicker
```

### Import

```sh
$ import MyPicker from 'react-native-mypicker'
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


License
----

MIT