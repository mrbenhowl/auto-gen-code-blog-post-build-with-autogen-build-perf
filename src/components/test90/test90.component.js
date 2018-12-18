import React from 'react'

const Test90 = ({ something, doSomething }) => (
  <form>
    <div>Test component 90: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test90
