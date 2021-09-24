
// return the role from the session storage
    export const getRole = () => {
        return sessionStorage.getItem('role') || null;
    }

      
  // remove the the session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem('role');
  }
  
  // set the role from the session storage
  export const setRoleSession = (role) => {
    sessionStorage.setItem('role', role);
  }