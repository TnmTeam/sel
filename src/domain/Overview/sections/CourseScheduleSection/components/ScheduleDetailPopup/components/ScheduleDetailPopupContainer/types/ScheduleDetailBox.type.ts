export type ScheduleDetailListType = {
    title: string;
    time: string;
};

export type ScheduleDetailBoxType = {
    picDate: string;
    detailList: ScheduleDetailItemType[];
};

export type SchedulePopupType = {
    picDate: string;
    detailList: ScheduleDetailItemType[];
    closeHandle: () => void;
};

export type ScheduleDetailItemType = {
    title: string;
    date: string;
    time: string;
};