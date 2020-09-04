import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  FlatList,
  ScrollView,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-navigation';
import { moviesArray } from './Data';
import { styles } from './Styles/MoviesList';
export default function Articles() {
  var navigation = useNavigation();
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      text={item.text}
      releaseDate={item.releaseDate}
      imgURL={item.imgURL}
      runtime={item.runtime}
      rating={item.rating}
    />
  );

  const Item = ({ title, text, releaseDate, imgURL, runtime, rating }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('MovieDetails', {
          title: title,
          text: text,
          imgURL: imgURL,
          releaseDate: releaseDate,
          runtime: runtime,
          rating: rating,
        });
      }}
    >
      <View style={styles.articleViewContainer}>
        <View style={styles.dotAndTitle}>
          <ImageBackground
            style={styles.blackDot}
            source={{
              uri: imgURL,
            }}
            blurRadius={8}
          >
            <View style={styles.titleView}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <Text style={styles.releaseDate}>Release Date: {releaseDate}</Text>
            <View style={styles.textView}>
              <Text style={styles.releaseDate}>Runtime: {runtime}</Text>
              <Text style={styles.releaseDate}>Ratings: {rating}</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.topTitleText}>Movies</Text>
        <FlatList
          data={moviesArray}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
