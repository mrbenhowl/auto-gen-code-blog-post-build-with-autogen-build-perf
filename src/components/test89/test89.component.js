import React from 'react'

const Test89 = ({ something, doSomething }) => (
  <form>
    <div>Test component 89: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test89
