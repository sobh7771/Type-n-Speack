import React from 'react'
import './App.css'
import Image from './Image'
import SpeechForm from './SpeechForm'
import SpeechContext from '../contexts/SpeechContext'
import getUtterance from '../speechSynthesis'

class App extends React.Component {
	state = {
		speechText: '',
		pitch: 1,
		rate: 1,
		hasSupport: true,
		voices: [],
		selectedVoice: null
	}

	componentDidMount() {
		if (!('speechSynthesis' in window)) {
			this.setState({ hasSupport: false })
			return
		}

		// has support
		this.speechSynthesis = window.speechSynthesis

		this.speechSynthesis.onvoiceschanged = () => {
			const voices = this.speechSynthesis.getVoices()
			this.setState({ voices, selectedVoice: voices[0] })
		}
	}

	handleFormSubmit = () => {
		const { speechText, rate, pitch, selectedVoice } = this.state

		return getUtterance(speechText, pitch, rate, selectedVoice)
	}

	handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

	onVoiceSelect = selectedVoice => {
		const voices = [...this.state.voices]
		const voice = voices.find(voice => {
			return voice.voiceURI === selectedVoice
		})

		this.setState({ selectedVoice: voice })
	}

	render() {
		console.log(this.state.selectedVoice)
		const { handleInputChange, onVoiceSelect } = this
		const { speechText, pitch, rate, voices, hasSupport } = this.state

		if (!hasSupport) {
			return <div>Your browser doesn't support Web Speech API</div>
		}

		return (
			<div className="app">
				<Image />
				<SpeechContext.Provider
					value={{
						speechText,
						pitch,
						rate,
						voices,
						handleInputChange
					}}>
					<SpeechForm
						speechSynthesis={this.speechSynthesis}
						handleFormSubmit={this.handleFormSubmit}
						onVoiceSelect={onVoiceSelect}
					/>
				</SpeechContext.Provider>
			</div>
		)
	}
}

export default App
