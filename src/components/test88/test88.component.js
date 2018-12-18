import React from 'react'

const Test88 = ({ something, doSomething }) => (
  <form>
    <div>Test component 88: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test88
