
function DefaultLayout({title, children}){
    return(
        <html>
            <head>
                <title>{title}</title>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>

            <body>
                <h1>{title}</h1>
                {children}
            </body>
        </html>
    )
}

















module.exports = DefaultLayout