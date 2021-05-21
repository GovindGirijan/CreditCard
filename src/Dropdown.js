import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
          if (ref.current.contains(event.target)) {
            return;
          }
          setOpen(false);
        };
        document.body.addEventListener("click", onBodyClick, { capture: true });
     
        return () => {
          document.body.removeEventListener("click", onBodyClick, {
            capture: true,
          });
        };
      }, []);

    const renderedOptions = options.map((option) => {
        if(option === selected) {
            return null;
        }
        return (
            <div key={option} className="item" onClick={() => onSelectedChange(option)}>
                {option}
            </div>
        )
    })

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Dropdown;