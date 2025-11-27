export const API_URL = import.meta.env.VITE_API_URL


export const headers = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }
}
