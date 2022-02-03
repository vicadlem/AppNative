import React, { useMemo, useEffect, useState }  from 'react';
import { useQuery } from '@apollo/client';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import { venture } from '../../services'
import styles from './styles'
import { useNavigation} from '@react-navigation/native';


const Ventures = ({route}) => {
  const navigation = useNavigation();
  //Obtiene id del emprendimiento
  const { id } = route.params;
  // Use States
  const [isRefreshing, setRefreshing] = useState(false);
  const [ventures, setVentures] = useState([])
  // Graphql actions
  const { loading, error, data } = useQuery(venture.getVentures, {
    variables: {
      input: {
        categoria: id
      }
    }
  })  

  const ListFooterComponent = () => (
    <View style={styles.content}>
      {
        ventures.map((item) => (
          <Card style={[styles.cardContent]} key={item.id}>
            <TouchableOpacity>
              <Text 
                style={[{color: '#000'}]} 
                onPress={ () => navigation.navigate("Products", item)}
              >{item.nombre}</Text>
              
            </TouchableOpacity>
          </Card>
        ))
      }
    </View>
  )

  const onRefresh = async () => {
    try {
      setRefreshing(true);
    } catch (err) {
      console.warn(err);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (data) {
      setVentures(data.obtenerEmprendimientos)
    }

  }, [loading, data, error])

  return (
    <SafeAreaView class="bg-lime" style={[styles.flexBox, {backgroundColor: '#f1f5f9'}]} >
    <FlatList
      ListFooterComponent={ListFooterComponent}
      refreshControl={
        <RefreshControl
          colors={['#0000ff']}
          tintColor="#0000ff"
          refreshing={isRefreshing}
          onRefresh={onRefresh}
        />
      }
    />
  </SafeAreaView>
  );
}

export default Ventures;