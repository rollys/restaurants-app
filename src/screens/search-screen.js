import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from "../components/search-bar";
import ResultsList from "../components/results-list";
// import yelp from "../api/yelp";
import useResults from "../hooks/use-results";

const SearchScreen = props => {
  const [term, setTerm] = useState("");
  const [searchApi, result, errorMessage] = useResults();

  const getRestaurantByPrice = price => {
    return result.filter(row => {
      return row.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          searchApi(term);
        }}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text
        style={{
          marginLeft: 15,
          marginBottom: 10
        }}
      >
        Hemos encontrado {result.length} restaurantes
      </Text>
      <ScrollView>
        <ResultsList navigation={props.navigation} results={getRestaurantByPrice("$")} title="Menú 1" />
        <ResultsList navigation={props.navigation} results={getRestaurantByPrice("$$")} title="Menú 2" />
        <ResultsList navigation={props.navigation} results={getRestaurantByPrice("$$$")} title="Menú 3" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
