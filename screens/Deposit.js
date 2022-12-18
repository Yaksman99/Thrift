import { View,Text } from "react-native";
import { Button } from "react-native-paper";
import { SafeArea } from '../Utils/safearea';


export function  Deposit ({navigation}) {
    const price = 890;
    
 return ( <SafeArea>
        <Text>Deposit</Text>
        <Button mode='contained'
        onPress={() => navigation.navigate('Pay Online',{
            productPrice:price,
            productName:'Dell X1 Yoga laptop',
            discount:false
        })}>Pay {price}</Button>
    </SafeArea>
    )
}