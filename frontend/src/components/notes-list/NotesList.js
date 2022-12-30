import React, {useContext, useEffect, useState} from "react";
import AuthContext from "../../context/AuthContext"

import "./NotesList.css"

import {Link} from "react-router-dom"

function NotesList(props) {
    const {user_, notes} = props;

    let [profileData, setProfileData] = useState([]);
    let [notesData, setNotesData] = useState([]);
    // let {authTokens, logoutUser, user} = useContext(AuthContext);

    // useEffect(()=>{
    //     getProfileData()
    // },[user])

    const [list, setNotes] = useState([]);
    const [value, setNotesText] = useState("");
    
    const addToNotes = () => {
        let tempArr = list;
        tempArr.push(value);
        setNotes(tempArr);
        setNotesText("");
    };

    const removeFromNotes = (index) => {
        let temp = list.filter((item, i) => i !== index);
        setNotes(temp);
    };


    return (
    <div>
        
        <h1 className="h1-style">Paper sketches</h1>
        <ul>
            {list.length > 0 &&
             list.map((item, i) => 
                <div>
                    <div className="note-block">
                        <section className="noteNameSection"><text className="note">{item}</text></section>
                        <aside className="noteNameSectionDel"><span class="material-symbols-outlined"
                                     onClick={() => removeFromNotes(i)}>delete</span></aside>
                    </div>
                    <hr/>
                </div>)}
        </ul>
        
        <div className="noteNameInput">
            <input type="text" className="NameInput"
            value={value} onChange={(e) => setNotesText(e.target.value)}/>{" "}
            <button className="addButton" onClick={addToNotes}>+</button>
        </div>
    </div>);
}
export default NotesList;