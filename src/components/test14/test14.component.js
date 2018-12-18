import React from 'react'

const Test14 = ({ something, doSomething }) => (
  <form>
    <div>Test component 14: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test14
