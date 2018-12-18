import React from 'react'

const Test52 = ({ something, doSomething }) => (
  <form>
    <div>Test component 52: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test52
