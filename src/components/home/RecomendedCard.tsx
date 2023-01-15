import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('window');

const RecomendedCard = () => {
  return (
    <View style={styles.main}>
      <View style={styles.imgContainer}>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          }}
          style={styles.img}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.heading}>Evan Haris, Jazz Tenor Saxophone</Text>
        <Text style={styles.subtitle}>60 Lincoln plaza, NY</Text>
        <View style={styles.footer}>
          <Text style={styles.date}>28 May</Text>
          <View style={styles.footerRight}>
            <View style={styles.groupAvatars}>
              <View
                style={[styles.miniAvatar, {transform: [{translateX: -15}]}]}>
                <ImageBackground
                  source={{
                    uri: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                  }}
                  style={styles.miniImg}
                />
              </View>
              <View style={styles.miniAvatar}>
                <ImageBackground
                  source={{
                    uri: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                  }}
                  style={styles.miniImg}
                />
              </View>
              <View
                style={[styles.miniAvatar, {transform: [{translateX: 15}]}]}>
                <ImageBackground
                  source={{
                    uri: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                  }}
                  style={styles.miniImg}
                />
              </View>
            </View>
            <View style={styles.footerTextContainer}>
              <Text style={styles.footerText}>+200</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecomendedCard;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: height * 0.15,
    padding: 5,
    margin: 20,
    borderRadius: 20,
    backgroundColor: '#ededed',
  },
  imgContainer: {
    overflow: 'hidden',
    borderRadius: 10,
    height: '100%',
    width: '35%',
  },
  img: {
    minHeight: height * 0.15,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 16,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  miniAvatar: {
    minHeight: height * 0.03,
    minWidth: height * 0.03,
    borderRadius: height * 0.015,
    overflow: 'hidden',
    position: 'absolute',
  },
  miniImg: {
    height: height * 0.03,
  },
  groupAvatars: {
    transform: [{translateY: -14}],
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  footerTextContainer: {
    borderRadius: 15,
    padding: 5,
    backgroundColor: 'rgba(0,0,255, 0.5)',
    transform: [{translateX: -10}],
  },
  footerText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
});
