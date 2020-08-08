import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

export default function AddItem({route, navigation}) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [importance, setImportance] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          placeholder="Enter Title"
          onChangeText={(text) => setTitle(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Importance"
          onChangeText={(text) => setImportance(parseInt(text))}
          style={styles.select}
          keyboardType="number-pad"
        />
      </View>
      <View>
        <TextInput
          placeholder="Enter Desc"
          onChangeText={(text) => setDesc(text)}
          numberOfLines={10}
          style={{
            padding: 10,
            marginLeft: 5,
            borderColor: 'lightgrey',
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 10,
          }}
        />
        <TouchableHighlight
          style={styles.btn}
          onPress={() => route.params.handleAdd(title, desc, importance)}>
          <Text style={styles.btnText}>Add</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
    padding: 5,
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    minWidth: '20%',
    padding: 10,
    marginLeft: 5,
    borderColor: 'lightgrey',
    borderWidth: 1,
    width: '60%',
    marginTop: 10,
    borderRadius: 10,
  },
  select: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginLeft: 10,

    marginTop: 10,
    borderRadius: 10,
    padding: 10,
  },
  btn: {
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    width: '100%',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 15,
  },
  btnText: {
    color: 'black',
    textAlign: 'center',
  },
});
