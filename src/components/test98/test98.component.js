import React from 'react'

const Test98 = ({ something, doSomething }) => (
  <form>
    <div>Test component 98: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test98
