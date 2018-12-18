import React from 'react'

const Test47 = ({ something, doSomething }) => (
  <form>
    <div>Test component 47: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test47
