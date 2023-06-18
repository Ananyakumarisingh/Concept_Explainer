# __Netive Element__

## __Netive Element 1__
__Expo and React Native__
Expo is a platform that helps you develop, build, deploy, and quickly iterate on React Native mobile apps. It provides a range of tooling to make development with React Native even easier. Although Expo isn’t required to create React Native apps, it helps developers by removing the need for basic native knowledge.

__Expo Snack is a web-based playground where you can write React Native snippets and run them in the browser.__

__Expo Go is an app you can download on your phone to “view” your app in development.__

__Expo CLI is a tool to create, manage, and develop your apps.__

__Expo SDK is a modular set of packages that provide access to native APIs, like Camera or Notifications.__

__Expo Application Services (EAS) deeply integrated cloud services for Expo and React Native apps, from the team behind Expo.__

- EAS Build: Compile and sign Android/IOS apps with custom native code in the cloud.
- EAS Submit: Upload your app to the Apple App store or google play store from the cloud with one CLI command.
- EAS Update: Address small bugs and push quick fixes directly to end-users.

Now you may ask, Do companies use Expo ? 2 Years back, companies are prefering bare react native project, because expo don't have sufficient facilities to access native components. Previously Expo also aware of that, so there was an eject option, using which any time you can eject from expo to bare react native project.

Expo depricated eject from SDK 46 August 2022. The concept of ejecting was replaced by popular expo prebuild feature.

Unlike the expo eject library, authors can configure their libraries to work with Expo Prebuild by creating a config plugin. This means you can use any library with Expo Prebuild. You can also use any custom native code with Expo Prebuild by creating a development build.

For these reasons, now a days most of the start-ups prefer expo.

If we summarise, the reasons may be :

- Easy to develop application.
- Using windows system we can develop both android and ios apps.
- Without installing the actual app, then can verify by scanning the QR code.
- Easy to create build.

__Custom Buttons using TouchableOpacity or Pressable__

In our previous session we have seen that the Button component's UI customisation is limited to the color prop only and buttons look different on different platforms. Therefore, React Native offers touchable and pressable components to create customise and cross-platform elements.

Showing feedback effects for a user gesture is definitely a good UI/UX practice. For example, if we change a particular menu item’s color for the pressed state, users know that the app accepted the most recent user gesture. Therefore, every app typically shows feedback animations for interactive UI elements. Let us discuss Touchable and Pressable in detail to know which we should use and why ?

__TouchableOpacity__

It is a core component that reduces the opacity level to 0.2 as the touch event feedback. It internally uses the Animated.View component to implement the opacity transition. We will read about Animated.View in later sessions. We can also use style prop for styling. It also supports child components, which allow us to create touchable images, buttoms or complex list items.

- activeOpacity: Pressed opacity level can be adjusted with this prop.
- disabled: Disable the opacity animation and touch event callback with the disabled prop.
- hitSlop: Defines the extra area of user's touch action. This prop helps us to create an UI element smaller than a fingertip on screen. We can define a number or Rect Object (object containing 4 different values for bottom, left, right, top).
- pressRetentionOffset: Defines how far the user needs to move their finger from the region to deactivate a pressed button. This offset value includes the hitSlop value, too.

        import React, {useState} from 'react'
        import {Button, Text, View, Pressable, SafeAreaView, TouchableOpacity} from 'react-native'

        const App = () => {
        const [touchPressed, setTouchPressed] = useState(false);

        return(<SafeAreaView style={{marginTop:25, alignItems:'center'}}>
            <Button title="click me" color="green" onPress={()=>alert("Clicked")}/>
            <TouchableOpacity style={{backgroundColor: touchPressed ?'green' :'red', borderRadius:5, padding:5 }}
            onPressIn={()=>setTouchPressed(true)}
            onPressOut={()=>setTouchPressed(false)}
            activeOpacity={1}
            onLongPress={()=>console.log('Long Pressed')}
            hitSlop={{top: 100, left: 50, right: 50, bottom: 100}}
            pressRetentionOffset={200}
            >
            <Text style={{color:'#fff'}}>Touchable Opacity Button</Text>
            </TouchableOpacity>
        </SafeAreaView>)
        }

        export default App;
