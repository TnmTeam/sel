import axios from 'axios';

// 전역 설정을 공유하는 instance 생성
const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  timeout: 1000 * 60,
});

// instasnce에 Authorization token 추가 위한 interceptor 추가
axiosClient.interceptors.request.use(
  function(config) {
    //console.log('axios request interceptor', config);
    const token = localStorage.getItem('accessToken');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
  },
  // 필요 시 request error handling 추가
  function(err) {
    console.log(err);
    return err;
  }
);

// instasnce에 Authorization fail 처리 위한 interceptor 추가
// 당장은 쓸 일 없을 듯
// 참고 URL: https://gusrb3164.github.io/web/2022/08/07/refresh-with-axios-for-client/
// axiosClient.interceptors.response.use();

export { axiosClient };
