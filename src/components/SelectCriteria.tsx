import { useEffect, useState } from 'react';

export const SelectCriteria = ({ res, number, setParagraph }) => {
  const setCorrectParagraph = (value: string) => {
    switch (value) {
      case '1':
        return 'Işçi ümumi fəaliyyət sahəsində və ya xüsusi tapşırıqların icrasında şirkətin standartlarını qarşılamaqda tamamilə uğursuzluğa uğramışdır. Tapşırıqları icra etməsi üçün işçinin intizamı, təşəbbüskarlığı və səriştəliliyinə dair şübhələr mövcuddur. Nümayiş olunan əmək fəaliyyəti tamamilə qəbulolunmazdır.';
      case '2':
        return 'Ümumi iş təsvirinin və ya hədəflərin/tapşırıqları 50% qədər icra edir, ümumi iş təsvirinin standartlara uyğun olmasını təmin etməsi və ya tapşırıqların tamamlaması üçün işçinin təkmilləşməyə ehtiyacı vardır. Bu iş rəhbərdən normalda olduğundan daha çox zəhmət tələb edir.';
      case '3':
        return 'Işçi ümumi fəaliyyətində çox əhəmiyyətli olmayan olsa da səhvlər buraxa bilir, gördüyü işə bəzən nəzarət edilməsinə ehtiyac var, təşəbbüskarlıq səviyyəsi istənilən qədər deyil, gözləntilərə hər zaman cavab vermir. Hədəflərinin 70% qədərini icra edir.';
      case '4':
        return 'Qarşıda duran bütün vəzifə öhdəliklərinin və tapşırıqların/hədəflərin minimum 90%-dən 100%-nə qədərini tələb olunan zaman çərçivəsində səmərəlilik və təşəbbüskarlıqla icra edir. Rəhbəri ilə razılaşdırılmış bütün gözləntiləri tam surətdə yerinə yetirir.';
      case '5':
        return 'Işin təsvirində və ya xüsusi tapşırığın yerinə yetirilməsində bütün istiqamətlərdə gözləntiləri davamlı surətdə üstələmişdir. Verilən tapşırıqların icrasına heç kimin köməyi olmadan və böyük təşəbbüskarlıqla nail olmuşdur. Vəzifə öhdəliklərinin və ya xüsusi hədəflər/tapşırıqların yerinə yetirilməsində təşkilata əhəmiyyətli töhfələr verir, komanda üzvlərinə dəstək göstərir. Rəhbəri ilə razılaşdırılmış bütün gözləntiləri tam surətdə yerinə yetirmiş və öz hədəflərini tam 100% yerinə yetirmiş, hətta üstələmişdir.';
      default:
        return '';
    }
  };
  const [paragraphValue, setParagraphValue] = useState('');

  const handleSoftParagraph = (value: string, softSkillNumber: string) => {
    setParagraphValue(() => setCorrectParagraph(value));

    setParagraph(prevValue => ({
      ...prevValue,
      [`item_${softSkillNumber}`]: value,
    }));
  };

  useEffect(() => {
    setParagraphValue(() => setCorrectParagraph(res));
  }, [res]);

  return (
    <div className="select-div">
      <select
        name="select--criteria"
        id={number}
        className="select--criteria select--criteria-1"
        onChange={e => handleSoftParagraph(e.target.value, number)}
      >
        <option value="0">Choose an item</option>
        <option value="1" selected={res === '1'}>
          Qəbulolunmaz fəaliyyət nümayiş etdirir
        </option>
        <option value="2" selected={res === '2'}>
          Təkmilləşməyə ehtiyac duyulur
        </option>
        <option value="3" selected={res === '3'}>
          Qəbulolunan fəaliyyət nümayiş etdirir
        </option>
        <option value="4" selected={res === '4'}>
          Işin öhdəsindən lazımınca gəlir
        </option>
        <option value="5" selected={res === '5'}>
          Gözləntiləri davamlı olaraq üstələyir
        </option>
      </select>
      <p className="data--paragraph-1 data--paragraph">{paragraphValue}</p>
    </div>
  );
};
