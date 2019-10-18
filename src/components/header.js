import PropTypes from "prop-types"
import React from "react"
import "typeface-montserrat"
import Logo from "../images/icon.png"
import {
  HeaderContainer,
  TitleContainer,
  WebsiteTitle,
  HomePageLink,
  LogoContainer,
} from "../styles/header/header.styles"

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <TitleContainer>
      <WebsiteTitle>
          <HomePageLink to="/">{siteTitle.toUpperCase()}</HomePageLink>
          <LogoContainer src={Logo} alt="Logo" />
      </WebsiteTitle>
    </TitleContainer>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
