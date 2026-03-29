import { useEffect, useState, useRef } from 'react';
import { 
  Wifi, 
  RefreshCw, 
  Shield, 
  Sparkles, 
  Leaf, 
  Zap, 
  Phone,
  Menu,
  X,
  ChevronDown,
  ShoppingBag,
  Lightbulb,
  Hexagon,
  Circle,
  Wind,
  Waves,
  Moon,
  Star
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const heroRef = useRef<HTMLElement>(null);
  const keychainRef = useRef<HTMLElement>(null);
  const lampsRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    [heroRef, keychainRef, lampsRef, aboutRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const isVisible = (id: string) => visibleSections.has(id);

  // Lamp data with updated prices
  const lamps = [
    {
      name: 'Akari Lantern',
      price: 50,
      description: 'Zen-style vertical flow',
      tag: 'Japanese Style',
      icon: Wind,
      size: '22 × 16 × 16 cm',
      image: 'https://placehold.co/300x400/1a4a3c/FFD700?text=Akari+Lantern'
    },
    {
      name: 'Lumi Spiral',
      price: 50,
      description: 'Gentle swirl for reading',
      tag: 'Modern Design',
      icon: Sparkles,
      size: '27 × 15 × 15 cm',
      image: 'https://placehold.co/300x400/1a4a3c/FFA500?text=Lumi+Spiral'
    },
    {
      name: 'Hexa',
      price: 60,
      description: 'Intricate shadow patterns',
      tag: 'Geometric',
      icon: Hexagon,
      size: '24 × 10 × 10 cm',
      image: 'https://placehold.co/300x400/1a4a3c/FF8C00?text=Hexa'
    },
    {
      name: 'Aurora',
      price: 60,
      description: 'Wave-like flowing design',
      tag: 'Organic',
      icon: Waves,
      size: '24 × 10 × 10 cm',
      image: 'https://placehold.co/300x400/1a4a3c/FF6B6B?text=Aurora'
    },
    {
      name: 'Noir',
      price: 55,
      description: 'Compact playful design',
      tag: 'Cute Style',
      icon: Star,
      size: '24 × 18 × 18 cm',
      image: 'https://placehold.co/300x400/1a4a3c/9B59B6?text=Noir'
    },
    {
      name: 'Noko',
      price: 60,
      description: 'Resting moon charm',
      tag: 'Organic',
      icon: Circle,
      size: '28 × 24 × 24 cm',
      image: 'https://placehold.co/300x400/1a4a3c/FFB347?text=Noko'
    },
    {
      name: 'WaveGlow',
      price: 60,
      description: 'Flowing wave elegance',
      tag: 'Sculptural',
      icon: Waves,
      size: '38 × 17 × 17 cm',
      image: 'https://placehold.co/300x400/1a4a3c/4ECDC4?text=WaveGlow'
    },
    {
      name: 'Luno',
      price: 60,
      description: 'Full moon calming glow',
      tag: 'Celestial',
      icon: Moon,
      size: '38 × 21 × 21 cm',
      image: 'https://placehold.co/300x400/1a4a3c/F7DC6F?text=Luno'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D4A3C] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0D4A3C]/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="Green Hope Vision" 
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('keychain')}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                Vision Key
              </button>
              <button 
                onClick={() => scrollToSection('lamps')}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                Lamps
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                About
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('keychain')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Vision Key
                </button>
                <button 
                  onClick={() => scrollToSection('lamps')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Lamps
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  About
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="hero" 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Logo Animation */}
            <div 
              className={`mb-8 transition-all duration-700 ${
                isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <img 
                src="/images/logo.png" 
                alt="Green Hope Vision" 
                className="h-32 md:h-48 mx-auto animate-float"
              />
            </div>

            {/* Headline */}
            <h1 
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 transition-all duration-700 delay-100 ${
                isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-white">GREEN HOPE</span>{' '}
              <span className="text-gradient">VISION</span>
            </h1>

            {/* Subheadline */}
            <p 
              className={`text-lg sm:text-xl md:text-2xl text-[#7DD3C0] font-medium mb-6 transition-all duration-700 delay-200 ${
                isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Sustainable Innovation. Smart Connections.
            </p>

            {/* Body Text */}
            <p 
              className={`text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${
                isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              We bridge technical engineering with modern micro-manufacturing to bring you 
              smart networking tools and aesthetic home lighting. Designed in SolidWorks, 
              3D-printed locally, and built for the future.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-400 ${
                isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <button 
                onClick={() => scrollToSection('keychain')}
                className="btn-purple flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Wifi size={20} />
                Shop NFC Keychain
              </button>
              <button 
                onClick={() => scrollToSection('lamps')}
                className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Lightbulb size={20} />
                Shop 3D STAG Lamps
              </button>
            </div>

            {/* Scroll Indicator */}
            <div 
              className={`mt-16 transition-all duration-700 delay-500 ${
                isVisible('hero') ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <button 
                onClick={() => scrollToSection('keychain')}
                className="text-white/50 hover:text-white transition-colors animate-bounce"
              >
                <ChevronDown size={32} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Key (NFC Keychain) Section */}
      <section 
        id="keychain" 
        ref={keychainRef}
        className="py-20 md:py-32 relative overflow-hidden"
      >
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div 
              className={`transition-all duration-700 ${
                isVisible('keychain') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              {/* Section Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 rounded-full mb-6">
                <Wifi size={16} className="text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">Smart Tech</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient-purple">Tap. Connect. Share.</span>{' '}
                <span className="text-white">Instantly.</span>
              </h2>

              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                The ultimate networking flex. Instantly share your Instagram, WhatsApp, or 
                portfolio with a single tap to the back of any modern smartphone. Zero 
                third-party apps required.
              </p>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <Zap size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Instant Transfer</h4>
                    <p className="text-white/60 text-sm">Digital profile sharing in seconds</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <RefreshCw size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">100% Future-Proof</h4>
                    <p className="text-white/60 text-sm">Reprogrammable anytime via NFC Tools</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <Shield size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Durable Shell</h4>
                    <p className="text-white/60 text-sm">3D-printed PLA hard case</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <Sparkles size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">No Apps Needed</h4>
                    <p className="text-white/60 text-sm">Works with any modern smartphone</p>
                  </div>
                </div>
              </div>

              {/* Price & CTA - Centered */}
              <div className="flex flex-col items-center text-center gap-4">
                <div>
                  <span className="text-white/50 text-sm">Only</span>
                  <div className="text-4xl font-bold text-white">
                    RM <span className="text-gradient-purple">15</span>
                  </div>
                </div>
                <a 
                  href="https://forms.gle/CHUQaickDEYkNtAdA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-purple flex items-center gap-2 animate-pulse-glow"
                >
                  <ShoppingBag size={20} />
                  Order Your Vision Key
                </a>
              </div>
            </div>

            {/* Product Images */}
            <div 
              className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${
                isVisible('keychain') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-purple-900/20 p-4">
                  <img 
                    src="/images/nfc-keychain-1.jpg" 
                    alt="Vision Key on backpack" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-purple-900/20 p-4">
                  <img 
                    src="/images/nfc-keychain-3.jpg" 
                    alt="Vision Key with keys" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-purple-900/20 p-4">
                  <img 
                    src="/images/nfc-keychain-2.jpg" 
                    alt="Vision Key closeup" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-purple-900/20 p-4">
                  <img 
                    src="/images/nfc-keychain-4.jpg" 
                    alt="Vision Key with phone" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hope Lamp Collection Section */}
      <section 
        id="lamps" 
        ref={lampsRef}
        className="py-20 md:py-32 relative overflow-hidden"
      >
        {/* Background Accent */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-amber-900/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div 
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible('lamps') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/20 rounded-full mb-6">
              <Lightbulb size={16} className="text-amber-400" />
              <span className="text-amber-300 text-sm font-medium">Ambient Lighting</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Simple Forms.</span>{' '}
              <span className="text-white">Beautiful Glow.</span>
            </h2>

            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Transform your room from a cold space into a cozy retreat. Inspired by nature 
              and minimal Japanese design, our lamps are 3D-printed on-demand using biodegradable 
              plant-based PLA. Every lamp includes a standard E27 holder and a free warm LED bulb.
            </p>
          </div>

          {/* Product Cards Grid - 8 Lamps */}
          <div 
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-700 delay-200 ${
              isVisible('lamps') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {lamps.map((lamp) => {
              const IconComponent = lamp.icon;
              return (
                <a
                  key={lamp.name}
                  href="https://forms.gle/oKcXuR113JgpoE838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 card-hover cursor-pointer block"
                >
                  <div className="aspect-[4/5] bg-gradient-to-br from-amber-600/10 to-amber-900/10 flex items-center justify-center p-6">
                    <img 
                      src={lamp.image}
                      alt={lamp.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <IconComponent size={16} className="text-amber-400" />
                      <span className="text-amber-300 text-xs font-medium">{lamp.tag}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{lamp.name}</h3>
                    <p className="text-white/60 text-sm mb-2">{lamp.description}</p>
                    <p className="text-white/40 text-xs mb-4">{lamp.size}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gradient">RM {lamp.price}</span>
                      <span className="text-white/40 text-xs">E27 + LED</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div 
            className={`text-center transition-all duration-700 delay-400 ${
              isVisible('lamps') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a 
              href="https://forms.gle/oKcXuR113JgpoE838"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <ShoppingBag size={20} />
              Explore & Order Lamps
            </a>
          </div>
        </div>
      </section>

      {/* About Us / Manufacturing Section */}
      <section 
        id="about" 
        ref={aboutRef}
        className="py-20 md:py-32 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            className={`bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 md:p-12 lg:p-16 border border-white/10 transition-all duration-700 ${
              isVisible('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7DD3C0]/20 rounded-full mb-6">
                  <Leaf size={16} className="text-[#7DD3C0]" />
                  <span className="text-[#7DD3C0] text-sm font-medium">Our Philosophy</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">Built</span>{' '}
                  <span className="text-[#7DD3C0]">Differently.</span>
                </h2>

                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  We operate on a sustainable, hybrid micro-manufacturing model. By ditching 
                  overseas injection molding, we eliminate massive factory waste. Every product 
                  is engineered in-house, 3D-printed locally, and assembled with precision.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#7DD3C0] mb-1">100%</div>
                    <div className="text-white/60 text-sm">Local Production</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#7DD3C0] mb-1">0</div>
                    <div className="text-white/60 text-sm">Factory Waste</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#7DD3C0] mb-1">PLA</div>
                    <div className="text-white/60 text-sm">Plant-Based</div>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#7DD3C0]/20 to-[#0D4A3C] flex items-center justify-center">
                  <img 
                    src="https://placehold.co/500x500/0D4A3C/7DD3C0?text=3D+Printing+Process"
                    alt="3D Printing Manufacturing"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-4 bg-[#0D4A3C] border border-white/20 rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#7DD3C0]/20 rounded-full flex items-center justify-center">
                      <Leaf size={24} className="text-[#7DD3C0]" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Eco-Friendly</div>
                      <div className="text-white/60 text-sm">Biodegradable Materials</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="Green Hope Vision" 
                className="h-10 w-auto"
              />
              <span className="text-white/50 text-sm">
                © {new Date().getFullYear()} Green Hope Vision
              </span>
            </div>

            {/* Contact Info - Phone Only */}
            <div className="flex items-center gap-4">
              <a 
                href="tel:+60179981908"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm">+60 17-998 1908</span>
              </a>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-white/40 text-sm">
              Designed with care. 3D-printed with precision. Built for the future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
