import SimpleTimer from './SimpleTimer';

const Stopwatch = ({endTime}) => {
	return (
		<SimpleTimer startTime="0" endTime={endTime} interval="1" />
	)
};

export default Stopwatch;
