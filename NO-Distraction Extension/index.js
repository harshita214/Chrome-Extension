
const embeddedHTML=(name)=>{

    return '<div class="container"> <div class= "inside_container"><p style="font-size:50px;">Go Back To Work<br/> Stop Using '+ name +'<p> <div class=_404 style="font-size:150px;">404</div> </div> </div>';
};

const embeddedStyling=()=>{
 
    return '<style>body{ background: #2c3e50;} .inside_container{ margin:auto;  padding: 100 0;  background: #247de2; color:white; height:500px;width:500px;text-align:center;  ._404 {  color:black; position: relative; display: inline-block; z-index: 2; height: 250px;  letter-spacing: 15px; }  }   </style>';
};


switch(window.location.hostname){

    case "www.facebook.com":
      document.head.innerHTML=embeddedStyling();
        document.body.innerHTML=embeddedHTML("Facebook")

    break;
    
    case "www.instagram.com":
        document.head.innerHTML=embeddedStyling();
    document.body.innerHTML=embeddedHTML("Instagram")

    break;
    
    case "www.netflix.com":
        document.head.innerHTML=embeddedStyling();
        document.body.innerHTML=embeddedHTML("Netflix")

    break;
    
    case "www.youtube.com":
        document.head.innerHTML=embeddedStyling();
    document.body.innerHTML=embeddedHTML("You tube")
    break;
 
    case "www.primevideo.com":
        document.head.innerHTML=embeddedStyling();
    document.body.innerHTML=embeddedHTML("PrimeVideo")
    break;

}