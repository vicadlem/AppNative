import React, { useMemo, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import { category } from '../../services'
import styles from './styles'

const Home = () => {

  const navigation = useNavigation();

  // Use States
  const [isRefreshing, setRefreshing] = useState(false);
  const [categories, setCategories] = useState([])
  // Graphql actions
  const { loading, error, data } = useQuery(category.getCategories)

  const ListHeaderComponent = () => (
    <View style={styles.content}>
      <Text style={styles.titleText}>Elije la categoría de tu interés</Text>
    </View>
  )

  const ListFooterComponent = () => (
    <View style={styles.content}>
      { 
        categories.map((item) => (
          <Card style={[styles.cardContent]} key={item.id}>
            <TouchableOpacity>
              <Text 
                style={[{color: '#000'}]} 
                onPress={ () => navigation.navigate("Ventures", item)} 
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
      setCategories(data.obtenerCategorias)
    }

  }, [loading, data, error])

  return (
    <SafeAreaView class="bg-lime" style={[styles.flexBox, {backgroundColor: '#f1f5f9'}]}>
      <FlatList
        ListHeaderComponent={ListHeaderComponent}
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
  )
}

export default Home