import React, { useState } from "react";

function CreateaArea(props) {
  // create state object
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleOnChange(event) {
    // destrucut event object
    const { name: inputName, value: inputValue } = event.target;

    setNote((prevNote) => {
      // use spread operator to set new object = overwrite ONLY the updated field
      return {
        ...prevNote,
        // use the variable value as a key
        [inputName]: inputValue
      };
    });
  }

  function submitNote(event) {
    // get current note state object (title, content)
    props.onAdd(note);
    // after updating we can reset the input fields;
    setNote({ title: "", content: "" });
    // no refreshing page
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={(event) => {
            handleOnChange(event);
          }}
          name="title"
          placeholder="Title"
          value={note.title}
        />

        <textarea
          onChange={(event) => {
            handleOnChange(event);
          }}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />

        {/* whenever click button inside a form = default behaviour: refresh page (because
            of post req) */}
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateaArea;
