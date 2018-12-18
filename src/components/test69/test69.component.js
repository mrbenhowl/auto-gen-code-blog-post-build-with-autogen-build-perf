import React from 'react'

const Test69 = ({ something, doSomething }) => (
  <form>
    <div>Test component 69: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test69
