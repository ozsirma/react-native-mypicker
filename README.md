# react-native-mypicker
React Native Picker for only iOS



### Installation

```sh
$ npm install react-native-mypicker
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