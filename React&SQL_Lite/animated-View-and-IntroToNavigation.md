# __Animated View__

Animation can be defined as manipulating images or objects to appear as moving images or objects. React native provide you with an animated API, which mean animated is an object provided by react native which provide heavy lifting of animation and coordination with the native operating systems such as Android and IOS.

Before starting remember the requirement needed.

- Define the starting value or location (x,y coordinate of screen) of the animation.
- Define the end value or ending location of the animation.
- Define which element we are animating.
- Define the type of animation you want
- Define the duration in which animation should get completed

__Using the native driver__

The Animated API is designed to be serializable. By using the native driver, we send everything about the animation to native before starting the animation, allowing native code to perform the animation on the UI thread without having to go through the bridge on every frame. Once the animation has started, the JS thread can be blocked without affecting the animation.

Using the native driver for normal animations is straightforward. You can add useNativeDriver: true to the animation config when starting it.

__Configuring animations__

`Animated` provides three types of animation types. Each animation type provides a particular animation curve that controls how your values animate from their initial value to the final value:

Animated.decay() starts with an initial velocity and gradually slows to a stop. Animated.spring() provides a basic spring physics model. Animated.timing() animates a value over time using easing functions.

    Animated.timing({}).start(({ finished }) => {
    /* completion callback */
    });

__Animatable Components__

- Animated.Image
- Animated.ScrollView
- Animated.Text
- Animated.View
- Animated.FlatList
- Animated.SectionList

__Composing Animations__
- Animated.delay() starts an animation after a given delay.
- Animated.parallel() starts a number of animations at the same time.
- Animated.sequence() starts the animations in order, waiting for each to complete before starting the next.
- Animated.stagger() starts animations in order and in parallel, but with successive delays.

__Combining animated values__

You can combine two animated values via addition, subtraction, multiplication, division, or modulo to make a new animated value:
- Animated.add()
- Animated.subtract()
- Animated.divide()
- Animated.modulo()
- Animated.multiply()

__Interpolation__

Each property can be run through an interpolation first. An interpolation maps input ranges to output ranges.

    style={{
        opacity: fadeAnim, // Binds directly
        transform: [{
        translateY: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
        }),
        }],
    }}
interpolate() supports multiple range segments as well

    value.interpolate({
    inputRange: [-300, -100, 0, 100, 101],
    outputRange: [300, 0, 1, 0, 0]
    });
__React Navigation__

<a href="https://reactnavigation.org/docs/getting-started/"><u>follow the official documentation to install react navigation</u></a>

__Wrapping your app in NavigationContainer__

In a typical React Native app, the NavigationContainer should be only used once in your app at the root. You shouldn't nest multiple NavigationContainers unless you have a specific use case for them.

__Stack Navigation__

In a web browser, you can link to different pages using an anchor `(<a>)` tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page.

React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation came into picture.

React Navigation's native stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state - your app pushes and pops items from the navigation stack as users interact with it, and this results in the user seeing different screens.

    import * as React from 'react';
    import { Button, View } from 'react-native';
    import { NavigationContainer } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';
    // Import all the required screens
    // React Navigation 6.x
    // import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

    const Stack = createStackNavigator();
    // React Navigation 6.x
    // const Stack = createNativeStackNavigator();

    function MyStack() {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen}  options={{title:"Settings Screen"}} />
        </Stack.Navigator>
    );
    }

    export default function App() {
    return (
        <NavigationContainer>
        <MyStack />
        </NavigationContainer>
    );
    }
      
- To specify screen-specific options, we can pass an options prop to Stack.Screen, and for common options, we can pass screenOptions to Stack.Navigator

- `navigation.navigate('RouteName')` pushes a new route to the native stack navigator if it's not already in the stack, otherwise it jumps to that screen.

- We can call `navigation.push('RouteName')` as many times as we like and it will continue pushing routes.

- The header bar will automatically show a back button, but you can programmatically go back by calling navigation.goBack(). On Android, the hardware back button just works as expected.

- You can go back to an existing screen in the stack with `navigation.navigate('RouteName')`, and you can go back to the first screen in the stack with `navigation.popToTop()`.

The navigation prop is available to all screen components (components defined as screens in route configuration and rendered by React Navigation as a route).

__Passing parameters to routes__

- Pass params to a route by putting them in an object as a second parameter to the `navigation.navigate` function: `navigation.navigate('RouteName', { /* params go here */ })`

- Read the params in your screen component: `route.params`.

- You can update the screen's params with navigation.setParams

- Initial params can be passed via the initialParams prop on Screen

- Params should contain the minimal data required to show a screen, nothing more

        navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
        });

---
# Advance Navigation
# __Bottom Tabs Navigator__
A simple tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused.
<a href="https://reactnavigation.org/docs/bottom-tab-navigator/#installation"><u>Installation Guide</u></a>


__`Example`__

    import * as React from 'react';
    import { Button, Text, View } from 'react-native';
    import { NavigationContainer } from '@react-navigation/native';
    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    // Import required screens

    const Tab = createBottomTabNavigator();

    export default function App() {
    return (
        <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
        </NavigationContainer>
    );
    }

