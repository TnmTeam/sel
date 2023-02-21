import dayjs from "dayjs";

export type ScheduleDetailListType = {
    title: string;
    time: string;
};

export type ScheduleDetailBoxType = {
    picDate: dayjs.Dayjs | null;
};

export type SchedulePopupType = {
    picDate: dayjs.Dayjs | null;
    changeDate: (newDate: dayjs.Dayjs | null) => void;
    closeHandle: () => void;
};

export type ClosePopupBtnType = {
    closeHandle: () => void;
}