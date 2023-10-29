let scorex=0,scoreo=0;
        let div=document.createElement("div");
        div.className="output";
        let x=0;
        let ar=[];
        for(let y=0;y<9;y++)
       {
        ar[y]=document.getElementsByClassName("input")[y];
         }
         ar[0].addEventListener("click",dot_cross0);
         ar[1].addEventListener("click",dot_cross1);
         ar[2].addEventListener("click",dot_cross2);
         ar[3].addEventListener("click",dot_cross3);
         ar[4].addEventListener("click",dot_cross4);
         ar[5].addEventListener("click",dot_cross5);
         ar[6].addEventListener("click",dot_cross6);
         ar[7].addEventListener("click",dot_cross7);
         ar[8].addEventListener("click",dot_cross8);
        function dot_cross0(){
            if(x%2==0){
                ar[0].textContent="x";
                x++;
            }
            else{
                ar[0].textContent="O";
                x++;

            }
            check_result();
        }
        function dot_cross1(){
            if(x%2==0){
                ar[1].textContent="x";
                x++;
            }
            else{
                ar[1].textContent="O";
                x++;

            }
            check_result();
        }
        function dot_cross2(){
            if(x%2==0){
                ar[2].textContent="x";
                x++;
            }
            else{
                ar[2].textContent="O";
                x++;

            }
            check_result();
        }
        function dot_cross3(){
            if(x%2==0){
                ar[3].textContent="x";
                x++;
            }
            else{
                ar[3].textContent="O";
                x++;

            }
            check_result();
        }
        function dot_cross4(){
            if(x%2==0){
                ar[4].textContent="x";
                x++;
            }
            else{
                ar[4].textContent="O";
                x++;

            }
            check_result();
        }
        function dot_cross5(){
            if(x%2==0){
                ar[5].textContent="x";
                x++;
            }
            else{
                ar[5].textContent="O";
                x++;

            }
            check_result();
        }
        function dot_cross6(){
            if(x%2==0){
                ar[6].textContent="x";
                x++;
            }
            else{
                ar[6].textContent="O";
                x++;

            }
            check_result();
        }
        function dot_cross7(){
            if(x%2==0){
                ar[7].textContent="x";
                x++;
            }
            else{
                ar[7].textContent="O";
                x++;

            }
            check_result();
        }
        function dot_cross8(){
            if(x%2==0){
                ar[8].textContent="x";
                x++;
            }
            else{
                ar[8].textContent="O";
                x++;

            }
            check_result();
        }
        function check_result(){
            for(let i=0;i<3;i++){
                if((ar[i*3].textContent=="x"&&ar[i*3+1].textContent=="x"&&ar[i*3+2].textContent=="x"))
                {
                   div.textContent="Game Over"
                   document.body.append(div);
                   scorex+=1;
                    document.getElementsByClassName("scorex")[0].textContent=scorex;
                }
                if((ar[i*3].textContent=="O"&&ar[i*3+1].textContent=="O"&&ar[i*3+2].textContent=="O"))
                {
                   div.textContent="Game Over"
                   document.body.append(div);
                   scoreo+=1;
                    document.getElementsByClassName("scoreo")[0].textContent=scoreo;
                }
                if((ar[i].textContent=="O"&&ar[i+3].textContent=="O"&&ar[i+6].textContent=="O"))
                {
                    div.textContent="Game Over"
                    document.body.append(div);
                    scoreo+=1;
                    document.getElementsByClassName("scoreo")[0].textContent=scoreo;
                }
                if((ar[i].textContent=="x"&&ar[i+3].textContent=="x"&&ar[i+6].textContent=="x"))
                {
                    div.textContent="Game Over"
                    document.body.append(div);
                    scorex+=1;
                    document.getElementsByClassName("scorex")[0].textContent=scorex;
                }
            }
            if((ar[0].textContent=="x"&&ar[4].textContent=="x"&&ar[8].textContent=="x"))
            {
                div.textContent="Game Over"
                document.body.append(div);
                scorex+=1;
                document.getElementsByClassName("scorex")[0].textContent=scorex;
            } 
            if((ar[2].textContent=="O"&&ar[4].textContent=="O"&&ar[6].textContent=="O"))
            {
               div.textContent="Game Over"
               document.body.append(div);
               scoreo+=1;
                document.getElementsByClassName("scoreo")[0].textContent=scoreo;
            } 
            let x=document.getElementsByClassName("reset")[0];
            x.addEventListener("click",reset);
          
    function reset() {
        for (let y = 0; y < 9; y++) {
            ar[y].textContent = ""; // Clear the content of the td elements
        }
        div.textContent = ""; // Clear the game over message
        document.body.removeChild(div); // Remove the div
    }

           
        }