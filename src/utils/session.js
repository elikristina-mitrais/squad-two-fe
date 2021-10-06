export const setRole = (role) => {
  sessionStorage.setItem('role', role);
}

export const getRole = () => {
  return sessionStorage.getItem('role') || '';
}