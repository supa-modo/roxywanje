import React, { useState } from 'react';
import { Heart, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

export default function KenyanValentine() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 'start',
      question: 'Hey babe, nina something important nikushow...',
      subtitle: 'Naomba unijibu kwa ukweli, sawa?',
      options: [
        { text: 'Sawa, nishow', next: 1 },
        { text: 'Okay, go ahead', next: 1 }
      ]
    },
    {
      id: 'question1',
      question: 'Do you believe in destiny na fate?',
      subtitle: 'Ama you think ni coincidence tu tumemeet?',
      options: [
        { text: 'Naamini kitu inaitwa fate', next: 2, value: 'yes' },
        { text: 'Maybe ni coincidence', next: 2, value: 'maybe' }
      ]
    },
    {
      id: 'question2',
      question: 'When you think about me, unafeel aje?',
      subtitle: 'Niambie tu, sitakuwa na stress',
      options: [
        { text: 'Nakufeel sana honestly', next: 3, value: 'good' },
        { text: 'You make me smile', next: 3, value: 'great' },
        { text: 'Uko tu sawa', next: 3, value: 'okay' }
      ]
    },
    {
      id: 'question3',
      question: 'Uko ready ku-take a chance on us?',
      subtitle: 'Nisee if we can make this thing work...',
      options: [
        { text: 'Yeah, niko ready', next: 4, value: 'yes' },
        { text: 'Let me think kidogo', next: 4, value: 'maybe' }
      ]
    },
    {
      id: 'final',
      question: 'So... Will you be my Valentine? 💕',
      subtitle: 'Nitakutreat poa sana, I promise',
      options: [
        { text: 'YES! Absolutely! 💚❤️', next: 5, value: 'yes' },
        { text: 'Sawa, nakubali ❤️', next: 5, value: 'yes' }
      ]
    }
  ];

  const handleAnswer = (option) => {
    if (option.value) {
      setAnswers({ ...answers, [questions[step].id]: option.value });
    }
    setStep(option.next);
  };

  const goBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-amber-50 via-red-50 to-green-50">
      {/* Kenyan-inspired decorative patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-32 bg-repeat-x" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 L25 25 L50 50 L75 25 L100 50' stroke='%23000' fill='none' stroke-width='2'/%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-repeat-x" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 L25 25 L50 50 L75 25 L100 50' stroke='%23000' fill='none' stroke-width='2'/%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating hearts with Kenyan flag colors */}
      {step === 0 && (
        <>
          <div className="absolute top-20 left-10 animate-float">
            <Heart className="w-8 h-8 text-red-600 fill-red-600 opacity-20" />
          </div>
          <div className="absolute top-40 right-20 animate-float-delayed">
            <Heart className="w-6 h-6 text-green-700 fill-green-700 opacity-20" />
          </div>
          <div className="absolute bottom-32 left-1/4 animate-float-slow">
            <Heart className="w-10 h-10 text-red-600 fill-red-600 opacity-20" />
          </div>
          <div className="absolute bottom-20 right-1/3 animate-float">
            <Heart className="w-7 h-7 text-green-700 fill-green-700 opacity-20" />
          </div>
        </>
      )}

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        {step < 5 ? (
          <div className="text-center max-w-2xl animate-fade-in">
            {/* Progress indicator */}
            {step > 0 && (
              <div className="mb-8">
                <div className="flex justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        i < step
                          ? 'w-12 bg-gradient-to-r from-red-600 to-green-600'
                          : 'w-8 bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Question {step} ya 5
                </p>
              </div>
            )}

            {/* Decorative top element */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500 via-black to-green-600 rounded-full opacity-20 blur-xl animate-pulse"></div>
                <div className="relative bg-white rounded-full p-6 shadow-2xl border-4 border-red-600">
                  <Heart className="w-16 h-16 text-red-600 fill-red-600 animate-heartbeat" />
                </div>
              </div>
            </div>

            {/* Question */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-700 to-red-800 animate-gradient-shift" 
                style={{ fontFamily: "'Playfair Display', serif" }}>
              {questions[step].question}
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed" 
               style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {questions[step].subtitle}
            </p>

            {/* Answer options */}
            <div className="space-y-4 mb-8">
              {questions[step].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="group w-full px-8 py-5 text-lg md:text-xl font-semibold text-gray-800 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border-3 border-red-600/20 hover:border-red-600 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span className="flex items-center justify-center gap-3">
                    {option.text}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
              ))}
            </div>

            {/* Back button */}
            {step > 0 && (
              <button
                onClick={goBack}
                className="text-gray-600 hover:text-gray-800 flex items-center gap-2 mx-auto transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <ArrowLeft className="w-4 h-4" />
                Rudi back
              </button>
            )}
          </div>
        ) : (
          <div className="text-center max-w-3xl animate-scale-in">
            {/* Success animation */}
            <div className="mb-8 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 bg-gradient-to-r from-red-500 via-green-500 to-red-500 rounded-full animate-ping opacity-20"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-white rounded-full p-8 shadow-2xl border-8 border-green-600 animate-bounce-once">
                  <Heart className="w-24 h-24 text-red-600 fill-red-600" />
                </div>
              </div>
            </div>

            {/* Success message */}
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-red-600 to-green-700 animate-gradient-shift"
                style={{ fontFamily: "'Playfair Display', serif" }}>
              Yaay! You said YES! 💚❤️
            </h2>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-red-600 mb-8">
              <p className="text-2xl md:text-3xl text-gray-800 mb-4 leading-relaxed"
                 style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Babe, you've made me the happiest person alive! 🥰
              </p>
              <p className="text-xl md:text-2xl text-red-600 font-semibold mb-6"
                 style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Nakupenda sana, we ndo my everything ❤️
              </p>
              
              <div className="pt-6 border-t-2 border-red-200">
                <p className="text-lg md:text-xl text-gray-700 mb-2"
                   style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  This Valentine's Day ni yetu, tutafanya memories amazing!
                </p>
                <p className="text-lg md:text-xl text-green-700 font-semibold"
                   style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Can't wait kuwa na wewe 💕
                </p>
              </div>
            </div>

            {/* Decorative Kenyan pattern */}
            <div className="flex justify-center gap-4 text-4xl animate-bounce-slow">
              <span>🌍</span>
              <span>💚</span>
              <span>❤️</span>
              <span>🦁</span>
            </div>

            <p className="mt-8 text-gray-600 italic text-lg"
               style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Love from the heart of Kenya 🇰🇪
            </p>

            <button
              onClick={() => setStep(0)}
              className="mt-8 px-6 py-3 text-sm text-gray-600 hover:text-gray-800 border-2 border-gray-300 hover:border-gray-400 rounded-full transition-all"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Anza upya (Start over)
            </button>
          </div>
        )}
      </div>

      {/* Decorative corner elements with Kenyan flag stripes */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-600 via-transparent to-transparent opacity-30 rounded-bl-full"></div>
      <div className="absolute top-8 right-0 w-32 h-1 bg-black opacity-20"></div>
      <div className="absolute top-16 right-0 w-32 h-32 bg-gradient-to-bl from-green-700 via-transparent to-transparent opacity-30 rounded-bl-full"></div>
      
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-700 via-transparent to-transparent opacity-30 rounded-tr-full"></div>
      <div className="absolute bottom-8 left-0 w-32 h-1 bg-black opacity-20"></div>
      <div className="absolute bottom-16 left-0 w-32 h-32 bg-gradient-to-tr from-red-600 via-transparent to-transparent opacity-30 rounded-tr-full"></div>

      {/* Celebration confetti effect on reveal */}
      {step === 5 && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10%',
                backgroundColor: ['#DC2626', '#15803D', '#000000'][Math.floor(Math.random() * 3)],
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@700&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-5deg); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          10%, 30% { transform: scale(1.1); }
          20%, 40% { transform: scale(1); }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes bounce-once {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-20px); }
          50% { transform: translateY(0); }
          75% { transform: translateY(-10px); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes confetti {
          0% { transform: translateY(0) rotateZ(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotateZ(720deg); opacity: 0; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }

        .animate-heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.8s ease-out forwards;
        }

        .animate-bounce-once {
          animation: bounce-once 1s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-confetti {
          animation: confetti linear forwards;
        }
      `}</style>
    </div>
  );
}