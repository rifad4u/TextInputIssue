import React from "react";
import { Button, Keyboard, SafeAreaView, TextInput, View } from "react-native";

const App = () => {

    const onChangeText = (text: string) => {
        console.log("Input Value", text)
    };
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white'
            }}>
                <TextInput
                    style={{
                        width: 150,
                        height: 50,
                        borderWidth: 1
                    }}
                    placeholder="Hai"
                    onChangeText={onChangeText}
                />
            </View>
            <SafeAreaView >
                <Button
                    title="Press me"
                    onPress={() => Keyboard.dismiss()}
                />
            </SafeAreaView>
        </View>
    )
}

export default App;