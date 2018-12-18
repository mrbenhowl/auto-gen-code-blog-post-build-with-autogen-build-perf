import React from 'react'

const Test10 = ({ something, doSomething }) => (
  <form>
    <div>Test component 10: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test10
