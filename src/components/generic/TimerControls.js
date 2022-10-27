import React, { useState } from 'react';
import Panel from "./Panel";
import Button from "./Button";

const TimerControls = ({playDisabled, reset, fastForward, setTimerIsRunning}) => {
	const playIcon = String.fromCodePoint(0x25B6)
	const pauseIcon = String.fromCodePoint(0x23F8)
	const [toggleTime, setTimerToggle] = useState(true)
	const [playButtonText, setPlayButtonText] = useState(playIcon)
	const togglePlay = () => {
		setTimerToggle(!toggleTime)
		setTimerIsRunning(toggleTime)
		toggleIcon()
	}
	const toggleIcon = () => {
		if(toggleTime) 
			setPlayButtonText(pauseIcon)
		else 
			setPlayButtonText(playIcon)
	}
	const resetTimer = (toggle) => {
		setPlayButtonText(playIcon)
		setTimerToggle(toggle)
		setTimerIsRunning(false)
	}
	return (
		<Panel style={{ marginTop: '15px' }}>
			<Button text={playButtonText} style={{ backgroundColor: 'green' }} disabled={playDisabled} onClick={() => { togglePlay() }}/>
			<Button text="&#8634;" style={{ backgroundColor: 'blue', fontWeight: 'bold' }} onClick={() => { reset(); resetTimer(true); }}/>
			<Button text="&#9658;&#9658;" style={{ backgroundColor: 'red' }} onClick={() => { fastForward();  resetTimer(false); }}/>
		</Panel>
	)
}

export default TimerControls;