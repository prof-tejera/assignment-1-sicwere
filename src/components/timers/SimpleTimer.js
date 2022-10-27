import React, { useState, useEffect } from 'react';
import Panel from "../generic/Panel";
import DisplayTime from "../generic/DisplayTime";
import TimerControls from "../generic/TimerControls";

const SimpleTimer = ({startTime, endTime, interval}) => {
	const [currentTime, setCurrentTime] = useState(parseInt(startTime))
	const [timerIsRunning, setTimerIsRunning] = useState(false)
	const [playDisabled, setPlayDisabled] = useState('')
	startTime = parseInt(startTime)
	endTime = parseInt(endTime)
	interval = parseInt(interval)
	const reset = () => {
		setCurrentTime(startTime)
		setPlayDisabled('')
	}
	const fastForward = () => {
		setCurrentTime(endTime)
		setPlayDisabled('disabled')
	}
	useEffect(() => {
		const t = setInterval(() => {
			if(timerIsRunning && currentTime !== endTime)
				setCurrentTime(currentTime + interval)
			else if(currentTime === endTime) 
				setPlayDisabled('disabled')
			}, 1000)
		return () => {
			clearInterval(t)
		}
	}, [timerIsRunning, currentTime, endTime, interval])
	return (
		<Panel>
			<DisplayTime currentTime={currentTime} size="9" text="Time: " />
			<TimerControls playDisabled={playDisabled} reset={reset} fastForward={fastForward} setTimerIsRunning={setTimerIsRunning} />
		</Panel>
	)
};
export default SimpleTimer;