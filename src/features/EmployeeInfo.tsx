import '../App.css';
import { useState, useEffect } from 'react';
import { handleAuth } from '../utils/auth';
import { userIdsFromURL } from '../utils/userIdsFromURL';

export const EmployeeInfo = ({ evaluatorInfo }) => {
  const [evaluated, setEvaluated] = useState({
    userId: '',
    fullname: '',
    position: '',
    department: '',
  });
  // const [evaluator, setEvaluator] = useState({
  //   userId: '',
  //   fullname: '',
  //   department: '',
  // });

  useEffect(() => {
    const evaluatedId = userIdsFromURL();
    setEvaluated(prevValue => ({ ...prevValue, userId: evaluatedId }));

    // const evaluatorId = evaluatorInfo.id;
    // setEvaluator(prevValue => ({ ...prevValue, userId: evaluatorId }));

    const getEvaluatedInfo = async userId => {
      const ticket = await handleAuth();

      const myHeader = new Headers();
      myHeader.append('OTCSTicket', ticket);

      const reqUrl =
        window.mainUrl +
        '/api/v1/nodes/1564750/output?format=json&evaluatedId=' +
        userId;
      '&nexturl=' + window.nextUrl;

      try {
        const result = await fetch(reqUrl, {
          method: 'GET',
          headers: myHeader,
          redirect: 'follow',
        });

        const json = await result.json();
        const data = JSON.parse(json.data);

        setEvaluated(prevValue => ({
          ...prevValue,
          fullname: data.fullname,
          position: data.position,
          department: data.department,
        }));
      } catch (error) {
        console.error(error);
      }
    };

    // const getEvaluatorInfo = async userId => {
    //   const ticket = await handleAuth();

    //   const myHeader = new Headers();
    //   myHeader.append('OTCSTicket', ticket);

    //   const reqUrl =
    //     window.mainUrl +
    //     '/api/v1/nodes/1564750/output?format=json&evaluatedId=' +
    //     userId;
    //   '&nexturl=' + window.nextUrl;

    //   try {
    //     const result = await fetch(reqUrl, {
    //       method: 'GET',
    //       headers: myHeader,
    //       redirect: 'follow',
    //     });

    //     const json = await result.json();
    //     const data = JSON.parse(json.data);

    //     setEvaluator(prevValue => ({
    //       ...prevValue,
    //       fullname: data.fullname,
    //       department: data.department,
    //     }));
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    getEvaluatedInfo(evaluatedId);
    // getEvaluatorInfo(evaluatorId);
  }, []);

  return (
    <section className="employee">
      <div className="employee-detail">
        <div className="employee-detail--rows">
          <p className="employee-detail--label">Əməkdaşın adı, soyadı:</p>
          <p className="employee-detail--input">{evaluated.fullname}</p>
        </div>
        <div className="employee-detail--rows">
          <p className="employee-detail--label">Əməkdaşın vəzifəsi:</p>
          <p className="employee-detail--input">{evaluated.position}</p>
        </div>
        <div className="employee-detail--rows">
          <p className="employee-detail--label">Əməkdaşın departamenti:</p>
          <p className="employee-detail--input">{evaluated.department}</p>
        </div>
      </div>
      <div className="employee-detail">
        <div className="employee-detail--rows">
          <p className="employee-detail--label">Dəyərləndirmə periodu:</p>
          <p className="employee-detail--input">01-05-2024 : 31-10-2024</p>
        </div>
        <div className="employee-detail--rows">
          <p className="employee-detail--label">
            Dəyərləndirən rəhbərin adı, soyadı:
          </p>
          <p className="employee-detail--input">{evaluatorInfo.name}</p>
        </div>
        <div className="employee-detail--rows">
          <p className="employee-detail--label">
            Dəyərləndirən rəhbərin departamenti:
          </p>
          <p className="employee-detail--input">{evaluatorInfo.dep}</p>
        </div>
      </div>
    </section>
  );
};
