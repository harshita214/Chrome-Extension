$(function () {
    ///set the date of today
    setDate();


    var tasksList = new Array();
    var learnList = new Array();
    chrome.storage.sync.get(['list1'], function (val) {
        if (val.list1.length > 0)
            tasksList = val.list1;
        console.log("val.list1 :" + val.list1);
        //displaying the old items
        for (var i = 0; i < tasksList.length; i++) {
            addListItem(tasksList[i]);
        }


    })


    chrome.storage.sync.get(['list2'], function (val) {
        if (val.list2.length > 0)
            learnList = val.list2;
        console.log("val.list2 :" + val.list2);

        //displaying the old items
        for (var i = 0; i < learnList.length; i++) {
            addList2Item(learnList[i]);
        }
    })


    $('#addButtonTask').click(function () {

        var newTask = $('#taskInput').val();
        //adding the new item to tasklist array
        tasksList.push(newTask);
        console.log("tasksList under click :" + tasksList);
        addListItem(newTask);
        //adding the new list back to chrome storage
        chrome.storage.sync.set({
            'list1': tasksList
        })


    });

    $('#addButtonLearn').click(function () {

        var newLearn = $('#learnItemInput').val();
        // if(tasksList.length>0)
        //adding the new item to tasklist array
        learnList.push(newLearn);
        console.log("learnList under click :" + learnList);

        addList2Item(newLearn);
        //adding the new list back to chrome storage
        chrome.storage.sync.set({
            'list2': learnList
        })


    });


    function addListItem(value) {
        console.log("addListItem");
        document.getElementById("taskInput").value = "";
        var ul = document.getElementById("todo-listUl");

        addUI(ul, value, 1)
    }


    function addList2Item(value) {
        console.log("addList2Item");
        document.getElementById("learnItemInput").value = "";
        var ul = document.getElementById("listUl");

        addUI(ul, value, 2)
    }


    function addUI(ul, value, num) {
        var li = document.createElement("li");
        $("li").addClass("list-group-item");
        li.appendChild(document.createTextNode(value));

        if (value === '') {
            //do nothing
            //alert("You must write something!");
        } else {
            ul.appendChild(li);
        }


        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        if (num === 1) {
            span.className = "close1";
            span.appendChild(txt);
            li.appendChild(span);

            $(".close1").click(function () {
                var index = $(this).index(".close1");

                console.log(index);
                var div = this.parentElement;
                div.style.display = "none";
                removeItem(index);
                $(".close1").eq(index).remove();

            })
        }
        else
            {
               // $("li").addClass("learnClass");

                span.className = "close2";
                span.appendChild(txt);
                li.appendChild(span);

                $(".close2").click(function () {
                    var index = $(this).index(".close2");

                    console.log(index);
                    var div = this.parentElement;
                    div.style.display = "none";
                    removeLearnItem(index);
                    $(".close2").eq(index).remove();

                })
            }


        }

        /*
         $('ul li').on("click", function(e) {
             var i = $(this).parent().index() + 1;
             console.log("h",i);
             alert(i);
         });*/
        // removeItem()
        /*
                for (i = 0; i < close.length; i++) {
                    close[i].onclick = function() {
                       /!* if (i > -1) {
                            tasksList = tasksList.splice(i, 1);
                        }
                        chrome.storage.sync.set({
                            'list': tasksList
                        })*!/

                        removeItem(i)
                        var div = this.parentElement;
                        div.style.display = "none";
                    }

                    console.log(tasksList);
                    console.log(i);
                }*/

        /*  $('.close').click(function() {
              /!*console.log($('close').index(this));*!/
              //removeItem();
              console.log("cliced");
          });
    */


        function removeItem(itemIndex) {
            console.log("removeitem");
            chrome.storage.sync.get(['list1'], function (val) {
                tasksList = val.list1;
                tasksList.splice(itemIndex, 1);
                console.log("new list", tasksList);

                chrome.storage.sync.set({
                    'list1': tasksList
                })

            })

        }


        function removeLearnItem(itemIndex) {
            console.log("removeLearnItem ", itemIndex);

            chrome.storage.sync.get(['list2'], function (val) {
                learnList = val.list2;
                learnList.splice(itemIndex, 1);
                console.log("new learn list", learnList);

                chrome.storage.sync.set({
                    'list2': learnList
                })

            })

        }


        /* var myNodelist = document.getElementsByTagName("LI");
         var i;
         for (i = 0; i < myNodelist.length; i++) {
             /!* myNodelist[i].addClass("current");

              myNodelist[i].setAttribute("class", "item");*!/
             var span = document.createElement("SPAN");
             var txt = document.createTextNode("\u00D7");
             span.className = "close";
             span.appendChild(txt);
             myNodelist[i].appendChild(span);
         }

     // Click on a close button to hide the current list item
         var close = document.getElementsByClassName("close");
         var i;
         for (i = 0; i < close.length; i++) {
             close[i].onclick = function() {
                 var div = this.parentElement;
                 div.style.display = "none";
             }
         }*/
        // var checkedList = [];


        /* var list1 = document.querySelector('ul');
         console.log(list1);

         list1.addEventListener('click', function(ev) {

             console.log($(this).index());


             console.log(ev.target.classList);
             if (ev.target.tagName === 'LI') {
                 ev.target.classList.toggle('checked');
                 checkedList.push(2);


                 /!* chrome.storage.sync.set({
                      'checked': checkedList
                  })

                  chrome.storage.sync.get('checked', function (val) {
                      console.log("hi " , val);
                  })*!/
             }
         }, false);*/

        function setDate() {
            var todayDate = new Date();
            console.log(todayDate);
            var locale = "en-us";
            var month = todayDate.toLocaleString(locale, {month: "long"});
            var day = todayDate.toLocaleString(locale, {weekday: "long"});

            document.getElementById('date').innerHTML = "Task checklist for " + day + ", " + todayDate.getDate() + " "
                + month;
        }
    }

)