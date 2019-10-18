import styled from "styled-components"
import { Link } from "gatsby"
import "typeface-montserrat"

export const HeaderContainer = styled.header`
  background: #334355;
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: center;
`

export const TitleContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

export const WebsiteTitle = styled.h1`
  margin: 0;
  display: flex;
  height: 100px;
`

export const LogoContainer = styled.img`
  height: 100%;
  margin: auto;
`

export const HomePageLink = styled(Link)`
  color: #fff5e7;
  font-family: "Montserrat";
  font-weight: 200;
  text-decoration: none;
  margin: auto;
`
