import React, { useState, useContext } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import Events from "../components/events";
import MoviesStreaming from "../components/movies-streaming";
import Loading from "../components/Loading";
import Recipes from '../components/recipes'
import MoviesTheater from "../components/movies-theater";
import AppContext from "../context/appContext";

const Results = () => {
  const appContext = useContext(AppContext)
  const { resultsType } = appContext
  switch (resultsType) {
    case 'moviesStreaming':
      return <MoviesStreaming></MoviesStreaming>
    case 'moviesTheater':
      return <MoviesTheater></MoviesTheater>
    case 'recipes':
      return <Recipes></Recipes>
    case 'events':
      return <Events></Events>
    default:
      return <Loading></Loading>
  }
};

const styles = StyleSheet.create({
});

export default Results;