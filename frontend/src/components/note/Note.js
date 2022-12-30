import React, { useState, useCallback } from 'react';

import TeX from '@matejmazur/react-katex';
import "./Note.css"

import { ParseError } from 'katex';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
const _ = String.raw;



function NotesList() {
    const [value, setNotesText] = useState("");

    const handleChange = useCallback(
        (event) => {
            setNotesText(event.target.value);
        },
        [setNotesText]
      );

    return (
    <div>
        <h1 className='h1-style'>Paper sketches</h1>
        <div className="double-view">
            <textarea className="code-section"
            value={value} spellCheck={false} onChange={handleChange}/>
            <aside className="markdown-section">
                <ReactMarkdown>{value}</ReactMarkdown>
            </aside>
        </div>
    </div>);
}
export default NotesList;