//your JS code here. If required.
 document.getElementById("userForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from refreshing the page

      const name = document.getElementById("name").value.trim();
      const age = parseInt(document.getElementById("age").value, 10);

      // Validate inputs
      if (!name || isNaN(age)) {
        alert("Both fields are required.");
        return;
      }

      // Promise logic
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age > 18) {
            resolve();
          } else {
            reject();
          }
        }, 4000); // Wait 4 seconds
      })
        then(() => {
          alert(Welcome, ${name}. You can vote.);
        })
        catch(() => {
          alert(Oh sorry ${name}. You aren't old enough.);
        });
    });
