import React from 'react'

const Test63 = ({ something, doSomething }) => (
  <form>
    <div>Test component 63: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test63
