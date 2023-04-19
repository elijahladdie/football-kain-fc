import React from 'react'

function Example(props) {
  return (
    <div style={{ marginBottom: 2 }}>
        <div style={{ marginTop: 2, display: "flex" }}>
          
          <div style={{ width: "60%", paddingRight: 30 }}>{props.children}</div>
          <div style={{ width: "30%" }}>
            <h3 className="h5">{props.label}</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
  )
}

export default Example

