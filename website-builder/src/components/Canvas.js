import { useState, useEffect } from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';

function Canvas() {
    const [editor, setEditor] = useState(null)

    useEffect(() => {
        const editor = grapesjs.init({
            // Indicate where to init the editor. You can also pass an HTMLElement
            container: '#editor',
            // Get the content for the canvas directly from the element
            // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
            fromElement: true,
            // Disable the storage manager for the moment
            storageManager: false,

        });

        setEditor(editor)
    }, [])

    console.log(editor);
    return (
        <div id='editor'>
            <h1>Hello world</h1>
        </div>
    )
}


export default Canvas