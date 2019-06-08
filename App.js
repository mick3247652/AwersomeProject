/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Content} from 'native-base';
import reducers from './reducers';
import {Provider} from 'react-redux';
import {MODES} from './constants';
import {createStore} from 'redux';
import AppFooterContainer from './containers/AppFooterContainer.js';

const initialState = {
  mode: MODES.ARTICLES,
};
const store = createStore(reducers, initialState);

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
});

const App = () => (
  <Provider store={store}>
	<Container>
		<Content>
			<View style={styles.container}>
				<Text>
					Lorem ipsum...
				</Text>
			</View>
		</Content>
		<AppFooterContainer/>
	</Container>
  </Provider>
);
export default App;