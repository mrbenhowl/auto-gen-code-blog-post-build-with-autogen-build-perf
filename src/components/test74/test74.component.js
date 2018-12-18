import React from 'react'

const Test74 = ({ something, doSomething }) => (
  <form>
    <div>Test component 74: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test74
