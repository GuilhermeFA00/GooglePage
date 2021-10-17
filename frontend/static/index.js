import Page from "./contents/page.js"

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.isMatch.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

/*const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};*/

const router = async () => {
    const routes = [
        { path: "/", view: Page }
    ];

    const potencialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname.match(pathToRegex(route.path))
        }
    });

    let match = potencialMatches.find(potencialMatch => potencialMatch.isMatch !== null);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: [location.pathname]
        }
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
}

//window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    router();
});