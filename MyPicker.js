import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Animated,
  Picker,
  Button,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class MyPicker extends Component {
  constructor(props) {
    super(props);

    this.springValue = new Animated.Value(0);

    this.state = {
      selectedValue: '',
      status: false,
      array: this.props.data, //[{label:'a',value:'10'},{label:'b',value:'80'}]
    };
  }

  componentDidMount() {
    this.setState({ selectedValue: this.state.array[0].value });
  }

  close() {
    Animated.spring(this.springValue, {
      toValue: 0,
      friction: 10,
    })
      .start();

    this.setState({ status: false });
  }

  open() {
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 10,
    })
      .start();

    this.setState({ status: true });
  }

  toggle() {
    if (this.state.status) {
      this.close();
    } else {
      this.open();
    }
  }

  getSelected() {
    this.props.onDone(this.state.selectedValue);
    this.close();
  }

  render() {
    const spin = this.springValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-300, 0],
    });
    return (
      <Animated.View
        style={[
          styles.container,
          {
            bottom: spin,
          },
        ]}
      >
        <View style={styles.cartBar}>
          <Button
            onPress={() => this.close()}
            title="Cancel"
            color={this.props.cancelButtonColor ? this.props.cancelButtonColor : null}
            accessibilityLabel="Cancel"
          />
          <Button
            onPress={() => this.getSelected()}
            title="Done"
            color={this.props.cancelButtonColor ? this.props.doneButtonColor : null}
            accessibilityLabel="Done"
          />
        </View>
        {this.state.array
          ? <Picker
            style={{ width: screenWidth }}
            selectedValue={this.state.selectedValue}
            onValueChange={selectedValue => this.setState({ selectedValue })}
          >
            {this.state.array.map((value, key) => (
              <Picker.Item key={key} label={value.label} value={value.value} />
              ))}
          </Picker>
          : null}

      </Animated.View>
    );
  }
}

MyPicker.propTypes = {
  data: PropTypes.array,
  cancelButtonColor: PropTypes.string,
  doneButtonColor: PropTypes.string,
  onDone: PropTypes.func,
};

MyPicker.defaultProps = {
  data: [{ label: 'You should pass data', value: '0' }],
  cancelButtonColor: null,
  doneButtonColor: null,
  onDone: () => {},
};

const styles = StyleSheet.create({
  container: {
    zIndex: 999,
    position: 'absolute',
    bottom: -300,
    height: 300,
    width: screenWidth,
    backgroundColor: 'rgba(225,225,226,1)',
  },
  cartBar: {
    height: 50,
    backgroundColor: 'rgba(241,241,241,1)',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
  },
});

module.exports = MyPicker;
