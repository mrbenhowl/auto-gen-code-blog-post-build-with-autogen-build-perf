import React from 'react'

const Test55 = ({ something, doSomething }) => (
  <form>
    <div>Test component 55: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test55
