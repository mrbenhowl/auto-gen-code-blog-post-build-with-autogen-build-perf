import React from 'react'

const Test99 = ({ something, doSomething }) => (
  <form>
    <div>Test component 99: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test99
