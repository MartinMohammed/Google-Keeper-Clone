import React from "react";

//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.

// add props  for dynamical content
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    // a div because we can only return one element
    <div className="note">
      {/* each Note custom component can be deleted */}
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {/* seperating: onClick --> call interal function which calls parent function */}
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

// Challenge. Render all notes inside notes.js as a seperate Note
// component.
export default Note;
