import React from 'react'
import styled from 'styled-components'
import collaboration from "../Images/collaboration.png"
import group from "../Images/group.png"
import group5 from "../Images/group5.png"
import photo6 from "../Images/photo6.png"
import tour from "../Images/tour.png"

const Homepage = () => {
    return (
        <DIV>
            <div>
                <img src={group} alt="group img" />
            </div>
            <div>
                <img src={tour} alt="tour img" />
            </div>
            <div>
                <img id='img3' src={collaboration} alt="tour img" />
            </div>
            <div>
                <img id='img6'  src={photo6} alt="tour img" />
            </div>
            <div>
                <img  id='img4' src={group5} alt="tour img" />
            </div>
          
        </DIV>
        
    )
}

export default Homepage

const DIV = styled.div `
img{
width: 90%;
border-radius: 15px;
}

#img3{
    margin-top: 30px;
}

#img4{
 margin-top: 30px;
}

#img6{
    height: 150px;
    width: 50%;
    margin-top: 60px;
}


`

