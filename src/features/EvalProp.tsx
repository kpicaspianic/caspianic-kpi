export default function EvalProp() {
  return (
    <div className="eval-prop">
      <div className="eval-prop--div">
        <p className="eval-prop--paragraph">Dəyərləndirmə tövsiyyələri:</p>
      </div>
      <div className="eval-prop--div eval-prop--div-grid">
        <div className="eval-prop--checkbox">
          <input className="eval-prop--input-1" type="checkbox" id="" name="" />
          <span className="eval-prop--span">Rotasiya</span>
          <textarea
            name=""
            id=""
            cols={60}
            rows={5}
            placeholder="Xahiş edirik fikrinizi əsaslandırın..."
            className="textareas-resize input-popup input-popup--1"
          ></textarea>
        </div>
        <div className="eval-prop--checkbox">
          <input className="eval-prop--input-2" type="checkbox" id="" name="" />
          <span className="eval-prop--span">Təlim keçilməsi</span>
          <textarea
            name=""
            id=""
            cols={60}
            rows={5}
            placeholder="Xahiş edirik fikrinizi əsaslandırın..."
            className="textareas-resize input-popup input-popup--2"
          ></textarea>
        </div>
        <div className="eval-prop--checkbox">
          <input className="eval-prop--input-3" type="checkbox" id="" name="" />
          <span className="eval-prop--span">Promotion</span>
          <textarea
            name=""
            id=""
            cols={60}
            rows={5}
            placeholder="Xahiş edirik fikrinizi əsaslandırın..."
            className="textareas-resize input-popup input-popup--3"
          ></textarea>
        </div>
        <div className="eval-prop--checkbox">
          <input className="eval-prop--input-4" type="checkbox" id="" name="" />
          <span className="eval-prop--span">
            Vəzifə təlimatının yenilənməsi
          </span>
          <textarea
            name=""
            id=""
            cols={60}
            rows={5}
            placeholder="Xahiş edirik fikrinizi əsaslandırın..."
            className="textareas-resize input-popup input-popup--4"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
