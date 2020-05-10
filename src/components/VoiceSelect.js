import React from 'react'
import './VoiceSelect.css'
import SpeechContext from '../contexts/SpeechContext'

class VoiceSelect extends React.Component {
	state = {
		selectedVoice: ''
	}

	handleVoiceSelect = e => {
		this.setState({ selectedVoice: e.target.value })
		console.log('From handleVoiceSelect')
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.selectedVoice !== this.state.selectedVoice) {
			this.props.onVoiceSelect(this.state.selectedVoice)
			console.log('From componentDidUpdate')
		}
	}

	render() {
		return (
			<select
				className="voice-select"
				onChange={this.handleVoiceSelect}
				value={this.state.selectedVoice}>
				<SpeechContext.Consumer>
					{({ voices }) => {
						return voices.map(voice => {
							return (
								<option key={voice.voiceURI} value={voice.voiceURI}>
									{voice.name} ({voice.lang})
								</option>
							)
						})
					}}
				</SpeechContext.Consumer>
			</select>
		)
	}
}

export default VoiceSelect
