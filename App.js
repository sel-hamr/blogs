import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from './src/context/BlogContext';
import IndexScreens from './src/screens/IndexScreens';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const Stack = createStackNavigator();

function MyStack() {
	return (
		<Stack.Navigator screenOptions={{ title: 'Blog' }} initialRouteName='Home'>
			<Stack.Screen name='Home' component={IndexScreens} options={{ title: 'Home' }} />
			<Stack.Screen name='Details' component={ShowScreen} />
			<Stack.Screen name='Create' component={CreateScreen} />
			<Stack.Screen name='Edit' component={EditScreen} />
		</Stack.Navigator>
	);
}

function App() {
	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	);
}

export default () => (
	<Provider>
		<App />
	</Provider>
);
