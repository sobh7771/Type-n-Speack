export default (speechText, pitch, rate, voice) => {
	if (!('speechSynthesis' in window)) return

	const utterance = new SpeechSynthesisUtterance()
	utterance.volume = 1
	utterance.rate = rate
	utterance.pitch = pitch
	utterance.text = speechText
	utterance.voice = voice

	return utterance
}
