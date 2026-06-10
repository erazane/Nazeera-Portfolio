import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const TITLES = [
  'Frontend Developer',
  'Business Applications Developer',
  'Full Stack Developer',
  'Creative Problem Solver',
];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[currentIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(
            currentTitle.substring(0, displayText.length + 1)
          );
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(
            currentTitle.substring(0, displayText.length - 1)
          );
        } else {
          setIsDeleting(false);
          setCurrentIndex(
            (prev) => (prev + 1) % TITLES.length
          );
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  const scrollToAbout = () => {
    document
      .getElementById('about')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background:
          'linear-gradient(135deg, var(--midcentury-cream) 0%, #f0e6d2 50%, var(--midcentury-cream) 100%)',
        padding: '0 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              marginBottom: '1rem',
              lineHeight: '1.1',
              fontFamily: "'Playfair Display', serif",
              color: 'var(--text-dark)',
            }}
          >
            Nazeera{' '}
            <span
              style={{
                color: 'var(--midcentury-orange)',
                display: 'block',
                fontStyle: 'italic',
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Nasharuddin
            </span>
          </h1>

          <div
            style={{
              marginBottom: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              minHeight: '80px',
            }}
          >
            <div
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                color: 'var(--midcentury-teal)',
                fontWeight: '500',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                minHeight: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.3rem',
              }}
            >
              <span>{displayText}</span>

              <span
                style={{
                  animation: 'blink 1s infinite',
                  color: 'var(--midcentury-orange)',
                }}
              >
                |
              </span>
            </div>

            <span
              style={{
                fontSize: '1.1rem',
                color: 'var(--midcentury-warmgray)',
                fontStyle: 'italic',
              }}
            >
              Based in Kuala Lumpur, Malaysia
            </span>
          </div>

          <p
            style={{
              fontSize: '1.2rem',
              maxWidth: '700px',
              margin: '0 auto 3rem',
              color: 'var(--text-light)',
              lineHeight: '1.7',
            }}
          >
            Fresh graduate with experience in React, Java Spring Boot,
            PHP Laravel, Power Platform, and full-stack web
            development. Passionate about building practical digital
            solutions that improve user experience and business
            processes.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="#projects"
              style={{
                padding: '12px 24px',
                backgroundColor: 'var(--midcentury-teal)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                transition: '0.3s ease',
              }}
            >
              View Projects
            </a>

            <a
              href="#contact"
              style={{
                padding: '12px 24px',
                border: '2px solid var(--midcentury-teal)',
                color: 'var(--midcentury-teal)',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                transition: '0.3s ease',
              }}
            >
              Contact Me
            </a>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'var(--midcentury-teal)',
            cursor: 'pointer',
            animation: 'bounce 2s infinite',
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