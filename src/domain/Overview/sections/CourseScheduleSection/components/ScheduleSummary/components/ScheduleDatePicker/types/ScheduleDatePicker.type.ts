import dayjs from "dayjs";

export type ScheduleDatePickerType = {
    // startDate: string;
    // endDate: string;
    picDate: dayjs.Dayjs | null;
    changeDate: (newDate: dayjs.Dayjs | null) => void;
    disabledYN: boolean;
};
