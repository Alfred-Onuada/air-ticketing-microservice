const bookingForm = document.getElementById('bookingForm');

bookingForm['from'].addEventListener('change', () => {

  bookingForm['price'].value = null;

  if (bookingForm['to'].value.trim()) {
    let price = 0;

    [].forEach.call(bookingForm['from'].value.trim(), (s, i) => price += s.charCodeAt(0));
    
    bookingForm['price'].value = price;
  }
})

bookingForm['to'].addEventListener('change', () => {
  bookingForm['price'].value = null;

  if (bookingForm['from'].value.trim()) {
    let price = 0;

    [].forEach.call(bookingForm['to'].value.trim(), (s, i) => price += s.charCodeAt(0));

    bookingForm['price'].value = price;
  }
})

bookingForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const from =  bookingForm['from'].value.trim();
  const to = bookingForm['to'].value.trim();
  const price = bookingForm['price'].value;

  if (!(from.length && to.length && price)) {
    showMsg('Please complete the form', true);
    return;
  }

  const data = { from, to, price };

  try {
    const response = await axios.post('http://localhost:3001/save', data);

    console.log(response);

    if (response.status.toString().startsWith('2')) {
      showMsg(response.data.message);
    } else {
      showMsg(response.data, true);
    }
  } catch (error) {
    showMsg(error.message, true);
  }

})

function showMsg(msg, isError) {
  const msgDiv = document.getElementById('msg');
  const msgText = document.getElementById('msgText');

  msgDiv.classList.remove('hide');

  let msgClass = isError ? 'failure' : 'success';
  msgDiv.classList.add(msgClass);

  msgText.textContent = msg;

  setTimeout(() => {
    removeMsg();
  }, 3500);
}

function removeMsg() {
  const msgDiv = document.getElementById('msg');
  const msgText = document.getElementById('msgText');

  msgDiv.classList.add('hide');
  msgDiv.classList.remove('success', 'failure');

  msgText.textContent = '';
}