- callbacks : We can attach functions to various events in a particular touch event flow with the onPress, onPressIn, onPressOut, and onLongPress callbacks.
React Native offers four different touchable components to handle basic user gestures. In below table I have given the differences among them. No need to go in details because all these we are going to create using advanced pressable component. It is only for reference.

| Touchable Component Name | Touchable Opacity |	TouchableHighlight |	TouchableWithoutFeedback |	TouchableNativeFeedback |
|-------|-------|-------|-------|------|
| touch event feedback |	reduces opacity |	changes background color |	no feedback |	Plays the android-specific ripple effect
| Platform Compatibility |	Both Android & IOS |	Both Android & IOS |	Both Android & IOS	| Only Android |
| Child Element |	Able to wrap multiple child elements | Able to wrap only one child element. If multiple elements are to be wrapped then wrap them first in a View | Able to wrap only one child element. If multiple elements are to be wrapped then wrap them first in a View | Able to wrap only one child element. If multiple elements are to be wrapped then wrap them first in a View |

__Pressable Component__

Pressable components are introduced in React Native with the Pressability API in v0.63. If you use Expo, then use Expo SDK40 or later.

As discussed earlier in this session, React Native offers four different touchable components to handle basic user gestures. But with Pressable we can create all those predefined touchable components with new added effects like zoom, rotation etc.

Instead of offering multiple inbuilt, animated components, as touchable components do, The React Native Pressability API offers us one core component called Pressable.

In the below example, We will create several buttons with different feedback animations. You can try something else rather then these.

        import React, { useState } from 'react';
        import {
        SafeAreaView,
        Pressable,
        StyleSheet,
        Text,
        } from 'react-native';

        const PressableOpacityButton = ({title, onTap}) => {
        return (
            <Pressable
            onPress={onTap}
            style={({ pressed }) => [
                {
                opacity: pressed
                    ? 0.2
                    : 1,
                backgroundColor: '#2277ee'
                },
                styles.button,
            ]}>
                <Text style={styles.buttonText}>{ title }</Text>
            </Pressable>
        );
        }

        const PressableHighlightButton = ({title, onTap}) => {
        return (
            <Pressable
            onPress={onTap}
            style={({ pressed }) => [
                {
                backgroundColor: pressed
                    ? '#55aaff'
                    : '#2277ee'
                },
                styles.button
            ]}>
                <Text style={styles.buttonText}>{ title }</Text>
            </Pressable>
        );
        }

        const ZoomButton = ({title, onTap}) => {
        return (
            <Pressable
            onPress={onTap}
            style={({ pressed }) => [
                {
                transform: [{
                    scale: pressed ? 1.07 : 1
                }],
                backgroundColor: '#2277ee'
                },
                styles.button
            ]}>
                <Text style={styles.buttonText}>{ title }</Text>
            </Pressable>
        );
        }

        const RotatingButton = ({title, onTap}) => {
        return (
            <Pressable
            onPress={onTap}
            style={({ pressed }) => [
                {
                transform: [{
                    rotate: pressed ? '-5deg' : '0deg'
                }],
                backgroundColor: '#2277ee'
                },
                styles.button
            ]}>
                <Text style={styles.buttonText}>{ title }</Text>
            </Pressable>
        );
        }

        const ComplexButton = ({title, onTap}) => {
        return (
            <Pressable
            onPress={onTap}
            android_ripple={{color: '#fff'}}
            style={({ pressed }) => [
                pressed && {
                transform: [{
                    rotate: '-5deg'
                },{
                    scale: 0.7
                }]
                },
                {
                backgroundColor: '#2277ee'
                },
                styles.button,
            ]}>
                {({pressed}) => (
                <Text style={[styles.buttonText, pressed && {color: '#FFF'}]}>{ title }</Text>
                )}
            </Pressable>
        );
        }


        const App = () => {

        return (
            <SafeAreaView style={styles.container}>
            <PressableOpacityButton title="TouchableOpacity"/>
            <PressableHighlightButton title="TouchableHighlight"/>
            <ZoomButton title="Zoom effect"/>
            <RotatingButton title="Rotation effect"/>
            <ComplexButton title="Complex effect"/>
            </SafeAreaView>
        );
        };

        const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            marginHorizontal: 36,
        },
        button: {
            padding: 12,
            marginBottom: 20,
            borderRadius: 6,
        },
        buttonText: {
            fontSize: 20,
            textAlign: 'center'
        },
        });

        export default App;

