/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-bg-primary': '#ED2580',
        'color-bg-secondary': '#F26E57',
        'color-primary': '#950057',
        'color-secondary-gray': '#F5F6F6',
        'color-nav': '#FFFFFF',
        'color-checkbox': '#EA0063',
        'color-high-risk': '#ED2580',
        'color-medium-risk': '#F26E57',
        'color-low-risk': '#974A9A',
        'color-gray': '#D9D9D9',
        'color-goal-primary': '#F3C9C1',
        'color-goal-secondary': '#EFD4F3',
        'color-goal-text-primary': '#D42128',
        'color-goal-text-secondary': '#950057',
        'color-text-primary': '#FF3399',
        'color-text-secondary': '#7F8080',
        'color-beats': '#FFD7E8',
        'color-violet': '#974A9A',
        'color-overlay': '#333333',
        'color-add-goal-secondary': '#989899',
        'color-pink-textarea': '#FFE1EE',
        'color-violet-textarea': '#F9F4FB',
        'color-error': '#F87272',
        ma: {
          gray: {
            DEFAULT: '#989899',
          },
          pink: {
            DEFAULT: '#EB2781',
            300: '#EF2E7D',
            500: '#FF3399',
          },
          red: {
            DEFAULT: '#EE2B7E',
            300: '#F26C59',
          },
        },
      },
      fontFamily: {
        sans: ['Libre_Franklin', 'Proxima_Nova', 'Figtree', 'Butler', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto'],
      },
      backgroundImage: {
        default: 'linear-gradient(to bottom, rgba(237, 37, 128, 0.8), rgba(242, 110, 87, 0.8))',
        'introduction-page': "linear-gradient(to bottom, rgba(237, 37, 128, 0.8), rgba(242, 110, 87, 0.8)), url('/backgrounds/register.png')",
        'login-page': "linear-gradient(to bottom, rgba(237, 37, 128, 0.8), rgba(242, 110, 87, 0.8)), url('/backgrounds/register.png')",
        'quiz-checked':
          'linear-gradient(-45deg, transparent 65%, #ED2580 65.99%), linear-gradient(45deg, transparent 75%, #ED2580 75.99%), linear-gradient(-45deg, #ED2580 40%, transparent 40.99%), linear-gradient(45deg, #ED2580 30%, hsl(var(--chkfg)) 30.99%, hsl(var(--chkfg)) 40%, transparent 40.99%), linear-gradient(-45deg, hsl(var(--chkfg)) 50%, #ED2580 50.99%)',
        'heart-score-finished': "linear-gradient(to bottom, rgba(237, 37, 128, 0.8), rgba(242, 110, 87, 0.8)), url('/backgrounds/heart-score-finished.png')",
        welcome: 'linear-gradient(180deg, #D42128 0%, #F26E57 100%)',
        'onboard-page': "linear-gradient(to bottom, rgba(212, 33, 40, 0.75), rgba(242, 110, 87, 0.75)), url('/backgrounds/bg-dashboard.png')",
        'my-now': "linear-gradient(to bottom, rgba(212, 33, 40, 0.65), rgba(242, 110, 87, 0.65)), url('/backgrounds/bg-my-now.png')",
        'onboard-introduction': "linear-gradient(to bottom, rgba(212, 33, 40, 0.65), rgba(242, 110, 87, 0.65)), url('/backgrounds/bg-onboard-introduction.png')",
        'bottom-nav': 'linear-gradient(270deg, #EE2B7E 0%, #F26C59 94.93%);',
        'list-item': 'linear-gradient(180deg, #EB2781 0%, #F06E5B 100%)',
        'heart-icon': 'linear-gradient(132.96deg, #D42128 0%, #FF3399 105.88%)',
        'dashboard-my-now': "linear-gradient(to bottom, rgba(212, 33, 40, 0.65), rgba(242, 110, 87, 0.65)), url('/backgrounds/bg-dashboard-my-now.png')",
        'dashboard-my-next-session': "linear-gradient(to bottom, rgba(237, 37, 128, 0.45) 27.69%, rgba(242, 110, 87, 0.45) 127.69%), url('/backgrounds/bg-dashboard-my-next-session.png')",
        'data-heart': 'linear-gradient(0deg, #D42128, #D42128)',
        'go-deeper-finish': "linear-gradient(180deg, rgba(237, 37, 128, 0.65) 0%, rgba(242, 110, 87, 0.65)), url('/backgrounds/bg-go-deeper-finish.png')",
        'heartscore-quizze-0': "url('/images/heart-score/background/bg-0.png')",
        'heartscore-quizze-1': "url('/images/heart-score/background/bg-1.png')",
        'heartscore-quizze-2': "url('/images/heart-score/background/bg-2.png')",
        'heartscore-quizze-3': "url('/images/heart-score/background/bg-3.png')",
        'heartscore-quizze-4': "url('/images/heart-score/background/bg-4.png')",
        'heartscore-quizze-5': "url('/images/heart-score/background/bg-5.png')",
        'heartscore-quizze-6': "url('/images/heart-score/background/bg-6.png')",
        'heartscore-quizze-7': "url('/images/heart-score/background/bg-7.png')",
        'heartscore-quizze-8': "url('/images/heart-score/background/bg-8.png')",
        'heartscore-quizze-9': "url('/images/heart-score/background/bg-9.png')",
        'heartscore-quizze-10': "url('/images/heart-score/background/bg-10.png')",
      },
      height: {
        button: '53px',
        'quiz-button': '50px',
        input: '46px',
      },
      minWidth: {
        button: '147px',
        'quiz-button': '112px',
      },
      maxWidth: {
        'carousel-item': '153px',
      },
      width: {
        'carousel-item': '153px',
      },
      fontSize: {
        'ma-xs': ['12px', '16px'],
        'ma-sm': ['14px', '18px'],
        'ma-base': ['16px', '18px'],
        'ma-md': ['17px', '21px'],
        'ma-lg': ['20px', '24px'],
        'ma-xl': ['24px', '28px'],
        'ma-base-semibold': [
          '16px',
          {
            lineHeight: '18px',
            letterSpacing: '0.19px',
            fontWeight: '600',
          },
        ],
        'ma-h1': ['35px', '39px'],
      },
      letterSpacing: {
        ma: '0.19px',
        'ma-wide': '0.4px',
      },
    },
  },
  plugins: [require('daisyui')],
}
