import app from "./app.js";

export default class extends app {
    constructor(params) {
        super(params);
        this.setTitle("Google");
    }

    async getHtml() {
        return `
        <header>
        <nav>
          <ul id="nav_bar">
            <li class="nav-links" id="gmail"><a href="#">Gmail</a></li>
            <li class="nav-links"><a href="#">Images</a></li>
            <li id="sign_in"><a href="#">Sign In</a></li>
          </ul>  
        </nav>  
      </header>  
      
      <!-- GOOGLE IMG -->  
      <div class="google">
        <a href="#" id="google_logo"><img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt=" photo google-logo_zpspkcztsjo.png"/></a>
      </div>
      
      <!-- FORM SEARCH -->  
      <div class="form">  
        <form>
          <label for="form-search"></label>
          <input type="text" id="form-search" placeholder="Search Google or type URL">
        </form>
      </div>  
      
      <!-- BUTTONS -->
      <div class= "buttons">  
        <input type="submit" value="Google Search" id="google_search">
        <input type="submit" value="I'm Feeling Lucky" id="im_feeling_lucky">
      </div>
        
      <!-- FOOTER -->
      <footer>
          <ul class="footer-left">
            <li><a href="#">Advertising</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">About</a></li> 
          </ul>
          <ul class="footer-right">    
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Settings</a></li>
          </ul>       
      </footer> 
      `;
    }
}