const apiCall = (/** @type {any} */ data, option) => {
  const data1 = {
    "input": {
      "input": data,
    }
  }
  let result;
  if (option == "DS-lab") {
    result = fetch("https://dashboard.scale.com/spellbook/api/v2/deploy/pu03fnp", {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic clvccda0c00j11au3478b5wk4',
      },
      body: JSON.stringify(data1)
    });
  } else if(option == "python-lab") {
    result = fetch("https://dashboard.scale.com/spellbook/api/v2/deploy/5p13f1w", {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic clvccda0c00j11au3478b5wk4',
        'mode': 'no-cors'
      },
      body: JSON.stringify(data1) }
    )
  } else {
    result = fetch("https://dashboard.scale.com/spellbook/api/v2/deploy/ef23fic", {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic clvccda0c00j11au3478b5wk4',
        'mode': 'no-cors'
      },
      body: JSON.stringify(data1) }
    )
  }

  return result;
}

export default apiCall;