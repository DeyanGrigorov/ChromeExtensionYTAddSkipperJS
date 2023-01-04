// Query the "Skip Ad" button every 100 milliseconds
setInterval(() => {
    // Check if the "Skip Ad" button exists
    const skipButtonContainer = document.querySelector('.ytp-ad-skip-button-container');
    if (skipButtonContainer) {
      // Find the button element inside the container
      const button = skipButtonContainer.querySelector('.ytp-ad-skip-button');
      if (button) {
        // Click the button
        button.click();
        console.log('Button was clicked!')
      }
    }
  }, 100);
  


//   here is the modified code which should be in acordance with YouTube terms of service:

// // Query the "Skip Ad" button every 100 milliseconds
// setInterval(() => {
//     // Check if the "Skip Ad" button exists
//     const skipButtonContainer = document.querySelector('.ytp-ad-skip-button-container');
//     if (skipButtonContainer) {
//       // Find the countdown timer element
//       const countdownTimer = skipButtonContainer.querySelector('.ytp-ad-duration-remaining');
//       if (countdownTimer) {
//         // Get the countdown timer text
//         const countdownTimerText = countdownTimer.textContent;
//         // Check if the countdown timer has reached 0
//         if (countdownTimerText === '0:00') {
//           // Find the button element inside the container
//           const button = skipButtonContainer.querySelector('.ytp-ad-skip-button');
//           if (button) {
//             // Click the button
//             button.click();
//           }
//         }
//       }
//     }
//   }, 100);
  