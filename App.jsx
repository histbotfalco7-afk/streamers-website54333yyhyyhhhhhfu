import { useState } from 'react'
import silorProfile from './assets/silor_profile.png'
import discordLogo from './assets/discord-logo.png'
import twitterLogo from './assets/twitter-logo.png'
import instagramLogo from './assets/instagram-logo.png'
import youtubeLogo from './assets/youtube-logo.png'
import tiktokLogo from './assets/tiktok-logo.png'
import kickLogo from './assets/kick-logo.png'
import paypalLogo from './assets/paypal-logo.png'
import { Twitter, Instagram, Youtube, Send, DollarSign, Video } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const socialLinks = [
    {
      name: 'Discord',
      url: 'https://discord.gg/9ll',
      icon: Send,
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-500/10',
      hoverColor: 'hover:bg-indigo-500/20',
      logo: discordLogo
    },
    {
      name: 'Twitter',
      url: 'https://x.com/S1LOR?s=09',
      icon: Twitter,
      color: 'from-sky-400 to-blue-600',
      bgColor: 'bg-sky-500/10',
      hoverColor: 'hover:bg-sky-500/20',
      logo: twitterLogo
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/v7wq?igsh=NGNjcjRwOGNuaHRp',
      icon: Instagram,
      color: 'from-pink-500 via-purple-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-pink-500/10 to-orange-500/10',
      hoverColor: 'hover:from-pink-500/20 hover:to-orange-500/20',
      logo: instagramLogo
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/SiloRx',
      icon: Youtube,
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-red-500/10',
      hoverColor: 'hover:bg-red-500/20',
      logo: youtubeLogo
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@silorgg',
      icon: Video,
      color: 'from-cyan-400 to-pink-500',
      bgColor: 'bg-gradient-to-br from-cyan-500/10 to-pink-500/10',
      hoverColor: 'hover:from-cyan-500/20 hover:to-pink-500/20',
      logo: tiktokLogo
    },
    {
      name: 'Kick',
      url: 'https://kick.com/silor',
      icon: Video,
      color: 'from-green-400 to-emerald-600',
      bgColor: 'bg-green-500/10',
      hoverColor: 'hover:bg-green-500/20',
      logo: kickLogo
    },
    {
      name: 'Support (PayPal)',
      url: 'https://streamlabs.com/silor2/tip',
      icon: DollarSign,
      color: 'from-yellow-400 to-amber-600',
      bgColor: 'bg-yellow-500/10',
      hoverColor: 'hover:bg-yellow-500/20',
      logo: paypalLogo
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Profile Image */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative inline-block mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <img 
              src={silorProfile} 
              alt="Silor Profile" 
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-purple-500/50 shadow-2xl shadow-purple-500/50 hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full shadow-lg">
              <span className="text-sm md:text-base font-bold">🔴 LIVE</span>
            </div>
          </motion.div>

          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              SILOR
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">أهلاً وسهلاً بك في عالمي! 🎮</p>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              مرحباً بكم في صفحتي الرسمية! أنا Silor، ستريمر شغوف بالألعاب والمحتوى الترفيهي. 
              تابعوني على جميع منصات التواصل الاجتماعي للبقاء على اطلاع بآخر البثوث والمحتوى الحصري! 🚀
            </p>
          </motion.div>
        </motion.div>

        {/* Social Links Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            تواصل معي 🌟
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative group ${link.bgColor} ${link.hoverColor} backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-white/30`}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <div className="relative flex items-center space-x-4 rtl:space-x-reverse">
                  {/* Logo/Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-xl bg-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300 p-2`}>
                    <img src={link.logo} alt={link.name} className="w-full h-full object-contain" />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {link.name}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      انقر للزيارة
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className={`flex-shrink-0 transform transition-transform duration-300 ${hoveredCard === index ? 'translate-x-2 rtl:-translate-x-2' : ''}`}>
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}></div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-20 text-gray-500"
        >
          <p className="text-sm">© 2025 Silor. جميع الحقوق محفوظة.</p>
          <p className="text-xs mt-2">صُنع بـ ❤️ للمجتمع</p>
        </motion.div>
      </div>
    </div>
  )
}

export default App
