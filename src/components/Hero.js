import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
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
            lineHeight: '1.1'
          }}>
            Constance <span style={{ color: 'var(--midcentury-orange)', display: 'block', fontStyle: 'italic' }}>Souville</span>
          </h1>
          
          <div style={{
            marginBottom: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <span style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              color: 'var(--midcentury-teal)',
              fontWeight: '500',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              Frontend Developer
            </span>
            <span style={{
              fontSize: '1.1rem',
              color: 'var(--midcentury-warmgray)',
              fontStyle: 'italic'
            }}>
              Based in Montreal
            </span>
          </div>
          
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            color: 'var(--text-light)',
            lineHeight: '1.6'
          }}>
            I create beautiful, functional web experiences with a focus on 
            clean design and user-friendly interfaces. Combining modern 
            development practices with timeless design principles.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button 
              style={{
                display: 'inline-block',
                padding: '12px 30px',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: '600',
                textDecoration: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'inherit',
                background: 'var(--midcentury-orange)',
                color: 'white'
              }}
              onClick={scrollToAbout}
            >
              View My Work
            </button>
            <a href="#contact" style={{
              display: 'inline-block',
              padding: '12px 30px',
              border: '2px solid var(--midcentury-teal)',
              borderRadius: '4px',
              fontSize: '1rem',
              fontWeight: '600',
              textDecoration: 'none',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'inherit',
              background: 'transparent',
              color: 'var(--midcentury-teal)'
            }}>
              Get In Touch
            </a>
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
      `}</style>
    </section>
  );
};

export default Hero;