import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App images={[
      'https://media.istockphoto.com/id/1632091356/photo/happy-thanksgiving-holiday-greeting-card-handwriting-calligraphy-text-design-with-fall.webp?b=1&s=170667a&w=0&k=20&c=RqXoyP0WAcGE5zAuOmMniOgAeBaV7tlXtOvEhN6PJxc=',
      'https://media.istockphoto.com/id/1418475387/photo/robotic-hand-pressing-a-keyboard-on-a-laptop-3d-rendering.webp?b=1&s=170667a&w=0&k=20&c=SH8IT_AwvssL7wNgwQpl5PGo_IXt7aKd_TeV9UGFBic=',
      'https://media.istockphoto.com/id/1277767891/photo/various-fresh-ripe-pumpkins-as-background.webp?b=1&s=170667a&w=0&k=20&c=R1wp9cc9PkUmOiE9PdXlDe2FUBQ3YpxJMjV8yxzLXRY=',
    ]}/>
  </React.StrictMode>,
)
