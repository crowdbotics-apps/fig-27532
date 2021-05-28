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
      <View style={styles.View_1_3662}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01f7/8ce8/1656a625af3de3f105018e4a55d39d05"
          }}
          style={styles.ImageBackground_1_3663}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7593/b2c7/9eba9d3e7c1cf3caefc1b99cfd4301d5"
          }}
          style={styles.ImageBackground_1_3664}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0323/79b5/864aba87919c8669b53c04b9796be0d0"
          }}
          style={styles.ImageBackground_4_3}
        />
        <View style={styles.View_5_0}>
          <Text style={styles.Text_5_0}>Amiga</Text>
        </View>
      </View>
      <View style={styles.View_1_3970}>
        <View style={styles.View_1_3971} />
        <View style={styles.View_1_3972}>
          <Text style={styles.Text_1_3972}>SIGN UP</Text>
        </View>
        <View style={styles.View_1_3973}>
          <Text style={styles.Text_1_3973}>
            ALREADY HAVE AN ACCOUNT? LOG IN
          </Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6f5/f793/1a2548eb1a7ade6705c1d48d3bdae639"
        }}
        style={styles.ImageBackground_1_3977}
      />
      <View style={styles.View_5_1}>
        <Text style={styles.Text_5_1}>Your mental  health companion</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_1_3662: {
    width: wp("102.17391304347827%"),
    minWidth: wp("102.17391304347827%"),
    height: hp("68.85245901639344%"),
    minHeight: hp("68.85245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.8454106280193237%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_3663: {
    width: wp("100.2415458937198%"),
    height: hp("68.71585116360357%"),
    top: hp("-0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594203%")
  },
  ImageBackground_1_3664: {
    width: wp("102.17068437216939%"),
    height: hp("9.653681353793118%"),
    top: hp("59.19878183166838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_3: {
    width: wp("51.690821256038646%"),
    height: hp("29.23497267759563%"),
    top: hp("39.61748633879781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.1207729468599%"),
    resizeMode: "cover"
  },
  View_5_0: {
    width: wp("26.570048309178745%"),
    top: hp("51.775956284153004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.43961352657005%")
  },
  Text_5_0: {
    color: "rgba(3, 58, 169, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_3970: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.193236714975845%"),
    top: hp("96.31147540983606%")
  },
  View_1_3971: {
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
  View_1_3972: {
    width: wp("25.36231884057971%"),
    minWidth: wp("25.36231884057971%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.68115942028986%"),
    top: hp("3.415300546448094%")
  },
  Text_1_3972: {
    color: "rgba(246, 241, 251, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9,
    textTransform: "none"
  },
  View_1_3973: {
    width: wp("68.11594202898551%"),
    minWidth: wp("68.11594202898551%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.11111111111111%"),
    top: hp("11.338797814207666%")
  },
  Text_1_3973: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.7000000000000001,
    textTransform: "none"
  },
  ImageBackground_1_3977: {
    width: wp("34.54106280193236%"),
    minWidth: wp("34.54106280193236%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.971014492753625%"),
    top: hp("120.49180327868851%")
  },
  View_5_1: {
    width: wp("121.01449275362319%"),
    minWidth: wp("121.01449275362319%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.024154589371982%"),
    top: hp("71.03825136612022%")
  },
  Text_5_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
