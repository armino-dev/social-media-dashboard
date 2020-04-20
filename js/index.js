const app = document.body;

const init = () => {
    try {
        const theme = localStorage.getItem("theme") || "theme-light";
        setCheckBox(theme);
        app.className = theme;
    } catch (e) {
        console.error(e);
    }
}

const toggleTheme = () => {    
    let theme = app.className;    
    

    if (theme == "theme-light") {
        theme = "theme-dark";
    } else {
        theme = "theme-light";
    }
    app.className = theme;
    setCheckBox(theme);
    try {
        localStorage.setItem("theme", theme);   
    } catch (e) {
        console.error(e);
    }
}

const setCheckBox = (theme) => {
    const checkbox = document.getElementById("theme-switch-checkbox");
    checkbox.checked = (theme == "theme-dark") ? false : true;
}

(() => {    
    init();        
    document.getElementById("theme-switch").addEventListener("click", (e) => {
        e.preventDefault();
        toggleTheme();
    });
})();