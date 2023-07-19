import { useState } from "react";

export default function Search({ handleChange }:any) {
  const [value, setValue] = useState("")
  function handleType(e:any) {
    const value = e.target.value
    handleChange(value);
    setValue(value)
  }

  function handleClear() {
    setValue("")
  }
  return (
    <div className="join w-full py-4">
      <input value={value} onChange={(e) => { handleType(e)}} className="input input-md input-bordered join-item w-full" placeholder="Search your favorite cat"/>
      {value.length > 0 ?
        <button onClick={handleClear} className="btn btn-md join-item">Clear</button>
      : null}
    </div>
  )
}