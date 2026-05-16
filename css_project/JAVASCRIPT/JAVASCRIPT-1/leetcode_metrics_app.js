
document.addEventListener("DOMContentLoaded",function()
{
    const searchbutton=document.getElementById("searchbutton");
    const usernameinput=document.getElementById("user-input");
    const easylabel=document.getElementById("easy-label");
    const easyprogresscircle=document.querySelector(".easy-progress");
    const mediumprogresscircle=document.querySelector(".medium-progress");
    const hardprogresscircle=document.querySelector(".hard-progress");
    const mediumlabel=document.getElementById("medium-label");
    const hardlabel=document.getElementById("hard-label");
    const cardStatsContainer=document.querySelector(".statscard");
    // return true or false depending on regex
    function validateUserName(username)
    {
        if(username.trim()=="")
        {
            alert("Username should not be empty ");
            return false;
        }
        const regex=/^[a-zA-Z0-9-]{1,15}$/;
        const isMatching=regex.test(username);
        if(!isMatching)
        {
            alert("Invalid input ");
        }
        return isMatching;


    }
    async function fetchuserdetails(username)
    {
        
        // const url=`https://leetcode-stats-api.herokuapp.com/${username}}`;
        try{
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const targetUrl = 'https://leetcode.com/graphql/';
            // concantenated url:https://cors-anywhere.herokuapp.com/https://leetcode.com/graphql/
            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");
            const graphql = JSON.stringify({
                query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                variables: { "username": `${username}` }
            });
              const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
            };
            const response = await fetch(proxyUrl+targetUrl, requestOptions);
            searchbutton.textContent="Searching...";
            searchbutton.disabled=true;
            // cardStatsContainer.classList.add("hidden");
            // const response = await fetch(url);
            if(!response.ok)
            {
                throw new Error("Unable to fetch the user details");
            }
            const parseddata= await response.json();
            console.log("Logging data: ",parseddata);
            displayUser(parseddata);

        }
        catch(error)
        {
            cardStatsContainer.innerHTML=`<p>${error.message}</p>`;

        }
        finally
        {
            searchbutton.textContent="Search";
            searchbutton.disabled=false;

        }
    }
    function updateprogress(solved,total,label,circle)
    {
        const progressDegree=(solved/total)*100;
        circle.style.setProperty("--progress-degree",`${progressDegree}%`);
        label.textContent=`${solved}/${total}`;

    }
    function displayUser(parseddata)
    {
        if (!parseddata || !parseddata.data.matchedUser) 
        {
            // cardStatsContainer.classList.remove("hidden");
            cardStatsContainer.innerHTML = "<p>No user data found.</p>";
            return;
        }
        const stats = parseddata.data.matchedUser.submitStats.totalSubmissionNum;
        // cardStatsContainer.classList.remove("hidden");
        const totalq=parseddata.data.allQuestionsCount[0].count;
        const totaleasyq=parseddata.data.allQuestionsCount[1].count;
        const totalmediumq=parseddata.data.allQuestionsCount[2].count;
        const totalhardq=parseddata.data.allQuestionsCount[3].count;
        const solvedtotalq=parseddata.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedtotaleasyq=parseddata.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedtotalmediumq=parseddata.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedtotalhardq=parseddata.data.matchedUser.submitStats.acSubmissionNum[3].count;
        updateprogress(solvedtotaleasyq,totaleasyq,easylabel,easyprogresscircle);
        updateprogress(solvedtotalmediumq,totalmediumq,mediumlabel,mediumprogresscircle);
        updateprogress(solvedtotalhardq,totalhardq,hardlabel,hardprogresscircle);
        const cardsdata=[
            {label:"Overall Submissions",value:parseddata.data.matchedUser.submitStats.totalSubmissionNum[0].submissions},
            {label:"Overall EasySubmissions",value:parseddata.data.matchedUser.submitStats.totalSubmissionNum[1].submissions},
            {label:"Overall MediumSubmissions",value:parseddata.data.matchedUser.submitStats.totalSubmissionNum[2].submissions},
            {label:"Overall HardSubmissions",value:parseddata.data.matchedUser.submitStats.totalSubmissionNum[3].submissions}
        ];
        console.log("Carddata: ",cardsdata);
        cardStatsContainer.innerHTML=cardsdata.map(
            data=>
            
                `
                <div class="card">
                 <h4>${data.label}</h4>
                 <p>${data.value}</p>
                 </div>
                `
        ).join("");
        

    }
    searchbutton.addEventListener('click',function()
{
    const username=usernameinput.value;
    console.log("Logging username: ",username);
    if(validateUserName(username))
    {
        fetchuserdetails(username);
    }
});

});