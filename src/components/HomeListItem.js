import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getCounters } from '../store/selectors';
import { setCounter } from '../store/actions';
import CounterButton from './CounterButton';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    width: "100%",
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 4
  },
  counterName: {
    flex: 1,
    marginRight: 16,
    fontFamily: "SourceSansPro",
    fontSize: 16,
    color: "white"
  },
  counter: {
    flexDirection: "row",
    alignItems: "center"
  },
  count: {
    width: 50,
    fontSize: 24,
    textAlign: "center",
    color: "white"
  },
  buttonMarginLeft: {
    marginLeft: 8
  },
  buttonMarginRight: {
    marginRight: 8
  }
})

function HomeListItem({ counter: { title, count }, setCounterDispatch }) {
  const resetCounter = () => setCounterDispatch({ title, count: 0 });
  const decreaseCounter = () => setCounterDispatch({ title, count: count - 1 });
  const increaseCounter = () => setCounterDispatch({ title, count: count + 1 });
  return (
    <View style={styles.container}>
      <Text style={styles.counterName}>
        {title}
      </Text>
      <View style={styles.counter}>
        <CounterButton icon="redo" size={20} color="#FFEB82" style={styles.buttonMarginRight} onPress={resetCounter} />
        <CounterButton icon="minus" size={20} color="#FFB156" style={styles.buttonMarginRight} onPress={decreaseCounter} />
        <Text style={styles.count}>
          {count}
        </Text>
        <CounterButton icon="plus" size={20} color="#C4E975" style={styles.buttonMarginLeft} onPress={increaseCounter} />
      </View>
    </View>
  )
}

const mapStateToProps = (state, ownProps) => ({
  counter: getCounters(state)[ownProps.title],
});

const mapDispatchToProps = {
  setCounterDispatch: setCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeListItem);