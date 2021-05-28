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
        style={styles.ImageBackground_1_3609}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bde4/532b/006e5074f7cc1d8bed6ba8f6d56d0817"
        }}
        style={styles.ImageBackground_1_3610}
      />
      <View style={styles.View_1_3618}>
        <View style={styles.View_1_3619} />
        <View style={styles.View_1_3620}>
          <Text style={styles.Text_1_3620}>NEXT</Text>
        </View>
      </View>
      <View style={styles.View_1_3621}>
        <View style={styles.View_1_3622} />
        <View style={styles.View_1_3623}>
          <Text style={styles.Text_1_3623}>Password</Text>
        </View>
      </View>
      <View style={styles.View_5_2}>
        <View style={styles.View_5_3} />
        <View style={styles.View_5_4}>
          <Text style={styles.Text_5_4}>Phone No.</Text>
        </View>
      </View>
      <View style={styles.View_5_5}>
        <View style={styles.View_5_6} />
        <View style={styles.View_5_7}>
          <Text style={styles.Text_5_7}>E-Mail</Text>
        </View>
      </View>
      <View style={styles.View_5_8}>
        <View style={styles.View_5_9} />
        <View style={styles.View_5_10}>
          <Text style={styles.Text_5_10}>Name</Text>
        </View>
      </View>
      <View style={styles.View_1_3625}>
        <View style={styles.View_1_3626} />
        <View style={styles.View_1_3627}>
          <Text style={styles.Text_1_3627}>Confirm Password</Text>
        </View>
        <View style={styles.View_5_12}>
          <Text style={styles.Text_5_12}>Confirm Password</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c60c/7d0a/4c2e50e69c6bc91da7946571481ecb94"
        }}
        style={styles.ImageBackground_1_3628}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c60c/7d0a/4c2e50e69c6bc91da7946571481ecb94"
        }}
        style={styles.ImageBackground_5_11}
      />
      <View style={styles.View_1_3629}>
        <View style={styles.View_1_3630} />
      </View>
      <View style={styles.View_1_3642}>
        <Text style={styles.Text_1_3642}>Create your account </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6f5/f793/1a2548eb1a7ade6705c1d48d3bdae639"
        }}
        style={styles.ImageBackground_1_3654}
      />
      <View style={styles.View_1_3656}>
        <View style={styles.View_1_3657}>
          <View style={styles.View_1_3658}>
            <View style={styles.View_1_3659} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e120/c31a/b3e77e3284cb055fe7cec42c047e5d4c"
          }}
          style={styles.ImageBackground_1_3660}
        />
      </View>
      <View style={styles.View_5_14}>
        <Text style={styles.Text_5_14}>Age</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_1_3609: {
    width: wp("61.569291266842164%"),
    height: hp("35.272362714256744%"),
    top: hp("12.568639536372949%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-24.430161628170293%")
  },
  ImageBackground_1_3610: {
    width: wp("132.1725006840655%"),
    height: hp("58.5020638554474%"),
    top: hp("-10.624202874188866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.073926253019323%")
  },
  View_1_3618: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072463768115942%"),
    top: hp("101.91256830601093%")
  },
  View_1_3619: {
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
  View_1_3620: {
    width: wp("24.784600446765552%"),
    minWidth: wp("24.784600446765552%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.125603864734295%"),
    top: hp("3.415300546448094%")
  },
  Text_1_3620: {
    color: "rgba(246, 241, 251, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9,
    textTransform: "none"
  },
  View_1_3621: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("60.719407712175546%")
  },
  View_1_3622: {
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
  View_1_3623: {
    width: wp("28.994177850548198%"),
    minWidth: wp("28.994177850548198%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("3.0737704918032804%")
  },
  Text_1_3623: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.8,
    textTransform: "none"
  },
  View_5_2: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.773214588994565%"),
    top: hp("49.86338797814208%")
  },
  View_5_3: {
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
  View_5_4: {
    width: wp("28.994177850548198%"),
    minWidth: wp("28.994177850548198%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8309178743961345%"),
    top: hp("3.0737704918032804%")
  },
  Text_5_4: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.8,
    textTransform: "none"
  },
  View_5_5: {
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
  View_5_6: {
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
  View_5_7: {
    width: wp("28.994177850548198%"),
    minWidth: wp("28.994177850548198%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("3.0737704918032804%")
  },
  Text_5_7: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.8,
    textTransform: "none"
  },
  View_5_8: {
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
  View_5_9: {
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
  View_5_10: {
    width: wp("28.994177850548198%"),
    minWidth: wp("28.994177850548198%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("3.0737704918032804%")
  },
  Text_5_10: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.8,
    textTransform: "none"
  },
  View_1_3625: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("16.948437299884734%"),
    minHeight: hp("16.948437299884734%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("72.0582055263832%")
  },
  View_1_3626: {
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
  View_1_3627: {
    width: wp("42.45339361365866%"),
    minWidth: wp("42.45339361365866%"),
    minHeight: hp("2.667844751493527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("3.0737704918032733%")
  },
  Text_1_3627: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.8,
    textTransform: "none"
  },
  View_5_12: {
    width: wp("42.45339361365866%"),
    minWidth: wp("42.45339361365866%"),
    minHeight: hp("2.667844751493527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.014760482714372%"),
    top: hp("14.280592287824447%")
  },
  Text_5_12: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.8,
    textTransform: "none"
  },
  ImageBackground_1_3628: {
    width: wp("3.412095129777844%"),
    minWidth: wp("3.412095129777844%"),
    height: hp("1.2506401603990565%"),
    minHeight: hp("1.2506401603990565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.68454672403382%"),
    top: hp("75.73615735997268%")
  },
  ImageBackground_5_11: {
    width: wp("3.412095129777844%"),
    minWidth: wp("3.412095129777844%"),
    height: hp("1.2506401603990565%"),
    minHeight: hp("1.2506401603990565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.89881845372886%"),
    top: hp("64.89071038251366%")
  },
  View_1_3629: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("83.39700334059084%")
  },
  View_1_3630: {
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
  View_1_3642: {
    width: wp("51.93236714975845%"),
    minWidth: wp("51.93236714975845%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.02898550724638%"),
    top: hp("18.23306891436134%")
  },
  Text_1_3642: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_3654: {
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
  View_1_3656: {
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
  View_1_3657: {
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
  View_1_3658: {
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
  View_1_3659: {
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
  ImageBackground_1_3660: {
    width: wp("4.516525084269796%"),
    height: hp("2.459016654009376%"),
    top: hp("2.527322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.384240781627416%")
  },
  View_5_14: {
    width: wp("34.78260869565217%"),
    minWidth: wp("34.78260869565217%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6041324633907%"),
    top: hp("86.74863387978142%")
  },
  Text_5_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.8,
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
