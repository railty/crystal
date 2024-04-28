import React from 'react'
debugger;
const worker = new Worker('w.js', { type: 'module' });
console.log("worker: ", worker);
function Options() {
    return (
        <div>
            <h1>This is an options page</h1>
        </div>
    )
}

export default Options