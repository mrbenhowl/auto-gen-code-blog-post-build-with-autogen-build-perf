import React from 'react'

const Test95 = ({ something, doSomething }) => (
  <form>
    <div>Test component 95: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test95
