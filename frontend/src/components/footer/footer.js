import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles.js";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
 
const Footer = () => {
    return (
        <Box>
            <h1
                style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">
                            Aim
                        </FooterLink>
                        <FooterLink href="#">
                            Vision
                        </FooterLink>
                        <FooterLink href="#">
                            Testimonials
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">
                            Sell
                        </FooterLink>
                        <FooterLink href="#">
                            Buy
                        </FooterLink>
                        
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                            Uttar Pradesh
                        </FooterLink>
                        <FooterLink href="#">
                            Ahemdabad
                        </FooterLink>
                        <FooterLink href="#">
                            Indore
                        </FooterLink>
                        <FooterLink href="#">
                            Mumbai
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="https://www.facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f">
                            <FacebookIcon sx={{ color: "white" }} />
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="https://instagram.com" target="_blank">
                            <i className="fab fa-instagram">
                            <InstagramIcon sx={{ color: "white" }} />
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="https://twitter.com" target="_blank">
                            <i className="fab fa-X">
                            <TwitterIcon sx={{ color: "white" }} />
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    X
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="https://youtube.com" target="_blank">
                            <i className="fab fa-youtube">
                            <YouTubeIcon sx={{ color: "white" }} />
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column> 
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;