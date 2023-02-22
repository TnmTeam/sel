export type ScheduleDatePickerType = {
    // startDate: string;
    // endDate: string;
    picDate: OnChangeDateType | null;
    changeDate: (changeVal: OnChangeDateType) => void;
    disabledYN: boolean;
};

export type OnChangeDateType = {
    startDate: Date;
    endDate: Date;
    key: string;
}

export type ScheduleSummaryType = {
    picDate: OnChangeDateType | null;
    changeDate: (changeVal: OnChangeDateType) => void;
    handleClickOpen: () => void;
}