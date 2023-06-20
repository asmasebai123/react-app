import React from "react";
import Logoright from "./logo";
import Text from "./txxt";
import Phn from "./phone";
import Found from "./founder";
import Curr from "./current_president";
import "./style.css";
import Titre from "./titre";
import Un from "./un";
import Deux from "./deux";
import Trois from "./trois";
function SecondPage() {
  return (
    <div>
      <Logoright />
      <Text />
      <Titre />
      <div className="slog">
        < Un />
        <Deux/>
        <Trois/>
      </div>
      <Found />
      <Curr />
    </div>
  );
}

export default SecondPage;
