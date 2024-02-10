export const useUnsplash = async (param) => {
  try {
    const res = await fetch(`${process.env.UNSPLASH_URL}${process.env.UNSPLASH_ACCESS_KEY}&query=${param}&per_page=5`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}