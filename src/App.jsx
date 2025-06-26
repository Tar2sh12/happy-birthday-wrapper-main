import React, { useState, useEffect } from 'react';
import { Heart, Camera, Gift, Star, Globe } from 'lucide-react';

const App = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'ar' for Arabic

  // Translations
  const translations = {
    en: {
      title: "Happy Birthday, Taroka! 🎉",
      subtitle: "Celebrating the most amazing father in the world",
      gratitudeMessage: "Today is your special day, Dad, and I want you to know how grateful I am to have you in my life. Your wisdom, love, and endless support have shaped who I am today.",
      videoTitle: "A Special Message Just for You",
      videoDescription: "I made this video especially for you, ya Bob. It's filled with all the love, memories, and gratitude I have in my heart. Press play and know that every moment was created with you in mind. ❤️",
      videoCaption: "💝 Made with love, just for the best Taroka in the world",
      specialTitle: "A Father Like No Other",
      specialMessage1: "Dad, you've been my hero, my guide, and my biggest cheerleader. Your unconditional love has given me the confidence to chase my dreams. The lessons you've taught me, the values you've instilled, and the countless sacrifices you've made have not gone unnoticed.",
      specialMessage2: "Thank you for being the anchor in my life's storms and the wind beneath my wings. You're not just my father; you're my inspiration and my role model. Here's to celebrating you today and always! 🎂✨",
      wishesTitle: "Wishing you joy, health, and happiness! 🎈",
      wishesMessage: "May this new year of your life be filled with wonderful adventures and more videos you will make for our family, precious moments, and all the love you deserve.",
      downloadVideo: "Download the video here"
    },
    ar: {
      title: "يوم ميلاد سعيد، يا بوب! 🎉",
      subtitle: "نحتفل بأحسن أب في العالم",
      gratitudeMessage: "انهارده هو يومك المميز يا بابا، وعايزك أن تعرف مدى امتناني لوجودك في حياتي. حكمتك وحبك ودعمك اللامحدود عملني و كبرني.",
      videoTitle: "رسالة خاصة ليك انت بس",
      videoDescription: "عملت الفيديو ده مخصوص يا بوب. مليان بكل الحب والذكريات والامتنان اللي حاطه في قلبي. شغل الفيديو و خليك عارف أن كل لحظة معمولة فالفيديو وأنت في بالي. ❤️",
      videoCaption: "💝 صنع بحب، لأفضل طاروقة في العالم",
      specialTitle: "أب لا مثيل له",
      specialMessage1: "بابا، كنت بطلي ودليلي وأكبر مشجع لي. حبك غير المشروط اداني الثقة عشان احقق أحلامي. الدروس اللي علمتهالي، والقيم التي غرستها فيا، والتضحيات التي لا تُحصى التي قدمتها لم تمر مرور الكرام.",
      specialMessage2: "شكراً لك لكونك المرساة في عواصف حياتي والريح تحت جناحيّ. أنت لست مجرد أب؛ أنت إلهامي ومثلي الأعلى. ده احتفال بيك انهارده ودائماً! 🎂✨",
      wishesTitle: "أتمنى ليك الفرح والصحة والسعادة! 🎈",
      wishesMessage: "اتمنى تكون السنادي الجديدة من حياتك مليانة باللحظات الجامدة وفيديوهات اكتر هتعملها لعائلتنا ان شاء الله، واللحظات الثمينة، وكل الحب اللي تستحقه.",
      downloadVideo: "حمل الفيديو من هنا"
    }
  };

  const currentLang = translations[language];

  // Photo placeholders - you can replace these URLs with actual photos
  const photos = [
    "https://res.cloudinary.com/djsgalfjn/image/upload/v1750946019/classicu_2025-06-26_032517.754_e2ycxz.jpg",
    "https://res.cloudinary.com/djsgalfjn/image/upload/v1750946334/IMG-20230622-WA0038_rw8n71.jpg",
    "https://res.cloudinary.com/djsgalfjn/image/upload/v1750946028/classicu_2025-06-26_032507.653_vmiiop.jpg",
    "https://res.cloudinary.com/djsgalfjn/image/upload/v1750946343/20230626_095535_ikxw8l.jpg",
  ];

  // Replace this with your video URL
  const videoUrl = "https://res.cloudinary.com/djsgalfjn/video/upload/v1750946270/0626_xjfn3d.mp4";

  useEffect(() => {
    setShowAnimation(true);
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [photos.length]);

  const isRTL = language === 'ar';

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    fontFamily: isRTL ? "'Noto Sans Arabic', 'Cairo', sans-serif" : "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    overflow: 'hidden',
    position: 'relative',
    direction: isRTL ? 'rtl' : 'ltr'
  };

  const floatingElementStyle = {
    position: 'absolute',
    opacity: 0.1,
    animation: 'float 6s ease-in-out infinite',
    color: 'white'
  };

  const languageToggleStyle = {
    position: 'fixed',
    top: '20px',
    right: isRTL ? 'auto' : '20px',
    left: isRTL ? '20px' : 'auto',
    zIndex: 1000,
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    padding: '8px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    fontSize: '14px',
    fontWeight: '500',
    color: '#2d3748'
  };

  const headerStyle = {
    textAlign: 'center',
    padding: '2rem 1rem',
    position: 'relative',
    zIndex: 10
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 8vw, 4rem)',
    fontWeight: '800',
    background: 'linear-gradient(45deg, #FFD700, #FFA500, #FF6B6B)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '1rem',
    transform: showAnimation ? 'translateY(0)' : 'translateY(-50px)',
    opacity: showAnimation ? 1 : 0,
    transition: 'all 1s ease-out'
  };

  const subtitleStyle = {
    fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
    color: 'white',
    marginBottom: '2rem',
    transform: showAnimation ? 'translateY(0)' : 'translateY(30px)',
    opacity: showAnimation ? 1 : 0,
    transition: 'all 1s ease-out 0.3s'
  };

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    position: 'relative',
    zIndex: 10
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    padding: 'clamp(1.5rem, 5vw, 3rem)',
    margin: '2rem 0',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transform: showAnimation ? 'translateY(0)' : 'translateY(50px)',
    opacity: showAnimation ? 1 : 0,
    transition: 'all 1s ease-out 0.6s'
  };

  const photoContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    margin: '2rem 0'
  };

  const photoCardStyle = {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    aspectRatio: '4/3',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease'
  };

  const photoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  };

  const messageStyle = {
    fontSize: 'clamp(1rem, 3vw, 1.3rem)',
    lineHeight: '1.8',
    color: '#2d3748',
    textAlign: 'center',
    margin: '2rem 0'
  };

  const specialMessageStyle = {
    background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
    color: 'white',
    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
    borderRadius: '20px',
    fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
    lineHeight: '1.7',
    textAlign: 'center',
    margin: '2rem 0',
    position: 'relative',
    overflow: 'hidden'
  };

  const videoContainerStyle = {
    margin: '3rem 0',
    textAlign: 'center'
  };

  const videoCardStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    padding: 'clamp(1.5rem, 5vw, 3rem)',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transform: showAnimation ? 'translateY(0)' : 'translateY(50px)',
    opacity: showAnimation ? 1 : 0,
    transition: 'all 1s ease-out 0.9s'
  };

  const videoStyle = {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '16px',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
    backgroundColor: '#000'
  };

  const iconStyle = {
    display: 'inline-block',
    margin: '0 0.5rem',
    verticalAlign: 'middle'
  };

  return (
    <div style={containerStyle}>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Noto+Sans+Arabic:wght@400;600;700;800&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .photo-hover:hover {
          transform: scale(1.05);
        }
        .photo-hover:hover img {
          transform: scale(1.1);
        }
        .language-toggle:hover {
          background: rgba(255, 255, 255, 1);
          transform: scale(1.05);
        }
      `}</style>
      
      {/* Language Toggle */}
      <div 
        className="language-toggle"
        style={languageToggleStyle}
        onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      >
        <Globe size={18} />
        <span>{language === 'en' ? 'العربية' : 'English'}</span>
      </div>
      
      {/* Floating decorative elements */}
      <div style={{...floatingElementStyle, top: '10%', left: isRTL ? 'auto' : '5%', right: isRTL ? '5%' : 'auto', animationDelay: '0s'}}>
        <Heart size={40} />
      </div>
      <div style={{...floatingElementStyle, top: '20%', right: isRTL ? 'auto' : '10%', left: isRTL ? '10%' : 'auto', animationDelay: '2s'}}>
        <Gift size={35} />
      </div>
      <div style={{...floatingElementStyle, bottom: '15%', left: isRTL ? 'auto' : '8%', right: isRTL ? '8%' : 'auto', animationDelay: '4s'}}>
        <Star size={30} />
      </div>
      <div style={{...floatingElementStyle, bottom: '25%', right: isRTL ? 'auto' : '5%', left: isRTL ? '5%' : 'auto', animationDelay: '1s'}}>
        <Camera size={45} />
      </div>

      <header style={headerStyle}>
        <h1 style={titleStyle}>
          {currentLang.title}
        </h1>
        <p style={subtitleStyle}>
          {currentLang.subtitle}
        </p>
      </header>

      <div style={contentStyle}>
        <div style={cardStyle}>
          <div style={messageStyle}>
            <p>
              <Heart style={iconStyle} size={24} color="#FF6B6B" />
              {currentLang.gratitudeMessage}
              <Heart style={iconStyle} size={24} color="#FF6B6B" />
            </p>
          </div>

          <div style={photoContainerStyle}>
            {photos.map((photo, index) => (
              <div 
                key={index} 
                className="photo-hover"
                style={{
                  ...photoCardStyle,
                  transform: currentPhotoIndex === index ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: currentPhotoIndex === index 
                    ? '0 15px 40px rgba(102, 126, 234, 0.4)' 
                    : '0 10px 30px rgba(0, 0, 0, 0.3)'
                }}
              >
                <img 
                  src={photo} 
                  alt={`Memory ${index + 1}`}
                  style={photoStyle}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  color: 'white',
                  padding: '1rem',
                  fontSize: '0.9rem',
                  textAlign: 'center'
                }}>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={videoContainerStyle}>
          <div style={videoCardStyle}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
              marginBottom: '1.5rem',
              color: '#2d3748',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <Camera size={32} color="#667eea" />
              {currentLang.videoTitle}
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 3vw, 1.2rem)',
              color: '#4a5568',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              {currentLang.videoDescription}
            </p>
            <video 
              controls 
              style={videoStyle}
              poster="https://res.cloudinary.com/djsgalfjn/image/upload/v1750946432/IMG-20230622-WA0037_deio8j.jpg"
            >
              <source src={videoUrl} type="video/mp4" />
              <source src={videoUrl.replace('.mp4', '.webm')} type="video/webm" />
              Your browser does not support the video tag. 
              <a href={videoUrl} style={{color: '#667eea'}}>{currentLang.downloadVideo}</a>
            </video>
            <p style={{
              fontSize: '0.9rem',
              color: '#718096',
              marginTop: '1rem',
              fontStyle: 'italic'
            }}>
              {currentLang.videoCaption}
            </p>
          </div>
        </div>

        <div style={specialMessageStyle}>
          <div style={{
            position: 'absolute',
            top: '10px',
            right: isRTL ? 'auto' : '10px',
            left: isRTL ? '10px' : 'auto',
            opacity: '0.3'
          }}>
            <Star size={60} />
          </div>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            {currentLang.specialTitle}
          </h2>
          <p>
            {currentLang.specialMessage1}
          </p>
          <p style={{marginTop: '1rem'}}>
            {currentLang.specialMessage2}
          </p>
        </div>

        <div style={{
          ...cardStyle,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #FFD700, #FFA500)',
          color: 'white'
        }}>
          <h3 style={{
            fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
            marginBottom: '1rem'
          }}>
            {currentLang.wishesTitle}
          </h3>
          <p style={{fontSize: 'clamp(1rem, 3vw, 1.2rem)'}}>
            {currentLang.wishesMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;