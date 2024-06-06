import './HardSkills.css';
import { useEffect, useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import { Select } from 'antd';

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

  const options = [
    { value: '0', label: 'Choose an item' },
    { value: '1', label: 'Qəbulolunmaz fəaliyyət nümayiş etdirir' },
    { value: '2', label: 'Təkmilləşməyə ehtiyac duyulur' },
    { value: '3', label: 'Qəbulolunan fəaliyyət nümayiş etdirir' },
    { value: '4', label: 'Işin öhdəsindən lazımınca gəlir' },
    { value: '5', label: 'Gözləntiləri davamlı olaraq üstələyir' },
  ];

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
            {/* className="data--span-1 position-right" */}
            <div className="data-container">
              <div className="data-div">
                <span>Əməkdaşın qeydləri</span>
                <div className="line--horizontal"></div>
                <TextArea
                  name=""
                  id="employee-hardSkill--1"
                  defaultValue={kpiNotesEmployee.item_11}
                  onChange={e => handleKPINotesEmployee(e.target.value, 11)}
                  autoSize={{ minRows: 7 }}
                  className="textarea"
                />
              </div>
              <div className="line"></div>
              <div className="data-div">
                {/* className="data--span-2 position-left" */}
                <span>Rəhbərin rəyi</span>
                {/* <div className="line--horizontal"></div> */}
                <TextArea
                  className="textarea"
                  name=""
                  defaultValue={kpiNotesSL.item_11}
                  onChange={e => handleKPINotesSL(e.target.value, 11)}
                  autoSize={{ minRows: 7 }}
                  id="leader-hardSkill--1"
                ></TextArea>
              </div>
            </div>
          </td>
          <td className="data">
            <div className="data-container">
              <div className="data-div">
                <span>Əməkdaşın qeydləri</span>
                <div className="line--horizontal"></div>
                <TextArea
                  name=""
                  id="employee-hardSkill--13"
                  defaultValue={kpiNotesEmployee.item_13}
                  onChange={e => handleKPINotesEmployee(e.target.value, 13)}
                  autoSize={{ minRows: 7 }}
                  className="textarea"
                />
              </div>
              <div className="line"></div>
              <div className="data-div">
                <span>Rəhbərin rəyi</span>
                <div className="line--horizontal"></div>
                <TextArea
                  name=""
                  defaultValue={kpiNotesSL.item_13}
                  onChange={e => handleKPINotesSL(e.target.value, 13)}
                  id="leader-hardSkill--13"
                  autoSize={{ minRows: 7 }}
                  className="textarea"
                />
              </div>
            </div>
          </td>
          <td className="data data--content">
            <Select
              id="select--id"
              options={options}
              // disabled={true}
              value={kpiHardValue.value_1}
              onChange={value => handleSoftParagraph(value, 1)}
              className="select--criteria-hard select-antd"
              // className="select--criteria-hard select--criteria-hard-1 select--criteria-hard-11"
            />
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
            <div className="data-container">
              <div className="data-div">
                <TextArea
                  className="textarea"
                  defaultValue={kpiNotesEmployee.item_21}
                  onChange={e => handleKPINotesEmployee(e.target.value, 21)}
                  name=""
                  id="employee-hardSkill--2"
                  autoSize={{ minRows: 8 }}
                />
              </div>
              <div className="line"></div>
              <div className="data-div">
                <TextArea
                  className="textarea"
                  defaultValue={kpiNotesSL.item_21}
                  onChange={e => handleKPINotesSL(e.target.value, 21)}
                  name=""
                  id="leader-hardSkill--2"
                  autoSize={{ minRows: 8 }}
                />
              </div>
            </div>
          </td>
          <td className="data">
            <div className="data-container">
              <div className="data-div">
                <TextArea
                  name=""
                  id="employee-hardSkill--23"
                  defaultValue={kpiNotesEmployee.item_23}
                  onChange={e => handleKPINotesEmployee(e.target.value, 23)}
                  cols={10}
                  rows={10}
                  className="textarea"
                  autoSize={{ minRows: 8 }}
                />
              </div>
              <div className="line"></div>
              <div className="data-div">
                <TextArea
                  defaultValue={kpiNotesSL.item_23}
                  onChange={e => handleKPINotesSL(e.target.value, 23)}
                  name=""
                  id="leader-hardSkill--23"
                  className="textarea"
                  autoSize={{ minRows: 8 }}
                />
              </div>
            </div>
          </td>
          <td className="data data--content">
            <Select
              options={options}
              id="select--id"
              // disabled={window.currentRole === 'EMPLOYEE' && true}
              value={kpiHardValue.value_2}
              onChange={value => handleSoftParagraph(value, 2)}
              className="select--criteria-hard select-antd"
            />
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
            <div className="data-container">
              <div className="data-div">
                <TextArea
                  defaultValue={kpiNotesEmployee.item_31}
                  onChange={e => handleKPINotesEmployee(e.target.value, 31)}
                  id="employee-hardSkill--3"
                  className="textarea"
                  autoSize={{ minRows: 8 }}
                />
              </div>
              <div className="line"></div>
              <div className="data-div">
                <TextArea
                  id="leader-hardSkill--3"
                  defaultValue={kpiNotesSL.item_31}
                  onChange={e => handleKPINotesSL(e.target.value, 31)}
                  className="textarea"
                  autoSize={{ minRows: 8 }}
                />
              </div>
            </div>
          </td>
          <td className="data">
            <div className="data-container">
              <div className="data-div">
                <TextArea
                  id="employee-hardSkill--33"
                  defaultValue={kpiNotesEmployee.item_33}
                  onChange={e => handleKPINotesEmployee(e.target.value, 33)}
                  className="textarea"
                  autoSize={{ minRows: 8 }}
                />
              </div>
              <div className="line"></div>
              <div className="data-div">
                <TextArea
                  defaultValue={kpiNotesSL.item_33}
                  onChange={e => handleKPINotesSL(e.target.value, 33)}
                  id="leader-hardSkill--33"
                  className="textarea"
                  autoSize={{ minRows: 8 }}
                />
              </div>
            </div>
          </td>
          <td className="data data--content">
            <Select
              options={options}
              id="select--id"
              // disabled={true}
              value={kpiHardValue.value_3}
              onChange={value => handleSoftParagraph(value, 3)}
              className="select--criteria-hard select-antd"
            />
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
            <div className="data-container">
              <div className="data-div">
                <TextArea
                  defaultValue={kpiNotesEmployee.item_41}
                  onChange={e => handleKPINotesEmployee(e.target.value, 41)}
                  id="employee-hardSkill--4"
                  className="textarea"
                  autoSize={{ minRows: 8 }}
                />
              </div>
              <div className="line"></div>
              <div className="data-div">
                <TextArea
                  defaultValue={kpiNotesSL.item_41}
                  onChange={e => handleKPINotesSL(e.target.value, 41)}
                  id="leader-hardSkill--4"
                  className="textarea"
                  autoSize={{ minRows: 8 }}
                />
              </div>
            </div>
          </td>
          <td className="data">
            <div className="data-container">
              <div className="data-div">
                <TextArea
                  id="employee-hardSkill--43"
                  defaultValue={kpiNotesEmployee.item_43}
                  onChange={e => handleKPINotesEmployee(e.target.value, 43)}
                  className="textarea"
                  autoSize={{ minRows: 8 }}
                />
              </div>
              <div className="line"></div>
              <div className="data-div">
                <TextArea
                  defaultValue={kpiNotesSL.item_43}
                  onChange={e => handleKPINotesSL(e.target.value, 43)}
                  id="leader-hardSkill--43"
                  className="textarea"
                  autoSize={{ minRows: 8 }}
                />
              </div>
            </div>
          </td>
          <td className="data data--content">
            <Select
              options={options}
              id="select--id"
              // disabled={true}
              value={kpiHardValue.value_4}
              onChange={value => handleSoftParagraph(value, 4)}
              className="select--criteria-hard select-antd"
            />
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
            <div className="data-container">
              <div className="data-div">
                <TextArea
                  defaultValue={kpiNotesEmployee.item_51}
                  onChange={e => handleKPINotesEmployee(e.target.value, 51)}
                  id="employee-hardSkill--5"
                  className="textarea"
                  autoSize={{ minRows: 8 }}
                />
              </div>
              <div className="line"></div>
              <div className="data-div">
                <TextArea
                  defaultValue={kpiNotesSL.item_51}
                  onChange={e => handleKPINotesSL(e.target.value, 51)}
                  id="leader-hardSkill--5"
                  className="textarea"
                  autoSize={{ minRows: 8 }}
                />
              </div>
            </div>
          </td>
          <td className="data">
            <div className="data-container">
              <div className="data-div">
                <TextArea
                  id="employee-hardSkill--53"
                  defaultValue={kpiNotesEmployee.item_53}
                  onChange={e => handleKPINotesEmployee(e.target.value, 53)}
                  className="textarea"
                  autoSize={{ minRows: 8 }}
                />
              </div>
              <div className="line"></div>
              <div className="data-div">
                <TextArea
                  defaultValue={kpiNotesSL.item_53}
                  onChange={e => handleKPINotesSL(e.target.value, 53)}
                  id="leader-hardSkill--53"
                  className="textarea"
                  autoSize={{ minRows: 8 }}
                />
              </div>
            </div>
          </td>
          <td className="data data--content">
            <Select
              options={options}
              id="select--id"
              // disabled={true}
              value={kpiHardValue.value_5}
              onChange={value => handleSoftParagraph(value, 5)}
              className="select--criteria-hard select-antd"
            />

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
            <div className="data-container">
              <div className="data-div">
                <TextArea
                  defaultValue={kpiNotesEmployee.item_61}
                  onChange={e => handleKPINotesEmployee(e.target.value, 61)}
                  id="employee-hardSkill--6"
                  className="textarea"
                  autoSize={{ minRows: 8 }}
                />
              </div>
              <div className="line"></div>
              <div className="data-div">
                <TextArea
                  defaultValue={kpiNotesSL.item_61}
                  onChange={e => handleKPINotesSL(e.target.value, 61)}
                  id="leader-hardSkill--6"
                  className="textarea"
                  autoSize={{ minRows: 8 }}
                />
              </div>
            </div>
          </td>
          <td className="data">
            <div className="data-container">
              <div className="data-div">
                <TextArea
                  id="employee-hardSkill-63"
                  defaultValue={kpiNotesEmployee.item_63}
                  onChange={e => handleKPINotesEmployee(e.target.value, 63)}
                  className="textarea"
                  autoSize={{ minRows: 8 }}
                />
              </div>
              <div className="line"></div>
              <div className="data-div">
                <TextArea
                  defaultValue={kpiNotesSL.item_63}
                  onChange={e => handleKPINotesSL(e.target.value, 63)}
                  id="leader-hardSkill-63"
                  className="textarea"
                  autoSize={{ minRows: 8 }}
                />
              </div>
            </div>
          </td>
          <td className="data data--content">
            <Select
              options={options}
              id="select--id"
              // disabled={true}
              value={kpiHardValue.value_6}
              onChange={value => handleSoftParagraph(value, 6)}
              className="select--criteria-hard select-antd"
            />
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
            <div className="data-container">
              <div className="data-div">
                <TextArea
                  defaultValue={kpiNotesEmployee.item_71}
                  onChange={e => handleKPINotesEmployee(e.target.value, 71)}
                  id="employee-hardSkill--7"
                  className="textarea"
                  autoSize={{ minRows: 8 }}
                />
              </div>
              <div className="line"></div>
              <div className="data-div">
                <TextArea
                  defaultValue={kpiNotesSL.item_71}
                  onChange={e => handleKPINotesSL(e.target.value, 71)}
                  id="leader-hardSkill--7"
                  className="textarea"
                  autoSize={{ minRows: 8 }}
                />
              </div>
            </div>
          </td>
          <td className="data">
            <div className="data-container">
              <div className="data-div">
                <TextArea
                  id="employee-hardSkill--73"
                  defaultValue={kpiNotesEmployee.item_73}
                  onChange={e => handleKPINotesEmployee(e.target.value, 73)}
                  className="textarea"
                  autoSize={{ minRows: 8 }}
                />
              </div>
              <div className="line"></div>
              <div className="data-div">
                <TextArea
                  defaultValue={kpiNotesSL.item_73}
                  onChange={e => handleKPINotesSL(e.target.value, 73)}
                  id="leader-hardSkill--73"
                  className="textarea"
                  autoSize={{ minRows: 8 }}
                />
              </div>
            </div>
          </td>
          <td className="data data--content">
            <Select
              options={options}
              id="select--id"
              // disabled={true}
              value={kpiHardValue.value_7}
              onChange={value => handleSoftParagraph(value, 7)}
              className="select--criteria-hard select-antd"
            />
            <p className="data--paragraph-5 data--paragraph-55 data--paragraph">
              {paragraphValue.item_7}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
