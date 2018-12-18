import React from 'react'

const Test29 = ({ something, doSomething }) => (
  <form>
    <div>Test component 29: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test29
