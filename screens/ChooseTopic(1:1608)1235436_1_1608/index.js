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
      <View style={styles.View_1_1609}>
        <View style={styles.View_1_1610} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/462e/dfca/2a0895647fd5de1cb92f7834db796ec6"
          }}
          style={styles.ImageBackground_1_1611}
        />
      </View>
      <View style={styles.View_1_1618}>
        <Text style={styles.Text_1_1618}>
          Don’t Worry.  We are there to help you
        </Text>
      </View>
      <View style={styles.View_1_1624}>
        <View style={styles.View_1_1625} />
        <View style={styles.View_1_2300}>
          <View style={styles.View_1_2301}>
            <Text style={styles.Text_1_2301}>Eating  Disorder</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_5_716}>
        <View style={styles.View_5_717} />
        <View style={styles.View_5_718}>
          <View style={styles.View_5_719}>
            <Text style={styles.Text_5_719}>Regular Check-up</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_2302}>
        <View style={styles.View_1_2303} />
        <View style={styles.View_5_701}>
          <Text style={styles.Text_5_701}>Anxiety Disorder</Text>
        </View>
      </View>
      <View style={styles.View_1_2310}>
        <View style={styles.View_1_2311} />
        <View style={styles.View_1_2312} />
        <View style={styles.View_1_2313}>
          <View style={styles.View_1_2314}>
            <Text style={styles.Text_1_2314}>
              Post Traumatic Stress Disorder
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_2559}>
        <View style={styles.View_1_2560}>
          <View style={styles.View_1_2561} />
          <View style={styles.View_1_2562}>
            <View style={styles.View_1_2563}>
              <Text style={styles.Text_1_2563}>Paranoia</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d306/fba3/a317506753c449c7da6a55d16c1f8e25"
        }}
        style={styles.ImageBackground_5_706}
      />
      <View style={styles.View_1_2666}>
        <View style={styles.View_1_2667}>
          <View style={styles.View_1_2668}>
            <View style={styles.View_1_2669}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a64e/0990/76867b7ad927bd3ccb026a3a14038a6a"
                }}
                style={styles.ImageBackground_1_2670}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed2d/34ea/9d6b6398c21ae01040183607dff8dd2c"
                }}
                style={styles.ImageBackground_1_2673}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83bb/c08f/00f97410a555b9f9a80719870de7c942"
                }}
                style={styles.ImageBackground_1_2675}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10e5/7427/f2e29deed9af0d8de7e45a6a1584bf80"
                }}
                style={styles.ImageBackground_1_2677}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1727/a77e/aec1bbdd04d4a96133fac81422077c3c"
                }}
                style={styles.ImageBackground_1_2679}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20ba/1fa5/ee1591f91375c7f9f1a01dacd356377c"
                }}
                style={styles.ImageBackground_1_2681}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e32/7142/6ea3035527633bf349f84e51c0e39484"
                }}
                style={styles.ImageBackground_1_2683}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c116/7e25/1dbd058b2f293c31a45c6ed40707c656"
                }}
                style={styles.ImageBackground_1_2685}
              />
            </View>
            <View style={styles.View_1_2687}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81a3/1561/24362e3118126d861b88bf5b978030db"
                }}
                style={styles.ImageBackground_1_2688}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8970/c729/c11e9244996d035b05240b38842c3a1e"
                }}
                style={styles.ImageBackground_1_2691}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9260/a5ee/7d6a18e7a21419a35d4d164369c5724f"
                }}
                style={styles.ImageBackground_1_2693}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/826f/e58d/df24fae7168e2d33d78e514551abed1d"
                }}
                style={styles.ImageBackground_1_2695}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f924/052c/14115d7b5f60744a2db44efb5470234f"
                }}
                style={styles.ImageBackground_1_2697}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58fc/2265/835daa5162b4d0e13b51b0d239b10207"
                }}
                style={styles.ImageBackground_1_2699}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8542/0461/437cd99b8bcef07abd531539cd559dec"
                }}
                style={styles.ImageBackground_1_2701}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34ab/f03e/f6a7305dfcbec6c011d258719ce7e8c5"
                }}
                style={styles.ImageBackground_1_2703}
              />
            </View>
          </View>
          <View style={styles.View_1_2705}>
            <View style={styles.View_1_2706}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e08b/9409/573650bfaa9bd60542981754aa425683"
                }}
                style={styles.ImageBackground_1_2707}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c867/a50e/7876e0403d58aeef2698f69e179f17b1"
                }}
                style={styles.ImageBackground_1_2710}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9625/3d03/32c44e1139596f69a440080d80fd6aad"
                }}
                style={styles.ImageBackground_1_2712}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f06a/da82/f1e03a87a92202e567d9c1a878eadb25"
                }}
                style={styles.ImageBackground_1_2714}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768c/6445/86be1ebaf8c05e82a828fbbeff8e6f29"
                }}
                style={styles.ImageBackground_1_2716}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9d1/a1a0/ace1daf9bbccd5f3324a097195ad8491"
                }}
                style={styles.ImageBackground_1_2718}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a910/9be0/35286a8048c52fa2b2e8e5d78e6ce9ba"
                }}
                style={styles.ImageBackground_1_2720}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2d1/8d11/f4c8fc0b83998e1563960d97cf679556"
                }}
                style={styles.ImageBackground_1_2722}
              />
            </View>
            <View style={styles.View_1_2724}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c57/d75b/4cab23caa99de36df2fb970c9e2bf366"
                }}
                style={styles.ImageBackground_1_2725}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6861/af1c/7a551739dcf63a55293ed3424e2c6279"
                }}
                style={styles.ImageBackground_1_2728}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cccf/57a8/45cf3345055477ba8460b6ff02e00249"
                }}
                style={styles.ImageBackground_1_2730}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a453/9a6d/551b34d77b27cfa8a4d2196f77f0c3f4"
                }}
                style={styles.ImageBackground_1_2732}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef2f/0a62/1b7bb0ec516628b3dcbc29b70b5c5394"
                }}
                style={styles.ImageBackground_1_2734}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cfd/d613/4d9beca27d72cd1651a74d1140cf6d72"
                }}
                style={styles.ImageBackground_1_2736}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17f0/f71b/4489b6787fb6c4ae698531a83fc6c71b"
                }}
                style={styles.ImageBackground_1_2738}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8368/0a22/132b55dd7b938bc96bd4c4af3b298f69"
                }}
                style={styles.ImageBackground_1_2740}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2909/c383/0db2641521bd0138200c698dd7ecab00"
          }}
          style={styles.ImageBackground_1_2742}
        />
        <View style={styles.View_1_2744}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a96/dccc/a8ac73affa039390b6dc66f9c4318c3b"
            }}
            style={styles.ImageBackground_1_2745}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f13/4596/298b7461ff202e554f553adc5dff0c97"
            }}
            style={styles.ImageBackground_1_2748}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c62/e660/8886a0e435114600af029deb89219309"
            }}
            style={styles.ImageBackground_1_2749}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a36c/6477/6fc661929cbc81ff8ed79581b66028f6"
            }}
            style={styles.ImageBackground_1_2750}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c58b/7159/c281315dcaf9c061e287baf1fff495ed"
            }}
            style={styles.ImageBackground_1_2751}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9323/5634/8cb69f8cf8a10e71f812ef334e2be6bb"
            }}
            style={styles.ImageBackground_1_2752}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9183/0c5d/0dd19188992b3b1ce58ba3682e0a2f4b"
            }}
            style={styles.ImageBackground_1_2753}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f87a/92ca/49c7ce10d58b2230c590ee082d4d31b8"
            }}
            style={styles.ImageBackground_1_2754}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b82e/7266/4c79fe50b4dab07f54d6caf944c8f5c2"
            }}
            style={styles.ImageBackground_1_2755}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5cc/db17/104d3a5540dfd17d37028606cd1b8123"
            }}
            style={styles.ImageBackground_1_2758}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0400/9949/e75cf6f3d6ea0ff8d216735ada967416"
            }}
            style={styles.ImageBackground_1_2760}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c175/174a/54fbde66089fd3195f506ad90cf26426"
            }}
            style={styles.ImageBackground_1_2763}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/174a/a67a/4c9408af0462c23703570a8dc250a73f"
            }}
            style={styles.ImageBackground_1_2766}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e7d/4ffa/f94ad8342c3ec69bcbd6b694bfdc3259"
            }}
            style={styles.ImageBackground_1_2769}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7418/1958/06f5a5dd9f823c38ba57a33d63c6654c"
            }}
            style={styles.ImageBackground_1_2772}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40e4/bd5e/4683d2403322e8e30e1769ab1acad879"
            }}
            style={styles.ImageBackground_1_2775}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/941f/f5f5/8cd8986ab16d447c16b33b7a458b800f"
            }}
            style={styles.ImageBackground_1_2778}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/440c/9c29/303dc4f93276568ab155fb570e6bcb3e"
            }}
            style={styles.ImageBackground_1_2781}
          />
        </View>
      </View>
      <View style={styles.View_1_2784}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd90/c556/3a30ffd37ccca68c38b0156ca0a6f5b4"
          }}
          style={styles.ImageBackground_1_2785}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fef2/3190/cf8e8c7222c252b07f25ba48cfc10027"
          }}
          style={styles.ImageBackground_1_2786}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/005d/5268/529085c1d9c7591f7c34477f7ba694fb"
          }}
          style={styles.ImageBackground_1_2788}
        />
        <View style={styles.View_1_2791}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7d2/dd99/c00a5cccea008f0dddc90676088ab5b7"
            }}
            style={styles.ImageBackground_1_2792}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0c8/0a91/3a8c16f4190007786de8fb4c62f826cc"
            }}
            style={styles.ImageBackground_1_2794}
          />
          <View style={styles.View_1_2796}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e72/7b74/30636ca39ac11e4ffd0cd77de08c6237"
              }}
              style={styles.ImageBackground_1_2797}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a4a/161f/d8eaa144f0fb61394debefefcba4509a"
              }}
              style={styles.ImageBackground_1_2799}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4324/3e25/0f17a0621e089dc599184db439871b89"
              }}
              style={styles.ImageBackground_1_2801}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91b6/bcbf/a8d016a7f48d7dabacc6f6aa36a332a1"
              }}
              style={styles.ImageBackground_1_2803}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/299e/84ad/b6d9738fd5c7ea7e52f78b3d3dc0ec61"
              }}
              style={styles.ImageBackground_1_2805}
            />
            <View style={styles.View_1_2807}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b2c/f134/97bbd636348062982eadf1c072dd7e37"
                }}
                style={styles.ImageBackground_1_2808}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d975/8f2f/1b481660f3d261f172f758caa340d075"
              }}
              style={styles.ImageBackground_1_2810}
            />
          </View>
        </View>
        <View style={styles.View_1_2812}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fbd/002f/688dafc5edfc0f844cb790998ea4e668"
            }}
            style={styles.ImageBackground_1_2813}
          />
          <View style={styles.View_1_2814} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5ce/d5db/80a2fd9eca4eef40c86610903008cad9"
          }}
          style={styles.ImageBackground_1_2815}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5ce/d5db/80a2fd9eca4eef40c86610903008cad9"
          }}
          style={styles.ImageBackground_1_2838}
        />
        <View style={styles.View_1_2861}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c11/d7c9/ad6c65e50b8e2710607a0244624de7ca"
            }}
            style={styles.ImageBackground_1_2862}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf6e/82f6/b3b7a9802a6f3824fcaefccb06d0edcf"
            }}
            style={styles.ImageBackground_1_2863}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84c7/71fd/3854cc9c01815e8a0bca720566906d77"
            }}
            style={styles.ImageBackground_1_2864}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7843/5794/45a6501c4974bec9ee2a3955ce138d12"
            }}
            style={styles.ImageBackground_1_2865}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/200e/e3e6/e2a72f3bcc7b3325514b2ca3b38cc061"
            }}
            style={styles.ImageBackground_1_2866}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b1f/3a4d/f822fee1cf53eaf34a0e439d4c02afa3"
            }}
            style={styles.ImageBackground_1_2867}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81fc/0481/423477db672ee99e513bcca11a5c8029"
            }}
            style={styles.ImageBackground_1_2868}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dc6/d242/d00ff497918b573a35c762a0f927cb50"
          }}
          style={styles.ImageBackground_1_2871}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca97/b3ea/bcae4ac7b116a8af21f916f9b00c46e1"
          }}
          style={styles.ImageBackground_1_2873}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e45/6c9c/324a6703a94dc2fcc772bf0f31b39302"
          }}
          style={styles.ImageBackground_1_2874}
        />
        <View style={styles.View_1_2875}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/928f/edd6/75a0643968e4a5cd891a670d10de53eb"
            }}
            style={styles.ImageBackground_1_2876}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08cf/4698/272a7017291646cc57ac8f046f380e9f"
            }}
            style={styles.ImageBackground_1_2878}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e8e/791b/f627e7202e73cabe0431aea8271f291f"
            }}
            style={styles.ImageBackground_1_2880}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/beb5/4143/f6b18cd56e5735d263546a458ac1b50d"
            }}
            style={styles.ImageBackground_1_2882}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6f5/f793/1a2548eb1a7ade6705c1d48d3bdae639"
        }}
        style={styles.ImageBackground_1_3426}
      />
      <View source={{ uri: "null" }} style={styles.View_5_57} />
      <View style={styles.View_5_292}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebf1/05fa/11e01ff7ab9c038bba1850d331275acc"
          }}
          style={styles.ImageBackground_5_293}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a32/fd3b/4bb20a235281b152cee73dee2f5a8a40"
          }}
          style={styles.ImageBackground_5_297}
        />
        <View style={styles.View_5_299}>
          <View style={styles.View_5_300}>
            <View style={styles.View_5_301}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7e5/97b0/96dbcce4e4d2e2505dbb9868802ec24f"
                }}
                style={styles.ImageBackground_5_302}
              />
              <View style={styles.View_5_306}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2800/7339/423028acda174ac9b37d22d2e9d59dcf"
                  }}
                  style={styles.ImageBackground_5_307}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ab5/81b8/75bba35b03a53c216c57a2ab480c0008"
                  }}
                  style={styles.ImageBackground_5_308}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a75/9259/2bb48f898a3bb77c1bcfb1c95550fb78"
              }}
              style={styles.ImageBackground_5_311}
            />
            <View style={styles.View_5_317}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b806/098c/5a85cc38cc3d7a7cf236cae90e2c9a8a"
                }}
                style={styles.ImageBackground_5_318}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5998/f4a2/03edab2aca643274616b9bae37ff7021"
                }}
                style={styles.ImageBackground_5_321}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae1c/a0fe/7d33866fb87d61bdbe0ba2f3f8c33f8b"
                }}
                style={styles.ImageBackground_5_322}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/404a/649a/fff84be1b9e3e2d5ecea508ea457e845"
                }}
                style={styles.ImageBackground_5_323}
              />
            </View>
            <View style={styles.View_5_326}>
              <View style={styles.View_5_327}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99c4/4e35/9d0ac6bd98b8ee6ad317dfd8d91d7d96"
                  }}
                  style={styles.ImageBackground_5_328}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b0b/aed1/289cb654d3337ecbfbaff568a72d989c"
                  }}
                  style={styles.ImageBackground_5_329}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6baa/0a30/acab79f575f50fa5b067c71dc60df985"
                }}
                style={styles.ImageBackground_5_332}
              />
            </View>
          </View>
          <View style={styles.View_5_333}>
            <View style={styles.View_5_334}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe6c/2674/0ff62fdc5cd3c192fb1722a817f5ef33"
                }}
                style={styles.ImageBackground_5_335}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5635/7856/4430b737d599f8481a67c8aeb5068d18"
                }}
                style={styles.ImageBackground_5_339}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b30/ed06/267c8bc64f8399925abb7cabfcf972cb"
                }}
                style={styles.ImageBackground_5_340}
              />
            </View>
            <View style={styles.View_5_341}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e212/88b2/f4b30e321f204c96f90f52f9d081fbff"
                }}
                style={styles.ImageBackground_5_342}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3be/b1e4/5d53a846128c8fdfaeb85fc85be188f2"
                }}
                style={styles.ImageBackground_5_345}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_5_348}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/251c/a274/30973a190894e3fbb216c6b936f19e54"
            }}
            style={styles.ImageBackground_5_349}
          />
        </View>
        <View style={styles.View_5_360}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e217/b286/76ea0408d96a4c0ca824be5c9cc259d7"
            }}
            style={styles.ImageBackground_5_361}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/461e/f6ec/ed9705811152f239cc402d53163b6e3d"
          }}
          style={styles.ImageBackground_5_369}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51ad/039d/325bfbd5d5fdbaa7fb8fc490f4f966ae"
          }}
          style={styles.ImageBackground_5_372}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c205/384a/de2d533de197f655ba060151e337b7d5"
          }}
          style={styles.ImageBackground_5_516}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c95/4943/10385d1f8a3bef618530c550549b8a98"
        }}
        style={styles.ImageBackground_5_670}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_1_1609: {
    width: wp("93.96135265700482%"),
    minWidth: wp("93.96135265700482%"),
    height: hp("97.26775956284153%"),
    minHeight: hp("97.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("14.617486338797814%")
  },
  View_1_1610: {
    width: wp("80.04115007925725%"),
    minWidth: wp("80.04115007925725%"),
    height: hp("82.70980751579576%"),
    minHeight: hp("82.70980751579576%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.606748055720674%"),
    top: hp("14.557956216113816%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  ImageBackground_1_1611: {
    width: wp("93.96135265700482%"),
    minWidth: wp("93.96135265700482%"),
    height: hp("26.152789006467724%"),
    minHeight: hp("26.152789006467724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1618: {
    width: wp("62.56038647342995%"),
    minWidth: wp("62.56038647342995%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("10.382513661202186%")
  },
  Text_1_1618: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1624: {
    width: wp("42.61710494036836%"),
    minWidth: wp("42.61710494036836%"),
    height: hp("28.688524590163933%"),
    minHeight: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.29468599033817%"),
    top: hp("24.316939890710383%")
  },
  View_1_1625: {
    width: wp("42.61710494036836%"),
    minWidth: wp("42.61710494036836%"),
    height: hp("28.688524590163933%"),
    minHeight: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(108, 178, 142, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_2300: {
    width: wp("31.642512077294686%"),
    minWidth: wp("31.642512077294686%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6231884057971016%"),
    top: hp("20.081967213114755%")
  },
  View_1_2301: {
    width: wp("31.642512077294686%"),
    minWidth: wp("31.642512077294686%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2301: {
    color: "rgba(255, 236, 204, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_716: {
    width: wp("88.64734299516908%"),
    minWidth: wp("88.64734299516908%"),
    height: hp("25.882122686000468%"),
    minHeight: hp("25.882122686000468%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("87.29508196721312%")
  },
  View_5_717: {
    width: wp("88.64734299516908%"),
    minWidth: wp("88.64734299516908%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(151, 161, 240, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_5_718: {
    width: wp("65.28119073397872%"),
    minWidth: wp("65.28119073397872%"),
    height: hp("5.117095884729604%"),
    minHeight: hp("5.117095884729604%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.657004830917873%"),
    top: hp("20.765027322404364%")
  },
  View_5_719: {
    width: wp("65.28119073397872%"),
    minWidth: wp("65.28119073397872%"),
    minHeight: hp("5.117095884729604%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_5_719: {
    color: "rgba(255, 236, 204, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2302: {
    width: wp("42.61710494036836%"),
    minWidth: wp("42.61710494036836%"),
    height: hp("28.688524590163933%"),
    minHeight: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.55203615640096%"),
    top: hp("55.32786885245902%")
  },
  View_1_2303: {
    width: wp("42.61710494036836%"),
    minWidth: wp("42.61710494036836%"),
    height: hp("28.688524590163933%"),
    minHeight: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 207, 134, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_5_701: {
    width: wp("26.811594202898554%"),
    minWidth: wp("26.811594202898554%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6073841334541186%"),
    top: hp("23.360655737704917%")
  },
  Text_5_701: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2310: {
    width: wp("42.61710494036836%"),
    minWidth: wp("42.61710494036836%"),
    height: hp("22.814207650273225%"),
    minHeight: hp("22.814207650273225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.985507246376811%"),
    top: hp("61.612021857923494%")
  },
  View_1_2311: {
    width: wp("42.61710494036836%"),
    minWidth: wp("42.61710494036836%"),
    height: hp("22.814207650273225%"),
    minHeight: hp("22.814207650273225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(63, 65, 78, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_2312: {
    width: wp("42.51207729468599%"),
    minWidth: wp("42.51207729468599%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10496867451690894%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(78, 85, 103, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_2313: {
    width: wp("31.643838928517514%"),
    minWidth: wp("31.643838928517514%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6073841334541075%"),
    top: hp("16.120218579234972%")
  },
  View_1_2314: {
    width: wp("31.643838928517514%"),
    minWidth: wp("31.643838928517514%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2314: {
    color: "rgba(235, 234, 236, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2559: {
    width: wp("43.23671497584541%"),
    minWidth: wp("43.23671497584541%"),
    height: hp("33.23107860127433%"),
    minHeight: hp("33.23107860127433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.985507246376811%"),
    top: hp("28.142076502732237%")
  },
  View_1_2560: {
    width: wp("43.23671497584541%"),
    minWidth: wp("43.23671497584541%"),
    height: hp("33.23107860127433%"),
    minHeight: hp("33.23107860127433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2561: {
    width: wp("43.23671497584541%"),
    minWidth: wp("43.23671497584541%"),
    height: hp("30.87431693989071%"),
    minHeight: hp("30.87431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 110, 90, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_2562: {
    width: wp("32.10390984724109%"),
    minWidth: wp("32.10390984724109%"),
    height: hp("8.50430264499018%"),
    minHeight: hp("8.50430264499018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.898547499652071%"),
    top: hp("24.72677595628415%")
  },
  View_1_2563: {
    width: wp("32.10390984724109%"),
    minWidth: wp("32.10390984724109%"),
    minHeight: hp("8.50430264499018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2563: {
    color: "rgba(254, 249, 243, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_706: {
    width: wp("33.57487922705314%"),
    minWidth: wp("33.57487922705314%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.367149758454104%"),
    top: hp("28.142076502732237%"),
    resizeMode: "cover"
  },
  View_1_2666: {
    width: wp("33.58657026060538%"),
    height: hp("16.67536751168673%"),
    top: hp("57.377115885416664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.321830417798914%")
  },
  View_1_2667: {
    width: wp("29.890060424804688%"),
    height: hp("15.207522032690829%"),
    top: hp("0.3034049695958174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.696511678649607%")
  },
  View_1_2668: {
    width: wp("10.744873452301762%"),
    height: hp("6.213995407187873%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2669: {
    width: wp("4.437745135763417%"),
    height: hp("4.7263890667691255%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.307120945142657%")
  },
  ImageBackground_1_2670: {
    width: wp("4.437745135763417%"),
    height: hp("4.7263890667691255%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2673: {
    width: wp("2.0082678771825226%"),
    height: hp("4.653316768792157%"),
    top: hp("0.0213623046875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8834028013662447%")
  },
  ImageBackground_1_2675: {
    width: wp("1.109510228253793%"),
    height: hp("0.8184516364759435%"),
    top: hp("0.9930657558753921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6183972934593953%")
  },
  ImageBackground_1_2677: {
    width: wp("1.2735320750066048%"),
    height: hp("0.8272878459242523%"),
    top: hp("1.237734810250707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7246928191991344%")
  },
  ImageBackground_1_2679: {
    width: wp("2.1936679231947744%"),
    height: hp("0.7262099636057036%"),
    top: hp("2.36223981680115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.012885199652785673%")
  },
  ImageBackground_1_2681: {
    width: wp("1.7786735497810993%"),
    height: hp("1.0173797607421875%"),
    top: hp("2.864957507190816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.473597134944896%")
  },
  ImageBackground_1_2683: {
    width: wp("2.3073611052139946%"),
    height: hp("0.5316705651622001%"),
    top: hp("3.14383168038124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1327735790307969%")
  },
  ImageBackground_1_2685: {
    width: wp("1.2097294203901061%"),
    height: hp("0.6431441489464599%"),
    top: hp("0.7010548492598474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29025607638889994%")
  },
  View_1_2687: {
    width: wp("8.332748228801046%"),
    height: hp("4.965244355748911%"),
    top: hp("1.2487515725724734%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2688: {
    width: wp("8.332748228801046%"),
    height: hp("4.965244355748911%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2691: {
    width: wp("7.422084163352487%"),
    height: hp("4.554988256569118%"),
    top: hp("0.037892138371695694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10471436136586476%")
  },
  ImageBackground_1_2693: {
    width: wp("2.22920012358882%"),
    height: hp("0.09762446085611978%"),
    top: hp("1.7483132784483857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7115239682404919%")
  },
  ImageBackground_1_2695: {
    width: wp("2.3700868449925228%"),
    height: hp("0.19344084901236444%"),
    top: hp("1.9940444029094095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9735660276551101%")
  },
  ImageBackground_1_2697: {
    width: wp("0.3882500284535873%"),
    height: hp("1.7745575618222764%"),
    top: hp("1.2401278553113215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.899169627019177%")
  },
  ImageBackground_1_2699: {
    width: wp("3.1010798210107184%"),
    height: hp("0.36021581764429644%"),
    top: hp("3.761734467386546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.12106367470561%")
  },
  ImageBackground_1_2701: {
    width: wp("0.8513657943062161%"),
    height: hp("1.7149328534068957%"),
    top: hp("1.8730309491600465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.82625531919912%")
  },
  ImageBackground_1_2703: {
    width: wp("0.4024213062968231%"),
    height: hp("1.1255453193122573%"),
    top: hp("0.1963756123527176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8411055855129135%")
  },
  View_1_2705: {
    width: wp("9.265829629944143%"),
    height: hp("4.172177132361574%"),
    top: hp("11.035344900329257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.62422895201162%")
  },
  View_1_2706: {
    width: wp("8.046523384425951%"),
    height: hp("2.7442546490111637%"),
    top: hp("1.4279224833504145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2707: {
    width: wp("8.046523384425951%"),
    height: hp("2.7442546490111637%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2710: {
    width: wp("7.926034236299818%"),
    height: hp("1.7866958034494536%"),
    top: hp("0.6888801282872237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10101760643117075%")
  },
  ImageBackground_1_2712: {
    width: wp("0.6666948253981733%"),
    height: hp("0.9387938702692752%"),
    top: hp("1.778407696166326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.956342171931624%")
  },
  ImageBackground_1_2714: {
    width: wp("0.5822683302100731%"),
    height: hp("1.0164542276351178%"),
    top: hp("1.6857814267684859%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.526022206182077%")
  },
  ImageBackground_1_2716: {
    width: wp("2.2485244677262606%"),
    height: hp("0.664124202207138%"),
    top: hp("0.6759455946625224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8237458012530254%")
  },
  ImageBackground_1_2718: {
    width: wp("0.5707568592495388%"),
    height: hp("1.3549596234097507%"),
    top: hp("1.0098483393101105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4394492918742543%")
  },
  ImageBackground_1_2720: {
    width: wp("2.0428367283033286%"),
    height: hp("0.8310474333215933%"),
    top: hp("0.2870674341754267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.82342529296875%")
  },
  ImageBackground_1_2722: {
    width: wp("1.5486288761747058%"),
    height: hp("0.24518914561454064%"),
    top: hp("1.746495564778641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.793872777966499%")
  },
  View_1_2724: {
    width: wp("8.07691196312651%"),
    height: hp("2.761557323685109%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1889176668176447%")
  },
  ImageBackground_1_2725: {
    width: wp("8.07691196312651%"),
    height: hp("2.761557323685109%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2728: {
    width: wp("7.871795506868962%"),
    height: hp("1.8644332885742188%"),
    top: hp("0.2310018070408546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17415659439160436%")
  },
  ImageBackground_1_2730: {
    width: wp("1.5893355659816577%"),
    height: hp("0.4940210144376494%"),
    top: hp("0.9217705231546773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.021910736526266%")
  },
  ImageBackground_1_2732: {
    width: wp("1.6330442566802537%"),
    height: hp("0.5846211167632557%"),
    top: hp("1.0219865809372948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.593057678517496%")
  },
  ImageBackground_1_2734: {
    width: wp("0.9351702703945879%"),
    height: hp("1.3187304220564378%"),
    top: hp("0.13320172419314247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8534746400400053%")
  },
  ImageBackground_1_2736: {
    width: wp("2.0502265524749017%"),
    height: hp("0.8350049211679261%"),
    top: hp("1.7310575057900053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.524087657099173%")
  },
  ImageBackground_1_2738: {
    width: wp("0.570566297153344%"),
    height: hp("1.3491406466791538%"),
    top: hp("0.32791179385992564%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8641227685310895%")
  },
  ImageBackground_1_2740: {
    width: wp("0.955019596118282%"),
    height: hp("0.7620973013789276%"),
    top: hp("0.01662415884884183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.798074473505423%")
  },
  ImageBackground_1_2742: {
    width: wp("29.994820857393567%"),
    height: hp("11.635440555426593%"),
    top: hp("5.039925913993123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2744: {
    width: wp("19.87778852527268%"),
    height: hp("15.939137193023182%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4658791362375467%")
  },
  ImageBackground_1_2745: {
    width: wp("3.6534595028789725%"),
    height: hp("0.6583995506411694%"),
    top: hp("5.819468680626713%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.979797805564992%")
  },
  ImageBackground_1_2748: {
    width: wp("9.114245170556405%"),
    height: hp("5.184174626251387%"),
    top: hp("1.4433949371504653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.613844277202212%")
  },
  ImageBackground_1_2749: {
    width: wp("4.376991013973807%"),
    height: hp("0.7541218741995389%"),
    top: hp("15.185015318823652%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.027511670393643%")
  },
  ImageBackground_1_2750: {
    width: wp("2.157338460286458%"),
    height: hp("2.511656088907211%"),
    top: hp("3.5495236923134357%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.30821412312236%")
  },
  ImageBackground_1_2751: {
    width: wp("13.878036351595524%"),
    height: hp("9.343834131793246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.999752173677159%")
  },
  ImageBackground_1_2752: {
    width: wp("3.5912711839169122%"),
    height: hp("2.7841250101725263%"),
    top: hp("4.664781705929286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.365729880217778%")
  },
  ImageBackground_1_2753: {
    width: wp("16.896890096618357%"),
    height: hp("10.098349982923498%"),
    top: hp("5.8305604861733755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2754: {
    width: wp("3.3450838448344795%"),
    height: hp("9.505197910663208%"),
    top: hp("6.042455454341699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.500353384709008%")
  },
  ImageBackground_1_2755: {
    width: wp("1.4629732583455992%"),
    height: hp("4.350232817436177%"),
    top: hp("8.885070925853306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.705816591419456%")
  },
  ImageBackground_1_2758: {
    width: wp("12.458294486078088%"),
    height: hp("6.509266003884904%"),
    top: hp("9.426991405382829%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.796099381746302%")
  },
  ImageBackground_1_2760: {
    width: wp("6.144181772130699%"),
    height: hp("1.2171174659103643%"),
    top: hp("1.4325772478280783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.647637998424294%")
  },
  ImageBackground_1_2763: {
    width: wp("5.757892074216391%"),
    height: hp("11.258567226389067%"),
    top: hp("4.184997016614908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.794660485309102%")
  },
  ImageBackground_1_2766: {
    width: wp("0.4260758846854242%"),
    height: hp("0.3792822686700873%"),
    top: hp("2.5303428941737067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.47436892007284%")
  },
  ImageBackground_1_2769: {
    width: wp("0.8863016027183349%"),
    height: hp("0.09732168228899846%"),
    top: hp("2.2305441684410283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.856052711965951%")
  },
  ImageBackground_1_2772: {
    width: wp("0.25130746445218144%"),
    height: hp("0.3428490435490843%"),
    top: hp("3.2700835681352487%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.290327284071175%")
  },
  ImageBackground_1_2775: {
    width: wp("1.106109250570841%"),
    height: hp("0.20779468974129098%"),
    top: hp("2.773442294428264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.175827689792804%")
  },
  ImageBackground_1_2778: {
    width: wp("0.4442242608554121%"),
    height: hp("0.3895410423070355%"),
    top: hp("4.44360951908299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.844844652258821%")
  },
  ImageBackground_1_2781: {
    width: wp("0.9412074434584465%"),
    height: hp("0.7003278680186454%"),
    top: hp("3.5595628081775175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.856001112196175%")
  },
  View_1_2784: {
    width: wp("42.51207729468599%"),
    height: hp("11.748639091116484%"),
    top: hp("62.97814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.09047592089372%")
  },
  ImageBackground_1_2785: {
    width: wp("13.526301913791233%"),
    height: hp("5.0962432486112%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.298952111875376%")
  },
  ImageBackground_1_2786: {
    width: wp("1.4515110835936909%"),
    height: hp("1.4901412640764413%"),
    top: hp("1.7845779168801315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.011568889525776%")
  },
  ImageBackground_1_2788: {
    width: wp("10.380817726614394%"),
    height: hp("4.708967573655759%"),
    top: hp("3.1452783469945373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.126455776933312%")
  },
  View_1_2791: {
    width: wp("4.698019442350968%"),
    height: hp("3.3782521232229765%"),
    top: hp("0.5906735613046479%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.05019809888757%")
  },
  ImageBackground_1_2792: {
    width: wp("4.698019442350968%"),
    height: hp("3.3782521232229765%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2794: {
    width: wp("1.464840525014389%"),
    height: hp("1.420698791253762%"),
    top: hp("1.6746979593579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5766308180951825%")
  },
  View_1_2796: {
    width: wp("2.607720831166143%"),
    height: hp("2.1864487173778766%"),
    top: hp("0.49678614882172667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.621946620480447%")
  },
  ImageBackground_1_2797: {
    width: wp("2.607720831166143%"),
    height: hp("2.1864487173778766%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2799: {
    width: wp("0.8333166440327963%"),
    height: hp("0.47366137061614155%"),
    top: hp("1.2347445461919335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.541417808348431%")
  },
  ImageBackground_1_2801: {
    width: wp("0.4508650821188222%"),
    height: hp("0.470458484086834%"),
    top: hp("1.160328766035903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2803: {
    width: wp("0.6988683760454114%"),
    height: hp("0.09092659246726115%"),
    top: hp("1.1332360773138532%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2484066728232577%")
  },
  ImageBackground_1_2805: {
    width: wp("0.557539313311738%"),
    height: hp("0.12203044578677318%"),
    top: hp("1.0518725452527349%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10512531667515645%")
  },
  View_1_2807: {
    width: wp("0.3223435026436036%"),
    height: hp("0.40137520253332587%"),
    top: hp("1.1389560386782733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7135031879812068%")
  },
  ImageBackground_1_2808: {
    width: wp("0.3223435026436036%"),
    height: hp("0.40137520253332587%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2810: {
    width: wp("0.7283548226103115%"),
    height: hp("0.10160279404270194%"),
    top: hp("1.6796007833845579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6114978145286081%")
  },
  View_1_2812: {
    width: wp("42.51207729468599%"),
    minWidth: wp("42.51207729468599%"),
    height: hp("7.0671613099145105%"),
    minHeight: hp("7.0671613099145105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.68147778120197%")
  },
  ImageBackground_1_2813: {
    width: wp("43.41384592839485%"),
    height: hp("7.067160267647498%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.24095065351845557%")
  },
  View_1_2814: {
    width: wp("42.51207729468599%"),
    minWidth: wp("42.51207729468599%"),
    height: hp("22.814207650273225%"),
    minHeight: hp("22.814207650273225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-6.047597999781203%"),
    backgroundColor: "rgba(117, 131, 202, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1_2815: {
    width: wp("18.916963955054538%"),
    height: hp("5.711606552040642%"),
    top: hp("5.327868852459012%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376816%")
  },
  ImageBackground_1_2838: {
    width: wp("18.916963955054538%"),
    height: hp("5.711606552040642%"),
    top: hp("5.327868852459012%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.739130434782606%")
  },
  View_1_2861: {
    width: wp("7.3811752208765%"),
    height: hp("3.226374537566972%"),
    top: hp("7.658994914404026%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.931956784160818%")
  },
  ImageBackground_1_2862: {
    width: wp("6.5173941533922575%"),
    height: hp("3.052447272128746%"),
    top: hp("0.17391684276810793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3966787587041445%")
  },
  ImageBackground_1_2863: {
    width: wp("6.664927570140304%"),
    height: hp("3.0088502852643124%"),
    top: hp("0.20006523757685102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1885547730081889%")
  },
  ImageBackground_1_2864: {
    width: wp("6.803977892594637%"),
    height: hp("2.9180865470177486%"),
    top: hp("0.22713082735656087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26185040312688557%")
  },
  ImageBackground_1_2865: {
    width: wp("0.936217757238858%"),
    height: hp("0.3576132769141692%"),
    top: hp("2.112316694415995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.102824851510608%")
  },
  ImageBackground_1_2866: {
    width: wp("7.3811752208765%"),
    height: hp("3.058597689769307%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2867: {
    width: wp("2.5474684249951642%"),
    height: hp("2.1858293502057187%"),
    top: hp("0.1940451033128454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4106988584361773%")
  },
  ImageBackground_1_2868: {
    width: wp("1.5983355793975977%"),
    height: hp("0.5964414669516308%"),
    top: hp("2.0771631126195444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.799145758439952%")
  },
  ImageBackground_1_2871: {
    width: wp("2.6703307018187887%"),
    height: hp("0.836814817835073%"),
    top: hp("6.22228403560451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.131318465523098%")
  },
  ImageBackground_1_2873: {
    width: wp("5.392002713853034%"),
    height: hp("4.140693633282771%"),
    top: hp("3.2461697938012364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.493292398498827%")
  },
  ImageBackground_1_2874: {
    width: wp("5.7425116571251325%"),
    height: hp("4.3849205058780525%"),
    top: hp("0.5539357336492472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.717183799559365%")
  },
  View_1_2875: {
    width: wp("6.702342010350619%"),
    height: hp("6.206642213414927%"),
    top: hp("1.1999911949282804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.441152968844353%")
  },
  ImageBackground_1_2876: {
    width: wp("0.7672865033725609%"),
    height: hp("1.4186452646724512%"),
    top: hp("3.641514178833674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.98101806640625%")
  },
  ImageBackground_1_2878: {
    width: wp("2.962818237894399%"),
    height: hp("0.24944420069293247%"),
    top: hp("5.957198012721989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1973391915289113%")
  },
  ImageBackground_1_2880: {
    width: wp("1.3092112426020672%"),
    height: hp("0.800035950916061%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.393130537392437%")
  },
  ImageBackground_1_2882: {
    width: wp("0.5605559418166893%"),
    height: hp("0.8587402072760576%"),
    top: hp("1.8108492991963487%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_3426: {
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
  View_5_57: {
    width: wp("33.091787439613526%"),
    minWidth: wp("33.091787439613526%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.468599033816425%"),
    top: hp("77.59562841530054%")
  },
  View_5_292: {
    width: wp("39.61352657004831%"),
    minWidth: wp("39.61352657004831%"),
    height: hp("19.94535519125683%"),
    minHeight: hp("19.94535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.710144927536232%"),
    top: hp("30.05464480874317%")
  },
  ImageBackground_5_293: {
    width: wp("3.3816425120772946%"),
    height: hp("2.3224043715846996%"),
    top: hp("5.601092896174862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%")
  },
  ImageBackground_5_297: {
    width: wp("16.666666666666664%"),
    height: hp("1.639344262295082%"),
    top: hp("18.306010928961747%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.318840579710146%")
  },
  View_5_299: {
    width: wp("25.604318075133982%"),
    height: hp("12.704630367091443%"),
    top: hp("3.9616819287909806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487450935990337%")
  },
  View_5_300: {
    width: wp("15.20855668662251%"),
    height: hp("6.540239573827858%"),
    top: hp("0.0000010422670158050096%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.883880615234375%")
  },
  View_5_301: {
    width: wp("4.443436774654665%"),
    height: hp("4.846742765499594%"),
    top: hp("1.6934931603937216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6790861415402354%")
  },
  ImageBackground_5_302: {
    width: wp("4.443436774654665%"),
    height: hp("4.846742765499594%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_306: {
    width: wp("3.781327878795384%"),
    height: hp("0.25388425816603694%"),
    top: hp("2.996003823202166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3312410363828491%")
  },
  ImageBackground_5_307: {
    width: wp("0.4470023556032042%"),
    height: hp("0.18259475791389174%"),
    top: hp("0.071294190453699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6671775043874533%")
  },
  ImageBackground_5_308: {
    width: wp("3.781327878795384%"),
    height: hp("0.15642551776489927%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_311: {
    width: wp("15.20855668662251%"),
    height: hp("3.5659628487675565%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_317: {
    width: wp("3.324774037236753%"),
    height: hp("0.7833483440628468%"),
    top: hp("2.934721649670209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2517809291968618%")
  },
  ImageBackground_5_318: {
    width: wp("3.324774037236753%"),
    height: hp("0.17782899199939164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_321: {
    width: wp("0.4410656178055178%"),
    height: hp("0.06771582723315296%"),
    top: hp("0.4550183405641661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4307381450266092%")
  },
  ImageBackground_5_322: {
    width: wp("0.9649009520304952%"),
    height: hp("0.06385527021897947%"),
    top: hp("0.7194925527103635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.170866961640435%")
  },
  ImageBackground_5_323: {
    width: wp("2.9757384516766683%"),
    height: hp("0.24560683411978634%"),
    top: hp("0.27942240563898224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1622702188537879%")
  },
  View_5_326: {
    width: wp("0.5095891906443426%"),
    height: hp("0.5075373936220596%"),
    top: hp("2.6147435923091678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1693578158023854%")
  },
  View_5_327: {
    width: wp("0.5095891906443426%"),
    height: hp("0.3310682995071828%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_328: {
    width: wp("0.5095891906443426%"),
    height: hp("0.3310682995071828%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_329: {
    width: wp("0.4118675195076615%"),
    height: hp("0.25008832170663636%"),
    top: hp("0.03534014759168258%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0694164331408551%")
  },
  ImageBackground_5_332: {
    width: wp("0.2764715664628623%"),
    height: hp("0.21101216800877304%"),
    top: hp("0.2965270495805612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1334996615055104%")
  },
  View_5_333: {
    width: wp("25.604318075133982%"),
    height: hp("8.214836954419079%"),
    top: hp("4.489792370405354%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000008292820144362167%")
  },
  View_5_334: {
    width: wp("25.604318075133982%"),
    height: hp("2.5507504822777918%"),
    top: hp("5.664092725743359%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_335: {
    width: wp("25.604318075133982%"),
    height: hp("2.284121904216829%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_339: {
    width: wp("3.5745233729265737%"),
    height: hp("0.6766459980949027%"),
    top: hp("1.5042810492176883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.429408898100181%")
  },
  ImageBackground_5_340: {
    width: wp("3.517371099352261%"),
    height: hp("0.8049844392661839%"),
    top: hp("1.7457691046709627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.807567172580292%")
  },
  View_5_341: {
    width: wp("18.62469180194652%"),
    height: hp("7.010938300461065%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.513979335913911%")
  },
  ImageBackground_5_342: {
    width: wp("18.62469364479544%"),
    height: hp("1.6870602883927808%"),
    top: hp("0.011171017839608055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_345: {
    width: wp("14.722925453370319%"),
    height: hp("7.010938300461065%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9277627917303573%")
  },
  View_5_348: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.884057971014492%"),
    top: hp("10.245901639344261%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_5_349: {
    width: wp("7.730438858990508%"),
    height: hp("3.551467520291688%"),
    top: hp("0.00023763687884326146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.0008735103883594775%")
  },
  View_5_360: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.21256038647343%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_5_361: {
    width: wp("9.191953502415458%"),
    height: hp("5.198726237145929%"),
    top: hp("-0.20877025166495855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.367952429729959%")
  },
  ImageBackground_5_369: {
    width: wp("8.629898403001867%"),
    height: hp("3.2787117150311915%"),
    top: hp("5.191256830601091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_372: {
    width: wp("5.9716989452712195%"),
    height: hp("3.6757062693111235%"),
    top: hp("0.5464480874316955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.60869565217391%")
  },
  ImageBackground_5_516: {
    width: wp("4.106020812251142%"),
    height: hp("3.6490659244724966%"),
    top: hp("9.465318690232237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1400966183574877%")
  },
  ImageBackground_5_670: {
    width: wp("0.8862709077660011%"),
    height: hp("0.4943114160839977%"),
    top: hp("45.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.17874396135265%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
