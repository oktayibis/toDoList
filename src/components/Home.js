import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
  TouchableHighlight,
  Alert,
} from 'react-native';
import ListItem from './ListItem';

const Home: () => React$Node = ({navigation}) => {
  const [data, setData] = useState([
    {
      id: 0,
      title: 'Hello 1',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar hendrerit orci et accumsan. Morbi vel vulputate urna, et tempor nunc. Pellentesque hendrerit condimentum',
      importance: 0,
      date: '01/07/2020',
    },
    {
      id: 1,
      title: 'Hello 2',
      desc:
        'onec luctus sit amet est at porttitor. Donec non purus vel magna pellentesque porta nec id turpis. Sed pharetra justo turpis, eu finibus dolor ultrices a. Suspendisse potenti.',
      importance: 1,
      date: '01/03/2020',
    },
    {
      id: 2,
      title: 'Hello 3',
      desc:
        'Fusce pulvinar hendrerit orci et accumsan. Morbi vel vulputate urna, et tempor nunc. Pellentesque hendrerit condimentum tellus.',
      importance: 1,
      date: '01/07/2020',
    },
    {
      id: 3,
      title: 'Hello 4',
      desc:
        'Donec non purus vel magna pellentesque porta nec id turpis. Sed pharetra justo turpis, eu finibus dolor ultrices a. Suspendisse potenti.',
      importance: 2,
      date: '01/08/2020',
    },
  ]);

  const renderRow = ({item}) => {
    return <ListItem key={item} item={item} />;
  };

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
        onPress={() => navigation.navigate(pageName, {handleAdd})}
        style={styles.btn}>
        <Text style={styles.btnText}>Add New</Text>
      </TouchableHighlight>
    );
  };

  const refreshData = (data) => {
    return data.reverse();
  };
  const handleAdd = (title, desc, importance) => {
    let payload = {
      id: data.length,
      title,
      desc,
      importance,
      date: '01/09/2020',
    };

    setData((prevState) => [...prevState, payload]);
    navigation.navigate('Home');
    Alert.alert('Done!', 'Your todo added to list');
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          keyExtractor={(item) => item.id.toString()}
          data={refreshData(data)}
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

export default Home;