__Difference between Touchable and Pressable__

| Touchable | Pressable |
|-----------|-----------|
| Offers four different Touchable components: TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, TouchableNativeFeedback | Offers only one pressable component: Pressable |
| hitSlop & pressRetentionOffset for customizing the accepted user gesture area | It also supports hitSlop & pressRetentionOffset |
| offers subscribing to gesture lifecycle events through opPress, onPressIn, onPressOut and onLongPress callbacks. | It also supports |
| limited touch event inbuilt feedback animation. Suitable for primary developer requirements.	Doesn’t offer any inbuilt feedback animations. The developer has to implement feedback effects as per requirement. | Very flexible and customisable, so able to fulfil advanced developer requirements. |

__Which to be used, Touchable or Pressable ?__

Touchable components come with pre-built feedback animations with limited customization options — so you can use them more quickly, but you will face issues with customization. Meanwhile, the Pressability API lets you build feedback animations as you wish, so you have full freedom to implement feedback effects even though it takes some effort to implement.

But overusing feedback animations reduces your app’s quality, so don’t use too many animations or colorful effects for user gestures . A minimal feedback animation that’s in line with your application’s theme will keep your app’s look professional.

If you use a UI kit like NativeBase, you don’t need to use both component types directly — since UI kits typically come with a pre-defined gesture feedback system.

__TextInput in ReactNative__

A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.

Porps:

- onSubmitEditing: onSubmitEditing is triggered when you click the text input submit button (keyboard button). `event.nativeEvent.text` will give the value of input.
- onChangeText: onChangeText is triggered when you type anything in the text input. Its typical use to update the state of Component with TextInput value like Reactjs onChange event.
- placeHolder
- placeHolderTextColor
- onPressIn: Callback that is called when a touch is engaged.
- onPressOut: Callback that is called when a touch is released.
- onFocus: Callback that is called when the text input is focused.

        import React, {useState} from "react";
        import { SafeAreaView, StyleSheet, TextInput, Platform,TouchableOpacity, Text } from "react-native";

        const App = () => {
        const [text, onChangeText] = useState("");
        const [number, onChangeNumber] = useState("");

        return (
            <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={"Enter Name"}
            />
            <TextInput
                style={styles.input}
                onSubmitEditing={(event) => onChangeNumber(event.nativeEvent.text)}
                value={number}
                onChangeText={onChangeNumber}
                placeholder="Enter Age"
                keyboardType="numeric"
            />
            <TouchableOpacity onPress={() => alert(`${text} - ${number} `)} style={styles.button}>
                <Text style={styles.btnText}>SUBMIT</Text>
            </TouchableOpacity>
            </SafeAreaView>
        );
        };

        const styles = StyleSheet.create({
        container : {
            marginTop: Platform.OS === "android" ? 24 : 0
        },
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
        },
        button:{
            backgroundColor:'red',
            marginHorizontal:10,
            borderRadius:5,
            padding:5,
            alignItems:'center'
        },
        btnText:{
            color:'#FFF'
        }
        });

        export default App;
---
## __Netive Element 2__

__Image in React Native__

A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.

        import React from 'react'
        import { View, Image, StyleSheet } from 'react-native'
        import snackIcon from './assets/snack-icon.png'

        const App = () => {
        return(<View>
            <Image source={{uri:"https://cdn.pixabay.com/photo/2021/11/22/05/02/dalmatian-6815838_960_720.jpg"}} style={styles.roundImage}/>
            <Image source={require('./assets/snack-icon.png')} style={styles.squareImage}/>
            <Image source={snackIcon} style={styles.squareImage}/>
        </View>)
        }

        export default App;

        const styles = StyleSheet.create({
        squareImage : {
            width:100,
            height:100,
            borderRadius:10  
        },
        roundImage: {
            width:100,
            height:100,
            borderRadius:'50%'  
        }
        })

__Image Props__

