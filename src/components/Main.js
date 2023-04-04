import React from "react";
import Hello from "./Hello";



/**
 * Membuat Component Main
 */
function Main() {
  return (
    <div>
      <main>
        <Hello name="sinka" />
        <Hello name="naomi" />
        <Hello name="melody" />
        <Hello name="shani" />
        <Hello name="indah" />
      </main>
    </div>
  );
}

// export Component Main
export default Main;