// holder for game time
const Calculator = {
    // display value
    Display_Value: '0',
    // holder for left operand
    First_Operand: null,
    // checker for if second operanf inputted
    Wait_Second_Operand: false,
    // holder for the operator in questioon
    operator: null
};

// value modifiers for when buttons are clicked
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand} = Calculator;
    // checking to see if Wait_Second_Operand is true
    // and setting Display_Value to button clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    }
    else {
        // this overwrites Display_Value if the current value is 
        // 0, otherwise it adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

// section for handling decimal points
function Input_Decimal(dot) {
    // insures that accidental clicks on the '.' don't bug up the program
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        // if there's no '.' on the screen, then add one
        Calculator.Display_Value += dot;
    }
}


// operator handler
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator;
        // when an operator key is pressed, we convert the current number 
    // on the screen the the pressed button value, storing the first and 
    // readying for second input (should there be a ';' after this?)
    const Value_of_Input = parseFloat(Display_Value);
    // checks if an operator already exists, and is Wait_Second_Operand is true, 
    // then updates the operator and exits from the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.First_Operand = Value_of_Input;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } 
    // cheks if an operator already exists
    else if (operator) {    
        const Value_Now = First_Operand || 0;
        // if an operator already exists, the property lookup is perfomred for the operator
        // in the Perform_Calculation object, and the matching function for the operator is executed
        const result = Perform_Calculation[operator](Value_Now, Value_of_Input) //reversed???

        Calculator.Display_Value = String(result);
        Calculator.First_Operand = result;
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.operator = null;
    Calculator.Wait_Second_Operand = false;
}

// function to update the screen with content of Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();

// button-click monitor
const keys = document.querySelector('.calculator-keys');
keys.addEventListener(
    'click', (event) => {
        const { target } = event;
        // if the element that was clicked on is not a button, exit the function
        if (!target.matches('button')) {
            return;
        }
        if (target.classList.contains('operator')) {
            Handle_Operator(target.value);
            Update_Display();
            return;
        }
        if (target.classList.contains('decimal')) {
            Input_Decimal(target.value);
            Update_Display()
            return;
        }
        // ensures that all-clear also clears display
        if (target.classList.contains('all-clear')) {
            Calculator_Reset();
            Update_Display();
            return;
        }

        Input_Digit(target.value);
        Update_Display();
    }
)