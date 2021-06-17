
function userSpeaksHindi() {
    if (navigator.languages && navigator.languages.length) {
      for (var i = 0; i < navigator.languages.length; i++) {
        if (navigator.languages[i] === "hi") {
          return true;
        }
      }
    } else {
      if (navigator.userLanguage === "hi" || navigator.language === "hi" || navigator.browserLanguage === "hi"){
        return true;
      }
    }
    return false;
}
