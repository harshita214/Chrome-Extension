const defineCSS = () => {
    return `<style>
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 100%;
        height: auto;
    }
    </style>`;
};

const defineHTML = () => {
    return `<div class = "content">
    <img src = "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51smFMY97PS._SY550_.jpg">
    </div>`;
};

const forbiddenURLs = ["twitter.com", "web.whatsapp.com"];
const set = new Set(forbiddenURLs);

if (set.has(window.location.hostname)) {
    document.head.innerHTML = defineCSS();
    document.body.innerHTML = defineHTML();
}
