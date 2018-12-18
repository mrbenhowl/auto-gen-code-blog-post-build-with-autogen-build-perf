import React from 'react'

const Test38 = ({ something, doSomething }) => (
  <form>
    <div>Test component 38: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test38
