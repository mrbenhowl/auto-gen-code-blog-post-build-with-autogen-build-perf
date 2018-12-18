import React from 'react'

const Test51 = ({ something, doSomething }) => (
  <form>
    <div>Test component 51: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test51
