import React from 'react'

const Test64 = ({ something, doSomething }) => (
  <form>
    <div>Test component 64: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test64
