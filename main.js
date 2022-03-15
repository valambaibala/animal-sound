function sc() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/e24TEoCq5/model.json', modelready);
}

function modelready() {
    classifier.classify(gotresult);
}

function gotresult(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "i can hear -" + result[0].label;
        document.getElementById("result_confidence").innerHTML = "accuracy" + (result[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + r + "," + g + "," + b + ")";

        img = document.getElementById("cat1");
       img1 = document.getElementById("dog2");
        img2 = document.getElementById("lion3");
       
        if (results[0].label == "class4") {
            img1.src = 'funny-animals-dog.gif';
           
          } else if (results[0].label == "meeaw") {
            img.src = 'cute-kitty-best-kitty.gif';
            
          }
          else if (results[0].label == "roar") {
            img2.src = '200.gif';
            
          }
           else{
            img.src = 'listen.gif';
          }
        }
      }
      

       