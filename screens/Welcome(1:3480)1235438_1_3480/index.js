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
      <View style={styles.View_1_3493}>
        <Text style={styles.Text_1_3493}>
          Hi Afsar, How are you doing today?
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ff2/1159/259881e6c12399941a953d70355960b1"
        }}
        style={styles.ImageBackground_1_3494}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06e3/3bf0/e50daedbb520c29d89cd1d0e2a3cc657"
        }}
        style={styles.ImageBackground_1_3495}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0c6/7630/b110a7abff94ebc2dc13437d5cc6f4da"
        }}
        style={styles.ImageBackground_1_3496}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56e3/7809/454bd85d42932999c26675a892cfeaa7"
        }}
        style={styles.ImageBackground_1_3497}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc04/855b/068e3199fc189da38064f74bdea83fd8"
        }}
        style={styles.ImageBackground_1_3498}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea09/d32f/2df31f4dd065dbd445e891f270e8f832"
        }}
        style={styles.ImageBackground_1_3500}
      />
      <View style={styles.View_1_3501} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6f5/f793/1a2548eb1a7ade6705c1d48d3bdae639"
        }}
        style={styles.ImageBackground_1_3502}
      />
      <View style={styles.View_1_3503}>
        <View style={styles.View_1_3504} />
        <View style={styles.View_1_3505}>
          <Text style={styles.Text_1_3505}>GET STARTED</Text>
        </View>
      </View>
      <View style={styles.View_1_3506}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6887/b6cc/cb196474c4c209d5cf3768ce3be1985a"
          }}
          style={styles.ImageBackground_1_3507}
        />
        <View style={styles.View_1_3508}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b444/2319/cb7e841374e463c5e5eb272491dd39d7"
            }}
            style={styles.ImageBackground_1_3509}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f265/9a4f/d9b47c12070db897f4e3b058e744c7ab"
            }}
            style={styles.ImageBackground_1_3510}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cdc/c7d7/cbb69dcb9ae64fbab371ec7a15b5425e"
            }}
            style={styles.ImageBackground_1_3511}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/018e/e823/e6b66ae41dd4e9cb73f44798a2894ae7"
            }}
            style={styles.ImageBackground_1_3512}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e66/ef81/dbc873e07f17299112314513f9e871ae"
            }}
            style={styles.ImageBackground_1_3513}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d01d/2bd6/2d635b8b5129543fc9d4c475bb917ebe"
            }}
            style={styles.ImageBackground_1_3514}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6cb/c6b5/7c7acb40181e9ee98be01df78abe7300"
            }}
            style={styles.ImageBackground_1_3515}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1e8/3bda/716678ed76df7946b36df782a5b2120a"
            }}
            style={styles.ImageBackground_1_3516}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1862/8778/e406f0d6716c56bf18c8d38dda2b7c7f"
            }}
            style={styles.ImageBackground_1_3517}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e36/57c4/5d1261cdedc6185b0e36fe6b4eb9d27b"
            }}
            style={styles.ImageBackground_1_3518}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c931/7a04/06e8a42046c4edf11d5f1836e8ad9a9b"
            }}
            style={styles.ImageBackground_1_3519}
          />
          <View style={styles.View_1_3520}>
            <View style={styles.View_1_3521}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4086/660a/a4b720d89cbfcd0b251687dfe9827919"
                }}
                style={styles.ImageBackground_1_3522}
              />
              <View style={styles.View_1_3523}>
                <View style={styles.View_1_3524}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c173/5116/05d9f4024d778d9378c84ff4402337df"
                    }}
                    style={styles.ImageBackground_1_3525}
                  />
                  <View style={styles.View_1_3527}>
                    <View style={styles.View_1_3528}>
                      <View style={styles.View_1_3529}>
                        <View style={styles.View_1_3530}>
                          <View style={styles.View_1_3531}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f88f/88f6/d699c21336d29707c7fa6371692ec187"
                              }}
                              style={styles.ImageBackground_1_3532}
                            />
                          </View>
                          <View style={styles.View_1_3534}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45e7/c941/ebec35f96e6d54dd77cff2d504f43f31"
                              }}
                              style={styles.ImageBackground_1_3535}
                            />
                          </View>
                          <View style={styles.View_1_3537}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cec/0e1b/5f203f75eaa98593f6d029d2c9752283"
                              }}
                              style={styles.ImageBackground_1_3538}
                            />
                          </View>
                          <View style={styles.View_1_3540}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b27/a6e6/52e5edbe788943ece7fe2518bed28a5e"
                              }}
                              style={styles.ImageBackground_1_3541}
                            />
                          </View>
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/946a/9518/efc859b53fb6ccfa9787efbb107f1038"
                          }}
                          style={styles.ImageBackground_1_3543}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c83/0597/55bc04f00ee0a4f4a008899e0e5710d5"
                          }}
                          style={styles.ImageBackground_1_3544}
                        />
                        <View style={styles.View_1_3545}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3fc/643c/909113dd7d996b5453c9ebae105c697e"
                            }}
                            style={styles.ImageBackground_1_3546}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2231/5fc2/66f997a487b0952c4ada3e0100bd847f"
                            }}
                            style={styles.ImageBackground_1_3548}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ee5/300b/ec193beaff627ae36a072174080a5172"
                            }}
                            style={styles.ImageBackground_1_3550}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a9e/339f/764b7b08aaa86cfeb09fa862167c0b31"
                            }}
                            style={styles.ImageBackground_1_3552}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_1_3554}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88c0/8cae/b2bb897d27cd3ea84ce65444c3aa2a63"
                }}
                style={styles.ImageBackground_1_3555}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a97/1e4f/6720dfad28aeb245ae9c53e983a7fe3b"
                }}
                style={styles.ImageBackground_1_3556}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2611/222a/b8c5ca70476b40eb4b60ee1bf4ff6abc"
                }}
                style={styles.ImageBackground_1_3557}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68a4/4eb5/a30ed1979f494cc48a9c35c4a4602683"
                }}
                style={styles.ImageBackground_1_3558}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5db/bc10/23c105461ed48133b7bfb7773f0ad555"
                }}
                style={styles.ImageBackground_1_3561}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb2e/16b8/6f8d4eb30ab3e37dfb58ec1420e9b42d"
                }}
                style={styles.ImageBackground_1_3562}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e82/c66a/77d3f45aa84511de1c145cebe806d299"
                }}
                style={styles.ImageBackground_1_3563}
              />
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/754a/d7b5/2e30561648c52852073ba85b24589cee"
        }}
        style={styles.ImageBackground_1_3566}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b50/1d8d/dc31929a71a7e65ef7038834d6c599e1"
        }}
        style={styles.ImageBackground_1_3567}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30ef/8c78/aea15ae20bfa8b9428414432655ccd8d"
        }}
        style={styles.ImageBackground_1_3568}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13b7/2e0d/f85bc9c4ccd7be1d446d4c7c0c5d178e"
        }}
        style={styles.ImageBackground_1_3569}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_1_3493: {
    width: wp("71.98067632850241%"),
    minWidth: wp("71.98067632850241%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.009661835748794%"),
    top: hp("21.174863387978142%")
  },
  Text_1_3493: {
    color: "rgba(255, 236, 204, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  ImageBackground_1_3494: {
    width: wp("118.84057971014492%"),
    minWidth: wp("118.84057971014492%"),
    height: hp("67.21311475409836%"),
    minHeight: hp("67.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9.420289855072465%"),
    top: hp("50.409836065573764%")
  },
  ImageBackground_1_3495: {
    width: wp("101.93236714975846%"),
    minWidth: wp("101.93236714975846%"),
    height: hp("57.650273224043715%"),
    minHeight: hp("57.650273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.966183574879227%"),
    top: hp("55.19125683060109%")
  },
  ImageBackground_1_3496: {
    width: wp("85.5072463768116%"),
    minWidth: wp("85.5072463768116%"),
    height: hp("48.36065573770492%"),
    minHeight: hp("48.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("59.83606557377049%")
  },
  ImageBackground_1_3497: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.11594202898551%"),
    top: hp("56.01092896174863%")
  },
  ImageBackground_1_3498: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.80193236714976%"),
    top: hp("59.01639344262295%")
  },
  ImageBackground_1_3500: {
    width: wp("68.59903381642512%"),
    minWidth: wp("68.59903381642512%"),
    height: hp("38.79781420765027%"),
    minHeight: hp("38.79781420765027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.70048309178744%"),
    top: hp("64.61748633879782%")
  },
  View_1_3501: {
    width: wp("100.48309178743962%"),
    minWidth: wp("100.48309178743962%"),
    height: hp("36.33879781420765%"),
    minHeight: hp("36.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.4830917874396135%"),
    top: hp("89.34426229508196%"),
    backgroundColor: "rgba(140, 150, 255, 1)"
  },
  ImageBackground_1_3502: {
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
  View_1_3503: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.193236714975845%"),
    top: hp("99.59016393442623%")
  },
  View_1_3504: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 234, 236, 1)",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    borderBottomLeftRadius: 38,
    borderBottomRightRadius: 38
  },
  View_1_3505: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.43478260869565%"),
    top: hp("2.868852459016381%")
  },
  Text_1_3505: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9,
    textTransform: "none"
  },
  View_1_3506: {
    width: wp("103.8647342995169%"),
    height: hp("35.24543470372268%"),
    top: hp("54.23543961321722%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.1739130434782608%")
  },
  ImageBackground_1_3507: {
    width: wp("103.8647342995169%"),
    height: hp("4.508196721311475%"),
    top: hp("30.73723798241121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_3508: {
    width: wp("60.97978969702974%"),
    height: hp("33.85110240165002%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.687471693840582%")
  },
  ImageBackground_1_3509: {
    width: wp("19.507248735658212%"),
    height: hp("7.61338739447255%"),
    top: hp("22.354751336769972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.631357091636474%")
  },
  ImageBackground_1_3510: {
    width: wp("31.599949638624697%"),
    height: hp("7.53430590603521%"),
    top: hp("25.524149826966998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_3511: {
    width: wp("33.063414937632096%"),
    height: hp("8.396303458291976%"),
    top: hp("25.414859792573857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.91637475939764%")
  },
  ImageBackground_1_3512: {
    width: wp("14.230258222939312%"),
    height: hp("3.5481796890008646%"),
    top: hp("26.183621349230485%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.38738689330465%")
  },
  ImageBackground_1_3513: {
    width: wp("41.113524506057516%"),
    height: hp("5.235421331853814%"),
    top: hp("28.615680548662688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.341491994074573%")
  },
  ImageBackground_1_3514: {
    width: wp("10.700483828927009%"),
    height: hp("2.7472678429442023%"),
    top: hp("29.87934175084849%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.17724255548007%")
  },
  ImageBackground_1_3515: {
    width: wp("30.40096633100279%"),
    height: hp("1.8070919266163978%"),
    top: hp("28.599573354252037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.450197671346615%")
  },
  ImageBackground_1_3516: {
    width: wp("7.3768118153447695%"),
    height: hp("0.6587842123104575%"),
    top: hp("28.836678676917906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.669999716938406%")
  },
  ImageBackground_1_3517: {
    width: wp("14.341677790102752%"),
    height: hp("4.016067942634958%"),
    top: hp("25.94934057016841%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.106095613488829%")
  },
  ImageBackground_1_3518: {
    width: wp("6.560387357997434%"),
    height: hp("0.36475384821657275%"),
    top: hp("28.30010711169634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.633758397493956%")
  },
  ImageBackground_1_3519: {
    width: wp("3.6594188155759357%"),
    height: hp("1.4986340465441428%"),
    top: hp("27.056936878975627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.29076853581673%")
  },
  View_1_3520: {
    width: wp("33.10627960352506%"),
    height: hp("22.82475539243938%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.64583923044988%")
  },
  View_1_3521: {
    width: wp("13.852844606851033%"),
    height: hp("11.133820372201054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.68539472939311%")
  },
  ImageBackground_1_3522: {
    width: wp("5.348222152046535%"),
    height: hp("3.1096794566170116%"),
    top: hp("4.953601190952654%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0006191972373272847%")
  },
  View_1_3523: {
    width: wp("13.852844606851033%"),
    height: hp("11.133820372201054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_3524: {
    width: wp("13.852844606851033%"),
    height: hp("11.133820372201054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_3525: {
    width: wp("8.16136327918601%"),
    height: hp("7.158470153808594%"),
    top: hp("0.1252442761197088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_3527: {
    width: wp("11.938375205809368%"),
    height: hp("11.133820372201054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9144694010416714%")
  },
  View_1_3528: {
    width: wp("11.938375205809368%"),
    height: hp("11.133820372201054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_3529: {
    width: wp("11.938375205809368%"),
    height: hp("11.133820372201054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_3530: {
    width: wp("11.938375205809368%"),
    height: hp("10.99884366728569%"),
    top: hp("0.13497722604887485%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_3531: {
    width: wp("10.565836072543968%"),
    height: hp("6.949596196575894%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3725391332653984%")
  },
  ImageBackground_1_3532: {
    width: wp("10.565836072543968%"),
    height: hp("6.949596196575894%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_3534: {
    width: wp("3.2503738495462757%"),
    height: hp("1.9898538381024136%"),
    top: hp("3.591838169619031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_3535: {
    width: wp("3.2503738495462757%"),
    height: hp("1.9898538381024136%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_3537: {
    width: wp("6.6269934465343825%"),
    height: hp("6.630160639194843%"),
    top: hp("4.368682506957327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.569211508340878%")
  },
  ImageBackground_1_3538: {
    width: wp("6.6269934465343825%"),
    height: hp("6.630160639194843%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_3540: {
    width: wp("4.714973191708182%"),
    height: hp("1.4125683268562692%"),
    top: hp("6.132343167164272%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.132021106959542%")
  },
  ImageBackground_1_3541: {
    width: wp("4.714973191708182%"),
    height: hp("1.4125683268562692%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_3543: {
    width: wp("8.814605307463863%"),
    height: hp("3.753659503707469%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.394708753208036%")
  },
  ImageBackground_1_3544: {
    width: wp("0.709848357859441%"),
    height: hp("0.5365963516339578%"),
    top: hp("4.36158310520193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2458395842768724%")
  },
  View_1_3545: {
    width: wp("5.1873953446098%"),
    height: hp("2.4507465258322125%"),
    top: hp("2.8165014715142576%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.128563627528685%")
  },
  ImageBackground_1_3546: {
    width: wp("1.1642492911665911%"),
    height: hp("0.8946079374011098%"),
    top: hp("0.8346995369332646%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8947618272569358%")
  },
  ImageBackground_1_3548: {
    width: wp("2.094202456266984%"),
    height: hp("0.5559377331551307%"),
    top: hp("1.894809118385517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.996218179159115%")
  },
  ImageBackground_1_3550: {
    width: wp("1.6933894963656069%"),
    height: hp("0.9089909616063853%"),
    top: hp("0.3124612276671357%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_3552: {
    width: wp("1.36366063270016%"),
    height: hp("0.7980517350910791%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8237345967315832%")
  },
  View_1_3554: {
    width: wp("33.10627960352506%"),
    height: hp("14.406115630936753%"),
    top: hp("8.418640803769627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_3555: {
    width: wp("16.482654516247734%"),
    height: hp("14.191377358358414%"),
    top: hp("0.00031893370582736225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.926023031778385%")
  },
  ImageBackground_1_3556: {
    width: wp("1.5403270721435547%"),
    height: hp("3.750018865032926%"),
    top: hp("5.891009888362362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.408251481355677%")
  },
  ImageBackground_1_3557: {
    width: wp("1.5403244230482314%"),
    height: hp("3.750018865032926%"),
    top: hp("5.891009888362362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.71326863017059%")
  },
  ImageBackground_1_3558: {
    width: wp("32.625845204228945%"),
    height: hp("6.551970810186668%"),
    top: hp("7.8541448207500935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3428878415609873%")
  },
  ImageBackground_1_3561: {
    width: wp("12.381641185226073%"),
    height: hp("9.901638760592768%"),
    top: hp("0.0016853457591636811%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_3562: {
    width: wp("12.5%"),
    height: hp("9.55496511824144%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.60627960352506%")
  },
  ImageBackground_1_3563: {
    width: wp("16.823670023305404%"),
    height: hp("5.609289283960895%"),
    top: hp("4.031739990567914%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.584550498188406%")
  },
  ImageBackground_1_3566: {
    width: wp("27.56879871018267%"),
    minWidth: wp("27.56879871018267%"),
    height: hp("7.5170965142588795%"),
    minHeight: hp("7.5170965142588795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.15458937198068%"),
    top: hp("59.2896174863388%")
  },
  ImageBackground_1_3567: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.1739130434782608%"),
    top: hp("51.09289617486339%")
  },
  ImageBackground_1_3568: {
    width: wp("2.898550724637681%"),
    minWidth: wp("2.898550724637681%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("48.77049180327869%")
  },
  ImageBackground_1_3569: {
    width: wp("1.4492753623188406%"),
    minWidth: wp("1.4492753623188406%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("47.26775956284153%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
