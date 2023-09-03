import React, { useState } from 'react'

const TodoForm = ({ created }) => {
   const [ fields, setFields] = useState([
        { label: "Title", value: "", name: "title", type: "text"},
        { label: "Max", value: "", name: "max", type: "number"},
   ]);

   const setFieldValue = (e) => {
        let { name, value } = e.target;

        setFields(fields.map(field => field.name !== name ? field : {
            ...field, value: value
        }))
   }

   const sendForm = () => {
        const result = {};
        fields.forEach(field => result[field.name] = field.value);
        setFields(fields.map(field => ({...field, value: ''})));
        created(result);
   }

   return <form>
        {fields.map(field => <div className="form-group" key={field.name}>
            <label>{ field.label }</label>
            <input value={field.value} onChange={setFieldValue} name={field.name} type={field.type} types="text" className="form-control" />
        </div>)}
        <button type="button" onClick={sendForm}>Create to do item</button>
   </form>
}

export default TodoForm;