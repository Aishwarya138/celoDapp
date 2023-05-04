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
          <Text>Hello</Text>
        {/* <TouchableOpacity style={styles.imgcontainer} onPress={() => navigation.navigate('Camera')}>
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
        <TouchableOpacity style={styles.share} onPress={() => navigation.navigate('ShareFile')} >
          <Image source={require('../assets/images/share.png')} style={styles.img3} />
        </TouchableOpacity> */}
      </View>
    </View>
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

export default Home;
