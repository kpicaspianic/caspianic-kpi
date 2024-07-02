import './App.css';
import { EmployeeInfo } from './features/EmployeeInfo';
import { SelectCriteria } from './components/SelectCriteria';
import { handleAuth } from './utils/auth';
import { decryptText, encryptText } from './utils/encode';
import { useState, useEffect, useRef } from 'react';
import { Fragment } from 'react';
import HardSkills from './features/hardSkills/HardSkills';
import AdditionalNotes from './features/AdditionalNotes';
import QualityEvaluation from './features/QualityEvaluation';
// import EvalProp from './features/EvalProp';
import dayjs from 'dayjs';
import axios from 'axios';
import AlertDialog from './components/AlertDialog';
import AgreementAlert from './components/AgreementAlert';
import HeaderComponent from './features/HeaderComponent';
import { Button, Input } from 'antd';
import { MoveLeft } from 'lucide-react';

function App() {
  const [showAgreementAlert, setShowAgreementAlert] = useState(false);
  const [firstTime, setFirstTime] = useState(0);
  const [evaluatorInfo, setEvaluatorInfo] = useState({
    id: '',
    name: '',
    dep: '',
    title: '',
  });
  const [softSkillsData, setSoftSkillsData] = useState({
    soft1_input1: '',
    soft1_input2: '',
    soft1_input3: '',
    soft1_input4: '',
    soft1_input5: '',
    soft2_input1: '',
    soft2_input2: '',
    soft2_input3: '',
    soft2_input4: '',
    soft2_input5: '',
    soft3_input1: '',
    soft3_input2: '',
    soft3_input3: '',
    soft3_input4: '',
    soft3_input5: '',
    soft4_input1: '',
    soft4_input2: '',
    soft4_input3: '',
    soft4_input4: '',
    soft4_input5: '',
    soft5_input1: '',
    soft5_input2: '',
    soft5_input3: '',
    soft5_input4: '',
    soft5_input5: '',
  });
  const [softParagraphValue, setSoftParagraphValue] = useState({
    item_11: '',
    item_12: '',
    item_13: '',
    item_14: '',
    item_15: '',
    item_21: '',
    item_22: '',
    item_23: '',
    item_24: '',
    item_25: '',
    item_31: '',
    item_32: '',
    item_33: '',
    item_34: '',
    item_35: '',
    item_41: '',
    item_42: '',
    item_43: '',
    item_44: '',
    item_45: '',
    item_51: '',
    item_52: '',
    item_53: '',
    item_54: '',
    item_55: '',
  });
  const [kpiHard, setKpiHard] = useState({
    kpi_1: '',
    kpi_2: '',
    kpi_3: '',
    kpi_4: '',
    kpi_5: '',
    kpi_6: '',
    kpi_7: '',
  });
  const [kpiWeight, setKpiWeight] = useState({
    weight_1: '',
    weight_2: '',
    weight_3: '',
    weight_4: '',
    weight_5: '',
    weight_6: '',
    weight_7: '',
  });
  const [kpiHardValue, setKpiHardValue] = useState({
    value_1: '',
    value_2: '',
    value_3: '',
    value_4: '',
    value_5: '',
    value_6: '',
    value_7: '',
  });
  const [softKPINotesSL, setSoftKPINotesSL] = useState({
    item_11: '',
    item_12: '',
    item_13: '',
    item_14: '',
    item_15: '',
    item_21: '',
    item_22: '',
    item_23: '',
    item_24: '',
    item_25: '',
    item_31: '',
    item_32: '',
    item_33: '',
    item_34: '',
    item_35: '',
    item_41: '',
    item_42: '',
    item_43: '',
    item_44: '',
    item_45: '',
    item_51: '',
    item_52: '',
    item_53: '',
    item_54: '',
    item_55: '',
  });
  const [softKPINotesEmployee, setSoftKPINotesEmployee] = useState({
    item_11: '',
    item_12: '',
    item_13: '',
    item_14: '',
    item_15: '',
    item_21: '',
    item_22: '',
    item_23: '',
    item_24: '',
    item_25: '',
    item_31: '',
    item_32: '',
    item_33: '',
    item_34: '',
    item_35: '',
    item_41: '',
    item_42: '',
    item_43: '',
    item_44: '',
    item_45: '',
    item_51: '',
    item_52: '',
    item_53: '',
    item_54: '',
    item_55: '',
  });
  const [hardKPINotesSL, setHardKPINotesSL]: any = useState({
    item_11: '',
    item_12: '',
    item_13: '',
    item_21: '',
    item_22: '',
    item_23: '',
    item_31: '',
    item_32: '',
    item_33: '',
    item_41: '',
    item_42: '',
    item_43: '',
    item_51: '',
    item_52: '',
    item_53: '',
    item_61: '',
    item_62: '',
    item_63: '',
    item_71: '',
    item_72: '',
    item_73: '',
  });
  const [hardKPINotesEmployee, setHardKPINotesEmployee]: any = useState({
    item_11: '',
    item_12: '',
    item_13: '',
    item_21: '',
    item_22: '',
    item_23: '',
    item_31: '',
    item_32: '',
    item_33: '',
    item_41: '',
    item_42: '',
    item_43: '',
    item_51: '',
    item_52: '',
    item_53: '',
    item_61: '',
    item_62: '',
    item_63: '',
    item_71: '',
    item_72: '',
    item_73: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const thRef = useRef(null);
  const tdRefs_1 = useRef([]);
  const tdRefs_2 = useRef([]);
  const tdRefs_3 = useRef([]);
  const tdRefs_4 = useRef([]);
  const tdRefs_5 = useRef([]);
  const firstRefs = useRef([]);

  const { TextArea } = Input;

  const sendData = async () => {
    console.log(hardKPINotesSL);
    const evaluatedId = userIdsFromURL();
    const evaluatorId = evaluatorInfo.id;
    const currentDate = new Date();
    const formattedCurrentDate = dayjs(currentDate).format(
      'ddd MMM DD HH:mm:ss YYYY'
    );

    const ticket = await handleAuth();
    const myHeaders: any = new Headers();
    myHeaders.append('OTCSTicket', ticket);
    myHeaders.append('Content-Type', 'multipart/form-data');

    const form = new FormData();
    form.append('func', 'll');
    form.append('objId', '1565301');
    form.append('objAction', 'RunReport');
    softParagraphValue.item_11 &&
      form.append(
        'res1input1',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_11)
      );
    softParagraphValue.item_12 &&
      form.append(
        'res1input2',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_12)
      );
    softParagraphValue.item_13 &&
      form.append(
        'res1input3',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_13)
      );
    softParagraphValue.item_14 &&
      form.append(
        'res1input4',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_14)
      );
    softParagraphValue.item_15 &&
      form.append(
        'res1input5',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_15)
      );
    softParagraphValue.item_21 &&
      form.append(
        'res2input1',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_21)
      );
    softParagraphValue.item_22 &&
      form.append(
        'res2input2',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_22)
      );
    softParagraphValue.item_23 &&
      form.append(
        'res2input3',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_23)
      );
    softParagraphValue.item_24 &&
      form.append(
        'res2input4',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_24)
      );
    softParagraphValue.item_25 &&
      form.append(
        'res2input5',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_25)
      );
    softParagraphValue.item_31 &&
      form.append(
        'res3input1',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_31)
      );
    softParagraphValue.item_32 &&
      form.append(
        'res3input2',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_32)
      );
    softParagraphValue.item_33 &&
      form.append(
        'res3input3',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_33)
      );
    softParagraphValue.item_34 &&
      form.append(
        'res3input4',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_34)
      );
    softParagraphValue.item_35 &&
      form.append(
        'res3input5',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_35)
      );
    softParagraphValue.item_41 &&
      form.append(
        'res4input1',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_41)
      );
    softParagraphValue.item_42 &&
      form.append(
        'res4input2',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_42)
      );
    softParagraphValue.item_43 &&
      form.append(
        'res4input3',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_43)
      );
    softParagraphValue.item_44 &&
      form.append(
        'res4input4',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_44)
      );
    softParagraphValue.item_45 &&
      form.append(
        'res4input5',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_45)
      );
    softParagraphValue.item_51 &&
      form.append(
        'res5input1',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_51)
      );
    softParagraphValue.item_52 &&
      form.append(
        'res5input2',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_52)
      );
    softParagraphValue.item_53 &&
      form.append(
        'res5input3',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_53)
      );
    softParagraphValue.item_54 &&
      form.append(
        'res5input4',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_54)
      );
    softParagraphValue.item_55 &&
      form.append(
        'res5input5',
        encryptText(import.meta.env.VITE_PASSWORD, softParagraphValue.item_55)
      );
    form.append('soft1input1_multiline', softSkillsData.soft1_input1);
    form.append('soft1input2_multiline', softSkillsData.soft1_input2);
    form.append('soft1input3_multiline', softSkillsData.soft1_input3);
    form.append('soft1input4_multiline', softSkillsData.soft1_input4);
    form.append('soft1input5_multiline', softSkillsData.soft1_input5);
    form.append('soft2input1_multiline', softSkillsData.soft2_input1);
    form.append('soft2input2_multiline', softSkillsData.soft2_input2);
    form.append('soft2input3_multiline', softSkillsData.soft2_input3);
    form.append('soft2input4_multiline', softSkillsData.soft2_input4);
    form.append('soft2input5_multiline', softSkillsData.soft2_input5);
    form.append('soft3input1_multiline', softSkillsData.soft3_input1);
    form.append('soft3input2_multiline', softSkillsData.soft3_input2);
    form.append('soft3input3_multiline', softSkillsData.soft3_input3);
    form.append('soft3input4_multiline', softSkillsData.soft3_input4);
    form.append('soft3input5_multiline', softSkillsData.soft3_input5);
    form.append('soft4input1_multiline', softSkillsData.soft4_input1);
    form.append('soft4input2_multiline', softSkillsData.soft4_input2);
    form.append('soft4input3_multiline', softSkillsData.soft4_input3);
    form.append('soft4input4_multiline', softSkillsData.soft4_input4);
    form.append('soft4input5_multiline', softSkillsData.soft4_input5);
    form.append('soft5input1_multiline', softSkillsData.soft5_input1);
    form.append('soft5input2_multiline', softSkillsData.soft5_input2);
    form.append('soft5input3_multiline', softSkillsData.soft5_input3);
    form.append('soft5input4_multiline', softSkillsData.soft5_input4);
    form.append('soft5input5_multiline', softSkillsData.soft5_input5);
    form.append('soft1input1', softKPINotesSL.item_11);
    form.append('soft1input2', softKPINotesSL.item_12);
    form.append('soft1input3', softKPINotesSL.item_13);
    form.append('soft1input4', softKPINotesSL.item_14);
    form.append('soft1input5', softKPINotesSL.item_15);
    form.append('soft2input1', softKPINotesSL.item_21);
    form.append('soft2input2', softKPINotesSL.item_22);
    form.append('soft2input3', softKPINotesSL.item_23);
    form.append('soft2input4', softKPINotesSL.item_24);
    form.append('soft2input5', softKPINotesSL.item_25);
    form.append('soft3input1', softKPINotesSL.item_31);
    form.append('soft3input2', softKPINotesSL.item_32);
    form.append('soft3input3', softKPINotesSL.item_33);
    form.append('soft3input4', softKPINotesSL.item_34);
    form.append('soft3input5', softKPINotesSL.item_35);
    form.append('soft4input1', softKPINotesSL.item_41);
    form.append('soft4input2', softKPINotesSL.item_42);
    form.append('soft4input3', softKPINotesSL.item_43);
    form.append('soft4input4', softKPINotesSL.item_44);
    form.append('soft4input5', softKPINotesSL.item_45);
    form.append('soft5input1', softKPINotesSL.item_51);
    form.append('soft5input2', softKPINotesSL.item_52);
    form.append('soft5input3', softKPINotesSL.item_53);
    form.append('soft5input4', softKPINotesSL.item_54);
    form.append('soft5input5', softKPINotesSL.item_55);
    form.append('soft1input1empl', softKPINotesEmployee.item_11);
    form.append('soft1input2empl', softKPINotesEmployee.item_12);
    form.append('soft1input3empl', softKPINotesEmployee.item_13);
    form.append('soft1input4empl', softKPINotesEmployee.item_14);
    form.append('soft1input5empl', softKPINotesEmployee.item_15);
    form.append('soft2input1empl', softKPINotesEmployee.item_21);
    form.append('soft2input2empl', softKPINotesEmployee.item_22);
    form.append('soft2input3empl', softKPINotesEmployee.item_23);
    form.append('soft2input4empl', softKPINotesEmployee.item_24);
    form.append('soft2input5empl', softKPINotesEmployee.item_25);
    form.append('soft3input1empl', softKPINotesEmployee.item_31);
    form.append('soft3input2empl', softKPINotesEmployee.item_32);
    form.append('soft3input3empl', softKPINotesEmployee.item_33);
    form.append('soft3input4empl', softKPINotesEmployee.item_34);
    form.append('soft3input5empl', softKPINotesEmployee.item_35);
    form.append('soft4input1empl', softKPINotesEmployee.item_41);
    form.append('soft4input2empl', softKPINotesEmployee.item_42);
    form.append('soft4input3empl', softKPINotesEmployee.item_43);
    form.append('soft4input4empl', softKPINotesEmployee.item_44);
    form.append('soft4input5empl', softKPINotesEmployee.item_45);
    form.append('soft5input1empl', softKPINotesEmployee.item_51);
    form.append('soft5input2empl', softKPINotesEmployee.item_52);
    form.append('soft5input3empl', softKPINotesEmployee.item_53);
    form.append('soft5input4empl', softKPINotesEmployee.item_54);
    form.append('soft5input5empl', softKPINotesEmployee.item_55);
    form.append('evaluated', evaluatedId);
    form.append('evaluator', evaluatorId);
    form.append('enterdate', formattedCurrentDate);
    form.append('type', 'SL');
    form.append('evperiod', '01-05-2024 : 31-10-2024');
    form.append('nexturl', window.nextUrl);

    const form2 = new FormData();
    form2.append('func', 'll');
    form2.append('objId', '878853');
    form2.append('objAction', 'RunReport');
    form2.append('evaluated', evaluatedId);
    form2.append('evaluator', evaluatorId);
    form2.append('enteredate', formattedCurrentDate);
    form2.append('evperiod', '01-05-2024 : 31-10-2024');
    form2.append('status', 'assigned');
    form2.append('type', '');
    form2.append('kpi1', encodeURIComponent(kpiHard.kpi_1));
    form2.append('kpi2', encodeURIComponent(kpiHard.kpi_2));
    form2.append('kpi3', encodeURIComponent(kpiHard.kpi_3));
    form2.append('kpi4', encodeURIComponent(kpiHard.kpi_4));
    form2.append('kpi5', encodeURIComponent(kpiHard.kpi_5));
    form2.append('kpi6', encodeURIComponent(kpiHard.kpi_6));
    form2.append('kpi7', encodeURIComponent(kpiHard.kpi_7));
    form2.append('weight1', kpiWeight.weight_1);
    form2.append('weight2', kpiWeight.weight_2);
    form2.append('weight3', kpiWeight.weight_3);
    form2.append('weight4', kpiWeight.weight_4);
    form2.append('weight5', kpiWeight.weight_5);
    form2.append('weight6', kpiWeight.weight_6);
    form2.append('weight7', kpiWeight.weight_7);
    form2.append('cmhe11', encodeURIComponent(hardKPINotesEmployee.item_11));
    form2.append('cmhe13', encodeURIComponent(hardKPINotesEmployee.item_13));
    form2.append('cmhe21', encodeURIComponent(hardKPINotesEmployee.item_21));
    form2.append('cmhe23', encodeURIComponent(hardKPINotesEmployee.item_23));
    form2.append('cmhe31', encodeURIComponent(hardKPINotesEmployee.item_31));
    form2.append('cmhe33', encodeURIComponent(hardKPINotesEmployee.item_33));
    form2.append('cmhe41', encodeURIComponent(hardKPINotesEmployee.item_41));
    form2.append('cmhe43', encodeURIComponent(hardKPINotesEmployee.item_43));
    form2.append('cmhe51', encodeURIComponent(hardKPINotesEmployee.item_51));
    form2.append('cmhe53', encodeURIComponent(hardKPINotesEmployee.item_53));
    form2.append('cmhe61', encodeURIComponent(hardKPINotesEmployee.item_61));
    form2.append('cmhe63', encodeURIComponent(hardKPINotesEmployee.item_63));
    form2.append('cmhe71', encodeURIComponent(hardKPINotesEmployee.item_71));
    form2.append('cmhe73', encodeURIComponent(hardKPINotesEmployee.item_73));
    form2.append('cmhl11', encodeURIComponent(hardKPINotesSL.item_11));
    form2.append('cmhl13', encodeURIComponent(hardKPINotesSL.item_13));
    form2.append('cmhl21', encodeURIComponent(hardKPINotesSL.item_21));
    form2.append('cmhl23', encodeURIComponent(hardKPINotesSL.item_23));
    form2.append('cmhl31', encodeURIComponent(hardKPINotesSL.item_31));
    form2.append('cmhl33', encodeURIComponent(hardKPINotesSL.item_33));
    form2.append('cmhl41', encodeURIComponent(hardKPINotesSL.item_41));
    form2.append('cmhl43', encodeURIComponent(hardKPINotesSL.item_43));
    form2.append('cmhl51', encodeURIComponent(hardKPINotesSL.item_51));
    form2.append('cmhl53', encodeURIComponent(hardKPINotesSL.item_53));
    form2.append('cmhl61', encodeURIComponent(hardKPINotesSL.item_61));
    form2.append('cmhl63', encodeURIComponent(hardKPINotesSL.item_63));
    form2.append('cmhl71', encodeURIComponent(hardKPINotesSL.item_71));
    form2.append('cmhl73', encodeURIComponent(hardKPINotesSL.item_73));
    kpiHardValue.value_1 &&
      form2.append(
        'resh1',
        encryptText(import.meta.env.VITE_PASSWORD, kpiHardValue.value_1)
      );
    kpiHardValue.value_2 &&
      form2.append(
        'resh2',
        encryptText(import.meta.env.VITE_PASSWORD, kpiHardValue.value_2)
      );
    kpiHardValue.value_3 &&
      form2.append(
        'resh3',
        encryptText(import.meta.env.VITE_PASSWORD, kpiHardValue.value_3)
      );
    kpiHardValue.value_4 &&
      form2.append(
        'resh4',
        encryptText(import.meta.env.VITE_PASSWORD, kpiHardValue.value_4)
      );
    kpiHardValue.value_5 &&
      form2.append(
        'resh5',
        encryptText(import.meta.env.VITE_PASSWORD, kpiHardValue.value_5)
      );
    kpiHardValue.value_6 &&
      form2.append(
        'resh6',
        encryptText(import.meta.env.VITE_PASSWORD, kpiHardValue.value_6)
      );
    kpiHardValue.value_7 &&
      form2.append(
        'resh7',
        encryptText(import.meta.env.VITE_PASSWORD, kpiHardValue.value_7)
      );
    form2.append('firsttime', String(firstTime));
    form2.append('nexturl', window.nextUrl);

    for (const pair of form2.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    // .all([
    //   {
    //     method: 'POST',
    //     url: window.mainUrl,
    //     data: form,
    //     headers: myHeaders,
    //   },
    //   {
    //     method: 'POST',
    //     url: window.mainUrl,
    //     data: form2,
    //     headers: myHeaders,
    //   },
    // ])

    try {
      const request1 = axios.post(window.mainUrl, form, { headers: myHeaders });
      const request2 = axios.post(window.mainUrl, form2, {
        headers: myHeaders,
      });

      const [response1, response2] = await axios.all([request1, request2]);
      setSuccess(true);

      console.log(response1, response2);
      // await axios({
      //   method: 'POST',
      //   url: window.mainUrl,
      //   data: form,
      //   headers: myHeaders,
      // })
      //   .then(response => response)
      //   .then(data => {
      //     // setLoading(false);
      //     setSuccess(true);
      //     console.log(data);
      //     return data;
      //   });
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  // const sendHardSkillsData = async () => {
  //   const { evaluatedId, evaluatorId } = userIdsFromURL();
  //   const currentDate = new Date();
  //   const formattedCurrentDate = dayjs(currentDate).format(
  //     'ddd MMM DD HH:mm:ss YYYY'
  //   );

  //   const ticket = await handleAuth();
  //   const myHeaders = new Headers();
  //   myHeaders.append('OTCSTicket', ticket);
  //   myHeaders.append('Content-Type', 'multipart/form-data');

  // };

  const consoleSomething = () => {
    // console.log(kpiHardValue);
    console.log(hardKPINotesSL);
  };

  const userIdsFromURL = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const evaluatedId = urlParams.get('evaluated');

    return evaluatedId;
  };

  const handleSaveKPI = () => {
    consoleSomething();
    setLoading(true);
    setOpen(true);
    sendData();
  };

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

  useEffect(() => {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);
    const evaluatedId = userIdsFromURL();

    const getSoftSkillsData = async () => {
      const ticket = await handleAuth();
      const myHeaders = new Headers();
      myHeaders.append('OTCSTicket', ticket);

      const url = `${window.mainUrl}/api/v1/nodes/1526696/output?format=json&evaluated=${evaluatedId}`;
      const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      const result = await fetch(url, requestOptions);
      let data = await result.json();
      data = JSON.parse(data.data);
      console.log(data);

      if (data.result.length > 1) {
        setSoftSkillsData({
          soft1_input1: data.result[0].soft1_input1,
          soft1_input2: data.result[0].soft1_input2,
          soft1_input3: data.result[0].soft1_input3,
          soft1_input4: data.result[0].soft1_input4,
          soft1_input5: data.result[0].soft1_input5,
          soft2_input1: data.result[0].soft2_input1,
          soft2_input2: data.result[0].soft2_input2,
          soft2_input3: data.result[0].soft2_input3,
          soft2_input4: data.result[0].soft2_input4,
          soft2_input5: data.result[0].soft2_input5,
          soft3_input1: data.result[0].soft3_input1,
          soft3_input2: data.result[0].soft3_input2,
          soft3_input3: data.result[0].soft3_input3,
          soft3_input4: data.result[0].soft3_input4,
          soft3_input5: data.result[0].soft3_input5,
          soft4_input1: data.result[0].soft4_input1,
          soft4_input2: data.result[0].soft4_input2,
          soft4_input3: data.result[0].soft4_input3,
          soft4_input4: data.result[0].soft4_input4,
          soft4_input5: data.result[0].soft4_input5,
          soft5_input1: data.result[0].soft5_input1,
          soft5_input2: data.result[0].soft5_input2,
          soft5_input3: data.result[0].soft5_input3,
          soft5_input4: data.result[0].soft5_input4,
          soft5_input5: data.result[0].soft5_input5,
        });
        setKpiHard({
          kpi_1: decodeURIComponent(data.result[0].kpiHard_1),
          kpi_2: decodeURIComponent(data.result[0].kpiHard_2),
          kpi_3: decodeURIComponent(data.result[0].kpiHard_3),
          kpi_4: decodeURIComponent(data.result[0].kpiHard_4),
          kpi_5: decodeURIComponent(data.result[0].kpiHard_5),
          kpi_6: decodeURIComponent(data.result[0].kpiHard_6),
          kpi_7: decodeURIComponent(data.result[0].kpiHard_7),
        });
        setKpiHardValue({
          value_1: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].resh_1
          ),
          value_2: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].resh_2
          ),
          value_3: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].resh_3
          ),
          value_4: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].resh_4
          ),
          value_5: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].resh_5
          ),
          value_6: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].resh_6
          ),
          value_7: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].resh_7
          ),
        });
        setKpiWeight({
          weight_1: data.result[0].weight_1,
          weight_2: data.result[0].weight_2,
          weight_3: data.result[0].weight_3,
          weight_4: data.result[0].weight_4,
          weight_5: data.result[0].weight_5,
          weight_6: data.result[0].weight_6,
          weight_7: data.result[0].weight_7,
        });
        setSoftParagraphValue({
          item_11: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res1_input1
          ),
          item_12: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res1_input2
          ),
          item_13: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res1_input3
          ),
          item_14: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res1_input4
          ),
          item_15: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res1_input5
          ),
          item_21: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res2_input1
          ),
          item_22: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res2_input2
          ),
          item_23: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res2_input3
          ),
          item_24: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res2_input4
          ),
          item_25: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res2_input5
          ),
          item_31: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res3_input1
          ),
          item_32: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res3_input2
          ),
          item_33: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res3_input3
          ),
          item_34: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res3_input4
          ),
          item_35: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res3_input5
          ),
          item_41: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res4_input1
          ),
          item_42: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res4_input2
          ),
          item_43: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res4_input3
          ),
          item_44: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res4_input4
          ),
          item_45: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res4_input5
          ),
          item_51: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res5_input1
          ),
          item_52: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res5_input2
          ),
          item_53: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res5_input3
          ),
          item_54: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res5_input4
          ),
          item_55: decryptText(
            import.meta.env.VITE_PASSWORD,
            data.result[0].res5_input5
          ),
        });

        setSoftKPINotesSL({
          item_11: data.result[0].noteItem_11,
          item_12: data.result[0].noteItem_12,
          item_13: data.result[0].noteItem_13,
          item_14: data.result[0].noteItem_14,
          item_15: data.result[0].noteItem_15,
          item_21: data.result[0].noteItem_21,
          item_22: data.result[0].noteItem_22,
          item_23: data.result[0].noteItem_23,
          item_24: data.result[0].noteItem_24,
          item_25: data.result[0].noteItem_25,
          item_31: data.result[0].noteItem_31,
          item_32: data.result[0].noteItem_32,
          item_33: data.result[0].noteItem_33,
          item_34: data.result[0].noteItem_34,
          item_35: data.result[0].noteItem_35,
          item_41: data.result[0].noteItem_41,
          item_42: data.result[0].noteItem_42,
          item_43: data.result[0].noteItem_43,
          item_44: data.result[0].noteItem_44,
          item_45: data.result[0].noteItem_45,
          item_51: data.result[0].noteItem_51,
          item_52: data.result[0].noteItem_52,
          item_53: data.result[0].noteItem_53,
          item_54: data.result[0].noteItem_54,
          item_55: data.result[0].noteItem_55,
        });
        setSoftKPINotesEmployee({
          item_11: data.result[0].noteItemEmpl_11,
          item_12: data.result[0].noteItemEmpl_12,
          item_13: data.result[0].noteItemEmpl_13,
          item_14: data.result[0].noteItemEmpl_14,
          item_15: data.result[0].noteItemEmpl_15,
          item_21: data.result[0].noteItemEmpl_21,
          item_22: data.result[0].noteItemEmpl_22,
          item_23: data.result[0].noteItemEmpl_23,
          item_24: data.result[0].noteItemEmpl_24,
          item_25: data.result[0].noteItemEmpl_25,
          item_31: data.result[0].noteItemEmpl_31,
          item_32: data.result[0].noteItemEmpl_32,
          item_33: data.result[0].noteItemEmpl_33,
          item_34: data.result[0].noteItemEmpl_34,
          item_35: data.result[0].noteItemEmpl_35,
          item_41: data.result[0].noteItemEmpl_41,
          item_42: data.result[0].noteItemEmpl_42,
          item_43: data.result[0].noteItemEmpl_43,
          item_44: data.result[0].noteItemEmpl_44,
          item_45: data.result[0].noteItemEmpl_45,
          item_51: data.result[0].noteItemEmpl_51,
          item_52: data.result[0].noteItemEmpl_52,
          item_53: data.result[0].noteItemEmpl_53,
          item_54: data.result[0].noteItemEmpl_54,
          item_55: data.result[0].noteItemEmpl_55,
        });

        setHardKPINotesEmployee({
          item_11: decodeURIComponent(data.result[0].cmhe_11),
          item_13: decodeURIComponent(data.result[0].cmhe_13),
          item_21: decodeURIComponent(data.result[0].cmhe_21),
          item_23: decodeURIComponent(data.result[0].cmhe_23),
          item_31: decodeURIComponent(data.result[0].cmhe_31),
          item_33: decodeURIComponent(data.result[0].cmhe_33),
          item_41: decodeURIComponent(data.result[0].cmhe_41),
          item_43: decodeURIComponent(data.result[0].cmhe_43),
          item_51: decodeURIComponent(data.result[0].cmhe_51),
          item_53: decodeURIComponent(data.result[0].cmhe_53),
          item_61: decodeURIComponent(data.result[0].cmhe_61),
          item_63: decodeURIComponent(data.result[0].cmhe_63),
          item_71: decodeURIComponent(data.result[0].cmhe_71),
          item_73: decodeURIComponent(data.result[0].cmhe_73),
        });

        setHardKPINotesSL({
          item_11: decodeURIComponent(data.result[0].cmhl_11),
          item_13: decodeURIComponent(data.result[0].cmhl_13),
          item_21: decodeURIComponent(data.result[0].cmhl_21),
          item_23: decodeURIComponent(data.result[0].cmhl_23),
          item_31: decodeURIComponent(data.result[0].cmhl_31),
          item_33: decodeURIComponent(data.result[0].cmhl_33),
          item_41: decodeURIComponent(data.result[0].cmhl_41),
          item_43: decodeURIComponent(data.result[0].cmhl_43),
          item_51: decodeURIComponent(data.result[0].cmhl_51),
          item_53: decodeURIComponent(data.result[0].cmhl_53),
          item_61: decodeURIComponent(data.result[0].cmhl_61),
          item_63: decodeURIComponent(data.result[0].cmhl_63),
          item_71: decodeURIComponent(data.result[0].cmhl_71),
          item_73: decodeURIComponent(data.result[0].cmhl_73),
        });
        setEvaluatorInfo({
          id: data.result[0].evaluatorId,
          name: data.result[0].evaluatorName,
          dep: data.result[0].evaluatorDep,
          title: data.result[0].evaluatorTitle,
        });

        const first = localStorage.getItem('firstTime');
        if (first !== '1' && window.checkFirst === true) {
          setShowAgreementAlert(true);
        }
      }
    };

    // const generateKey = async () => {
    //   const cryptoKey = await window.crypto.subtle.generateKey(
    //     {
    //       name: 'AES-GCM',
    //       length: 256,
    //     },
    //     true,
    //     ['encrypt', 'decrypt']
    //   );

    //   setKey(cryptoKey);
    // };

    getSoftSkillsData();
    // generateKey();

    return () => {
      window.removeEventListener('scroll', checkPosition);
      window.removeEventListener('resize', checkPosition);
    };
  }, []);

  const elements = [];

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

  console.log(softKPINotesEmployee);

  return (
    <>
      <HeaderComponent />
      <Button
        type="text"
        icon={<MoveLeft size={20} />}
        className="button-back"
        href={window.mainUrl}
      >
        Geri dön
      </Button>
      <EmployeeInfo evaluatorInfo={evaluatorInfo} />
      {window.currentRole === 'EMPLOYEE' && (
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
                            readOnly={!window.asManager ? true : false}
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
                        <SelectCriteria
                          setParagraph={setSoftParagraphValue}
                          key={el}
                          number={`${idx + 1}1`}
                          res={el.results[`res_${idx + 1}1`]}
                          disabled={!window.asManager}
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
                            readOnly={!window.asManager ? true : false}
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
                        <div className="select-div">
                          <SelectCriteria
                            setParagraph={setSoftParagraphValue}
                            key={el}
                            number={`${idx + 1}2`}
                            res={el.results[`res_${idx + 1}2`]}
                            disabled={!window.asManager}
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
                            readOnly={!window.asManager ? true : false}
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
                        <div className="select-div">
                          <SelectCriteria
                            setParagraph={setSoftParagraphValue}
                            key={el}
                            number={`${idx + 1}3`}
                            res={el.results[`res_${idx + 1}3`]}
                            disabled={!window.asManager}
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
                            readOnly={!window.asManager ? true : false}
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
                        <div className="select-div">
                          <SelectCriteria
                            setParagraph={setSoftParagraphValue}
                            key={el}
                            number={`${idx + 1}4`}
                            res={el.results[`res_${idx + 1}4`]}
                            disabled={!window.asManager}
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
                            readOnly={!window.asManager ? true : false}
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
                        <div className="select-div">
                          <SelectCriteria
                            setParagraph={setSoftParagraphValue}
                            disabled={!window.asManager}
                            key={el}
                            number={`${idx + 1}5`}
                            res={el.results[`res_${idx + 1}5`]}
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
      )}
      <HardSkills
        kpiHard={kpiHard}
        kpiWeight={kpiWeight}
        kpiHardValue={kpiHardValue}
        setKpiHardValue={setKpiHardValue}
        setHardKPINotesSL={setHardKPINotesSL}
        setHardKPINotesEmployee={setHardKPINotesEmployee}
        kpiNotesEmployee={hardKPINotesEmployee}
        kpiNotesSL={hardKPINotesSL}
      />
      <AdditionalNotes />
      <QualityEvaluation />
      {/* <EvalProp /> */}

      <div className="button-container">
        <button className="enter save" onClick={handleSaveKPI}>
          Yadda Saxla
        </button>
        {/* <button className="enter send" onClick={consoleSomething}>
          Göndər
        </button>
        <button className="enter approve">Təsdiq Et</button> */}
      </div>

      <AlertDialog
        open={open}
        error={error}
        loading={loading}
        success={success}
        handleClose={() => setOpen(false)}
      />
      <AgreementAlert
        open={showAgreementAlert}
        handleClose={() => {
          setShowAgreementAlert(false);
          localStorage.setItem('firstTime', '1');
          setFirstTime(1);
        }}
      />
    </>
  );
}

export default App;
