var Codeforces_link = document.getElementById('Codeforces_link');
var Codechef_link = document.getElementById('Codechef_link');
var Leetcode_link = document.getElementById('Leetcode_link');
var Hackerrank_link = document.getElementById('Hackerrank_link');
var Hackearth_link = document.getElementById('Hackearth_link');
var Gitlab_link = document.getElementById('Gitlab_link');
var GitHub_link = document.getElementById('GitHub_link');

let array = ["Codeforces","Codechef","Leetcode","Hackerrank","Hackearth","Gitlab","GitHub"];

function void_click(){
    void(0);
}

chrome.storage.sync.get(array,function(links){
    if(!chrome.runtime.error){
        console.log(links);
        
        if(links.Codeforces)
        Codeforces_link.href=links.Codeforces;
        else
        Codeforces_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        
        if(links.Codechef)
        Codechef_link.href=links.Codechef;
        else
        Codechef_link.addEventListener('click',function(event){
                event.preventDefault();
            });

        if(links.Leetcode)
        Leetcode_link.href=links.Leetcode;
        else
        Leetcode_link.addEventListener('click',function(event){
                event.preventDefault();
            });

        if(links.Hackerrank)
        Hackerrank_link.href=links.Hackerrank;
        else
        Hackerrank_link.addEventListener('click',function(event){
                event.preventDefault();
            });

        if(links.Hackearth)
        Hackearth_link.href=links.Hackearth;
        else
        Hackearth_link.addEventListener('click',function(event){
                event.preventDefault();
            });

        if(links.Gitlab)
        Gitlab_link.href=links.Gitlab;
        else
        Gitlab_link.addEventListener('click',function(event){
                event.preventDefault();
            });

        if(links.GitHub)
        GitHub_link.href=links.GitHub;
        else
        GitHub_link.addEventListener('click',function(event){
                event.preventDefault();
            });
            
    }
});