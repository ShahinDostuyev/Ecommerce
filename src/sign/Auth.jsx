class AuthService {
    static login() {
      localStorage.setItem("isAuthenticated", "true");
    }
  
    static logout() {
      localStorage.removeItem("isAuthenticated");
    }
  
    static isAuthenticated() {
      return localStorage.getItem("isAuthenticated") === "true";
    }
  }
  
  export default AuthService;
  