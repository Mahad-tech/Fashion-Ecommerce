import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Category = ({ categoryName, subcategories, navigation }) => {
  const [expandedCategory, setExpandedCategory] = useState("");

  const handleSubcategoryPress = (subcategory) => {
    setExpandedCategory(subcategory === expandedCategory ? "" : subcategory);
  };

  const handleItemPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View>
      {/* Subcategories */}
      <TouchableOpacity onPress={() => handleSubcategoryPress("Western")}>
        <Text
          style={[
            styles.subcategoryText,
            expandedCategory === "Western" && styles.boldText,
          ]}
        >
          Western
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSubcategoryPress("Eastern")}>
        <Text
          style={[
            styles.subcategoryText,
            expandedCategory === "Eastern" && styles.boldText,
          ]}
        >
          Eastern
        </Text>
      </TouchableOpacity>

      {/* Sub-options for Western */}
      {expandedCategory === "Western" && (
        <View style={styles.subOptionsContainer}>
          {subcategories.Western.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleItemPress(item.screen)}
            >
              <Text style={styles.subOptionText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Sub-options for Eastern */}
      {expandedCategory === "Eastern" && (
        <View style={styles.subOptionsContainer}>
          {subcategories.Eastern.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleItemPress(item.screen)}
            >
              <Text style={styles.subOptionText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  subcategoryText: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 10,
  },
  subOptionsContainer: {
    marginLeft: 40,
    marginTop: 10,
  },
  subOptionText: {
    fontSize: 14,
    marginTop: 5,
    color: "#666",
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default Category;
