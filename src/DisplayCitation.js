import  React  from  'react';

const  DisplayCitation = ({ citation }) => {
    return (
        <div  className="DisplayCitation">
            <img  src={citation.image}  alt="picture"  />
            <ul>
                <li>{citation.character}</li>
                <li>{citation.quote}</li> 
            </ul>
        </div>
    );
};

export  default  DisplayCitation;