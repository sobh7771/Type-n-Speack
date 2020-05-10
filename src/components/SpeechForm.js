import React from 'react'
import './SpeechForm.css'
import TextInput from './TextInput'
import Slider from './Slider'
import VoiceSelect from './VoiceSelect'
import Button from './Button'

class SpeechForm extends React.Component {
	handleFormSubmit = e => {
		const { speechSynthesis } = this.props

		e.preventDefault()

		speechSynthesis.speak(this.props.handleFormSubmit())
	}

	render() {
		return (
			<form className="speech-form" onSubmit={this.handleFormSubmit}>
				<div className="field">
					<TextInput />
				</div>
				<div className="field">
					<Slider label="Rate" budge="1" name="rate" value="1" />
				</div>
				<div className="field">
					<Slider label="Pitch" budge="1" name="pitch" value="1" />
				</div>
				<div className="field">
					<VoiceSelect onVoiceSelect={this.props.onVoiceSelect} />
				</div>
				<div className="field">
					<Button />
				</div>
			</form>
		)
	}
}

export default SpeechForm
