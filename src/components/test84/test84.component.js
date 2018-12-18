import React from 'react'

const Test84 = ({ something, doSomething }) => (
  <form>
    <div>Test component 84: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test84
