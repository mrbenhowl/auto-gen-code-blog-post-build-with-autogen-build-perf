import React from 'react'

const Test39 = ({ something, doSomething }) => (
  <form>
    <div>Test component 39: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test39
