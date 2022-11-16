import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';

const Header = () => {


    return (
        <>
            <View style={styles.container}>

                <TouchableOpacity onPress={() => { alert("Pressed"); }} style={styles.subContainer}>
                    <SimpleLineIcons name="menu" size={18} color="black" />
                </TouchableOpacity>

                <View style={styles.subContainer}>
                    <Text style={styles.centerText} >Zintlr News</Text>
                </View>

                <TouchableOpacity onPress={() => { alert("Pressed"); }} style={styles.subContainer}>
                    <AntDesign name="search1" size={18} color="black" />
                </TouchableOpacity>

            </View>
        </>
    );
};


export default Header;


const styles = StyleSheet.create({
    container: {
        width: "95%",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 45,
        alignSelf: "center"
        // backgroundColor:"red"
    },
    subContainer: {
        justifyContent: "center"
    },
    centerText: {
        fontWeight: "700",
        fontSize: 18,
        alignSelf: "center",
        color: "#2C332E",
    }

})