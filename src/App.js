import "./App.css";

function App() {
  let list = [1, 2, 3];

  return (
    <div>
      <div>
        {list.map(
          (n) => (
            <h1>{n}</h1>
          ), // tag 사용시 n 에 중괄호 사용. 없으면 중괄호 사용 안 해도 됨.
        )}
      </div>
      ;
    </div>
  );
}

export default App;
