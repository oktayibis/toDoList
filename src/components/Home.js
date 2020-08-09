import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
  TouchableHighlight,
  KeyboardAvoidingView,
} from 'react-native';
import ListItem from './ListItem';
import {connect} from 'react-redux';
const Home: () => React$Node = ({navigation, list}) => {
  // Render list item
  const renderRow = ({item}) => {
    return <ListItem key={item} item={item} />;
  };
  // Add new button
  const AddNewButton = (pageName) => {
    const styles = StyleSheet.create({
      btn: {
        backgroundColor: '#0f4c75',
        borderRadius: 10,
        width: '90%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '5%',
        marginTop: 10,
      },
      btnText: {
        color: '#dddddd',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
      },
    });
    return (
      <TouchableHighlight
        onPress={() => navigation.navigate(pageName)}
        style={styles.btn}>
        <Text style={styles.btnText}>Add New</Text>
      </TouchableHighlight>
    );
  };

  // const refreshData = (data) => {
  //   return data.reverse();
  // };
  // const handleAdd = (title, desc, importance) => {
  //   let payload = {
  //     id: data.length,
  //     title,
  //     desc,
  //     importance,
  //     date: '01/09/2020',
  //   };

  //   setData((prevState) => [...prevState, payload]);
  //   navigation.navigate('Home');
  //   Alert.alert('Done!', 'Your todo added to list');
  // };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          keyExtractor={(item) => item.id.toString()}
          data={list}
          renderItem={renderRow}
          ListHeaderComponent={() => AddNewButton('AddItem')}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#dddddd',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#89c9b8',
  },
});

const mapStateToProps = ({listResponse}) => {
  const {list} = listResponse;
  return {list};
};
export default connect(mapStateToProps, {})(Home);