- source: specifies source of the image
- resizeMode: Determines how to resize the image when the frame doesn't match the raw image dimensions. Value of this prop can be any one of the following. The default is cover
    - cover: Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding). at least one dimension of the scaled image will be equal to the corresponding dimension of the view (minus padding).
    - contain: Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).
    - stretch: Fit the width and height of image to mentioned width and height, This may change the aspect ratio.
    - repeat: Repeat the image to cover the frame of the view. The image will keep its size and aspect ratio, unless it is larger than the view, in which case it will be scaled down uniformly so that it is contained in the view.
    - center: Center the image in the view along both dimensions. If the image is larger than the view, scale it down uniformly so that it is contained in the view.

__Showing list of items__

Let us write a program which will display a list of items from an array on the screen. If we click on add item. It will add an item to the array.

    import React, {useState} from 'react'
    import {View, Text, StyleSheet, Button} from 'react-native'
    import  Constants  from 'expo-constants'


    const App = () => {
    const [data, setData] = useState([])

    const addItem = () => {
        setData(prev => [...prev, 'item '+Math.ceil(Math.random()*100)]);
    }
    return(<View style={styles.container}
    >
        <Button title="Add Item" onPress={addItem}/>
        <Text style={styles.heading}>List of Items</Text>
        {data.map(item => (<Text style={styles.item}>{item}</Text>))}
        {data.length == 0 && <Text style={{textAlign:'center'}}>No Items in list</Text>}
    </View>)
    }

    export default App;

    const styles = StyleSheet.create({
    container : {
        marginTop: Constants.statusBarHeight
    },
    item : {
        borderRadius:10,
        borderWidth:1,
        padding:5,
        margin:5,
    },
    heading : {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign:'center'
    }
    })

Can you tell me what is the drawback of this program ?

Ans: When the list of item is large, some items are going out of screen.

The list should be scrollable. To make a large list scrollable, we can use ScrollView or FlatList.

__ScrollView__

The ScrollView is a generic scrolling container that can contain multiple components and views. By default it is a vertical scrollable container but you can make it horizontal by specifying horizontal property.

Let us modify our previous program and wrap our list of items with in a scrollview.

__Example of vertical list of items__

    <ScrollView>
    {data.map(item => (<Text style={styles.item}>{item}</Text>))}
    {data.length == 0 && <Text style={{textAlign:'center'}}>No Items in list</Text>}
    </ScrollView>
__Example of horizntal list of items__

    <ScrollView horizontal>
    {data.map(item => (<Text style={styles.item}>{item}</Text>))}
    {data.length == 0 && <Text style={{textAlign:'center'}}>No Items in list</Text>}
    </ScrollView>
Note : The ScrollView works best to present a small number of things of a limited size. All the elements and views of a ScrollView are rendered, even if they are not currently shown on the screen. If you have a long list of items which cannot fit on the screen, you should use a FlatList instead.

Before moving to FlatList let us find out, How to attach a pull to refresh to our ScrollView.

__Pull to Refresh__
`RefreshControl` component is used inside a ScrollView to provide pull to refresh functionality.

most used props

- onRefresh: Function to be executed when the ScrollView is pulled down.
- refreshing : when true displays spinner. So at the beginning of onRefresh method set it true then at the end set it false.
- colors: on Android sets the spinner color
- tintColor: on IOS sets the spinner color

        import React, {useState} from 'react'
        import {View, Text, StyleSheet, RefreshControl, ScrollView} from 'react-native'
        import  Constants  from 'expo-constants'

        const App = () => {
        const [data, setData] = useState([])
        const [refreshing, setRefreshing] = React.useState(false);

        const onRefresh = () => {
            setRefreshing(true) ;
            setData(prev => [...prev, 'item '+Math.ceil(Math.random()*100)]);
            setRefreshing(false);
        }
        return(
            <View style={styles.container}>
            <Text style={styles.heading}>List of Items</Text>
            <ScrollView
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['red']} tintColor='green' />}>
        {data.map(item => (<Text style={styles.item}>{item}</Text>))}
        {data.length == 0 && <Text style={{textAlign:'center'}}>No Items in list</Text>}
            </ScrollView>
        </View>)
        }

        export default App;

        const styles = StyleSheet.create({
        container :{
            marginTop: Constants.statusBarHeight
        },
        item : {
            borderRadius:10,
            borderWidth:1,
            padding:5,
            margin:5,
        },
        heading : {
            fontSize: 25,
            fontWeight: 'bold',
            textAlign:'center'
        }
        })
