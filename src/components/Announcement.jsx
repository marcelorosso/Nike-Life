import styled from "@emotion/styled"

const Container = styled.div`
    height: 25px;
    background-color: teal;
    color: white;
    text-align: center;
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over $3000
    </Container>
  )
}

export default Announcement