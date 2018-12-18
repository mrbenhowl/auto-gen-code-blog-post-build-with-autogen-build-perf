import React from 'react'

const Test28 = ({ something, doSomething }) => (
  <form>
    <div>Test component 28: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test28
