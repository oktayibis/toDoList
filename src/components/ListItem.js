import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ListItem({item}) {
  // Component Style Codes
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#eeeeee',
      width: '90%',
      marginVertical: 5,
      flex: 1,
      alignSelf: 'center',
      borderBottomColor: 'grey',
      borderBottomWidth: 0.5,
      borderRadius: 5,
      padding: 10,
    },
    title: {
      textAlign: 'center',
      fontSize: 20,
      borderBottomColor: 'white',
      borderBottomWidth: 1,
    },
    desc: {
      marginTop: 10,
      marginLeft: 6,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginLeft: 10,
      marginRight: 10,
      marginTop: 20,
    },
    date: {
      color: '#4b5d67',
      fontSize: 10,
    },
    important: {
      backgroundColor: findImportanceColor(item.importance),
      padding: 5,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {item.title} </Text>
      <Text style={styles.desc}> {item.desc} </Text>
      <View style={styles.content}>
        <Text style={styles.important}>
          Important: {findImportanceText(item.importance)}
        </Text>
        <Text style={styles.date}>Added at: {item.date}</Text>
      </View>
    </View>
  );
}

const findImportanceColor = (number) => {
  switch (number) {
    case 0:
      return '#bbd196';
    case 1:
      return '#d9adad';
    case 2:
      return '#b52b65';
    default:
      return '#dddddd';
  }
};

const findImportanceText = (number) => {
  switch (number) {
    case 0:
      return 'Low';
    case 1:
      return 'Medium';
    case 2:
      return 'High';
    default:
      return '#dddddd';
  }
};
