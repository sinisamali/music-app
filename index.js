window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#6860d3",
    "#60b2d3"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", () => {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);
    });
  });

  document.addEventListener("keydown", function(event) {
    var x = event.which;
    switch (x) {
      case 97:
        sounds[0].currentTime = 0;
        sounds[0].play();
        createBubbles(0);
        break;
      case 98:
        sounds[1].currentTime = 0;
        sounds[1].play();
        createBubbles(1);
        break;
      case 99:
        sounds[2].currentTime = 0;
        sounds[2].play();
        createBubbles(2);
        break;
      case 100:
        sounds[3].currentTime = 0;
        sounds[3].play();
        createBubbles(3);
        break;
      case 101:
        sounds[4].currentTime = 0;
        sounds[4].play();
        createBubbles(4);
        break;
      case 102:
        sounds[5].currentTime = 0;
        sounds[5].play();
        createBubbles(5);
        break;
    }
  });

  //Create function that makes bubbles
  const createBubbles = index => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
