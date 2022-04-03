/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useCallback} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useSelector, Provider} from 'react-redux';
import {action, store} from './src/store';
import {ActionType} from './src/store/actions';
import {RootState} from './src/store/reducers';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  common: {
    marginBottom: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
});

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter);
  const plainIncrement = useCallback(() => action(ActionType.INCREMENT), []);

  const plainDecrement = useCallback(() => action(ActionType.DECREMENT), []);

  const asyncIncrement = useCallback(
    () => action(ActionType.ASYNC_INCREMENT),
    [],
  );
  const asyncDecrement = useCallback(
    () => action(ActionType.ASYNC_DECREMENT),
    [],
  );
  return (
    <View style={styles.container}>
      <Text style={styles.common}>{counter}</Text>

      <View style={styles.common}>
        <Button title="INCREMENT" onPress={plainIncrement} />
      </View>
      <View style={styles.common}>
        <Button title="DECREMENT" onPress={plainDecrement} />
      </View>

      <View style={styles.common}>
        <Button title="ASYNC INCREMENT" onPress={asyncIncrement} />
      </View>
      <View style={styles.common}>
        <Button title="ASYNC DECREMENT" onPress={asyncDecrement} />
      </View>
    </View>
  );
};

export default App;
