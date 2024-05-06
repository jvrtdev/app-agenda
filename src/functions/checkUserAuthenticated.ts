
export const checkUserAuthenticated = () => {
  const token = localStorage.getItem('token');

  return !!token;
}