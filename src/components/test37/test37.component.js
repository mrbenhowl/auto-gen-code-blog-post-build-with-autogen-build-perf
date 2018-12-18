import React from 'react'

const Test37 = ({ something, doSomething }) => (
  <form>
    <div>Test component 37: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test37
