export const getUserData = async (url) => {
  const response = await fetch(url, {
    headers: {
      "x-api-key": "reqres-free-v1", // your API key
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
