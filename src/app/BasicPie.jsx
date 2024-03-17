import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie( props ) {

	return (
		<PieChart
			colors={['#274156', '#C03221']}
			series={[
				{
					data: [
						{ id: 0, value: props.choice0 / ( props.choice0 + props.choice1 ) * 100, label: `choice 1 (${Math.round( props.choice0 * 100 / ( props.choice0 + props.choice1 ) )}%)` },
						{ id: 1, value: props.choice1 / ( props.choice0 + props.choice1 ) * 100, label: `choice 2 (${Math.round( props.choice1 * 100 / ( props.choice0 + props.choice1 ) )}%)` },
					],
				},
			]}
			width={400}
			height={200}
		/>
	);
}