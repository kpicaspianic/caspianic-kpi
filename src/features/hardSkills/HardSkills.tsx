import './HardSkills.css';
import { useEffect, useState } from 'react';

export default function HardSkills({
  kpiHard,
  kpiWeight,
  kpiHardValue,
  setKpiHardValue,
  setHardKPINotesSL,
  setHardKPINotesEmployee,
  kpiNotesEmployee,
  kpiNotesSL,
}) {
  const [paragraphValue, setParagraphValue] = useState({
    item_1: '',
    item_2: '',
    item_3: '',
    item_4: '',
    item_5: '',
    item_6: '',
    item_7: '',
  });

  const setCorrectParagraph = (value: string, itemNum: number) => {
    switch (value) {
      case '1':
        setParagraphValue(prevValue => ({
          ...prevValue,
          [`item_${itemNum}`]:
            'Işçi ümumi fəaliyyət sahəsində və ya xüsusi tapşırıqların icrasında şirkətin standartlarını qarşılamaqda tamamilə uğursuzluğa uğramışdır. Tapşırıqları icra etməsi üçün işçinin intizamı, təşəbbüskarlığı və səriştəliliyinə dair şübhələr mövcuddur. Nümayiş olunan əmək fəaliyyəti tamamilə qəbulolunmazdır.',
        }));
        break;
      case '2':
        setParagraphValue(prevValue => ({
          ...prevValue,
          [`item_${itemNum}`]:
            'Ümumi iş təsvirinin və ya hədəflərin/tapşırıqları 50% qədər icra edir, ümumi iş təsvirinin standartlara uyğun olmasını təmin etməsi və ya tapşırıqların tamamlaması üçün işçinin təkmilləşməyə ehtiyacı vardır. Bu iş rəhbərdən normalda olduğundan daha çox zəhmət tələb edir.',
        }));
        break;
      case '3':
        setParagraphValue(prevValue => ({
          ...prevValue,
          [`item_${itemNum}`]:
            'Işçi ümumi fəaliyyətində çox əhəmiyyətli olmayan olsa da səhvlər buraxa bilir, gördüyü işə bəzən nəzarət edilməsinə ehtiyac var, təşəbbüskarlıq səviyyəsi istənilən qədər deyil, gözləntilərə hər zaman cavab vermir. Hədəflərinin 70% qədərini icra edir.',
        }));
        break;
      case '4':
        setParagraphValue(prevValue => ({
          ...prevValue,
          [`item_${itemNum}`]:
            'Qarşıda duran bütün vəzifə öhdəliklərinin və tapşırıqların/hədəflərin minimum 90%-dən 100%-nə qədərini tələb olunan zaman çərçivəsində səmərəlilik və təşəbbüskarlıqla icra edir. Rəhbəri ilə razılaşdırılmış bütün gözləntiləri tam surətdə yerinə yetirir.',
        }));
        break;
      case '5':
        setParagraphValue(prevValue => ({
          ...prevValue,
          [`item_${itemNum}`]:
            'Işin təsvirində və ya xüsusi tapşırığın yerinə yetirilməsində bütün istiqamətlərdə gözləntiləri davamlı surətdə üstələmişdir. Verilən tapşırıqların icrasına heç kimin köməyi olmadan və böyük təşəbbüskarlıqla nail olmuşdur. Vəzifə öhdəliklərinin və ya xüsusi hədəflər/tapşırıqların yerinə yetirilməsində təşkilata əhəmiyyətli töhfələr verir, komanda üzvlərinə dəstək göstərir. Rəhbəri ilə razılaşdırılmış bütün gözləntiləri tam surətdə yerinə yetirmiş və öz hədəflərini tam 100% yerinə yetirmiş, hətta üstələmişdir.',
        }));
        break;
      default:
        setParagraphValue(prevValue => ({
          ...prevValue,
          [`item_${itemNum}`]: '',
        }));
    }
  };

  const handleSoftParagraph = (value: string, hardSkillNum: number) => {
    setCorrectParagraph(value, hardSkillNum);
    setKpiHardValue(prevValue => ({
      ...prevValue,
      [`value_${hardSkillNum}`]: value,
    }));
  };

  const handleKPINotesSL = (value: string, num: number) => {
    setHardKPINotesSL(prevValue => ({ ...prevValue, [`item_${num}`]: value }));
  };

  const handleKPINotesEmployee = (value: string, num: number) => {
    setHardKPINotesEmployee(prevValue => ({
      ...prevValue,
      [`item_${num}`]: value,
    }));
  };

  useEffect(() => {
    for (const el in kpiHardValue) {
      const idx = el.split('_')[1];

      setCorrectParagraph(kpiHardValue[el], Number(idx));
    }
  }, [kpiHardValue]);

  return (
    <table className="mainTable-hard marginBottom">
      <thead>
        <tr className="table-row">
          <th className="header-hard header-hard--1">
            KPI-lar<span className="header-blue"></span>
          </th>
          <th className="header-hard header-hard--3">
            <p>3 ayın sonunda</p>
          </th>
          <th className="header-hard header-hard--3">
            <p>Yekun Qiymətləndirmə</p>
          </th>
          <th className="header-hard">
            <p>Qiymətləndirmə meyarlarının seçimi</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-row">
          <th className="header header-wb--hardSkills">
            <span className="count">1</span>
            <p>{kpiWeight.weight_1}</p>
            <p id="kpi-1">{kpiHard.kpi_1}</p>
          </th>
          <td className="data">
            <span className="data--span-1 position-right">
              Əməkdaşın qeydləri
            </span>
            <div className="line--horizontal"></div>
            <textarea
              name=""
              id="employee-hardSkill--1"
              defaultValue={kpiNotesEmployee.item_11}
              onChange={e => handleKPINotesEmployee(e.target.value, 11)}
              cols={30}
              rows={10}
              className="textareas textarea--1"
            ></textarea>
            <div className="line"></div>
            <span className="data--span-2 position-left">Rəhbərin rəyi</span>
            <div className="line--horizontal"></div>
            <textarea
              className="textareas textarea--2"
              name=""
              defaultValue={kpiNotesSL.item_11}
              onChange={e => handleKPINotesSL(e.target.value, 11)}
              id="leader-hardSkill--1"
              cols={30}
              rows={10}
            ></textarea>
          </td>
          <td className="data">
            <span className="data--span-1 position-right">
              Əməkdaşın qeydləri
            </span>
            <div className="line--horizontal"></div>
            <textarea
              name=""
              id="employee-hardSkill--13"
              defaultValue={kpiNotesEmployee.item_13}
              onChange={e => handleKPINotesEmployee(e.target.value, 13)}
              cols={10}
              rows={10}
              className="textareas textarea--1"
            ></textarea>
            <div className="line"></div>
            <span className="data--span-2 position-left">Rəhbərin rəyi</span>
            <div className="line--horizontal"></div>
            <textarea
              className="textareas textarea--2"
              name=""
              defaultValue={kpiNotesSL.item_13}
              onChange={e => handleKPINotesSL(e.target.value, 13)}
              id="leader-hardSkill--13"
              cols={10}
              rows={10}
            ></textarea>
          </td>
          <td className="data data--content">
            <select
              name="select--criteria-hard"
              id="select--id"
              disabled={true}
              value={kpiHardValue.value_1}
              onChange={e => handleSoftParagraph(e.target.value, 1)}
              className="select--criteria-hard select--criteria-hard-1 select--criteria-hard-11"
            >
              <option value="0">Choose an item</option>
              <option value="1">Qəbulolunmaz fəaliyyət nümayiş etdirir</option>
              <option value="2">Təkmilləşməyə ehtiyac duyulur</option>
              <option value="3">Qəbulolunan fəaliyyət nümayiş etdirir</option>
              <option value="4">Işin öhdəsindən lazımınca gəlir</option>
              <option value="5">Gözləntiləri davamlı olaraq üstələyir</option>
            </select>
            <p className="data--paragraph-1 data--paragraph-11 data--paragraph">
              {paragraphValue.item_1}
            </p>
          </td>
        </tr>
        <tr className="table-row">
          <th className="header header-wb--hardSkills">
            <span className="count">2</span>
            <p>{kpiWeight.weight_2}</p>
            <p id="kpi-2">{kpiHard.kpi_2}</p>
          </th>
          <td className="data">
            <textarea
              className="textareas textarea--no-span"
              defaultValue={kpiNotesEmployee.item_21}
              onChange={e => handleKPINotesEmployee(e.target.value, 21)}
              name=""
              id="employee-hardSkill--2"
              cols={30}
              rows={10}
            ></textarea>
            <div className="line"></div>
            <textarea
              className="textareas textarea--no-span-right"
              defaultValue={kpiNotesSL.item_21}
              onChange={e => handleKPINotesSL(e.target.value, 21)}
              name=""
              id="leader-hardSkill--2"
              cols={30}
              rows={10}
            ></textarea>
          </td>
          <td className="data">
            <textarea
              name=""
              id="employee-hardSkill--23"
              defaultValue={kpiNotesEmployee.item_23}
              onChange={e => handleKPINotesEmployee(e.target.value, 23)}
              cols={10}
              rows={10}
              className="textareas textarea--no-span"
            ></textarea>
            <div className="line"></div>
            <textarea
              className="textareas textarea--no-span-right"
              defaultValue={kpiNotesSL.item_23}
              onChange={e => handleKPINotesSL(e.target.value, 23)}
              name=""
              id="leader-hardSkill--23"
              cols={10}
              rows={10}
            ></textarea>
          </td>
          <td className="data data--content">
            <select
              name="select--criteria-hard"
              id="select--id"
              disabled={true}
              value={kpiHardValue.value_2}
              onChange={e => handleSoftParagraph(e.target.value, 2)}
              className="select--criteria-hard select--criteria-hard-2 select--criteria-hard-22"
            >
              <option value="0">Choose an item</option>
              <option value="1">Qəbulolunmaz fəaliyyət nümayiş etdirir</option>
              <option value="2">Təkmilləşməyə ehtiyac duyulur</option>
              <option value="3">Qəbulolunan fəaliyyət nümayiş etdirir</option>
              <option value="4">Işin öhdəsindən lazımınca gəlir</option>
              <option value="5">Gözləntiləri davamlı olaraq üstələyir</option>
            </select>
            <p className="data--paragraph-2 data--paragraph-22 data--paragraph">
              {paragraphValue.item_2}
            </p>
          </td>
        </tr>
        <tr className="table-row">
          <th className="header header-wb--hardSkills">
            <span className="count">3</span>
            <p>{kpiWeight.weight_3}</p>
            <p id="kpi-3">{kpiHard.kpi_3}</p>
          </th>
          <td className="data">
            <textarea
              className="textareas textarea--no-span"
              defaultValue={kpiNotesEmployee.item_31}
              onChange={e => handleKPINotesEmployee(e.target.value, 31)}
              name=""
              id="employee-hardSkill--3"
              cols={30}
              rows={10}
            ></textarea>
            <div className="line"></div>
            <textarea
              name=""
              id="leader-hardSkill--3"
              defaultValue={kpiNotesSL.item_31}
              onChange={e => handleKPINotesSL(e.target.value, 31)}
              cols={30}
              rows={10}
              className="textareas textarea--no-span-right"
            ></textarea>
          </td>
          <td className="data">
            <textarea
              name=""
              id="employee-hardSkill--33"
              defaultValue={kpiNotesEmployee.item_33}
              onChange={e => handleKPINotesEmployee(e.target.value, 33)}
              cols={10}
              rows={10}
              className="textareas textarea--no-span"
            ></textarea>
            <div className="line"></div>
            <textarea
              className="textareas textarea--no-span-right"
              defaultValue={kpiNotesSL.item_33}
              onChange={e => handleKPINotesSL(e.target.value, 33)}
              name=""
              id="leader-hardSkill--33"
              cols={10}
              rows={10}
            ></textarea>
          </td>
          <td className="data data--content">
            <select
              name="select--criteria-hard"
              id="select--id"
              disabled={true}
              value={kpiHardValue.value_3}
              onChange={e => handleSoftParagraph(e.target.value, 3)}
              className="select--criteria-hard select--criteria-hard-3 select--criteria-hard-33"
            >
              <option value="0">Choose an item</option>
              <option value="1">Qəbulolunmaz fəaliyyət nümayiş etdirir</option>
              <option value="2">Təkmilləşməyə ehtiyac duyulur</option>
              <option value="3">Qəbulolunan fəaliyyət nümayiş etdirir</option>
              <option value="4">Işin öhdəsindən lazımınca gəlir</option>
              <option value="5">Gözləntiləri davamlı olaraq üstələyir</option>
            </select>
            <p className="data--paragraph-3 data--paragraph-33 data--paragraph">
              {paragraphValue.item_3}
            </p>
          </td>
        </tr>
        <tr className="table-row">
          <th className="header header-wb--hardSkills">
            <span className="count">4</span>
            <p>{kpiWeight.weight_4}</p>
            <p id="kpi-4">{kpiHard.kpi_4}</p>
          </th>
          <td className="data">
            <textarea
              className="textareas textarea--no-span"
              defaultValue={kpiNotesEmployee.item_41}
              onChange={e => handleKPINotesEmployee(e.target.value, 41)}
              name=""
              id="employee-hardSkill--4"
              cols={30}
              rows={10}
            ></textarea>
            <div className="line"></div>
            <textarea
              className="textareas textarea--no-span-right"
              defaultValue={kpiNotesSL.item_41}
              onChange={e => handleKPINotesSL(e.target.value, 41)}
              name=""
              id="leader-hardSkill--4"
              cols={30}
              rows={10}
            ></textarea>
          </td>
          <td className="data">
            <textarea
              name=""
              id="employee-hardSkill--43"
              defaultValue={kpiNotesEmployee.item_43}
              onChange={e => handleKPINotesEmployee(e.target.value, 43)}
              cols={10}
              rows={10}
              className="textareas textarea--no-span"
            ></textarea>
            <div className="line"></div>
            <textarea
              className="textareas textarea--no-span-right"
              defaultValue={kpiNotesSL.item_43}
              onChange={e => handleKPINotesSL(e.target.value, 43)}
              name=""
              id="leader-hardSkill--43"
              cols={10}
              rows={10}
            ></textarea>
          </td>
          <td className="data data--content">
            <select
              name="select--criteria-hard"
              id="select--id"
              disabled={true}
              value={kpiHardValue.value_4}
              onChange={e => handleSoftParagraph(e.target.value, 4)}
              className="select--criteria-hard select--criteria-hard-4 select--criteria-hard-44"
            >
              <option value="0">Choose an item</option>
              <option value="1">Qəbulolunmaz fəaliyyət nümayiş etdirir</option>
              <option value="2">Təkmilləşməyə ehtiyac duyulur</option>
              <option value="3">Qəbulolunan fəaliyyət nümayiş etdirir</option>
              <option value="4">Işin öhdəsindən lazımınca gəlir</option>
              <option value="5">Gözləntiləri davamlı olaraq üstələyir</option>
            </select>
            <p className="data--paragraph-4 data--paragraph-44 data--paragraph">
              {paragraphValue.item_4}
            </p>
          </td>
        </tr>
        <tr className="table-row">
          <th className="header header-wb--hardSkills">
            <span className="count">5</span>
            <p>{kpiWeight.weight_5}</p>
            <p id="kpi-5">{kpiHard.kpi_5}</p>
          </th>
          <td className="data">
            <textarea
              className="textareas textarea--no-span"
              defaultValue={kpiNotesEmployee.item_51}
              onChange={e => handleKPINotesEmployee(e.target.value, 51)}
              name=""
              id="employee-hardSkill--5"
              cols={30}
              rows={10}
            ></textarea>
            <div className="line"></div>
            <textarea
              className="textareas textarea--no-span-right"
              defaultValue={kpiNotesSL.item_51}
              onChange={e => handleKPINotesSL(e.target.value, 51)}
              name=""
              id="leader-hardSkill--5"
              cols={30}
              rows={10}
            ></textarea>
          </td>
          <td className="data">
            <textarea
              name=""
              id="employee-hardSkill--53"
              defaultValue={kpiNotesEmployee.item_53}
              onChange={e => handleKPINotesEmployee(e.target.value, 53)}
              cols={10}
              rows={10}
              className="textareas textarea--no-span"
            ></textarea>
            <div className="line"></div>
            <textarea
              className="textareas textarea--no-span-right"
              defaultValue={kpiNotesSL.item_53}
              onChange={e => handleKPINotesSL(e.target.value, 53)}
              name=""
              id="leader-hardSkill--53"
              cols={10}
              rows={10}
            ></textarea>
          </td>
          <td className="data data--content">
            <select
              name="select--criteria-hard"
              id="select--id"
              disabled={true}
              value={kpiHardValue.value_5}
              onChange={e => handleSoftParagraph(e.target.value, 5)}
              className="select--criteria-hard select--criteria-hard-5 select--criteria-hard-55"
            >
              <option value="0">Choose an item</option>
              <option value="1">Qəbulolunmaz fəaliyyət nümayiş etdirir</option>
              <option value="2">Təkmilləşməyə ehtiyac duyulur</option>
              <option value="3">Qəbulolunan fəaliyyət nümayiş etdirir</option>
              <option value="4">Işin öhdəsindən lazımınca gəlir</option>
              <option value="5">Gözləntiləri davamlı olaraq üstələyir</option>
            </select>
            <p className="data--paragraph-5 data--paragraph-55 data--paragraph">
              {paragraphValue.item_5}
            </p>
          </td>
        </tr>
        <tr className="table-row">
          <th className="header header-wb--hardSkills">
            <span className="count">6</span>
            <p>{kpiWeight.weight_6}</p>
            <p id="kpi-5">{kpiHard.kpi_6}</p>
          </th>
          <td className="data">
            <textarea
              className="textareas textarea--no-span"
              defaultValue={kpiNotesEmployee.item_61}
              onChange={e => handleKPINotesEmployee(e.target.value, 61)}
              name=""
              id="employee-hardSkill--6"
              cols={30}
              rows={10}
            ></textarea>
            <div className="line"></div>
            <textarea
              className="textareas textarea--no-span-right"
              defaultValue={kpiNotesSL.item_61}
              onChange={e => handleKPINotesSL(e.target.value, 61)}
              name=""
              id="leader-hardSkill--6"
              cols={30}
              rows={10}
            ></textarea>
          </td>
          <td className="data">
            <textarea
              name=""
              id="employee-hardSkill-63"
              defaultValue={kpiNotesEmployee.item_63}
              onChange={e => handleKPINotesEmployee(e.target.value, 63)}
              cols={10}
              rows={10}
              className="textareas textarea--no-span"
            ></textarea>
            <div className="line"></div>
            <textarea
              className="textareas textarea--no-span-right"
              defaultValue={kpiNotesSL.item_63}
              onChange={e => handleKPINotesSL(e.target.value, 63)}
              name=""
              id="leader-hardSkill-63"
              cols={10}
              rows={10}
            ></textarea>
          </td>
          <td className="data data--content">
            <select
              name="select--criteria-hard"
              id="select--id"
              disabled={true}
              value={kpiHardValue.value_6}
              onChange={e => handleSoftParagraph(e.target.value, 6)}
              className="select--criteria-hard select--criteria-hard-5 select--criteria-hard-55"
            >
              <option value="0">Choose an item</option>
              <option value="1">Qəbulolunmaz fəaliyyət nümayiş etdirir</option>
              <option value="2">Təkmilləşməyə ehtiyac duyulur</option>
              <option value="3">Qəbulolunan fəaliyyət nümayiş etdirir</option>
              <option value="4">Işin öhdəsindən lazımınca gəlir</option>
              <option value="5">Gözləntiləri davamlı olaraq üstələyir</option>
            </select>
            <p className="data--paragraph-5 data--paragraph-55 data--paragraph">
              {paragraphValue.item_6}
            </p>
          </td>
        </tr>
        <tr className="table-row">
          <th className="header header-wb--hardSkills">
            <span className="count">7</span>
            <p>{kpiWeight.weight_7}</p>
            <p id="kpi-5">{kpiHard.kpi_7}</p>
          </th>
          <td className="data">
            <textarea
              className="textareas textarea--no-span"
              defaultValue={kpiNotesEmployee.item_71}
              onChange={e => handleKPINotesEmployee(e.target.value, 71)}
              name=""
              id="employee-hardSkill--7"
              cols={30}
              rows={10}
            ></textarea>
            <div className="line"></div>
            <textarea
              className="textareas textarea--no-span-right"
              defaultValue={kpiNotesSL.item_71}
              onChange={e => handleKPINotesSL(e.target.value, 71)}
              name=""
              id="leader-hardSkill--7"
              cols={30}
              rows={10}
            ></textarea>
          </td>
          <td className="data">
            <textarea
              name=""
              id="employee-hardSkill--73"
              defaultValue={kpiNotesEmployee.item_73}
              onChange={e => handleKPINotesEmployee(e.target.value, 73)}
              cols={10}
              rows={10}
              className="textareas textarea--no-span"
            ></textarea>
            <div className="line"></div>
            <textarea
              className="textareas textarea--no-span-right"
              defaultValue={kpiNotesSL.item_73}
              onChange={e => handleKPINotesSL(e.target.value, 73)}
              name=""
              id="leader-hardSkill--73"
              cols={10}
              rows={10}
            ></textarea>
          </td>
          <td className="data data--content">
            <select
              name="select--criteria-hard"
              id="select--id"
              disabled={true}
              value={kpiHardValue.value_7}
              onChange={e => handleSoftParagraph(e.target.value, 7)}
              className="select--criteria-hard select--criteria-hard-5 select--criteria-hard-55"
            >
              <option value="0">Choose an item</option>
              <option value="1">Qəbulolunmaz fəaliyyət nümayiş etdirir</option>
              <option value="2">Təkmilləşməyə ehtiyac duyulur</option>
              <option value="3">Qəbulolunan fəaliyyət nümayiş etdirir</option>
              <option value="4">Işin öhdəsindən lazımınca gəlir</option>
              <option value="5">Gözləntiləri davamlı olaraq üstələyir</option>
            </select>
            <p className="data--paragraph-5 data--paragraph-55 data--paragraph">
              {paragraphValue.item_7}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