As this task ends quickly so you may not see the spinner properly. While getting data from server you may see it properly. To test it now letus create a function which intentionaly delay the process, so that we can see the spinner.

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = () => {
        setRefreshing(true) ;
        setData(prev => [...prev, 'item '+Math.ceil(Math.random()*100)]);
        wait(2000).then(() => setRefreshing(false));
    }
    
<a href="https://reactnative.dev/docs/linking">Linking</a>
Linking gives you a general interface to interact with both incoming and outgoing app links.

## __Netive Element 3__

__FlatList in React Native__

In React Native, you can use the FlatList component to render a long list of data. It renders only the items shown on the screen in a scrolling list and not all the data at once. To render a scrollable list of items using FlatList , you need to pass the required data prop to the component. The other props are self explanatory.

- data: array of items
- renderItem: a function that returns a JSX for a single item.
- keyExtractor: extracts key from data. But remember that it should be a string.
- numColumns: number of columns
- horizontal: show horizontal list
- itemSeparatorComponent:
- listHeaderComponent:
- listFooterComponent:
- listEmptyComponent:

        import React, {useState} from 'react'
        import {View, Text, StyleSheet, RefreshControl, FlatList} from 'react-native'
        import  Constants  from 'expo-constants'

        const App = () => {
        const [data, setData] = useState([])
        const [refreshing, setRefreshing] = React.useState(false);

        const onRefresh = () => {
            setRefreshing(true) ;
            setData(prev => [...prev, 'Task no: '+Math.ceil(Math.random()*100)]);
            setRefreshing(false);
        }
        return(
            <View style={styles.container}>
            <Text style={styles.heading}>List of Tasks</Text>
            <FlatList
            refreshControl={<RefreshControl 
                refreshing={refreshing} 
                onRefresh={onRefresh} 
                colors={['red']} 
                tintColor='green' />}
            data={data}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            keyExtractor={(_, index) => index.toString() }
            numColumns={2}
            ItemSeparatorComponent={() => <View style={styles.separator}></View>}
            ListHeaderComponent={() => <Text style={{textAlign:'center'}}>This is header of FlatList</Text>}
            ListFooterComponent={() => <Text  style={{textAlign:'center'}}>This is footer of FlatList</Text>}
            ListEmptyComponent={() => <Text style={{textAlign:'center'}}>No Items in list</Text>}
        />
        </View>)
        }

        export default App;

        const styles = StyleSheet.create({
        container :{
            marginTop: Constants.statusBarHeight
        },
        item : {
            flex:1,
            borderRadius:10,
            borderWidth:1,
            borderColor:'#006666',
            padding:5,
            margin:5,
        },
        heading : {
            fontSize: 25,
            fontWeight: 'bold',
            textAlign:'center'
        },
        separator:{
            flex:1,
            borderColor:'#006666',
            borderBottomWidth:2,
            margin:10
        }
        })

__Section List in React Native__

        import React from "react";
        import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";

        const DATA = [
        {
            category: "Mobile Phones",
            data: ["Galaxy s22", "Xiomi 12 Pro", "I-Phone 15"]
        },
        {
            category: "Refrigerators",
            data: ["Haier Single Door", "LG Double Door", "Godrej Single Door"]
        },
        {
            category: "Dresses",
            data: ["Lymio Multi Color", "Toplot Black Dress", "Keri Perry"]
        },
        ];

        const App = () => (
        <SafeAreaView style={styles.container}>
            <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <View style={styles.item}>
                                        <Text style={styles.title}>{item}</Text>
                                        </View>}
            renderSectionHeader={({ section: { category } }) => (
                <Text style={styles.header}>{category}</Text>
            )}
            />
        </SafeAreaView>
        );

        const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: StatusBar.currentHeight,
            marginHorizontal: 16
        },
        item: {
            backgroundColor: "#006666",
            padding: 20,
            marginVertical: 8,
            flexDirection:'row'
        },
        header: {
            fontSize: 32,
            backgroundColor: "#fff"
        },
        title: {
            fontSize: 24
        }
        });

        export default App;

