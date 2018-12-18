import React from 'react'

const Test67 = ({ something, doSomething }) => (
  <form>
    <div>Test component 67: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test67
