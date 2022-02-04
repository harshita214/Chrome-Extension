<h1 align="center"> Abusive-Word Hider  </h1>

<!-- ---------------------------------------------------------------------------------------------------------------------- -->
<div align="center">

So basically , After enabling this extension , it will hide abusive words from every heading and paragraphs . 
and also remember , 
  
<strong>  
Some abusive words are too bad and that's why I haven't add those in the code .  </strong>   
  
So, if you want to add all those jump to the " .js  " and add those which ever you like ( Jump to the bottom, there I have shown how you can add more words, which you want to hide).

  </div>

  <!-- ---------------------------------------------------------------------------------------------------------------------- -->

<br>

#### Tech-Stack used :



  ![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)


<br>
 <!-- ---------------------------------------------------------------------------------------------------------------------- -->

## Output :

<h3 align="center"> Before enabling the extension ( and as you can see , below the Website headng there are some abusive words . Let's hide them ...) -  </h3>

<br>

<div align="center">

  <img src = "https://github.com/ayush-sleeping/Chrome-Extension/blob/main/Abusive%20Word%20Hider/Output%20SS/1.%20Before%20enabling%20Extension.jpg" >

  <img src = "https://github.com/ayush-sleeping/Chrome-Extension/blob/main/Abusive%20Word%20Hider/Output%20SS/1.1.png" >

</div>

<br>

<br>

<h3 align="center"> Enabling the extension -  </h3>

<br>

<div align="center">

  <img src = "https://github.com/ayush-sleeping/Chrome-Extension/blob/main/Abusive%20Word%20Hider/Output%20SS/2.%20Enabling%20the%20extension.png" >

</div>

<br>

<br>

<h3 align="center"> Output: And as you can see , It hides those abusive words ...-  </h3>

<br>

<div align="center">

  <img src = "https://github.com/ayush-sleeping/Chrome-Extension/blob/main/Abusive%20Word%20Hider/Output%20SS/3.%20%20After%20enabling%20extension.jpg" >

  <img src = "https://github.com/ayush-sleeping/Chrome-Extension/blob/main/Abusive%20Word%20Hider/Output%20SS/3.1.png" >


</div>

<br>

<br>

<br>
 <!-- ---------------------------------------------------------------------------------------------------------------------- -->

### And here you can add, more abusive words, Which you want to hide them...  :
<h1> </h1>

<h3 align="center"> as you can see in below " .js code "  where I have written some abusive words and basically that's where you have to add which ever you want to hide words ... </h3>

<br>

```
 if (element.textContent.match(/(fuck|fuck you|shit|Piss off|Dick head|Asshole|Son of a bitch|Bastard|Bitch|Damn|Wanker|Taking the piss|Twat|Bloody Oath|Root|Get Stuffed|Bugger me|Fair suck of the sav)/gi))
      element.parentElement.remove()
```



