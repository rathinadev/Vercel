const MAX_LEN = 5;


export function generate(){
    // Function to generate random id for each project we deploy
    let ans="";
    const subset = "1234567890qwertyuiopasdgghjklzxcvbnm";
    for(let i=0;i< MAX_LEN;i++){
        ans+=subset[Math.floor(Math.random()*subset.length)]
    }
    return ans;
}