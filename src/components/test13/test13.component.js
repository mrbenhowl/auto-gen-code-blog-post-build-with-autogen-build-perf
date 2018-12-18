import React from 'react'

const Test13 = ({ something, doSomething }) => (
  <form>
    <div>Test component 13: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test13
