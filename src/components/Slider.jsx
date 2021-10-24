import { ArrowBack, ArrowForward } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    // background-color: azure;
    position: relative;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #DED9D9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`

const Image = styled.img`
    height: 80%;

`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 50px;
`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
`

const Button= styled.button`
    padding: 10px;
    font-size: 20px;
    // background-color: transparent;
    cursor: pointer;
`


const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowBack />
            </Arrow>

            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src="https://www.lasenor.com/wp-content/uploads/2017/06/web-puff-pastry-margarine.jpg" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>PROMOTIONS</Title>
                        <Desc>CRAVING FOR SWEETS?! GET FLAT 30% OFF NEW ITEMS</Desc>
                        <Button>ORDER NOW</Button>
                    </InfoContainer>
                </Slide>

                <Slide>
                    <ImgContainer>
                        <Image src="https://www.lasenor.com/wp-content/uploads/2017/06/web-puff-pastry-margarine.jpg" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>PROMOTIONS</Title>
                        <Desc>CRAVING FOR SWEETS?! GET FLAT 30% OFF NEW ITEMS</Desc>
                        <Button>ORDER NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>

            <Arrow direction="right">
                <ArrowForward />
            </Arrow>
        </Container>
    )
}

export default Slider
