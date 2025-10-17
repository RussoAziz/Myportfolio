        const text = "🔥𝐑𝐮𝐬𝐬𝐨-𝐀𝐳𝐢𝐳🔥";
        let index = 0;
        let deleting = false;
    
        function animateTitle() {
          if (!deleting) {
            document.title = text.substring(0, index++);
            if (index > text.length) {
              deleting = true;
              setTimeout(animateTitle, 1000);
              return;
            }
          } else {
            document.title = text.substring(0, index--);
            if (index < 0) {
              deleting = false;
            }
          }
          setTimeout(animateTitle, 250);
        }
    
        animateTitle();