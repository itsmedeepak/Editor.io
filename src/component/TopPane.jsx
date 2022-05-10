import React, { useState, useEffect } from 'react'
import Editor from "./Editor"

import useLocalStorage from '../hooks/useLocalStorage';

const [html, css, js] = [
  `<h1 id="id">Hello World</h1>`,
  `body{
  color:blue;
  text-align:center;
}
#id{
  font-family:cursive;
}`,
  `var parentDOM = document.getElementById('parent-id');`
]

function TopPane() {




  const [Html, setHtml] = useLocalStorage("html",html);
  const [Css, setCss] = useLocalStorage("css",css);
  const [Js, setJs] = useLocalStorage("javascript",js);
  const [srcDoc, setsrcDoc] = useState(``);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setsrcDoc(`
      <html>
        <body> ${Html} </body>
        <style> ${Css} </style>
        <script> ${Js} </script>
      </html>`)
    }, 250)

    return ()=>clearTimeout(timeout)
  }, [Html, Css, Js])
  return (
    <div>
      <div className='pane top-pane'>
        <Editor
          title="HTML"
          language="xml"
          value={Html}
          onChange={setHtml}
        />
        <Editor
          title="CSS"
          language="css"
          value={Css}
          onChange={setCss}

        /> <Editor
          title="JS"
          language="javascript"
          value={Js}
          onChange={setJs}
        />
      </div>
      <div className='pane'>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  )
}


export default TopPane;