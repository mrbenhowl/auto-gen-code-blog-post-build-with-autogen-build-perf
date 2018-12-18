import React from 'react'

const Test23 = ({ something, doSomething }) => (
  <form>
    <div>Test component 23: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test23
