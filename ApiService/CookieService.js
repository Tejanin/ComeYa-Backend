import Cookies from 'js-cookie';

class CookieManager{

    // Guarda una cookie
  static setCookie(name, value) {
    var lastCookie = Cookies.get(name);
    if(lastCookie == value){
        return ;
    }
    Cookies.set(name, value);
  }

  // Lee una cookie y devuelve su valor
  static getCookie(name) {
    return Cookies.get(name);
  }

  // Borra una cookie
  static removeCookie(name) {
    Cookies.remove(name);
  }
}

export default new CookieManager();