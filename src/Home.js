import { View, Text, Button,StyleSheet, Pressable } from 'react-native'
import React, {useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { firebase } from 'firebase/compat'
import { FlashList } from '@shopify/flash-list'



const Home = () => {

    const [notes, setNotes] = useState([]); 
    const navigation= useNavigation();

    //fetch the data--------------------------------------------------------

    useEffect(() =>{
        firebase.firestore()
        .collection('notes')
        .onSnapshot((querySnapshot) => {
            const newNotes = [];
            querySnapshot.forEach((doc)  =>{
                const {note, title} = doc.data();
                newNotes.push({note, title, id:doc.id});
            });
            setNotes(newNotes);
        });
    },[]);


  return (
    <View style={styles.container}>

      <FlashList
        data={notes}
        numColumns = {2}
        estimatedItemaSize = {100}
        renderItems={({item}) =>{
            return <View style={styles.noteView}>
                <Pressable
                    onPress={()=>navigation.navigate('Detail', {item})}
                >
                    <Text style={styles.noteTitle}>
                        {item.title}
                    </Text>
                    <Text style={styles.noteDesciption}>
                        {item.note}
                    </Text>
                </Pressable>
            </View>
        }}
      />
      <Button title='Add Notes ' onPress={ () =>navigation.navigate('NoteAdd')}></Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff'
    },
    noteView:{
        flex:1,
        margin:10,
        padding:10,
        borderRadius:10,
        shadowColor:'red',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.8,
        shadowRadius:2,
        elevation:7,
        alignItems:'center'
    },
    noteTitle: {
        fontSize:20,
        fontweight: 'bold'
    },
    noteDesciption: {
        fontSize:16,
        marginTop:5
    }
})