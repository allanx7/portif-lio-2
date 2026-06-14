const iframe = document.querySelector("iframe");

iframe.onload = () => {
    iframe.style.height =
        iframe.contentWindow.document.body.scrollHeight + "px";
};