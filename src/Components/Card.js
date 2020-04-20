import React from 'react'
// import TitleH1 from './Title'
// import ImageDiv from './ImageDiv'
// import ImageStoryP from './ImageStoryP'
import styled from 'styled-components';


const TitleH1 = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: yellow;
`

const ImageDiv = styled.div`
  margin: 0 auto;
  font-size: .8em;
  text-align: center;
  color: white;
`
const Image = styled.img`
  width: 700px;
  margin: 0 auto;   
  padding: 1%;
`

const ImageStoryP = styled.p`
  width: 700px;
  font-size: 1em;
  color: yellow;
  text-align: center;
  padding: 1%;
  margin: 0 auto;
  background-color: black;
`

const Card = props => {
    return (
        <div>
            <TitleH1>{ props.title }</TitleH1>  
            
                <ImageDiv>
                    
                <Image src = { props.imgUrl } alt = 'Beautiful Nasa images'/>
                <p>Copyright: { props.copyright }</p>
                <p>Date of Image: { props.date }</p>
                </ImageDiv>
                
                <div>
                <ImageStoryP>{ props.explanation }</ImageStoryP>
                
            </div>
            
        </div>
    )
}

export default Card