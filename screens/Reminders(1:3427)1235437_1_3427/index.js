import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_1_3428} />
      <View style={styles.View_5_55} />
      <View style={styles.View_1_3431}>
        <Text style={styles.Text_1_3431}>
          On a scale of 1 to 10, how happy are you feeling now?
        </Text>
      </View>
      <View style={styles.View_1_3432}>
        <Text style={styles.Text_1_3432}>
          When was the last time you felt really happy?
        </Text>
      </View>
      <View style={styles.View_5_54}>
        <Text style={styles.Text_5_54}>
          When was the last time you felt really happy?
        </Text>
      </View>
      <View style={styles.View_5_790}>
        <Text style={styles.Text_5_790}>Today</Text>
      </View>
      <View style={styles.View_5_791}>
        <Text style={styles.Text_5_791}>Not Since a long time</Text>
      </View>
      <View style={styles.View_5_792}>
        <Text style={styles.Text_5_792}>Yesterday</Text>
      </View>
      <View style={styles.View_5_786}>
        <Text style={styles.Text_5_786}>&lt; 5</Text>
      </View>
      <View style={styles.View_5_787}>
        <Text style={styles.Text_5_787}>&gt; 5</Text>
      </View>
      <View style={styles.View_5_788}>
        <Text style={styles.Text_5_788}>=5</Text>
      </View>
      <View style={styles.View_1_3466}>
        <View style={styles.View_1_3467} />
        <View style={styles.View_1_3468}>
          <Text style={styles.Text_1_3468}>SUBMIT</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6f5/f793/1a2548eb1a7ade6705c1d48d3bdae639"
        }}
        style={styles.ImageBackground_1_3479}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cffe/40b4/4f4595f4950f87a048d2d973648dc638"
        }}
        style={styles.ImageBackground_5_782}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cffe/40b4/4f4595f4950f87a048d2d973648dc638"
        }}
        style={styles.ImageBackground_5_784}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cffe/40b4/4f4595f4950f87a048d2d973648dc638"
        }}
        style={styles.ImageBackground_5_785}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/d777/33d9e4e3b1a2f1f6a72adc99b5940277"
        }}
        style={styles.ImageBackground_5_789}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cffe/40b4/4f4595f4950f87a048d2d973648dc638"
        }}
        style={styles.ImageBackground_5_793}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cffe/40b4/4f4595f4950f87a048d2d973648dc638"
        }}
        style={styles.ImageBackground_5_794}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cffe/40b4/4f4595f4950f87a048d2d973648dc638"
        }}
        style={styles.ImageBackground_5_795}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/d777/33d9e4e3b1a2f1f6a72adc99b5940277"
        }}
        style={styles.ImageBackground_5_796}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_1_3428: {
    width: wp("96.37681159420289%"),
    minWidth: wp("96.37681159420289%"),
    height: hp("28.96174863387978%"),
    minHeight: hp("28.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8115942028985508%"),
    top: hp("66.93989071038251%"),
    backgroundColor: "rgba(245, 245, 249, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_5_55: {
    width: wp("96.37681159420289%"),
    minWidth: wp("96.37681159420289%"),
    height: hp("28.96174863387978%"),
    minHeight: hp("28.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8115942028985508%"),
    top: hp("23.224043715846996%"),
    backgroundColor: "rgba(245, 245, 249, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_3431: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.951690821256038%"),
    top: hp("11.202185792349727%")
  },
  Text_1_3431: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_3432: {
    width: wp("62.63606859290082%"),
    minWidth: wp("62.63606859290082%"),
    minHeight: hp("8.197851128916923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.917874396135265%"),
    top: hp("57.103825136612016%")
  },
  Text_1_3432: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_54: {
    width: wp("62.63606859290082%"),
    minWidth: wp("62.63606859290082%"),
    minHeight: hp("8.197851128916923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.917874396135265%"),
    top: hp("57.103825136612016%")
  },
  Text_5_54: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_790: {
    width: wp("62.63606859290082%"),
    minWidth: wp("62.63606859290082%"),
    minHeight: hp("8.197851128916923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("83.7431693989071%")
  },
  Text_5_790: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_791: {
    width: wp("29.227053140096622%"),
    minWidth: wp("29.227053140096622%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.01449275362319%"),
    top: hp("83.7431693989071%")
  },
  Text_5_791: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_792: {
    width: wp("62.63606859290082%"),
    minWidth: wp("62.63606859290082%"),
    minHeight: hp("8.197851128916923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.19806763285024%"),
    top: hp("84.56284153005464%")
  },
  Text_5_792: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_786: {
    width: wp("24.396135265700483%"),
    minWidth: wp("24.396135265700483%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386473%"),
    top: hp("39.34426229508197%")
  },
  Text_5_786: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_787: {
    width: wp("27.77777777777778%"),
    minWidth: wp("27.77777777777778%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.59903381642512%"),
    top: hp("39.34426229508197%")
  },
  Text_5_787: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_788: {
    width: wp("27.77777777777778%"),
    minWidth: wp("27.77777777777778%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.608695652173914%"),
    top: hp("39.34426229508197%")
  },
  Text_5_788: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_3466: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830925245791818%"),
    top: hp("100.82160657872268%")
  },
  View_1_3467: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(142, 151, 253, 1)",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    borderBottomLeftRadius: 38,
    borderBottomRightRadius: 38
  },
  View_1_3468: {
    width: wp("18.115942028985508%"),
    minWidth: wp("18.115942028985508%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.855065092372435%"),
    top: hp("3.4133660988729417%")
  },
  Text_1_3468: {
    color: "rgba(246, 241, 251, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9,
    textTransform: "none"
  },
  ImageBackground_1_3479: {
    width: wp("34.54106280193236%"),
    minWidth: wp("34.54106280193236%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.850241545893724%"),
    top: hp("120.49180327868851%")
  },
  ImageBackground_5_782: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("29.508196721311474%")
  },
  ImageBackground_5_784: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.57004830917874%"),
    top: hp("29.508196721311474%")
  },
  ImageBackground_5_785: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.61352657004831%"),
    top: hp("29.508196721311474%")
  },
  ImageBackground_5_789: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.96135265700483%"),
    top: hp("31.830601092896178%")
  },
  ImageBackground_5_793: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("74.18032786885246%")
  },
  ImageBackground_5_794: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.77777777777779%"),
    top: hp("74.18032786885246%")
  },
  ImageBackground_5_795: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.82125603864734%"),
    top: hp("74.18032786885246%")
  },
  ImageBackground_5_796: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.169082125603865%"),
    top: hp("76.50273224043715%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
