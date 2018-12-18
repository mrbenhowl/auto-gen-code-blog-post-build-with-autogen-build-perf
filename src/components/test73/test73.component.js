import React from 'react'

const Test73 = ({ something, doSomething }) => (
  <form>
    <div>Test component 73: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test73