__SectionList with Columns__

        import React from "react";
        import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, FlatList } from "react-native";

        const DATA = [
        {
            category: "Mobile Phones",
            data: [{list:["Galaxy s22", "Xiomi 12 Pro", "I-Phone 15"]}]
        },
        {
            category: "Refrigerators",
            data: [{list:["Haier Single Door", "LG Double Door", "Godrej Single Door"]}]
        },
        {
            category: "Dresses",
            data: [{list:["Lymio Multi Color", "Toplot Black Dress", "Keri Perry"]}]
        },
        ];

        const App = () => (
        <SafeAreaView style={styles.container}>
            <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => < FlatList horizontal data={item.list} renderItem={({item})=><Text style={styles.item}>{item}</Text>}/>}
            renderSectionHeader={({ section: { category } }) => (
                <Text style={styles.header}>{category}</Text>
            )}
            />
        </SafeAreaView>
        );

        const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: StatusBar.currentHeight,
            marginHorizontal: 16
        },
        item: {
            backgroundColor: "#006666",
            padding: 20,
            marginVertical: 8,
            flexDirection:'row',
            margin:10
        },
        header: {
            fontSize: 32,
            backgroundColor: "#fff"
        }
        });

        export default App;
Note: Remember FlatList and SectionList both are PureComponents which means that it will not re-render if props remain shallow-equal.

__Icons__

`@expo/vector-icons` or `react-native-vector-icons` can be used to include popular icon sets in our app. `@expo/vector-icons` is built on top of `react-native-vector-icons` and uses similar API.

`https://oblador.github.io/react-native-vector-icons/` can be used to search for any icon. The icon sets are __`AntDesign`, `Entypo`, `EvilIcons`, `Feather`, `FontAwesome`, `FontAwesome5`, `FontAwesome5Brands`, `Fontisto`, `Foundation`, `Ionicons`, `MaterialCommunityIcons`, `MaterialIcons`, `Octicons`, `SimpleLineIcons`, `Zocial`__.

    import * as React from 'react';
    import { View, StyleSheet } from 'react-native';
    import Ionicons from '@expo/vector-icons/Ionicons';

    export default function App() {
    return (
        <View style={styles.container}>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
        <Ionicons name="eye-off" size={32} color="green" />
        <Ionicons name="fast-food" size={32} color="green" />
        <Ionicons name="finger-print" size={32} color="green" />                  
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    });

## __React Native Architecture and SQL Lite 1__

React Native Architecture
When we look at the react native architecture we find two different divisions often interact with each other :

- native world (Android or IOS)
- JavaScript world

Communication between these two worlds happens via React Native Bridge. React Native parses the bunch of commands coming from the React world into a JSON array, serializes it as a string, and then transfers it to the native world via that bridge.

To maintain consistency across all platforms, React Native implements the actual layout by converting React-based display styles (eg, flex) to the relative position values where each element is to be structured and then finally passes it over the UI layer of the native world. Broadly speaking, the current React Native architecture is based on 3 major threads-

- `Main/Native/UI thread` — where all the UI elements are rendered and native code is executed.
- `Layout thread/Shadow Thread` — this is a background thread where the actual layout is calculated. As mentioned, it recasts the flexbox layout with the help of Facebook’s layout engine called Yoga.
- `JavaScript thread` — this thread is responsible for executing and compiling all the JavaScript-related code or business logic.


__The drawbacks of this architecture__
- In the current architecture, communication between threads occurs through the bridge so it leads to a slow transfer rate and unnecessary copying of data.
- Since the communication happens asynchronously, one major drawback of this asynchronous approach is that it doesn’t execute the events in real-time instead it schedules the action. Let’s imagine a scenario where we implemented a Flatlist and when we start scrolling, each time an event is triggered and is scheduled for its execution. So, when dealing with a large set of list items and scrolling rapidly one can easily notice a white glitch before actual rendering happens. This happens because the UI layer of that native world hasn’t received any layout information by the time scrolling is completed. So this scrolling effect needs to take place synchronously to achieve the desired result which is not possible in the current architecture.

