const phoneInputs = document.querySelectorAll('input[data-phone-input]');

const getInputNumbersValue = (input) => {
  return input.value.replace(/\D/g, '');
};

const onPhoneInput = (evt) => {
  let input = evt.target;
  let inputNumbersValue = getInputNumbersValue(input);
  let formattedInputValue = '';

  if (!inputNumbersValue) {
    input.value = '';
    return input.value;
  }

  let firstSymbol = '8';
  formattedInputValue = firstSymbol + '';

  if (inputNumbersValue.length > 1) {
    formattedInputValue += inputNumbersValue.substring(1, 11);
  }

  if (formattedInputValue.length < 11) {
    input.setCustomValidity('Пожалуйста, введите номер телефона полностью');
  } else {
    input.setCustomValidity('');
  }

  return (input.value = formattedInputValue);
};

let onPhonePaste = (evt) => {
  let input = evt.target;
  let inputNumbersValue = getInputNumbersValue(input);
  let pasted = evt.clipboardData || window.clipboardData;

  if (pasted) {
    let pastedText = pasted.getData('Text');
    if (/\D/g.test(pastedText)) {
      input.value = inputNumbersValue;
      return;
    }
  }
};

const initPhoneCheck = () => {

  phoneInputs.forEach((el) => {
    el.addEventListener('input', onPhoneInput);
    el.addEventListener('paste', onPhonePaste);
  });
};

export {initPhoneCheck};
