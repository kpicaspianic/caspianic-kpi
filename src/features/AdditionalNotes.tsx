export default function AdditionalNotes() {
  return (
    <div className="additional-notes">
      <div className="additional-notes--detail">
        <label className="additional-notes--label" id="">
          Əməkdaşın dəyərləndirmə nəticələri ilə bağlı rəyi:
        </label>
        <div className="additional-notes--checkbox">
          <input
            type="checkbox"
            name=""
            id=""
            className="additional-notes--input-radio"
            value="1"
            style={{ pointerEvents: 'none' }}
          />
          <span className="additional-notes--checkbox-span">Razıyam</span>
        </div>
        <div className="additional-notes--checkbox">
          <input
            type="checkbox"
            name=""
            id=""
            className="additional-notes--input-radio"
            value="0"
            style={{ pointerEvents: 'none' }}
          />
          <span className="additional-notes--checkbox-span">Razı deyiləm</span>
        </div>
      </div>
      <div className="additional-notes--detail">
        <label className="additional-notes--label" id="">
          Əməkdaşın dəyərləndirmə ilə bağlı qeydi:
        </label>
        <textarea
          name=""
          id=""
          className="additional-notes--input autofit employee-review"
          style={{ resize: 'none' }}
          readOnly
        ></textarea>
      </div>
      <div className="additional-notes--detail">
        <label className="additional-notes--label" id="">
          Dəyərləndirmə keçirən rəhbərin dəyərləndirmə ilə bağlı qeydi:
        </label>
        <textarea
          name=""
          id=""
          className="additional-notes--input autofit leader-review"
          style={{ resize: 'none' }}
        ></textarea>
      </div>
      <div className="additional-notes--detail">
        <label className="additional-notes--label" id="">
          IR əməkdaşının dəyərləndirmə ilə bağlı qeydi:
        </label>
        <textarea
          name=""
          id=""
          className="additional-notes--input autofit hr-review"
          style={{ resize: 'none' }}
          readOnly
        ></textarea>
      </div>
    </div>
  );
}
