import { GitBranch, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/erazane?tab=repositories',
            icon: <Github size={20} />
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/nazeera-nasharuddin-70a795279/',
            icon: <Linkedin size={20} />
        },
        
        {
            name: 'Portfolio',
            url: 'https://yourportfolio.com',
            icon: <GitBranch size={20} />
        }
    ];

    return (
        <footer style={{
            textAlign: 'center',
            padding: '2rem 0',
            backgroundColor: 'var(--midcentury-cream)',
            color: 'var(--midcentury-warmgray)',
            marginTop: '2rem',
            borderTop: '1px solid rgba(141, 120, 106, 0.2)'
        }}>
            <p style={{ marginBottom: '1rem' }}>
                &copy; {currentYear} Nazeera Nasharuddin. All rights reserved.
            </p>

            <div className="footer-social-links" style={{ 
                marginTop: '0.5rem', 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '1.5rem' 
            }}>
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ 
                            color: 'var(--midcentury-warmgray)', 
                            transition: 'color 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.color = 'var(--midcentury-teal)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = 'var(--midcentury-warmgray)';
                        }}
                        aria-label={link.name}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;