import 'date-fns';
import React,{useState} from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function PickDate(props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = useState(new Date(2020-12-10));

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if(props.getDate){
      props.getDate(date);
    }
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }
        }
        />
    </MuiPickersUtilsProvider>
  );
}
