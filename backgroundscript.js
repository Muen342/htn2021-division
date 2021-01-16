const maxTime = 60*1000*20;
var count = 0;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function checkEyes(){
    // returns if the eyes are closed
    return true;
}
async function startTimer(){
    while(count < 20000){
        if(!checkEyes()){
            count = 0;
        }
        else{
            await sleep(1);
            count++;
        }
    }
    console.log('finished eye relax');
}

function blockScreen(){
    console.log('pretend the screen is blocked');
}
function unblockScreen(){
    console.log('pretend the screen is unblocked');
}
async function main(){
    while(true){
        await sleep(maxTime);
        blockScreen();
        await startTimer();
        unblockScreen();
    }
}