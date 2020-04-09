import ax from 'axios';

export const fetchData = async ({ type }) => {
  try {
    const response = await ax.get(`http://localhost:1337/${type}`);
    return await response.data;
  } catch (error) {
    return { error: error.message };
  }
};
