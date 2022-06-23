import "./App.css";
import { firestore } from "./firebase";
import { useEffect, useState } from "react";
import TranslateValue from "./TranslateValue";
import TranslateButton from "./TranslateButton";
import Result from "./Result";

function App() {
  const [text, setText] = useState("");
  const [resultState, setResultState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ko, setKo] = useState('');
  const [fr, setFr] = useState('');
  const [en, setEn] = useState('');
  const [ar, setAr] = useState('');

  const comments = firestore.collection("comments");
  useEffect(() => {
    firestore.collection("comments").onSnapshot((snapshot) => {
      const foreignLanguage = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLoading(true)
      setKo(foreignLanguage[0].result.ko);
      setFr(foreignLanguage[0].result.fr);
      setEn(foreignLanguage[0].result.en);
      setAr(foreignLanguage[0].result.ar);
      setLoading(false)
    });
  }, []);

  const handleChange = (e) => {
    return setText(e.target.value);
  };

  const postValue = () => {
    setResultState(true);
    comments.doc("foreignLanguage").set({ text: text });
  };

  return (
    <div className="App">
      <div style={{ marginTop: "30px" }}>
        <TranslateValue
          change={handleChange}
          text={text}
        />
      </div>
      <div style={{ display: "inline-flex", marginTop: "20px" }}>
        <TranslateButton click={postValue} />
      </div>
      <Result loading={loading} state={resultState} ko={ko} fr={fr} en={en} ar={ar}/>
    </div>
  );
}

export default App;
