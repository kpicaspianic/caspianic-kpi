import { Fragment, useEffect, useRef } from 'react';
import { SelectCriteria } from '../../components/SelectCriteria';
import { Input } from 'antd';

const { TextArea } = Input;

const SoftSkills = ({
  softSkillsData,
  softKPINotesSL,
  softKPINotesEmployee,
  softParagraphValue,
  setSoftKPINotesSL,
  setSoftKPINotesEmployee,
  setSoftParagraphValue,
  status,
}) => {
  const elements = [];

  const thRef = useRef(null);
  const tdRefs_1 = useRef([]);
  const tdRefs_2 = useRef([]);
  const tdRefs_3 = useRef([]);
  const tdRefs_4 = useRef([]);
  const tdRefs_5 = useRef([]);
  const firstRefs = useRef([]);

  const checkPosition = () => {
    const thRect = thRef.current.getBoundingClientRect();

    if (thRect.left <= 0) {
      thRef.current.classList.add('highlight');
    } else {
      thRef.current.classList.remove('highlight');
    }

    firstRefs.current.forEach(ref => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (rect.left <= 0) {
          ref.classList.add('highlight');
        } else {
          ref.classList.remove('highlight');
        }
      }
    });

    tdRefs_1.current.forEach(ref => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (rect.left <= 0) {
          ref.classList.add('highlight');
        } else {
          ref.classList.remove('highlight');
        }
      }
    });
    tdRefs_2.current.forEach(ref => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (rect.left <= 0) {
          ref.classList.add('highlight');
        } else {
          ref.classList.remove('highlight');
        }
      }
    });
    tdRefs_3.current.forEach(ref => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (rect.left <= 0) {
          ref.classList.add('highlight');
        } else {
          ref.classList.remove('highlight');
        }
      }
    });
    tdRefs_4.current.forEach(ref => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (rect.left <= 0) {
          ref.classList.add('highlight');
        } else {
          ref.classList.remove('highlight');
        }
      }
    });
    tdRefs_5.current.forEach(ref => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (rect.left <= 0) {
          ref.classList.add('highlight');
        } else {
          ref.classList.remove('highlight');
        }
      }
    });
  };

  for (let i = 0; i < 5; i++) {
    switch (i) {
      case 0:
        elements.push({
          softName: 'Məsuliyyətlilik',
          description:
            'Vəzifə və öhdəliklərini etibarlı, vicdanla və vaxtında yerinə yetirmək. Şüurlu qərar qəbul etmək, etibarlı olmaq, öhdəliklərə görə məsuliyyət götürmək. Işlərin mənimsənilməsi, ciddi nəzarətə ehtiyac olmadan icra edilməsi,əldə olunan nəticələrin əhəmiyyətinin fərqində olmaq',
          weight: '20%',
          category1:
            softSkillsData.soft1_input1 === '?'
              ? ''
              : decodeURI(softSkillsData.soft1_input1),
          category2:
            softSkillsData.soft1_input2 === '?'
              ? ''
              : decodeURI(softSkillsData.soft1_input2),
          category3:
            softSkillsData.soft1_input3 === '?'
              ? ''
              : decodeURI(softSkillsData.soft1_input3),
          category4:
            softSkillsData.soft1_input4 === '?'
              ? ''
              : decodeURI(softSkillsData.soft1_input4),
          category5:
            softSkillsData.soft1_input5 === '?'
              ? ''
              : decodeURI(softSkillsData.soft1_input5),
          slNote: {
            item_11: softKPINotesSL[`item_11`],
            item_12: softKPINotesSL[`item_12`],
            item_13: softKPINotesSL[`item_13`],
            item_14: softKPINotesSL[`item_14`],
            item_15: softKPINotesSL[`item_15`],
          },
          emplNote: {
            item_11: softKPINotesEmployee.item_11,
            item_12: softKPINotesEmployee.item_12,
            item_13: softKPINotesEmployee.item_13,
            item_14: softKPINotesEmployee.item_14,
            item_15: softKPINotesEmployee.item_15,
          },
          indicators: [
            {
              item1:
                'Ardıcıl olaraq son tarixlərə cavab verir və tapşırıqları vaxtında və ya vaxtından əvvəl yerinə yetirir',
              item2:
                'Problemlərin həllinə proaktiv yanaşma nümayiş etdirərək layihələr və təşəbbüslərə sahiblik edir',
              item3:
                'Nailiyyətlər, uğursuzluqlar və öhdəliklər haqqında effektiv və şəffaf şəkildə ünsiyyət qurur',
              item4:
                'Öhdəlikləri nəzarət olmadan yerinə yetirməklə etibarlılıq nümayiş etdirir',
              item5:
                'Səlahiyyətləri daxilində qərarların qəbul edilməsinə görə məsuliyyəti öz üzərinə götürə bilir',
            },
            {
              item1:
                'Tez-tez son tarixləri qaçırır və ya əvvəlcədən xəbərdarlıq etmədən və ya izahat vermədən natamam iş təqdim edir',
              item2:
                'Tapşırıqlara və ya layihələrə sahib olmaqdan çəkinir, tez-tez məsuliyyəti başqalarına ötürür',
              item3:
                'Qarışıqlıq və ya anlaşılmazlıqlara səbəb olan nailiyyətlət ilə bağlı şəffaflığın və ya ünsiyyətin olmamasını göstərir',
              item4:
                'Üzrlü səbəblər olmadan öhdəlikləri və ya öhdəlikləri yerinə yetirməməklə etibarsızlıq nümayiş etdirir',
              item5:
                'Məsuliyyət götürmək və həll yollarına çalışmaq əvəzinə səhv və ya çatışmazlıqlarda başqalarını günahlandırır',
            },
          ],
          results: {
            res_11: softParagraphValue.item_11,
            res_12: softParagraphValue.item_12,
            res_13: softParagraphValue.item_13,
            res_14: softParagraphValue.item_14,
            res_15: softParagraphValue.item_15,
          },
        });
        break;
      case 1:
        elements.push({
          softName: 'Nəticə yönümlülük',
          description:
            'Tələb olunan nəticəni aydın başa düşmək və nəticəyə çatmaq üçün işləri prioritetləşdirə bilmək və üzərinə məsuliyyət götürmək, lazım olan nəticəni əldə etmək üçün işi sona qədər davam etdirmək.',
          weight: '20%',
          category1:
            softSkillsData.soft2_input1 === '?'
              ? ''
              : decodeURI(softSkillsData.soft2_input1),
          category2:
            softSkillsData.soft2_input2 === '?'
              ? ''
              : decodeURI(softSkillsData.soft2_input2),
          category3:
            softSkillsData.soft2_input3 === '?'
              ? ''
              : decodeURI(softSkillsData.soft2_input3),
          category4:
            softSkillsData.soft2_input4 === '?'
              ? ''
              : decodeURI(softSkillsData.soft2_input4),
          category5:
            softSkillsData.soft2_input5 === '?'
              ? ''
              : decodeURI(softSkillsData.soft2_input5),
          slNote: {
            item_21: softKPINotesSL.item_21,
            item_22: softKPINotesSL.item_22,
            item_23: softKPINotesSL.item_23,
            item_24: softKPINotesSL.item_24,
            item_25: softKPINotesSL.item_25,
          },
          emplNote: {
            item_21: softKPINotesEmployee.item_21,
            item_22: softKPINotesEmployee.item_22,
            item_23: softKPINotesEmployee.item_23,
            item_24: softKPINotesEmployee.item_24,
            item_25: softKPINotesEmployee.item_25,
          },
          indicators: [
            {
              item1:
                'Təşkilat məqsədləri ilə uyğunlaşdırılmış aydın və əldə edilə bilən məqsədlər qoyur.',
              item2:
                'Müəyyən edilmiş müddətlərdə yüksək keyfiyyətli nəticələrin təqdim edilməsinə güclü diqqət nümayiş etdirir.',
              item3:
                'Nəticələrə nail olmaq üçün lazım olduqda əlavə səlahiyyət öz üzərinə götürür',
              item4:
                'Təkmilləşdirmə və innovasiya imkanlarını müəyyən etmək və izləmək üçün təşəbbüs göstərir',
              item5:
                'Tərəqqi izləmək və hədəflərə çatmaq və ya aşmaq üçün planları tənzimləmək üçün ardıcıl olaraq performans göstəricilərini qiymətləndirir',
            },
            {
              item1:
                'Məqsədlərə çatmağa kömək etməyən fəaliyyətlərə üstünlük verərək, nəticələrə diqqət yetirmir',
              item2:
                'Tez-tez son tarixlərə uyğun gəlmir və ya məqbul standartlar çərçivəsində nəticələr təqdim etmir',
              item3:
                'Dəyişən şərtlərə uyğunlaşmaq üçün mübarizə aparır, məqsədlərə çatmaqda uğursuzluğa səbəb olur',
              item4:
                'Nəticə əldə etmək üçün proaktiv addımlar atmaq əvəzinə təlimatları gözləyən passiv yanaşma nümayiş etdirir',
              item5:
                'Təkmilləşdirmə üçün sahələri tanıya bilməyib və ya müvafiq olaraq strategiyaları tənzimləyərək rəy və ya performans göstəricilərinə məhəl qoymur',
            },
          ],
          results: {
            res_21: softParagraphValue.item_21,
            res_22: softParagraphValue.item_22,
            res_23: softParagraphValue.item_23,
            res_24: softParagraphValue.item_24,
            res_25: softParagraphValue.item_25,
          },
        });
        break;
      case 2:
        elements.push({
          softName: 'Konfiliktlərin idarə olunması',
          description:
            'Mübahisələri və fikir ayrılıqlarını konstruktiv şəkildə həll etmək, bütün iştirakçı tərəfləri qane edən həllər tapmaq və müsbət münasibətləri saxlamaq.',
          weight: '20%',
          category1:
            softSkillsData.soft3_input1 === '?'
              ? ''
              : decodeURI(softSkillsData.soft3_input1),
          category2:
            softSkillsData.soft3_input2 === '?'
              ? ''
              : decodeURI(softSkillsData.soft3_input2),
          category3:
            softSkillsData.soft3_input3 === '?'
              ? ''
              : decodeURI(softSkillsData.soft3_input3),
          category4:
            softSkillsData.soft3_input4 === '?'
              ? ''
              : decodeURI(softSkillsData.soft3_input4),
          category5:
            softSkillsData.soft3_input5 === '?'
              ? ''
              : decodeURI(softSkillsData.soft2_input5),
          slNote: {
            item_31: softKPINotesSL.item_31,
            item_32: softKPINotesSL.item_32,
            item_33: softKPINotesSL.item_33,
            item_34: softKPINotesSL.item_34,
            item_35: softKPINotesSL.item_35,
          },
          emplNote: {
            item_31: softKPINotesEmployee.item_31,
            item_32: softKPINotesEmployee.item_32,
            item_33: softKPINotesEmployee.item_33,
            item_34: softKPINotesEmployee.item_34,
            item_35: softKPINotesEmployee.item_35,
          },
          indicators: [
            {
              item1:
                'Münaqişədə iştirak edən bütün tərəfləri fəal şəkildə dinləyir, onların perspektivlərini anlamağa çalışır.',
              item2:
                'Münaqişələri həll etmək və qarşılıqlı faydalı həllər tapmaq üçün açıq və hörmətli ünsiyyəti asanlaşdırır.',
              item3:
                'Hər bir tərəfin əsas narahatlıqlarını tanımaq və həll etmək üçün empatiya və emosional zəka nümayiş etdirir',
              item4:
                'Münaqişələri həll etmək və bütün tərəfləri qane edən kompromislərə nail olmaq üçün danışıqlar və vasitəçilik bacarıqlarından istifadə edir',
              item5:
                'Konstruktiv rəyi təşviq edir və münaqişələrin böyüməsinin qarşısını almaq üçün əməkdaşlıq və komanda işi mədəniyyətini inkişaf etdirir',
            },
            {
              item1:
                'Münaqişələri və ya qarşıdurmaları həll etməkdən çəkinir, həll olunmamış problemlərin irinlənməsinə və böyüməsinə imkan verir',
              item2:
                'Münaqişələrə təcavüz və ya düşmənçiliklə cavab verir, gərginliyi artırır və həll səylərinə mane olur',
              item3:
                'Empatiyadan məhrumdur və münaqişədə iştirak edən başqalarının perspektivlərini və ya hisslərini nəzərə almır',
              item4:
                'Münaqişəni pisləşdirən və həll prosesinə inamı sarsıdan tərəf tutur və ya tərəfdarlıq nümayiş etdirir',
              item5:
                'Təkrarlanan münaqişələrə və ya həll olunmamış problemlərə səbəb olan münaqişələrin həlli səylərinə əməl etmir',
            },
          ],
          results: {
            res_31: softParagraphValue.item_31,
            res_32: softParagraphValue.item_32,
            res_33: softParagraphValue.item_33,
            res_34: softParagraphValue.item_34,
            res_35: softParagraphValue.item_35,
          },
        });
        break;
      case 3:
        elements.push({
          softName: 'Bilikləri paylaşma',
          description:
            'Davamlı olaraq öz üzərində işləyərək bilik və bacarıqları artırmaq və bunu digərləri ilə paylaşmağa, məlumat mübadiləsi etməyə səy göstərmək. Komanda/şirkət daxilində biliklərin, ən yaxşı təcrübələrin, əvvəlki layihələrdən öyrənilən dərslərin və ya faydalı məsləhətlərin və tövsiyələrin mübadiləsini əhatə edir.',
          weight: '20%',
          category1:
            softSkillsData.soft4_input1 === '?' ||
            softSkillsData.soft4_input1 === ''
              ? ''
              : decodeURI(softSkillsData.soft4_input1),
          category2:
            softSkillsData.soft4_input2 === '?'
              ? ''
              : decodeURI(softSkillsData.soft4_input2),
          category3:
            softSkillsData.soft4_input3 === '?'
              ? ''
              : decodeURI(softSkillsData.soft4_input3),
          category4:
            softSkillsData.soft4_input4 === '?'
              ? ''
              : decodeURI(softSkillsData.soft4_input4),
          category5:
            softSkillsData.soft4_input5 === '?'
              ? ''
              : decodeURI(softSkillsData.soft4_input5),
          slNote: {
            item_41: softKPINotesSL.item_41,
            item_42: softKPINotesSL.item_42,
            item_43: softKPINotesSL.item_43,
            item_44: softKPINotesSL.item_44,
            item_45: softKPINotesSL.item_45,
          },
          emplNote: {
            item_41: softKPINotesEmployee.item_41,
            item_42: softKPINotesEmployee.item_42,
            item_43: softKPINotesEmployee.item_43,
            item_44: softKPINotesEmployee.item_44,
            item_45: softKPINotesEmployee.item_45,
          },
          indicators: [
            {
              item1:
                'Tələb olunmasını gözləmədən müvafiq məlumat və fikirləri komanda üzvləri ilə aktiv şəkildə paylaşır.',
              item2:
                'Komanda performansını artırmaq üçün açıq şəkildə fikirlər, rəylər və biliklər verməklə əməkdaşlığa hazır olduğunu nümayiş etdirir.',
              item3:
                'Təşkilati öyrənməni asanlaşdırmaq üçün mütəmadi olaraq ən yaxşı təcrübələri, alınmış peşəkar sertifikatlar üzrə bilik paylaşımı sessiyaları keçirir',
              item4:
                'Mürəkkəb məlumatları aydın və effektiv şəkildə ötürür və onu daha geniş auditoriya üçün əlçatan edir',
              item5:
                'Həmkarlarının nailiyyətlərini həvəsləndirmək və tanımaq, açıq və dəstəkləyici mühit yaratmaqla bilik mübadiləsi mədəniyyətini inkişaf etdirir',
            },
            {
              item1: 'Bilik paylaşımı sessiyaları keçirmir',
              item2:
                'Komandanın data əsaslı qərarlar qəbul etməsinə dəstək olan məlumat və ya biliyi qəsdən saxlayır',
              item3:
                'Vacib sənədləri sənədləşdirə və paylaşa bilmir. Buna görə həmkarların keçmiş təcrübələr ilə tanış olmasına çətinlik yaradılır',
              item4: 'Məlumatı qeyri-müəyyən şəkildə ötürür',
              item5: '',
            },
          ],
          results: {
            res_41: softParagraphValue.item_41,
            res_42: softParagraphValue.item_42,
            res_43: softParagraphValue.item_43,
            res_44: softParagraphValue.item_44,
            res_45: softParagraphValue.item_45,
          },
        });
        break;
      case 4:
        elements.push({
          softName: 'Kommunikasiya',
          description:
            'Fikir, ideya və məlumatı həm şifahi, həm də yazılı şəkildə aydın və effektiv şəkildə ifadə etmək bacarığı. Bura aktiv dinləmə və şifahi olmayan işarələri başa düşmək daxildir.',
          weight: '20%',
          category1:
            softSkillsData.soft5_input1 === '?'
              ? ''
              : decodeURI(softSkillsData.soft5_input1),
          category2:
            softSkillsData.soft5_input2 === '?'
              ? ''
              : decodeURI(softSkillsData.soft5_input2),
          category3:
            softSkillsData.soft5_input3 === '?'
              ? ''
              : decodeURI(softSkillsData.soft5_input3),
          category4:
            softSkillsData.soft5_input4 === '?'
              ? ''
              : decodeURI(softSkillsData.soft5_input4),
          category5:
            softSkillsData.soft5_input5 === '?'
              ? ''
              : decodeURI(softSkillsData.soft5_input5),
          slNote: {
            item_51: softKPINotesSL.item_51,
            item_52: softKPINotesSL.item_52,
            item_53: softKPINotesSL.item_53,
            item_54: softKPINotesSL.item_54,
            item_55: softKPINotesSL.item_55,
          },
          emplNote: {
            item_51: softKPINotesEmployee.item_51,
            item_52: softKPINotesEmployee.item_52,
            item_53: softKPINotesEmployee.item_53,
            item_54: softKPINotesEmployee.item_54,
            item_55: softKPINotesEmployee.item_55,
          },
          indicators: [
            {
              item1:
                'Müvafiq qrammatika və orfoqrafiya ilə aydın, qısa və peşəkar təşkil olunmuş e-məktubları hazırlayır, məlumatı effektiv və peşəkar şəkildə ötürür.',
              item2:
                'Təqdimatları inamla, aydın və uyğun templə çatdırır, story telling, səs tonu və vurğudan səmərəli istifadə etməklə auditoriyanı cəlb edə bilir.',
              item3:
                'Müzakirə zamanı uyğun bədən dili istifadə edir, göz təması qurur və diqqəti çox yayındırmadan əsas məqamları vurğulamaq üçün jestlərdən düzgün istifadə edir',
              item4:
                'Söz kəsmədən, müvafiq suallar verməklə diqqətli dinləmə nümayiş etdirir',
              item5:
                'Nəzakətli dil və tondan istifadə edir, başqalarının sözünü kəsmir, nəzakət və empatiya ilə fərqli fikirləri və ya perspektivləri qəbul edə bilir, müsbət və əhatəli ünsiyyət mühitini inkişaf etdirə bilir',
            },
            {
              item1:
                'Səhv və ya qeyri-müəyyən şəkildə ünsiyyət qurur, bu da anlaşılmazlıqlara səbəb olur',
              item2:
                'Tez-tez başqalarının sözünü kəsir və səmərəli fikir mübadiləsinə mane olur',
              item3: 'Jarqon dildən istifadə edir',
              item4:
                'Həll olunmamış problemlər və ya gərginliklə nəticələnən çətin söhbətlərdən və ya münaqişələrdən çəkinir',
              item5:
                'Fəal dinləmək və ya başqalarının perspektivlərinə maraq göstərməmək, ünsiyyət və etibarın pozulmasına səbəb olur',
            },
          ],
          results: {
            res_51: softParagraphValue.item_51,
            res_52: softParagraphValue.item_52,
            res_53: softParagraphValue.item_53,
            res_54: softParagraphValue.item_54,
            res_55: softParagraphValue.item_55,
          },
        });
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);

    return () => {
      window.removeEventListener('scroll', checkPosition);
      window.removeEventListener('resize', checkPosition);
    };
  }, []);

  return (
    <div>
      <table className="mainTable marginBottom">
        <thead>
          <tr className="table-row">
            <th className="header header--1">
              SƏRIŞTƏLILIKLƏR<span className="header-blue"></span>
            </th>
            <th className="header header--categories" ref={thRef}>
              <p>Kategoriyalar</p>
            </th>
            <th className="header header--weight">
              <p>Ağırlıq</p>
            </th>

            <th className="header header--2">
              <p>
                Qiymətlə periodu ərzində əməkdaşın nümayiş etdirdiyi
                səriştəliliyin qiymətləndirilməsi (verilən yekun nəticənin
                araşdırılması)
              </p>
            </th>
            <th className="header header--indicators">
              <p>Indikatorlar</p>
            </th>
            <th className="header header--3">
              <p>Qiymətləndirmə meyarlarının seçimi</p>
            </th>
          </tr>
        </thead>

        <tbody>
          {elements.map((el, idx) => {
            return (
              <Fragment key={idx}>
                <tr>
                  <th rowSpan={6}>{el.softName}</th>
                  <td
                    className="performance-notes__header first"
                    ref={el => (firstRefs.current[idx] = el)}
                  ></td>
                  <td rowSpan={6} className="category-weight">
                    {el.weight}
                  </td>

                  <td className="performance-notes__header">
                    {idx === 0 ? (
                      <div className="performanc-notes">
                        <p>Əməkdaşın qeydləri</p>
                        <div className="vertical-line"></div>
                        <p>Rəhbərin rəyi</p>
                      </div>
                    ) : (
                      <></>
                    )}
                  </td>

                  <td rowSpan={6} style={{ verticalAlign: 'baseline' }}>
                    <div className="indicators">
                      <div className="positive">
                        <span>Pozitiv</span>
                        <ul>
                          <li>{el.indicators[0].item1}</li>
                          <li>{el.indicators[0].item2}</li>
                          <li>{el.indicators[0].item3}</li>
                          <li>{el.indicators[0].item4}</li>
                          <li>{el.indicators[0].item5}</li>
                        </ul>
                      </div>
                      <div className="negative">
                        <span>Neqativ</span>
                        <ul>
                          <li>{el.indicators[1].item1}</li>
                          <li>{el.indicators[1].item2}</li>
                          <li>{el.indicators[1].item3}</li>
                          <li>{el.indicators[1].item4}</li>
                          <li>{el.indicators[1].item5}</li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td className="performance-notes__header"></td>
                </tr>

                <tr key={el.category1}>
                  <td ref={el => (tdRefs_1.current[idx] = el)}>
                    <div className="categories">{el.category1}</div>
                  </td>
                  <td>
                    <div className="performance-text">
                      <TextArea
                        name="1"
                        id={el.emplNote[`item_${idx + 1}1`]}
                        onChange={e => {
                          setSoftKPINotesEmployee(prevValue => ({
                            ...prevValue,
                            [`item_${idx + 1}1`]: e.target.value,
                          }));
                        }}
                        value={el.emplNote[`item_${idx + 1}1`]}
                        readOnly={window.asManager ? true : false}
                        className={
                          window.asManager
                            ? 'not-allowed textarea-antd'
                            : 'textarea-antd'
                        }
                        autoSize={{ minRows: 4 }}
                      />
                      <div className="vertical-line"></div>
                      <TextArea
                        name="1"
                        id={el.slNote[`item_${idx + 1}1`]}
                        onChange={e => {
                          setSoftKPINotesSL(prevValue => ({
                            ...prevValue,
                            [`item_${idx + 1}1`]: e.target.value,
                          }));
                        }}
                        value={el.slNote[`item_${idx + 1}1`]}
                        readOnly={
                          status !== 'assigned' || !window.asManager
                            ? true
                            : false
                        }
                        className={
                          !window.asManager
                            ? 'not-allowed textarea-antd'
                            : 'textarea-antd'
                        }
                        autoSize={{ minRows: 4 }}
                      />
                    </div>
                  </td>
                  <td
                    className={`${
                      !window.asManager &&
                      status === 'assigned' &&
                      'displayNone'
                    }`}
                  >
                    <SelectCriteria
                      setParagraph={setSoftParagraphValue}
                      key={el}
                      number={`${idx + 1}1`}
                      res={el.results[`res_${idx + 1}1`]}
                      disabled={!window.asManager}
                      open={status !== 'assigned' ? false : undefined}
                    />
                  </td>
                </tr>
                <tr>
                  <td ref={el => (tdRefs_2.current[idx] = el)}>
                    <div className="categories">{el.category2}</div>
                  </td>
                  <td>
                    <div className="performance-text">
                      <TextArea
                        name="2"
                        id=""
                        onChange={e => {
                          setSoftKPINotesEmployee(prevValue => ({
                            ...prevValue,
                            [`item_${idx + 1}2`]: e.target.value,
                          }));
                        }}
                        value={el.emplNote[`item_${idx + 1}2`]}
                        readOnly={window.asManager ? true : false}
                        className={
                          window.asManager
                            ? 'not-allowed textarea-antd'
                            : 'textarea-antd'
                        }
                        autoSize={{ minRows: 4 }}
                      />
                      <div className="vertical-line"></div>
                      <TextArea
                        name="2"
                        id={el.slNote[`item_${idx + 1}2`]}
                        onChange={e => {
                          setSoftKPINotesSL(prevValue => ({
                            ...prevValue,
                            [`item_${idx + 1}2`]: e.target.value,
                          }));
                        }}
                        value={el.slNote[`item_${idx + 1}2`]}
                        readOnly={
                          status !== 'assigned' || !window.asManager
                            ? true
                            : false
                        }
                        className={
                          !window.asManager
                            ? 'not-allowed textarea-antd'
                            : 'textarea-antd'
                        }
                        autoSize={{ minRows: 4 }}
                      />
                    </div>
                  </td>
                  <td>
                    <div
                      className={`select-div ${
                        !window.asManager &&
                        status === 'assigned' &&
                        'displayNone'
                      }`}
                    >
                      <SelectCriteria
                        setParagraph={setSoftParagraphValue}
                        key={el}
                        number={`${idx + 1}2`}
                        res={el.results[`res_${idx + 1}2`]}
                        disabled={!window.asManager}
                        open={status !== 'assigned' ? false : undefined}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td ref={el => (tdRefs_3.current[idx] = el)}>
                    <div className="categories">{el.category3}</div>
                  </td>
                  <td>
                    <div className="performance-text">
                      <TextArea
                        name=""
                        id=""
                        onChange={e => {
                          setSoftKPINotesEmployee(prevValue => ({
                            ...prevValue,
                            [`item_${idx + 1}3`]: e.target.value,
                          }));
                        }}
                        value={el.emplNote[`item_${idx + 1}3`]}
                        readOnly={window.asManager ? true : false}
                        className={
                          window.asManager
                            ? 'not-allowed textarea-antd'
                            : 'textarea-antd'
                        }
                        autoSize={{ minRows: 4 }}
                      />
                      <div className="vertical-line"></div>
                      <TextArea
                        name=""
                        id={`item_${idx + 1}`}
                        onChange={e => {
                          setSoftKPINotesSL(prevValue => ({
                            ...prevValue,
                            [`item_${idx + 1}3`]: e.target.value,
                          }));
                        }}
                        value={el.slNote[`item_${idx + 1}3`]}
                        readOnly={
                          status !== 'assigned' || !window.asManager
                            ? true
                            : false
                        }
                        className={
                          !window.asManager
                            ? 'not-allowed textarea-antd'
                            : 'textarea-antd'
                        }
                        autoSize={{ minRows: 4 }}
                      />
                    </div>
                  </td>
                  <td>
                    <div
                      className={`select-div ${
                        !window.asManager &&
                        status === 'assigned' &&
                        'displayNone'
                      }`}
                    >
                      <SelectCriteria
                        setParagraph={setSoftParagraphValue}
                        key={el}
                        number={`${idx + 1}3`}
                        res={el.results[`res_${idx + 1}3`]}
                        disabled={!window.asManager}
                        open={status !== 'assigned' ? false : undefined}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td ref={el => (tdRefs_4.current[idx] = el)}>
                    <div className="categories">{el.category4}</div>
                  </td>
                  <td>
                    <div className="performance-text">
                      <TextArea
                        name=""
                        id=""
                        onChange={e => {
                          setSoftKPINotesEmployee(prevValue => ({
                            ...prevValue,
                            [`item_${idx + 1}4`]: e.target.value,
                          }));
                        }}
                        value={el.emplNote[`item_${idx + 1}4`]}
                        readOnly={window.asManager ? true : false}
                        className={
                          window.asManager
                            ? 'not-allowed textarea-antd'
                            : 'textarea-antd'
                        }
                        autoSize={{ minRows: 4 }}
                      />
                      <div className="vertical-line"></div>
                      <TextArea
                        name=""
                        id={`item_${idx + 1}`}
                        onChange={e => {
                          setSoftKPINotesSL(prevValue => ({
                            ...prevValue,
                            [`item_${idx + 1}4`]: e.target.value,
                          }));
                        }}
                        value={el.slNote[`item_${idx + 1}4`]}
                        readOnly={
                          status !== 'assigned' || !window.asManager
                            ? true
                            : false
                        }
                        className={
                          !window.asManager
                            ? 'not-allowed textarea-antd'
                            : 'textarea-antd'
                        }
                        autoSize={{ minRows: 4 }}
                      />
                    </div>
                  </td>
                  <td>
                    <div
                      className={`select-div ${
                        !window.asManager &&
                        status === 'assigned' &&
                        'displayNone'
                      }`}
                    >
                      <SelectCriteria
                        setParagraph={setSoftParagraphValue}
                        key={el}
                        number={`${idx + 1}4`}
                        res={el.results[`res_${idx + 1}4`]}
                        disabled={!window.asManager}
                        open={status !== 'assigned' ? false : undefined}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td ref={el => (tdRefs_5.current[idx] = el)}>
                    <div className="categories">{el.category5}</div>
                  </td>
                  <td>
                    <div className="performance-text">
                      <TextArea
                        name=""
                        id=""
                        onChange={e => {
                          setSoftKPINotesEmployee(prevValue => ({
                            ...prevValue,
                            [`item_${idx + 1}5`]: e.target.value,
                          }));
                        }}
                        value={el.emplNote[`item_${idx + 1}5`]}
                        readOnly={window.asManager ? true : false}
                        className={
                          window.asManager
                            ? 'not-allowed textarea-antd'
                            : 'textarea-antd'
                        }
                        autoSize={{ minRows: 4 }}
                      />
                      <div className="vertical-line"></div>
                      <TextArea
                        name=""
                        id={`item_${idx + 1}`}
                        onChange={e => {
                          setSoftKPINotesSL(prevValue => ({
                            ...prevValue,
                            [`item_${idx + 1}5`]: e.target.value,
                          }));
                        }}
                        value={el.slNote[`item_${idx + 1}5`]}
                        readOnly={
                          status !== 'assigned' || !window.asManager
                            ? true
                            : false
                        }
                        className={
                          !window.asManager
                            ? 'not-allowed textarea-antd'
                            : 'textarea-antd'
                        }
                        autoSize={{ minRows: 4 }}
                      />
                    </div>
                  </td>
                  <td>
                    <div
                      className={`select-div ${
                        !window.asManager &&
                        status === 'assigned' &&
                        'displayNone'
                      }`}
                    >
                      <SelectCriteria
                        setParagraph={setSoftParagraphValue}
                        disabled={!window.asManager}
                        key={el}
                        number={`${idx + 1}5`}
                        res={el.results[`res_${idx + 1}5`]}
                        open={status !== 'assigned' ? false : undefined}
                      />
                    </div>
                  </td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SoftSkills;
