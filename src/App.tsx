import React, {useEffect, useState} from 'react';
import {FormFieldType} from "./type";
import data from './data.json'
import {FormField} from "./components/FormField";
import './App.css'

function App() {
  const [fields, setFields] = useState<Record<string, FormFieldType>>({});


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFields({...fields, [e.target.name]: {...fields[e.target.name], value: e.target.value}})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      alert(JSON.stringify(Object.values(fields)))
  }

  useEffect(() => {
      const dataWithName = (data as unknown as FormFieldType[]).reduce((acc,f) => ({...acc, [(Math.random() + 1).toString(36).substring(7)]: f}), {})
      setFields(dataWithName)
  },[])

  return (
      <form onSubmit={handleSubmit}>
       <div className="container">
           {Object.entries(fields).map(([name, field]) => (
               <FormField key={name} onChange={handleChange} {...field} name={name} />
           ))}
           <button>Submit</button>
       </div>

      </form>
  );
}

export default App;