__The new architecture__

Starting from version 0.68, React Native provides the New Architecture, which offers developers new capabilities for building highly performant and responsive apps.

The New Architecture dropped the concept of The Bridge in favor of another communication mechanism: the JavaScript Interface (JSI). The JSI is an interface that allows a JavaScript object to hold a reference to a C++ and viceversa.

Once an object has a reference to the other one, it can directly invoke methods on it. So, for example, a C++ object can now ask a JavaScript object to execute a method in the JavaScript world and viceversa.

This idea allowed to unlock several benefits:

- `Synchronous execution:` it is now possibile to execute synchronously those functions that should not have been asynchronous in the first place.
- `Concurrency`: it is possible from JavaScript to invoke functions that are executed on different thread.
- `Lower overhead`: the New Architecture don't have to serialize/deserialize the data anymore, therefore there are no serialization taxes to pay.
- `Code sharing`: by introducing C++, it is now possible to abstract all the platform agnostic code and to share it with ease between the platforms.
- `Type safety`: to make sure that JS can properly invoke methods on C++ objects and viceversa, a layer of code automatically generated has been added. The code is generated starting from some JS specification that must be typed through Flow or TypeScript.

__Security__

There is no bulletproof way to handle security, but with conscious effort and diligence, it is possible to significantly reduce the likelihood of a security breach in your application. Invest in security proportional to the sensitivity of the data stored in your application, the number of users, and the damage a hacker could do when gaining access to their account.

__Storing Sensitive Info__

Never store sensitive API keys in your app code. Anything included in your code could be accessed in plain text by anyone inspecting the app bundle. Tools like <a href="https://github.com/goatandsheep/react-native-dotenv">react-native-dotenv</a> and <a href="https://github.com/luggit/react-native-config/">react-native-config</a> are great for adding environment-specific variables like API endpoints, but they should not be confused with server-side environment variables, which can often contain secrets and API keys.

Don't store Token and secrets on Async Storage.

React Native does not come bundled with any way of storing sensitive data. However, ther are pre-existing solutions for Android and IOS platforms. You can use any of the below external libraries to achieve this.

- <a href="https://docs.expo.dev/versions/latest/sdk/securestore/">expo-secure-store</a>

uses `keychain` on iOS and `SharedPreferences, encrypted with Android's Keystore system` in android.

- <a href="https://github.com/emeraldsanto/react-native-encrypted-storage">react-native-encrypted-storage</a>

uses `Keychain` on iOS and `EncryptedSharedPreferences` on Android.

__Firebase AppCheck__
App Check is an additional layer of security that helps protect access to your services by attesting that incoming traffic is coming from your app, and blocking traffic that doesn't have valid credentials. It helps protect your backend from abuse, such as billing fraud, phishing, app impersonation, and data poisoning.

__SSL Pinning__

Using https endpoints could still leave your data vulnerable to interception. With https, the client will only trust the server if it can provide a valid certificate that is signed by a trusted Certificate Authority that is pre-installed on the client. An attacker could take advantage of this by installing a malicious root CA certificate to the user’s device, so the client would trust all certificates that are signed by the attacker. Thus, relying on certificates alone could still leave you vulnerable to a man-in-the-middle attack.

SSL pinning is a technique that can be used on the client side to avoid this attack. It works by embedding (or pinning) a list of trusted certificates to the client during development, so that only the requests signed with one of the trusted certificates will be accepted, and any self-signed certificates will not be.

When using SSL pinning, you should be mindful of certificate expiry. Certificates expire every 1-2 years and when one does, it’ll need to be updated in the app as well as on the server. As soon as the certificate on the server has been updated, any apps with the old certificate embedded in them will cease to work.

__SQL Lite Storage on React Native__

React Native SQLite is a library that implements a self-contained, serverless, zero-configuration SQL database engine. SQLite is the most widely deployed SQL database engine in the world. The source code for SQLite is in the public domain.

__Installation__

    npm install --save react-native-sqlite-storage

__Use Database of SQLite__

    import {openDatabase} from 'react-native-sqlite-storage';

    ...

    export const db = openDatabase({name: 'mydatabase1.db'},
    () => { },
    error => {
        console.log("ERROR: " + error);
    });