import { Colors } from '@/common/themes/Color';
import { PieChart } from 'react-minimal-pie-chart';
import { ChartType } from './types/chart.type';

export const HalfPieChart = ({ rate }: ChartType) => {
    return (
        <PieChart
            data={[{ value: 1, key: 1, color: Colors.BackBlue }]}
            reveal={rate}
            lineWidth={9}
            background={'#DBDFF1'}
            lengthAngle={240}
            startAngle={150}
            rounded
            animate
        />
    );
};
