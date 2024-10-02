import './App.css';
import { EmployeeInfo } from './features/EmployeeInfo';
import { handleAuth } from './utils/auth';
import { decryptText, encryptText } from './utils/encode';
import { userIdsFromURL } from './utils/userIdsFromURL';
import { useState, useEffect } from 'react';
import SoftSkills from './features/softSkills/SoftSkills';
import HardSkills from './features/hardSkills/HardSkills';
import AdditionalNotes from './features/AdditionalNotes';
import QualityEvaluation from './features/QualityEvaluation';
import dayjs from 'dayjs';
import axios from 'axios';
import AlertDialog from './components/AlertDialog';
import AgreementAlert from './components/AgreementAlert';
import HeaderComponent from './features/HeaderComponent';
import { Button } from 'antd';
import { MoveLeft } from 'lucide-react';
import { ThemeProvider, createTheme, GlobalStyles } from '@mui/material';

const theme = createTheme({
  components: {
    MuiInputBase: {
      defaultProps: {
        disableInjectingGlobalStyles: true,
      },
    },
  },
});

function App() {
  const [kpiStatus, setKpiStatus] = useState('');
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
  const [reviewE, setReviewE] = useState('');
  const [noteE, setNoteE] = useState('');
  const [noteL, setNoteL] = useState('');
  const [noteHR, setNoteHR] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [updateData, setUpdateData] = useState(false);
  const [open, setOpen] = useState(false);

  const evaluatedId = userIdsFromURL();

  function checkProperties(obj) {
    for (const key in obj) {
      if (obj[key] == '' || obj[key] === '0') return false;
    }
    return true;
  }

  const sendData = async (status: string) => {
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
    form.append('soft1input1', encodeURIComponent(softKPINotesSL.item_11));
    form.append('soft1input2', encodeURIComponent(softKPINotesSL.item_12));
    form.append('soft1input3', encodeURIComponent(softKPINotesSL.item_13));
    form.append('soft1input4', encodeURIComponent(softKPINotesSL.item_14));
    form.append('soft1input5', encodeURIComponent(softKPINotesSL.item_15));
    form.append('soft2input1', encodeURIComponent(softKPINotesSL.item_21));
    form.append('soft2input2', encodeURIComponent(softKPINotesSL.item_22));
    form.append('soft2input3', encodeURIComponent(softKPINotesSL.item_23));
    form.append('soft2input4', encodeURIComponent(softKPINotesSL.item_24));
    form.append('soft2input5', encodeURIComponent(softKPINotesSL.item_25));
    form.append('soft3input1', encodeURIComponent(softKPINotesSL.item_31));
    form.append('soft3input2', encodeURIComponent(softKPINotesSL.item_32));
    form.append('soft3input3', encodeURIComponent(softKPINotesSL.item_33));
    form.append('soft3input4', encodeURIComponent(softKPINotesSL.item_34));
    form.append('soft3input5', encodeURIComponent(softKPINotesSL.item_35));
    form.append('soft4input1', encodeURIComponent(softKPINotesSL.item_41));
    form.append('soft4input2', encodeURIComponent(softKPINotesSL.item_42));
    form.append('soft4input3', encodeURIComponent(softKPINotesSL.item_43));
    form.append('soft4input4', encodeURIComponent(softKPINotesSL.item_44));
    form.append('soft4input5', encodeURIComponent(softKPINotesSL.item_45));
    form.append('soft5input1', encodeURIComponent(softKPINotesSL.item_51));
    form.append('soft5input2', encodeURIComponent(softKPINotesSL.item_52));
    form.append('soft5input3', encodeURIComponent(softKPINotesSL.item_53));
    form.append('soft5input4', encodeURIComponent(softKPINotesSL.item_54));
    form.append('soft5input5', encodeURIComponent(softKPINotesSL.item_55));
    form.append(
      'soft1input1empl',
      encodeURIComponent(softKPINotesEmployee.item_11)
    );
    form.append(
      'soft1input2empl',
      encodeURIComponent(softKPINotesEmployee.item_12)
    );
    form.append(
      'soft1input3empl',
      encodeURIComponent(softKPINotesEmployee.item_13)
    );
    form.append(
      'soft1input4empl',
      encodeURIComponent(softKPINotesEmployee.item_14)
    );
    form.append(
      'soft1input5empl',
      encodeURIComponent(softKPINotesEmployee.item_15)
    );
    form.append(
      'soft2input1empl',
      encodeURIComponent(softKPINotesEmployee.item_21)
    );
    form.append(
      'soft2input2empl',
      encodeURIComponent(softKPINotesEmployee.item_22)
    );
    form.append(
      'soft2input3empl',
      encodeURIComponent(softKPINotesEmployee.item_23)
    );
    form.append(
      'soft2input4empl',
      encodeURIComponent(softKPINotesEmployee.item_24)
    );
    form.append(
      'soft2input5empl',
      encodeURIComponent(softKPINotesEmployee.item_25)
    );
    form.append(
      'soft3input1empl',
      encodeURIComponent(softKPINotesEmployee.item_31)
    );
    form.append(
      'soft3input2empl',
      encodeURIComponent(softKPINotesEmployee.item_32)
    );
    form.append(
      'soft3input3empl',
      encodeURIComponent(softKPINotesEmployee.item_33)
    );
    form.append(
      'soft3input4empl',
      encodeURIComponent(softKPINotesEmployee.item_34)
    );
    form.append(
      'soft3input5empl',
      encodeURIComponent(softKPINotesEmployee.item_35)
    );
    form.append(
      'soft4input1empl',
      encodeURIComponent(softKPINotesEmployee.item_41)
    );
    form.append(
      'soft4input2empl',
      encodeURIComponent(softKPINotesEmployee.item_42)
    );
    form.append(
      'soft4input3empl',
      encodeURIComponent(softKPINotesEmployee.item_43)
    );
    form.append(
      'soft4input4empl',
      encodeURIComponent(softKPINotesEmployee.item_44)
    );
    form.append(
      'soft4input5empl',
      encodeURIComponent(softKPINotesEmployee.item_45)
    );
    form.append(
      'soft5input1empl',
      encodeURIComponent(softKPINotesEmployee.item_51)
    );
    form.append(
      'soft5input2empl',
      encodeURIComponent(softKPINotesEmployee.item_52)
    );
    form.append(
      'soft5input3empl',
      encodeURIComponent(softKPINotesEmployee.item_53)
    );
    form.append(
      'soft5input4empl',
      encodeURIComponent(softKPINotesEmployee.item_54)
    );
    form.append(
      'soft5input5empl',
      encodeURIComponent(softKPINotesEmployee.item_55)
    );
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
    form2.append('status', status);
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
    form2.append('reviewe', reviewE);
    form2.append('notee', encodeURIComponent(noteE));
    form2.append('notel', encodeURIComponent(noteL));
    form2.append('notehr', encodeURIComponent(noteHR));
    form2.append('firsttime', String(firstTime));
    form2.append('nexturl', window.nextUrl);

    // for (const pair of form2.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

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

  const sendWorkflow = async (webreportId: number) => {
    try {
      const ticket = await handleAuth();
      const myHeaders = new Headers();

      myHeaders.append('OTCSTicket', ticket);

      const url =
        window.mainUrl +
        `?func=ll&objId=${webreportId}&objAction=RunReport&evaluated=${evaluatedId}&nexturl=${window.nextUrl}`;

      const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      await fetch(url, requestOptions);
    } catch (error) {
      console.log("workflow didn't go good on user employee side :(");
      console.log(error);
    }
  };

  const consoleSomething = () => {
    // console.log(kpiHardValue);
    // console.log(hardKPINotesSL)
    console.log(reviewE);
    console.log(noteE);
    console.log(noteL);
    console.log(noteHR);
  };

  const handleSaveKPI = () => {
    consoleSomething();
    setLoading(true);
    setOpen(true);
    sendData('assigned');
  };

  const handleSendKPI = (webreportId: number) => {
    setWarning(true);
    setLoading(true);
    setOpen(true);
    window.asManager
      ? kpiStatus === 'send by employee'
        ? sendData('in HR')
        : sendData('send by leader')
      : sendData('send by employee');
    sendWorkflow(webreportId);
  };

  useEffect(() => {
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
        setKpiStatus(data.result[0].status);

        setSoftSkillsData({
          soft1_input1:
            data.result[0].soft1_input1 !== '?'
              ? data.result[0].soft1_input1
              : '',
          soft1_input2:
            data.result[0].soft1_input2 !== '?'
              ? data.result[0].soft1_input2
              : '',
          soft1_input3:
            data.result[0].soft1_input3 !== '?'
              ? data.result[0].soft1_input3
              : '',
          soft1_input4:
            data.result[0].soft1_input4 !== '?'
              ? data.result[0].soft1_input4
              : '',
          soft1_input5:
            data.result[0].soft1_input5 !== '?'
              ? data.result[0].soft1_input5
              : '',

          soft2_input1:
            data.result[0].soft2_input1 !== '?'
              ? data.result[0].soft2_input1
              : '',
          soft2_input2:
            data.result[0].soft2_input2 !== '?'
              ? data.result[0].soft2_input2
              : '',
          soft2_input3:
            data.result[0].soft2_input3 !== '?'
              ? data.result[0].soft2_input3
              : '',
          soft2_input4:
            data.result[0].soft2_input4 !== '?'
              ? data.result[0].soft2_input4
              : '',
          soft2_input5:
            data.result[0].soft2_input5 !== '?'
              ? data.result[0].soft2_input5
              : '',

          soft3_input1:
            data.result[0].soft3_input1 !== '?'
              ? data.result[0].soft3_input1
              : '',
          soft3_input2:
            data.result[0].soft3_input2 !== '?'
              ? data.result[0].soft3_input2
              : '',
          soft3_input3:
            data.result[0].soft3_input3 !== '?'
              ? data.result[0].soft3_input3
              : '',
          soft3_input4:
            data.result[0].soft3_input4 !== '?'
              ? data.result[0].soft3_input4
              : '',
          soft3_input5:
            data.result[0].soft3_input5 !== '?'
              ? data.result[0].soft3_input5
              : '',

          soft4_input1:
            data.result[0].soft4_input1 !== '?'
              ? data.result[0].soft4_input1
              : '',
          soft4_input2:
            data.result[0].soft4_input2 !== '?'
              ? data.result[0].soft4_input2
              : '',
          soft4_input3:
            data.result[0].soft4_input3 !== '?'
              ? data.result[0].soft4_input3
              : '',
          soft4_input4:
            data.result[0].soft4_input4 !== '?'
              ? data.result[0].soft4_input4
              : '',
          soft4_input5:
            data.result[0].soft4_input5 !== '?'
              ? data.result[0].soft4_input5
              : '',

          soft5_input1:
            data.result[0].soft5_input1 !== '?'
              ? data.result[0].soft5_input1
              : '',
          soft5_input2:
            data.result[0].soft5_input2 !== '?'
              ? data.result[0].soft5_input2
              : '',
          soft5_input3:
            data.result[0].soft5_input3 !== '?'
              ? data.result[0].soft5_input3
              : '',
          soft5_input4:
            data.result[0].soft5_input4 !== '?'
              ? data.result[0].soft5_input4
              : '',
          soft5_input5:
            data.result[0].soft5_input5 !== '?'
              ? data.result[0].soft5_input5
              : '',
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
          item_11:
            decodeURIComponent(data.result[0].noteItem_11) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_11)
              : '',
          item_12:
            decodeURIComponent(data.result[0].noteItem_12) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_12)
              : '',
          item_13:
            decodeURIComponent(data.result[0].noteItem_13) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_13)
              : '',
          item_14:
            decodeURIComponent(data.result[0].noteItem_14) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_14)
              : '',
          item_15:
            decodeURIComponent(data.result[0].noteItem_15) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_15)
              : '',

          item_21:
            decodeURIComponent(data.result[0].noteItem_21) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_21)
              : '',
          item_22:
            decodeURIComponent(data.result[0].noteItem_22) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_22)
              : '',
          item_23:
            decodeURIComponent(data.result[0].noteItem_23) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_23)
              : '',
          item_24:
            decodeURIComponent(data.result[0].noteItem_24) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_24)
              : '',
          item_25:
            decodeURIComponent(data.result[0].noteItem_25) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_25)
              : '',

          item_31:
            decodeURIComponent(data.result[0].noteItem_31) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_31)
              : '',
          item_32:
            decodeURIComponent(data.result[0].noteItem_32) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_32)
              : '',
          item_33:
            decodeURIComponent(data.result[0].noteItem_33) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_33)
              : '',
          item_34:
            decodeURIComponent(data.result[0].noteItem_34) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_34)
              : '',
          item_35:
            decodeURIComponent(data.result[0].noteItem_35) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_35)
              : '',

          item_41:
            decodeURIComponent(data.result[0].noteItem_41) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_41)
              : '',
          item_42:
            decodeURIComponent(data.result[0].noteItem_42) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_42)
              : '',
          item_43:
            decodeURIComponent(data.result[0].noteItem_43) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_43)
              : '',
          item_44:
            decodeURIComponent(data.result[0].noteItem_44) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_44)
              : '',
          item_45:
            decodeURIComponent(data.result[0].noteItem_45) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_45)
              : '',

          item_51:
            decodeURIComponent(data.result[0].noteItem_51) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_51)
              : '',
          item_52:
            decodeURIComponent(data.result[0].noteItem_52) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_52)
              : '',
          item_53:
            decodeURIComponent(data.result[0].noteItem_53) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_53)
              : '',
          item_54:
            decodeURIComponent(data.result[0].noteItem_54) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_54)
              : '',
          item_55:
            decodeURIComponent(data.result[0].noteItem_55) !== '?'
              ? decodeURIComponent(data.result[0].noteItem_55)
              : '',
        });
        setSoftKPINotesEmployee({
          item_11:
            decodeURIComponent(data.result[0].noteItemEmpl_11) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_11)
              : '',
          item_12:
            decodeURIComponent(data.result[0].noteItemEmpl_12) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_12)
              : '',
          item_13:
            decodeURIComponent(data.result[0].noteItemEmpl_13) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_13)
              : '',
          item_14:
            decodeURIComponent(data.result[0].noteItemEmpl_14) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_14)
              : '',
          item_15:
            decodeURIComponent(data.result[0].noteItemEmpl_15) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_15)
              : '',

          item_21:
            decodeURIComponent(data.result[0].noteItemEmpl_21) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_21)
              : '',
          item_22:
            decodeURIComponent(data.result[0].noteItemEmpl_22) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_22)
              : '',
          item_23:
            decodeURIComponent(data.result[0].noteItemEmpl_23) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_23)
              : '',
          item_24:
            decodeURIComponent(data.result[0].noteItemEmpl_24) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_24)
              : '',
          item_25:
            decodeURIComponent(data.result[0].noteItemEmpl_25) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_25)
              : '',

          item_31:
            decodeURIComponent(data.result[0].noteItemEmpl_31) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_31)
              : '',
          item_32:
            decodeURIComponent(data.result[0].noteItemEmpl_32) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_32)
              : '',
          item_33:
            decodeURIComponent(data.result[0].noteItemEmpl_33) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_33)
              : '',
          item_34:
            decodeURIComponent(data.result[0].noteItemEmpl_34) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_34)
              : '',
          item_35:
            decodeURIComponent(data.result[0].noteItemEmpl_35) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_35)
              : '',

          item_41:
            decodeURIComponent(data.result[0].noteItemEmpl_41) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_41)
              : '',
          item_42:
            decodeURIComponent(data.result[0].noteItemEmpl_42) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_42)
              : '',
          item_43:
            decodeURIComponent(data.result[0].noteItemEmpl_43) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_43)
              : '',
          item_44:
            decodeURIComponent(data.result[0].noteItemEmpl_44) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_44)
              : '',
          item_45:
            decodeURIComponent(data.result[0].noteItemEmpl_45) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_45)
              : '',

          item_51:
            decodeURIComponent(data.result[0].noteItemEmpl_51) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_51)
              : '',
          item_52:
            decodeURIComponent(data.result[0].noteItemEmpl_52) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_52)
              : '',
          item_53:
            decodeURIComponent(data.result[0].noteItemEmpl_53) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_53)
              : '',
          item_54:
            decodeURIComponent(data.result[0].noteItemEmpl_54) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_54)
              : '',
          item_55:
            decodeURIComponent(data.result[0].noteItemEmpl_55) !== '?'
              ? decodeURIComponent(data.result[0].noteItemEmpl_55)
              : '',
        });

        setHardKPINotesEmployee({
          item_11:
            decodeURIComponent(data.result[0].cmhe_11) !== '?'
              ? decodeURIComponent(data.result[0].cmhe_11)
              : '',
          item_13:
            decodeURIComponent(data.result[0].cmhe_13) !== '?'
              ? decodeURIComponent(data.result[0].cmhe_13)
              : '',
          item_21:
            decodeURIComponent(data.result[0].cmhe_21) !== '?'
              ? decodeURIComponent(data.result[0].cmhe_21)
              : '',
          item_23:
            decodeURIComponent(data.result[0].cmhe_23) !== '?'
              ? decodeURIComponent(data.result[0].cmhe_23)
              : '',
          item_31:
            decodeURIComponent(data.result[0].cmhe_31) !== '?'
              ? decodeURIComponent(data.result[0].cmhe_31)
              : '',
          item_33:
            decodeURIComponent(data.result[0].cmhe_33) !== '?'
              ? decodeURIComponent(data.result[0].cmhe_33)
              : '',
          item_41:
            decodeURIComponent(data.result[0].cmhe_41) !== '?'
              ? decodeURIComponent(data.result[0].cmhe_41)
              : '',
          item_43:
            decodeURIComponent(data.result[0].cmhe_43) !== '?'
              ? decodeURIComponent(data.result[0].cmhe_43)
              : '',
          item_51:
            decodeURIComponent(data.result[0].cmhe_51) !== '?'
              ? decodeURIComponent(data.result[0].cmhe_51)
              : '',
          item_53:
            decodeURIComponent(data.result[0].cmhe_53) !== '?'
              ? decodeURIComponent(data.result[0].cmhe_53)
              : '',
          item_61:
            decodeURIComponent(data.result[0].cmhe_61) !== '?'
              ? decodeURIComponent(data.result[0].cmhe_61)
              : '',
          item_63:
            decodeURIComponent(data.result[0].cmhe_63) !== '?'
              ? decodeURIComponent(data.result[0].cmhe_63)
              : '',
          item_71:
            decodeURIComponent(data.result[0].cmhe_71) !== '?'
              ? decodeURIComponent(data.result[0].cmhe_71)
              : '',
          item_73:
            decodeURIComponent(data.result[0].cmhe_73) !== '?'
              ? decodeURIComponent(data.result[0].cmhe_73)
              : '',
        });

        setHardKPINotesSL({
          item_11:
            decodeURIComponent(data.result[0].cmhl_11) !== '?'
              ? decodeURIComponent(data.result[0].cmhl_11)
              : '',
          item_13:
            decodeURIComponent(data.result[0].cmhl_13) !== '?'
              ? decodeURIComponent(data.result[0].cmhl_13)
              : '',
          item_21:
            decodeURIComponent(data.result[0].cmhl_21) !== '?'
              ? decodeURIComponent(data.result[0].cmhl_21)
              : '',
          item_23:
            decodeURIComponent(data.result[0].cmhl_23) !== '?'
              ? decodeURIComponent(data.result[0].cmhl_23)
              : '',
          item_31:
            decodeURIComponent(data.result[0].cmhl_31) !== '?'
              ? decodeURIComponent(data.result[0].cmhl_31)
              : '',
          item_33:
            decodeURIComponent(data.result[0].cmhl_33) !== '?'
              ? decodeURIComponent(data.result[0].cmhl_33)
              : '',
          item_41:
            decodeURIComponent(data.result[0].cmhl_41) !== '?'
              ? decodeURIComponent(data.result[0].cmhl_41)
              : '',
          item_43:
            decodeURIComponent(data.result[0].cmhl_43) !== '?'
              ? decodeURIComponent(data.result[0].cmhl_43)
              : '',
          item_51:
            decodeURIComponent(data.result[0].cmhl_51) !== '?'
              ? decodeURIComponent(data.result[0].cmhl_51)
              : '',
          item_53:
            decodeURIComponent(data.result[0].cmhl_53) !== '?'
              ? decodeURIComponent(data.result[0].cmhl_53)
              : '',
          item_61:
            decodeURIComponent(data.result[0].cmhl_61) !== '?'
              ? decodeURIComponent(data.result[0].cmhl_61)
              : '',
          item_63:
            decodeURIComponent(data.result[0].cmhl_63) !== '?'
              ? decodeURIComponent(data.result[0].cmhl_63)
              : '',
          item_71:
            decodeURIComponent(data.result[0].cmhl_71) !== '?'
              ? decodeURIComponent(data.result[0].cmhl_71)
              : '',
          item_73:
            decodeURIComponent(data.result[0].cmhl_73) !== '?'
              ? decodeURIComponent(data.result[0].cmhl_73)
              : '',
        });
        setEvaluatorInfo({
          id: data.result[0].evaluatorId,
          name: data.result[0].evaluatorName,
          dep: data.result[0].evaluatorDep,
          title: data.result[0].evaluatorTitle,
        });

        setReviewE(
          data.result[0].reviewE !== '?' ? data.result[0].reviewE : ''
        );
        setNoteE(
          decodeURIComponent(data.result[0].noteE) !== '?'
            ? decodeURIComponent(data.result[0].noteE)
            : ''
        );
        setNoteL(
          decodeURIComponent(data.result[0].noteL) !== '?'
            ? decodeURIComponent(data.result[0].noteL)
            : ''
        );
        setNoteHR(
          decodeURIComponent(data.result[0].noteHR) !== '?'
            ? decodeURIComponent(data.result[0].noteHR)
            : ''
        );

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
  }, [updateData]);

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
        <SoftSkills
          softSkillsData={softSkillsData}
          softKPINotesSL={softKPINotesSL}
          softKPINotesEmployee={softKPINotesEmployee}
          softParagraphValue={softParagraphValue}
          setSoftKPINotesSL={setSoftKPINotesSL}
          setSoftKPINotesEmployee={setSoftKPINotesEmployee}
          setSoftParagraphValue={setSoftParagraphValue}
          status={kpiStatus}
        />
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
        status={kpiStatus}
      />
      <AdditionalNotes
        status={kpiStatus}
        setReviewE={setReviewE}
        setNoteE={setNoteE}
        setNoteL={setNoteL}
        setNoteHR={setNoteHR}
        reviewE={reviewE}
        noteE={noteE}
        noteL={noteL}
        noteHR={noteHR}
      />
      <QualityEvaluation />
      {/* <EvalProp /> */}

      <div className="button-container">
        {/* <button onClick={() => consoleSomething()}>Consolidate</button> */}
        <button
          className="enter save"
          disabled={kpiStatus !== 'assigned' && true}
          onClick={() => {
            handleSaveKPI();
            setSuccessMessage('Yadda saxlanıldı!');
          }}
        >
          Yadda Saxla
        </button>
        {kpiStatus === 'assigned' && window.asManager && (
          <button
            className="enter send"
            onClick={() => {
              setOpen(true);
              setSuccessMessage('Qeydlər işçiyə göndərildi!');
              if (
                !checkProperties(kpiHardValue) ||
                !checkProperties(softKPINotesSL) ||
                !checkProperties(softParagraphValue) ||
                hardKPINotesSL.item_13 == '' ||
                hardKPINotesSL.item_23 == '' ||
                hardKPINotesSL.item_33 == '' ||
                hardKPINotesSL.item_43 == '' ||
                hardKPINotesSL.item_53 == '' ||
                hardKPINotesSL.item_63 == '' ||
                hardKPINotesSL.item_73 == ''
              ) {
                setWarning(true);
              } else {
                setWarning(false);
              }
            }}
          >
            Göndər
          </button>
        )}
        {!window.asManager && kpiStatus === 'send by leader' && (
          <button
            className="enter approve"
            onClick={() => {
              setOpen(true);
              setSuccessMessage('Məlumatlar göndərildi!');
              if (reviewE === '' || noteE === '') {
                setWarning(true);
              } else {
                setWarning(false);
              }
            }}
          >
            Göndər
          </button>
        )}
        {window.asManager && kpiStatus === 'send by employee' && (
          <button
            className="enter approve"
            onClick={() => {
              setOpen(true);
              setSuccessMessage('Dəyərləndirmə nəticələri HR-a gönərildi!');
              // if (window.asManager) {
              //   if (
              //     !checkProperties(kpiHardValue) ||
              //     !checkProperties(softKPINotesSL) ||
              //     !checkProperties(softParagraphValue) ||
              //     hardKPINotesSL.item_13 == '' ||
              //     hardKPINotesSL.item_23 == '' ||
              //     hardKPINotesSL.item_33 == '' ||
              //     hardKPINotesSL.item_43 == '' ||
              //     hardKPINotesSL.item_53 == '' ||
              //     hardKPINotesSL.item_63 == '' ||
              //     hardKPINotesSL.item_73 == ''
              //   ) {
              //     setWarning(true);
              //   } else {
              //     setWarning(false);
              //   }
              // } else {
              //   if (
              //     !checkProperties(softKPINotesEmployee) ||
              //     hardKPINotesEmployee.item_13 == '' ||
              //     hardKPINotesEmployee.item_23 == '' ||
              //     hardKPINotesEmployee.item_33 == '' ||
              //     hardKPINotesEmployee.item_43 == '' ||
              //     hardKPINotesEmployee.item_53 == '' ||
              //     hardKPINotesEmployee.item_63 == '' ||
              //     hardKPINotesEmployee.item_73 == ''
              //   ) {
              //     setWarning(true);
              //   } else {
              //     setWarning(false);
              //   }
              // }

              // handleSendKPI(window.wbIds.approveInLeader)
            }}
          >
            Təsdiq Et
          </button>
        )}
      </div>

      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{
            '@keyframes mui-auto-fill': {
              from: { display: 'block' },
            },
            '@keyframes mui-auto-fill-cancel': {
              from: { display: 'block' },
            },
          }}
        />

        <AlertDialog
          open={open}
          error={error}
          loading={loading}
          success={success}
          warning={warning}
          handleSendData={() => {
            if (kpiStatus === 'assigned' && window.asManager) {
              handleSendKPI(window.wbIds.sendInLeader);
              setUpdateData(prev => !prev);
            } else if (!window.asManager && kpiStatus === 'send by leader') {
              handleSendKPI(window.wbIds.approveInEmployee);
              setUpdateData(prev => !prev);
            } else {
              handleSendKPI(window.wbIds.approveInLeader);
              setUpdateData(prev => !prev);
            }
          }}
          handleClose={() => setOpen(false)}
          successMessage={successMessage}
        />
        <AgreementAlert
          open={showAgreementAlert}
          handleClose={() => {
            setShowAgreementAlert(false);
            localStorage.setItem('firstTime', '1');
            setFirstTime(1);
          }}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
