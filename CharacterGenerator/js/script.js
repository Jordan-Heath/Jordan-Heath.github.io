function loadScript(url)
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}

loadScript("js/models/ability.js");

loadScript("js/constants.js");
loadScript("js/utils.js");

loadScript("js/model.js");
loadScript("js/view.js");
loadScript("js/controls.js");

loadScript("js/main.js");