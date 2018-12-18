import React from 'react'

const Test56 = ({ something, doSomething }) => (
  <form>
    <div>Test component 56: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test56
