import React from "react";

import 'codemirror/lib/codemirror.css' //code syntax
import 'codemirror/theme/material.css' //code theme
import 'codemirror/mode/xml/xml' // for HTML
import 'codemirror/mode/css/css' // for CSS
import 'codemirror/mode/javascript/javascript' // for JAVASCRIPT

import { Controlled as ControlledEditor } from 'react-codemirror2'

function Editor(props) {

    const {
        language, 
        title, 
        value,
        onChange
    }=props
    function handleChange(editor,data, value){
        onChange(value);
    }
    return (
        <div className="editor-container">
            <div className="editor-title">
                {title}
            </div>


            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                
                className={"code-mirror-wrapper"}
                options={{
                    lineWrapping: true,
                    lint: true,
                    theme:"material",
                    mode: language,
                    lineNumbers: true
                    
                }}
            />



        </div>)

}

export default Editor;