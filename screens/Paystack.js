import { View,Text } from "react-native";
import { SafeArea } from '../Utils/safearea';


export function  Paystack ({navigation,route}) {
    const {productPrice,productName,discount} = route.params;
    return ( <SafeArea>
        <Text>Price for {productName} is {productPrice}</Text>
    </SafeArea>
    )
}
