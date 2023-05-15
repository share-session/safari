var loaded = false

function load() {
    if (loaded) {
        return
    }
    
    var url = "https://cdn.jsdelivr.net/gh/share-session/browser@1.11.0/dist/content.js?e=" + Date.now()

    var script = document.createElement("script")
    
    var id = "share-session"

    script.id = id
    script.src = url
    script.async = true;
    script.language = "javascript"
    
    if (document.getElementById(id)) {
        return;
    }

    document.body.appendChild(script);
}

function tryLoad() {
    if (loaded) {
        return;
    }
    
    if (document.body == null) {
        setTimeout(tryLoad, 1000)
        return
    }
    
    load();
}

tryLoad()
