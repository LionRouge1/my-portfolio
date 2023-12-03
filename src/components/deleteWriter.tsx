import { useEffect, useState } from "react"
import { DeleteWriterProps } from "../types"

const DeleteWriter = ({title, next} : DeleteWriterProps) => {
  const [job, setJob] = useState(title);
  // console.log(job);
  const speed = 200;
  const writer = (counter = 0) => {
    if(next.length === counter) return setJob(next)
    setJob((prev) => prev + next.charAt(counter))
    setTimeout(() => {
      writer(counter += 1);
    }, speed);
  }

  const deleteJob = (counter = job.length) => {
    if(counter < 0) return writer();
    const text = job.substring(0, counter);
    setJob(text);
    setTimeout(() => {
      deleteJob(counter -= 1);
    }, speed);
  }

  useEffect(() => {
    deleteJob();
  }, [])

  return (
    <h2>{job}</h2>
  )
};

export default DeleteWriter;