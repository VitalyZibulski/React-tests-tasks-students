import React from 'react'
import Progres from './Progress';

const TodoItem = ({item, step}) => {
    let { current, max, id, title } = item;
    let rel = current / max;
    let alertClass = rel < 0.25 ? 'alert-danger' :
                     rel < 0.75 ? 'alert-warning' :
                     'alet-success'

    return <div className={`alert my-2 ${alertClass}`}>
        <h2>{title} ({current / max})</h2>
        <div className="my-2">
            <Progres current={current} max={max}/>
        </div>
        { rel < 1 ?
            <button onClick={() => step(id)} type="button" className="btn btn-primary">Make step</button>
            : <strong>All done</strong>
        } 
        
    </div>
}

export default TodoItem;