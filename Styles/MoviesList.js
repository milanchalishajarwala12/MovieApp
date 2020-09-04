import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { marginTop: 30 },
  topTitleText: { fontSize: 35, textAlign: 'left', margin: 5, marginLeft: 15 },
  articleViewContainer: {
    padding: 5,
    marginHorizontal: 10,
  },
  dotAndTitle: { flexDirection: 'row', alignItems: 'center', padding: 5 },
  title: {
    justifyContent: 'flex-end',
    fontWeight: 'bold',
    marginHorizontal: 5,
    marginRight: 15,
    fontSize: 20,
    color: 'white',
    opacity: 1,
  },
  titleView: { marginRight: 10, paddingRight: 20 },
  releaseDate: {
    textAlign: 'left',
    fontWeight: 'bold',
    margin: 5,
    color: 'white',
  },
  blackDot: {
    padding: 5,
    justifyContent: 'flex-start',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
