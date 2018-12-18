import React from 'react'

const Test75 = ({ something, doSomething }) => (
  <form>
    <div>Test component 75: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test75
