import React, {Component} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      TextInput: '',
      cons: 0,
      vow: 0,
      char: 0
    }
  }
Wordanalyze = () => {
    let input = this.state.TextInput;
    let cons =0;
    let vow=0;
    let char=0;

    char=input.length;

    for (let i=0;i<=input.length;i++){
      if((input.charAt(i).match(/[AEIOUaeiou]/))){
          vow++;
      }
      else if((input.charAt(i).match(/[BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz]/))){
          cons++;
      }
      this.setState({char:char,vow:vow,cons:cons});

    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
        <Text style={Styles.welcome}>A Word Analyzer</Text>
        <TextInput onChangeText={(TextInput) => this.setState({TextInput})} style={Styles.Design} placeholder='Input text'/>
        <Text></Text>
        <Text></Text>
        <Button color="#728FCE" onPress={this.Wordanalyze} title='Analyze'/>
        <Text></Text>
        <Text style={Styles.Design}>Words                     : {this.state.TextInput}</Text>
        <Text style={Styles.Design}>No. of Consonants  : {this.state.cons}</Text>
        <Text style={Styles.Design}>No. of Vowels         : {this.state.vow}</Text>
        <Text style={Styles.Design}>No. of Characters   : {this.state.char}</Text>
        </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E4E2',
  },
  welcome: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
  },
  Design: {
    textAlign: 'center',
    marginBottom: 5,
  },
});