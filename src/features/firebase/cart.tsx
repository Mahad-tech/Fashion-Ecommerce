import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";

export const getCartItems = async () => {
  try {
    const userDocRef = doc(db, "users", auth.currentUser?.uid);
    const userDocSnapshot = await getDoc(userDocRef);

    // Check if the document exists and the data is valid
    if (userDocSnapshot.exists()) {
      const data = userDocSnapshot.data().cart;
      return { data, success: true };
    } else {
      return { success: false, message: "User cart does not exist" };
    }
  } catch (error) {
    console.error("Error getting cart items:", error);
    return { success: false, message: "Failed to retrieve cart items" };
  }
};

export const addToCart = async (itemId, qty) => {
  try {
    const productRef = doc(db, "products", itemId);
    const userDocRef = doc(db, "users", auth.currentUser?.uid);
    const productSnapshot = await getDoc(productRef);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists() && productSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      const productData = productSnapshot.data();

      // Initialize cart if it doesn't exist
      const cartItems = userData.cart || [];

      // Check if the product already exists in the cart
      const existingItemIndex = cartItems.findIndex(
        (item) => item.id === itemId
      );

      if (existingItemIndex !== -1) {
        // Update quantity if item already exists
        cartItems[existingItemIndex].qty += qty;
      } else {
        // Add new item to cart
        cartItems.push({
          id: itemId,
          title: productData.title || "Unknown Title",
          brand: productData.brand || "Unknown Brand",
          price: productData.price || 0, // Default to 0 if undefined
          image: productData.image || "", // Use empty string if undefined
          qty: qty,
        });
      }

      // Clean up cart items: Remove undefined or invalid fields
      const sanitizedCartItems = cartItems.map((item) => ({
        ...item,
        title: item.title || "Unknown Title", // Provide default values
        brand: item.brand || "Unknown Brand",
        price: item.price || 0,
        image: item.image || "",
      }));

      // Update Firestore with cleaned data
      await updateDoc(userDocRef, { cart: sanitizedCartItems });

      return { success: true, data: sanitizedCartItems };
    } else {
      console.error("User or product doesn't exist");
      return { success: false, message: "User or product not found" };
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
    return { success: false, message: "Failed to add item to cart" };
  }
};

export const removeItemById = async (id) => {
  const userDocRef = doc(db, "users", auth.currentUser?.uid);
  const userDocSnapshot = await getDoc(userDocRef);
  if (userDocSnapshot.exists()) {
    const userData = userDocSnapshot.data();
    const newCart = userData.cart.filter((item) => item.id !== id);
    await updateDoc(userDocRef, { cart: newCart });
    const subTotal = newCart.reduce((acc, curr) => acc + Number(curr.price));
    return { data: newCart, success: true, subTotal };
  } else {
    console.log(`user doesn't exist`);
  }
};
