import React from 'react'

const Test8 = ({ something, doSomething }) => (
  <form>
    <div>Test component 8: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test8
