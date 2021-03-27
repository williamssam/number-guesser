const userInput = document.getElementById('user_number');
const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');
const value = document.querySelector('.value');
const gif = document.querySelector('.you-rock');

let turns = 5;
function guessNumber(e) {
   e.preventDefault();
   const input = +userInput.value;
   const generatedNumber = generateNumber();
   if (input !== generatedNumber) {
      turns--;
      value.textContent = `Sorry, ${input} is not correct. You have ${turns} turns left`;
      value.classList.add('error');
      userInput.value = '';
   }

   if (input === generatedNumber) {
      userInput.disabled = true;
      value.classList.add('success');
      value.textContent = `Yes, ${input} is the correct number. YOU ROCK!.`;
      resetBtn.classList.add('try-again');
      submitBtn.classList.add('try-again');
      gif.classList.add('try-again');
   }

   if (turns < 1) {
      userInput.disabled = true;
      value.textContent = `Sorry, you have used up your turns. Pls try again`;
      resetBtn.classList.add('try-again');
      submitBtn.classList.add('try-again');
   }

   if (input === '') {
      value.textContent = 'Kindly input a nuumber from 1 to 10';
      turns++; // does not increase turns as 5 was implicitly assigned to 'turns'
   }
}

// generate number from 1 to 10
function generateNumber() {
   return Math.floor(Math.random() * 10) + 1;
}

submitBtn.addEventListener('click', guessNumber);
