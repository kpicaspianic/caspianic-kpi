import { Radio } from 'antd';
import TextArea from 'antd/es/input/TextArea';

export default function AdditionalNotes({
  status,
  setReviewE,
  setNoteE,
  setNoteL,
  setNoteHR,
}) {
  return (
    <div className="additional-notes">
      <div className="additional-notes--detail">
        <label className="additional-notes--label" id="">
          Əməkdaşın dəyərləndirmə nəticələri ilə bağlı rəyi:
        </label>
        <Radio.Group
          className={
            !window.asManager
              ? 'additional-notes--input'
              : 'additional-notes--input not-allowed'
          }
          disabled={
            !window.asManager && status === 'send by leader' ? false : true
          }
          onChange={e => setReviewE(e.target.value)}
        >
          <Radio
            type="checkbox"
            name=""
            id=""
            className="additional-notes--input-radio"
            value="1"
          >
            Razıyam
          </Radio>
          <Radio
            type="checkbox"
            name=""
            id=""
            className="additional-notes--input-radio"
            value="0"
          >
            Razı deyiləm
          </Radio>
        </Radio.Group>
      </div>
      <div className="additional-notes--detail">
        <label className="additional-notes--label" id="">
          Əməkdaşın dəyərləndirmə ilə bağlı qeydi:
        </label>
        <TextArea
          size="large"
          autoSize={{ minRows: 3 }}
          name=""
          id=""
          readOnly={!window.asManager ? false : true}
          onChange={e => setNoteE(e.target.value)}
          className={
            !window.asManager
              ? 'additional-notes--input'
              : 'additional-notes--input not-allowed'
          }
        />
      </div>
      <div className="additional-notes--detail">
        <label className="additional-notes--label" id="">
          Dəyərləndirmə keçirən rəhbərin dəyərləndirmə ilə bağlı qeydi:
        </label>
        <TextArea
          size="large"
          autoSize={{ minRows: 3 }}
          name=""
          id="leader-review"
          readOnly={window.asManager ? false : true}
          onChange={e => setNoteL(e.target.value)}
          className={
            window.asManager
              ? 'additional-notes--input'
              : 'additional-notes--input not-allowed'
          }
        />
      </div>
      <div className="additional-notes--detail">
        <label className="additional-notes--label" id="">
          IR əməkdaşının dəyərləndirmə ilə bağlı qeydi:
        </label>
        <TextArea
          size="large"
          autoSize={{ minRows: 3 }}
          readOnly={window.currentRole === 'HR' ? false : true}
          onChange={e => setNoteHR(e.target.value)}
          name=""
          id="hr-review"
          className={
            window.currentRole === 'HR'
              ? 'additional-notes--input'
              : 'additional-notes--input not-allowed'
          }
        />
      </div>
    </div>
  );
}
