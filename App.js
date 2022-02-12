import { View, Text, SafeAreaView, FlatList, Image, StyleSheet } from 'react-native';

export default function App() {
  
  const animals = [
    {
      id: 1,
      name: 'Shark',
      image: require('./assets/avatars/shark.png'),
    },
    {
      id: 2,
      name: 'Herring',
      image: require('./assets/avatars/herring.png'),
    },
    {
      id: 3,
      name: 'Lion',
      image: require('./assets/avatars/lion.png'),
    },
    {
      id: 4,
      name: 'Polar Bear',
      image: require('./assets/avatars/polar-bear.png'),
    },
    {
      id: 5,
      name: 'Penguin',
      image: require('./assets/avatars/penguin.png'),
    },
    {
      id: 6,
      name: 'Parrot',
      image: require('./assets/avatars/parrot.png'),
    },
  ];  
  
  const oneAnimal = ({ item }) => (
    <View style={ styles.item }>
      <View style={ styles.avatarContainer }>
        <Image source={ item.image } style={ styles.avatar } />
      </View>      
      <Text style={ styles.name }>{item.name}</Text>
    </View>    
  );

  headerComponent = () => {
    return <Text style={ styles.listHeadline }>Animals</Text>        
  }

  listSeparator = () => {
    return <View style={ styles.separator } />
  }    

  return (    
    <SafeAreaView style={ styles.container }>
      <FlatList 
        ListHeaderComponentStyle = { styles.listHeader }
        ListHeaderComponent = { headerComponent }              
        ListEmptyComponent = { <Text>This List is a very Flat list</Text> }
        data = { animals }
        renderItem={oneAnimal}        
        ItemSeparatorComponent={ listSeparator }
        // keyExtractor={ animals => animals.whatever }
      />      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 21,
  },

  listHeader: {
    height: 55,    
    alignItems: 'center',
    justifyContent: 'center',    
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#7B52AB',
  },

  listHeadline: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 21,
  },

  item: {
    flex: 1,
    flexDirection: 'row',    
    alignItems: 'center',
    paddingVertical: 13,    
  },

  avatarContainer: {        
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
    height: 89,
    width: 89,
    justifyContent: 'center',
    alignItems: 'center',    
  },
  
  avatar: {
    height: 55,
    width: 55,
  },

  name: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 13,
  },

  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CCC',
  },

});