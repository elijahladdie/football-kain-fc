import React from 'react'
import {CircularProgressbar ,buildStyles,CircularProgressbarWithChildren} from "react-circular-progressbar"
import AnimatedProgressProvider from '../AnimatedProgressProvider';
import { easeQuadInOut } from "d3-ease";
import "react-circular-progressbar/dist/styles.css";


function Example(props) {
    return (
      <div style={{ marginBottom: 80 }}>
        <hr style={{ border: "2px solid #ddd" }} />
        <div style={{ marginTop: 30, display: "flex" }}>
          <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
          <div style={{ width: "70%" }}>
            <h3 className="h5">{props.label}</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    );
  }
const Dashboard = () => {
    
  return (
    <div>
           <Example label="Fully controlled text animation using react-move">
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={66}
        duration={1.4}
        easingFunction={easeQuadInOut}
        repeat
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
              styles={buildStyles({ pathTransition: "none" })}
            />
          );
        }}
      </AnimatedProgressProvider>
    </Example>
    </div>

  )
}

export default Dashboard