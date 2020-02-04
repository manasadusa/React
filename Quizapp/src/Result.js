import React from 'react'

export default function Result({score,playagain}) {
    return (
        <div>
<h2>you scored {score}/5 correct answers!!!</h2>
<button onClick={playagain}>playagain</button>
        </div>
    )
}
