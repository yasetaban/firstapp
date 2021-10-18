import React ,{Component} from 'react';
import {Text,View,StyleSheet,TextInput,Button} from 'react-native';

export default class App extends Component{

constructor(props){
super(props);

this.state={
  input1:'',
  input2:'',
  sonuc: 0,
}
this.topla=this.topla.bind(this);
this.cikar=this.topla.bind(this);


}

topla(){
const sayi1=parseInt(this.state.input1); //parseFloat ??
const sayi2=parseInt(this.state.input2);

const sonuc=sayi1 + sayi2;

this.setState({
  sonuc: sonuc

});

}
cikar(){
const sayi1=parseInt(this.state.input1);
const sayi2=parseInt(this.state.input2);

const sonuc= sayi1 - sayi2;

this.setState({
  sonuc: sonuc

});

}






render(){
  return(
    <View style={styles.anaekran_duzen} >
        
        
        <View style={styles.baslik_duzen} > 
        <Text style={styles.baslik_yazi_duzen}>
        Hesap Makinesi
        </Text>
        </View>

        <View style={styles.urun} >
        <Text style={styles.textStyle} >
        SU 2TL
        </Text> 
        </View>

        <View style={styles.urun1} >
        <Text style={styles.textStyle} >
        KAHVE 4TL
        </Text>
        </View> 

          
        

        
        <View style={styles.butonlar_duzen}>
        <Button title='Topla'
        onPress={this.topla}
        > </Button>
        <Button title='Çıkar'
        onPress={this.cikar}
        > </Button>
        

        </View>

        <View  style={{alignItems:'center'}} > 
        
         <Text  style={styles.sonuc} >  Sonuç: {this.state.sonuc} </Text>
        
        </View>


    </View>

  );
 }
}

const styles=StyleSheet.create({
baslik_duzen:{

height:80,
paddingTop:30,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#F5FCFF',
shadowColor:'#000000',
shadowOffset:{width:0,height:2},
shadowOpacity:0.3,
fontSize: 20,
},

sonuc:{

  height:50,
  width:100,  
  paddingTop:10,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#D1C4E9',
  shadowColor:'#000000',
  shadowOffset:{width:0,height:2},
  shadowOpacity:0.3,
  fontSize: 20,
  },

baslik_yazi_duzen:{

fontSize:20,
textAlign:'center'


},

butonlar_duzen:{
flexDirection:'row',
alignItems:'center',
justifyContent:'space-around',


},

anaekran_duzen:{
flex:1,
flexDirection:'column',

},


ic_duzen:{

justifyContent:'center',
alignItems:'center', 


},

urun:{
justifyContent:'center',
width:'20%',
height:'10%',
color:'black',
backgroundColor:'#9FA8DA',
borderRadius:16,
alignItems:'center',
margin:10
},

urun1:{  
  justifyContent:'center',
  width:'20%',
  height:'10%',
  color:'black',
  backgroundColor:'#9FA8DA',
  borderRadius:16,
  alignItems:'center',
  margin:10,
  marginTop:0
  },


  textStyle: {
    color:'black',
    fontSize:15,
    textAlign:'center',
    height:'50%',
    width:'50%'
  }


});