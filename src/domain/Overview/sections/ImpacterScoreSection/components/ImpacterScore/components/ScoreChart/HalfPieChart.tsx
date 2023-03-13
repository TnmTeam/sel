import { Colors } from '@/common/themes/Color';
import { PieChart } from 'react-minimal-pie-chart';
import { ChartType } from './types/chart.type';

export const HalfPieChart = ({ rate }: ChartType) => {
    if (rate == 0) rate = 87.5;

    return (
        <PieChart
            data={[{ value: 1, key: 1, color: 'url(#gradient)' }]}
            reveal={rate}
            lineWidth={9}
            background={'#DBDFF1'}
            lengthAngle={240}
            startAngle={150}
            rounded
            animate
        >
            <defs>
                <linearGradient id='gradient'>
                    <stop offset='0%' stopColor='#BDE0FF' />
                    <stop offset='100%' stopColor='#147AD6' />
                </linearGradient>
            </defs>
        </PieChart>
    );
};
