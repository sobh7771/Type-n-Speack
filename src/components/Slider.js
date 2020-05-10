import React from 'react'
import './Slider.css'
import Budge from './Budge'
import SpeechContext from '../contexts/SpeechContext'

const Slider = ({ name, label, budge }) => {
	return (
		<div className="slider">
			<SpeechContext.Consumer>
				{value => {
					console.log(value[name], name)
					return (
						<>
							<div className="text-wrapper">
								<label htmlFor={name} className="label">
									{label}
								</label>
								<Budge budge={value[name]} />
							</div>
							<input
								type="range"
								id={name}
								name={name}
								className="range-input"
								min="0.5"
								max="2"
								step="0.1"
								value={value[name]}
								onChange={value.handleInputChange}
							/>
						</>
					)
				}}
			</SpeechContext.Consumer>
		</div>
	)
}

export default Slider
