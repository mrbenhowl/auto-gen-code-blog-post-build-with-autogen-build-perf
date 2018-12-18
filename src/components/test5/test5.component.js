import React from 'react'

const Test5 = ({ something, doSomething }) => (
  <form>
    <div>Test component 5: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test5
