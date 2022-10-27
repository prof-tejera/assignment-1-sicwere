import React, { useState, useEffect } from 'react';
import Panel from "../generic/Panel";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds from "../generic/DisplayRounds";
import TimerControls from "../generic/TimerControls";

const XY = ({startTime, rounds}) => {
	startTime = parseInt(startTime)
	rounds = parseInt(rounds)
	const [currentTime, setCurrentTime] = useState(startTime)
	const [currentRound, setCurrentRound] = useState(1)
	const [timerIsRunning, setTimerIsRunning] = useState(false)
	const [playDisabled, setPlayDisabled] = useState('')
	const reset = () => {
		setCurrentTime(startTime)
		setCurrentRound(1)
		setPlayDisabled('')
	}
	const fastForward = () => {
		setCurrentTime(0)
	 	setCurrentRound(rounds)
		setPlayDisabled('disabled')
	}
	useEffect(() => {
		const t = setInterval(() => {
			if(timerIsRunning) {
				if(currentTime !== 0)
					setCurrentTime(currentTime - 1)
				else if(currentRound < rounds) {
					setCurrentRound(currentRound + 1)
					setCurrentTime(startTime)
				}
			}
		}, 1000)
		return () => {
			clearInterval(t)
		}
	}, [timerIsRunning, startTime, rounds, currentTime, currentRound])
	return (
			<Panel>
				<Panel>
					<DisplayTime currentTime={currentTime} size="7" text="Time:" gap="20px"/>
				</Panel>
				<Panel>
					<DisplayRounds currentRound={currentRound} size="7" text="Round:" />
				</Panel>
				<TimerControls playDisabled={playDisabled} reset={reset} fastForward={fastForward} setTimerIsRunning={setTimerIsRunning} />
			</Panel>
		)
	};

export default XY;
