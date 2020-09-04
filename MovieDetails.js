import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './Styles/MovieDetails';

function MovieDetails({ route }) {
  const { title, text, imgURL, releaseDate, runtime, rating } = route.params;
  var navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>

      <Image
        style={styles.image}
        source={{
          uri: imgURL,
        }}
      />
      <Text style={styles.date}>Runtime: {runtime}</Text>
      <Text style={styles.date}>Release Date: {releaseDate}</Text>

      <Text style={styles.date}>Rating: {rating}</Text>

      <Text style={styles.abmTitle}>About the Movie:</Text>
      <ScrollView>
        <Text style={styles.text}>{text}</Text>
      </ScrollView>
    </View>
  );
}

export default MovieDetails;
