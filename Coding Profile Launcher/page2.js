var Codeforces_link = document.getElementById('Codeforces');
var Codechef_link = document.getElementById('Codechef');
var Leetcode_link = document.getElementById('Leetcode');
var Hackerrank_link = document.getElementById('Hackerrank');
var Hackearth_link = document.getElementById('Hackearth');
var Gitlab_link = document.getElementById('Gitlab');
var GitHub_link = document.getElementById('GitHub');
var save_button = document.getElementById('save');

let array = ["Codeforces","Codechef","Leetcode","Hackerrank","Hackearth","Gitlab","GitHub"];
chrome.storage.sync.get(array,function(links){
    if(!chrome.runtime.error){
        console.log(links);
        if(links.Codeforces)
        Codeforces_link.value=links.Codeforces;
        if(links.Codechef)
        Codechef_link.value=links.Codechef;
        if(links.Leetcode)
        Leetcode_link.value=links.Leetcode;
        if(links.Hackerrank)
        Hackerrank_link.value=links.Hackerrank;
        if(links.Hackearth)
        Hackearth_link.value=links.Hackearth;
        if(links.Gitlab)
        Gitlab_link.value=links.Gitlab;
        if(links.GitHub)
        GitHub_link.value=links.GitHub;
    }
});


save_button.addEventListener('click',function(){
    UpdateLinks();
});
function UpdateLinks(){
    let dict = {
        "Codeforces":Codeforces_link.value,
        "Codechef":Codechef_link.value,
        "Leetcode":Leetcode_link.value,
        "Hackerrank":Hackerrank_link.value,
        "Hackearth":Hackearth_link.value,
        "Gitlab":Gitlab_link.value,
        "GitHub":GitHub_link.value
    }
    chrome.storage.sync.set(dict,function(){
        if(!chrome.runtime.error){
            console.log("Links Updated");
            window.location.pathname='index.html'
        }
    })
}