export const useUnsplash = async (param) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_UNSPLASH_URL}${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}&query=${param}&per_page=12`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}