__Tab With Stack Navigation__

    import * as React from 'react';
    import { Button, Text, View } from 'react-native';
    import { NavigationContainer } from '@react-navigation/native';
    import { createNativeStackNavigator } from '@react-navigation/native-stack';
    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    // Import required screens

    const HomeStack = createNativeStackNavigator();

    function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Details" component={DetailsScreen} />
        </HomeStack.Navigator>
    );
    }

    const SettingsStack = createNativeStackNavigator();

    function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
        <SettingsStack.Screen name="Settings" component={SettingsScreen} />
        <SettingsStack.Screen name="Details" component={DetailsScreen} />
        </SettingsStack.Navigator>
    );
    }

    const Tab = createBottomTabNavigator();

    export default function App() {
    return (
        <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Settings" component={SettingsStackScreen} />
        </Tab.Navigator>
        </NavigationContainer>
    );
    }
__Drawer Navigation__

    import * as React from 'react';
    import { View, Text, Button } from 'react-native';
    import { NavigationContainer } from '@react-navigation/native';
    import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    } from '@react-navigation/drawer';
    // Import required screens

    function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
            label="Close drawer"
            onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
            label="Toggle drawer"
            onPress={() => props.navigation.toggleDrawer()}
        />
        </DrawerContentScrollView>
    );
    }

    const Drawer = createDrawerNavigator();

    function MyDrawer() {
    return (
        <Drawer.Navigator
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Notifications" component={Notifications} />
        </Drawer.Navigator>
    );
    }

    export default function App() {
    return (
        <NavigationContainer>
        <MyDrawer />
        </NavigationContainer>
    );
    }
__Bottom Tabs with Drawer Navigation__

    import * as React from 'react';
    import { View, Text, Button } from 'react-native';
    import { NavigationContainer } from '@react-navigation/native';
    import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    } from '@react-navigation/drawer';
    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    // Import required screens

    const Tab = createBottomTabNavigator();

    function MyTabs() {
    return (
        <Tab.Navigator >
        <Tab.Screen options={{headerShown: false}} name="Home" component={Feed} />
        <Tab.Screen options={{headerShown: false}} name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
    }

    const Drawer = createDrawerNavigator();

    function MyDrawer() {
    return (
        <Drawer.Navigator
        useLegacyImplementation
        >
        <Drawer.Screen name="Home" component={MyTabs} />
        <Drawer.Screen name="Notifications" component={Notifications} />
        </Drawer.Navigator>
    );
    }

    export default function App() {
    return (
        <NavigationContainer>
        <MyDrawer />
        </NavigationContainer>
    );
    }

__Drawer with Bottom Tab and Stack Navigator__
- App.js
    
        import React from 'react';
        import {
        SafeAreaView,
        useColorScheme,
        } from 'react-native';
        import {NavigationContainer} from '@react-navigation/native';
        import MyDrawer from './mydrawer/MyDrawer';

        const App = () => {

        return (
            <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <MyDrawer />
            </NavigationContainer>
            </SafeAreaView>
        );
        };

        export default App;

- MyDrawer.js

        import React from 'react';
        import { createDrawerNavigator } from '@react-navigation/drawer';
        import About from '../screens/About';
        import BottomTab from '../bottomtab/BottomTab';
        import Screen4 from '../screens/Screen4';

        const Drawer = createDrawerNavigator();

        function MyDrawer() {
        return (
            <Drawer.Navigator>
            <Drawer.Screen name="Home" component={BottomTab} />
            <Drawer.Screen name="About" component={About} />
            <Drawer.Screen name="Screen4" component={Screen4} />
            </Drawer.Navigator>
        );
        }

        export default MyDrawer;
- BottomTab.js

        import React from 'react';
        import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
        import Feather from 'react-native-vector-icons/Feather';
        import About from '../screens/About';
        import Screen3 from '../screens/Screen3';
        import HomeStack from '../homestack/HomeStack';

        const Tab = createBottomTabNavigator();
        const BottomTab = () => {
            return (
                <Tab.Navigator screenOptions={{ headerShown:false, tabBarShowLabel: false, tabBarStyle:{backgroundColor:'green'} }}>
                    <Tab.Screen name="Home2" component={HomeStack} options={{ tabBarIcon : () => <Feather name="home" size={32} color={'white'}/>}} />
                    <Tab.Screen name="About" component={About}  options={{ tabBarIcon : () => <Feather name="airplay" size={32} color={'white'}/>}} />
                    <Tab.Screen name="Screen" component={Screen3}  options={{ tabBarIcon : () => <Feather name="heart" size={32} color={'white'}/>}} />
                </Tab.Navigator>
            );
        };
        export default BottomTab;
- HomeStack.js

        import React from 'react'
        import {createStackNavigator} from '@react-navigation/stack';
        import Screen3 from '../screens/Screen3';
        import Home from '../screens/Home';

        const Stack = createStackNavigator();
        const HomeStack = () => {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Home3" component={Home} />
            <Stack.Screen name="Screen3" component={Screen3} />
            </Stack.Navigator>
        );
        };

        export default HomeStack;