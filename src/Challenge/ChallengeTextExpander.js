import { useState } from "react";

export default function ChallengeTextExpander(){
    return (
        <div>
          <TextExpander>
            Space travel is the ultimate adventure! Imagine soaring past the stars
            and exploring new worlds. It's the stuff of dreams and science fiction,
            but believe it or not, space travel is a real thing. Humans and robots
            are constantly venturing out into the cosmos to uncover its secrets and
            push the boundaries of what's possible.
            
          </TextExpander>
    
          <TextExpander
            collapsedNumWords={20}
            expandButtonText="Show text"
            collapseButtonText="Collapse text"
            buttonColor="#ff6622"
          >
            Include all props Space travel requires some seriously amazing technology and
            collaboration between countries, private companies, and international
            space organizations. And while it's not always easy (or cheap), the
            results are out of this world. Think about the first time humans stepped
            foot on the moon or when rovers were sent to roam around on Mars.
          </TextExpander>
    
          <TextExpander expanded={true} className="box">
            Space missions have given us incredible insights into our universe and
            have inspired future generations to keep reaching for the stars. Space
            travel is a pretty cool thing to think about. Who knows what we'll
            discover next!
          </TextExpander>
        </div>
    );
}

function TextExpander({
        collapsedNumWords=30,
        expandButtonText="Show More",
        collapseButtonText="Show Less",
        buttonColor="#1f09cd",
        expanded=false,
        className="",
        children
    }){
    const [isOpen,setIsOpen] = useState(expanded);
    const buttonStyle = {
        color: buttonColor,
        display: 'inline-block',
        marginLeft: '10px',
        background: 'black',
        border: 'none',
        cursor: 'pointer'
    }
    const displayText = isOpen ? children : children.split(" ").slice(0,collapsedNumWords).join(" ")+ "...";
    return (
        <div className={className}>
            <p>{displayText}</p>
            <button onClick={() => setIsOpen((exp) => !exp)} style={buttonStyle}>{isOpen ? collapseButtonText : expandButtonText}</button>
        </div>
    )
}
// function TextExpander({children,collapsedNumWords=200,expandButtonText="Show More",collapseButtonText="Show Less", expanded=false,className="test",buttonColor="red"}) {
//     const [isOpen,setOpen] = useState(expanded);
//     function handleCollape() {
//         setOpen(!isOpen);
//     }
//     return (
//         <div className={className}>
//             {isOpen ? children : children.slice(0,collapsedNumWords)}
//             {isOpen ? <CollapseButtonText oncollapseButtonText={collapseButtonText} onbuttonColor={buttonColor} onsetOpen={handleCollape} />  : <ExpandButtonText OnexpandButtonText={expandButtonText} onbuttonColor={buttonColor} onsetOpen={handleCollape}  />}
//             <div style={{display:"block",border:"1px solid white",margin: '10px 0'}}></div>
//         </div>
//     )
// }

// function ExpandButtonText({OnexpandButtonText,onbuttonColor,onsetOpen}) {
//     return (
//         <span role="button" onClick={onsetOpen} href="#" style={{color: onbuttonColor, cursor: 'pointer'}}>{OnexpandButtonText}</span>
//     )
// }

// function CollapseButtonText({oncollapseButtonText,onbuttonColor,onsetOpen}) {
//     return (
//         <span role="button" onClick={onsetOpen} href="#" style={{color: onbuttonColor, cursor: 'pointer'}}>{oncollapseButtonText}</span>
//     )
// }