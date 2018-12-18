import React from 'react'

const Test33 = ({ something, doSomething }) => (
  <form>
    <div>Test component 33: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test33
