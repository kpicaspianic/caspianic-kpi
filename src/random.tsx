import './App.css';

function App2() {
  return (
    <>
      <div style={{ overflowX: 'auto', width: '100%' }}>
        <table className="mainTable marginBottom">
          <thead>
            <tr className="table-row">
              <th className="header header--1">
                SƏRIŞTƏLILIKLƏR<span className="header-blue"></span>
              </th>
              <th className="header header--categories">
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
            <tr>
              <th rowSpan={6}>Məsuliyyətlilik</th>
              <td className="performance-notes__header"></td>
              <td rowSpan={6} className="category-weight">
                20%
              </td>

              <td className="performance-notes__header">
                <div className="performanc-notes">
                  <p>Əməkdaşın qeydləri</p>
                  <div className="vertical-line"></div>
                  <p>Rəhbərin rəyi</p>
                </div>
              </td>

              <td rowSpan={6}>
                <div className="indicators">
                  <div className="positive">
                    <span>Pozitiv</span>
                    <ul>
                      <li>
                        Ardıcıl olaraq son tarixlərə cavab verir və tapşırıqları
                        vaxtında və ya vaxtından əvvəl yerinə yetirir
                      </li>
                      <li>
                        Problemlərin həllinə proaktiv yanaşma nümayiş etdirərək
                        layihələr və təşəbbüslərə sahiblik edir
                      </li>
                      <li>
                        Nailiyyətlər, uğursuzluqlar və öhdəliklər haqqında
                        effektiv və şəffaf şəkildə ünsiyyət qurur
                      </li>
                      <li>
                        Öhdəlikləri nəzarət olmadan yerinə yetirməklə
                        etibarlılıq nümayiş etdirir
                      </li>
                      <li>
                        Səlahiyyətləri daxilində qərarların qəbul edilməsinə
                        görə məsuliyyəti öz üzərinə götürə bilir
                      </li>
                    </ul>
                  </div>
                  <div className="negative">
                    <span>Neqativ</span>
                    <ul>
                      <li>
                        Tez-tez son tarixləri qaçırır və ya əvvəlcədən
                        xəbərdarlıq etmədən və ya izahat vermədən natamam iş
                        təqdim edir
                      </li>
                      <li>
                        Tapşırıqlara və ya layihələrə sahib olmaqdan çəkinir,
                        tez-tez məsuliyyəti başqalarına ötürür
                      </li>
                      <li>
                        Qarışıqlıq və ya anlaşılmazlıqlara səbəb olan
                        nailiyyətlət ilə bağlı şəffaflığın və ya ünsiyyətin
                        olmamasını göstərir
                      </li>
                      <li>
                        Üzrlü səbəblər olmadan öhdəlikləri və ya öhdəlikləri
                        yerinə yetirməməklə etibarsızlıq nümayiş etdirir
                      </li>
                      <li>
                        Məsuliyyət götürmək və həll yollarına çalışmaq əvəzinə
                        səhv və ya çatışmazlıqlarda başqalarını günahlandırır
                      </li>
                    </ul>
                  </div>
                </div>
              </td>
              <td className="performance-notes__header"></td>
            </tr>

            <tr>
              <td>
                <div className="categories">Kateqoriya 1</div>
              </td>
              <td>
                <div className="performance-text">
                  <textarea name="" id=""></textarea>
                  <div className="vertical-line"></div>
                  <textarea name="" id=""></textarea>
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div className="categories">Kateqoriya 2</div>
              </td>
              <td>
                <div className="performance-text">
                  <textarea name="" id=""></textarea>
                  <div className="vertical-line"></div>
                  <textarea name="" id=""></textarea>
                </div>
              </td>
              <td>
                <select
                  name="select--criteria"
                  id="select--id"
                  className="select--criteria select--criteria-1"
                >
                  <option value="0">Choose an item</option>
                  <option value="1">
                    Qəbulolunmaz fəaliyyət nümayiş etdirir
                  </option>
                  <option value="2">Təkmilləşməyə ehtiyac duyulur</option>
                  <option value="3">
                    Qəbulolunan fəaliyyət nümayiş etdirir
                  </option>
                  <option value="4">Işin öhdəsindən lazımınca gəlir</option>
                  <option value="5">
                    Gözləntiləri davamlı olaraq üstələyir
                  </option>
                </select>
                <p className="data--paragraph-1 data--paragraph">
                  Nailiyyətlər, uğursuzluqlar və öhdəliklər haqqında effektiv və
                  şəffaf şəkildə ünsiyyət qurur
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="categories">Kateqoriya 3</div>
              </td>
              <td>
                <div className="performance-text">
                  <textarea name="" id=""></textarea>
                  <div className="vertical-line"></div>
                  <textarea name="" id=""></textarea>
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div className="categories">Kateqoriya 4</div>
              </td>
              <td>
                <div className="performance-text">
                  <textarea name="" id=""></textarea>
                  <div className="vertical-line"></div>
                  <textarea name="" id=""></textarea>
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div className="categories">Kateqoriya 5</div>
              </td>
              <td>
                <div className="performance-text">
                  <textarea name="" id=""></textarea>
                  <div className="vertical-line"></div>
                  <textarea name="" id=""></textarea>
                </div>
              </td>
              <td>4</td>
            </tr>
            <tr>
              <th rowSpan={6}>Məsuliyyətlilik</th>
              <td className="performance-notes__header"></td>
              <td rowSpan={6} className="category-weight">
                20%
              </td>

              <td className="performance-notes__header">
                <div className="performanc-notes">
                  <p>Əməkdaşın qeydləri</p>
                  <div className="vertical-line"></div>
                  <p>Rəhbərin rəyi</p>
                </div>
              </td>

              <td rowSpan={6}>
                <div className="indicators">
                  <div className="positive">
                    <span>Pozitiv</span>
                    <ul>
                      <li>
                        Ardıcıl olaraq son tarixlərə cavab verir və tapşırıqları
                        vaxtında və ya vaxtından əvvəl yerinə yetirir
                      </li>
                      <li>
                        Problemlərin həllinə proaktiv yanaşma nümayiş etdirərək
                        layihələr və təşəbbüslərə sahiblik edir
                      </li>
                      <li>
                        Nailiyyətlər, uğursuzluqlar və öhdəliklər haqqında
                        effektiv və şəffaf şəkildə ünsiyyət qurur
                      </li>
                      <li>
                        Öhdəlikləri nəzarət olmadan yerinə yetirməklə
                        etibarlılıq nümayiş etdirir
                      </li>
                      <li>
                        Səlahiyyətləri daxilində qərarların qəbul edilməsinə
                        görə məsuliyyəti öz üzərinə götürə bilir
                      </li>
                    </ul>
                  </div>
                  <div className="negative">
                    <span>Neqativ</span>
                    <ul>
                      <li>
                        Tez-tez son tarixləri qaçırır və ya əvvəlcədən
                        xəbərdarlıq etmədən və ya izahat vermədən natamam iş
                        təqdim edir
                      </li>
                      <li>
                        Tapşırıqlara və ya layihələrə sahib olmaqdan çəkinir,
                        tez-tez məsuliyyəti başqalarına ötürür
                      </li>
                      <li>
                        Qarışıqlıq və ya anlaşılmazlıqlara səbəb olan
                        nailiyyətlət ilə bağlı şəffaflığın və ya ünsiyyətin
                        olmamasını göstərir
                      </li>
                      <li>
                        Üzrlü səbəblər olmadan öhdəlikləri və ya öhdəlikləri
                        yerinə yetirməməklə etibarsızlıq nümayiş etdirir
                      </li>
                      <li>
                        Məsuliyyət götürmək və həll yollarına çalışmaq əvəzinə
                        səhv və ya çatışmazlıqlarda başqalarını günahlandırır
                      </li>
                    </ul>
                  </div>
                </div>
              </td>
              <td className="performance-notes__header"></td>
            </tr>
            <tr>
              <th>row 1</th>
            </tr>
            <tr>
              <th>row 1</th>
            </tr>
            <tr>
              <th>row 1</th>
            </tr>
            <tr>
              <th>row 1</th>
            </tr>
            <tr>
              <th>row 1</th>
            </tr>
            <tr>
              <th>row 1</th>
            </tr>
            <tr>
              <th>row 1</th>
            </tr>
            <tr>
              <th>row 1</th>
            </tr>
            <tr>
              <th>row 1</th>
            </tr>
            <tr>
              <th>row 1</th>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App2;
