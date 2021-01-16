function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function checkEyes(){
    // returns if the eyes are closed all the tensorflow stuffs should be here
    return true;
}
async function startTimer(){
    count = 0;
    while(count < 20000){
        if(!checkEyes()){
            count = 0;
        }
        else{
            await sleep(1);
            count++;
        }
    }
    return;
}