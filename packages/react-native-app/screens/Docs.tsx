// import { SafeAreaView } from "react-native-safe-area-context";
// import Container from "../components/Container";
// import { H1, H2, H3, H4, H5, H6 } from "../components/Headings";
// import MonoText from "../components/MonoText";
// import { Text, View } from "../components/Themed";
// import Colors from "../constants/Colors";

import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Card, Title, Paragraph, Text} from 'react-native-paper';

const Docs = () => {
    return (
        <View>
      <Card>
        <Card.Content style={styles.col}>
          <Title style={styles.heading}>BlockScan</Title>
          <Paragraph style={styles.txt}>Scan and Store Documents Securely</Paragraph>
        </Card.Content>
      </Card>
      <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
          flexDirection: 'column',
          // justifyContent: 'space-between',
          marginTop: 50,
        }}>
        <TouchableOpacity style={styles.imgcontainer}/*onPress={() => navigation.navigate('Camera')}*/>
          <Image source={require('../assets/images/camera.png')} style={styles.img} />
          <Text style={styles.txt}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imgcontainer}>
          <Image source={require('../assets/images/doc.png')} style={styles.img} />
          <Text style={styles.txt}>Documents</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imgcontainer} >
          <Image source={require('../assets/images/gallery.png')} style={styles.img} />
          <Text style={styles.txt}>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.share} /*onPress={() => navigation.navigate('ShareFile')}*/ >
          <Image source={require('../assets/images/share.png')} style={styles.img3} />
        </TouchableOpacity> 
      </View>
    </View>

        // <View
        //     style={{
        //         height: "100%",
        //         padding: 10,
        //     }}
        // >
        //     <View
        //         style={{
        //             flex: 1,
        //             margin: 10,
        //             alignItems: "center",
        //             justifyContent: "center",
        //             borderRadius: 10,
        //         }}
        //     >
        //         <H4
        //             additionalStyles={{
        //                 marginBottom: 10,
        //                 fontFamily: "Inter-Medium",
        //             }}
        //         >
        //             Celo Composer
        //         </H4>
        //         <Text style={{ textAlign: "center", marginBottom: 15 }}>
        //             Celo Composer is built to give you headstart on your next
        //             Web3 Mobile project on Celo
        //         </Text>
        //         <Text style={{ textAlign: "center", marginBottom: 10 }}>
        //             {
        //                 "Celo Composer has the following components built-in ConnectWallet, AccountAddress, and AccountBalance to get you to speed!"
        //             }
        //         </Text>
        //         <Text style={{ textAlign: "center", fontStyle: "italic" }}>
        //             {"All respective files can be found in /components folder"}
        //         </Text>
        //         <Container style={{ marginTop: 15 }}>
        //             <MonoText
        //                 additionalStyles={{
        //                     textAlign: "center",
        //                     color: Colors.brand.brown,
        //                     fontSize: 13,
        //                 }}
        //             >
        //                 {
        //                     "Delete this screen by removing Docs.tsx in /screens folder"
        //                 }
        //             </MonoText>
        //         </Container>
        //     </View>
        // </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    img: {
      width: 60,
      height: 60,
    },
    img2: {
      width: 30,
      height: 30,
    },
    img3: {
      width: 60,
      height: 60,
    },
    imgcontainer: {
      alignItems: 'center',
      padding:40,
    },
    txt:{
      fontSize: 18,
    },
    heading: {
      fontSize: 30,
    },
    col: {
      backgroundColor: '#bdf2f0',
      marginTop: 35,
    },
    share: {
      position: 'absolute',
      bottom: -150,
      right: 30,
    },
    cloud: {
      alignItems: 'center',
      position: 'absolute',
      bottom: 20,
      left: 20,
    },
  });

export default Docs;
