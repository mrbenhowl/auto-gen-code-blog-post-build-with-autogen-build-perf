import React from 'react'

const Test4 = ({ something, doSomething }) => (
  <form>
    <div>Test component 4: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test4
