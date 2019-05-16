import styled from 'styled-components'

const CommentSectionDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin: 0;
    padding-left: 10px;
    margin-bottom: 10px;
    `;

const LikesDiv = styled.div`
    padding: 10px;
    width: 100%;
    `;
    
const IconDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-right: 10px;
    padding-bottom: 5px;
    `;

const Icon = styled.img`
    width: 30px;
    object-fit: contain;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-right: 10px;
    padding-bottom: 5px;
`;

const PostedCommentsDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin: 0;
    padding-left: 10px;
    width: 100%;
`;

const CommentsParagraph = styled.div`
    padding: 0 2px 5px 0;
    line-height: 1rem;
    margin: 0;
`

const CommentForm = styled.form`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0 10px 5px;
    max-width: 600px;
    flex-wrap: wrap;

    ${props => props.show ? props.toggleCommentForm : props.showForm}
`; 


export { 
    CommentSectionDiv, //To CommentSection.js
    LikesDiv, //To Likes.js
    IconDiv, //Likes.js
    Icon, //Likes.js
    PostedCommentsDiv, //PostedComments.js
    CommentsParagraph, //PostedComments.js

}