import React from 'react'

const Test58 = ({ something, doSomething }) => (
  <form>
    <div>Test component 58: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test58
