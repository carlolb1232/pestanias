import React from 'react'

const Tab = (props) => {
  const { cantidad, onIndex } = props;
  let arr = [];
  for (let i = 0; i < cantidad; i++) {
    arr.push(i)
  }

  const handleTab = (index)=>{
    onIndex(index + 1)
    for (let i = 0; i < arr.length; i++) {
      if (index === i) {
        document.getElementById(`tab${i}`).style.backgroundColor = "black";
        document.getElementById(`tab${i}`).style.color = "rgb(238,238,238)";
      }else{
        document.getElementById(`tab${i}`).style.backgroundColor = "rgb(238,238,238)";
        document.getElementById(`tab${i}`).style.color = "black";
      }
    }
  }

  return (
    <div className="tab-container">
      {arr.map((e,i)=>{
          return <button id={`tab${i}`} onClick={e=>handleTab(i)}>{`Tab ${i + 1} `}</button>
        })
      }
    </div>
  )
}

export default Tab;