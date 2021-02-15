// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  const InputUsernameRef = React.useRef()
  const [input, setInput] = React.useState('')
  const [error, setError] = React.useState('')
  const handleSubmit = e => {
    e.preventDefault()
    // for ref
    // const value = InputUsernameRef.current.value
    // const value = e.target.elements.inputId.value

    onSubmitUsername(input)
  }

  const handleChnage = e => {
    const value = InputUsernameRef.current.value
    setInput(value.toLowerCase())
    // const isValid = value === value.toLowerCase()
    // setError(isValid ? null : 'Pleas Enter LowerCase Only')
  }
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inputId">Username:</label>
        <input
          ref={InputUsernameRef}
          name="inputId"
          onChange={handleChnage}
          value={input}
          type="text"
        />
      </div>
      {/* <div style={{color: 'red', margin: '10px', padding: '5px'}}>{error}</div> */}
      {/* <button disabled={Boolean(error)} type="submit"> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
