exports.checkUserIdExists = async (userId) => {
    try {
      // Assuming you have a model named User for your users
      const user = await User.findById(userId);
      if (!user) {
        return false; // User ID does not exist in the database
      }
      return true; // User ID exists in the database
    } catch (error) {
      console.error("Error checking user ID:", error);
      throw new Error("Error checking user ID");
    }
  };