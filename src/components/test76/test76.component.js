import React from 'react'

const Test76 = ({ something, doSomething }) => (
  <form>
    <div>Test component 76: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test76
