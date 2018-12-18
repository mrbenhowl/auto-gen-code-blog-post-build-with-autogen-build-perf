import React from 'react'

const Test61 = ({ something, doSomething }) => (
  <form>
    <div>Test component 61: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test61
