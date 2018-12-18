import React from 'react'

const Test79 = ({ something, doSomething }) => (
  <form>
    <div>Test component 79: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test79
