export default function renderFullPage(html, preloadedState) {
    return `
        <!doctype html>
        <html>
        <head>
            <title>Some Creative Title</title>
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script src="/bundle.js"></script>
        </body>
        </html>
    `
}