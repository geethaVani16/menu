function myCalendar(curr_month = "curr") {
    var tbody_html = "";
    var td_class = "";
    var weekday_count = 1;
    var tr_count = 1;
    var td_count = 1;
    var offset_td = 0;
    var counter = 1;
    var month = master_data.months[curr_month];
    var start_of_curr = master_data.day_start[curr_month];
    if(curr_month!=="curr"){
        if(master_data.months[curr_month]===11 && curr_month==="prev"){
            year--;
        }
        if(master_data.months[curr_month]===0 && curr_month==="next"){
            year++;
        }
    }
    
      // Displays the current month in Strings and the actual year 
      $('.month-year').html("<h3>"+months_full[month]+" "+year+"</h3>");

      //To build the calendar body
      while (counter <= daysOfMonth[month]) {
          if(weekday_count === 8){
              tbody_html += "</tr>";
              weekday_count = 1;
          }
          if(weekday_count === 1){
              tbody_html += "<tr>";
              tr_count++;
          }
      // prepend blank tds
          while(offset_td < start_of_curr){
              tbody_html += "<td class='empty'></td>";
              offset_td++;
              weekday_count++;
              td_count++;
          }
          if(month === d.getUTCMonth() && year === d.getUTCFullYear()){
              if(counter === date){
                  td_class = "today";
              } else {
                  td_class = "currentMonth";
              }
          }
          tbody_html += "<td class='"+td_class+"'>"+counter+"</td>";
          counter++;
          weekday_count++;
          td_count++;
      }
  // append blank tds
      while((td_count-1) < (tr_count-1)*7){
          tbody_html += "<td class='empty'></td>";
          td_count++;
      }
      $('#calendar_tbody').html(tbody_html);
  // setting master_data.months
      master_data.months.curr = month;
      master_data.months.prev = month === 0 ? 11 : month - 1;
      master_data.months.next = month === 11 ? 0 : month + 1;
      debug && console.log("prev "+master_data.months.prev+" -> "+start_of_curr+" - "+daysOfMonth[master_data.months.prev]+"%7 = "+(start_of_curr - daysOfMonth[master_data.months.prev]%7));
  // setting master_data.day_start
      master_data.day_start.curr = start_of_curr;
      var temp_prev_som = start_of_curr - daysOfMonth[master_data.months.prev]%7;
      if(temp_prev_som < 0){
          temp_prev_som = 7 + temp_prev_som;
      }
      master_data.day_start.prev = temp_prev_som;
      master_data.day_start.next = weekday_count === 8 ? 0 : weekday_count-1;
      //return prev_next;
      if(debug){
          console.log("    P   C   N   ");
          console.log(" m ", master_data.months.prev, " ", master_data.months.curr, " ", master_data.months.next);
          console.log(" d ", master_data.day_start.prev, " ", master_data.day_start.curr, " ", master_data.day_start.next);
      }
    }
    var d = new Date();
    var year = d.getUTCFullYear();
    var day = d.getUTCDay();
    var date = d.getUTCDate();
    var month = d.getUTCMonth();
    // our global object
    var master_data = {
        day_start: {
            prev: 0, curr: day - (date%7 - 1) + 7, next: 0
        },
        months: {
            prev: month-1, curr: month, next: month+1
        }
    };
    //Getting February Days Including The Leap Year
    if ((year % 100!=0) && (year% 4==0) || (year%400 == 0 )) {
        var febDays = 29;
    } else {
        var febDays = 28;
    }
    // Getting The Months and Days of the Week
    var daysOfMonth = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var months_full = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var debug = true;
    $(document).ready(function(){
        console.clear();
        var d = new Date();
        myCalendar();
        var main_obj = master_data;
      //Navigation Buttons
      $('.prev-month').click(function(){
          myCalendar("prev");	
      });

      $('.next-month').click(function(){
          myCalendar("next");
      });
    });