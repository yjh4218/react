import { useEffect, useState } from "react"; // react 라이브러리의 useEffect 사용
import "./App.css";

function App() {
  const [data, setData] = useState(0);

  const download = () => {
    // 다운로드 받고(통신)
    let downloadData = 5; // 가정
    setData(downloadData);
  };

  // 실행시점
  // 1. App()함수가 최초 실행될 때 실행함. 최초 마운트 될 때(그림이 그려질 때)
  // 2. 상태변수가 변경될 때
  useEffect(() => {
    console.log("useEffect 실행됨");
    download();
  }, []);

  return (
    <div>
      <h1>데이터 : {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;
