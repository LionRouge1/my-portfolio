const Job = () => (
  <div>New change</div>
);
// const deleteWriter = async (container, curs, text, counter = text.length) => {
//   let speed = 200;
//   container.textContent
//   if (counter >= 0) {
//     curs.remove();
//     container.innerHTML = text.substring(0, counter);
//     container.appendChild(curs);
//     setTimeout(() => { deleteWriter(container, curs, text, counter -= 1) }, speed);
//   } else {
//     container.innerHTML = ''
//   }
// }

// const visVersa = async () => {
//   for (let job of jobs) {
//     let position = jobs[jobs.indexOf(job) - 1] || job
//     await new Promise((resolve) => setTimeout(resolve, 200 * txt.length));
//     console.log(jobContener.textContent.slice(0, -1), position);
//     if (jobContener.textContent.slice(0, -1) === position) {
//       deleteWriter(jobContener, jobCursor, job)
//       await new Promise(resolve => setTimeout(resolve, 200));
//     } else {
//       if (jobContener.textContent.length === 0) typeWriter(jobContener, jobCursor, job);
//       await new Promise((resolve) => { setTimeout(resolve), 8000 });
//     }
//   }
// }