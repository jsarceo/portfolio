import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
    background-color: skyblue;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
// left
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 12px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`


// center
const Center = styled.h1`
    flex: 1;
    text-align: center;
`
const Logo = styled.div`
    font-weight: bold;
`

// right
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{color:"gray, fontSize:16"}} />
                    </SearchContainer>
                </Left>

                <Center>
                    <Logo>BAKE AWAY</Logo>
                </Center>

                <Right>
                    <MenuItem>Sign Up</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge> 
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar