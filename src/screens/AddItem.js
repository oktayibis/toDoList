import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {updateList} from '../actions';
function AddItem(props) {
  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [importance, setImportance] = useState(0);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text style={styles.title}>Add New To Do</Text>
      <View style={styles.header}>
        <TextInput
          placeholder="Enter Title"
          onChangeText={(text) => setTitle(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Importance"
          // eslint-disable-next-line radix
          onChangeText={(text) => setImportance(parseInt(text))}
          style={styles.select}
          keyboardType="number-pad"
        />
      </View>
      <View>
        <TextInput
          multiline
          placeholder="Enter Desc"
          onChangeText={(text) => setDesc(text)}
          numberOfLines={10}
          // eslint-disable-next-line react-native/no-inline-styles
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
          onPress={() => {
            // route.params.handleAdd(title, desc, importance)
            // if (!loading) {
            //   dispatch({type: LOADING_START, payload: true});
            // } else {
            //   dispatch({type: LOADING_FINISH, payload: false});
            // }
            let day = new Date();
            let obj = {
              id: props.list.length,
              title,
              desc,
              importance,
              date:
                day.getDate() + '/' + day.getMonth() + '/' + day.getFullYear(),
            };
            props.updateList(obj);
            Alert.alert('Success', 'Your new todo added');
            props.navigation.pop();
          }}>
          <Text style={styles.btnText}>Add</Text>
        </TouchableHighlight>
      </View>
      {/* {loading && (
        <ActivityIndicator
          size="large"
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}
        />
      )} */}
    </KeyboardAvoidingView>
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

    justifyContent: 'center',
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
    minWidth: 100,
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
  title: {
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 1.2,
    marginBottom: 20,
    textAlign: 'center',
    color: '#ed6663',
  },
});

const mapStateToProps = ({listResponse}) => {
  const {list, loading} = listResponse;
  return {list, loading};
};
export default connect(mapStateToProps, {updateList})(AddItem);
