import React from 'react'

const Test91 = ({ something, doSomething }) => (
  <form>
    <div>Test component 91: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test91
