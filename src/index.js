let log = {
  next: value => {
    console.log(value);
  },
  done: () => {
    console.log("done");
  }
};

let create = fn =>
  ({ next, done }) => {
    console.log(next, done)
    let stop = fn({
      next, done() {
        done()
        console.log("stop", stop)
        if (stop) stop()
      }
    })

    return stop
  }


let first = source => create(({ next, done }) => {
  return source({
    next: value => {
      console.log(done);

      next(value);
      done();
    },
    done
  });
});

let fromArray = array => ({ next, done }) => {
  let isDone = false;


  let go = () => {
    for (let item of array) {
      next(item);
      console.log(isDone);
      if (isDone) break;
    }
  }

  setTimeout(go, 0)


  return () => {
    console.log("yay");
    isDone = true;
  };
};



first(fromArray([5, 6, 7]))(log);
