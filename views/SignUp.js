import React from "react";
import { View, Text} from "react-native";
import { Provider} from "react-native-paper";


import { NavigationContainer, useNavigation } from '@react-navigation/native';
import globalStyles from "../styles/global";

const SignUp = () => {
    //React navigation



    return (  
       <Provider>
                <View>
                    <Text>Hola a todos</Text>
                </View>
        </Provider>
    );
}

export default SignUp;