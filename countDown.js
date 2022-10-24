// создаю ф-ию обратного отсчета
function createCountdown(number) {
    if (number < 1 || !Number.isInteger(number)) {
        number = 0;
    }
    number++;
    return () => {
        if (number < 1) {
            console.log(0);
        } else {
            number--;
            console.log(number);
        }
    };
}

const countdownFrom2 = createCountdown(2);
countdownFrom2();
countdownFrom2();
countdownFrom2();
countdownFrom2();
