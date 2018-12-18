import React from 'react'

const Test72 = ({ something, doSomething }) => (
  <form>
    <div>Test component 72: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test72
