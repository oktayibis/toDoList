/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
const App: () => React$Node = () => {
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
    return <ListItem item={item} />;
  };

  const handleAdd = (title, desc, importance) => {
    let payload = {
      title,
      desc,
      importance,
      date: '01/09/2020',
    };

    setData((prevState) => [...prevState, payload]);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={data}
          renderItem={renderRow}
          ListHeaderComponent={() => {
            return <AddItem handleAdd={handleAdd} />;
          }}
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

export default App;
