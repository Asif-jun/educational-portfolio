import './App.css'
import { Header } from './layout/header/Header'
import { Contact } from './layout/section/contacts/Contact'
import { Main } from './layout/section/main/Main'
import { Skills } from './layout/section/skills/Skills'
import { Testimony } from './layout/section/testimony/Testimony'
import { Works } from './layout/section/works/Works'

function App() {
	return (
		<div className='App'>
			<Header />
			<Main />
			<Skills />
			<Works />
			<Testimony />
			<Contact />
		</div>
	)
}

export default App
