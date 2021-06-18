import styled from "styled-components"

const StyledSidebar = styled.div`
    width: 240px;
    background-color: #e8e8e8;
    color: grey;

    @media (max-width: 425px){
        display:none;
    }
`

const SideNavLinks = styled.div`
    margin: 10px;

    & p{
        cursor: pointer;
        word-wrap: break-word;

    }
`

export default function Sidebar(props){
    const {links, onClick} = props;
    return(
        <StyledSidebar>
            <SideNavLinks>
                {links.map( link => 
                <p key = {link.id} onClick = {(e) => onClick(e,link.id)}>{link.name}
                </p>
            )}
            </SideNavLinks>
        </StyledSidebar>
    )
}