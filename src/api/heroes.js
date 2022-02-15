export const fetchHeroes = async () => {
  try {
    const response = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');

    if (!response.ok) {
      throw new Error('An error occurred while fetching heroes.');
    }

    return await response.json();
  } catch (e) {
    console.error(e);
  }
}