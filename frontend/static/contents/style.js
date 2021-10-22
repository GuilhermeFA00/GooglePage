export default function () {
    let body = document.createElement('style');
    body.innerHTML = "body {  margin: 0;padding: 0;font-family: 'Roboto', sans-serif;}";
    document.body.appendChild(body);

    let header = document.createElement('style');
    header.innerHTML = "header { width: 100%; }";
    document.body.appendChild(header);

    let ul = document.createElement('style');
    ul.innerHTML = "ul { list-style: none; }";
    document.body.appendChild(ul);

    let a = document.createElement('style');
    a.innerHTML = "a {   text-decoration: none; color: inherit; }";
    document.body.appendChild(a);

    let nav_bar = document.createElement('style');
    nav_bar.innerHTML = "#nav_bar { float: right; }";
    document.body.appendChild(nav_bar);

    let navbar_li = document.createElement('style');
    navbar_li.innerHTML = "#nav_bar li {   display: inline-block; padding: 8px; }";
    document.body.appendChild(navbar_li);

    let navbarli_signin = document.createElement('style');
    navbarli_signin.innerHTML = "#nav_bar #sign_in {   background: #4887ef; margin-right: 25px;padding: 7px 15px;border-radius: 3px; font-weight: bold; }";
    document.body.appendChild(navbarli_signin);

    let nav_links = document.createElement('style');
    nav_links.innerHTML = ".nav-links { color: #404040; }";
    document.body.appendChild(nav_links);

    let liNavlinks_ahover = document.createElement('style');
    liNavlinks_ahover.innerHTML = "li.nav-links a:hover { text-decoration: underline; }";
    document.body.appendChild(liNavlinks_ahover);

    let signIn_hover = document.createElement('style');
    signIn_hover.innerHTML = "#sign_in:hover { box-shadow: 1px 1px 5px #999; }";
    document.body.appendChild(signIn_hover);

    let signIn = document.createElement('style');
    signIn.innerHTML = "#sign_in { color: #fff; }";
    document.body.appendChild(signIn);

    let logo = document.createElement('style');
    logo.innerHTML = ".google #google_logo {   text-align: center;display: block;margin: 0 auto;clear: both;padding-top: 112px;padding-bottom: 20px; }";
    document.body.appendChild(logo);

    let form = document.createElement('style');
    form.innerHTML = ".form { text-align: center; }";
    document.body.appendChild(form);

    let formSearch = document.createElement('style');
    formSearch.innerHTML = "#form-search {   width: 450px;line-height: 32px;padding: 20px 10px; }";
    document.body.appendChild(formSearch);

    let form_formSearch = document.createElement('style');
    form_formSearch.innerHTML = ".form #form-search { padding: 0 8px; }";
    document.body.appendChild(form_formSearch);

    let buttons = document.createElement('style');
    buttons.innerHTML = ".buttons {   text-align: center;padding-top: 30px;margin-bottom: 300px; }";
    document.body.appendChild(buttons);

    let footer = document.createElement('style');
    footer.innerHTML = "footer {   background: #f2f2f2;border-top: solid 2px #e4e4e4;bottom: 0;padding-bottom: 0;width: 100% }";
    document.body.appendChild(footer);

    let footer_ulli = document.createElement('style');
    footer_ulli.innerHTML = "footer ul li {   display: inline;color: #666666;font-size: 14px;padding: 13px; }";
    document.body.appendChild(footer_ulli);

    let footer_ul = document.createElement('style');
    footer_ul.innerHTML = "footer ul {  float: left;padding: 1px; }";
    document.body.appendChild(footer_ul);

}