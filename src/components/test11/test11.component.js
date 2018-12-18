import React from 'react'

const Test11 = ({ something, doSomething }) => (
  <form>
    <div>Test component 11: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test11
