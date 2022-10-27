import Input from "./Input";

const DisplayTime = ({currentTime, size, text, gap, ...props}) => {
	currentTime ||= 0
	gap ||= '5px'
	size ||= '10'
	return (
		<label style={{ fontSize: '20px' }}>
			{text}
			<Input type="text" size={size} style={{ marginTop: '15px', marginLeft: gap }} readOnly value={currentTime} {...props} />
		</label>
	)
}

export default DisplayTime;