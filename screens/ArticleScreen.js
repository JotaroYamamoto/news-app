import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function ArticleScreen() {
  return (
    <SafeAreaView>
      <Text>This is Article Screen</Text>
    </SafeAreaView>
  );
}
