import React from 'react'

const Test2 = ({ something, doSomething }) => (
  <form>
    <div>Test component 2: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test2
