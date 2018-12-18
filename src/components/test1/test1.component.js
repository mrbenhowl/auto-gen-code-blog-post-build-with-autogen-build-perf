import React from 'react'

const Test1 = ({ something, doSomething }) => (
  <form>
    <div>Test component 1: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test1
