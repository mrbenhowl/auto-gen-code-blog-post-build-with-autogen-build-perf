import React from 'react'

const Test15 = ({ something, doSomething }) => (
  <form>
    <div>Test component 15: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test15
