export const usePost = async (data) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export const useGet = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}`);
    return res;
  } catch (error) {
    console.log(error);
  }
}