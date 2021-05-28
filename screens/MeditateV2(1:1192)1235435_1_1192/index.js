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
      <View style={styles.View_1_1193}>
        <View style={styles.View_1_1194}>
          <View style={styles.View_1_1195}>
            <View style={styles.View_1_1196} />
          </View>
        </View>
        <View style={styles.View_1_1197}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c07a/7ed2/c077c22040a08f3bf39debf701a637fd"
            }}
            style={styles.ImageBackground_1_1198}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c53/a403/433c5eed964f852425dbaffff1b222cc"
            }}
            style={styles.ImageBackground_1_1199}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3968/42ea/fbd131bb2d6db71caebaeda9531f18e5"
            }}
            style={styles.ImageBackground_1_1200}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d877/70d3/02b2c83685d2ed63434dc7695289960c"
            }}
            style={styles.ImageBackground_1_1201}
          />
          <View style={styles.View_1_1203}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a12a/7388/d56f573d3b1f7d250c28bf919e9d76d0"
              }}
              style={styles.ImageBackground_1_1204}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a202/7555/9bfc5afc49b67ad434ad03ecffad990d"
              }}
              style={styles.ImageBackground_1_1205}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/921f/88a4/cadd2cef7d0994bc58910d9e5d3c03c2"
              }}
              style={styles.ImageBackground_1_1206}
            />
            <View style={styles.View_1_1209}>
              <View style={styles.View_1_1210}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edab/2cda/5470eca4970d77107b0c840473b26b0e"
                  }}
                  style={styles.ImageBackground_1_1211}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6446/ef92/29a400a14a66d96d813aaf44867f8f08"
                  }}
                  style={styles.ImageBackground_1_1213}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e05a/7dc6/bf95c2b572b3397c6aff23e853414d5f"
                  }}
                  style={styles.ImageBackground_1_1215}
                />
              </View>
              <View style={styles.View_1_1216}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d30/347a/21b9ae659a6f7d1f097b955392c443f2"
                  }}
                  style={styles.ImageBackground_1_1217}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40e4/b7eb/5867284141f7edaff7052680dd788212"
                  }}
                  style={styles.ImageBackground_1_1219}
                />
              </View>
              <View style={styles.View_1_1220}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e40/f273/442644747bc440e8f0fd1a9a9fd31fc7"
                  }}
                  style={styles.ImageBackground_1_1221}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b15d/cc5b/7940639205621321502acd245f1839f4"
                  }}
                  style={styles.ImageBackground_1_1223}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a2e8/5f35/a024575a959d2073ad36921d7cef9da1"
                  }}
                  style={styles.ImageBackground_1_1225}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1847/fc9a/8cd45ee9e12c999601c49a9c62601761"
              }}
              style={styles.ImageBackground_1_1226}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba48/4bc9/bfdcc5ef64460dfc92390b0005a7b19a"
              }}
              style={styles.ImageBackground_1_1229}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/662c/b6cb/d72c04d1663e3569eac849ffd12954e8"
              }}
              style={styles.ImageBackground_1_1231}
            />
            <View style={styles.View_1_1232}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3088/6949/7e12a83014131d546348376a3a3be374"
                }}
                style={styles.ImageBackground_1_1233}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc97/448c/5624eea7e88eb8e32794c0bb8a78ec1f"
            }}
            style={styles.ImageBackground_1_1236}
          />
        </View>
      </View>
      <View style={styles.View_1_1237}>
        <View style={styles.View_1_1238}>
          <View style={styles.View_1_1239} />
        </View>
        <View style={styles.View_1_1240}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c76/781c/107cd73e3db38bf620ba7e76b8b60a21"
            }}
            style={styles.ImageBackground_1_1241}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd42/9cfb/4242961de0160b9fea3574b958df0140"
            }}
            style={styles.ImageBackground_1_1247}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0ae/29c6/91a05e3aa5aea1c266d8864490c35b0d"
            }}
            style={styles.ImageBackground_1_1250}
          />
          <View style={styles.View_1_1251}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/798f/80ae/fa09b3dfc7fb49884705b2e4b3dcf765"
              }}
              style={styles.ImageBackground_1_1252}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bd5/1022/feba29bbef6153f260be432926ae8591"
              }}
              style={styles.ImageBackground_1_1253}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9cbf/e6da/1669154c44dab361b00db27f99a88d13"
              }}
              style={styles.ImageBackground_1_1254}
            />
            <View style={styles.View_1_1257}>
              <View style={styles.View_1_1258}>
                <View style={styles.View_1_1259}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51a9/90f7/0fe07303961cffb8f41d99db1fac6ad3"
                    }}
                    style={styles.ImageBackground_1_1260}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8229/a833/94a81853a4bbdac3925f62d7f286bf0f"
                    }}
                    style={styles.ImageBackground_1_1261}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1440/9927/ca7be1291cc5ccaf54f00322a1a13522"
                  }}
                  style={styles.ImageBackground_1_1267}
                />
              </View>
              <View style={styles.View_1_1268}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5aee/9b76/6500eb8ccddec6cadcb3cec8e3337ad2"
                  }}
                  style={styles.ImageBackground_1_1269}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4044/e06a/d78dd1a864d8fe006ad8dbb3048cb5ff"
                  }}
                  style={styles.ImageBackground_1_1270}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee75/bd0b/69701e69624e541a45d273cc4a32732f"
                  }}
                  style={styles.ImageBackground_1_1271}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0711/0695/0136b10b6ab9794d549e3d17d41959f5"
                  }}
                  style={styles.ImageBackground_1_1272}
                />
              </View>
            </View>
            <View style={styles.View_1_1278}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cb2/e705/9a6799e0670274ed55494d8fe4f44ad0"
                }}
                style={styles.ImageBackground_1_1279}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5e7/3041/c7ca89db590c22f5e1ae6ab493dddb02"
                }}
                style={styles.ImageBackground_1_1283}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e33/583a/86286cbfb6b8943ffd64d9213b128f5a"
              }}
              style={styles.ImageBackground_1_1286}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1_1289}>
        <View style={styles.View_1_1290} />
        <View style={styles.View_1_1291}>
          <View style={styles.View_1_1292}>
            <View style={styles.View_1_1293} />
          </View>
          <View style={styles.View_1_1294}>
            <View style={styles.View_1_1295}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56e8/1ae0/1fcda085342715b41031d65204fe41bf"
                }}
                style={styles.ImageBackground_1_1296}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83ff/86af/3288360897dc7ea88e12a10abde772df"
                }}
                style={styles.ImageBackground_1_1299}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/030e/92c4/d10268cb0ee2c8e72747bf0d8653d115"
                }}
                style={styles.ImageBackground_1_1302}
              />
              <View style={styles.View_1_1303}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0850/79d4/d2c08cd915211f81f02a357c4ee10e84"
                  }}
                  style={styles.ImageBackground_1_1304}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e18/3f10/0516efeacf59834835363cecfcd56393"
                  }}
                  style={styles.ImageBackground_1_1305}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56de/9706/0b6371c5817e802256d0225e0e8889da"
                  }}
                  style={styles.ImageBackground_1_1306}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f203/428d/b60a166feeb08d1bff13c2f2c66a37c0"
                  }}
                  style={styles.ImageBackground_1_1310}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f9b/521a/1aa3f9440cc8966551cc5b5f15389c56"
                  }}
                  style={styles.ImageBackground_1_1314}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe77/c405/d5d74175eb3514041e7d94baaa4f1cff"
                  }}
                  style={styles.ImageBackground_1_1321}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_1_1328} />
          <View style={styles.View_1_1329} />
        </View>
        <View style={styles.View_1_1330}>
          <View style={styles.View_1_1331}>
            <Text style={styles.Text_1_1331}>Stress 40% </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1332}>
        <View style={styles.View_1_1333}>
          <Text style={styles.Text_1_1333}>How to Meditate</Text>
        </View>
      </View>
      <View style={styles.View_1_1334} />
      <View style={styles.View_1_1335}>
        <View style={styles.View_1_1336} />
        <View style={styles.View_1_1337}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b7f/fd36/8d3092d64a70e1f336f6a9fac1e63d54"
            }}
            style={styles.ImageBackground_1_1338}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f73c/dfdd/24cc4f80bcebabe8a3a574e1715d8909"
            }}
            style={styles.ImageBackground_1_1342}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a42/48a2/ee5637b39aa5fd3edd6f68dd0d32ee1e"
            }}
            style={styles.ImageBackground_1_1345}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c796/c851/9b1e98ddb600e21ddcaf79862f114e5d"
            }}
            style={styles.ImageBackground_1_1346}
          />
          <View style={styles.View_1_1347}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2896/a919/c6a04a9dc8188beec2a6b2e8eae3bd44"
              }}
              style={styles.ImageBackground_1_1348}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2181/f74f/74eec215a788b9704f4d1694ae655011"
              }}
              style={styles.ImageBackground_1_1349}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1798/7be1/9e36017dce1fcedaafb7d9c97b1ab028"
              }}
              style={styles.ImageBackground_1_1350}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b6/6d69/7c48b9106956031acef09b170431cd20"
              }}
              style={styles.ImageBackground_1_1351}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2be/f00f/e10b71546d02a4feba698cb6bb74d91f"
              }}
              style={styles.ImageBackground_1_1356}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e1c/8484/ae340c46a764d7df6cb563aa583a0187"
              }}
              style={styles.ImageBackground_1_1357}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c454/82ea/8aaadc7e257a70fa6146353055af14fe"
              }}
              style={styles.ImageBackground_1_1358}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8b2/2e7b/d7e979e5ce01b0019287dcfa93471ce5"
              }}
              style={styles.ImageBackground_1_1361}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0278/0005/a8040105cbc779d01a436cf0a993664e"
              }}
              style={styles.ImageBackground_1_1364}
            />
          </View>
        </View>
        <View style={styles.View_1_1365} />
        <View style={styles.View_1_1366} />
      </View>
      <View style={styles.View_1_1367}>
        <View style={styles.View_1_1368}>
          <Text style={styles.Text_1_1368}>Anger/Frustration 30%</Text>
        </View>
      </View>
      <View style={styles.View_1_1369} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6f5/f793/1a2548eb1a7ade6705c1d48d3bdae639"
        }}
        style={styles.ImageBackground_1_1370}
      />
      <View style={styles.View_1_1371}>
        <View style={styles.View_1_1372}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b7c/cf6a/389ec4d26e3497e2304e4a02821b3686"
            }}
            style={styles.ImageBackground_1_1373}
          />
          <View style={styles.View_1_1374}>
            <Text style={styles.Text_1_1374}>Home</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1375}>
        <View style={styles.View_1_1376} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6105/1508/776629fa4aa3801e4f18a0669ae58337"
          }}
          style={styles.ImageBackground_1_1377}
        />
        <View style={styles.View_1_1380}>
          <Text style={styles.Text_1_1380}>Report</Text>
        </View>
      </View>
      <View style={styles.View_1_1390}>
        <View style={styles.View_1_1391}>
          <Text style={styles.Text_1_1391}>Afsar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce24/e47d/6d50734c19ae12bea4f63fd6022a66d7"
          }}
          style={styles.ImageBackground_1_1392}
        />
      </View>
      <View style={styles.View_1_1395}>
        <Text style={styles.Text_1_1395}>Report</Text>
      </View>
      <View style={styles.View_1_1396}>
        <Text style={styles.Text_1_1396}>
          This is your Mental Health Report for now.  Do reach out for help if
          required.
        </Text>
      </View>
      <View style={styles.View_1_1397}>
        <View style={styles.View_1_1398}>
          <View style={styles.View_1_1399} />
          <View style={styles.View_1_1400}>
            <View style={styles.View_1_1401}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0c2/a07a/a2c87b29b5778c991ae0c2b29539baca"
                }}
                style={styles.ImageBackground_1_1402}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46d0/14c5/5ab120ce3b112a3dc0f46f6351d0d61f"
                }}
                style={styles.ImageBackground_1_1404}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46d0/14c5/5ab120ce3b112a3dc0f46f6351d0d61f"
                }}
                style={styles.ImageBackground_1_1406}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0c2/a07a/a2c87b29b5778c991ae0c2b29539baca"
                }}
                style={styles.ImageBackground_1_1408}
              />
            </View>
          </View>
          <View style={styles.View_1_1410}>
            <Text style={styles.Text_1_1410}>Brief</Text>
          </View>
        </View>
        <View style={styles.View_1_1411}>
          <View style={styles.View_1_1412} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98c7/c906/04cf9fa807b7f19848468ff5c81b255d"
            }}
            style={styles.ImageBackground_1_1413}
          />
          <View style={styles.View_1_1415}>
            <Text style={styles.Text_1_1415}>Anxious</Text>
          </View>
        </View>
        <View style={styles.View_1_1428}>
          <View style={styles.View_1_1429} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b76/d89f/a6a9769b20b13eed6d5c3b4fa13613e2"
            }}
            style={styles.ImageBackground_1_1430}
          />
          <View style={styles.View_1_1435}>
            <Text style={styles.Text_1_1435}>Happy</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1446}>
        <View style={styles.View_1_1447} />
        <View style={styles.View_1_1448}>
          <View style={styles.View_1_1449} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/946d/76ab/ffa67f5755d7ee3ca4173e6b6d4a0831"
            }}
            style={styles.ImageBackground_1_1450}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e5b/8e11/95fa40e0fc98335ac7db0678e5fbf3cd"
            }}
            style={styles.ImageBackground_1_1451}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fba3/801e/a64bd22d642da1b5595906e2624eef5e"
            }}
            style={styles.ImageBackground_1_1452}
          />
        </View>
        <View style={styles.View_1_1453}>
          <View style={styles.View_1_1454}>
            <Text style={styles.Text_1_1454}>Calm 80%</Text>
          </View>
          <View style={styles.View_1_1455}>
            <View style={styles.View_1_1456}>
              <Text style={styles.Text_1_1456}>
                You seem to have control over your emotions today.
              </Text>
            </View>
            <View style={styles.View_5_711}>
              <Text style={styles.Text_5_711}>
                Try some Yoga to keep the Stress Levels in check
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac89/f67a/53d70e4f303b0eb2a3a56f112898586f"
              }}
              style={styles.ImageBackground_1_1458}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_1_1193: {
    width: wp("42.61710494036836%"),
    minWidth: wp("42.61710494036836%"),
    height: hp("28.688524590163933%"),
    minHeight: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.79358205012077%"),
    top: hp("83.63810888405054%")
  },
  View_1_1194: {
    width: wp("42.61710494036836%"),
    minWidth: wp("42.61710494036836%"),
    height: hp("28.688524590163933%"),
    minHeight: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1195: {
    width: wp("42.61710494036836%"),
    minWidth: wp("42.61710494036836%"),
    height: hp("28.688524590163933%"),
    minHeight: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1196: {
    width: wp("42.61710494036836%"),
    minWidth: wp("42.61710494036836%"),
    height: hp("28.688524590163933%"),
    minHeight: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_1197: {
    width: wp("42.61710494036836%"),
    height: hp("28.688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1198: {
    width: wp("42.91300750584994%"),
    height: hp("34.32594674532531%"),
    top: hp("6.83060109289616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.668124433876812%")
  },
  ImageBackground_1_1199: {
    width: wp("42.91300750584994%"),
    height: hp("34.32594674532531%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.668124433876812%")
  },
  ImageBackground_1_1200: {
    width: wp("9.036426267762115%"),
    height: hp("5.11076463376238%"),
    top: hp("10.472961592543967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.16305114451239%")
  },
  ImageBackground_1_1201: {
    width: wp("11.728186307897891%"),
    height: hp("4.307363332946443%"),
    top: hp("13.29803466796875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.025438981355684%")
  },
  View_1_1203: {
    width: wp("108.21984332540762%"),
    height: hp("34.810888571817365%"),
    top: hp("9.737046038518173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1204: {
    width: wp("58.79398659231582%"),
    height: hp("25.8986968160327%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.11796886794233%")
  },
  ImageBackground_1_1205: {
    width: wp("74.57009283240866%"),
    height: hp("18.964686159227714%"),
    top: hp("11.725228731749482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.603509138171802%")
  },
  ImageBackground_1_1206: {
    width: wp("65.58476692236565%"),
    height: hp("14.879321530868447%"),
    top: hp("19.930058880581896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.19504654004378%")
  },
  View_1_1209: {
    width: wp("45.66342634855261%"),
    height: hp("21.654662669030696%"),
    top: hp("4.989936703541247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.375520715391005%")
  },
  View_1_1210: {
    width: wp("8.662833798910686%"),
    height: hp("11.545785789281293%"),
    top: hp("0.000004169068049009184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.00060268531099%")
  },
  ImageBackground_1_1211: {
    width: wp("8.662833798910686%"),
    height: hp("7.559775785018838%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1213: {
    width: wp("8.662833798910686%"),
    height: hp("7.559775785018838%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1215: {
    width: wp("4.1059208376972%"),
    height: hp("9.83156402254365%"),
    top: hp("1.7142332316747684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.297723005359302%")
  },
  View_1_1216: {
    width: wp("2.6483821408184256%"),
    height: hp("3.523349240829384%"),
    top: hp("13.05835077671405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.431389407835148%")
  },
  ImageBackground_1_1217: {
    width: wp("2.6483821408184256%"),
    height: hp("2.3073772263657197%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1219: {
    width: wp("1.256035145930046%"),
    height: hp("2.999889134057884%"),
    top: hp("0.5234640152727934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6923214824879267%")
  },
  View_1_1220: {
    width: wp("6.628218941066575%"),
    height: hp("8.8321133389499%"),
    top: hp("12.822548287813788%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.000014742791364596997%")
  },
  ImageBackground_1_1221: {
    width: wp("6.628218941066575%"),
    height: hp("5.7832728318177935%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1223: {
    width: wp("6.628218941066575%"),
    height: hp("5.7832728318177935%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1225: {
    width: wp("3.1440147455187812%"),
    height: hp("7.51973605546795%"),
    top: hp("1.3123809314164703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7482739139870205%")
  },
  ImageBackground_1_1226: {
    width: wp("108.21984332540762%"),
    height: hp("20.552863449346823%"),
    top: hp("14.2565242579726%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1229: {
    width: wp("84.44687110790308%"),
    height: hp("4.823842074701695%"),
    top: hp("29.987043370314623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.653954252528685%")
  },
  ImageBackground_1_1231: {
    width: wp("23.422215411052612%"),
    height: hp("7.496442951139856%"),
    top: hp("26.00317783043033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.309178743961354%")
  },
  View_1_1232: {
    width: wp("16.56266917353091%"),
    height: hp("9.924814609881958%"),
    top: hp("23.72446529200819%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.75453842089372%")
  },
  ImageBackground_1_1233: {
    width: wp("16.56266917353091%"),
    height: hp("9.924814609881958%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1236: {
    width: wp("3.918464402645682%"),
    height: hp("2.4222892490241046%"),
    top: hp("15.898098971674344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.31142967334692%")
  },
  View_1_1237: {
    width: wp("42.61710494036836%"),
    minWidth: wp("42.61710494036836%"),
    height: hp("22.814207650273225%"),
    minHeight: hp("22.814207650273225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072463768115942%"),
    top: hp("89.61748633879782%")
  },
  View_1_1238: {
    width: wp("42.61710494036836%"),
    minWidth: wp("42.61710494036836%"),
    height: hp("22.814207650273225%"),
    minHeight: hp("22.814207650273225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1239: {
    width: wp("42.61710494036836%"),
    minWidth: wp("42.61710494036836%"),
    height: hp("22.814207650273225%"),
    minHeight: hp("22.814207650273225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_1240: {
    width: wp("42.61710494036836%"),
    height: hp("22.814207650273225%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1241: {
    width: wp("42.76602187594354%"),
    height: hp("34.20832899750256%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.296056185367602%")
  },
  ImageBackground_1_1247: {
    width: wp("35.30335357223732%"),
    height: hp("5.0083207302406185%"),
    top: hp("8.082115715318693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.443656589673914%")
  },
  ImageBackground_1_1250: {
    width: wp("8.32482121416912%"),
    height: hp("1.3795554312200495%"),
    top: hp("3.294764450990442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.96177135227959%")
  },
  View_1_1251: {
    width: wp("68.2839140223996%"),
    height: hp("21.261208956358864%"),
    top: hp("12.94710336487151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1252: {
    width: wp("68.2839140223996%"),
    height: hp("11.12347170303428%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1253: {
    width: wp("17.339243865819366%"),
    height: hp("9.806621530668332%"),
    top: hp("5.362338707095276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.80855423931914%")
  },
  ImageBackground_1_1254: {
    width: wp("53.844816788383156%"),
    height: hp("7.774754821277055%"),
    top: hp("4.294511138415714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6950415274947161%")
  },
  View_1_1257: {
    width: wp("42.76857237884964%"),
    height: hp("12.225916085998868%"),
    top: hp("9.03529182809298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.296011956993508%")
  },
  View_1_1258: {
    width: wp("42.76602556164138%"),
    height: hp("12.224444404977266%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1259: {
    width: wp("42.76602556164138%"),
    height: hp("12.224444404977266%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1260: {
    width: wp("42.765959219080244%"),
    height: hp("12.224439193642205%"),
    top: hp("0.000004169068049009184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00006634256114068648%")
  },
  ImageBackground_1_1261: {
    width: wp("42.765959219080244%"),
    height: hp("7.777711211657914%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1267: {
    width: wp("42.765959219080244%"),
    height: hp("7.424515062342577%"),
    top: hp("0.000004169068049009184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00006634256114068648%")
  },
  View_1_1268: {
    width: wp("42.76857237884964%"),
    height: hp("7.433381106684117%"),
    top: hp("4.79252716231214%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1269: {
    width: wp("42.76857237884964%"),
    height: hp("7.433381106684117%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1270: {
    width: wp("42.76857237884964%"),
    height: hp("7.433381106684117%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1271: {
    width: wp("42.76857237884964%"),
    height: hp("1.9270646767538102%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1272: {
    width: wp("28.81019887140984%"),
    height: hp("3.3516907301105436%"),
    top: hp("1.2384174951438922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1067484242904593%")
  },
  View_1_1278: {
    width: wp("28.044664687004644%"),
    height: hp("13.743626745672174%"),
    top: hp("7.517575957084603%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.97617211088466%")
  },
  ImageBackground_1_1279: {
    width: wp("7.018417782253689%"),
    height: hp("13.357907696499852%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.548506732148248%")
  },
  ImageBackground_1_1283: {
    width: wp("28.044664687004644%"),
    height: hp("3.8733370317136%"),
    top: hp("9.870293622459869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1286: {
    width: wp("21.431317536727242%"),
    height: hp("8.94074674512519%"),
    top: hp("12.31902492502347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.0612518752830615%")
  },
  View_1_1289: {
    width: wp("42.61710494036836%"),
    minWidth: wp("42.61710494036836%"),
    height: hp("28.688524590163933%"),
    minHeight: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3478260869565215%"),
    top: hp("58.19672131147541%")
  },
  View_1_1290: {
    width: wp("42.61710494036836%"),
    minWidth: wp("42.61710494036836%"),
    height: hp("28.688524590163933%"),
    minHeight: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_1291: {
    width: wp("42.61710494036836%"),
    minWidth: wp("42.61710494036836%"),
    height: hp("28.688524590163933%"),
    minHeight: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1292: {
    width: wp("42.61710494036836%"),
    minWidth: wp("42.61710494036836%"),
    height: hp("28.688524590163933%"),
    minHeight: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1293: {
    width: wp("42.61710494036836%"),
    minWidth: wp("42.61710494036836%"),
    height: hp("28.688524590163933%"),
    minHeight: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_1294: {
    width: wp("42.61710494036836%"),
    height: hp("28.688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1295: {
    width: wp("116.0851004043063%"),
    height: hp("35.88160530465549%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1296: {
    width: wp("44.809431730261174%"),
    height: hp("35.8428955078125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.525556923686594%")
  },
  ImageBackground_1_1299: {
    width: wp("44.809431730261174%"),
    height: hp("35.8428955078125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.525556923686594%")
  },
  ImageBackground_1_1302: {
    width: wp("7.211341950052602%"),
    height: hp("4.078546378130469%"),
    top: hp("3.4591909314765275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.526038128396735%")
  },
  View_1_1303: {
    width: wp("116.0851004043063%"),
    height: hp("34.868938675343664%"),
    top: hp("1.0126645447777989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1304: {
    width: wp("57.343037923177086%"),
    height: hp("34.82868006972016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.09999976411534%")
  },
  ImageBackground_1_1305: {
    width: wp("55.65656210489319%"),
    height: hp("26.92243023648288%"),
    top: hp("7.946517819263896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.15601470504982%")
  },
  ImageBackground_1_1306: {
    width: wp("116.0851004043063%"),
    height: hp("19.882285529798498%"),
    top: hp("14.947953771372312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1310: {
    width: wp("95.52150855317784%"),
    height: hp("12.735238622446529%"),
    top: hp("22.09500589005934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.396786307367147%")
  },
  ImageBackground_1_1314: {
    width: wp("31.54209523961164%"),
    height: hp("9.330796413734312%"),
    top: hp("25.53657364975558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.615367354978112%")
  },
  ImageBackground_1_1321: {
    width: wp("22.693514248023288%"),
    height: hp("6.7124267744887725%"),
    top: hp("28.154988106482662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.98965881642512%")
  },
  View_1_1328: {
    width: wp("42.78947765700483%"),
    height: hp("7.078353694227875%"),
    top: hp("21.610170374802557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1723727166364739%")
  },
  View_1_1329: {
    width: wp("42.78947765700483%"),
    height: hp("7.078351609693851%"),
    top: hp("21.59743595644425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.11581936896135225%"),
    backgroundColor: "rgba(141, 165, 234, 1)",
    opacity: 0.10999999940395355
  },
  View_1_1330: {
    width: wp("31.643838928517514%"),
    minWidth: wp("31.643838928517514%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("21.31147540983607%")
  },
  View_1_1331: {
    width: wp("31.643838928517514%"),
    minWidth: wp("31.643838928517514%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1331: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1332: {
    width: wp("35.507246376811594%"),
    minWidth: wp("35.507246376811594%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("103.41531722272028%")
  },
  View_1_1333: {
    width: wp("35.507246376811594%"),
    minWidth: wp("35.507246376811594%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1333: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1334: {
    width: wp("42.61710494036836%"),
    minWidth: wp("42.61710494036836%"),
    height: hp("22.814207650273225%"),
    minHeight: hp("22.814207650273225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.79358205012077%"),
    top: hp("58.19672131147541%"),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_1335: {
    width: wp("42.61710494036836%"),
    minWidth: wp("42.61710494036836%"),
    height: hp("22.814207650273225%"),
    minHeight: hp("22.814207650273225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.79358205012077%"),
    top: hp("58.19672131147541%")
  },
  View_1_1336: {
    width: wp("42.61710494036836%"),
    minWidth: wp("42.61710494036836%"),
    height: hp("22.814207650273225%"),
    minHeight: hp("22.814207650273225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_1337: {
    width: wp("42.61710494036836%"),
    height: hp("22.814207650273225%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1338: {
    width: wp("43.25614228916629%"),
    height: hp("34.60042567852417%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.093698695086047%")
  },
  ImageBackground_1_1342: {
    width: wp("14.60988602200568%"),
    height: hp("9.910335436544782%"),
    top: hp("7.0699868957852985%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.736520960711047%")
  },
  ImageBackground_1_1345: {
    width: wp("2.9008978230941698%"),
    height: hp("1.7940934238538062%"),
    top: hp("12.0280479472843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.245918605638586%")
  },
  ImageBackground_1_1346: {
    width: wp("3.7687561938152223%"),
    height: hp("1.5083689507239504%"),
    top: hp("25.24397594681202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.37206618451841%")
  },
  View_1_1347: {
    width: wp("80.90152464051178%"),
    height: hp("31.555146597773653%"),
    top: hp("1.8392786953618625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1348: {
    width: wp("44.981789704106276%"),
    height: hp("11.893526713053387%"),
    top: hp("13.825362888190256%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.452287019738826%")
  },
  ImageBackground_1_1349: {
    width: wp("48.156008513077445%"),
    height: hp("9.465244689274355%"),
    top: hp("15.721857352334936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.32960222769475%")
  },
  ImageBackground_1_1350: {
    width: wp("48.156008513077445%"),
    height: hp("9.465244689274355%"),
    top: hp("15.721857352334936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.32960222769475%")
  },
  ImageBackground_1_1351: {
    width: wp("28.280202893243324%"),
    height: hp("24.190166869450135%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.78857185990339%")
  },
  ImageBackground_1_1356: {
    width: wp("7.980776063485997%"),
    height: hp("5.791455148999157%"),
    top: hp("17.25777954351706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.6646274437651%")
  },
  ImageBackground_1_1357: {
    width: wp("8.216370476616754%"),
    height: hp("4.762364476104903%"),
    top: hp("19.633612606694783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.75790921271136%")
  },
  ImageBackground_1_1358: {
    width: wp("57.88060801040723%"),
    height: hp("8.774028840612193%"),
    top: hp("20.521123813149714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1361: {
    width: wp("78.65712631151872%"),
    height: hp("9.372461037557633%"),
    top: hp("19.922697869806342%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2443983289930642%")
  },
  ImageBackground_1_1364: {
    width: wp("10.617118872306197%"),
    height: hp("6.872494494328733%"),
    top: hp("24.68265001891089%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.248693198973434%")
  },
  View_1_1365: {
    width: wp("42.78947765700483%"),
    height: hp("7.078351609693851%"),
    top: hp("15.600285764600407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.08621584390095904%")
  },
  View_1_1366: {
    width: wp("42.78947765700483%"),
    height: hp("7.078351609693851%"),
    top: hp("15.73585551944587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.08618635831822985%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.07000000029802322
  },
  View_1_1367: {
    width: wp("34.05797101449276%"),
    minWidth: wp("34.05797101449276%"),
    height: hp("3.0817242919421584%"),
    minHeight: hp("3.0817242919421584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.038647342995176%"),
    top: hp("73.77049180327869%")
  },
  View_1_1368: {
    width: wp("34.05797101449276%"),
    minWidth: wp("34.05797101449276%"),
    minHeight: hp("3.0817242919421584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1368: {
    color: "rgba(254, 249, 243, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1369: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("107.10382513661203%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1_1370: {
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
  View_1_1371: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.734299516908212%"),
    top: hp("110.10928961748634%")
  },
  View_1_1372: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1373: {
    width: wp("5.198424795399541%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.207729468599032%")
  },
  View_1_1374: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.327868852459019%")
  },
  Text_1_1374: {
    color: "rgba(160, 163, 177, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1375: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("11.065540417947405%"),
    minHeight: hp("11.065540417947405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.20289855072464%"),
    top: hp("108.46997870773565%")
  },
  View_1_1376: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(142, 151, 253, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  ImageBackground_1_1377: {
    width: wp("4.346901437510615%"),
    height: hp("3.005485326214566%"),
    top: hp("1.6393109097506908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.381642512077292%")
  },
  View_1_1380: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594146%"),
    top: hp("6.96717976220971%")
  },
  Text_1_1380: {
    color: "rgba(142, 151, 253, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1390: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.74396135265701%"),
    top: hp("109.15300546448088%")
  },
  View_1_1391: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.327868852459005%")
  },
  Text_1_1391: {
    color: "rgba(160, 163, 177, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1392: {
    width: wp("4.7008772403145755%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990267%")
  },
  View_1_1395: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.42512077294686%"),
    top: hp("9.01639344262295%")
  },
  Text_1_1395: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1396: {
    width: wp("81.15942028985508%"),
    minWidth: wp("81.15942028985508%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.420289855072465%"),
    top: hp("15.163934426229508%")
  },
  Text_1_1396: {
    color: "rgba(160, 163, 177, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1397: {
    width: wp("56.70289855072463%"),
    minWidth: wp("56.70289855072463%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.531400966183575%"),
    top: hp("25.546448087431695%")
  },
  View_1_1398: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1399: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(142, 151, 253, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_1400: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1401: {
    width: wp("6.038647342995169%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1402: {
    width: wp("2.6942091863512414%"),
    height: hp("0.8943291961169634%"),
    top: hp("1.6833446064933426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.344446449464069%")
  },
  ImageBackground_1_1404: {
    width: wp("1.5605495747736686%"),
    height: hp("1.544013961416776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0362926243583956%")
  },
  ImageBackground_1_1406: {
    width: wp("1.5605488837053234%"),
    height: hp("1.544013961416776%"),
    top: hp("1.871288278715209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.520969556725543%")
  },
  ImageBackground_1_1408: {
    width: wp("2.6942091863512414%"),
    height: hp("0.8959492047627767%"),
    top: hp("0.8522054536746531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1410: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.34782608695652%"),
    top: hp("10.245901639344265%")
  },
  Text_1_1410: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1411: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.531400966183575%"),
    top: hp("0%")
  },
  View_1_1412: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(160, 163, 177, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  ImageBackground_1_1413: {
    width: wp("6.763285024154589%"),
    height: hp("3.415300546448088%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.4685990338164245%")
  },
  View_1_1415: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.173913043478258%"),
    top: hp("10.245901639344265%")
  },
  Text_1_1415: {
    color: "rgba(160, 163, 177, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1428: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.00241545893719%"),
    top: hp("0%")
  },
  View_1_1429: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(160, 163, 177, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  ImageBackground_1_1430: {
    width: wp("6.038647342995169%"),
    height: hp("3.415300546448088%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396128%")
  },
  View_1_1435: {
    width: wp("8.937198067632849%"),
    minWidth: wp("8.937198067632849%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.381642512077299%"),
    top: hp("10.245901639344265%")
  },
  Text_1_1435: {
    color: "rgba(160, 163, 177, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1446: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("42.62295081967213%"),
    minHeight: hp("42.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.951690821256038%"),
    top: hp("42.48633879781421%")
  },
  View_1_1447: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("12.978142076502733%"),
    minHeight: hp("12.978142076502733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 221, 207, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_1448: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("12.978142076502733%"),
    minHeight: hp("12.978142076502733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1449: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("12.978142076502733%"),
    minHeight: hp("12.978142076502733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 50, 66, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1_1450: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("12.978142076502733%"),
    minHeight: hp("12.978142076502733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1451: {
    width: wp("44.44444444444444%"),
    minWidth: wp("44.44444444444444%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.89371980676329%"),
    top: hp("-0.4098360655737707%")
  },
  ImageBackground_1_1452: {
    width: wp("15.614372290274947%"),
    minWidth: wp("15.614372290274947%"),
    height: hp("7.95228885171192%"),
    minHeight: hp("7.95228885171192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.80590466485507%"),
    top: hp("9.807248975409834%")
  },
  View_1_1453: {
    width: wp("63.76811594202898%"),
    minWidth: wp("63.76811594202898%"),
    height: hp("38.9344262295082%"),
    minHeight: hp("38.9344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8115942028985508%"),
    top: hp("3.6885245901639294%")
  },
  View_1_1454: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    minHeight: hp("2.3423963557175598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.434782608695652%"),
    top: hp("0%")
  },
  Text_1_1454: {
    color: "rgba(63, 65, 78, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1455: {
    width: wp("63.76811594202898%"),
    minWidth: wp("63.76811594202898%"),
    height: hp("35.38251366120219%"),
    minHeight: hp("35.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%")
  },
  View_1_1456: {
    width: wp("58.212560386473434%"),
    minWidth: wp("58.212560386473434%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555557%"),
    top: hp("0%")
  },
  Text_1_1456: {
    color: "rgba(90, 97, 117, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.55,
    textTransform: "none"
  },
  View_5_711: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.377049180327866%")
  },
  Text_5_711: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.55,
    textTransform: "none"
  },
  ImageBackground_1_1458: {
    width: wp("0.7246376811594203%"),
    minWidth: wp("0.7246376811594203%"),
    height: hp("0.3698520647372053%"),
    minHeight: hp("0.3698520647372053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.66666666666667%"),
    top: hp("0.5164600786615665%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
