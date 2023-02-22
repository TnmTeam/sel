import { atom } from "recoil";

const courseMapState:any = atom({
    key: 'courseMap',
    default: {},
});

const courseArrayState = atom({
    key: 'courseList',
    default: [courseMapState],
});

const studentMapState:any = atom({
    key: 'studentMap',
    default: {},
});

const studentArrayState = atom({
    key: 'studentList',
    default: [studentMapState],
});

export { courseArrayState, courseMapState, studentArrayState, studentMapState };