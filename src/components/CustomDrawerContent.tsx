import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const CustomDrawerContent = ({ navigation }) => {
  const [activeCategory, setActiveCategory] = useState("Men");
  const [isWesternOpen, setIsWesternOpen] = useState(true);
  const [isEasternOpen, setIsEasternOpen] = useState(true);

  const handleCategoryPress = (category) => {
    setActiveCategory(category === activeCategory ? "" : category);
  };

  const toggleWestern = () => {
    setIsWesternOpen(!isWesternOpen);
  };

  const toggleEastern = () => {
    setIsEasternOpen(!isEasternOpen);
  };

  const menSubcategories = {
    Western: [
      { name: "Dress Shirts", screen: "Men" },
      { name: "Casual Shirts", screen: "Men" },
      { name: "Polo Shirts", screen: "Men" },
      { name: "T-Shirts", screen: "Men" },
      { name: "Trouser", screen: "Men" },
      { name: "Dress Pants", screen: "Men" },
      { name: "Jeans", screen: "Men" },
      { name: "Cargo", screen: "Men" },
      { name: "Formal Suits", screen: "Men" },
      { name: "Blazers", screen: "Men" },
    ],
    Eastern: [
      { name: "Shalwar Kameez", screen: "Men" },
      { name: "Waistcoat", screen: "Men" },
      { name: "Kurta", screen: "Men" },
      { name: "Sherwani", screen: "Men" },
    ],
  };

  const womenSubcategories = {
    Western: [{ name: "T-Shirts", screen: "Women" }],
    Eastern: [{ name: "Shalwar Kameez", screen: "Women" }],
  };

  const kidsSubcategories = {
    Western: [
      { name: "Dress Shirts", screen: "Juniors" },
      { name: "Casual Shirts", screen: "Juniors" },
      { name: "Polo Shirts", screen: "Juniors" },
      { name: "T-Shirts", screen: "Juniors" },
      { name: "Trouser", screen: "Juniors" },
      { name: "Dress Pants", screen: "Juniors" },
      { name: "Jeans", screen: "Juniors" },
      { name: "Cargo", screen: "Juniors" },
      { name: "Formal Suits", screen: "Juniors" },
      { name: "Blazers", screen: "Juniors" },
    ],
    Eastern: [
      { name: "Shalwar Kameez", screen: "Juniors" },
      { name: "Waistcoat", screen: "Juniors" },
      { name: "Kurta", screen: "Juniors" },
      { name: "Sherwani", screen: "Juniors" },
    ],
  };

  const renderSubcategories = (subcategories) => {
    return subcategories.map((subcategory) => (
      <TouchableOpacity
        key={subcategory.name}
        onPress={() => navigation.navigate(subcategory.screen)} // Navigate based on selected category
      >
        <Text style={styles.subcategoryText}>{subcategory.name}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView
      style={styles.drawerContainer}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.horizontalMenu}>
        {/* Main Categories */}
        <TouchableOpacity onPress={() => handleCategoryPress("Men")}>
          <Text
            style={[
              styles.menuText,
              activeCategory === "Men" && styles.activeText,
            ]}
          >
            Men
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleCategoryPress("Women")}>
          <Text
            style={[
              styles.menuText,
              activeCategory === "Women" && styles.activeText,
            ]}
          >
            Women
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleCategoryPress("Kids")}>
          <Text
            style={[
              styles.menuText,
              activeCategory === "Kids" && styles.activeText,
            ]}
          >
            Kids
          </Text>
        </TouchableOpacity>
      </View>

      {/* Men Category */}
      {activeCategory === "Men" && (
        <View>
          <TouchableOpacity onPress={toggleWestern}>
            <Text style={styles.subcategoryHeader}>Western</Text>
          </TouchableOpacity>
          {isWesternOpen && (
            <View style={styles.subcategoryContainer}>
              {renderSubcategories(menSubcategories.Western)}
            </View>
          )}

          <View style={styles.divider} />

          <TouchableOpacity onPress={toggleEastern}>
            <Text style={styles.subcategoryHeader}>Eastern</Text>
          </TouchableOpacity>
          {isEasternOpen && (
            <View style={styles.subcategoryContainer}>
              {renderSubcategories(menSubcategories.Eastern)}
            </View>
          )}
        </View>
      )}

      {/* Women Category */}
      {activeCategory === "Women" && (
        <View>
          <TouchableOpacity onPress={toggleWestern}>
            <Text style={styles.subcategoryHeader}>Western</Text>
          </TouchableOpacity>
          {isWesternOpen && (
            <View style={styles.subcategoryContainer}>
              {renderSubcategories(womenSubcategories.Western)}
            </View>
          )}

          <View style={styles.divider} />

          <TouchableOpacity onPress={toggleEastern}>
            <Text style={styles.subcategoryHeader}>Eastern</Text>
          </TouchableOpacity>
          {isEasternOpen && (
            <View style={styles.subcategoryContainer}>
              {renderSubcategories(womenSubcategories.Eastern)}
            </View>
          )}
        </View>
      )}

      {/* Kids Category */}
      {activeCategory === "Kids" && (
        <View>
          <TouchableOpacity onPress={toggleWestern}>
            <Text style={styles.subcategoryHeader}>Western</Text>
          </TouchableOpacity>
          {isWesternOpen && (
            <View style={styles.subcategoryContainer}>
              {renderSubcategories(kidsSubcategories.Western)}
            </View>
          )}

          <View style={styles.divider} />

          <TouchableOpacity onPress={toggleEastern}>
            <Text style={styles.subcategoryHeader}>Eastern</Text>
          </TouchableOpacity>
          {isEasternOpen && (
            <View style={styles.subcategoryContainer}>
              {renderSubcategories(kidsSubcategories.Eastern)}
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
};

// Styles for custom drawer
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingTop: 50,
  },
  scrollContent: {
    paddingBottom: 50,
  },
  horizontalMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 15,
  },
  menuText: {
    fontSize: 18,
    color: "#c7c7c7",
    fontWeight: "bold",
  },
  activeText: {
    color: "#333",
    fontWeight: "bold",
  },
  subcategoryHeader: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  subcategoryContainer: {
    paddingLeft: 25,
    paddingVertical: 5,
  },
  subcategoryText: {
    fontSize: 14,
    paddingVertical: 15,
    color: "#555",
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },
});

export default CustomDrawerContent;
