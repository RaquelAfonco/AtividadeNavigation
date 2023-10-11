import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import Api from '../../services/Api';

const TelaB = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await Api.get('/posts');
        console.log('Response data:', response.data);
        setPosts(response.data.posts || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.postContainer} key={item.id}>
              <Text style={styles.postInfo}>{`Title: ${item.title}`}</Text>
              <Text style={styles.postInfo}>{`Body: ${item.body}`}</Text>
              <Text style={styles.postInfo}>{`Tags: ${item.tags}`}</Text>
              <Divider />
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#add8e6',
  },
  postContainer: {
    marginBottom: 15,
  },
  postInfo: {
    marginBottom: 10,
  },
});

export default TelaB;
