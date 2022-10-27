import React, { useState, useEffect } from 'react';
import Panel from "../generic/Panel";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds from "../generic/DisplayRounds";
import TimerControls from "../generic/TimerControls";

const Tabata = ({workTime, restTime, rounds}) => {
	workTime = parseInt(workTime)
	restTime = parseInt(restTime)
	rounds = parseInt(rounds)
	const workText = 'Work:'
	const restText = 'Rest:'
	const workGap = '16px'
	const restGap = '26px'
	const [currentTime, setCurrentTime] = useState(workTime)
	const [currentRound, setCurrentRound] = useState(1)
	const [timerIsRunning, setTimerIsRunning] = useState(false)
	const [isWorking, setIsWorking] = useState(true)
	const [currentText, setCurrentText] = useState(workText)
	const [gap, setGap] = useState(workGap)
	const [playDisabled, setPlayDisabled] = useState('')
	const reset = () => {
		setCurrentTime(workTime)
		setCurrentRound(1)
		setIsWorking(true)
		setCurrentText(workText)
		setGap(workGap)
		setPlayDisabled('')
	}
	const fastForward = () => {
		setCurrentTime(0)
	 	setCurrentRound(rounds)
	 	setIsWorking(false)
		setCurrentText(restText)
		setGap(restGap)
		setPlayDisabled('disabled')
	}
	useEffect(() => {
		const t = setInterval(() => {
			if(timerIsRunning) {
				if(currentTime !== 0) {
					setCurrentTime(currentTime - 1)
				}
				else if(isWorking) {
					setIsWorking(false)
					setCurrentTime(restTime)
					setCurrentText(restText)
					setGap(restGap)
				}
				else if(currentRound < rounds) {
					setCurrentRound(currentRound + 1)
					setCurrentTime(workTime)
					setIsWorking(true)
					setCurrentText(workText)
					setGap(workGap)
				}
			}
		}, 1000)
		return () => {
			clearInterval(t)
		}
	}, [timerIsRunning, workTime, restTime, rounds, isWorking, currentTime, currentRound])
	return (
			<Panel>
				<Panel>
					<DisplayTime currentTime={currentTime} size="7" text={currentText} gap={gap} />
				</Panel>
				<Panel>
					<DisplayRounds currentRound={currentRound} size="7" text="Round:" />
				</Panel>
				<TimerControls playDisabled={playDisabled} reset={reset} fastForward={fastForward} setTimerIsRunning={setTimerIsRunning} />
			</Panel>
		)
};

export default Tabata;
