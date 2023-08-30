import React, { Fragment } from 'react'

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.',
    'A poppy blooms 2 2 .'
  ]
}

const CommaSeparator = () => {
  return (
    <article>
      {poem.lines.map((line, index) => {
        return (
          <Fragment key={index}>
            <p>{line}</p>
            {index !== poem.lines.length - 1 && <hr />}
          </Fragment>
        )
      })}
    </article>
  )
}

export default CommaSeparator