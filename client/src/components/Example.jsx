import React from 'react'

function Example(props) {
  return (
    <div style={{ marginBottom: 2 }}>
        <div style={{ marginTop: 2, display: "flex" }}>
          
          <div style={{ width: "60%", paddingRight: 0 }}>{props.children}</div>
          <div style={{ width: "30%" }}/>
                      
        </div>
      </div>
  )
}

export default Example

