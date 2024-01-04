import './App.css'
import Footer from './components/footer/footer.component'
import Header from './components/header/header.component'
import Layout from './components/layout/layout.component'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
function App() {
  return (
    <I18nextProvider i18n={i18n}>
    <Header/>
     <Layout/>
     <Footer/>
     </I18nextProvider>
  )
}

export default App
