import React from 'react'

const Progres = ({min = 0, current, max}) => {
    let rel = current / max;
    let styles = { width: rel * 100 + '%'};

    return <div className="progress">
        <div className="progress-bar"
            role="progressbar"
            aria-valuenow={current}
            aria-valuemin={min}
            aria-valuemax={max}
            style={styles}
        ></div>
    </div>
}

export default Progres;