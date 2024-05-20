import { View ,StyleSheet, Text, Image,Platform} from "react-native";

const getColor=(color)=>{
    switch (color.toLowerCase()) {
      case "white":
        return { backgroundColor: "white" };
      case "blue":
        return { backgroundColor: "blue" };
      case "purple":
        return { backgroundColor: "purple" };
      default:
        return { backgroundColor:"red" };
    }
}
export default function DigimonCard({name,number,image,dp,color,level}){
    const {backgroundColor}=getColor(color)
    return (
      <View style={styles.card}>
        <View style={styles.container}>
          <Text style={styles.containerTexr}>{name}</Text>
          <Text style={styles.containerText}>{dp}</Text>
        </View>

        <Image
          source={image}
          accessibilityLabel={`${name} digimon`}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.badge}>
          <View style={[styles.color, { backgroundColor }]}>
            <Text style={styles.colorText}>Color: {color}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.colorNumber}>Number: {number}</Text>
        </View>
        <View >
          <Text style={styles.level}>Level: {level}</Text>
        </View>
      </View>
    );
}
const styles=StyleSheet.create({
    card:{
        backgroundColor:"white",
        borderRadius:16,
        borderWidth:2,
        padding:16,
        margin:16,
        ...Platform.select({
            ios:{
                shadowOffset:{width:2,height:2},
                shadowColor:"#333",
                shadowOpacity:0.3,
                shadowRadius:4
            },
            android:{
                elevation:5
            }
        })
    },
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:32
    },
    containerTexr:{
        fontSize:30,
        fontWeight:"bold"
    },
    containerText:{
        fontSize:22

    },
    image:{
        width:"100%",
        height:200,
        marginBottom:16
    },
    badge:{
        marginBottom:40,
        alignItems:"center"
    },
    color:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:6,
        paddingHorizontal:12,
        borderRadius:20,
        borderWidth:4

    },
    colorText:{
        fontSize:22,
        marginRight:12

    },
    colorNumber:{
        fontSize:22,
        fontWeight:"bold"
    },
    level:{
        fontSize:20,
        fontWeight:"bold"
    }


})