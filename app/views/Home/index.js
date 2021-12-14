import React, { useMemo, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { Card, Title, Paragraph } from 'react-native-paper';

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

  // Use States
  const [isRefreshing, setRefreshing] = useState(false);
  const [categories, setCategories] = useState([])
  // Graphql actions
  const { loading, error, data } = useQuery(category.getCategories)

  const ListHeaderComponent = () => (
    <View style={styles.content}>
      <Text style={styles.titleText}>Categorias</Text>
    </View>
  )

  const ListFooterComponent = () => (
    <View style={styles.content}>
      { 
        categories.map((item) => (
          <Card key={item.id} style={styles.cardContent}>
            <TouchableOpacity>
              <Text>{item.nombre}</Text>
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
    <SafeAreaView style={[styles.flexBox, styles.defaultBackground]}>
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