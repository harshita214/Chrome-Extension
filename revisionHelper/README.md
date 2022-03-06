# revisionHelper

It is an Application developed using html,css,javaScript, Node.js, Express.js, MongoDB and Python, which is going to help in revising concepts. Whenever you are reading somthing online and you want to revise that after some time you can 
add the url, article name and the date(when you want to revise) in the extension and it will send mail to you consisting  topic name and url on the 
mentioned date so that you can revise.


**Basically this application has two parts:**

1) After filling the form the data will submit in mongodb database.


2) There is a Python Script which will check the database in every 24 hour and when the date is matched it will send mail and also delete that data from database.



![WhatsApp Image 2022-03-05 at 11 13 48 AM](https://user-images.githubusercontent.com/56593431/156870027-071afae6-6b89-427d-848a-02e75ba1ee06.jpeg)


**Implementation**

1) In frontEnd folder all the files are there which are going to be loaded in chrome Extension.When after filling the form, submit button is clicked it will call the post api for submitting the data into database.

2) In server.js created a server using Node.js and Express.js and connected the server to mongoDB database using mongoose and also created a post api to store the form data into database.


3) In mongodbConnect.py, there is a python script which is connected to mongodb database using pymongo which is checking the database in every 24 hours and when today's date is matched with any date present in database it will send mail and delete that data from database.

This is the image of mail.

![WhatsApp Image 2022-03-06 at 10 11 19 AM](https://user-images.githubusercontent.com/56593431/156909978-c9b76d1f-b7d3-4d74-be73-666c643f6fd6.jpeg)


**How to Run The Application**

1) Start the mongodbConnect.py 
2) Start the server.js 
3) Load the frontEnd folder in Chrome Extension



https://user-images.githubusercontent.com/56593431/156935306-ffd362d4-55ad-497f-bd95-84cc548b4324.mp4

