document.querySelector("#done").addEventListener("click", function() {
    const update = function() {
        let bdt = document.querySelector("#bdt").value;
        if(bdt.length>0){
            document.getElementById('output').style.display='block';
            
            bday = new Date(bdt),
            bday_val = bday.getTime(),
            today = new Date(),
            now = today.getTime(),
            value = now-bday_val,
            console.log(bday);
            if(value>=0){
            var_sec = Math.floor(value / 1000),
            var_min = Math.floor(value / (1000 * 60)),
            var_hour = Math.floor(value / (1000 * 60 * 60)),
            var_day = Math.floor(value / (1000 * 60 * 60 * 24)),
            var_week = Math.floor(value / (1000 * 60 * 60 * 24 * 7)),
            var_month = Math.floor(value / (1000 * 60 * 60 * 24 * 30.4375)),
            var_year = Math.floor(value / (1000 * 60 * 60 * 24 * 365.25));
        let insert = function(x,y) {
            document.querySelector(x).innerHTML = y;

        }
        insert("#year","years : "+ var_year );
        insert("#month", "months : "+var_month); 
        insert("#week", "weeks : "+var_week); 
        insert("#day", "days : "+var_day ); 
        insert("#hour", "hours : "+var_hour); 
        insert("#minute","minutes : "+var_min); 
        insert("#second","seconds : "+var_sec );
    }     
     else{
        document.querySelector("#year").innerHTML = "INVALID DETAILS";
     }   
    }else{
        document.querySelector("#year").innerHTML = "INVALID DETAILS";
    }
    };
    setInterval(update, 1000)
   
})

