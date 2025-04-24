import { useEffect, useState } from 'react';
import { DeleteWriterProps } from '../types';
import Style from '../styles/name.module.scss';

const DeleteWriter = ({ titles }: DeleteWriterProps) => {
  // const [position, setPosition] = useState(0);
  // const [job, setJob] = useState(titles[position]);
  const job = titles[1];
  // console.log(job);
  // const speed = 200;
  // const writer = (counter = 0, next = titles[position + 1] || titles[0]) => {
  //   if (next.length === counter) {
  //     setJob(next);
  //     return setPosition((prev) => (
  //       (prev + 1 >= titles.length) ? 0 : prev + 1
  //     ));
  //   }
  //   setJob((prev) => prev + next.charAt(counter))
  //   setTimeout(() => {
  //     writer(counter += 1);
  //   }, speed);
  // }

  // const deleteJob = (counter = job.length) => {
  //   if (counter < 0) return writer();
  //   const text = job.substring(0, counter);
  //   setJob(text);
  //   setTimeout(() => {
  //     deleteJob(counter -= 1);
  //   }, speed);
  // }

  // useEffect(() => {
  //   const jobTitleCursor = document.getElementById('job-title-cursor') as HTMLElement;
  //   jobTitleCursor.style.display = 'none';
  //   const comma =jobTitleCursor.nextSibling as HTMLElement;
  //   comma.style.display = 'inline'

  //   const setTime = setTimeout(() => {
  //     const jobTitleCursor = document.getElementById('job-title-cursor') as HTMLElement;
  //     jobTitleCursor.style.display = 'inline';
  //     const comma =jobTitleCursor.nextSibling as HTMLElement;
  //     comma.style.display = 'none'
  //     deleteJob();
  //   }, 7500);

  //   return () => clearTimeout(setTime)
  // }, [position])

  return (
    <span id="job-title">
      {job},
      {/* <span id='job-title-cursor' className={Style.nameCur}>|</span> */}
      {/* <span className={Style.comma}>,</span> */}
    </span>
  )
};

export default DeleteWriter;