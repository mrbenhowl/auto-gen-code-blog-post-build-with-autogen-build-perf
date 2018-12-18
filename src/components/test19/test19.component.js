import React from 'react'

const Test19 = ({ something, doSomething }) => (
  <form>
    <div>Test component 19: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test19
