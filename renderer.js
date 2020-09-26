

const submitBtn=document.getElementById('submitBtn');
const clickBtn=document.getElementById('clickBtn');
const display=document.getElementById('display');

submitBtn.addEventListener('click',function(){
    //console.log("submit button clicked");
    document.getElementById('display').innerHTML='Submit button clicked';
    
    
    
})

clickBtn.addEventListener('click',function(){
    console.log("Click here button clicked");
    document.getElementById('display').innerHTML='Click here button clicked';
})
