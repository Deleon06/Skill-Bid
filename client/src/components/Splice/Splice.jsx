function countSplice(array, begin, end, page, direction) {
  console.log(count)

  function helper(array, begin, end){
    let newArr = array.slice(begin, end)
    console.log(newArr)
  
    {jobs.map((job) => (

      <div data-aos="zoom-in-up" data-aos-duration="1000" className="card-container" id={job.projectType} key={job._id}>
        <Link to={`/post/${job._id}`} key={job._id}> 
        <div className="job">
          Name of person: {job.name}
        </div>
        <br />
        <div className="type">
          Type of Job: {job.projectType}
        </div>
        <br />
        <div className="description">
          Job Description: {job.description}
        </div>
        <br />
        <div className="budget">
            Budget: { job.budget}
          </div>
          </Link>
        <div className="bid">
          <Bid />
        </div>
        <button id='editButton'><Link to={`/posts/edit/${job._id}`}>EDIT</Link></button>
        <button value={job._id} onClick={handleSubmit} id='dltButton'>DELETE</button>
      </div>
    ))}
  }  
  if (direction === "up") {
    helper(array, begin, end)
    count += 10;
    page += 1;
    
  } else if (direction === "down") {
    helper(array, begin - 20, end - 20)
    count -= 10;
    page -= 1;
  }
}

//Button code to increment variables. Button code from p1. have to change to onChange/onSubmit
buttonUp.addEventListener("click", () => {
  removeThis()
  if (count > shortened.length) {
    count = 0;
    page = 0;
  } else {
    countSplice(copyData, count, count + 10, page, "up")
  }
})

//Button down to decrement variables. Button code from p1. have to change to onChange/onSubmit
buttonDown.addEventListener("click", () => {
  removeThis()
  if (count < 0) {
    count = 0;
    page = 0;
  } else {
    countSplice(copyData, count, count + 10, page, "down")
  }
})
