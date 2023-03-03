import { loginInfo } from "@/common/atom/Atom";
import { useGetStudentList, useGetCourseList } from "@/data/api/studentCourse/useStudentCourseApiHooks";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export const useStudentSection = () => {
  const loginInfoMap:any = useRecoilValue(loginInfo);

  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail(loginInfoMap.email);
  },[loginInfoMap])
  
  //console.log(email);
  var { data, isLoading } = useGetStudentList(email);
  
  if (!data) {
    return {
      studentListState: {
            result: null,
            isLoading: isLoading,
        },
    };
  }
  
  let studentList = [];
  for(let i = 0 ; i < data.length ; i++){
    let student = {
      id : data[i].id,
      studentId : data[i].lw_id,
      studentName : data[i].name,
      studentEmail: data[i].name,
      parentEmail: data[i].parent_email,
      grade: data[i].grade,
      school: data[i].school,
      role: data[i].role,
      createdAt: data[i].created_at,
      lastLogin: data[i].last_login,
    };
    studentList.push(student);
  }

  
  return {
    studentListState: {
      result: {
        studentList: studentList,
      },
      isLoading: isLoading,
    },
  };
};


export const useCourseSection = () => {
  const loginInfoMap:any = useRecoilValue(loginInfo);

  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail(loginInfoMap.email);
  },[loginInfoMap])
  
  var { data, isLoading } = useGetStudentList(email);
  
  if (!data) {
    return {
      studentListState: {
            result: null,
            isLoading: isLoading,
        },
    };
  }
  
  let studentList = [];
  for(let i = 0 ; i < data.length ; i++){
    let student = {
      id : data[i].id,
      studentId : data[i].lw_id,
      studentName : data[i].name,
      studentEmail: data[i].name,
      parentEmail: data[i].parent_email,
      grade: data[i].grade,
      school: data[i].school,
      role: data[i].role,
      createdAt: data[i].created_at,
      lastLogin: data[i].last_login,
    };
    studentList.push(student);
  }

  
  return {
    studentListState: {
      result: {
        studentList: studentList,
      },
      isLoading: isLoading,
    },
  };
};