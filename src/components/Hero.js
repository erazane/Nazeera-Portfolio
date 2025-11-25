import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = ['Frontend Developer', 'UI/UX Designer', 'React Specialist', 'Creative Problem Solver'];
  
  useEffect(() => {
    const currentTitle = titles[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing effect
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting effect
        if (displayText.length > 0) {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, titles]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      background: 'linear-gradient(135deg, var(--midcentury-cream) 0%, #f0e6d2 50%, var(--midcentury-cream) 100%)',
      padding: '0 2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            marginBottom: '1rem',
            lineHeight: '1.1',
            fontFamily: "'Playfair Display', serif",
            color: 'var(--text-dark)'
          }}>
            Nazeera <span style={{ 
              color: 'var(--midcentury-orange)',
              display: 'block', 
              fontStyle: 'italic',
              fontFamily: "'Playfair Display', serif"
            }}>Nasharuddin</span>
          </h1>
          
          <div style={{
            marginBottom: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            minHeight: '80px'
          }}>
            {/* Typing Animation Container */}
            <div style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              color: 'var(--midcentury-teal)',
              fontWeight: '500',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              minHeight: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.3rem'
            }}>
              <span>{displayText}</span>
              <span style={{ 
                animation: 'blink 1s infinite',
                color: 'var(--midcentury-orange)'
              }}>|</span>
            </div>
            
            <span style={{
              fontSize: '1.1rem',
              color: 'var(--midcentury-warmgray)',
              fontStyle: 'italic'
            }}>
              Based in Kuala Lumpur, Malaysia
            </span>
          </div>
          
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            color: 'var(--text-light)',
            lineHeight: '1.6'
          }}>
            Yo Yo Yo! Its Nazeera, your friendly neighborhood frontend developer and design enthusiast. I craft beautiful and functional web experiences that make users go "Wow!" Let's build something amazing together.
          </p>
          <br></br><br></br>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            
            
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'var(--midcentury-teal)',
            cursor: 'pointer',
            animation: 'bounce 2s infinite'
          }}
          onClick={scrollToAbout}
        >
          <ChevronDown size={24} />
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
        
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;