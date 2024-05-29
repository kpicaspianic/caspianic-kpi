export const handleAuth = async () => {
  let ticket: string;

  if (window.location.hostname === 'localhost') {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const urlEncoded = new URLSearchParams();
    urlEncoded.append('username', 'javid.gasimov');
    urlEncoded.append('password', 'locale4321');

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: urlEncoded,
      redirect: 'follow',
    };

    try {
      const response = await fetch(
        `${window.mainUrl}/api/v1/auth`,
        requestOptions
      );
      const json = await response.json();
      ticket = json.ticket;
    } catch (error) {
      console.log(error);
    }
  } else {
    ticket = window.OTCSTicket;
  }

  return ticket;
};
