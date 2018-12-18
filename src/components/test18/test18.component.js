import React from 'react'

const Test18 = ({ something, doSomething }) => (
  <form>
    <div>Test component 18: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test18
