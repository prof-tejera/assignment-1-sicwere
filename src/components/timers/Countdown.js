import SimpleTimer from './SimpleTimer';

const Countdown = ({startTime}) => {
	return (
		<SimpleTimer startTime={startTime} endTime="0" interval="-1" />
	)
};
export default Countdown;
