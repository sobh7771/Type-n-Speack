import React from 'react'
import './TextInput.css'
import SpeechContext from '../contexts/SpeechContext'

const TextInput = () => (
	<SpeechContext.Consumer>
		{({ speechText, handleInputChange }) => {
			console.log(handleInputChange)
			return (
				<textarea
					required
					className="text-input"
					placeholder="Type anything..."
					name="speechText"
					value={speechText}
					onChange={handleInputChange}
				/>
			)
		}}
	</SpeechContext.Consumer>
)
export default TextInput
