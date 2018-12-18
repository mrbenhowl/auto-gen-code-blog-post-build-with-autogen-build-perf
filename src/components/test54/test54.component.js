import React from 'react'

const Test54 = ({ something, doSomething }) => (
  <form>
    <div>Test component 54: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test54
