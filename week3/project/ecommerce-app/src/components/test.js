const getProductDetails = async (id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const details = await response.json();
      console.log(details);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

getProductDetails(1);