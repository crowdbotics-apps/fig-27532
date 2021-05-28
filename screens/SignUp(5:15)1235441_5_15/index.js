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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5ff/fbdd/b9d0ea4c4046282c96582d9962c23885"
        }}
        style={styles.ImageBackground_5_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bde4/532b/006e5074f7cc1d8bed6ba8f6d56d0817"
        }}
        style={styles.ImageBackground_5_17}
      />
      <View style={styles.View_5_21}>
        <View style={styles.View_5_22} />
        <View style={styles.View_5_23}>
          <Text style={styles.Text_5_23}>SIGN UP</Text>
        </View>
      </View>
      <View style={styles.View_5_30}>
        <View style={styles.View_5_31} />
        <View style={styles.View_5_32}>
          <Text style={styles.Text_5_32}>Sex</Text>
        </View>
      </View>
      <View style={styles.View_5_33}>
        <View style={styles.View_5_34} />
        <View style={styles.View_5_35}>
          <Text style={styles.Text_5_35}>Ethinicity</Text>
        </View>
      </View>
      <View style={styles.View_5_45}>
        <Text style={styles.Text_5_45}>i have read the Privace Policy</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6f5/f793/1a2548eb1a7ade6705c1d48d3bdae639"
        }}
        style={styles.ImageBackground_5_46}
      />
      <View style={styles.View_5_47} />
      <View style={styles.View_5_48}>
        <View style={styles.View_5_49}>
          <View style={styles.View_5_50}>
            <View style={styles.View_5_51} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e120/c31a/b3e77e3284cb055fe7cec42c047e5d4c"
          }}
          style={styles.ImageBackground_5_52}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_5_16: {
    width: wp("61.569291266842164%"),
    height: hp("35.272362714256744%"),
    top: hp("12.568639536372949%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-24.430161628170293%")
  },
  ImageBackground_5_17: {
    width: wp("132.1725006840655%"),
    height: hp("58.5020638554474%"),
    top: hp("-10.624202874188866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.073926253019323%")
  },
  View_5_21: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("102.13569682803963%")
  },
  View_5_22: {
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
  View_5_23: {
    width: wp("24.784600446765552%"),
    minWidth: wp("24.784600446765552%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.54106280193237%"),
    top: hp("3.3287840462773204%")
  },
  Text_5_23: {
    color: "rgba(246, 241, 251, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9,
    textTransform: "none"
  },
  View_5_30: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.014760482714372%"),
    top: hp("39.20765027322404%")
  },
  View_5_31: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 243, 247, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_5_32: {
    width: wp("28.994177850548198%"),
    minWidth: wp("28.994177850548198%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("3.0737704918032804%")
  },
  Text_5_32: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.8,
    textTransform: "none"
  },
  View_5_33: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.014760482714372%"),
    top: hp("27.732240437158467%")
  },
  View_5_34: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 243, 247, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_5_35: {
    width: wp("28.994177850548198%"),
    minWidth: wp("28.994177850548198%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("3.0737704918032804%")
  },
  Text_5_35: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.8,
    textTransform: "none"
  },
  View_5_45: {
    width: wp("52.83962747325069%"),
    minWidth: wp("52.83962747325069%"),
    minHeight: hp("2.30899169796803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("95.34215041197062%")
  },
  Text_5_45: {
    color: "rgba(142, 151, 253, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.7000000000000001,
    textTransform: "none"
  },
  ImageBackground_5_46: {
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
  View_5_47: {
    width: wp("5.837497619039195%"),
    minWidth: wp("5.837497619039195%"),
    height: hp("3.3015355386369216%"),
    minHeight: hp("3.3015355386369216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.83499690991093%"),
    top: hp("94.7358011547985%"),
    borderColor: "rgba(161, 164, 178, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_5_48: {
    width: wp("13.28502507601383%"),
    minWidth: wp("13.28502507601383%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.773214588994565%"),
    top: hp("6.830601092896176%")
  },
  View_5_49: {
    width: wp("13.28502507601383%"),
    minWidth: wp("13.28502507601383%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_50: {
    width: wp("13.28502507601383%"),
    minWidth: wp("13.28502507601383%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_51: {
    width: wp("13.28502507601383%"),
    minWidth: wp("13.28502507601383%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(235, 234, 236, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    borderBottomLeftRadius: 38,
    borderBottomRightRadius: 38
  },
  ImageBackground_5_52: {
    width: wp("4.516525084269796%"),
    height: hp("2.459016654009376%"),
    top: hp("2.527322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.384240781627416%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
