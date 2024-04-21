export const checkUserIdOrLocalStorage = (getState) => {
    const userId = getState().userId;
    if (userId !== null) {
      return userId;
    }
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      return storedUserId;
    }
    return null;
  };