import React from 'react'

const Test7 = ({ something, doSomething }) => (
  <form>
    <div>Test component 7: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test7
