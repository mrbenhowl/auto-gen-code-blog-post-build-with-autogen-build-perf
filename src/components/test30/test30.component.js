import React from 'react'

const Test30 = ({ something, doSomething }) => (
  <form>
    <div>Test component 30: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test30
